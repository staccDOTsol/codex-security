# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-23`

## Today

| metric | value |
| --- | --- |
| calls | 35,813 |
| paid calls | 6 |
| free calls | 8,546 |
| revenue | $0.78 |
| cost of goods | $0.07 |
| margin | 91.3% |
| buying direct would be | $1.86 |
| **leCore saving** | **2.37x** |
| distinct payers | 1 |
| quote → paid conversion | 0% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 484,624 |
| paid calls | 31,680 |
| revenue | $1,629.10 |
| average per day | $232.73 |

## Daily history

| day | calls | paid | revenue | margin | leCore saving |
| --- | --- | --- | --- | --- | --- |
| 2026-08-17 | 64,995 | 2,202 | $126.81 | 63.8% | 3.42x |
| 2026-08-18 | 70,361 | 4,353 | $746.91 | 37.9% | 2.7x |
| 2026-08-19 | 112,174 | 1,690 | $257.61 | 27.3% | 1.36x |
| 2026-08-20 | 100,986 | 20,209 | $269.52 | 7.5% | 1.3x |
| 2026-08-21 | 65,223 | 3,207 | $186.61 | 44% | 4.86x |
| 2026-08-22 | 35,072 | 13 | $40.85 | 42.6% | 1.64x |
| 2026-08-23 | 35,813 | 6 | $0.78 | 91.3% | 2.37x |

## Top models

| model | calls |
| --- | --- |
| `upstage/solar-pro4` | 2,004 |
| `google/gemini-2.5-flash` | 2,000 |
| `anthropic/claude-sonnet-4` | 1,998 |
| `x-ai/grok-4.6` | 1,995 |
| `openai/gpt-4o-mini` | 1,993 |
| `inclusionai/ling-2.6-flash` | 1 |

## Coverage

- days: 7, since 2026-08-17
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

