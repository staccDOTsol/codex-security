# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-19`

## Today

| metric | value |
| --- | --- |
| calls | 2,018 |
| paid calls | 59 |
| free calls | 558 |
| revenue | $1.81 |
| cost of goods | $1.55 |
| margin | 14.2% |
| buying direct would be | $4.34 |
| **leCore saving** | **2.4x** |
| distinct payers | 1 |
| quote → paid conversion | 8% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 137,374 |
| paid calls | 6,614 |
| revenue | $875.53 |
| average per day | $291.84 |

## Daily history

| day | calls | paid | revenue | margin | leCore saving |
| --- | --- | --- | --- | --- | --- |
| 2026-08-17 | 64,995 | 2,202 | $126.81 | 63.8% | 3.42x |
| 2026-08-18 | 70,361 | 4,353 | $746.91 | 37.9% | 2.7x |
| 2026-08-19 | 2,018 | 59 | $1.81 | 14.2% | 2.4x |

## Top models

| model | calls |
| --- | --- |
| `openai/gpt-4o-mini` | 171 |
| `x-ai/grok-4.6` | 170 |
| `google/gemini-2.5-flash` | 170 |
| `anthropic/claude-sonnet-4` | 169 |
| `z-ai/glm-5.3` | 85 |
| `deepseek/deepseek-v4-flash` | 19 |
| `deepseek/deepseek-v4-pro-0813` | 15 |

## Coverage

- days: 3, since 2026-08-17
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

