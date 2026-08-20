# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-20`

## Today

| metric | value |
| --- | --- |
| calls | 188 |
| paid calls | 2 |
| free calls | 25 |
| revenue | $0.02 |
| cost of goods | $0.02 |
| margin | -25.4% |
| buying direct would be | $0.03 |
| **leCore saving** | **1.78x** |
| distinct payers | 1 |
| quote → paid conversion | 1.5% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 963 |
| paid calls | 5 |
| revenue | $0.31 |
| average per day | $0.15 |

## Daily history

| day | calls | paid | revenue | margin | leCore saving |
| --- | --- | --- | --- | --- | --- |
| 2026-08-19 | 775 | 3 | $0.29 | 63.3% | 1.6x |
| 2026-08-20 | 188 | 2 | $0.02 | -25.4% | 1.78x |

## Top models

| model | calls |
| --- | --- |
| `x-ai/grok-4.6` | 1,503 |
| `openai/gpt-4o-mini` | 1,472 |
| `google/gemini-2.5-flash` | 1,445 |
| `anthropic/claude-sonnet-4` | 1,438 |
| `google/gemini-3.7-flash` | 904 |
| `deepseek/deepseek-v4-pro-0813` | 420 |
| `anthropic/claude-sonnet-5` | 214 |
| `inclusionai/ling-3.0-flash` | 121 |
| `bytedance-seed/seed-2.0-mini` | 118 |
| `z-ai/glm-4.6v` | 111 |

## Coverage

- days: 2, since 2026-08-19
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

