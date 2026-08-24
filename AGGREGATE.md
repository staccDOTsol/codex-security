# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-24`

## Today

| metric | value |
| --- | --- |
| calls | 16,658 |
| paid calls | 312 |
| free calls | 4,068 |
| revenue | $99.69 |
| cost of goods | $44.52 |
| margin | 55.3% |
| buying direct would be | $184.68 |
| **leCore saving** | **1.85x** |
| distinct payers | 3 |
| quote → paid conversion | 3.7% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 437,785 |
| paid calls | 31,111 |
| revenue | $1,766.83 |
| average per day | $252.40 |

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
| 2026-08-24 | 16,658 | 312 | $99.69 | 55.3% | 1.85x |

## Top models

| model | calls |
| --- | --- |
| `anthropic/claude-sonnet-4` | 1,537 |
| `x-ai/grok-4.6` | 1,530 |
| `upstage/solar-pro4` | 1,441 |
| `google/gemini-2.5-flash` | 1,425 |
| `openai/gpt-4o-mini` | 1,406 |
| `anthropic/claude-opus-5` | 594 |
| `deepseek/deepseek-v4-pro-0813` | 130 |
| `anthropic/claude-sonnet-5` | 77 |
| `anthropic/claude-fable-5` | 60 |
| `openai/gpt-5.6-sol-pro` | 22 |

## Coverage

- days: 8, since 2026-08-17
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

