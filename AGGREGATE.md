# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-09-09`

## Today

| metric | value |
| --- | --- |
| calls | 26,212 |
| paid calls | 809 |
| free calls | 6,308 |
| revenue | $224.94 |
| cost of goods | $871.73 |
| margin | 72.3% |
| buying direct would be | $866.66 |
| **leCore saving** | **3.85x** |
| distinct payers | 11 |
| quote → paid conversion | 14.2% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 242,607 |
| paid calls | 6,574 |
| revenue | $549.15 |
| average per day | $78.45 |

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
| 2026-09-06 | 35,338 | 1,012 | $62.90 | -7% | 2.15x |
| 2026-09-07 | 26,294 | 1,046 | $15.52 | -419% | 1.51x |
| 2026-09-08 | 18,908 | 16 | $0.08 | -0.6% | 4.27x |
| 2026-09-09 | 26,212 | 809 | $224.94 | 72.3% | 3.85x |

## Top models

| model | calls |
| --- | --- |
| `claude-opus-5` | 1,603 |
| `gpt-4o-mini` | 809 |
| `gemini-2.5-flash` | 519 |
| `claude-sonnet-5` | 518 |
| `google/gemini-2.5-flash` | 445 |
| `grok-4.6` | 412 |
| `deepseek/deepseek-v4-flash` | 361 |
| `deepseek-v4-flash` | 87 |
| `gpt-5.6-luna` | 81 |
| `openai/gpt-oss-120b` | 72 |

## Coverage

- days: 15, since 2026-08-26
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

