# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-26`

## Today

| metric | value |
| --- | --- |
| calls | 5,715 |
| paid calls | 40 |
| free calls | 1,203 |
| revenue | $4.62 |
| cost of goods | $4.62 |
| margin | 78.4% |
| buying direct would be | $3.39 |
| **leCore saving** | **0.73x** |
| distinct payers | 1 |
| quote → paid conversion | 1.1% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 314,703 |
| paid calls | 26,839 |
| revenue | $1,032.63 |
| average per day | $147.52 |

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
| 2026-08-25 | 37,419 | 1,157 | $265.82 | 77.8% | 1.03x |
| 2026-08-26 | 5,715 | 40 | $4.62 | 78.4% | 0.73x |

## Top models

| model | calls |
| --- | --- |
| `upstage/solar-pro4` | 720 |
| `google/gemini-2.5-flash` | 720 |
| `anthropic/claude-sonnet-4` | 719 |
| `openai/gpt-4o-mini` | 718 |
| `x-ai/grok-4.6` | 718 |
| `openai/gpt-5.6-sol` | 63 |

## Coverage

- days: 10, since 2026-08-17
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

