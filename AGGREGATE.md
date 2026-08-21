# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-21`

## Today

| metric | value |
| --- | --- |
| calls | 37,997 |
| paid calls | 947 |
| free calls | 8,462 |
| revenue | $43.89 |
| cost of goods | $33.04 |
| margin | 24.7% |
| buying direct would be | $113.16 |
| **leCore saving** | **2.58x** |
| distinct payers | 16 |
| quote → paid conversion | 4.8% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 386,513 |
| paid calls | 29,401 |
| revenue | $1,444.74 |
| average per day | $288.95 |

## Daily history

| day | calls | paid | revenue | margin | leCore saving |
| --- | --- | --- | --- | --- | --- |
| 2026-08-17 | 64,995 | 2,202 | $126.81 | 63.8% | 3.42x |
| 2026-08-18 | 70,361 | 4,353 | $746.91 | 37.9% | 2.7x |
| 2026-08-19 | 112,174 | 1,690 | $257.61 | 27.3% | 1.36x |
| 2026-08-20 | 100,986 | 20,209 | $269.52 | 7.5% | 1.3x |
| 2026-08-21 | 37,997 | 947 | $43.89 | 24.7% | 2.58x |

## Top models

| model | calls |
| --- | --- |
| `openai/gpt-4o-mini` | 2,672 |
| `x-ai/grok-4.6` | 2,309 |
| `google/gemini-2.5-flash` | 1,962 |
| `anthropic/claude-sonnet-4` | 1,962 |
| `upstage/solar-pro4` | 1,873 |
| `anthropic/claude-sonnet-5` | 550 |
| `inclusionai/ling-2.6-flash` | 398 |
| `google/gemini-3.7-flash` | 393 |
| `sao10k/l3-lunaris-8b` | 80 |
| `anthropic/claude-opus-5` | 69 |

## Coverage

- days: 5, since 2026-08-17
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

