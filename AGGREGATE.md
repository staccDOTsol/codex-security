# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-21`

## Today

| metric | value |
| --- | --- |
| calls | 55,961 |
| paid calls | 2,545 |
| free calls | 13,902 |
| revenue | $137.42 |
| cost of goods | $57.23 |
| margin | 58.4% |
| buying direct would be | $838.26 |
| **leCore saving** | **6.1x** |
| distinct payers | 16 |
| quote → paid conversion | 8.9% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 404,477 |
| paid calls | 30,999 |
| revenue | $1,538.27 |
| average per day | $307.65 |

## Daily history

| day | calls | paid | revenue | margin | leCore saving |
| --- | --- | --- | --- | --- | --- |
| 2026-08-17 | 64,995 | 2,202 | $126.81 | 63.8% | 3.42x |
| 2026-08-18 | 70,361 | 4,353 | $746.91 | 37.9% | 2.7x |
| 2026-08-19 | 112,174 | 1,690 | $257.61 | 27.3% | 1.36x |
| 2026-08-20 | 100,986 | 20,209 | $269.52 | 7.5% | 1.3x |
| 2026-08-21 | 55,961 | 2,545 | $137.42 | 58.4% | 6.1x |

## Top models

| model | calls |
| --- | --- |
| `google/gemini-3.7-flash` | 3,162 |
| `openai/gpt-4o-mini` | 2,022 |
| `x-ai/grok-4.6` | 1,608 |
| `upstage/solar-pro4` | 1,310 |
| `anthropic/claude-sonnet-4` | 1,303 |
| `google/gemini-2.5-flash` | 1,300 |
| `anthropic/claude-sonnet-5` | 608 |
| `inclusionai/ling-2.6-flash` | 475 |
| `anthropic/claude-opus-4` | 143 |
| `nex-agi/nex-n2-mini` | 103 |

## Coverage

- days: 5, since 2026-08-17
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

