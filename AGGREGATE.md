# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-19`

## Today

| metric | value |
| --- | --- |
| calls | 19,096 |
| paid calls | 184 |
| free calls | 10,551 |
| revenue | $7.67 |
| cost of goods | $5.84 |
| margin | 23.8% |
| buying direct would be | $25.92 |
| **leCore saving** | **3.38x** |
| distinct payers | 1 |
| quote → paid conversion | 8.9% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 154,452 |
| paid calls | 6,739 |
| revenue | $881.38 |
| average per day | $293.79 |

## Daily history

| day | calls | paid | revenue | margin | leCore saving |
| --- | --- | --- | --- | --- | --- |
| 2026-08-17 | 64,995 | 2,202 | $126.81 | 63.8% | 3.42x |
| 2026-08-18 | 70,361 | 4,353 | $746.91 | 37.9% | 2.7x |
| 2026-08-19 | 19,096 | 184 | $7.67 | 23.8% | 3.38x |

## Top models

| model | calls |
| --- | --- |
| `anthropic/claude-sonnet-4` | 131 |
| `google/gemini-2.5-flash` | 130 |
| `openai/gpt-4o-mini` | 128 |
| `x-ai/grok-4.6` | 128 |
| `z-ai/glm-5.3` | 106 |

## Coverage

- days: 3, since 2026-08-17
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

