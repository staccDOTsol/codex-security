# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-30`

## Today

| metric | value |
| --- | --- |
| calls | 104,375 |
| paid calls | 166 |
| free calls | 43,699 |
| revenue | $4.29 |
| cost of goods | $15.45 |
| margin | -14.5% |
| buying direct would be | $15.44 |
| **leCore saving** | **3.6x** |
| distinct payers | 5 |
| quote → paid conversion | 0.8% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 337,360 |
| paid calls | 2,618 |
| revenue | $155.87 |
| average per day | $31.17 |

## Daily history

| day | calls | paid | revenue | margin | leCore saving |
| --- | --- | --- | --- | --- | --- |
| 2026-08-26 | 33,029 | 242 | $9.81 | 61.9% | 3.58x |
| 2026-08-27 | 34,576 | 151 | $15.24 | 82.3% | 3.92x |
| 2026-08-28 | 91,905 | 1,798 | $123.48 | 43% | 3.37x |
| 2026-08-29 | 73,475 | 261 | $3.05 | 0.4% | 8.02x |
| 2026-08-30 | 104,375 | 166 | $4.29 | -14.5% | 3.6x |

## Top models

| model | calls |
| --- | --- |
| `x-ai/grok-4.6` | 1,021 |
| `openai/gpt-4o-mini` | 494 |
| `google/gemini-2.5-flash` | 464 |
| `upstage/solar-pro4` | 463 |
| `anthropic/claude-sonnet-4` | 460 |
| `anthropic/claude-sonnet-5` | 254 |
| `z-ai/glm-5.3-flash` | 28 |
| `nvidia/nemotron-3.5-lightning` | 7 |

## Coverage

- days: 5, since 2026-08-26
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

