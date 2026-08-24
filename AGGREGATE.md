# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-24`

## Today

| metric | value |
| --- | --- |
| calls | 15,000 |
| paid calls | 296 |
| free calls | 3,685 |
| revenue | $99.68 |
| cost of goods | $44.51 |
| margin | 55.3% |
| buying direct would be | $184.67 |
| **leCore saving** | **1.85x** |
| distinct payers | 3 |
| quote → paid conversion | 3.9% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 436,127 |
| paid calls | 29,775 |
| revenue | $1,601.97 |
| average per day | $228.85 |

## Daily history

| day | calls | paid | revenue | margin | leCore saving |
| --- | --- | --- | --- | --- | --- |
| 2026-08-17 | 64,995 | 2,202 | $126.81 | 63.8% | 3.42x |
| 2026-08-18 | 70,361 | 4,353 | $746.91 | 37.9% | 2.7x |
| 2026-08-19 | 112,174 | 1,690 | $257.61 | 27.3% | 1.36x |
| 2026-08-20 | 100,986 | 20,209 | $269.52 | 7.5% | 1.3x |
| 2026-08-21 | 65,223 | 3,207 | $186.61 | 44% | 4.86x |
| 2026-08-22 | 35,072 | 13 | $40.85 | 42.6% | 1.64x |
| 2026-08-23 | 37,311 | 7 | $0.78 | 90.8% | 2.37x |
| 2026-08-24 | 15,000 | 296 | $99.68 | 55.3% | 1.85x |

## Top models

| model | calls |
| --- | --- |
| `x-ai/grok-4.6` | 1,369 |
| `anthropic/claude-sonnet-4` | 1,367 |
| `upstage/solar-pro4` | 1,264 |
| `google/gemini-2.5-flash` | 1,253 |
| `openai/gpt-4o-mini` | 1,240 |
| `anthropic/claude-opus-5` | 594 |
| `deepseek/deepseek-v4-pro-0813` | 130 |
| `anthropic/claude-sonnet-5` | 68 |
| `anthropic/claude-fable-5` | 60 |
| `openai/gpt-5.6-sol-pro` | 22 |

## Coverage

- days: 8, since 2026-08-17
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

