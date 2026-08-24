# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-24`

## Today

| metric | value |
| --- | --- |
| calls | 19,818 |
| paid calls | 411 |
| free calls | 4,739 |
| revenue | $99.71 |
| cost of goods | $44.57 |
| margin | 55.3% |
| buying direct would be | $184.70 |
| **leCore saving** | **1.85x** |
| distinct payers | 3 |
| quote → paid conversion | 4% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 440,945 |
| paid calls | 31,210 |
| revenue | $1,766.85 |
| average per day | $252.41 |

## Daily history

| day | calls | paid | revenue | margin | leCore saving |
| --- | --- | --- | --- | --- | --- |
| 2026-08-17 | 64,995 | 2,202 | $126.81 | 63.8% | 3.42x |
| 2026-08-18 | 70,361 | 4,353 | $746.91 | 37.9% | 2.7x |
| 2026-08-19 | 112,174 | 1,697 | $263.59 | 27.7% | 1.34x |
| 2026-08-20 | 100,986 | 20,707 | $411.86 | 5.8% | 2.11x |
| 2026-08-21 | 65,223 | 4,022 | $203.15 | 39.8% | 4.59x |
| 2026-08-22 | 35,072 | 13 | $40.85 | 42.6% | 1.64x |
| 2026-08-23 | 37,311 | 7 | $0.78 | 90.8% | 2.37x |
| 2026-08-24 | 19,818 | 411 | $99.71 | 55.3% | 1.85x |

## Top models

| model | calls |
| --- | --- |
| `x-ai/grok-4.6` | 1,874 |
| `anthropic/claude-sonnet-4` | 1,868 |
| `upstage/solar-pro4` | 1,762 |
| `google/gemini-2.5-flash` | 1,749 |
| `openai/gpt-4o-mini` | 1,742 |
| `anthropic/claude-opus-5` | 617 |
| `deepseek/deepseek-v4-pro-0813` | 130 |
| `anthropic/claude-sonnet-5` | 91 |
| `anthropic/claude-fable-5` | 71 |
| `qwen/qwen3.7-flash` | 32 |

## Coverage

- days: 8, since 2026-08-17
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

