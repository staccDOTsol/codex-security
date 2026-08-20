# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-20`

## Today

| metric | value |
| --- | --- |
| calls | 6,801 |
| paid calls | 210 |
| free calls | 308 |
| revenue | $13.51 |
| cost of goods | $5.34 |
| margin | 60.5% |
| buying direct would be | $20.29 |
| **leCore saving** | **1.5x** |
| distinct payers | 2 |
| quote → paid conversion | 4.6% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 22,743 |
| paid calls | 813 |
| revenue | $106.76 |
| average per day | $53.38 |

## Daily history

| day | calls | paid | revenue | margin | leCore saving |
| --- | --- | --- | --- | --- | --- |
| 2026-08-19 | 15,942 | 603 | $93.25 | 42.7% | 1.13x |
| 2026-08-20 | 6,801 | 210 | $13.51 | 60.5% | 1.5x |

## Top models

| model | calls |
| --- | --- |
| `x-ai/grok-4.6` | 1,615 |
| `openai/gpt-4o-mini` | 1,094 |
| `google/gemini-2.5-flash` | 1,073 |
| `anthropic/claude-sonnet-4` | 1,065 |
| `google/gemini-3.7-flash` | 512 |
| `anthropic/claude-sonnet-5` | 226 |
| `inclusionai/ling-3.0-flash` | 97 |
| `bytedance-seed/seed-2.0-mini` | 82 |
| `minimax/minimax-m2.5` | 79 |
| `z-ai/glm-4.6v` | 72 |

## Coverage

- days: 2, since 2026-08-19
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

