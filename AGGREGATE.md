# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-09-12`

## Today

| metric | value |
| --- | --- |
| calls | 4,702 |
| paid calls | 3 |
| free calls | 24 |
| revenue | $0.02 |
| cost of goods | $0.04 |
| margin | -96.2% |
| buying direct would be | $0.02 |
| **leCore saving** | **1.52x** |
| distinct payers | 2 |
| quote → paid conversion | 0.1% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 129,865 |
| paid calls | 3,108 |
| revenue | $320.42 |
| average per day | $45.77 |

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
| 2026-09-09 | 36,874 | 1,013 | $241.10 | 69.4% | 3.76x |
| 2026-09-10 | 4,920 | 4 | $0.01 | -23.9% | 7.17x |
| 2026-09-11 | 2,829 | 14 | $0.80 | 22.4% | 2.15x |
| 2026-09-12 | 4,702 | 3 | $0.02 | -96.2% | 1.52x |

## Top models

| model | calls |
| --- | --- |
| `claude-sonnet-5` | 4,210 |
| `gpt-4o-mini` | 156 |
| `deepseek-chat` | 102 |
| `deepseek/deepseek-v4-flash` | 72 |
| `gemini-3-6-flash` | 36 |
| `grok-4.6` | 36 |
| `deepseek-v4-pro` | 36 |
| `qwen/qwen-2.5-7b-instruct` | 3 |

## Coverage

- days: 18, since 2026-08-26
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

