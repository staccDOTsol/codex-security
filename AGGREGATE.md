# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-30`

## Today

| metric | value |
| --- | --- |
| calls | 189,192 |
| paid calls | 1,198 |
| free calls | 72,514 |
| revenue | $26.00 |
| cost of goods | $59.75 |
| margin | 46.4% |
| buying direct would be | $59.61 |
| **leCore saving** | **2.29x** |
| distinct payers | 10 |
| quote → paid conversion | 2.5% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 425,574 |
| paid calls | 3,840 |
| revenue | $177.61 |
| average per day | $35.52 |

## Daily history

| day | calls | paid | revenue | margin | leCore saving |
| --- | --- | --- | --- | --- | --- |
| 2026-08-26 | 33,047 | 243 | $9.82 | 61.6% | 3.58x |
| 2026-08-27 | 34,584 | 151 | $15.24 | 82.3% | 3.92x |
| 2026-08-28 | 91,950 | 1,798 | $123.48 | 43% | 3.37x |
| 2026-08-29 | 76,801 | 450 | $3.07 | 0.8% | 8.33x |
| 2026-08-30 | 189,192 | 1,198 | $26.00 | 46.4% | 2.29x |

## Top models

| model | calls |
| --- | --- |
| `openai/gpt-4o-mini` | 11,194 |
| `x-ai/grok-4.6` | 2,640 |
| `google/gemini-2.5-flash` | 1,704 |
| `upstage/solar-pro4` | 1,702 |
| `anthropic/claude-sonnet-4` | 1,701 |
| `anthropic/claude-sonnet-5` | 440 |
| `z-ai/glm-5.3-flash` | 253 |
| `nvidia/nemotron-3.5-lightning` | 73 |
| `anthropic/claude-fable-5` | 14 |
| `openai/gpt-5.6-sol` | 8 |

## Coverage

- days: 5, since 2026-08-26
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

