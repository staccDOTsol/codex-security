# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-20`

## Today

| metric | value |
| --- | --- |
| calls | 64 |
| paid calls | 0 |
| free calls | 2 |
| revenue | $0.0000 |
| cost of goods | $0.0000 |
| margin | — |
| buying direct would be | $0.0000 |
| **leCore saving** | **—** |
| distinct payers | 0 |
| quote → paid conversion | 0% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 839 |
| paid calls | 3 |
| revenue | $0.29 |
| average per day | $0.15 |

## Daily history

| day | calls | paid | revenue | margin | leCore saving |
| --- | --- | --- | --- | --- | --- |
| 2026-08-19 | 775 | 3 | $0.29 | 63.3% | 1.6x |
| 2026-08-20 | 64 | 0 | $0.0000 | — | — |

## Top models

| model | calls |
| --- | --- |
| `x-ai/grok-4.6` | 1,864 |
| `openai/gpt-4o-mini` | 1,343 |
| `google/gemini-2.5-flash` | 1,322 |
| `anthropic/claude-sonnet-4` | 1,315 |
| `google/gemini-3.7-flash` | 515 |
| `anthropic/claude-sonnet-5` | 233 |
| `inclusionai/ling-3.0-flash` | 97 |
| `bytedance-seed/seed-2.0-mini` | 82 |
| `minimax/minimax-m2.5` | 79 |
| `z-ai/glm-4.6v` | 72 |

## Coverage

- days: 2, since 2026-08-19
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

