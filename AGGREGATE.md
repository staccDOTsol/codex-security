# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-18`

## Today

| metric | value |
| --- | --- |
| calls | 38,896 |
| paid calls | 3,951 |
| free calls | 9,127 |
| revenue | $472.79 |
| cost of goods | $256.58 |
| margin | 45.7% |
| buying direct would be | $1,671.69 |
| **leCore saving** | **3.54x** |
| distinct payers | 14 |
| quote → paid conversion | 22.9% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 103,891 |
| paid calls | 6,153 |
| revenue | $599.60 |
| average per day | $299.80 |

## Daily history

| day | calls | paid | revenue | margin | leCore saving |
| --- | --- | --- | --- | --- | --- |
| 2026-08-17 | 64,995 | 2,202 | $126.81 | 63.8% | 3.42x |
| 2026-08-18 | 38,896 | 3,951 | $472.79 | 45.7% | 3.54x |

## Top models

| model | calls |
| --- | --- |
| `x-ai/grok-4.6` | 983 |
| `google/gemini-2.5-flash` | 923 |
| `anthropic/claude-sonnet-4` | 915 |
| `openai/gpt-4o-mini` | 911 |
| `anthropic/claude-opus-4.7` | 308 |
| `openai/gpt-5.6-sol-pro` | 131 |
| `anthropic/claude-fable-5` | 77 |
| `deepseek/deepseek-v4-pro-0813` | 71 |
| `anthropic/claude-sonnet-5` | 20 |
| `nvidia/nemotron-3.5-lightning` | 4 |

## Coverage

- days: 2, since 2026-08-17
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

