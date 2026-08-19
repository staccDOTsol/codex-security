# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-19`

## Today

| metric | value |
| --- | --- |
| calls | 25,965 |
| paid calls | 197 |
| free calls | 13,743 |
| revenue | $9.43 |
| cost of goods | $6.93 |
| margin | 26.5% |
| buying direct would be | $38.69 |
| **leCore saving** | **4.1x** |
| distinct payers | 3 |
| quote → paid conversion | 7.4% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 161,321 |
| paid calls | 6,752 |
| revenue | $883.15 |
| average per day | $294.38 |

## Daily history

| day | calls | paid | revenue | margin | leCore saving |
| --- | --- | --- | --- | --- | --- |
| 2026-08-17 | 64,995 | 2,202 | $126.81 | 63.8% | 3.42x |
| 2026-08-18 | 70,361 | 4,353 | $746.91 | 37.9% | 2.7x |
| 2026-08-19 | 25,965 | 197 | $9.43 | 26.5% | 4.1x |

## Top models

| model | calls |
| --- | --- |
| `google/gemini-2.5-flash` | 187 |
| `anthropic/claude-sonnet-4` | 187 |
| `openai/gpt-4o-mini` | 187 |
| `x-ai/grok-4.6` | 185 |
| `z-ai/glm-5.3` | 15 |
| `z-ai/glm-4.7-flash` | 8 |
| `anthropic/claude-opus-5` | 4 |
| `anthropic/claude-sonnet-5` | 2 |
| `z-ai/glm-5.2:free` | 2 |
| `z-ai/glm-4.7` | 2 |

## Coverage

- days: 3, since 2026-08-17
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

