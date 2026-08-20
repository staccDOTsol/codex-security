# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-20`

## Today

| metric | value |
| --- | --- |
| calls | 32,235 |
| paid calls | 1,120 |
| free calls | 10,074 |
| revenue | $48.50 |
| cost of goods | $20.07 |
| margin | 58.6% |
| buying direct would be | $55.85 |
| **leCore saving** | **1.15x** |
| distinct payers | 6 |
| quote → paid conversion | 10.2% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 279,765 |
| paid calls | 9,365 |
| revenue | $1,179.82 |
| average per day | $294.96 |

## Daily history

| day | calls | paid | revenue | margin | leCore saving |
| --- | --- | --- | --- | --- | --- |
| 2026-08-17 | 64,995 | 2,202 | $126.81 | 63.8% | 3.42x |
| 2026-08-18 | 70,361 | 4,353 | $746.91 | 37.9% | 2.7x |
| 2026-08-19 | 112,174 | 1,690 | $257.61 | 27.3% | 1.36x |
| 2026-08-20 | 32,235 | 1,120 | $48.50 | 58.6% | 1.15x |

## Top models

| model | calls |
| --- | --- |
| `openai/gpt-4o-mini` | 1,544 |
| `google/gemini-2.5-flash` | 1,518 |
| `anthropic/claude-sonnet-4` | 1,510 |
| `x-ai/grok-4.6` | 1,506 |
| `google/gemini-3.7-flash` | 695 |
| `deepseek/deepseek-v4-pro-0813` | 638 |
| `anthropic/claude-sonnet-5` | 283 |
| `openai/gpt-5.6-luna` | 136 |
| `deepseek/deepseek-v4-flash` | 108 |
| `bytedance-seed/seed-2.0-code` | 94 |

## Coverage

- days: 4, since 2026-08-17
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

