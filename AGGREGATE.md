# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-09-01`

## Today

| metric | value |
| --- | --- |
| calls | 14,006 |
| paid calls | 63 |
| free calls | 3,683 |
| revenue | $1.00 |
| cost of goods | $2.89 |
| margin | 93.4% |
| buying direct would be | $2.89 |
| **leCore saving** | **2.9x** |
| distinct payers | 4 |
| quote → paid conversion | 0.6% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 539,259 |
| paid calls | 5,472 |
| revenue | $213.09 |
| average per day | $30.44 |

## Daily history

| day | calls | paid | revenue | margin | leCore saving |
| --- | --- | --- | --- | --- | --- |
| 2026-08-26 | 33,047 | 243 | $9.82 | 61.6% | 3.58x |
| 2026-08-27 | 34,584 | 151 | $15.24 | 82.3% | 3.92x |
| 2026-08-28 | 91,950 | 1,798 | $123.48 | 43% | 3.37x |
| 2026-08-29 | 76,801 | 450 | $3.07 | 0.8% | 8.33x |
| 2026-08-30 | 207,186 | 1,414 | $26.85 | 45.5% | 2.27x |
| 2026-08-31 | 81,685 | 1,353 | $33.63 | 60.5% | 2.25x |
| 2026-09-01 | 14,006 | 63 | $1.00 | 93.4% | 2.9x |

## Top models

| model | calls |
| --- | --- |
| `openai/gpt-4o-mini` | 2,057 |
| `google/gemini-2.5-flash` | 1,524 |
| `upstage/solar-pro4` | 1,446 |
| `anthropic/claude-sonnet-4` | 1,444 |
| `x-ai/grok-4.6` | 1,443 |
| `Wan-AI/wan2.7-t2v` | 79 |
| `black-forest-labs/FLUX.1.1-pro` | 78 |
| `google/gemini-3.7-flash` | 21 |
| `qwen/qwen3.8-flash` | 6 |
| `moonshotai/kimi-k3` | 4 |

## Coverage

- days: 7, since 2026-08-26
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

