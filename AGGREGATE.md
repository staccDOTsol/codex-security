# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-09-01`

## Today

| metric | value |
| --- | --- |
| calls | 87,495 |
| paid calls | 5,556 |
| free calls | 14,240 |
| revenue | $235.55 |
| cost of goods | $616.34 |
| margin | 56.5% |
| buying direct would be | $614.84 |
| **leCore saving** | **2.61x** |
| distinct payers | 13 |
| quote → paid conversion | 9.8% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 612,748 |
| paid calls | 10,965 |
| revenue | $447.64 |
| average per day | $63.95 |

## Daily history

| day | calls | paid | revenue | margin | leCore saving |
| --- | --- | --- | --- | --- | --- |
| 2026-08-26 | 33,047 | 243 | $9.82 | 61.6% | 3.58x |
| 2026-08-27 | 34,584 | 151 | $15.24 | 82.3% | 3.92x |
| 2026-08-28 | 91,950 | 1,798 | $123.48 | 43% | 3.37x |
| 2026-08-29 | 76,801 | 450 | $3.07 | 0.8% | 8.33x |
| 2026-08-30 | 207,186 | 1,414 | $26.85 | 45.5% | 2.27x |
| 2026-08-31 | 81,685 | 1,353 | $33.63 | 60.5% | 2.25x |
| 2026-09-01 | 87,495 | 5,556 | $235.55 | 56.5% | 2.61x |

## Top models

| model | calls |
| --- | --- |
| `x-ai/grok-4.6` | 7,501 |
| `openai/gpt-4o-mini` | 5,052 |
| `google/gemini-2.5-flash` | 1,843 |
| `upstage/solar-pro4` | 1,429 |
| `anthropic/claude-sonnet-4` | 1,423 |
| `qwen/qwen3.8-flash` | 870 |
| `openai/gpt-5.4-mini` | 762 |
| `deepseek/deepseek-v4-flash-0731` | 257 |
| `anthropic/claude-fable-5.1` | 255 |
| `openai/gpt-4.1-mini` | 255 |

## Coverage

- days: 7, since 2026-08-26
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

