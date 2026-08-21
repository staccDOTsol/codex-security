# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-21`

## Today

| metric | value |
| --- | --- |
| calls | 57,042 |
| paid calls | 2,649 |
| free calls | 14,119 |
| revenue | $138.48 |
| cost of goods | $58.34 |
| margin | 57.9% |
| buying direct would be | $839.49 |
| **leCore saving** | **6.06x** |
| distinct payers | 16 |
| quote → paid conversion | 9% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 405,558 |
| paid calls | 31,103 |
| revenue | $1,539.33 |
| average per day | $307.87 |

## Daily history

| day | calls | paid | revenue | margin | leCore saving |
| --- | --- | --- | --- | --- | --- |
| 2026-08-17 | 64,995 | 2,202 | $126.81 | 63.8% | 3.42x |
| 2026-08-18 | 70,361 | 4,353 | $746.91 | 37.9% | 2.7x |
| 2026-08-19 | 112,174 | 1,690 | $257.61 | 27.3% | 1.36x |
| 2026-08-20 | 100,986 | 20,209 | $269.52 | 7.5% | 1.3x |
| 2026-08-21 | 57,042 | 2,649 | $138.48 | 57.9% | 6.06x |

## Top models

| model | calls |
| --- | --- |
| `google/gemini-3.7-flash` | 3,362 |
| `openai/gpt-4o-mini` | 1,984 |
| `x-ai/grok-4.6` | 1,558 |
| `upstage/solar-pro4` | 1,269 |
| `anthropic/claude-sonnet-4` | 1,264 |
| `google/gemini-2.5-flash` | 1,260 |
| `anthropic/claude-sonnet-5` | 626 |
| `inclusionai/ling-2.6-flash` | 475 |
| `anthropic/claude-opus-4` | 143 |
| `nex-agi/nex-n2-mini` | 103 |

## Coverage

- days: 5, since 2026-08-17
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

