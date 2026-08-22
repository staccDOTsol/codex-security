# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-22`

## Today

| metric | value |
| --- | --- |
| calls | 31,017 |
| paid calls | 13 |
| free calls | 9,080 |
| revenue | $40.85 |
| cost of goods | $23.45 |
| margin | 42.6% |
| buying direct would be | $66.99 |
| **leCore saving** | **1.64x** |
| distinct payers | 3 |
| quote → paid conversion | 0.1% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 444,756 |
| paid calls | 31,674 |
| revenue | $1,628.32 |
| average per day | $271.39 |

## Daily history

| day | calls | paid | revenue | margin | leCore saving |
| --- | --- | --- | --- | --- | --- |
| 2026-08-17 | 64,995 | 2,202 | $126.81 | 63.8% | 3.42x |
| 2026-08-18 | 70,361 | 4,353 | $746.91 | 37.9% | 2.7x |
| 2026-08-19 | 112,174 | 1,690 | $257.61 | 27.3% | 1.36x |
| 2026-08-20 | 100,986 | 20,209 | $269.52 | 7.5% | 1.3x |
| 2026-08-21 | 65,223 | 3,207 | $186.61 | 44% | 4.86x |
| 2026-08-22 | 31,017 | 13 | $40.85 | 42.6% | 1.64x |

## Top models

| model | calls |
| --- | --- |
| `google/gemini-2.5-flash` | 2,078 |
| `anthropic/claude-sonnet-4` | 2,075 |
| `openai/gpt-4o-mini` | 2,073 |
| `x-ai/grok-4.6` | 2,067 |
| `upstage/solar-pro4` | 1,707 |
| `z-ai/glm-4.7-flash` | 8 |
| `anthropic/claude-sonnet-5` | 1 |
| `nvidia/nemotron-3.5-lightning` | 1 |

## Coverage

- days: 6, since 2026-08-17
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

