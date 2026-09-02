# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-09-02`

## Today

| metric | value |
| --- | --- |
| calls | 32,947 |
| paid calls | 795 |
| free calls | 9,744 |
| revenue | $66.43 |
| cost of goods | $148.36 |
| margin | 65.9% |
| buying direct would be | $146.51 |
| **leCore saving** | **2.21x** |
| distinct payers | 7 |
| quote → paid conversion | 4% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 634,842 |
| paid calls | 14,812 |
| revenue | $714.28 |
| average per day | $102.04 |

## Daily history

| day | calls | paid | revenue | margin | leCore saving |
| --- | --- | --- | --- | --- | --- |
| 2026-08-26 | 33,047 | 243 | $9.82 | 61.6% | 3.58x |
| 2026-08-27 | 34,584 | 151 | $15.24 | 82.3% | 3.92x |
| 2026-08-28 | 91,950 | 1,798 | $123.48 | 43% | 3.37x |
| 2026-08-29 | 76,801 | 450 | $3.07 | 0.8% | 8.33x |
| 2026-08-30 | 207,186 | 1,414 | $26.85 | 45.5% | 2.27x |
| 2026-08-31 | 81,685 | 1,353 | $33.63 | 60.5% | 2.25x |
| 2026-09-01 | 109,689 | 8,851 | $445.58 | 54% | 2.61x |
| 2026-09-02 | 32,947 | 795 | $66.43 | 65.9% | 2.21x |

## Top models

| model | calls |
| --- | --- |
| `openai/gpt-4o-mini` | 4,871 |
| `x-ai/grok-4.6` | 2,484 |
| `google/gemini-2.5-flash` | 1,995 |
| `anthropic/claude-sonnet-4` | 1,671 |
| `deepseek/deepseek-v4-flash` | 1,670 |
| `abliterated-model-large-v2` | 647 |
| `anthropic/claude-sonnet-5` | 460 |
| `anthropic/claude-fable-5.1` | 91 |
| `nvidia/nemotron-3.5-lightning` | 19 |
| `Wan-AI/wan2.7-t2v` | 11 |

## Coverage

- days: 8, since 2026-08-26
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

