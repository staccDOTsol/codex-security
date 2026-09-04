# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-09-04`

## Today

| metric | value |
| --- | --- |
| calls | 17,540 |
| paid calls | 36 |
| free calls | 3,979 |
| revenue | $0.16 |
| cost of goods | $0.89 |
| margin | -335% |
| buying direct would be | $0.40 |
| **leCore saving** | **2.51x** |
| distinct payers | 7 |
| quote → paid conversion | 0.3% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 619,509 |
| paid calls | 16,068 |
| revenue | $847.43 |
| average per day | $121.06 |

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
| 2026-09-04 | 17,540 | 36 | $0.16 | -335% | 2.51x |

## Top models

| model | calls |
| --- | --- |
| `gpt-4o-mini` | 4,635 |
| `gemini-2.5-flash` | 1,703 |
| `deepseek/deepseek-v4-flash` | 1,679 |
| `grok-4.6` | 1,676 |
| `openai/gpt-4o-mini` | 603 |
| `claude-sonnet-5` | 457 |
| `google/gemini-2.5-flash` | 329 |
| `gemma-3-27b-it` | 12 |
| `black-forest-labs/FLUX.1.1-pro` | 10 |
| `Wan-AI/wan2.7-t2v` | 10 |

## Coverage

- days: 10, since 2026-08-26
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

