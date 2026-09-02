# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-09-02`

## Today

| metric | value |
| --- | --- |
| calls | 22,531 |
| paid calls | 567 |
| free calls | 7,910 |
| revenue | $28.05 |
| cost of goods | $85.43 |
| margin | 66.8% |
| buying direct would be | $84.71 |
| **leCore saving** | **3.02x** |
| distinct payers | 7 |
| quote → paid conversion | 4.7% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 624,426 |
| paid calls | 14,584 |
| revenue | $675.90 |
| average per day | $96.56 |

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
| 2026-09-02 | 22,531 | 567 | $28.05 | 66.8% | 3.02x |

## Top models

| model | calls |
| --- | --- |
| `openai/gpt-4o-mini` | 3,798 |
| `x-ai/grok-4.6` | 1,749 |
| `google/gemini-2.5-flash` | 1,136 |
| `anthropic/claude-sonnet-4` | 958 |
| `deepseek/deepseek-v4-flash` | 957 |
| `anthropic/claude-sonnet-5` | 244 |
| `abliterated-model-large-v2` | 122 |
| `ByteDance/Seedance-2.0` | 119 |
| `anthropic/claude-fable-5.1` | 91 |
| `google/veo-3.1` | 19 |

## Coverage

- days: 8, since 2026-08-26
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

