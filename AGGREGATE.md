# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-09-03`

## Today

| metric | value |
| --- | --- |
| calls | 65,715 |
| paid calls | 2,794 |
| free calls | 7,910 |
| revenue | $231.51 |
| cost of goods | $440.11 |
| margin | 33.7% |
| buying direct would be | $443.53 |
| **leCore saving** | **1.92x** |
| distinct payers | 17 |
| quote → paid conversion | 7.6% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 692,467 |
| paid calls | 17,830 |
| revenue | $970.75 |
| average per day | $138.68 |

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
| 2026-09-03 | 65,715 | 2,794 | $231.51 | 33.7% | 1.92x |

## Top models

| model | calls |
| --- | --- |
| `gpt-4o-mini` | 10,710 |
| `openai/gpt-4o-mini` | 4,877 |
| `abliterated-model-large-v2` | 2,625 |
| `deepseek/deepseek-v4-flash` | 1,808 |
| `gemini-2.5-flash` | 1,577 |
| `grok-4.6` | 1,551 |
| `claude-sonnet-5` | 1,310 |
| `deepseek/deepseek-v4-flash-0731` | 609 |
| `google/gemini-2.5-flash` | 459 |
| `anthropic/claude-sonnet-4.6` | 246 |

## Coverage

- days: 9, since 2026-08-26
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

