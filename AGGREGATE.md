# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-09-09`

## Today

| metric | value |
| --- | --- |
| calls | 8,254 |
| paid calls | 22 |
| free calls | 3,957 |
| revenue | $4.47 |
| cost of goods | $20.40 |
| margin | 60.2% |
| buying direct would be | $17.43 |
| **leCore saving** | **3.9x** |
| distinct payers | 4 |
| quote → paid conversion | 0.8% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 224,649 |
| paid calls | 5,787 |
| revenue | $328.67 |
| average per day | $46.95 |

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
| 2026-09-09 | 8,254 | 22 | $4.47 | 60.2% | 3.9x |

## Top models

| model | calls |
| --- | --- |
| `grok-4.6` | 526 |
| `gemini-2.5-flash` | 518 |
| `deepseek/deepseek-v4-flash` | 490 |
| `gpt-4o-mini` | 490 |
| `claude-sonnet-5` | 457 |
| `google/gemini-2.5-flash` | 239 |
| `claude-opus-5` | 176 |
| `openai/gpt-oss-120b` | 72 |
| `openai/gpt-4o-mini` | 42 |
| `gemini-3-6-flash` | 36 |

## Coverage

- days: 15, since 2026-08-26
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

