# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-29`

## Today

| metric | value |
| --- | --- |
| calls | 53,636 |
| paid calls | 128 |
| free calls | 16,180 |
| revenue | $0.43 |
| cost of goods | $2.74 |
| margin | 9.9% |
| buying direct would be | $5.58 |
| **leCore saving** | **13.12x** |
| distinct payers | 7 |
| quote → paid conversion | 0.5% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 213,217 |
| paid calls | 2,320 |
| revenue | $148.96 |
| average per day | $37.24 |

## Daily history

| day | calls | paid | revenue | margin | leCore saving |
| --- | --- | --- | --- | --- | --- |
| 2026-08-26 | 33,047 | 243 | $9.82 | 61.6% | 3.58x |
| 2026-08-27 | 34,584 | 151 | $15.24 | 82.3% | 3.92x |
| 2026-08-28 | 91,950 | 1,798 | $123.48 | 43% | 3.37x |
| 2026-08-29 | 53,636 | 128 | $0.43 | 9.9% | 13.12x |

## Top models

| model | calls |
| --- | --- |
| `openai/gpt-4o-mini` | 2,868 |
| `x-ai/grok-4.6` | 1,165 |
| `google/gemini-2.5-flash` | 1,010 |
| `upstage/solar-pro4` | 1,006 |
| `anthropic/claude-sonnet-4` | 1,003 |
| `anthropic/claude-sonnet-5` | 744 |
| `z-ai/glm-5.3-flash` | 89 |
| `nvidia/nemotron-3.5-lightning` | 7 |
| `sao10k/l3-lunaris-8b` | 1 |
| `Wan-AI/wan2.7-t2v` | 1 |

## Coverage

- days: 4, since 2026-08-26
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

