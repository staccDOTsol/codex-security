# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-19`

## Today

| metric | value |
| --- | --- |
| calls | 10,795 |
| paid calls | 168 |
| free calls | 5,094 |
| revenue | $7.19 |
| cost of goods | $5.44 |
| margin | 24.4% |
| buying direct would be | $24.49 |
| **leCore saving** | **3.41x** |
| distinct payers | 1 |
| quote → paid conversion | 9.9% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 146,151 |
| paid calls | 6,723 |
| revenue | $880.91 |
| average per day | $293.64 |

## Daily history

| day | calls | paid | revenue | margin | leCore saving |
| --- | --- | --- | --- | --- | --- |
| 2026-08-17 | 64,995 | 2,202 | $126.81 | 63.8% | 3.42x |
| 2026-08-18 | 70,361 | 4,353 | $746.91 | 37.9% | 2.7x |
| 2026-08-19 | 10,795 | 168 | $7.19 | 24.4% | 3.41x |

## Top models

| model | calls |
| --- | --- |
| `google/gemini-2.5-flash` | 314 |
| `openai/gpt-4o-mini` | 314 |
| `anthropic/claude-sonnet-4` | 313 |
| `x-ai/grok-4.6` | 312 |
| `z-ai/glm-5.3` | 206 |
| `deepseek/deepseek-v4-flash` | 107 |
| `deepseek/deepseek-v4-pro-0813` | 6 |

## Coverage

- days: 3, since 2026-08-17
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

