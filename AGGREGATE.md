# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-28`

## Today

| metric | value |
| --- | --- |
| calls | 41,372 |
| paid calls | 1,304 |
| free calls | 13,568 |
| revenue | $86.80 |
| cost of goods | $250.34 |
| margin | 50.8% |
| buying direct would be | $274.63 |
| **leCore saving** | **3.16x** |
| distinct payers | 13 |
| quote → paid conversion | 10.1% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 109,003 |
| paid calls | 1,698 |
| revenue | $111.86 |
| average per day | $37.29 |

## Daily history

| day | calls | paid | revenue | margin | leCore saving |
| --- | --- | --- | --- | --- | --- |
| 2026-08-26 | 33,047 | 243 | $9.82 | 61.6% | 3.58x |
| 2026-08-27 | 34,584 | 151 | $15.24 | 82.3% | 3.92x |
| 2026-08-28 | 41,372 | 1,304 | $86.80 | 50.8% | 3.16x |

## Top models

| model | calls |
| --- | --- |
| `x-ai/grok-4.3` | 1,403 |
| `x-ai/grok-4.6` | 821 |
| `openai/gpt-4o-mini` | 807 |
| `upstage/solar-pro4` | 800 |
| `google/gemini-2.5-flash` | 800 |
| `anthropic/claude-sonnet-4` | 800 |
| `anthropic/claude-opus-5` | 313 |
| `google/gemini-3.7-flash` | 212 |
| `z-ai/glm-5.3-flash` | 171 |
| `anthropic/claude-sonnet-5` | 136 |

## Coverage

- days: 3, since 2026-08-26
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

