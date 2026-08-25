# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-25`

## Today

| metric | value |
| --- | --- |
| calls | 18,129 |
| paid calls | 401 |
| free calls | 3,873 |
| revenue | $33.64 |
| cost of goods | $41.59 |
| margin | 75.8% |
| buying direct would be | $33.51 |
| **leCore saving** | **1x** |
| distinct payers | 6 |
| quote → paid conversion | 3.6% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 401,872 |
| paid calls | 27,740 |
| revenue | $1,059.42 |
| average per day | $151.35 |

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
| 2026-08-25 | 18,129 | 401 | $33.64 | 75.8% | 1x |

## Top models

| model | calls |
| --- | --- |
| `openai/gpt-4o-mini` | 1,864 |
| `upstage/solar-pro4` | 1,863 |
| `google/gemini-2.5-flash` | 1,850 |
| `anthropic/claude-sonnet-4` | 1,845 |
| `x-ai/grok-4.6` | 1,839 |
| `anthropic/claude-opus-5` | 215 |
| `anthropic/claude-sonnet-5` | 202 |
| `ibm-granite/granite-4.0-h-micro` | 61 |
| `nex-agi/nex-n2-mini` | 59 |
| `google/gemini-3.7-flash` | 48 |

## Coverage

- days: 9, since 2026-08-17
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

