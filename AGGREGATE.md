# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-20`

## Today

| metric | value |
| --- | --- |
| calls | 9,823 |
| paid calls | 2 |
| free calls | 5,162 |
| revenue | $0.04 |
| cost of goods | $0.03 |
| margin | 24.9% |
| buying direct would be | $0.04 |
| **leCore saving** | **1x** |
| distinct payers | 1 |
| quote → paid conversion | 10% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 240,560 |
| paid calls | 7,641 |
| revenue | $1,037.82 |
| average per day | $259.46 |

## Daily history

| day | calls | paid | revenue | margin | leCore saving |
| --- | --- | --- | --- | --- | --- |
| 2026-08-17 | 64,995 | 2,202 | $126.81 | 63.8% | 3.42x |
| 2026-08-18 | 70,361 | 4,353 | $746.91 | 37.9% | 2.7x |
| 2026-08-19 | 95,381 | 1,084 | $164.07 | 18.5% | 1.49x |
| 2026-08-20 | 9,823 | 2 | $0.04 | 24.9% | 1x |

## Top models

| model | calls |
| --- | --- |
| `x-ai/grok-4.6` | 2,081 |
| `openai/gpt-4o-mini` | 1,576 |
| `google/gemini-2.5-flash` | 1,539 |
| `anthropic/claude-sonnet-4` | 1,532 |
| `google/gemini-3.7-flash` | 567 |
| `anthropic/claude-sonnet-5` | 278 |
| `inclusionai/ling-3.0-flash` | 101 |
| `bytedance-seed/seed-2.0-mini` | 89 |
| `minimax/minimax-m2.5` | 80 |
| `z-ai/glm-4.6v` | 77 |

## Coverage

- days: 4, since 2026-08-17
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

