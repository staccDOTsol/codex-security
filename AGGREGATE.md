# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-21`

## Today

| metric | value |
| --- | --- |
| calls | 21,663 |
| paid calls | 740 |
| free calls | 5,391 |
| revenue | $22.03 |
| cost of goods | $21.10 |
| margin | 4.2% |
| buying direct would be | $36.17 |
| **leCore saving** | **1.64x** |
| distinct payers | 12 |
| quote → paid conversion | 8.1% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 370,179 |
| paid calls | 29,194 |
| revenue | $1,422.88 |
| average per day | $284.58 |

## Daily history

| day | calls | paid | revenue | margin | leCore saving |
| --- | --- | --- | --- | --- | --- |
| 2026-08-17 | 64,995 | 2,202 | $126.81 | 63.8% | 3.42x |
| 2026-08-18 | 70,361 | 4,353 | $746.91 | 37.9% | 2.7x |
| 2026-08-19 | 112,174 | 1,690 | $257.61 | 27.3% | 1.36x |
| 2026-08-20 | 100,986 | 20,209 | $269.52 | 7.5% | 1.3x |
| 2026-08-21 | 21,663 | 740 | $22.03 | 4.2% | 1.64x |

## Top models

| model | calls |
| --- | --- |
| `openai/gpt-4o-mini` | 2,989 |
| `anthropic/claude-sonnet-4` | 1,813 |
| `x-ai/grok-4.6` | 1,519 |
| `google/gemini-2.5-flash` | 1,512 |
| `anthropic/claude-sonnet-5` | 1,252 |
| `inclusionai/ling-2.6-flash` | 697 |
| `upstage/solar-pro4` | 609 |
| `google/gemini-3.7-flash` | 598 |
| `nex-agi/nex-n2-mini` | 149 |
| `ibm-granite/granite-4.1-8b` | 110 |

## Coverage

- days: 5, since 2026-08-17
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

