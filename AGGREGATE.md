# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-19`

## Today

| metric | value |
| --- | --- |
| calls | 38,159 |
| paid calls | 516 |
| free calls | 19,011 |
| revenue | $71.36 |
| cost of goods | $66.75 |
| margin | 6.5% |
| buying direct would be | $102.81 |
| **leCore saving** | **1.44x** |
| distinct payers | 6 |
| quote → paid conversion | 12.1% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 173,515 |
| paid calls | 7,071 |
| revenue | $945.08 |
| average per day | $315.03 |

## Daily history

| day | calls | paid | revenue | margin | leCore saving |
| --- | --- | --- | --- | --- | --- |
| 2026-08-17 | 64,995 | 2,202 | $126.81 | 63.8% | 3.42x |
| 2026-08-18 | 70,361 | 4,353 | $746.91 | 37.9% | 2.7x |
| 2026-08-19 | 38,159 | 516 | $71.36 | 6.5% | 1.44x |

## Top models

| model | calls |
| --- | --- |
| `deepseek/deepseek-v4-pro-0813` | 339 |
| `google/gemini-2.5-flash` | 256 |
| `anthropic/claude-sonnet-4` | 250 |
| `x-ai/grok-4.6` | 249 |
| `openai/gpt-4o-mini` | 249 |
| `anthropic/claude-sonnet-5` | 219 |
| `nvidia/nemotron-3.5-lightning` | 14 |
| `anthropic/claude-haiku-4.5` | 4 |
| `anthropic/claude-opus-5` | 4 |

## Coverage

- days: 3, since 2026-08-17
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

