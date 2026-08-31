# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-31`

## Today

| metric | value |
| --- | --- |
| calls | 74,245 |
| paid calls | 1,289 |
| free calls | 13,599 |
| revenue | $32.99 |
| cost of goods | $74.11 |
| margin | 60.4% |
| buying direct would be | $74.11 |
| **leCore saving** | **2.25x** |
| distinct payers | 11 |
| quote → paid conversion | 2.3% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 517,813 |
| paid calls | 5,345 |
| revenue | $211.45 |
| average per day | $35.24 |

## Daily history

| day | calls | paid | revenue | margin | leCore saving |
| --- | --- | --- | --- | --- | --- |
| 2026-08-26 | 33,047 | 243 | $9.82 | 61.6% | 3.58x |
| 2026-08-27 | 34,584 | 151 | $15.24 | 82.3% | 3.92x |
| 2026-08-28 | 91,950 | 1,798 | $123.48 | 43% | 3.37x |
| 2026-08-29 | 76,801 | 450 | $3.07 | 0.8% | 8.33x |
| 2026-08-30 | 207,186 | 1,414 | $26.85 | 45.5% | 2.27x |
| 2026-08-31 | 74,245 | 1,289 | $32.99 | 60.4% | 2.25x |

## Top models

| model | calls |
| --- | --- |
| `google/gemini-2.5-flash` | 8,549 |
| `x-ai/grok-4.6` | 4,463 |
| `openai/gpt-4o-mini` | 4,361 |
| `upstage/solar-pro4` | 1,397 |
| `anthropic/claude-sonnet-4` | 1,395 |
| `deepseek/deepseek-v4-pro-0813` | 266 |
| `x-ai/grok-4.5` | 128 |
| `Wan-AI/wan2.7-t2v` | 34 |
| `black-forest-labs/FLUX.1.1-pro` | 33 |
| `anthropic/claude-sonnet-5` | 18 |

## Coverage

- days: 6, since 2026-08-26
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

