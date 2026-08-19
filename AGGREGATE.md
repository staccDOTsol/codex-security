# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-19`

## Today

| metric | value |
| --- | --- |
| calls | 40,630 |
| paid calls | 667 |
| free calls | 19,963 |
| revenue | $86.58 |
| cost of goods | $80.09 |
| margin | 7.5% |
| buying direct would be | $120.00 |
| **leCore saving** | **1.39x** |
| distinct payers | 6 |
| quote → paid conversion | 14.1% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 175,986 |
| paid calls | 7,222 |
| revenue | $960.30 |
| average per day | $320.10 |

## Daily history

| day | calls | paid | revenue | margin | leCore saving |
| --- | --- | --- | --- | --- | --- |
| 2026-08-17 | 64,995 | 2,202 | $126.81 | 63.8% | 3.42x |
| 2026-08-18 | 70,361 | 4,353 | $746.91 | 37.9% | 2.7x |
| 2026-08-19 | 40,630 | 667 | $86.58 | 7.5% | 1.39x |

## Top models

| model | calls |
| --- | --- |
| `deepseek/deepseek-v4-pro-0813` | 637 |
| `google/gemini-2.5-flash` | 280 |
| `anthropic/claude-sonnet-4` | 276 |
| `openai/gpt-4o-mini` | 275 |
| `x-ai/grok-4.6` | 272 |
| `anthropic/claude-sonnet-5` | 148 |
| `nvidia/nemotron-3.5-lightning` | 23 |
| `anthropic/claude-haiku-4.5` | 4 |
| `anthropic/claude-opus-5` | 4 |

## Coverage

- days: 3, since 2026-08-17
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

