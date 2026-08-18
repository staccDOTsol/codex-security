# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-18`

## Today

| metric | value |
| --- | --- |
| calls | 37,423 |
| paid calls | 3,823 |
| free calls | 8,914 |
| revenue | $404.32 |
| cost of goods | $215.84 |
| margin | 46.6% |
| buying direct would be | $1,536.31 |
| **leCore saving** | **3.8x** |
| distinct payers | 14 |
| quote → paid conversion | 23.4% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 102,418 |
| paid calls | 6,025 |
| revenue | $531.13 |
| average per day | $265.57 |

## Daily history

| day | calls | paid | revenue | margin | leCore saving |
| --- | --- | --- | --- | --- | --- |
| 2026-08-17 | 64,995 | 2,202 | $126.81 | 63.8% | 3.42x |
| 2026-08-18 | 37,423 | 3,823 | $404.32 | 46.6% | 3.8x |

## Top models

| model | calls |
| --- | --- |
| `x-ai/grok-4.6` | 890 |
| `google/gemini-2.5-flash` | 852 |
| `anthropic/claude-sonnet-4` | 844 |
| `openai/gpt-4o-mini` | 840 |
| `anthropic/claude-opus-4.7` | 181 |
| `openai/gpt-5.6-sol-pro` | 73 |
| `anthropic/claude-fable-5` | 47 |
| `deepseek/deepseek-v4-pro-0813` | 47 |
| `anthropic/claude-sonnet-5` | 20 |
| `nvidia/nemotron-3.5-lightning` | 4 |

## Coverage

- days: 2, since 2026-08-17
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

