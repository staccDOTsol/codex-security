# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-19`

## Today

| metric | value |
| --- | --- |
| calls | 7,746 |
| paid calls | 111 |
| free calls | 3,414 |
| revenue | $4.51 |
| cost of goods | $4.06 |
| margin | 10.1% |
| buying direct would be | $8.34 |
| **leCore saving** | **1.85x** |
| distinct payers | 1 |
| quote → paid conversion | 8.2% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 143,102 |
| paid calls | 6,666 |
| revenue | $878.23 |
| average per day | $292.74 |

## Daily history

| day | calls | paid | revenue | margin | leCore saving |
| --- | --- | --- | --- | --- | --- |
| 2026-08-17 | 64,995 | 2,202 | $126.81 | 63.8% | 3.42x |
| 2026-08-18 | 70,361 | 4,353 | $746.91 | 37.9% | 2.7x |
| 2026-08-19 | 7,746 | 111 | $4.51 | 10.1% | 1.85x |

## Top models

| model | calls |
| --- | --- |
| `openai/gpt-4o-mini` | 311 |
| `x-ai/grok-4.6` | 309 |
| `google/gemini-2.5-flash` | 309 |
| `anthropic/claude-sonnet-4` | 308 |
| `z-ai/glm-5.3` | 116 |
| `deepseek/deepseek-v4-flash` | 93 |
| `deepseek/deepseek-v4-pro-0813` | 15 |

## Coverage

- days: 3, since 2026-08-17
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

