# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-20`

## Today

| metric | value |
| --- | --- |
| calls | 42,380 |
| paid calls | 5,778 |
| free calls | 10,422 |
| revenue | $96.16 |
| cost of goods | $68.72 |
| margin | 28.5% |
| buying direct would be | $107.60 |
| **leCore saving** | **1.12x** |
| distinct payers | 6 |
| quote → paid conversion | 36.6% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 289,910 |
| paid calls | 14,023 |
| revenue | $1,227.49 |
| average per day | $306.87 |

## Daily history

| day | calls | paid | revenue | margin | leCore saving |
| --- | --- | --- | --- | --- | --- |
| 2026-08-17 | 64,995 | 2,202 | $126.81 | 63.8% | 3.42x |
| 2026-08-18 | 70,361 | 4,353 | $746.91 | 37.9% | 2.7x |
| 2026-08-19 | 112,174 | 1,690 | $257.61 | 27.3% | 1.36x |
| 2026-08-20 | 42,380 | 5,778 | $96.16 | 28.5% | 1.12x |

## Top models

| model | calls |
| --- | --- |
| `google/gemini-3.1-flash-lite-preview` | 1,450 |
| `google/gemma-4-31b-it:free` | 448 |
| `openai/gpt-5.6-luna` | 348 |
| `google/gemini-3.5-flash` | 308 |
| `openai/gpt-5.4` | 308 |
| `anthropic/claude-opus-5` | 306 |
| `x-ai/grok-4.6` | 292 |
| `nvidia/nemotron-3-super-120b-a12b:free` | 248 |
| `google/gemma-4-26b-a4b-it:free` | 242 |
| `anthropic/claude-sonnet-5` | 232 |

## Coverage

- days: 4, since 2026-08-17
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

