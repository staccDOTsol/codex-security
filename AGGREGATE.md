# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-21`

## Today

| metric | value |
| --- | --- |
| calls | 19,862 |
| paid calls | 688 |
| free calls | 4,904 |
| revenue | $20.13 |
| cost of goods | $20.48 |
| margin | -1.7% |
| buying direct would be | $32.09 |
| **leCore saving** | **1.59x** |
| distinct payers | 12 |
| quote → paid conversion | 8.3% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 368,378 |
| paid calls | 29,142 |
| revenue | $1,420.98 |
| average per day | $284.20 |

## Daily history

| day | calls | paid | revenue | margin | leCore saving |
| --- | --- | --- | --- | --- | --- |
| 2026-08-17 | 64,995 | 2,202 | $126.81 | 63.8% | 3.42x |
| 2026-08-18 | 70,361 | 4,353 | $746.91 | 37.9% | 2.7x |
| 2026-08-19 | 112,174 | 1,690 | $257.61 | 27.3% | 1.36x |
| 2026-08-20 | 100,986 | 20,209 | $269.52 | 7.5% | 1.3x |
| 2026-08-21 | 19,862 | 688 | $20.13 | -1.7% | 1.59x |

## Top models

| model | calls |
| --- | --- |
| `openai/gpt-4o-mini` | 2,908 |
| `anthropic/claude-sonnet-4` | 1,736 |
| `x-ai/grok-4.6` | 1,439 |
| `google/gemini-2.5-flash` | 1,434 |
| `anthropic/claude-sonnet-5` | 1,286 |
| `inclusionai/ling-2.6-flash` | 692 |
| `google/gemini-3.7-flash` | 598 |
| `upstage/solar-pro4` | 528 |
| `ibm-granite/granite-4.1-8b` | 110 |
| `nex-agi/nex-n2-mini` | 103 |

## Coverage

- days: 5, since 2026-08-17
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

