# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-20`

## Today

| metric | value |
| --- | --- |
| calls | 73,670 |
| paid calls | 19,879 |
| free calls | 11,367 |
| revenue | $237.85 |
| cost of goods | $217.86 |
| margin | 8.4% |
| buying direct would be | $255.69 |
| **leCore saving** | **1.08x** |
| distinct payers | 9 |
| quote → paid conversion | 63.7% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 321,200 |
| paid calls | 28,124 |
| revenue | $1,369.17 |
| average per day | $342.29 |

## Daily history

| day | calls | paid | revenue | margin | leCore saving |
| --- | --- | --- | --- | --- | --- |
| 2026-08-17 | 64,995 | 2,202 | $126.81 | 63.8% | 3.42x |
| 2026-08-18 | 70,361 | 4,353 | $746.91 | 37.9% | 2.7x |
| 2026-08-19 | 112,174 | 1,690 | $257.61 | 27.3% | 1.36x |
| 2026-08-20 | 73,670 | 19,879 | $237.85 | 8.4% | 1.08x |

## Top models

| model | calls |
| --- | --- |
| `openai/gpt-5.6-luna` | 744 |
| `x-ai/grok-4.6` | 741 |
| `perplexity/sonar-pro-search` | 734 |
| `thinkingmachines/inkling` | 722 |
| `writer/palmyra-x5` | 694 |
| `sakana/fugu-ultra` | 680 |
| `openrouter/free` | 396 |
| `nvidia/nemotron-3-nano-30b-a3b:free` | 300 |
| `z-ai/glm-5.2:free` | 288 |
| `openai/gpt-oss-20b:free` | 276 |

## Coverage

- days: 4, since 2026-08-17
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

