# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-21`

## Today

| metric | value |
| --- | --- |
| calls | 11,312 |
| paid calls | 388 |
| free calls | 2,835 |
| revenue | $10.08 |
| cost of goods | $10.20 |
| margin | -1.3% |
| buying direct would be | $16.12 |
| **leCore saving** | **1.6x** |
| distinct payers | 10 |
| quote → paid conversion | 8.1% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 359,828 |
| paid calls | 28,842 |
| revenue | $1,410.93 |
| average per day | $282.19 |

## Daily history

| day | calls | paid | revenue | margin | leCore saving |
| --- | --- | --- | --- | --- | --- |
| 2026-08-17 | 64,995 | 2,202 | $126.81 | 63.8% | 3.42x |
| 2026-08-18 | 70,361 | 4,353 | $746.91 | 37.9% | 2.7x |
| 2026-08-19 | 112,174 | 1,690 | $257.61 | 27.3% | 1.36x |
| 2026-08-20 | 100,986 | 20,209 | $269.52 | 7.5% | 1.3x |
| 2026-08-21 | 11,312 | 388 | $10.08 | -1.3% | 1.6x |

## Top models

| model | calls |
| --- | --- |
| `openai/gpt-4o-mini` | 1,538 |
| `anthropic/claude-sonnet-4` | 990 |
| `google/gemini-2.5-flash` | 838 |
| `x-ai/grok-4.6` | 820 |
| `anthropic/claude-sonnet-5` | 799 |
| `inclusionai/ling-2.6-flash` | 478 |
| `google/gemini-3.7-flash` | 337 |
| `upstage/solar-pro4` | 280 |
| `meta-llama/llama-3.1-8b-instruct` | 68 |
| `nvidia/nemotron-3.5-lightning` | 49 |

## Coverage

- days: 5, since 2026-08-17
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

