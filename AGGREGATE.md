# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-09-04`

## Today

| metric | value |
| --- | --- |
| calls | 11,681 |
| paid calls | 10 |
| free calls | 2,187 |
| revenue | $0.05 |
| cost of goods | $0.28 |
| margin | -259.3% |
| buying direct would be | $0.24 |
| **leCore saving** | **5.11x** |
| distinct payers | 3 |
| quote → paid conversion | 0.1% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 613,650 |
| paid calls | 16,042 |
| revenue | $847.32 |
| average per day | $121.05 |

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
| 2026-09-04 | 11,681 | 10 | $0.05 | -259.3% | 5.11x |

## Top models

| model | calls |
| --- | --- |
| `gpt-4o-mini` | 4,226 |
| `gemini-2.5-flash` | 1,293 |
| `grok-4.6` | 1,281 |
| `deepseek/deepseek-v4-flash` | 1,280 |
| `openai/gpt-4o-mini` | 474 |
| `claude-sonnet-5` | 371 |
| `google/gemini-2.5-flash` | 177 |
| `black-forest-labs/FLUX.1.1-pro` | 8 |
| `Wan-AI/wan2.7-t2v` | 8 |

## Coverage

- days: 10, since 2026-08-26
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

