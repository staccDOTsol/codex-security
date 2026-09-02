# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-09-02`

## Today

| metric | value |
| --- | --- |
| calls | 58,571 |
| paid calls | 1,167 |
| free calls | 13,727 |
| revenue | $106.61 |
| cost of goods | $199.16 |
| margin | 82.3% |
| buying direct would be | $311.28 |
| **leCore saving** | **2.92x** |
| distinct payers | 12 |
| quote → paid conversion | 3% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 660,466 |
| paid calls | 15,184 |
| revenue | $754.46 |
| average per day | $107.78 |

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
| 2026-09-02 | 58,571 | 1,167 | $106.61 | 82.3% | 2.92x |

## Top models

| model | calls |
| --- | --- |
| `openai/gpt-4o-mini` | 6,005 |
| `x-ai/grok-4.6` | 2,719 |
| `google/gemini-2.5-flash` | 2,363 |
| `anthropic/claude-sonnet-4` | 1,728 |
| `deepseek/deepseek-v4-flash` | 1,727 |
| `anthropic/claude-sonnet-5` | 855 |
| `abliterated-model-large-v2` | 662 |
| `deepseek/deepseek-v4-pro-0813` | 243 |
| `openai/gpt-5.6-sol-pro` | 178 |
| `x-ai/grok-4.3` | 106 |

## Coverage

- days: 8, since 2026-08-26
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

