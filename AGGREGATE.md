# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-31`

## Today

| metric | value |
| --- | --- |
| calls | 25,195 |
| paid calls | 485 |
| free calls | 4,572 |
| revenue | $22.55 |
| cost of goods | $50.34 |
| margin | 60.4% |
| buying direct would be | $50.34 |
| **leCore saving** | **2.23x** |
| distinct payers | 4 |
| quote → paid conversion | 2.7% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 468,763 |
| paid calls | 4,541 |
| revenue | $201.01 |
| average per day | $33.50 |

## Daily history

| day | calls | paid | revenue | margin | leCore saving |
| --- | --- | --- | --- | --- | --- |
| 2026-08-26 | 33,047 | 243 | $9.82 | 61.6% | 3.58x |
| 2026-08-27 | 34,584 | 151 | $15.24 | 82.3% | 3.92x |
| 2026-08-28 | 91,950 | 1,798 | $123.48 | 43% | 3.37x |
| 2026-08-29 | 76,801 | 450 | $3.07 | 0.8% | 8.33x |
| 2026-08-30 | 207,186 | 1,414 | $26.85 | 45.5% | 2.27x |
| 2026-08-31 | 25,195 | 485 | $22.55 | 60.4% | 2.23x |

## Top models

| model | calls |
| --- | --- |
| `openai/gpt-4o-mini` | 6,476 |
| `x-ai/grok-4.6` | 2,042 |
| `upstage/solar-pro4` | 1,516 |
| `google/gemini-2.5-flash` | 1,513 |
| `anthropic/claude-sonnet-4` | 1,512 |
| `anthropic/claude-sonnet-5` | 2 |
| `nex-agi/nex-n2-mini` | 1 |
| `nvidia/nemotron-3.5-lightning` | 1 |

## Coverage

- days: 6, since 2026-08-26
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

