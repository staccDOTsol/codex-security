# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-24`

## Today

| metric | value |
| --- | --- |
| calls | 31,763 |
| paid calls | 892 |
| free calls | 7,675 |
| revenue | $105.25 |
| cost of goods | $52.22 |
| margin | 50.4% |
| buying direct would be | $194.82 |
| **leCore saving** | **1.85x** |
| distinct payers | 4 |
| quote → paid conversion | 5.6% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 452,890 |
| paid calls | 31,691 |
| revenue | $1,772.40 |
| average per day | $253.20 |

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
| 2026-08-24 | 31,763 | 892 | $105.25 | 50.4% | 1.85x |

## Top models

| model | calls |
| --- | --- |
| `google/gemini-2.5-flash` | 2,262 |
| `upstage/solar-pro4` | 1,691 |
| `openai/gpt-4o-mini` | 1,687 |
| `anthropic/claude-sonnet-4` | 1,683 |
| `x-ai/grok-4.6` | 1,680 |
| `anthropic/claude-fable-5` | 600 |
| `anthropic/claude-opus-5` | 334 |
| `openai/gpt-5.6-luna` | 123 |
| `openai/gpt-5.6-sol` | 95 |
| `qwen/qwen3.7-flash` | 69 |

## Coverage

- days: 8, since 2026-08-17
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

