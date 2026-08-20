# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-20`

## Today

| metric | value |
| --- | --- |
| calls | 12,739 |
| paid calls | 4 |
| free calls | 6,687 |
| revenue | $0.07 |
| cost of goods | $0.07 |
| margin | 13% |
| buying direct would be | $0.13 |
| **leCore saving** | **1.7x** |
| distinct payers | 1 |
| quote → paid conversion | 6.9% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 243,476 |
| paid calls | 7,643 |
| revenue | $1,037.86 |
| average per day | $259.47 |

## Daily history

| day | calls | paid | revenue | margin | leCore saving |
| --- | --- | --- | --- | --- | --- |
| 2026-08-17 | 64,995 | 2,202 | $126.81 | 63.8% | 3.42x |
| 2026-08-18 | 70,361 | 4,353 | $746.91 | 37.9% | 2.7x |
| 2026-08-19 | 95,381 | 1,084 | $164.07 | 18.5% | 1.49x |
| 2026-08-20 | 12,739 | 4 | $0.07 | 13% | 1.7x |

## Top models

| model | calls |
| --- | --- |
| `x-ai/grok-4.6` | 1,945 |
| `openai/gpt-4o-mini` | 1,639 |
| `google/gemini-2.5-flash` | 1,605 |
| `anthropic/claude-sonnet-4` | 1,596 |
| `google/gemini-3.7-flash` | 803 |
| `anthropic/claude-sonnet-5` | 252 |
| `inclusionai/ling-3.0-flash` | 121 |
| `bytedance-seed/seed-2.0-mini` | 118 |
| `z-ai/glm-4.6v` | 111 |
| `z-ai/glm-4.5-air` | 104 |

## Coverage

- days: 4, since 2026-08-17
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

