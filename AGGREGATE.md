# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-20`

## Today

| metric | value |
| --- | --- |
| calls | 83,168 |
| paid calls | 20,096 |
| free calls | 14,027 |
| revenue | $264.98 |
| cost of goods | $244.68 |
| margin | 7.7% |
| buying direct would be | $344.93 |
| **leCore saving** | **1.3x** |
| distinct payers | 11 |
| quote → paid conversion | 58.9% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 330,698 |
| paid calls | 28,341 |
| revenue | $1,396.31 |
| average per day | $349.08 |

## Daily history

| day | calls | paid | revenue | margin | leCore saving |
| --- | --- | --- | --- | --- | --- |
| 2026-08-17 | 64,995 | 2,202 | $126.81 | 63.8% | 3.42x |
| 2026-08-18 | 70,361 | 4,353 | $746.91 | 37.9% | 2.7x |
| 2026-08-19 | 112,174 | 1,690 | $257.61 | 27.3% | 1.36x |
| 2026-08-20 | 83,168 | 20,096 | $264.98 | 7.7% | 1.3x |

## Top models

| model | calls |
| --- | --- |
| `x-ai/grok-4.6` | 1,526 |
| `anthropic/claude-opus-5` | 828 |
| `thinkingmachines/inkling` | 722 |
| `writer/palmyra-x5` | 694 |
| `anthropic/claude-sonnet-5` | 655 |
| `openai/gpt-4o-mini` | 607 |
| `google/gemini-2.5-flash` | 591 |
| `anthropic/claude-sonnet-4` | 591 |
| `sakana/fugu-ultra` | 559 |
| `inclusionai/ling-2.6-flash` | 314 |

## Coverage

- days: 4, since 2026-08-17
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

