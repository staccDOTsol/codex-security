# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-19`

## Today

| metric | value |
| --- | --- |
| calls | 45,081 |
| paid calls | 816 |
| free calls | 22,060 |
| revenue | $132.14 |
| cost of goods | $114.78 |
| margin | 13.1% |
| buying direct would be | $168.39 |
| **leCore saving** | **1.27x** |
| distinct payers | 6 |
| quote → paid conversion | 13.9% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 180,437 |
| paid calls | 7,371 |
| revenue | $1,005.86 |
| average per day | $335.29 |

## Daily history

| day | calls | paid | revenue | margin | leCore saving |
| --- | --- | --- | --- | --- | --- |
| 2026-08-17 | 64,995 | 2,202 | $126.81 | 63.8% | 3.42x |
| 2026-08-18 | 70,361 | 4,353 | $746.91 | 37.9% | 2.7x |
| 2026-08-19 | 45,081 | 816 | $132.14 | 13.1% | 1.27x |

## Top models

| model | calls |
| --- | --- |
| `deepseek/deepseek-v4-pro-0813` | 634 |
| `google/gemini-2.5-flash` | 405 |
| `anthropic/claude-sonnet-4` | 400 |
| `openai/gpt-4o-mini` | 399 |
| `x-ai/grok-4.6` | 395 |
| `anthropic/claude-sonnet-5` | 294 |
| `nvidia/nemotron-3.5-lightning` | 40 |

## Coverage

- days: 3, since 2026-08-17
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

