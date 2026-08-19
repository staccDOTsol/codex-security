# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-19`

## Today

| metric | value |
| --- | --- |
| calls | 31,074 |
| paid calls | 273 |
| free calls | 16,016 |
| revenue | $32.34 |
| cost of goods | $29.05 |
| margin | 10.2% |
| buying direct would be | $62.07 |
| **leCore saving** | **1.92x** |
| distinct payers | 5 |
| quote → paid conversion | 8.4% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 166,430 |
| paid calls | 6,828 |
| revenue | $906.06 |
| average per day | $302.02 |

## Daily history

| day | calls | paid | revenue | margin | leCore saving |
| --- | --- | --- | --- | --- | --- |
| 2026-08-17 | 64,995 | 2,202 | $126.81 | 63.8% | 3.42x |
| 2026-08-18 | 70,361 | 4,353 | $746.91 | 37.9% | 2.7x |
| 2026-08-19 | 31,074 | 273 | $32.34 | 10.2% | 1.92x |

## Top models

| model | calls |
| --- | --- |
| `google/gemini-2.5-flash` | 222 |
| `anthropic/claude-sonnet-4` | 217 |
| `openai/gpt-4o-mini` | 215 |
| `x-ai/grok-4.6` | 213 |
| `openai/gpt-5.6-sol` | 78 |
| `anthropic/claude-sonnet-5` | 76 |
| `z-ai/glm-4.7-flash` | 8 |
| `z-ai/glm-5.3` | 7 |
| `nvidia/nemotron-3.5-lightning` | 3 |
| `z-ai/glm-5.2:free` | 2 |

## Coverage

- days: 3, since 2026-08-17
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

