# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-21`

## Today

| metric | value |
| --- | --- |
| calls | 32,310 |
| paid calls | 890 |
| free calls | 7,669 |
| revenue | $38.56 |
| cost of goods | $31.76 |
| margin | 17.7% |
| buying direct would be | $68.93 |
| **leCore saving** | **1.79x** |
| distinct payers | 15 |
| quote → paid conversion | 5.8% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 380,826 |
| paid calls | 29,344 |
| revenue | $1,439.42 |
| average per day | $287.88 |

## Daily history

| day | calls | paid | revenue | margin | leCore saving |
| --- | --- | --- | --- | --- | --- |
| 2026-08-17 | 64,995 | 2,202 | $126.81 | 63.8% | 3.42x |
| 2026-08-18 | 70,361 | 4,353 | $746.91 | 37.9% | 2.7x |
| 2026-08-19 | 112,174 | 1,690 | $257.61 | 27.3% | 1.36x |
| 2026-08-20 | 100,986 | 20,209 | $269.52 | 7.5% | 1.3x |
| 2026-08-21 | 32,310 | 890 | $38.56 | 17.7% | 1.79x |

## Top models

| model | calls |
| --- | --- |
| `openai/gpt-4o-mini` | 2,946 |
| `x-ai/grok-4.6` | 2,014 |
| `anthropic/claude-sonnet-4` | 1,860 |
| `google/gemini-2.5-flash` | 1,839 |
| `upstage/solar-pro4` | 1,350 |
| `anthropic/claude-sonnet-5` | 831 |
| `google/gemini-3.7-flash` | 453 |
| `inclusionai/ling-2.6-flash` | 406 |
| `anthropic/claude-opus-4` | 164 |
| `nex-agi/nex-n2-mini` | 153 |

## Coverage

- days: 5, since 2026-08-17
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

