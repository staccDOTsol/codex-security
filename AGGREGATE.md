# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-18`

## Today

| metric | value |
| --- | --- |
| calls | 41,944 |
| paid calls | 4,151 |
| free calls | 9,881 |
| revenue | $583.09 |
| cost of goods | $317.48 |
| margin | 45.6% |
| buying direct would be | $1,832.38 |
| **leCore saving** | **3.14x** |
| distinct payers | 14 |
| quote → paid conversion | 22.3% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 106,939 |
| paid calls | 6,353 |
| revenue | $709.90 |
| average per day | $354.95 |

## Daily history

| day | calls | paid | revenue | margin | leCore saving |
| --- | --- | --- | --- | --- | --- |
| 2026-08-17 | 64,995 | 2,202 | $126.81 | 63.8% | 3.42x |
| 2026-08-18 | 41,944 | 4,151 | $583.09 | 45.6% | 3.14x |

## Top models

| model | calls |
| --- | --- |
| `x-ai/grok-4.6` | 972 |
| `google/gemini-2.5-flash` | 859 |
| `anthropic/claude-sonnet-4` | 855 |
| `openai/gpt-4o-mini` | 852 |
| `anthropic/claude-opus-4.7` | 517 |
| `openai/gpt-5.6-sol-pro` | 189 |
| `deepseek/deepseek-v4-pro-0813` | 111 |
| `anthropic/claude-fable-5` | 106 |
| `anthropic/claude-sonnet-5` | 20 |
| `qwen/qwen3.8-27b` | 16 |

## Coverage

- days: 2, since 2026-08-17
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

