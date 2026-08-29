# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-29`

## Today

| metric | value |
| --- | --- |
| calls | 74,393 |
| paid calls | 395 |
| free calls | 19,963 |
| revenue | $2.14 |
| cost of goods | $18.18 |
| margin | -0.2% |
| buying direct would be | $20.12 |
| **leCore saving** | **9.39x** |
| distinct payers | 8 |
| quote → paid conversion | 1% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 233,974 |
| paid calls | 2,587 |
| revenue | $150.68 |
| average per day | $37.67 |

## Daily history

| day | calls | paid | revenue | margin | leCore saving |
| --- | --- | --- | --- | --- | --- |
| 2026-08-26 | 33,047 | 243 | $9.82 | 61.6% | 3.58x |
| 2026-08-27 | 34,584 | 151 | $15.24 | 82.3% | 3.92x |
| 2026-08-28 | 91,950 | 1,798 | $123.48 | 43% | 3.37x |
| 2026-08-29 | 74,393 | 395 | $2.14 | -0.2% | 9.39x |

## Top models

| model | calls |
| --- | --- |
| `openai/gpt-4o-mini` | 5,052 |
| `x-ai/grok-4.6` | 1,959 |
| `google/gemini-2.5-flash` | 1,337 |
| `upstage/solar-pro4` | 1,331 |
| `anthropic/claude-sonnet-4` | 1,330 |
| `anthropic/claude-sonnet-5` | 928 |
| `anthropic/claude-opus-5` | 105 |
| `z-ai/glm-5.3-flash` | 91 |
| `nvidia/nemotron-3.5-lightning` | 14 |
| `openai/gpt-5.6-sol` | 12 |

## Coverage

- days: 4, since 2026-08-26
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

