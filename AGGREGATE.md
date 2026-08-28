# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-28`

## Today

| metric | value |
| --- | --- |
| calls | 84,146 |
| paid calls | 1,776 |
| free calls | 29,285 |
| revenue | $123.10 |
| cost of goods | $329.36 |
| margin | 43.1% |
| buying direct would be | $414.84 |
| **leCore saving** | **3.37x** |
| distinct payers | 16 |
| quote → paid conversion | 6.5% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 151,777 |
| paid calls | 2,170 |
| revenue | $148.16 |
| average per day | $49.39 |

## Daily history

| day | calls | paid | revenue | margin | leCore saving |
| --- | --- | --- | --- | --- | --- |
| 2026-08-26 | 33,047 | 243 | $9.82 | 61.6% | 3.58x |
| 2026-08-27 | 34,584 | 151 | $15.24 | 82.3% | 3.92x |
| 2026-08-28 | 84,146 | 1,776 | $123.10 | 43.1% | 3.37x |

## Top models

| model | calls |
| --- | --- |
| `x-ai/grok-4.3` | 1,332 |
| `x-ai/grok-4.6` | 1,120 |
| `anthropic/claude-sonnet-4` | 898 |
| `upstage/solar-pro4` | 895 |
| `google/gemini-2.5-flash` | 895 |
| `openai/gpt-4o-mini` | 893 |
| `anthropic/claude-sonnet-5` | 590 |
| `anthropic/claude-opus-5` | 342 |
| `deepseek/deepseek-v4-flash-0731` | 322 |
| `z-ai/glm-5.3-flash` | 187 |

## Coverage

- days: 3, since 2026-08-26
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

