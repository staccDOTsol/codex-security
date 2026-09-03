# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-09-03`

## Today

| metric | value |
| --- | --- |
| calls | 54,480 |
| paid calls | 2,720 |
| free calls | 6,338 |
| revenue | $224.85 |
| cost of goods | $427.46 |
| margin | 42.2% |
| buying direct would be | $431.39 |
| **leCore saving** | **1.92x** |
| distinct payers | 16 |
| quote → paid conversion | 8.6% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 681,232 |
| paid calls | 17,756 |
| revenue | $964.08 |
| average per day | $137.73 |

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
| 2026-09-03 | 54,480 | 2,720 | $224.85 | 42.2% | 1.92x |

## Top models

| model | calls |
| --- | --- |
| `gpt-4o-mini` | 9,051 |
| `openai/gpt-4o-mini` | 5,204 |
| `abliterated-model-large-v2` | 2,554 |
| `deepseek/deepseek-v4-flash` | 1,896 |
| `gemini-2.5-flash` | 1,651 |
| `grok-4.6` | 1,629 |
| `claude-sonnet-5` | 1,144 |
| `deepseek/deepseek-v4-flash-0731` | 609 |
| `moonshotai/kimi-k3` | 596 |
| `google/gemini-2.5-flash` | 442 |

## Coverage

- days: 9, since 2026-08-26
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

