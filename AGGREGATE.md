# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-09-01`

## Today

| metric | value |
| --- | --- |
| calls | 75,274 |
| paid calls | 4,127 |
| free calls | 12,353 |
| revenue | $188.03 |
| cost of goods | $503.50 |
| margin | 57.7% |
| buying direct would be | $502.11 |
| **leCore saving** | **2.67x** |
| distinct payers | 13 |
| quote → paid conversion | 8.4% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 600,527 |
| paid calls | 9,536 |
| revenue | $400.13 |
| average per day | $57.16 |

## Daily history

| day | calls | paid | revenue | margin | leCore saving |
| --- | --- | --- | --- | --- | --- |
| 2026-08-26 | 33,047 | 243 | $9.82 | 61.6% | 3.58x |
| 2026-08-27 | 34,584 | 151 | $15.24 | 82.3% | 3.92x |
| 2026-08-28 | 91,950 | 1,798 | $123.48 | 43% | 3.37x |
| 2026-08-29 | 76,801 | 450 | $3.07 | 0.8% | 8.33x |
| 2026-08-30 | 207,186 | 1,414 | $26.85 | 45.5% | 2.27x |
| 2026-08-31 | 81,685 | 1,353 | $33.63 | 60.5% | 2.25x |
| 2026-09-01 | 75,274 | 4,127 | $188.03 | 57.7% | 2.67x |

## Top models

| model | calls |
| --- | --- |
| `x-ai/grok-4.6` | 11,751 |
| `openai/gpt-4o-mini` | 4,750 |
| `google/gemini-2.5-flash` | 1,802 |
| `upstage/solar-pro4` | 1,464 |
| `anthropic/claude-sonnet-4` | 1,452 |
| `Wan-AI/wan2.7-t2v` | 183 |
| `black-forest-labs/FLUX.1.1-pro` | 181 |
| `anthropic/claude-opus-5` | 106 |
| `anthropic/claude-sonnet-5` | 91 |
| `tencent/hy4-preview` | 12 |

## Coverage

- days: 7, since 2026-08-26
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

