# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-19`

## Today

| metric | value |
| --- | --- |
| calls | 53,267 |
| paid calls | 1,037 |
| free calls | 26,695 |
| revenue | $158.16 |
| cost of goods | $130.29 |
| margin | 17.6% |
| buying direct would be | $230.01 |
| **leCore saving** | **1.45x** |
| distinct payers | 6 |
| quote → paid conversion | 13.2% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 188,623 |
| paid calls | 7,592 |
| revenue | $1,031.87 |
| average per day | $343.96 |

## Daily history

| day | calls | paid | revenue | margin | leCore saving |
| --- | --- | --- | --- | --- | --- |
| 2026-08-17 | 64,995 | 2,202 | $126.81 | 63.8% | 3.42x |
| 2026-08-18 | 70,361 | 4,353 | $746.91 | 37.9% | 2.7x |
| 2026-08-19 | 53,267 | 1,037 | $158.16 | 17.6% | 1.45x |

## Top models

| model | calls |
| --- | --- |
| `anthropic/claude-sonnet-4` | 580 |
| `google/gemini-2.5-flash` | 579 |
| `x-ai/grok-4.6` | 578 |
| `openai/gpt-4o-mini` | 577 |
| `anthropic/claude-sonnet-5` | 433 |
| `deepseek/deepseek-v4-pro-0813` | 117 |
| `nvidia/nemotron-3.5-lightning` | 21 |
| `anthropic/claude-fable-5` | 8 |

## Coverage

- days: 3, since 2026-08-17
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

