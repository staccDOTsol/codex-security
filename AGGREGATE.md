# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-20`

## Today

| metric | value |
| --- | --- |
| calls | 1,879 |
| paid calls | 107 |
| free calls | 99 |
| revenue | $10.55 |
| cost of goods | $3.58 |
| margin | 66.1% |
| buying direct would be | $17.07 |
| **leCore saving** | **1.62x** |
| distinct payers | 1 |
| quote → paid conversion | 8.1% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 17,821 |
| paid calls | 710 |
| revenue | $103.80 |
| average per day | $51.90 |

## Daily history

| day | calls | paid | revenue | margin | leCore saving |
| --- | --- | --- | --- | --- | --- |
| 2026-08-19 | 15,942 | 603 | $93.25 | 42.7% | 1.13x |
| 2026-08-20 | 1,879 | 107 | $10.55 | 66.1% | 1.62x |

## Top models

| model | calls |
| --- | --- |
| `x-ai/grok-4.6` | 654 |
| `google/gemini-2.5-flash` | 304 |
| `anthropic/claude-sonnet-4` | 304 |
| `openai/gpt-4o-mini` | 304 |
| `anthropic/claude-sonnet-5` | 143 |
| `google/gemini-3.7-flash` | 70 |
| `nvidia/nemotron-3.5-lightning` | 3 |

## Coverage

- days: 2, since 2026-08-19
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

