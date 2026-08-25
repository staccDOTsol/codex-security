# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-25`

## Today

| metric | value |
| --- | --- |
| calls | 32,620 |
| paid calls | 1,081 |
| free calls | 6,467 |
| revenue | $256.81 |
| cost of goods | $284.80 |
| margin | 77.5% |
| buying direct would be | $265.58 |
| **leCore saving** | **1.03x** |
| distinct payers | 7 |
| quote → paid conversion | 5.6% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 416,363 |
| paid calls | 28,420 |
| revenue | $1,282.59 |
| average per day | $183.23 |

## Daily history

| day | calls | paid | revenue | margin | leCore saving |
| --- | --- | --- | --- | --- | --- |
| 2026-08-17 | 64,995 | 2,202 | $126.81 | 63.8% | 3.42x |
| 2026-08-18 | 70,361 | 4,353 | $746.91 | 37.9% | 2.7x |
| 2026-08-19 | 112,174 | 1,697 | $263.59 | 78.2% | 1.34x |
| 2026-08-20 | 100,986 | 20,707 | $411.86 | 26.4% | 2.11x |
| 2026-08-21 | 65,223 | 4,022 | $203.15 | 24.4% | 4.59x |
| 2026-08-22 | 35,072 | 13 | $40.85 | 42.6% | 1.64x |
| 2026-08-23 | 37,311 | 7 | $0.78 | 90.8% | 2.37x |
| 2026-08-24 | 32,977 | 893 | $105.54 | 36.9% | 1.85x |
| 2026-08-25 | 32,620 | 1,081 | $256.81 | 77.5% | 1.03x |

## Top models

| model | calls |
| --- | --- |
| `openai/gpt-4o-mini` | 1,681 |
| `upstage/solar-pro4` | 1,615 |
| `anthropic/claude-sonnet-4` | 1,607 |
| `google/gemini-2.5-flash` | 1,605 |
| `x-ai/grok-4.6` | 1,604 |
| `openai/gpt-5.6-sol` | 519 |
| `openai/gpt-5.6-luna` | 412 |
| `anthropic/claude-fable-5` | 238 |
| `anthropic/claude-sonnet-5` | 183 |
| `anthropic/claude-opus-5` | 102 |

## Coverage

- days: 9, since 2026-08-17
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

