# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-19`

## Today

| metric | value |
| --- | --- |
| calls | 23,415 |
| paid calls | 195 |
| free calls | 12,545 |
| revenue | $9.10 |
| cost of goods | $6.71 |
| margin | 26.2% |
| buying direct would be | $35.92 |
| **leCore saving** | **3.95x** |
| distinct payers | 3 |
| quote → paid conversion | 7.9% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 158,771 |
| paid calls | 6,750 |
| revenue | $882.82 |
| average per day | $294.27 |

## Daily history

| day | calls | paid | revenue | margin | leCore saving |
| --- | --- | --- | --- | --- | --- |
| 2026-08-17 | 64,995 | 2,202 | $126.81 | 63.8% | 3.42x |
| 2026-08-18 | 70,361 | 4,353 | $746.91 | 37.9% | 2.7x |
| 2026-08-19 | 23,415 | 195 | $9.10 | 26.2% | 3.95x |

## Top models

| model | calls |
| --- | --- |
| `anthropic/claude-sonnet-4` | 162 |
| `openai/gpt-4o-mini` | 162 |
| `x-ai/grok-4.6` | 162 |
| `google/gemini-2.5-flash` | 161 |
| `z-ai/glm-5.3` | 24 |
| `z-ai/glm-4.7-flash` | 7 |
| `anthropic/claude-opus-5` | 4 |
| `anthropic/claude-sonnet-5` | 2 |
| `z-ai/glm-5.2:free` | 2 |
| `z-ai/glm-4.7` | 2 |

## Coverage

- days: 3, since 2026-08-17
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

