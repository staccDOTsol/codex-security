# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-21`

## Today

| metric | value |
| --- | --- |
| calls | 24,886 |
| paid calls | 787 |
| free calls | 6,282 |
| revenue | $37.91 |
| cost of goods | $29.16 |
| margin | 23.1% |
| buying direct would be | $67.93 |
| **leCore saving** | **1.79x** |
| distinct payers | 12 |
| quote → paid conversion | 7.5% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 373,402 |
| paid calls | 29,241 |
| revenue | $1,438.76 |
| average per day | $287.75 |

## Daily history

| day | calls | paid | revenue | margin | leCore saving |
| --- | --- | --- | --- | --- | --- |
| 2026-08-17 | 64,995 | 2,202 | $126.81 | 63.8% | 3.42x |
| 2026-08-18 | 70,361 | 4,353 | $746.91 | 37.9% | 2.7x |
| 2026-08-19 | 112,174 | 1,690 | $257.61 | 27.3% | 1.36x |
| 2026-08-20 | 100,986 | 20,209 | $269.52 | 7.5% | 1.3x |
| 2026-08-21 | 24,886 | 787 | $37.91 | 23.1% | 1.79x |

## Top models

| model | calls |
| --- | --- |
| `openai/gpt-4o-mini` | 2,995 |
| `anthropic/claude-sonnet-4` | 1,816 |
| `x-ai/grok-4.6` | 1,514 |
| `google/gemini-2.5-flash` | 1,499 |
| `anthropic/claude-sonnet-5` | 1,150 |
| `upstage/solar-pro4` | 727 |
| `inclusionai/ling-2.6-flash` | 617 |
| `google/gemini-3.7-flash` | 604 |
| `nex-agi/nex-n2-mini` | 179 |
| `anthropic/claude-opus-4` | 164 |

## Coverage

- days: 5, since 2026-08-17
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

