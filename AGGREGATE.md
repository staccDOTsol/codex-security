# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-09-01`

## Today

| metric | value |
| --- | --- |
| calls | 1,105 |
| paid calls | 5 |
| free calls | 314 |
| revenue | $0.0084 |
| cost of goods | $0.03 |
| margin | 96.7% |
| buying direct would be | $0.03 |
| **leCore saving** | **2.96x** |
| distinct payers | 2 |
| quote → paid conversion | 0.7% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 526,358 |
| paid calls | 5,414 |
| revenue | $212.10 |
| average per day | $30.30 |

## Daily history

| day | calls | paid | revenue | margin | leCore saving |
| --- | --- | --- | --- | --- | --- |
| 2026-08-26 | 33,047 | 243 | $9.82 | 61.6% | 3.58x |
| 2026-08-27 | 34,584 | 151 | $15.24 | 82.3% | 3.92x |
| 2026-08-28 | 91,950 | 1,798 | $123.48 | 43% | 3.37x |
| 2026-08-29 | 76,801 | 450 | $3.07 | 0.8% | 8.33x |
| 2026-08-30 | 207,186 | 1,414 | $26.85 | 45.5% | 2.27x |
| 2026-08-31 | 81,685 | 1,353 | $33.63 | 60.5% | 2.25x |
| 2026-09-01 | 1,105 | 5 | $0.0084 | 96.7% | 2.96x |

## Top models

| model | calls |
| --- | --- |
| `openai/gpt-4o-mini` | 192 |
| `google/gemini-2.5-flash` | 149 |
| `upstage/solar-pro4` | 143 |
| `anthropic/claude-sonnet-4` | 143 |
| `x-ai/grok-4.6` | 143 |
| `Wan-AI/wan2.7-t2v` | 7 |
| `black-forest-labs/FLUX.1.1-pro` | 7 |

## Coverage

- days: 7, since 2026-08-26
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

