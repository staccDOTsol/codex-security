# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-25`

## Today

| metric | value |
| --- | --- |
| calls | 24,177 |
| paid calls | 684 |
| free calls | 4,853 |
| revenue | $230.23 |
| cost of goods | $257.31 |
| margin | 76.3% |
| buying direct would be | $243.66 |
| **leCore saving** | **1.06x** |
| distinct payers | 6 |
| quote → paid conversion | 4.9% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 407,920 |
| paid calls | 28,023 |
| revenue | $1,256.01 |
| average per day | $179.43 |

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
| 2026-08-25 | 24,177 | 684 | $230.23 | 76.3% | 1.06x |

## Top models

| model | calls |
| --- | --- |
| `openai/gpt-4o-mini` | 1,553 |
| `upstage/solar-pro4` | 1,481 |
| `google/gemini-2.5-flash` | 1,465 |
| `anthropic/claude-sonnet-4` | 1,464 |
| `x-ai/grok-4.6` | 1,455 |
| `anthropic/claude-sonnet-5` | 326 |
| `anthropic/claude-opus-5` | 317 |
| `anthropic/claude-fable-5` | 269 |
| `ibm-granite/granite-4.0-h-micro` | 61 |
| `nex-agi/nex-n2-mini` | 59 |

## Coverage

- days: 9, since 2026-08-17
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

