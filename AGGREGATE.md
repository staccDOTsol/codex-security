# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-23`

## Today

| metric | value |
| --- | --- |
| calls | 24,767 |
| paid calls | 4 |
| free calls | 6,147 |
| revenue | $0.0000 |
| cost of goods | $0.0004 |
| margin | -3613.8% |
| buying direct would be | $0.0004 |
| **leCore saving** | **37.11x** |
| distinct payers | 1 |
| quote → paid conversion | 0% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 473,578 |
| paid calls | 31,678 |
| revenue | $1,628.32 |
| average per day | $232.62 |

## Daily history

| day | calls | paid | revenue | margin | leCore saving |
| --- | --- | --- | --- | --- | --- |
| 2026-08-17 | 64,995 | 2,202 | $126.81 | 63.8% | 3.42x |
| 2026-08-18 | 70,361 | 4,353 | $746.91 | 37.9% | 2.7x |
| 2026-08-19 | 112,174 | 1,690 | $257.61 | 27.3% | 1.36x |
| 2026-08-20 | 100,986 | 20,209 | $269.52 | 7.5% | 1.3x |
| 2026-08-21 | 65,223 | 3,207 | $186.61 | 44% | 4.86x |
| 2026-08-22 | 35,072 | 13 | $40.85 | 42.6% | 1.64x |
| 2026-08-23 | 24,767 | 4 | $0.0000 | -3613.8% | 37.11x |

## Top models

| model | calls |
| --- | --- |
| `google/gemini-2.5-flash` | 2,026 |
| `anthropic/claude-sonnet-4` | 2,014 |
| `openai/gpt-4o-mini` | 2,005 |
| `x-ai/grok-4.6` | 1,999 |
| `upstage/solar-pro4` | 1,939 |
| `anthropic/claude-fable-5` | 17 |
| `inclusionai/ling-2.6-flash` | 1 |

## Coverage

- days: 7, since 2026-08-17
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

