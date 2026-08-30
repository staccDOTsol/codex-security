# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-30`

## Today

| metric | value |
| --- | --- |
| calls | 195,726 |
| paid calls | 1,266 |
| free calls | 74,132 |
| revenue | $26.33 |
| cost of goods | $60.28 |
| margin | 46.1% |
| buying direct would be | $60.14 |
| **leCore saving** | **2.28x** |
| distinct payers | 10 |
| quote → paid conversion | 2.4% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 432,108 |
| paid calls | 3,908 |
| revenue | $177.94 |
| average per day | $35.59 |

## Daily history

| day | calls | paid | revenue | margin | leCore saving |
| --- | --- | --- | --- | --- | --- |
| 2026-08-26 | 33,047 | 243 | $9.82 | 61.6% | 3.58x |
| 2026-08-27 | 34,584 | 151 | $15.24 | 82.3% | 3.92x |
| 2026-08-28 | 91,950 | 1,798 | $123.48 | 43% | 3.37x |
| 2026-08-29 | 76,801 | 450 | $3.07 | 0.8% | 8.33x |
| 2026-08-30 | 195,726 | 1,266 | $26.33 | 46.1% | 2.28x |

## Top models

| model | calls |
| --- | --- |
| `openai/gpt-4o-mini` | 11,127 |
| `x-ai/grok-4.6` | 2,585 |
| `upstage/solar-pro4` | 1,642 |
| `google/gemini-2.5-flash` | 1,642 |
| `anthropic/claude-sonnet-4` | 1,639 |
| `anthropic/claude-sonnet-5` | 440 |
| `z-ai/glm-5.3-flash` | 253 |
| `nvidia/nemotron-3.5-lightning` | 53 |
| `anthropic/claude-fable-5` | 14 |
| `anthropic/claude-opus-4.8` | 3 |

## Coverage

- days: 5, since 2026-08-26
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

