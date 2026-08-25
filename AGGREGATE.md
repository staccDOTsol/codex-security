# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-25`

## Today

| metric | value |
| --- | --- |
| calls | 12,924 |
| paid calls | 322 |
| free calls | 2,685 |
| revenue | $27.81 |
| cost of goods | $31.26 |
| margin | 80% |
| buying direct would be | $25.74 |
| **leCore saving** | **0.93x** |
| distinct payers | 4 |
| quote → paid conversion | 4.1% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 396,667 |
| paid calls | 27,661 |
| revenue | $1,053.59 |
| average per day | $150.51 |

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
| 2026-08-25 | 12,924 | 322 | $27.81 | 80% | 0.93x |

## Top models

| model | calls |
| --- | --- |
| `openai/gpt-4o-mini` | 1,576 |
| `upstage/solar-pro4` | 1,563 |
| `google/gemini-2.5-flash` | 1,558 |
| `anthropic/claude-sonnet-4` | 1,548 |
| `x-ai/grok-4.6` | 1,548 |
| `moonshotai/kimi-k3` | 210 |
| `anthropic/claude-opus-5` | 173 |
| `google/gemini-3.7-flash` | 70 |
| `anthropic/claude-sonnet-5` | 60 |
| `openai/gpt-5.6-luna` | 30 |

## Coverage

- days: 9, since 2026-08-17
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

