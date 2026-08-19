# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-19`

## Today

| metric | value |
| --- | --- |
| calls | 49,000 |
| paid calls | 903 |
| free calls | 24,973 |
| revenue | $144.54 |
| cost of goods | $121.71 |
| margin | 15.8% |
| buying direct would be | $187.70 |
| **leCore saving** | **1.3x** |
| distinct payers | 6 |
| quote → paid conversion | 14.3% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 184,356 |
| paid calls | 7,458 |
| revenue | $1,018.26 |
| average per day | $339.42 |

## Daily history

| day | calls | paid | revenue | margin | leCore saving |
| --- | --- | --- | --- | --- | --- |
| 2026-08-17 | 64,995 | 2,202 | $126.81 | 63.8% | 3.42x |
| 2026-08-18 | 70,361 | 4,353 | $746.91 | 37.9% | 2.7x |
| 2026-08-19 | 49,000 | 903 | $144.54 | 15.8% | 1.3x |

## Top models

| model | calls |
| --- | --- |
| `anthropic/claude-sonnet-5` | 459 |
| `google/gemini-2.5-flash` | 382 |
| `anthropic/claude-sonnet-4` | 379 |
| `openai/gpt-4o-mini` | 377 |
| `x-ai/grok-4.6` | 374 |
| `deepseek/deepseek-v4-pro-0813` | 280 |
| `nvidia/nemotron-3.5-lightning` | 37 |

## Coverage

- days: 3, since 2026-08-17
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

