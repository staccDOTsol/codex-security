# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-19`

## Today

| metric | value |
| --- | --- |
| calls | 62,323 |
| paid calls | 1,083 |
| free calls | 32,704 |
| revenue | $163.99 |
| cost of goods | $133.66 |
| margin | 18.5% |
| buying direct would be | $244.85 |
| **leCore saving** | **1.49x** |
| distinct payers | 6 |
| quote → paid conversion | 12.7% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 197,679 |
| paid calls | 7,638 |
| revenue | $1,037.71 |
| average per day | $345.90 |

## Daily history

| day | calls | paid | revenue | margin | leCore saving |
| --- | --- | --- | --- | --- | --- |
| 2026-08-17 | 64,995 | 2,202 | $126.81 | 63.8% | 3.42x |
| 2026-08-18 | 70,361 | 4,353 | $746.91 | 37.9% | 2.7x |
| 2026-08-19 | 62,323 | 1,083 | $163.99 | 18.5% | 1.49x |

## Top models

| model | calls |
| --- | --- |
| `google/gemini-2.5-flash` | 795 |
| `anthropic/claude-sonnet-4` | 790 |
| `openai/gpt-4o-mini` | 790 |
| `x-ai/grok-4.6` | 788 |
| `anthropic/claude-sonnet-5` | 679 |
| `nvidia/nemotron-3.5-lightning` | 15 |
| `deepseek/deepseek-v4-pro-0813` | 4 |

## Coverage

- days: 3, since 2026-08-17
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

