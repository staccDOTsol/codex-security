# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-25`

## Today

| metric | value |
| --- | --- |
| calls | 26,743 |
| paid calls | 685 |
| free calls | 5,427 |
| revenue | $230.24 |
| cost of goods | $257.47 |
| margin | 76.3% |
| buying direct would be | $243.82 |
| **leCore saving** | **1.06x** |
| distinct payers | 7 |
| quote → paid conversion | 4.4% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 410,486 |
| paid calls | 28,024 |
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
| 2026-08-25 | 26,743 | 685 | $230.24 | 76.3% | 1.06x |

## Top models

| model | calls |
| --- | --- |
| `openai/gpt-4o-mini` | 1,558 |
| `upstage/solar-pro4` | 1,502 |
| `anthropic/claude-sonnet-4` | 1,491 |
| `google/gemini-2.5-flash` | 1,486 |
| `x-ai/grok-4.6` | 1,480 |
| `anthropic/claude-opus-5` | 307 |
| `anthropic/claude-sonnet-5` | 299 |
| `anthropic/claude-fable-5` | 262 |
| `ibm-granite/granite-4.0-h-micro` | 61 |
| `nex-agi/nex-n2-mini` | 59 |

## Coverage

- days: 9, since 2026-08-17
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

