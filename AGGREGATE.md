# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-09-02`

## Today

| metric | value |
| --- | --- |
| calls | 4,347 |
| paid calls | 303 |
| free calls | 831 |
| revenue | $14.30 |
| cost of goods | $55.39 |
| margin | 77% |
| buying direct would be | $55.27 |
| **leCore saving** | **3.86x** |
| distinct payers | 5 |
| quote → paid conversion | 10.8% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 606,242 |
| paid calls | 14,320 |
| revenue | $662.15 |
| average per day | $94.59 |

## Daily history

| day | calls | paid | revenue | margin | leCore saving |
| --- | --- | --- | --- | --- | --- |
| 2026-08-26 | 33,047 | 243 | $9.82 | 61.6% | 3.58x |
| 2026-08-27 | 34,584 | 151 | $15.24 | 82.3% | 3.92x |
| 2026-08-28 | 91,950 | 1,798 | $123.48 | 43% | 3.37x |
| 2026-08-29 | 76,801 | 450 | $3.07 | 0.8% | 8.33x |
| 2026-08-30 | 207,186 | 1,414 | $26.85 | 45.5% | 2.27x |
| 2026-08-31 | 81,685 | 1,353 | $33.63 | 60.5% | 2.25x |
| 2026-09-01 | 109,689 | 8,851 | $445.58 | 54% | 2.61x |
| 2026-09-02 | 4,347 | 303 | $14.30 | 77% | 3.86x |

## Top models

| model | calls |
| --- | --- |
| `openai/gpt-4o-mini` | 1,152 |
| `x-ai/grok-4.6` | 1,063 |
| `google/gemini-2.5-flash` | 400 |
| `anthropic/claude-sonnet-4` | 357 |
| `upstage/solar-pro4` | 295 |
| `deepseek/deepseek-v4-flash` | 71 |
| `anthropic/claude-sonnet-5` | 59 |
| `anthropic/claude-fable-5.1` | 38 |
| `black-forest-labs/FLUX.1.1-pro` | 3 |
| `Wan-AI/wan2.7-t2v` | 3 |

## Coverage

- days: 8, since 2026-08-26
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

