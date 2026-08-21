# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-21`

## Today

| metric | value |
| --- | --- |
| calls | 64,663 |
| paid calls | 3,205 |
| free calls | 15,881 |
| revenue | $186.12 |
| cost of goods | $104.27 |
| margin | 44% |
| buying direct would be | $906.56 |
| **leCore saving** | **4.87x** |
| distinct payers | 16 |
| quote → paid conversion | 9.7% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 413,179 |
| paid calls | 31,659 |
| revenue | $1,586.97 |
| average per day | $317.39 |

## Daily history

| day | calls | paid | revenue | margin | leCore saving |
| --- | --- | --- | --- | --- | --- |
| 2026-08-17 | 64,995 | 2,202 | $126.81 | 63.8% | 3.42x |
| 2026-08-18 | 70,361 | 4,353 | $746.91 | 37.9% | 2.7x |
| 2026-08-19 | 112,174 | 1,690 | $257.61 | 27.3% | 1.36x |
| 2026-08-20 | 100,986 | 20,209 | $269.52 | 7.5% | 1.3x |
| 2026-08-21 | 64,663 | 3,205 | $186.12 | 44% | 4.87x |

## Top models

| model | calls |
| --- | --- |
| `google/gemini-3.7-flash` | 3,382 |
| `openai/gpt-4o-mini` | 1,736 |
| `x-ai/grok-4.6` | 1,255 |
| `upstage/solar-pro4` | 1,048 |
| `anthropic/claude-sonnet-4` | 992 |
| `google/gemini-2.5-flash` | 986 |
| `anthropic/claude-sonnet-5` | 788 |
| `openai/gpt-5.6-luna` | 488 |
| `inclusionai/ling-2.6-flash` | 467 |
| `openai/gpt-5.6-sol` | 401 |

## Coverage

- days: 5, since 2026-08-17
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

