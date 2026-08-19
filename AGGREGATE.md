# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-19`

## Today

| metric | value |
| --- | --- |
| calls | 43,461 |
| paid calls | 776 |
| free calls | 21,262 |
| revenue | $114.92 |
| cost of goods | $103.85 |
| margin | 9.6% |
| buying direct would be | $147.67 |
| **leCore saving** | **1.29x** |
| distinct payers | 6 |
| quote → paid conversion | 14.7% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 178,817 |
| paid calls | 7,331 |
| revenue | $988.64 |
| average per day | $329.55 |

## Daily history

| day | calls | paid | revenue | margin | leCore saving |
| --- | --- | --- | --- | --- | --- |
| 2026-08-17 | 64,995 | 2,202 | $126.81 | 63.8% | 3.42x |
| 2026-08-18 | 70,361 | 4,353 | $746.91 | 37.9% | 2.7x |
| 2026-08-19 | 43,461 | 776 | $114.92 | 9.6% | 1.29x |

## Top models

| model | calls |
| --- | --- |
| `deepseek/deepseek-v4-pro-0813` | 643 |
| `anthropic/claude-sonnet-5` | 336 |
| `google/gemini-2.5-flash` | 321 |
| `anthropic/claude-sonnet-4` | 316 |
| `openai/gpt-4o-mini` | 315 |
| `x-ai/grok-4.6` | 312 |
| `nvidia/nemotron-3.5-lightning` | 40 |
| `anthropic/claude-haiku-4.5` | 4 |
| `anthropic/claude-opus-5` | 4 |

## Coverage

- days: 3, since 2026-08-17
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

