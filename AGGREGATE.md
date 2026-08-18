# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-18`

## Today

| metric | value |
| --- | --- |
| calls | 34,960 |
| paid calls | 3,668 |
| free calls | 8,283 |
| revenue | $334.34 |
| cost of goods | $176.31 |
| margin | 47.3% |
| buying direct would be | $1,411.64 |
| **leCore saving** | **4.22x** |
| distinct payers | 14 |
| quote → paid conversion | 24% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 99,955 |
| paid calls | 5,870 |
| revenue | $461.14 |
| average per day | $230.57 |

## Daily history

| day | calls | paid | revenue | margin | leCore saving |
| --- | --- | --- | --- | --- | --- |
| 2026-08-17 | 64,995 | 2,202 | $126.81 | 63.8% | 3.42x |
| 2026-08-18 | 34,960 | 3,668 | $334.34 | 47.3% | 4.22x |

## Top models

| model | calls |
| --- | --- |
| `x-ai/grok-4.6` | 862 |
| `google/gemini-2.5-flash` | 858 |
| `anthropic/claude-sonnet-4` | 849 |
| `openai/gpt-4o-mini` | 846 |
| `openai/gpt-5.6-sol` | 359 |
| `openai/gpt-5.6-sol-pro` | 24 |
| `anthropic/claude-fable-5` | 22 |
| `deepseek/deepseek-v4-pro-0813` | 21 |
| `anthropic/claude-sonnet-5` | 20 |
| `nvidia/nemotron-3.5-lightning` | 4 |

## Coverage

- days: 2, since 2026-08-17
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

