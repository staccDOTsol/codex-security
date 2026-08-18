# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-18`

## Today

| metric | value |
| --- | --- |
| calls | 46,158 |
| paid calls | 4,227 |
| free calls | 10,900 |
| revenue | $666.08 |
| cost of goods | $395.47 |
| margin | 40.6% |
| buying direct would be | $1,932.30 |
| **leCore saving** | **2.9x** |
| distinct payers | 16 |
| quote → paid conversion | 20.4% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 111,153 |
| paid calls | 6,429 |
| revenue | $792.89 |
| average per day | $396.44 |

## Daily history

| day | calls | paid | revenue | margin | leCore saving |
| --- | --- | --- | --- | --- | --- |
| 2026-08-17 | 64,995 | 2,202 | $126.81 | 63.8% | 3.42x |
| 2026-08-18 | 46,158 | 4,227 | $666.08 | 40.6% | 2.9x |

## Top models

| model | calls |
| --- | --- |
| `x-ai/grok-4.6` | 933 |
| `google/gemini-2.5-flash` | 847 |
| `anthropic/claude-sonnet-4` | 840 |
| `openai/gpt-4o-mini` | 837 |
| `anthropic/claude-opus-4.7` | 417 |
| `openai/gpt-5.6-sol-pro` | 155 |
| `deepseek/deepseek-v4-pro-0813` | 98 |
| `anthropic/claude-opus-5-fast` | 82 |
| `anthropic/claude-fable-5` | 67 |
| `nvidia/nemotron-3.5-lightning` | 33 |

## Coverage

- days: 2, since 2026-08-17
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

