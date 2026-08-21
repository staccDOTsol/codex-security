# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-21`

## Today

| metric | value |
| --- | --- |
| calls | 60,602 |
| paid calls | 2,851 |
| free calls | 14,940 |
| revenue | $180.89 |
| cost of goods | $99.61 |
| margin | 44.9% |
| buying direct would be | $895.24 |
| **leCore saving** | **4.95x** |
| distinct payers | 16 |
| quote → paid conversion | 9.1% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 409,118 |
| paid calls | 31,305 |
| revenue | $1,581.74 |
| average per day | $316.35 |

## Daily history

| day | calls | paid | revenue | margin | leCore saving |
| --- | --- | --- | --- | --- | --- |
| 2026-08-17 | 64,995 | 2,202 | $126.81 | 63.8% | 3.42x |
| 2026-08-18 | 70,361 | 4,353 | $746.91 | 37.9% | 2.7x |
| 2026-08-19 | 112,174 | 1,690 | $257.61 | 27.3% | 1.36x |
| 2026-08-20 | 100,986 | 20,209 | $269.52 | 7.5% | 1.3x |
| 2026-08-21 | 60,602 | 2,851 | $180.89 | 44.9% | 4.95x |

## Top models

| model | calls |
| --- | --- |
| `google/gemini-3.7-flash` | 3,380 |
| `openai/gpt-4o-mini` | 1,879 |
| `x-ai/grok-4.6` | 1,473 |
| `upstage/solar-pro4` | 1,164 |
| `anthropic/claude-sonnet-4` | 1,161 |
| `google/gemini-2.5-flash` | 1,155 |
| `anthropic/claude-sonnet-5` | 694 |
| `inclusionai/ling-2.6-flash` | 475 |
| `openai/gpt-5.6-sol` | 363 |
| `anthropic/claude-opus-4` | 143 |

## Coverage

- days: 5, since 2026-08-17
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

