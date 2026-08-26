# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-26`

## Today

| metric | value |
| --- | --- |
| calls | 1,240 |
| paid calls | 20 |
| free calls | 256 |
| revenue | $0.10 |
| cost of goods | $0.12 |
| margin | -5.3% |
| buying direct would be | $0.11 |
| **leCore saving** | **1.17x** |
| distinct payers | 3 |
| quote → paid conversion | 2.5% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 1,240 |
| paid calls | 20 |
| revenue | $0.10 |
| average per day | $0.10 |

## Daily history

| day | calls | paid | revenue | margin | leCore saving |
| --- | --- | --- | --- | --- | --- |
| 2026-08-26 | 1,240 | 20 | $0.10 | -5.3% | 1.17x |

## Top models

| model | calls |
| --- | --- |
| `openai/gpt-4o-mini` | 163 |
| `x-ai/grok-4.6` | 161 |
| `google/gemini-2.5-flash` | 140 |
| `anthropic/claude-sonnet-4` | 139 |
| `upstage/solar-pro4` | 139 |
| `anthropic/claude-sonnet-5` | 34 |
| `google/gemini-3.7-flash` | 8 |
| `nvidia/nemotron-3.5-lightning` | 5 |

## Coverage

- days: 1, since 2026-08-26
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

