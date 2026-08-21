# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-21`

## Today

| metric | value |
| --- | --- |
| calls | 48,058 |
| paid calls | 994 |
| free calls | 12,607 |
| revenue | $82.26 |
| cost of goods | $39.88 |
| margin | 51.5% |
| buying direct would be | $447.54 |
| **leCore saving** | **5.44x** |
| distinct payers | 16 |
| quote → paid conversion | 4% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 396,574 |
| paid calls | 29,448 |
| revenue | $1,483.11 |
| average per day | $296.62 |

## Daily history

| day | calls | paid | revenue | margin | leCore saving |
| --- | --- | --- | --- | --- | --- |
| 2026-08-17 | 64,995 | 2,202 | $126.81 | 63.8% | 3.42x |
| 2026-08-18 | 70,361 | 4,353 | $746.91 | 37.9% | 2.7x |
| 2026-08-19 | 112,174 | 1,690 | $257.61 | 27.3% | 1.36x |
| 2026-08-20 | 100,986 | 20,209 | $269.52 | 7.5% | 1.3x |
| 2026-08-21 | 48,058 | 994 | $82.26 | 51.5% | 5.44x |

## Top models

| model | calls |
| --- | --- |
| `openai/gpt-4o-mini` | 2,665 |
| `x-ai/grok-4.6` | 2,263 |
| `upstage/solar-pro4` | 1,961 |
| `google/gemini-2.5-flash` | 1,950 |
| `anthropic/claude-sonnet-4` | 1,950 |
| `anthropic/claude-sonnet-5` | 530 |
| `google/gemini-3.7-flash` | 388 |
| `inclusionai/ling-2.6-flash` | 367 |
| `sao10k/l3-lunaris-8b` | 80 |
| `anthropic/claude-opus-5` | 69 |

## Coverage

- days: 5, since 2026-08-17
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

