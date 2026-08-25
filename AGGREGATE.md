# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-25`

## Today

| metric | value |
| --- | --- |
| calls | 2,751 |
| paid calls | 25 |
| free calls | 576 |
| revenue | $0.12 |
| cost of goods | $0.11 |
| margin | 10.6% |
| buying direct would be | $0.15 |
| **leCore saving** | **1.19x** |
| distinct payers | 3 |
| quote → paid conversion | 1.6% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 386,494 |
| paid calls | 27,364 |
| revenue | $1,025.90 |
| average per day | $146.56 |

## Daily history

| day | calls | paid | revenue | margin | leCore saving |
| --- | --- | --- | --- | --- | --- |
| 2026-08-17 | 64,995 | 2,202 | $126.81 | 63.8% | 3.42x |
| 2026-08-18 | 70,361 | 4,353 | $746.91 | 37.9% | 2.7x |
| 2026-08-19 | 112,174 | 1,697 | $263.59 | 27.7% | 1.34x |
| 2026-08-20 | 100,986 | 20,707 | $411.86 | 5.8% | 2.11x |
| 2026-08-21 | 65,223 | 4,022 | $203.15 | 39.8% | 4.59x |
| 2026-08-22 | 35,072 | 13 | $40.85 | 42.6% | 1.64x |
| 2026-08-23 | 37,311 | 7 | $0.78 | 90.8% | 2.37x |
| 2026-08-24 | 32,977 | 893 | $105.54 | 50.3% | 1.85x |
| 2026-08-25 | 2,751 | 25 | $0.12 | 10.6% | 1.19x |

## Top models

| model | calls |
| --- | --- |
| `openai/gpt-4o-mini` | 297 |
| `google/gemini-2.5-flash` | 295 |
| `upstage/solar-pro4` | 295 |
| `anthropic/claude-sonnet-4` | 292 |
| `x-ai/grok-4.6` | 291 |
| `moonshotai/kimi-k3` | 210 |
| `openai/gpt-5.6-luna` | 30 |
| `google/gemini-3.7-flash` | 23 |
| `anthropic/claude-sonnet-5` | 8 |
| `nvidia/nemotron-3.5-lightning` | 4 |

## Coverage

- days: 9, since 2026-08-17
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

