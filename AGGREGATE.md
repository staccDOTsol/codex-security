# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-21`

## Today

| metric | value |
| --- | --- |
| calls | 30,427 |
| paid calls | 858 |
| free calls | 7,205 |
| revenue | $38.32 |
| cost of goods | $31.23 |
| margin | 18.5% |
| buying direct would be | $68.61 |
| **leCore saving** | **1.79x** |
| distinct payers | 14 |
| quote → paid conversion | 6% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 378,943 |
| paid calls | 29,312 |
| revenue | $1,439.17 |
| average per day | $287.83 |

## Daily history

| day | calls | paid | revenue | margin | leCore saving |
| --- | --- | --- | --- | --- | --- |
| 2026-08-17 | 64,995 | 2,202 | $126.81 | 63.8% | 3.42x |
| 2026-08-18 | 70,361 | 4,353 | $746.91 | 37.9% | 2.7x |
| 2026-08-19 | 112,174 | 1,690 | $257.61 | 27.3% | 1.36x |
| 2026-08-20 | 100,986 | 20,209 | $269.52 | 7.5% | 1.3x |
| 2026-08-21 | 30,427 | 858 | $38.32 | 18.5% | 1.79x |

## Top models

| model | calls |
| --- | --- |
| `openai/gpt-4o-mini` | 2,985 |
| `anthropic/claude-sonnet-4` | 1,954 |
| `x-ai/grok-4.6` | 1,883 |
| `google/gemini-2.5-flash` | 1,794 |
| `upstage/solar-pro4` | 1,187 |
| `anthropic/claude-sonnet-5` | 934 |
| `google/gemini-3.7-flash` | 461 |
| `inclusionai/ling-2.6-flash` | 406 |
| `nex-agi/nex-n2-mini` | 167 |
| `anthropic/claude-opus-4` | 164 |

## Coverage

- days: 5, since 2026-08-17
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

