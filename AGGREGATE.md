# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-21`

## Today

| metric | value |
| --- | --- |
| calls | 43,419 |
| paid calls | 955 |
| free calls | 11,379 |
| revenue | $46.10 |
| cost of goods | $33.42 |
| margin | 27.5% |
| buying direct would be | $131.99 |
| **leCore saving** | **2.86x** |
| distinct payers | 16 |
| quote → paid conversion | 4.3% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 391,935 |
| paid calls | 29,409 |
| revenue | $1,446.95 |
| average per day | $289.39 |

## Daily history

| day | calls | paid | revenue | margin | leCore saving |
| --- | --- | --- | --- | --- | --- |
| 2026-08-17 | 64,995 | 2,202 | $126.81 | 63.8% | 3.42x |
| 2026-08-18 | 70,361 | 4,353 | $746.91 | 37.9% | 2.7x |
| 2026-08-19 | 112,174 | 1,690 | $257.61 | 27.3% | 1.36x |
| 2026-08-20 | 100,986 | 20,209 | $269.52 | 7.5% | 1.3x |
| 2026-08-21 | 43,419 | 955 | $46.10 | 27.5% | 2.86x |

## Top models

| model | calls |
| --- | --- |
| `openai/gpt-4o-mini` | 2,662 |
| `x-ai/grok-4.6` | 2,327 |
| `upstage/solar-pro4` | 1,973 |
| `google/gemini-2.5-flash` | 1,947 |
| `anthropic/claude-sonnet-4` | 1,941 |
| `anthropic/claude-sonnet-5` | 530 |
| `inclusionai/ling-2.6-flash` | 394 |
| `google/gemini-3.7-flash` | 388 |
| `sao10k/l3-lunaris-8b` | 80 |
| `anthropic/claude-opus-5` | 69 |

## Coverage

- days: 5, since 2026-08-17
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

