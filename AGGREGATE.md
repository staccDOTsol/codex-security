# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-19`

## Today

| metric | value |
| --- | --- |
| calls | 76,309 |
| paid calls | 1,084 |
| free calls | 42,213 |
| revenue | $164.07 |
| cost of goods | $133.69 |
| margin | 18.5% |
| buying direct would be | $244.93 |
| **leCore saving** | **1.49x** |
| distinct payers | 6 |
| quote → paid conversion | 12.6% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 211,665 |
| paid calls | 7,639 |
| revenue | $1,037.79 |
| average per day | $345.93 |

## Daily history

| day | calls | paid | revenue | margin | leCore saving |
| --- | --- | --- | --- | --- | --- |
| 2026-08-17 | 64,995 | 2,202 | $126.81 | 63.8% | 3.42x |
| 2026-08-18 | 70,361 | 4,353 | $746.91 | 37.9% | 2.7x |
| 2026-08-19 | 76,309 | 1,084 | $164.07 | 18.5% | 1.49x |

## Top models

| model | calls |
| --- | --- |
| `x-ai/grok-4.6` | 2,121 |
| `google/gemini-2.5-flash` | 1,931 |
| `anthropic/claude-sonnet-4` | 1,930 |
| `openai/gpt-4o-mini` | 1,926 |
| `anthropic/claude-sonnet-5` | 1,148 |
| `anthropic/claude-fable-5` | 315 |
| `nvidia/nemotron-3.5-lightning` | 52 |
| `deepseek/deepseek-v4-pro-0813` | 7 |

## Coverage

- days: 3, since 2026-08-17
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

