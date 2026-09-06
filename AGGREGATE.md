# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-09-06`

## Today

| metric | value |
| --- | --- |
| calls | 6,284 |
| paid calls | 141 |
| free calls | 1,512 |
| revenue | $6.28 |
| cost of goods | $19.87 |
| margin | 32.9% |
| buying direct would be | $17.15 |
| **leCore saving** | **2.73x** |
| distinct payers | 3 |
| quote → paid conversion | 3.1% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 392,954 |
| paid calls | 15,206 |
| revenue | $837.82 |
| average per day | $119.69 |

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
| 2026-09-03 | 67,167 | 2,794 | $231.51 | 33.7% | 1.92x |
| 2026-09-04 | 32,747 | 542 | $3.76 | -168.5% | 2.38x |
| 2026-09-05 | 35,941 | 355 | $10.43 | 3.4% | 2.5x |
| 2026-09-06 | 6,284 | 141 | $6.28 | 32.9% | 2.73x |

## Top models

| model | calls |
| --- | --- |
| `gemini-2.5-flash` | 954 |
| `deepseek/deepseek-v4-flash` | 944 |
| `gpt-4o-mini` | 944 |
| `grok-4.6` | 944 |
| `claude-opus-5` | 462 |
| `claude-sonnet-5` | 284 |
| `google/gemini-2.5-flash` | 113 |
| `openai/gpt-4o-mini` | 12 |
| `Wan-AI/wan2.7-t2v` | 7 |
| `black-forest-labs/FLUX.1.1-pro` | 6 |

## Coverage

- days: 12, since 2026-08-26
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

