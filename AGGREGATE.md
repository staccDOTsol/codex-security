# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-29`

## Today

| metric | value |
| --- | --- |
| calls | 63,222 |
| paid calls | 225 |
| free calls | 18,253 |
| revenue | $0.62 |
| cost of goods | $8.44 |
| margin | 15.6% |
| buying direct would be | $11.28 |
| **leCore saving** | **18.24x** |
| distinct payers | 7 |
| quote → paid conversion | 0.7% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 222,803 |
| paid calls | 2,417 |
| revenue | $149.16 |
| average per day | $37.29 |

## Daily history

| day | calls | paid | revenue | margin | leCore saving |
| --- | --- | --- | --- | --- | --- |
| 2026-08-26 | 33,047 | 243 | $9.82 | 61.6% | 3.58x |
| 2026-08-27 | 34,584 | 151 | $15.24 | 82.3% | 3.92x |
| 2026-08-28 | 91,950 | 1,798 | $123.48 | 43% | 3.37x |
| 2026-08-29 | 63,222 | 225 | $0.62 | 15.6% | 18.24x |

## Top models

| model | calls |
| --- | --- |
| `openai/gpt-4o-mini` | 3,883 |
| `x-ai/grok-4.6` | 1,254 |
| `google/gemini-2.5-flash` | 1,024 |
| `upstage/solar-pro4` | 1,016 |
| `anthropic/claude-sonnet-4` | 1,016 |
| `anthropic/claude-sonnet-5` | 830 |
| `z-ai/glm-5.3-flash` | 91 |
| `anthropic/claude-opus-5` | 69 |
| `nvidia/nemotron-3.5-lightning` | 9 |
| `anthropic/claude-fable-5` | 6 |

## Coverage

- days: 4, since 2026-08-26
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

