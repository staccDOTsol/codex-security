# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-30`

## Today

| metric | value |
| --- | --- |
| calls | 203,224 |
| paid calls | 1,355 |
| free calls | 75,908 |
| revenue | $26.66 |
| cost of goods | $60.73 |
| margin | 45.7% |
| buying direct would be | $60.58 |
| **leCore saving** | **2.27x** |
| distinct payers | 10 |
| quote → paid conversion | 2.4% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 439,606 |
| paid calls | 3,997 |
| revenue | $178.27 |
| average per day | $35.65 |

## Daily history

| day | calls | paid | revenue | margin | leCore saving |
| --- | --- | --- | --- | --- | --- |
| 2026-08-26 | 33,047 | 243 | $9.82 | 61.6% | 3.58x |
| 2026-08-27 | 34,584 | 151 | $15.24 | 82.3% | 3.92x |
| 2026-08-28 | 91,950 | 1,798 | $123.48 | 43% | 3.37x |
| 2026-08-29 | 76,801 | 450 | $3.07 | 0.8% | 8.33x |
| 2026-08-30 | 203,224 | 1,355 | $26.66 | 45.7% | 2.27x |

## Top models

| model | calls |
| --- | --- |
| `openai/gpt-4o-mini` | 11,102 |
| `x-ai/grok-4.6` | 2,498 |
| `upstage/solar-pro4` | 1,553 |
| `google/gemini-2.5-flash` | 1,553 |
| `anthropic/claude-sonnet-4` | 1,550 |
| `anthropic/claude-sonnet-5` | 440 |
| `z-ai/glm-5.3-flash` | 253 |
| `nvidia/nemotron-3.5-lightning` | 53 |
| `anthropic/claude-fable-5` | 14 |
| `anthropic/claude-opus-4.8` | 3 |

## Coverage

- days: 5, since 2026-08-26
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

