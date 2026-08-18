# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-18`

## Today

| metric | value |
| --- | --- |
| calls | 19,734 |
| paid calls | 2,241 |
| free calls | 4,896 |
| revenue | $174.08 |
| cost of goods | $74.95 |
| margin | 56.9% |
| buying direct would be | $1,020.92 |
| **leCore saving** | **5.86x** |
| distinct payers | 10 |
| quote → paid conversion | 27.4% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 84,729 |
| paid calls | 4,443 |
| revenue | $300.89 |
| average per day | $150.44 |

## Daily history

| day | calls | paid | revenue | margin | leCore saving |
| --- | --- | --- | --- | --- | --- |
| 2026-08-17 | 64,995 | 2,202 | $126.81 | 63.8% | 3.42x |
| 2026-08-18 | 19,734 | 2,241 | $174.08 | 56.9% | 5.86x |

## Top models

| model | calls |
| --- | --- |
| `openai/gpt-5.6-sol` | 636 |
| `anthropic/claude-sonnet-4` | 464 |
| `openai/gpt-4o-mini` | 463 |
| `google/gemini-2.5-flash` | 461 |
| `x-ai/grok-4.6` | 461 |
| `deepseek/deepseek-v4-pro-0813` | 167 |
| `deepseek/deepseek-v4-flash` | 100 |
| `z-ai/glm-5` | 49 |
| `z-ai/glm-4.7` | 46 |
| `bytedance-seed/seed-2.0-code` | 40 |

## Coverage

- days: 2, since 2026-08-17
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

