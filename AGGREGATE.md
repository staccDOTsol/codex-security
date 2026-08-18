# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-18`

## Today

| metric | value |
| --- | --- |
| calls | 19,577 |
| paid calls | 2,200 |
| free calls | 4,873 |
| revenue | $165.89 |
| cost of goods | $69.49 |
| margin | 58.1% |
| buying direct would be | $1,005.47 |
| **leCore saving** | **6.06x** |
| distinct payers | 10 |
| quote → paid conversion | 27.1% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 84,572 |
| paid calls | 4,402 |
| revenue | $292.70 |
| average per day | $146.35 |

## Daily history

| day | calls | paid | revenue | margin | leCore saving |
| --- | --- | --- | --- | --- | --- |
| 2026-08-17 | 64,995 | 2,202 | $126.81 | 63.8% | 3.42x |
| 2026-08-18 | 19,577 | 2,200 | $165.89 | 58.1% | 6.06x |

## Top models

| model | calls |
| --- | --- |
| `openai/gpt-5.6-sol` | 554 |
| `anthropic/claude-sonnet-4` | 463 |
| `openai/gpt-4o-mini` | 462 |
| `x-ai/grok-4.6` | 461 |
| `google/gemini-2.5-flash` | 460 |
| `deepseek/deepseek-v4-pro-0813` | 177 |
| `deepseek/deepseek-v4-flash` | 123 |
| `z-ai/glm-5` | 58 |
| `z-ai/glm-4.7` | 52 |
| `bytedance-seed/seed-2.0-code` | 52 |

## Coverage

- days: 2, since 2026-08-17
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

