# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-09-02`

## Today

| metric | value |
| --- | --- |
| calls | 41,918 |
| paid calls | 1,028 |
| free calls | 10,989 |
| revenue | $99.86 |
| cost of goods | $181.11 |
| margin | 84.1% |
| buying direct would be | $292.43 |
| **leCore saving** | **2.93x** |
| distinct payers | 9 |
| quote → paid conversion | 3.9% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 643,813 |
| paid calls | 15,045 |
| revenue | $747.71 |
| average per day | $106.82 |

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
| 2026-09-02 | 41,918 | 1,028 | $99.86 | 84.1% | 2.93x |

## Top models

| model | calls |
| --- | --- |
| `openai/gpt-4o-mini` | 5,097 |
| `x-ai/grok-4.6` | 2,631 |
| `google/gemini-2.5-flash` | 2,094 |
| `anthropic/claude-sonnet-4` | 1,669 |
| `deepseek/deepseek-v4-flash` | 1,668 |
| `abliterated-model-large-v2` | 644 |
| `anthropic/claude-sonnet-5` | 621 |
| `deepseek/deepseek-v4-pro-0813` | 245 |
| `openai/gpt-5.6-sol-pro` | 180 |
| `x-ai/grok-4.3` | 156 |

## Coverage

- days: 8, since 2026-08-26
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

