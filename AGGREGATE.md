# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-20`

## Today

| metric | value |
| --- | --- |
| calls | 90,634 |
| paid calls | 20,112 |
| free calls | 16,118 |
| revenue | $265.05 |
| cost of goods | $244.79 |
| margin | 7.6% |
| buying direct would be | $345.00 |
| **leCore saving** | **1.3x** |
| distinct payers | 11 |
| quote → paid conversion | 53.5% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 338,164 |
| paid calls | 28,357 |
| revenue | $1,396.38 |
| average per day | $349.09 |

## Daily history

| day | calls | paid | revenue | margin | leCore saving |
| --- | --- | --- | --- | --- | --- |
| 2026-08-17 | 64,995 | 2,202 | $126.81 | 63.8% | 3.42x |
| 2026-08-18 | 70,361 | 4,353 | $746.91 | 37.9% | 2.7x |
| 2026-08-19 | 112,174 | 1,690 | $257.61 | 27.3% | 1.36x |
| 2026-08-20 | 90,634 | 20,112 | $265.05 | 7.6% | 1.3x |

## Top models

| model | calls |
| --- | --- |
| `x-ai/grok-4.6` | 2,283 |
| `openai/gpt-4o-mini` | 1,383 |
| `google/gemini-2.5-flash` | 1,377 |
| `anthropic/claude-sonnet-4` | 1,371 |
| `anthropic/claude-opus-5` | 828 |
| `anthropic/claude-sonnet-5` | 767 |
| `inclusionai/ling-2.6-flash` | 436 |
| `google/gemini-3.7-flash` | 314 |
| `z-ai/glm-5.2:free` | 288 |
| `writer/palmyra-x5` | 229 |

## Coverage

- days: 4, since 2026-08-17
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

