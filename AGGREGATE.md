# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-18`

## Today

| metric | value |
| --- | --- |
| calls | 44,364 |
| paid calls | 4,186 |
| free calls | 10,483 |
| revenue | $592.12 |
| cost of goods | $323.47 |
| margin | 45.4% |
| buying direct would be | $1,858.34 |
| **leCore saving** | **3.14x** |
| distinct payers | 15 |
| quote → paid conversion | 21.1% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 109,359 |
| paid calls | 6,388 |
| revenue | $718.92 |
| average per day | $359.46 |

## Daily history

| day | calls | paid | revenue | margin | leCore saving |
| --- | --- | --- | --- | --- | --- |
| 2026-08-17 | 64,995 | 2,202 | $126.81 | 63.8% | 3.42x |
| 2026-08-18 | 44,364 | 4,186 | $592.12 | 45.4% | 3.14x |

## Top models

| model | calls |
| --- | --- |
| `x-ai/grok-4.6` | 987 |
| `google/gemini-2.5-flash` | 857 |
| `openai/gpt-4o-mini` | 854 |
| `anthropic/claude-sonnet-4` | 853 |
| `anthropic/claude-opus-4.7` | 517 |
| `openai/gpt-5.6-sol-pro` | 190 |
| `deepseek/deepseek-v4-pro-0813` | 126 |
| `anthropic/claude-fable-5` | 92 |
| `nvidia/nemotron-3.5-lightning` | 20 |
| `qwen/qwen3.8-27b` | 16 |

## Coverage

- days: 2, since 2026-08-17
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

