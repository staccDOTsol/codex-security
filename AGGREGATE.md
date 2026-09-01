# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-09-01`

## Today

| metric | value |
| --- | --- |
| calls | 29,980 |
| paid calls | 1,350 |
| free calls | 6,885 |
| revenue | $1.17 |
| cost of goods | $3.34 |
| margin | 90.6% |
| buying direct would be | $3.34 |
| **leCore saving** | **2.85x** |
| distinct payers | 5 |
| quote → paid conversion | 6% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 555,233 |
| paid calls | 6,759 |
| revenue | $213.26 |
| average per day | $30.47 |

## Daily history

| day | calls | paid | revenue | margin | leCore saving |
| --- | --- | --- | --- | --- | --- |
| 2026-08-26 | 33,047 | 243 | $9.82 | 61.6% | 3.58x |
| 2026-08-27 | 34,584 | 151 | $15.24 | 82.3% | 3.92x |
| 2026-08-28 | 91,950 | 1,798 | $123.48 | 43% | 3.37x |
| 2026-08-29 | 76,801 | 450 | $3.07 | 0.8% | 8.33x |
| 2026-08-30 | 207,186 | 1,414 | $26.85 | 45.5% | 2.27x |
| 2026-08-31 | 81,685 | 1,353 | $33.63 | 60.5% | 2.25x |
| 2026-09-01 | 29,980 | 1,350 | $1.17 | 90.6% | 2.85x |

## Top models

| model | calls |
| --- | --- |
| `openai/gpt-4o-mini` | 5,951 |
| `google/gemini-2.5-flash` | 1,635 |
| `upstage/solar-pro4` | 1,484 |
| `anthropic/claude-sonnet-4` | 1,478 |
| `x-ai/grok-4.6` | 1,477 |
| `Wan-AI/wan2.7-t2v` | 142 |
| `black-forest-labs/FLUX.1.1-pro` | 139 |
| `tencent/hy4-preview` | 9 |
| `anthropic/claude-sonnet-5` | 5 |
| `nvidia/nemotron-3.5-lightning` | 5 |

## Coverage

- days: 7, since 2026-08-26
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

