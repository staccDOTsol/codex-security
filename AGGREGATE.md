# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-20`

## Today

| metric | value |
| --- | --- |
| calls | 28,650 |
| paid calls | 958 |
| free calls | 8,941 |
| revenue | $47.04 |
| cost of goods | $18.55 |
| margin | 60.6% |
| buying direct would be | $54.20 |
| **leCore saving** | **1.15x** |
| distinct payers | 6 |
| quote → paid conversion | 9.8% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 276,180 |
| paid calls | 9,203 |
| revenue | $1,178.36 |
| average per day | $294.59 |

## Daily history

| day | calls | paid | revenue | margin | leCore saving |
| --- | --- | --- | --- | --- | --- |
| 2026-08-17 | 64,995 | 2,202 | $126.81 | 63.8% | 3.42x |
| 2026-08-18 | 70,361 | 4,353 | $746.91 | 37.9% | 2.7x |
| 2026-08-19 | 112,174 | 1,690 | $257.61 | 27.3% | 1.36x |
| 2026-08-20 | 28,650 | 958 | $47.04 | 60.6% | 1.15x |

## Top models

| model | calls |
| --- | --- |
| `openai/gpt-4o-mini` | 1,496 |
| `google/gemini-2.5-flash` | 1,471 |
| `anthropic/claude-sonnet-4` | 1,463 |
| `x-ai/grok-4.6` | 1,457 |
| `google/gemini-3.7-flash` | 717 |
| `deepseek/deepseek-v4-pro-0813` | 633 |
| `anthropic/claude-sonnet-5` | 253 |
| `bytedance-seed/seed-2.0-code` | 94 |
| `inclusionai/ling-3.0-flash` | 93 |
| `z-ai/glm-4.6v` | 93 |

## Coverage

- days: 4, since 2026-08-17
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

