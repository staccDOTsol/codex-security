# Running Codex Security through openzoo

Point `codex-security` at a pay-per-call gateway instead of an OpenAI account.
No OpenAI key, no org TPM ceiling, no "you have no credits remaining" at repo 9
of 34.

Everything below was found the hard way against `@openai/codex-security@0.1.14`.
The failures are documented because every one of them looks like something else.

---

## Why bother

A security scan is the most context-hungry workload there is: the agent reads a
repository, then re-sends what it has read on every turn of its loop. One repo
in our queue burned **1,951,113 prompt tokens** before OpenAI's per-org TPM
limit cut it off.

Two things change when the calls go through openzoo:

- **No org rate limit and no prepaid-credit wall.** Calls settle per request
  from a wallet, so a 34-repo bulk scan does not die at repo 9.
- **Bodies over 16KB are content-hashed and bound once.** A re-sent body is
  recognised and not re-uploaded, which is the exact shape of an agent loop.

Whether that second one saves you money depends on how much your agent actually
repeats itself. Measure it — see [Receipts](#receipts) — do not assume it.

---

## Setup

**1. Run the openzoo proxy.** It speaks OpenAI on `localhost:8402/v1` and pays
per call.

```bash
npx openzoo
```

**2. Point Codex Security at it.** Codex will not accept a plain base URL for
this, because its provider table pins `wire_api: "responses"` — see
[The four things that break](#the-four-things-that-break). Define a provider:

```bash
export OPENAI_API_KEY=sk-openzoo    # makes the CLI choose api-key auth
export OPENZOO_KEY=sk-openzoo       # what the Codex runtime actually reads

codex-security scan . \
  --codex 'model_provider="openzoo"' \
  --codex 'model_providers.openzoo={name="openzoo",base_url="http://127.0.0.1:8402/v1",env_key="OPENZOO_KEY",wire_api="responses"}'
```

Both variables are required and they are **not** interchangeable. The CLI reads
`OPENAI_API_KEY` to pick api-key auth, then **strips it** from the environment
of the Codex runtime it spawns. A provider whose `env_key` is `OPENAI_API_KEY`
therefore fails with `Missing environment variable: OPENAI_API_KEY` even though
you exported it. Use a name the CLI does not manage.

**3. Bulk scan.** `bulk-scan` takes a CSV and is resumable.

```bash
codex-security bulk-scan repositories.csv \
  --output-dir /path/outside/the/repos \
  --workers 6 \
  --codex 'model_provider="openzoo"' \
  --codex 'model_providers.openzoo={name="openzoo",base_url="http://127.0.0.1:8402/v1",env_key="OPENZOO_KEY",wire_api="responses"}'
```

---

## The four things that break

Each of these fails with a message that points somewhere else. In order of
discovery:

### 1. `--provider openrouter` collides with `--codex`

`--provider openrouter` writes `model_providers.openrouter` itself, so trying to
override its `base_url` with `--codex` errors with `Duplicate --codex key`.
Define your own provider instead of patching theirs.

### 2. It speaks the Responses API, not chat completions

The provider table pins `wire_api: "responses"`. A gateway that serves only
`/v1/chat/completions` returns 404, and Codex then falls back to
`wss://api.openai.com/v1/responses` — **bypassing your proxy entirely** while
reporting `auth error: 401, invalid_api_key`, which reads like a credentials
problem and is not one.

Symptom that you are still being bypassed: your proxy log stays silent while the
scan clearly does something.

### 3. Responses is a STREAM, and one event is mandatory

A Responses client opens an SSE stream and blocks until `response.completed`.
Return a single JSON object and every repo fails identically with:

```
stream disconnected before completion: stream closed before response.completed
```

The full sequence a client expects:

```
response.created → response.in_progress → response.output_item.added
→ response.content_part.added → response.output_text.delta
→ response.output_text.done → response.content_part.done
→ response.output_item.done → response.completed
```

### 4. Tools are NOT in the `tools` parameter

This is the one that costs a day. Codex sends `tools: []` and declares its
capability as an **input item**:

```jsonc
{
  "type": "additional_tools",
  "role": "developer",
  "tools": [
    { "type": "namespace", "name": "functions", "tools": [
      { "type": "custom", "name": "exec", "description": "Run JavaScript ..." },
      { "type": "function", "name": "wait", "parameters": { ... } }
    ]},
    { "type": "namespace", "name": "collaboration", "tools": [ ... ] }
  ]
}
```

Two shapes chat-completions does not have:

- **`namespace`** — tools nested in a named bag.
- **`custom`** — a *freeform* tool whose input is raw text, not JSON arguments.
  `exec` is one, and it is how Codex runs everything; shell happens inside it
  via `await tools.exec_command({cmd})`.

Forward that item as a message and the model is handed no tools at all. It
answers in prose, never runs a command, and the scan dies with:

```
Scan agent did not create required draft artifacts: scan-manifest.json,
findings.json, coverage.json. Check that the scan agent can run shell commands
```

which sounds like a filesystem permissions problem. It is not.

A translating proxy must flatten the namespaces, wrap each `custom` tool as a
function with a single string property, and unwrap it on the way back into a
`custom_tool_call` carrying raw text — including the streaming variants
`response.custom_tool_call_input.delta` / `.done`.

`openzoo/responses-shim.js` in this repo is a working implementation.

---

## Model resolution

Codex sends `gpt-5.6-sol` regardless of what the CSV says — the per-row `model`
column is not honoured for the request. If your gateway resolves unknown ids to
a default, **every scan silently runs on that default**. We lost hours to scans
that reported `gpt-5.6-sol` while actually running on `deepseek-v4-pro`.

Check your proxy log for the substitution line before trusting any result.

---

## Receipts

Snapshot the session either side of a run and diff it:

```bash
curl -s localhost:8402/v1/session   # paid calls, spent, cogs, direct
curl -s localhost:8402/v1/credits   # prepaid balance
```

`direct` is what the same tokens would have cost buying from the provider, so
`direct / spent` is the multiple. Report it honestly: a multiple below 1.0 means
the agent is not repeating itself enough for binding to pay off, and that is a
result worth publishing too.

Live numbers for this repo's own run: [STATS.md](../STATS.md).
