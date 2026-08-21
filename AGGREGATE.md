# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-21`

## Today

| metric | value |
| --- | --- |
| calls | 35,128 |
| paid calls | 934 |
| free calls | 8,121 |
| revenue | $42.35 |
| cost of goods | $32.68 |
| margin | 22.8% |
| buying direct would be | $100.56 |
| **leCore saving** | **2.37x** |
| distinct payers | 15 |
| quote → paid conversion | 5.3% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 383,644 |
| paid calls | 29,388 |
| revenue | $1,443.20 |
| average per day | $288.64 |

## Daily history

| day | calls | paid | revenue | margin | leCore saving |
| --- | --- | --- | --- | --- | --- |
| 2026-08-17 | 64,995 | 2,202 | $126.81 | 63.8% | 3.42x |
| 2026-08-18 | 70,361 | 4,353 | $746.91 | 37.9% | 2.7x |
| 2026-08-19 | 112,174 | 1,690 | $257.61 | 27.3% | 1.36x |
| 2026-08-20 | 100,986 | 20,209 | $269.52 | 7.5% | 1.3x |
| 2026-08-21 | 35,128 | 934 | $42.35 | 22.8% | 2.37x |

## Top models

| model | calls |
| --- | --- |
| `openai/gpt-4o-mini` | 2,670 |
| `x-ai/grok-4.6` | 2,216 |
| `google/gemini-2.5-flash` | 1,940 |
| `anthropic/claude-sonnet-4` | 1,935 |
| `upstage/solar-pro4` | 1,622 |
| `anthropic/claude-sonnet-5` | 611 |
| `google/gemini-3.7-flash` | 407 |
| `inclusionai/ling-2.6-flash` | 406 |
| `anthropic/claude-opus-4` | 164 |
| `nex-agi/nex-n2-mini` | 101 |

## Coverage

- days: 5, since 2026-08-17
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

