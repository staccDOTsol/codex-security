# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-20`

## Today

| metric | value |
| --- | --- |
| calls | 99,796 |
| paid calls | 20,203 |
| free calls | 18,707 |
| revenue | $269.28 |
| cost of goods | $249.03 |
| margin | 7.5% |
| buying direct would be | $349.87 |
| **leCore saving** | **1.3x** |
| distinct payers | 12 |
| quote → paid conversion | 48.1% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 347,326 |
| paid calls | 28,448 |
| revenue | $1,400.61 |
| average per day | $350.15 |

## Daily history

| day | calls | paid | revenue | margin | leCore saving |
| --- | --- | --- | --- | --- | --- |
| 2026-08-17 | 64,995 | 2,202 | $126.81 | 63.8% | 3.42x |
| 2026-08-18 | 70,361 | 4,353 | $746.91 | 37.9% | 2.7x |
| 2026-08-19 | 112,174 | 1,690 | $257.61 | 27.3% | 1.36x |
| 2026-08-20 | 99,796 | 20,203 | $269.28 | 7.5% | 1.3x |

## Top models

| model | calls |
| --- | --- |
| `x-ai/grok-4.6` | 2,392 |
| `openai/gpt-4o-mini` | 2,144 |
| `google/gemini-2.5-flash` | 2,137 |
| `anthropic/claude-sonnet-4` | 2,126 |
| `anthropic/claude-opus-5` | 827 |
| `anthropic/claude-sonnet-5` | 782 |
| `inclusionai/ling-2.6-flash` | 352 |
| `google/gemini-3.7-flash` | 209 |
| `qwen/qwen3.8-max` | 128 |
| `nvidia/nemotron-3.5-lightning` | 66 |

## Coverage

- days: 4, since 2026-08-17
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

