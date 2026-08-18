# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-18`

## Today

| metric | value |
| --- | --- |
| calls | 48,252 |
| paid calls | 4,259 |
| free calls | 11,416 |
| revenue | $693.66 |
| cost of goods | $420.74 |
| margin | 39.3% |
| buying direct would be | $1,959.88 |
| **leCore saving** | **2.83x** |
| distinct payers | 17 |
| quote → paid conversion | 19.6% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 113,247 |
| paid calls | 6,461 |
| revenue | $820.47 |
| average per day | $410.23 |

## Daily history

| day | calls | paid | revenue | margin | leCore saving |
| --- | --- | --- | --- | --- | --- |
| 2026-08-17 | 64,995 | 2,202 | $126.81 | 63.8% | 3.42x |
| 2026-08-18 | 48,252 | 4,259 | $693.66 | 39.3% | 2.83x |

## Top models

| model | calls |
| --- | --- |
| `x-ai/grok-4.6` | 967 |
| `google/gemini-2.5-flash` | 895 |
| `anthropic/claude-sonnet-4` | 889 |
| `openai/gpt-4o-mini` | 888 |
| `anthropic/claude-opus-4.7` | 284 |
| `openai/gpt-5.6-sol-pro` | 97 |
| `deepseek/deepseek-v4-pro-0813` | 89 |
| `anthropic/claude-opus-5-fast` | 88 |
| `anthropic/claude-opus-5` | 42 |
| `anthropic/claude-fable-5` | 41 |

## Coverage

- days: 2, since 2026-08-17
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

