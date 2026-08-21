# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-21`

## Today

| metric | value |
| --- | --- |
| calls | 15,758 |
| paid calls | 644 |
| free calls | 3,920 |
| revenue | $18.52 |
| cost of goods | $18.85 |
| margin | -1.8% |
| buying direct would be | $30.42 |
| **leCore saving** | **1.64x** |
| distinct payers | 10 |
| quote → paid conversion | 10% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 364,274 |
| paid calls | 29,098 |
| revenue | $1,419.37 |
| average per day | $283.87 |

## Daily history

| day | calls | paid | revenue | margin | leCore saving |
| --- | --- | --- | --- | --- | --- |
| 2026-08-17 | 64,995 | 2,202 | $126.81 | 63.8% | 3.42x |
| 2026-08-18 | 70,361 | 4,353 | $746.91 | 37.9% | 2.7x |
| 2026-08-19 | 112,174 | 1,690 | $257.61 | 27.3% | 1.36x |
| 2026-08-20 | 100,986 | 20,209 | $269.52 | 7.5% | 1.3x |
| 2026-08-21 | 15,758 | 644 | $18.52 | -1.8% | 1.64x |

## Top models

| model | calls |
| --- | --- |
| `openai/gpt-4o-mini` | 2,279 |
| `anthropic/claude-sonnet-4` | 1,364 |
| `anthropic/claude-sonnet-5` | 1,094 |
| `google/gemini-2.5-flash` | 1,081 |
| `x-ai/grok-4.6` | 1,077 |
| `inclusionai/ling-2.6-flash` | 676 |
| `google/gemini-3.7-flash` | 547 |
| `upstage/solar-pro4` | 409 |
| `nex-agi/nex-n2-mini` | 81 |
| `sao10k/l3-lunaris-8b` | 80 |

## Coverage

- days: 5, since 2026-08-17
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

