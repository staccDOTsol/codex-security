# openzoo — network aggregate

_Everyone's traffic through the gateway, not just this repo's scan. For our own_
_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._

Source: `https://x402-tokens.fly.dev/v1/stats` · day `2026-08-18`

## Today

| metric | value |
| --- | --- |
| calls | 49,475 |
| paid calls | 4,277 |
| free calls | 11,680 |
| revenue | $712.27 |
| cost of goods | $436.08 |
| margin | 38.8% |
| buying direct would be | $1,978.49 |
| **leCore saving** | **2.78x** |
| distinct payers | 17 |
| quote → paid conversion | 19.1% |

## Trailing 7 days

| metric | value |
| --- | --- |
| calls | 114,470 |
| paid calls | 6,479 |
| revenue | $839.08 |
| average per day | $419.54 |

## Daily history

| day | calls | paid | revenue | margin | leCore saving |
| --- | --- | --- | --- | --- | --- |
| 2026-08-17 | 64,995 | 2,202 | $126.81 | 63.8% | 3.42x |
| 2026-08-18 | 49,475 | 4,277 | $712.27 | 38.8% | 2.78x |

## Top models

| model | calls |
| --- | --- |
| `x-ai/grok-4.6` | 951 |
| `google/gemini-2.5-flash` | 897 |
| `openai/gpt-4o-mini` | 891 |
| `anthropic/claude-sonnet-4` | 889 |
| `anthropic/claude-opus-4.7` | 145 |
| `anthropic/claude-opus-5-fast` | 88 |
| `anthropic/claude-opus-5` | 72 |
| `deepseek/deepseek-v4-pro-0813` | 69 |
| `openai/gpt-5.6-sol-pro` | 63 |
| `nvidia/nemotron-3.5-lightning` | 32 |

## Coverage

- days: 2, since 2026-08-17
- daily rows are folded from live events and persisted to the machine volume; history starts the day this rollup shipped and is never backfilled
- identifying data: none — payer counts are distinct 8-char prefixes, never full addresses or IPs

