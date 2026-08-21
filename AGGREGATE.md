# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-21`

## Today

| metric | value |
| --- | --- |
| calls | 51,898 |
| paid calls | 1,703 |
| free calls | 13,179 |
| revenue | $128.29 |
| cost of goods | $51.39 |
| margin | 59.9% |
| buying direct would be | $798.29 |
| **leCore saving** | **6.22x** |
| distinct payers | 16 |
| quote → paid conversion | 6.4% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 400,414 |
| paid calls | 30,157 |
| revenue | $1,529.14 |
| average per day | $305.83 |

## Daily history

| day | calls | paid | revenue | margin | leCore saving |
| --- | --- | --- | --- | --- | --- |
| 2026-08-17 | 64,995 | 2,202 | $126.81 | 63.8% | 3.42x |
| 2026-08-18 | 70,361 | 4,353 | $746.91 | 37.9% | 2.7x |
| 2026-08-19 | 112,174 | 1,690 | $257.61 | 27.3% | 1.36x |
| 2026-08-20 | 100,986 | 20,209 | $269.52 | 7.5% | 1.3x |
| 2026-08-21 | 51,898 | 1,703 | $128.29 | 59.9% | 6.22x |

## Top models

| model | calls |
| --- | --- |
| `openai/gpt-4o-mini` | 2,348 |
| `x-ai/grok-4.6` | 1,998 |
| `upstage/solar-pro4` | 1,645 |
| `google/gemini-2.5-flash` | 1,632 |
| `anthropic/claude-sonnet-4` | 1,632 |
| `google/gemini-3.7-flash` | 1,503 |
| `anthropic/claude-sonnet-5` | 550 |
| `inclusionai/ling-2.6-flash` | 473 |
| `anthropic/claude-opus-4` | 143 |
| `nex-agi/nex-n2-mini` | 103 |

## Coverage

- days: 5, since 2026-08-17
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

