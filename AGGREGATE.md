# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-20`

## Today

| metric | value |
| --- | --- |
| calls | 61,755 |
| paid calls | 14,871 |
| free calls | 10,887 |
| revenue | $177.89 |
| cost of goods | $154.58 |
| margin | 13.1% |
| buying direct would be | $193.05 |
| **leCore saving** | **1.09x** |
| distinct payers | 6 |
| quote → paid conversion | 58.9% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 309,285 |
| paid calls | 23,116 |
| revenue | $1,309.22 |
| average per day | $327.30 |

## Daily history

| day | calls | paid | revenue | margin | leCore saving |
| --- | --- | --- | --- | --- | --- |
| 2026-08-17 | 64,995 | 2,202 | $126.81 | 63.8% | 3.42x |
| 2026-08-18 | 70,361 | 4,353 | $746.91 | 37.9% | 2.7x |
| 2026-08-19 | 112,174 | 1,690 | $257.61 | 27.3% | 1.36x |
| 2026-08-20 | 61,755 | 14,871 | $177.89 | 13.1% | 1.09x |

## Top models

| model | calls |
| --- | --- |
| `anthracite-org/magnum-v4-72b` | 736 |
| `anthropic/claude-sonnet-5` | 713 |
| `moonshotai/kimi-k3` | 650 |
| `google/gemma-4-26b-a4b-it:free` | 474 |
| `~z-ai/glm-latest` | 308 |
| `z-ai/glm-5.2:free` | 302 |
| `~anthropic/claude-haiku-latest` | 252 |
| `~openai/gpt-mini-latest` | 252 |
| `dots-studio/dots-3-note-preview:free` | 242 |
| `kwaipilot/kat-coder-air-v2.5` | 236 |

## Coverage

- days: 4, since 2026-08-17
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

