# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-09-01`

## Today

| metric | value |
| --- | --- |
| calls | 47,125 |
| paid calls | 2,615 |
| free calls | 10,012 |
| revenue | $76.95 |
| cost of goods | $187.05 |
| margin | 64.9% |
| buying direct would be | $185.66 |
| **leCore saving** | **2.41x** |
| distinct payers | 9 |
| quote → paid conversion | 7.6% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 572,378 |
| paid calls | 8,024 |
| revenue | $289.05 |
| average per day | $41.29 |

## Daily history

| day | calls | paid | revenue | margin | leCore saving |
| --- | --- | --- | --- | --- | --- |
| 2026-08-26 | 33,047 | 243 | $9.82 | 61.6% | 3.58x |
| 2026-08-27 | 34,584 | 151 | $15.24 | 82.3% | 3.92x |
| 2026-08-28 | 91,950 | 1,798 | $123.48 | 43% | 3.37x |
| 2026-08-29 | 76,801 | 450 | $3.07 | 0.8% | 8.33x |
| 2026-08-30 | 207,186 | 1,414 | $26.85 | 45.5% | 2.27x |
| 2026-08-31 | 81,685 | 1,353 | $33.63 | 60.5% | 2.25x |
| 2026-09-01 | 47,125 | 2,615 | $76.95 | 64.9% | 2.41x |

## Top models

| model | calls |
| --- | --- |
| `openai/gpt-4o-mini` | 7,555 |
| `x-ai/grok-4.6` | 3,857 |
| `google/gemini-2.5-flash` | 1,797 |
| `upstage/solar-pro4` | 1,511 |
| `anthropic/claude-sonnet-4` | 1,509 |
| `z-ai/glm-5.3-flash` | 348 |
| `Wan-AI/wan2.7-t2v` | 183 |
| `black-forest-labs/FLUX.1.1-pro` | 180 |
| `anthropic/claude-sonnet-5` | 96 |
| `anthropic/claude-opus-5` | 84 |

## Coverage

- days: 7, since 2026-08-26
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

