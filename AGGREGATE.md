# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-18`

## Today

| metric | value |
| --- | --- |
| calls | 19,469 |
| paid calls | 2,172 |
| free calls | 4,856 |
| revenue | $160.00 |
| cost of goods | $65.57 |
| margin | 59% |
| buying direct would be | $997.28 |
| **leCore saving** | **6.23x** |
| distinct payers | 10 |
| quote → paid conversion | 26.9% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 84,464 |
| paid calls | 4,374 |
| revenue | $286.81 |
| average per day | $143.40 |

## Daily history

| day | calls | paid | revenue | margin | leCore saving |
| --- | --- | --- | --- | --- | --- |
| 2026-08-17 | 64,995 | 2,202 | $126.81 | 63.8% | 3.42x |
| 2026-08-18 | 19,469 | 2,172 | $160.00 | 59% | 6.23x |

## Top models

| model | calls |
| --- | --- |
| `openai/gpt-5.6-sol` | 496 |
| `anthropic/claude-sonnet-4` | 462 |
| `openai/gpt-4o-mini` | 461 |
| `x-ai/grok-4.6` | 460 |
| `google/gemini-2.5-flash` | 458 |
| `deepseek/deepseek-v4-pro-0813` | 179 |
| `deepseek/deepseek-v4-flash` | 140 |
| `z-ai/glm-5` | 67 |
| `z-ai/glm-4.7` | 59 |
| `bytedance-seed/seed-2.0-code` | 59 |

## Coverage

- days: 2, since 2026-08-17
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

