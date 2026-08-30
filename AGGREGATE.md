# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-30`

## Today

| metric | value |
| --- | --- |
| calls | 174,768 |
| paid calls | 1,058 |
| free calls | 69,660 |
| revenue | $24.86 |
| cost of goods | $57.57 |
| margin | 49.1% |
| buying direct would be | $57.56 |
| **leCore saving** | **2.32x** |
| distinct payers | 9 |
| quote → paid conversion | 2.8% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 411,150 |
| paid calls | 3,700 |
| revenue | $176.48 |
| average per day | $35.30 |

## Daily history

| day | calls | paid | revenue | margin | leCore saving |
| --- | --- | --- | --- | --- | --- |
| 2026-08-26 | 33,047 | 243 | $9.82 | 61.6% | 3.58x |
| 2026-08-27 | 34,584 | 151 | $15.24 | 82.3% | 3.92x |
| 2026-08-28 | 91,950 | 1,798 | $123.48 | 43% | 3.37x |
| 2026-08-29 | 76,801 | 450 | $3.07 | 0.8% | 8.33x |
| 2026-08-30 | 174,768 | 1,058 | $24.86 | 49.1% | 2.32x |

## Top models

| model | calls |
| --- | --- |
| `openai/gpt-4o-mini` | 9,511 |
| `x-ai/grok-4.6` | 1,959 |
| `upstage/solar-pro4` | 1,013 |
| `google/gemini-2.5-flash` | 1,011 |
| `anthropic/claude-sonnet-4` | 1,008 |
| `anthropic/claude-sonnet-5` | 439 |
| `z-ai/glm-5.3-flash` | 253 |
| `nvidia/nemotron-3.5-lightning` | 244 |
| `anthropic/claude-fable-5` | 12 |
| `anthropic/claude-opus-5` | 1 |

## Coverage

- days: 5, since 2026-08-26
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

