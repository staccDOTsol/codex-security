# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-09-03`

## Today

| metric | value |
| --- | --- |
| calls | 43,125 |
| paid calls | 2,419 |
| free calls | 5,129 |
| revenue | $216.99 |
| cost of goods | $411.12 |
| margin | 48% |
| buying direct would be | $414.14 |
| **leCore saving** | **1.91x** |
| distinct payers | 13 |
| quote → paid conversion | 9.3% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 669,877 |
| paid calls | 17,455 |
| revenue | $956.23 |
| average per day | $136.60 |

## Daily history

| day | calls | paid | revenue | margin | leCore saving |
| --- | --- | --- | --- | --- | --- |
| 2026-08-26 | 33,047 | 243 | $9.82 | 61.6% | 3.58x |
| 2026-08-27 | 34,584 | 151 | $15.24 | 82.3% | 3.92x |
| 2026-08-28 | 91,950 | 1,798 | $123.48 | 43% | 3.37x |
| 2026-08-29 | 76,801 | 450 | $3.07 | 0.8% | 8.33x |
| 2026-08-30 | 207,186 | 1,414 | $26.85 | 45.5% | 2.27x |
| 2026-08-31 | 81,685 | 1,353 | $33.63 | 60.5% | 2.25x |
| 2026-09-01 | 109,689 | 8,851 | $445.58 | 54% | 2.61x |
| 2026-09-02 | 59,441 | 1,170 | $106.63 | 82.2% | 2.92x |
| 2026-09-03 | 43,125 | 2,419 | $216.99 | 48% | 1.91x |

## Top models

| model | calls |
| --- | --- |
| `gpt-4o-mini` | 6,776 |
| `openai/gpt-4o-mini` | 5,454 |
| `abliterated-model-large-v2` | 2,630 |
| `deepseek/deepseek-v4-flash` | 1,907 |
| `gemini-2.5-flash` | 1,765 |
| `grok-4.6` | 1,750 |
| `claude-sonnet-5` | 702 |
| `moonshotai/kimi-k3` | 614 |
| `google/gemini-2.5-flash` | 444 |
| `anthropic/claude-sonnet-5` | 258 |

## Coverage

- days: 9, since 2026-08-26
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

