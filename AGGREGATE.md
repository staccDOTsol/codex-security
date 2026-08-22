# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-22`

## Today

| metric | value |
| --- | --- |
| calls | 5,024 |
| paid calls | 9 |
| free calls | 1,334 |
| revenue | $40.85 |
| cost of goods | $23.43 |
| margin | 42.6% |
| buying direct would be | $66.98 |
| **leCore saving** | **1.64x** |
| distinct payers | 2 |
| quote → paid conversion | 0.4% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 414,505 |
| paid calls | 31,570 |
| revenue | $1,624.12 |
| average per day | $270.69 |

## Daily history

| day | calls | paid | revenue | margin | leCore saving |
| --- | --- | --- | --- | --- | --- |
| 2026-08-17 | 64,995 | 2,202 | $126.81 | 63.8% | 3.42x |
| 2026-08-18 | 70,361 | 4,353 | $746.91 | 37.9% | 2.7x |
| 2026-08-19 | 111,399 | 1,687 | $257.32 | 27.3% | 1.36x |
| 2026-08-20 | 100,601 | 20,206 | $269.50 | 7.5% | 1.3x |
| 2026-08-21 | 62,125 | 3,113 | $182.73 | 45.1% | 4.9x |
| 2026-08-22 | 5,024 | 9 | $40.85 | 42.6% | 1.64x |

## Top models

| model | calls |
| --- | --- |
| `google/gemini-2.5-flash` | 426 |
| `anthropic/claude-sonnet-4` | 426 |
| `x-ai/grok-4.6` | 425 |
| `openai/gpt-4o-mini` | 424 |
| `upstage/solar-pro4` | 359 |
| `anthropic/claude-opus-4` | 92 |
| `anthropic/claude-fable-5` | 53 |
| `anthropic/claude-sonnet-5` | 52 |
| `anthropic/claude-opus-5` | 6 |
| `google/gemini-3.7-flash` | 2 |

## Coverage

- days: 6, since 2026-08-17
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

