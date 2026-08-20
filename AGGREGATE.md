# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-20`

## Today

| metric | value |
| --- | --- |
| calls | 96,473 |
| paid calls | 20,202 |
| free calls | 17,710 |
| revenue | $269.28 |
| cost of goods | $249.02 |
| margin | 7.5% |
| buying direct would be | $349.87 |
| **leCore saving** | **1.3x** |
| distinct payers | 12 |
| quote → paid conversion | 49.9% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 344,003 |
| paid calls | 28,447 |
| revenue | $1,400.61 |
| average per day | $350.15 |

## Daily history

| day | calls | paid | revenue | margin | leCore saving |
| --- | --- | --- | --- | --- | --- |
| 2026-08-17 | 64,995 | 2,202 | $126.81 | 63.8% | 3.42x |
| 2026-08-18 | 70,361 | 4,353 | $746.91 | 37.9% | 2.7x |
| 2026-08-19 | 112,174 | 1,690 | $257.61 | 27.3% | 1.36x |
| 2026-08-20 | 96,473 | 20,202 | $269.28 | 7.5% | 1.3x |

## Top models

| model | calls |
| --- | --- |
| `x-ai/grok-4.6` | 2,247 |
| `openai/gpt-4o-mini` | 1,999 |
| `google/gemini-2.5-flash` | 1,991 |
| `anthropic/claude-sonnet-4` | 1,981 |
| `anthropic/claude-opus-5` | 828 |
| `anthropic/claude-sonnet-5` | 763 |
| `inclusionai/ling-2.6-flash` | 436 |
| `google/gemini-3.7-flash` | 314 |
| `anthropic/claude-fable-5` | 181 |
| `qwen/qwen3.8-max` | 128 |

## Coverage

- days: 4, since 2026-08-17
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

