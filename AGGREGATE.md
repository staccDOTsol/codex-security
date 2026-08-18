# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-18`

## Today

| metric | value |
| --- | --- |
| calls | 20,037 |
| paid calls | 2,311 |
| free calls | 4,940 |
| revenue | $187.96 |
| cost of goods | $84.20 |
| margin | 55.2% |
| buying direct would be | $1,055.19 |
| **leCore saving** | **5.61x** |
| distinct payers | 10 |
| quote → paid conversion | 27.7% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 85,032 |
| paid calls | 4,513 |
| revenue | $314.77 |
| average per day | $157.38 |

## Daily history

| day | calls | paid | revenue | margin | leCore saving |
| --- | --- | --- | --- | --- | --- |
| 2026-08-17 | 64,995 | 2,202 | $126.81 | 63.8% | 3.42x |
| 2026-08-18 | 20,037 | 2,311 | $187.96 | 55.2% | 5.61x |

## Top models

| model | calls |
| --- | --- |
| `openai/gpt-5.6-sol` | 775 |
| `anthropic/claude-sonnet-4` | 473 |
| `openai/gpt-4o-mini` | 472 |
| `google/gemini-2.5-flash` | 470 |
| `x-ai/grok-4.6` | 470 |
| `deepseek/deepseek-v4-pro-0813` | 146 |
| `deepseek/deepseek-v4-flash` | 64 |
| `z-ai/glm-5` | 26 |
| `z-ai/glm-4.7` | 25 |
| `mistralai/mistral-large-2512` | 22 |

## Coverage

- days: 2, since 2026-08-17
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

