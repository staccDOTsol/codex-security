# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-24`

## Today

| metric | value |
| --- | --- |
| calls | 3,717 |
| paid calls | 183 |
| free calls | 1,199 |
| revenue | $73.25 |
| cost of goods | $28.51 |
| margin | 61.1% |
| buying direct would be | $141.87 |
| **leCore saving** | **1.94x** |
| distinct payers | 2 |
| quote → paid conversion | 13.3% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 424,844 |
| paid calls | 29,662 |
| revenue | $1,575.54 |
| average per day | $225.08 |

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
| 2026-08-24 | 3,717 | 183 | $73.25 | 61.1% | 1.94x |

## Top models

| model | calls |
| --- | --- |
| `anthropic/claude-sonnet-4` | 299 |
| `x-ai/grok-4.6` | 296 |
| `openai/gpt-4o-mini` | 202 |
| `google/gemini-2.5-flash` | 200 |
| `upstage/solar-pro4` | 199 |
| `deepseek/deepseek-v4-pro-0813` | 91 |
| `anthropic/claude-fable-5` | 24 |
| `openai/gpt-5.6-sol-pro` | 16 |
| `anthropic/claude-opus-5` | 14 |
| `qwen/qwen3.7-flash` | 2 |

## Coverage

- days: 8, since 2026-08-17
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

