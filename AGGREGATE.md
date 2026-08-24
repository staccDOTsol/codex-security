# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-24`

## Today

| metric | value |
| --- | --- |
| calls | 29,177 |
| paid calls | 886 |
| free calls | 7,066 |
| revenue | $103.82 |
| cost of goods | $50.66 |
| margin | 51.2% |
| buying direct would be | $193.11 |
| **leCore saving** | **1.86x** |
| distinct payers | 4 |
| quote → paid conversion | 6% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 450,304 |
| paid calls | 31,685 |
| revenue | $1,770.97 |
| average per day | $253.00 |

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
| 2026-08-24 | 29,177 | 886 | $103.82 | 51.2% | 1.86x |

## Top models

| model | calls |
| --- | --- |
| `google/gemini-2.5-flash` | 2,281 |
| `upstage/solar-pro4` | 1,709 |
| `openai/gpt-4o-mini` | 1,702 |
| `anthropic/claude-sonnet-4` | 1,700 |
| `x-ai/grok-4.6` | 1,696 |
| `anthropic/claude-fable-5` | 588 |
| `anthropic/claude-opus-5` | 346 |
| `openai/gpt-5.6-luna` | 123 |
| `openai/gpt-5.6-sol` | 95 |
| `qwen/qwen3.7-flash` | 69 |

## Coverage

- days: 8, since 2026-08-17
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

