# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-27`

## Today

| metric | value |
| --- | --- |
| calls | 4,735 |
| paid calls | 2 |
| free calls | 921 |
| revenue | $0.01 |
| cost of goods | $0.06 |
| margin | 3.8% |
| buying direct would be | $0.06 |
| **leCore saving** | **4.81x** |
| distinct payers | 2 |
| quote → paid conversion | 0.1% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 37,782 |
| paid calls | 245 |
| revenue | $9.83 |
| average per day | $4.92 |

## Daily history

| day | calls | paid | revenue | margin | leCore saving |
| --- | --- | --- | --- | --- | --- |
| 2026-08-26 | 33,047 | 243 | $9.82 | 61.6% | 3.58x |
| 2026-08-27 | 4,735 | 2 | $0.01 | 3.8% | 4.81x |

## Top models

| model | calls |
| --- | --- |
| `x-ai/grok-4.6` | 632 |
| `upstage/solar-pro4` | 627 |
| `google/gemini-2.5-flash` | 625 |
| `anthropic/claude-sonnet-4` | 624 |
| `openai/gpt-4o-mini` | 624 |
| `deepseek/deepseek-v4-pro-0813` | 2 |
| `x-ai/grok-4.3` | 2 |

## Coverage

- days: 2, since 2026-08-26
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

