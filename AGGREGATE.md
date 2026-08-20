# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-20`

## Today

| metric | value |
| --- | --- |
| calls | 76,751 |
| paid calls | 19,905 |
| free calls | 12,474 |
| revenue | $237.99 |
| cost of goods | $218.08 |
| margin | 8.4% |
| buying direct would be | $255.87 |
| **leCore saving** | **1.08x** |
| distinct payers | 9 |
| quote → paid conversion | 62.2% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 324,281 |
| paid calls | 28,150 |
| revenue | $1,369.31 |
| average per day | $342.33 |

## Daily history

| day | calls | paid | revenue | margin | leCore saving |
| --- | --- | --- | --- | --- | --- |
| 2026-08-17 | 64,995 | 2,202 | $126.81 | 63.8% | 3.42x |
| 2026-08-18 | 70,361 | 4,353 | $746.91 | 37.9% | 2.7x |
| 2026-08-19 | 112,174 | 1,690 | $257.61 | 27.3% | 1.36x |
| 2026-08-20 | 76,751 | 19,905 | $237.99 | 8.4% | 1.08x |

## Top models

| model | calls |
| --- | --- |
| `x-ai/grok-4.6` | 1,116 |
| `perplexity/sonar-pro-search` | 734 |
| `thinkingmachines/inkling` | 722 |
| `writer/palmyra-x5` | 694 |
| `sakana/fugu-ultra` | 680 |
| `openrouter/free` | 396 |
| `z-ai/glm-5.2:free` | 288 |
| `openai/gpt-oss-20b:free` | 264 |
| `anthropic/claude-sonnet-5` | 235 |
| `openai/gpt-5.6-luna` | 196 |

## Coverage

- days: 4, since 2026-08-17
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

