# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-31`

## Today

| metric | value |
| --- | --- |
| calls | 52,043 |
| paid calls | 1,189 |
| free calls | 9,789 |
| revenue | $32.33 |
| cost of goods | $72.30 |
| margin | 59.9% |
| buying direct would be | $72.30 |
| **leCore saving** | **2.24x** |
| distinct payers | 11 |
| quote → paid conversion | 3.2% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 495,611 |
| paid calls | 5,245 |
| revenue | $210.80 |
| average per day | $35.13 |

## Daily history

| day | calls | paid | revenue | margin | leCore saving |
| --- | --- | --- | --- | --- | --- |
| 2026-08-26 | 33,047 | 243 | $9.82 | 61.6% | 3.58x |
| 2026-08-27 | 34,584 | 151 | $15.24 | 82.3% | 3.92x |
| 2026-08-28 | 91,950 | 1,798 | $123.48 | 43% | 3.37x |
| 2026-08-29 | 76,801 | 450 | $3.07 | 0.8% | 8.33x |
| 2026-08-30 | 207,186 | 1,414 | $26.85 | 45.5% | 2.27x |
| 2026-08-31 | 52,043 | 1,189 | $32.33 | 59.9% | 2.24x |

## Top models

| model | calls |
| --- | --- |
| `openai/gpt-4o-mini` | 9,938 |
| `x-ai/grok-4.6` | 2,430 |
| `google/gemini-2.5-flash` | 2,183 |
| `anthropic/claude-sonnet-4` | 1,525 |
| `upstage/solar-pro4` | 1,522 |
| `deepseek/deepseek-v4-pro-0813` | 266 |
| `anthropic/claude-sonnet-5` | 18 |
| `anthropic/claude-fable-5` | 9 |
| `anthropic/claude-opus-4.8` | 4 |
| `nvidia/nemotron-3.5-lightning` | 4 |

## Coverage

- days: 6, since 2026-08-26
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

