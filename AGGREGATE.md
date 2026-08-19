# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-19`

## Today

| metric | value |
| --- | --- |
| calls | 52,267 |
| paid calls | 996 |
| free calls | 26,388 |
| revenue | $152.51 |
| cost of goods | $126.57 |
| margin | 17% |
| buying direct would be | $212.76 |
| **leCore saving** | **1.4x** |
| distinct payers | 6 |
| quote → paid conversion | 13.6% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 187,623 |
| paid calls | 7,551 |
| revenue | $1,026.23 |
| average per day | $342.08 |

## Daily history

| day | calls | paid | revenue | margin | leCore saving |
| --- | --- | --- | --- | --- | --- |
| 2026-08-17 | 64,995 | 2,202 | $126.81 | 63.8% | 3.42x |
| 2026-08-18 | 70,361 | 4,353 | $746.91 | 37.9% | 2.7x |
| 2026-08-19 | 52,267 | 996 | $152.51 | 17% | 1.4x |

## Top models

| model | calls |
| --- | --- |
| `anthropic/claude-sonnet-4` | 494 |
| `google/gemini-2.5-flash` | 493 |
| `openai/gpt-4o-mini` | 491 |
| `x-ai/grok-4.6` | 491 |
| `anthropic/claude-sonnet-5` | 422 |
| `deepseek/deepseek-v4-pro-0813` | 113 |
| `nvidia/nemotron-3.5-lightning` | 20 |
| `anthropic/claude-fable-5` | 8 |

## Coverage

- days: 3, since 2026-08-17
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

