# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-20`

## Today

| metric | value |
| --- | --- |
| calls | 85,433 |
| paid calls | 20,111 |
| free calls | 14,840 |
| revenue | $265.04 |
| cost of goods | $244.79 |
| margin | 7.6% |
| buying direct would be | $345.00 |
| **leCore saving** | **1.3x** |
| distinct payers | 11 |
| quote → paid conversion | 57.8% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 332,963 |
| paid calls | 28,356 |
| revenue | $1,396.37 |
| average per day | $349.09 |

## Daily history

| day | calls | paid | revenue | margin | leCore saving |
| --- | --- | --- | --- | --- | --- |
| 2026-08-17 | 64,995 | 2,202 | $126.81 | 63.8% | 3.42x |
| 2026-08-18 | 70,361 | 4,353 | $746.91 | 37.9% | 2.7x |
| 2026-08-19 | 112,174 | 1,690 | $257.61 | 27.3% | 1.36x |
| 2026-08-20 | 85,433 | 20,111 | $265.04 | 7.6% | 1.3x |

## Top models

| model | calls |
| --- | --- |
| `x-ai/grok-4.6` | 1,641 |
| `anthropic/claude-opus-5` | 828 |
| `anthropic/claude-sonnet-5` | 729 |
| `openai/gpt-4o-mini` | 723 |
| `thinkingmachines/inkling` | 722 |
| `google/gemini-2.5-flash` | 709 |
| `anthropic/claude-sonnet-4` | 707 |
| `writer/palmyra-x5` | 694 |
| `inclusionai/ling-2.6-flash` | 436 |
| `google/gemini-3.7-flash` | 313 |

## Coverage

- days: 4, since 2026-08-17
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

