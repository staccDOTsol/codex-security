# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-21`

## Today

| metric | value |
| --- | --- |
| calls | 3,777 |
| paid calls | 87 |
| free calls | 929 |
| revenue | $0.23 |
| cost of goods | $0.29 |
| margin | -27.2% |
| buying direct would be | $0.23 |
| **leCore saving** | **1x** |
| distinct payers | 5 |
| quote → paid conversion | 4.6% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 352,293 |
| paid calls | 28,541 |
| revenue | $1,401.08 |
| average per day | $280.22 |

## Daily history

| day | calls | paid | revenue | margin | leCore saving |
| --- | --- | --- | --- | --- | --- |
| 2026-08-17 | 64,995 | 2,202 | $126.81 | 63.8% | 3.42x |
| 2026-08-18 | 70,361 | 4,353 | $746.91 | 37.9% | 2.7x |
| 2026-08-19 | 112,174 | 1,690 | $257.61 | 27.3% | 1.36x |
| 2026-08-20 | 100,986 | 20,209 | $269.52 | 7.5% | 1.3x |
| 2026-08-21 | 3,777 | 87 | $0.23 | -27.2% | 1x |

## Top models

| model | calls |
| --- | --- |
| `google/gemini-2.5-flash` | 396 |
| `anthropic/claude-sonnet-4` | 384 |
| `openai/gpt-4o-mini` | 382 |
| `x-ai/grok-4.6` | 377 |
| `anthropic/claude-sonnet-5` | 182 |
| `inclusionai/ling-2.6-flash` | 101 |
| `upstage/solar-pro4` | 44 |
| `nvidia/nemotron-3.5-lightning` | 42 |
| `qwen/qwen-2.5-7b-instruct` | 35 |
| `deepseek/deepseek-v4-flash` | 34 |

## Coverage

- days: 5, since 2026-08-17
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

