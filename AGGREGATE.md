# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-31`

## Today

| metric | value |
| --- | --- |
| calls | 4,289 |
| paid calls | 82 |
| free calls | 817 |
| revenue | $3.44 |
| cost of goods | $7.57 |
| margin | 57% |
| buying direct would be | $7.57 |
| **leCore saving** | **2.2x** |
| distinct payers | 4 |
| quote → paid conversion | 2.8% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 447,857 |
| paid calls | 4,138 |
| revenue | $181.91 |
| average per day | $30.32 |

## Daily history

| day | calls | paid | revenue | margin | leCore saving |
| --- | --- | --- | --- | --- | --- |
| 2026-08-26 | 33,047 | 243 | $9.82 | 61.6% | 3.58x |
| 2026-08-27 | 34,584 | 151 | $15.24 | 82.3% | 3.92x |
| 2026-08-28 | 91,950 | 1,798 | $123.48 | 43% | 3.37x |
| 2026-08-29 | 76,801 | 450 | $3.07 | 0.8% | 8.33x |
| 2026-08-30 | 207,186 | 1,414 | $26.85 | 45.5% | 2.27x |
| 2026-08-31 | 4,289 | 82 | $3.44 | 57% | 2.2x |

## Top models

| model | calls |
| --- | --- |
| `openai/gpt-4o-mini` | 1,361 |
| `x-ai/grok-4.6` | 574 |
| `upstage/solar-pro4` | 490 |
| `google/gemini-2.5-flash` | 490 |
| `anthropic/claude-sonnet-4` | 490 |

## Coverage

- days: 6, since 2026-08-26
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

