# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-18`

## Today

| metric | value |
| --- | --- |
| calls | 34,095 |
| paid calls | 3,632 |
| free calls | 8,111 |
| revenue | $308.62 |
| cost of goods | $159.16 |
| margin | 48.4% |
| buying direct would be | $1,344.50 |
| **leCore saving** | **4.36x** |
| distinct payers | 14 |
| quote → paid conversion | 24.5% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 99,090 |
| paid calls | 5,834 |
| revenue | $435.42 |
| average per day | $217.71 |

## Daily history

| day | calls | paid | revenue | margin | leCore saving |
| --- | --- | --- | --- | --- | --- |
| 2026-08-17 | 64,995 | 2,202 | $126.81 | 63.8% | 3.42x |
| 2026-08-18 | 34,095 | 3,632 | $308.62 | 48.4% | 4.36x |

## Top models

| model | calls |
| --- | --- |
| `google/gemini-2.5-flash` | 822 |
| `anthropic/claude-sonnet-4` | 813 |
| `x-ai/grok-4.6` | 813 |
| `openai/gpt-4o-mini` | 811 |
| `openai/gpt-5.6-sol` | 667 |
| `deepseek/deepseek-v4-flash` | 33 |
| `bytedance-seed/seed-2.0-mini` | 11 |
| `anthropic/claude-sonnet-5` | 11 |
| `minimax/minimax-m2.5` | 8 |
| `meta-llama/llama-4-maverick` | 8 |

## Coverage

- days: 2, since 2026-08-17
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

