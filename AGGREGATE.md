# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-21`

## Today

| metric | value |
| --- | --- |
| calls | 54,719 |
| paid calls | 2,400 |
| free calls | 13,623 |
| revenue | $133.20 |
| cost of goods | $55.06 |
| margin | 58.7% |
| buying direct would be | $815.01 |
| **leCore saving** | **6.12x** |
| distinct payers | 16 |
| quote → paid conversion | 8.5% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 403,235 |
| paid calls | 30,854 |
| revenue | $1,534.05 |
| average per day | $306.81 |

## Daily history

| day | calls | paid | revenue | margin | leCore saving |
| --- | --- | --- | --- | --- | --- |
| 2026-08-17 | 64,995 | 2,202 | $126.81 | 63.8% | 3.42x |
| 2026-08-18 | 70,361 | 4,353 | $746.91 | 37.9% | 2.7x |
| 2026-08-19 | 112,174 | 1,690 | $257.61 | 27.3% | 1.36x |
| 2026-08-20 | 100,986 | 20,209 | $269.52 | 7.5% | 1.3x |
| 2026-08-21 | 54,719 | 2,400 | $133.20 | 58.7% | 6.12x |

## Top models

| model | calls |
| --- | --- |
| `google/gemini-3.7-flash` | 2,880 |
| `openai/gpt-4o-mini` | 2,083 |
| `x-ai/grok-4.6` | 1,679 |
| `upstage/solar-pro4` | 1,367 |
| `anthropic/claude-sonnet-4` | 1,363 |
| `google/gemini-2.5-flash` | 1,358 |
| `anthropic/claude-sonnet-5` | 585 |
| `inclusionai/ling-2.6-flash` | 475 |
| `anthropic/claude-opus-4` | 143 |
| `nex-agi/nex-n2-mini` | 103 |

## Coverage

- days: 5, since 2026-08-17
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

