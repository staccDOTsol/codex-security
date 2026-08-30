# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-30`

## Today

| metric | value |
| --- | --- |
| calls | 18,255 |
| paid calls | 95 |
| free calls | 6,479 |
| revenue | $0.87 |
| cost of goods | $3.74 |
| margin | -42.9% |
| buying direct would be | $3.74 |
| **leCore saving** | **4.28x** |
| distinct payers | 3 |
| quote → paid conversion | 1.7% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 254,637 |
| paid calls | 2,737 |
| revenue | $152.49 |
| average per day | $30.50 |

## Daily history

| day | calls | paid | revenue | margin | leCore saving |
| --- | --- | --- | --- | --- | --- |
| 2026-08-26 | 33,047 | 243 | $9.82 | 61.6% | 3.58x |
| 2026-08-27 | 34,584 | 151 | $15.24 | 82.3% | 3.92x |
| 2026-08-28 | 91,950 | 1,798 | $123.48 | 43% | 3.37x |
| 2026-08-29 | 76,801 | 450 | $3.07 | 0.8% | 8.33x |
| 2026-08-30 | 18,255 | 95 | $0.87 | -42.9% | 4.28x |

## Top models

| model | calls |
| --- | --- |
| `openai/gpt-4o-mini` | 1,432 |
| `x-ai/grok-4.6` | 555 |
| `upstage/solar-pro4` | 397 |
| `google/gemini-2.5-flash` | 396 |
| `anthropic/claude-sonnet-4` | 396 |
| `anthropic/claude-sonnet-5` | 26 |
| `nvidia/nemotron-3.5-lightning` | 1 |
| `qwen/qwen3.7-flash` | 1 |

## Coverage

- days: 5, since 2026-08-26
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

