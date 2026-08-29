# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-29`

## Today

| metric | value |
| --- | --- |
| calls | 25,382 |
| paid calls | 42 |
| free calls | 9,517 |
| revenue | $0.05 |
| cost of goods | $0.28 |
| margin | 31.1% |
| buying direct would be | $0.28 |
| **leCore saving** | **5.72x** |
| distinct payers | 1 |
| quote → paid conversion | 0.4% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 184,963 |
| paid calls | 2,234 |
| revenue | $148.59 |
| average per day | $37.15 |

## Daily history

| day | calls | paid | revenue | margin | leCore saving |
| --- | --- | --- | --- | --- | --- |
| 2026-08-26 | 33,047 | 243 | $9.82 | 61.6% | 3.58x |
| 2026-08-27 | 34,584 | 151 | $15.24 | 82.3% | 3.92x |
| 2026-08-28 | 91,950 | 1,798 | $123.48 | 43% | 3.37x |
| 2026-08-29 | 25,382 | 42 | $0.05 | 31.1% | 5.72x |

## Top models

| model | calls |
| --- | --- |
| `openai/gpt-4o-mini` | 1,261 |
| `google/gemini-2.5-flash` | 741 |
| `upstage/solar-pro4` | 738 |
| `anthropic/claude-sonnet-4` | 732 |
| `x-ai/grok-4.6` | 726 |
| `anthropic/claude-sonnet-5` | 414 |
| `nvidia/nemotron-3.5-lightning` | 6 |
| `google/gemini-3.7-flash` | 3 |
| `anthropic/claude-opus-4.8` | 1 |
| `sao10k/l3-lunaris-8b` | 1 |

## Coverage

- days: 4, since 2026-08-26
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

