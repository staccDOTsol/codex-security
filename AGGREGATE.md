# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-18`

## Today

| metric | value |
| --- | --- |
| calls | 19,973 |
| paid calls | 2,297 |
| free calls | 4,930 |
| revenue | $185.16 |
| cost of goods | $82.34 |
| margin | 55.5% |
| buying direct would be | $1,047.37 |
| **leCore saving** | **5.66x** |
| distinct payers | 10 |
| quote → paid conversion | 27.6% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 84,968 |
| paid calls | 4,499 |
| revenue | $311.97 |
| average per day | $155.98 |

## Daily history

| day | calls | paid | revenue | margin | leCore saving |
| --- | --- | --- | --- | --- | --- |
| 2026-08-17 | 64,995 | 2,202 | $126.81 | 63.8% | 3.42x |
| 2026-08-18 | 19,973 | 2,297 | $185.16 | 55.5% | 5.66x |

## Top models

| model | calls |
| --- | --- |
| `openai/gpt-5.6-sol` | 745 |
| `anthropic/claude-sonnet-4` | 472 |
| `openai/gpt-4o-mini` | 471 |
| `google/gemini-2.5-flash` | 469 |
| `x-ai/grok-4.6` | 469 |
| `deepseek/deepseek-v4-pro-0813` | 150 |
| `deepseek/deepseek-v4-flash` | 68 |
| `z-ai/glm-4.7` | 31 |
| `z-ai/glm-5` | 30 |
| `moonshotai/kimi-k2.6` | 27 |

## Coverage

- days: 2, since 2026-08-17
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

