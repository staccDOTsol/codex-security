# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-21`

## Today

| metric | value |
| --- | --- |
| calls | 7,709 |
| paid calls | 228 |
| free calls | 1,791 |
| revenue | $2.45 |
| cost of goods | $2.64 |
| margin | -7.6% |
| buying direct would be | $2.67 |
| **leCore saving** | **1.09x** |
| distinct payers | 9 |
| quote → paid conversion | 6.7% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 356,225 |
| paid calls | 28,682 |
| revenue | $1,403.30 |
| average per day | $280.66 |

## Daily history

| day | calls | paid | revenue | margin | leCore saving |
| --- | --- | --- | --- | --- | --- |
| 2026-08-17 | 64,995 | 2,202 | $126.81 | 63.8% | 3.42x |
| 2026-08-18 | 70,361 | 4,353 | $746.91 | 37.9% | 2.7x |
| 2026-08-19 | 112,174 | 1,690 | $257.61 | 27.3% | 1.36x |
| 2026-08-20 | 100,986 | 20,209 | $269.52 | 7.5% | 1.3x |
| 2026-08-21 | 7,709 | 228 | $2.45 | -7.6% | 1.09x |

## Top models

| model | calls |
| --- | --- |
| `openai/gpt-4o-mini` | 916 |
| `google/gemini-2.5-flash` | 612 |
| `anthropic/claude-sonnet-4` | 609 |
| `x-ai/grok-4.6` | 596 |
| `anthropic/claude-sonnet-5` | 552 |
| `inclusionai/ling-2.6-flash` | 457 |
| `upstage/solar-pro4` | 197 |
| `google/gemini-3.7-flash` | 191 |
| `meta-llama/llama-3.1-8b-instruct` | 56 |
| `nvidia/nemotron-3.5-lightning` | 45 |

## Coverage

- days: 5, since 2026-08-17
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

