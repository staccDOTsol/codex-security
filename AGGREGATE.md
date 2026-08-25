# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-25`

## Today

| metric | value |
| --- | --- |
| calls | 11,457 |
| paid calls | 237 |
| free calls | 2,358 |
| revenue | $0.22 |
| cost of goods | $0.82 |
| margin | -7.5% |
| buying direct would be | $0.74 |
| **leCore saving** | **3.37x** |
| distinct payers | 4 |
| quote → paid conversion | 3.4% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 395,200 |
| paid calls | 27,576 |
| revenue | $1,026.00 |
| average per day | $146.57 |

## Daily history

| day | calls | paid | revenue | margin | leCore saving |
| --- | --- | --- | --- | --- | --- |
| 2026-08-17 | 64,995 | 2,202 | $126.81 | 63.8% | 3.42x |
| 2026-08-18 | 70,361 | 4,353 | $746.91 | 37.9% | 2.7x |
| 2026-08-19 | 112,174 | 1,697 | $263.59 | 78.2% | 1.34x |
| 2026-08-20 | 100,986 | 20,707 | $411.86 | 26.4% | 2.11x |
| 2026-08-21 | 65,223 | 4,022 | $203.15 | 24.4% | 4.59x |
| 2026-08-22 | 35,072 | 13 | $40.85 | 42.6% | 1.64x |
| 2026-08-23 | 37,311 | 7 | $0.78 | 90.8% | 2.37x |
| 2026-08-24 | 32,977 | 893 | $105.54 | 36.9% | 1.85x |
| 2026-08-25 | 11,457 | 237 | $0.22 | -7.5% | 3.37x |

## Top models

| model | calls |
| --- | --- |
| `openai/gpt-4o-mini` | 1,427 |
| `upstage/solar-pro4` | 1,414 |
| `google/gemini-2.5-flash` | 1,409 |
| `anthropic/claude-sonnet-4` | 1,399 |
| `x-ai/grok-4.6` | 1,399 |
| `moonshotai/kimi-k3` | 210 |
| `google/gemini-3.7-flash` | 60 |
| `anthropic/claude-sonnet-5` | 32 |
| `openai/gpt-5.6-luna` | 30 |
| `nvidia/nemotron-3.5-lightning` | 12 |

## Coverage

- days: 9, since 2026-08-17
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

