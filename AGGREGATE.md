# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-22`

## Today

| metric | value |
| --- | --- |
| calls | 30,027 |
| paid calls | 9 |
| free calls | 8,840 |
| revenue | $40.85 |
| cost of goods | $23.43 |
| margin | 42.6% |
| buying direct would be | $66.98 |
| **leCore saving** | **1.64x** |
| distinct payers | 2 |
| quote → paid conversion | 0.1% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 443,766 |
| paid calls | 31,670 |
| revenue | $1,628.31 |
| average per day | $271.39 |

## Daily history

| day | calls | paid | revenue | margin | leCore saving |
| --- | --- | --- | --- | --- | --- |
| 2026-08-17 | 64,995 | 2,202 | $126.81 | 63.8% | 3.42x |
| 2026-08-18 | 70,361 | 4,353 | $746.91 | 37.9% | 2.7x |
| 2026-08-19 | 112,174 | 1,690 | $257.61 | 27.3% | 1.36x |
| 2026-08-20 | 100,986 | 20,209 | $269.52 | 7.5% | 1.3x |
| 2026-08-21 | 65,223 | 3,207 | $186.61 | 44% | 4.86x |
| 2026-08-22 | 30,027 | 9 | $40.85 | 42.6% | 1.64x |

## Top models

| model | calls |
| --- | --- |
| `google/gemini-2.5-flash` | 2,080 |
| `anthropic/claude-sonnet-4` | 2,076 |
| `openai/gpt-4o-mini` | 2,074 |
| `x-ai/grok-4.6` | 2,069 |
| `upstage/solar-pro4` | 1,701 |
| `anthropic/claude-sonnet-5` | 1 |
| `nvidia/nemotron-3.5-lightning` | 1 |

## Coverage

- days: 6, since 2026-08-17
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

