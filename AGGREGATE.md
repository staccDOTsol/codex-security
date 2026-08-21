# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-21`

## Today

| metric | value |
| --- | --- |
| calls | 49,871 |
| paid calls | 1,132 |
| free calls | 12,933 |
| revenue | $86.72 |
| cost of goods | $43.22 |
| margin | 50.2% |
| buying direct would be | $453.83 |
| **leCore saving** | **5.23x** |
| distinct payers | 16 |
| quote → paid conversion | 4.4% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 398,387 |
| paid calls | 29,586 |
| revenue | $1,487.57 |
| average per day | $297.51 |

## Daily history

| day | calls | paid | revenue | margin | leCore saving |
| --- | --- | --- | --- | --- | --- |
| 2026-08-17 | 64,995 | 2,202 | $126.81 | 63.8% | 3.42x |
| 2026-08-18 | 70,361 | 4,353 | $746.91 | 37.9% | 2.7x |
| 2026-08-19 | 112,174 | 1,690 | $257.61 | 27.3% | 1.36x |
| 2026-08-20 | 100,986 | 20,209 | $269.52 | 7.5% | 1.3x |
| 2026-08-21 | 49,871 | 1,132 | $86.72 | 50.2% | 5.23x |

## Top models

| model | calls |
| --- | --- |
| `openai/gpt-4o-mini` | 2,557 |
| `x-ai/grok-4.6` | 2,281 |
| `upstage/solar-pro4` | 1,855 |
| `google/gemini-2.5-flash` | 1,843 |
| `anthropic/claude-sonnet-4` | 1,840 |
| `anthropic/claude-sonnet-5` | 530 |
| `inclusionai/ling-2.6-flash` | 467 |
| `google/gemini-3.7-flash` | 388 |
| `anthropic/claude-opus-4` | 143 |
| `nex-agi/nex-n2-mini` | 103 |

## Coverage

- days: 5, since 2026-08-17
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

