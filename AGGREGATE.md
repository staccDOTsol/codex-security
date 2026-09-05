# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-09-05`

## Today

| metric | value |
| --- | --- |
| calls | 33,486 |
| paid calls | 353 |
| free calls | 7,764 |
| revenue | $10.42 |
| cost of goods | $49.53 |
| margin | 3.4% |
| buying direct would be | $26.03 |
| **leCore saving** | **2.5x** |
| distinct payers | 9 |
| quote → paid conversion | 1.5% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 591,401 |
| paid calls | 16,477 |
| revenue | $858.38 |
| average per day | $122.63 |

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
| 2026-09-05 | 33,486 | 353 | $10.42 | 3.4% | 2.5x |

## Top models

| model | calls |
| --- | --- |
| `claude-opus-5` | 2,605 |
| `gemini-2.5-flash` | 1,835 |
| `gpt-4o-mini` | 1,821 |
| `grok-4.6` | 1,805 |
| `deepseek/deepseek-v4-flash` | 1,799 |
| `openai/gpt-4o-mini` | 681 |
| `claude-sonnet-5` | 661 |
| `google/gemini-2.5-flash` | 630 |
| `qwen/qwen-2.5-7b-instruct` | 16 |
| `grok-4.3` | 10 |

## Coverage

- days: 11, since 2026-08-26
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

