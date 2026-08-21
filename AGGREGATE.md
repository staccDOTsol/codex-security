# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-21`

## Today

| metric | value |
| --- | --- |
| calls | 61,237 |
| paid calls | 2,898 |
| free calls | 15,098 |
| revenue | $183.28 |
| cost of goods | $101.56 |
| margin | 44.6% |
| buying direct would be | $901.58 |
| **leCore saving** | **4.92x** |
| distinct payers | 16 |
| quote → paid conversion | 9.2% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 409,753 |
| paid calls | 31,352 |
| revenue | $1,584.13 |
| average per day | $316.83 |

## Daily history

| day | calls | paid | revenue | margin | leCore saving |
| --- | --- | --- | --- | --- | --- |
| 2026-08-17 | 64,995 | 2,202 | $126.81 | 63.8% | 3.42x |
| 2026-08-18 | 70,361 | 4,353 | $746.91 | 37.9% | 2.7x |
| 2026-08-19 | 112,174 | 1,690 | $257.61 | 27.3% | 1.36x |
| 2026-08-20 | 100,986 | 20,209 | $269.52 | 7.5% | 1.3x |
| 2026-08-21 | 61,237 | 2,898 | $183.28 | 44.6% | 4.92x |

## Top models

| model | calls |
| --- | --- |
| `google/gemini-3.7-flash` | 3,380 |
| `openai/gpt-4o-mini` | 1,858 |
| `x-ai/grok-4.6` | 1,450 |
| `upstage/solar-pro4` | 1,143 |
| `anthropic/claude-sonnet-4` | 1,139 |
| `google/gemini-2.5-flash` | 1,133 |
| `anthropic/claude-sonnet-5` | 708 |
| `inclusionai/ling-2.6-flash` | 475 |
| `openai/gpt-5.6-sol` | 385 |
| `anthropic/claude-opus-4` | 143 |

## Coverage

- days: 5, since 2026-08-17
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

