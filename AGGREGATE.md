# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-20`

## Today

| metric | value |
| --- | --- |
| calls | 79,053 |
| paid calls | 20,030 |
| free calls | 12,984 |
| revenue | $260.28 |
| cost of goods | $239.84 |
| margin | 7.9% |
| buying direct would be | $338.74 |
| **leCore saving** | **1.3x** |
| distinct payers | 9 |
| quote → paid conversion | 61.1% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 326,583 |
| paid calls | 28,275 |
| revenue | $1,391.61 |
| average per day | $347.90 |

## Daily history

| day | calls | paid | revenue | margin | leCore saving |
| --- | --- | --- | --- | --- | --- |
| 2026-08-17 | 64,995 | 2,202 | $126.81 | 63.8% | 3.42x |
| 2026-08-18 | 70,361 | 4,353 | $746.91 | 37.9% | 2.7x |
| 2026-08-19 | 112,174 | 1,690 | $257.61 | 27.3% | 1.36x |
| 2026-08-20 | 79,053 | 20,030 | $260.28 | 7.9% | 1.3x |

## Top models

| model | calls |
| --- | --- |
| `x-ai/grok-4.6` | 1,265 |
| `thinkingmachines/inkling` | 722 |
| `writer/palmyra-x5` | 694 |
| `sakana/fugu-ultra` | 680 |
| `perplexity/sonar-pro-search` | 615 |
| `anthropic/claude-opus-5` | 373 |
| `openai/gpt-4o-mini` | 342 |
| `google/gemini-2.5-flash` | 332 |
| `anthropic/claude-sonnet-4` | 331 |
| `anthropic/claude-sonnet-5` | 288 |

## Coverage

- days: 4, since 2026-08-17
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

