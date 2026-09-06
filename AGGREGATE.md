# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-09-06`

## Today

| metric | value |
| --- | --- |
| calls | 33,047 |
| paid calls | 560 |
| free calls | 11,538 |
| revenue | $53.62 |
| cost of goods | $211.60 |
| margin | 5.4% |
| buying direct would be | $121.68 |
| **leCore saving** | **2.27x** |
| distinct payers | 6 |
| quote → paid conversion | 3% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 419,717 |
| paid calls | 15,625 |
| revenue | $885.16 |
| average per day | $126.45 |

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
| 2026-09-06 | 33,047 | 560 | $53.62 | 5.4% | 2.27x |

## Top models

| model | calls |
| --- | --- |
| `claude-fable-5` | 3,495 |
| `gemini-2.5-flash` | 1,496 |
| `deepseek/deepseek-v4-flash` | 1,475 |
| `gpt-4o-mini` | 1,470 |
| `grok-4.6` | 1,466 |
| `claude-opus-5` | 786 |
| `google/gemini-2.5-flash` | 526 |
| `claude-sonnet-5` | 372 |
| `claude-fable-5.1` | 130 |
| `qwen/qwen-2.5-7b-instruct` | 119 |

## Coverage

- days: 12, since 2026-08-26
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

