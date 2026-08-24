# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-24`

## Today

| metric | value |
| --- | --- |
| calls | 10,455 |
| paid calls | 280 |
| free calls | 2,382 |
| revenue | $97.83 |
| cost of goods | $42.58 |
| margin | 56.5% |
| buying direct would be | $182.80 |
| **leCore saving** | **1.87x** |
| distinct payers | 2 |
| quote → paid conversion | 5.1% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 431,582 |
| paid calls | 29,759 |
| revenue | $1,600.12 |
| average per day | $228.59 |

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
| 2026-08-24 | 10,455 | 280 | $97.83 | 56.5% | 1.87x |

## Top models

| model | calls |
| --- | --- |
| `x-ai/grok-4.6` | 1,048 |
| `anthropic/claude-sonnet-4` | 1,044 |
| `upstage/solar-pro4` | 934 |
| `google/gemini-2.5-flash` | 928 |
| `openai/gpt-4o-mini` | 918 |
| `anthropic/claude-opus-5` | 378 |
| `deepseek/deepseek-v4-pro-0813` | 130 |
| `anthropic/claude-sonnet-5` | 67 |
| `anthropic/claude-fable-5` | 60 |
| `openai/gpt-5.6-sol-pro` | 22 |

## Coverage

- days: 8, since 2026-08-17
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

