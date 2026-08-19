# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-19`

## Today

| metric | value |
| --- | --- |
| calls | 765 |
| paid calls | 1 |
| free calls | 339 |
| revenue | $0.06 |
| cost of goods | $0.03 |
| margin | 50.8% |
| buying direct would be | $0.06 |
| **leCore saving** | **1x** |
| distinct payers | 2 |
| quote → paid conversion | 0.7% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 765 |
| paid calls | 1 |
| revenue | $0.06 |
| average per day | $0.06 |

## Daily history

| day | calls | paid | revenue | margin | leCore saving |
| --- | --- | --- | --- | --- | --- |
| 2026-08-19 | 765 | 1 | $0.06 | 50.8% | 1x |

## Top models

| model | calls |
| --- | --- |
| `x-ai/grok-4.6` | 2,661 |
| `anthropic/claude-sonnet-4` | 2,056 |
| `google/gemini-2.5-flash` | 2,051 |
| `openai/gpt-4o-mini` | 2,051 |
| `anthropic/claude-sonnet-5` | 725 |
| `anthropic/claude-fable-5` | 313 |
| `nvidia/nemotron-3.5-lightning` | 36 |
| `deepseek/deepseek-v4-pro-0813` | 7 |
| `google/gemini-3.7-flash` | 4 |

## Coverage

- days: 1, since 2026-08-19
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

