# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-20`

## Today

| metric | value |
| --- | --- |
| calls | 4,116 |
| paid calls | 207 |
| free calls | 271 |
| revenue | $13.34 |
| cost of goods | $5.18 |
| margin | 61.2% |
| buying direct would be | $20.12 |
| **leCore saving** | **1.51x** |
| distinct payers | 2 |
| quote → paid conversion | 8.4% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 20,058 |
| paid calls | 810 |
| revenue | $106.59 |
| average per day | $53.30 |

## Daily history

| day | calls | paid | revenue | margin | leCore saving |
| --- | --- | --- | --- | --- | --- |
| 2026-08-19 | 15,942 | 603 | $93.25 | 42.7% | 1.13x |
| 2026-08-20 | 4,116 | 207 | $13.34 | 61.2% | 1.51x |

## Top models

| model | calls |
| --- | --- |
| `x-ai/grok-4.6` | 1,109 |
| `openai/gpt-4o-mini` | 575 |
| `google/gemini-2.5-flash` | 563 |
| `anthropic/claude-sonnet-4` | 558 |
| `google/gemini-3.7-flash` | 424 |
| `anthropic/claude-sonnet-5` | 219 |
| `bytedance-seed/seed-2.0-mini` | 53 |
| `inclusionai/ling-3.0-flash` | 47 |
| `minimax/minimax-m2` | 44 |
| `z-ai/glm-4.6v` | 42 |

## Coverage

- days: 2, since 2026-08-19
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

