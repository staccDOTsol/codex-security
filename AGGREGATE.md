# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-20`

## Today

| metric | value |
| --- | --- |
| calls | 81,357 |
| paid calls | 20,054 |
| free calls | 13,482 |
| revenue | $264.17 |
| cost of goods | $243.82 |
| margin | 7.7% |
| buying direct would be | $343.91 |
| **leCore saving** | **1.3x** |
| distinct payers | 9 |
| quote → paid conversion | 59.6% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 328,887 |
| paid calls | 28,299 |
| revenue | $1,395.49 |
| average per day | $348.87 |

## Daily history

| day | calls | paid | revenue | margin | leCore saving |
| --- | --- | --- | --- | --- | --- |
| 2026-08-17 | 64,995 | 2,202 | $126.81 | 63.8% | 3.42x |
| 2026-08-18 | 70,361 | 4,353 | $746.91 | 37.9% | 2.7x |
| 2026-08-19 | 112,174 | 1,690 | $257.61 | 27.3% | 1.36x |
| 2026-08-20 | 81,357 | 20,054 | $264.17 | 7.7% | 1.3x |

## Top models

| model | calls |
| --- | --- |
| `x-ai/grok-4.6` | 1,455 |
| `thinkingmachines/inkling` | 722 |
| `writer/palmyra-x5` | 694 |
| `sakana/fugu-ultra` | 680 |
| `anthropic/claude-opus-5` | 599 |
| `anthropic/claude-sonnet-5` | 535 |
| `openai/gpt-4o-mini` | 532 |
| `google/gemini-2.5-flash` | 520 |
| `anthropic/claude-sonnet-4` | 520 |
| `z-ai/glm-5.2:free` | 288 |

## Coverage

- days: 4, since 2026-08-17
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

