# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-29`

## Today

| metric | value |
| --- | --- |
| calls | 41,949 |
| paid calls | 51 |
| free calls | 13,487 |
| revenue | $0.27 |
| cost of goods | $1.73 |
| margin | 14.8% |
| buying direct would be | $4.58 |
| **leCore saving** | **16.87x** |
| distinct payers | 3 |
| quote → paid conversion | 0.3% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 201,530 |
| paid calls | 2,243 |
| revenue | $148.81 |
| average per day | $37.20 |

## Daily history

| day | calls | paid | revenue | margin | leCore saving |
| --- | --- | --- | --- | --- | --- |
| 2026-08-26 | 33,047 | 243 | $9.82 | 61.6% | 3.58x |
| 2026-08-27 | 34,584 | 151 | $15.24 | 82.3% | 3.92x |
| 2026-08-28 | 91,950 | 1,798 | $123.48 | 43% | 3.37x |
| 2026-08-29 | 41,949 | 51 | $0.27 | 14.8% | 16.87x |

## Top models

| model | calls |
| --- | --- |
| `openai/gpt-4o-mini` | 1,846 |
| `upstage/solar-pro4` | 1,115 |
| `google/gemini-2.5-flash` | 1,114 |
| `x-ai/grok-4.6` | 1,113 |
| `anthropic/claude-sonnet-4` | 1,108 |
| `anthropic/claude-sonnet-5` | 608 |
| `nvidia/nemotron-3.5-lightning` | 15 |
| `google/gemini-3.7-flash` | 4 |
| `anthropic/claude-opus-5` | 2 |
| `sao10k/l3-lunaris-8b` | 1 |

## Coverage

- days: 4, since 2026-08-26
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

