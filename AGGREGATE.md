# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-18`

## Today

| metric | value |
| --- | --- |
| calls | 29,928 |
| paid calls | 3,616 |
| free calls | 7,035 |
| revenue | $298.36 |
| cost of goods | $152.34 |
| margin | 48.9% |
| buying direct would be | $1,317.54 |
| **leCore saving** | **4.42x** |
| distinct payers | 13 |
| quote → paid conversion | 28.2% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 94,923 |
| paid calls | 5,818 |
| revenue | $425.17 |
| average per day | $212.58 |

## Daily history

| day | calls | paid | revenue | margin | leCore saving |
| --- | --- | --- | --- | --- | --- |
| 2026-08-17 | 64,995 | 2,202 | $126.81 | 63.8% | 3.42x |
| 2026-08-18 | 29,928 | 3,616 | $298.36 | 48.9% | 4.42x |

## Top models

| model | calls |
| --- | --- |
| `openai/gpt-5.6-sol` | 1,905 |
| `google/gemini-2.5-flash` | 589 |
| `anthropic/claude-sonnet-4` | 587 |
| `openai/gpt-4o-mini` | 586 |
| `x-ai/grok-4.6` | 583 |
| `deepseek/deepseek-v4-flash` | 255 |
| `minimax/minimax-m2.5` | 122 |
| `z-ai/glm-4.6v` | 85 |
| `z-ai/glm-4.7-flash` | 76 |
| `bytedance-seed/seed-2.0-mini` | 72 |

## Coverage

- days: 2, since 2026-08-17
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

