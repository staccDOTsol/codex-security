# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-21`

## Today

| metric | value |
| --- | --- |
| calls | 62,643 |
| paid calls | 3,064 |
| free calls | 15,418 |
| revenue | $184.97 |
| cost of goods | $103.13 |
| margin | 44.2% |
| buying direct would be | $904.69 |
| **leCore saving** | **4.89x** |
| distinct payers | 16 |
| quote → paid conversion | 9.5% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 411,159 |
| paid calls | 31,518 |
| revenue | $1,585.82 |
| average per day | $317.16 |

## Daily history

| day | calls | paid | revenue | margin | leCore saving |
| --- | --- | --- | --- | --- | --- |
| 2026-08-17 | 64,995 | 2,202 | $126.81 | 63.8% | 3.42x |
| 2026-08-18 | 70,361 | 4,353 | $746.91 | 37.9% | 2.7x |
| 2026-08-19 | 112,174 | 1,690 | $257.61 | 27.3% | 1.36x |
| 2026-08-20 | 100,986 | 20,209 | $269.52 | 7.5% | 1.3x |
| 2026-08-21 | 62,643 | 3,064 | $184.97 | 44.2% | 4.89x |

## Top models

| model | calls |
| --- | --- |
| `google/gemini-3.7-flash` | 3,380 |
| `openai/gpt-4o-mini` | 1,789 |
| `x-ai/grok-4.6` | 1,376 |
| `upstage/solar-pro4` | 1,072 |
| `anthropic/claude-sonnet-4` | 1,068 |
| `google/gemini-2.5-flash` | 1,061 |
| `anthropic/claude-sonnet-5` | 736 |
| `inclusionai/ling-2.6-flash` | 475 |
| `openai/gpt-5.6-sol` | 387 |
| `openai/gpt-5.6-luna` | 352 |

## Coverage

- days: 5, since 2026-08-17
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

