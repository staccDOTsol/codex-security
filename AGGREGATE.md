# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-18`

## Today

| metric | value |
| --- | --- |
| calls | 69,599 |
| paid calls | 4,348 |
| free calls | 16,456 |
| revenue | $746.87 |
| cost of goods | $464.08 |
| margin | 37.9% |
| buying direct would be | $2,013.57 |
| **leCore saving** | **2.7x** |
| distinct payers | 18 |
| quote → paid conversion | 13.2% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 134,594 |
| paid calls | 6,550 |
| revenue | $873.68 |
| average per day | $436.84 |

## Daily history

| day | calls | paid | revenue | margin | leCore saving |
| --- | --- | --- | --- | --- | --- |
| 2026-08-17 | 64,995 | 2,202 | $126.81 | 63.8% | 3.42x |
| 2026-08-18 | 69,599 | 4,348 | $746.87 | 37.9% | 2.7x |

## Top models

| model | calls |
| --- | --- |
| `google/gemini-2.5-flash` | 1,222 |
| `anthropic/claude-sonnet-4` | 1,219 |
| `openai/gpt-4o-mini` | 1,216 |
| `x-ai/grok-4.6` | 1,211 |
| `deepseek/deepseek-v4-pro-0813` | 34 |

## Coverage

- days: 2, since 2026-08-17
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

