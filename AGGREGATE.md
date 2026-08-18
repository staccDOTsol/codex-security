# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-18`

## Today

| metric | value |
| --- | --- |
| calls | 65,220 |
| paid calls | 4,332 |
| free calls | 15,461 |
| revenue | $746.75 |
| cost of goods | $463.96 |
| margin | 37.9% |
| buying direct would be | $2,013.44 |
| **leCore saving** | **2.7x** |
| distinct payers | 17 |
| quote → paid conversion | 14.2% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 130,215 |
| paid calls | 6,534 |
| revenue | $873.56 |
| average per day | $436.78 |

## Daily history

| day | calls | paid | revenue | margin | leCore saving |
| --- | --- | --- | --- | --- | --- |
| 2026-08-17 | 64,995 | 2,202 | $126.81 | 63.8% | 3.42x |
| 2026-08-18 | 65,220 | 4,332 | $746.75 | 37.9% | 2.7x |

## Top models

| model | calls |
| --- | --- |
| `google/gemini-2.5-flash` | 1,156 |
| `anthropic/claude-sonnet-4` | 1,153 |
| `openai/gpt-4o-mini` | 1,151 |
| `x-ai/grok-4.6` | 1,143 |

## Coverage

- days: 2, since 2026-08-17
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

