#!/usr/bin/env node
/**
 * Publish the PUBLIC openzoo aggregate — everyone's traffic, not just ours.
 *
 * Companion to publish-stats.mjs, and the division matters:
 *
 *   publish-stats.mjs      YOUR run. Reads localhost:8402 and a scan output
 *                          directory, so it only works on the machine doing
 *                          the scanning. Run it from openzoo/watch-and-publish.sh.
 *
 *   publish-aggregate.mjs  EVERYONE's numbers. Reads a public HTTPS endpoint,
 *                          so a GitHub-hosted runner can do it on a schedule.
 *
 * That is why the workflow crons this one and not the other.
 */
import fs from 'node:fs';
import path from 'node:path';
import { rotateImage } from './cards.mjs';
import { comparisonCard } from './render.mjs';

const API = process.env.OPENZOO_STATS_URL || 'https://x402-tokens.fly.dev/v1/stats';
const repoRoot = path.resolve(new URL('..', import.meta.url).pathname);

const usd = (n) => (n == null ? '—' : n < 0.01 ? `$${n.toFixed(4)}` : `$${n.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`);
const num = (n) => (n == null ? '—' : Number(n).toLocaleString());
const pct = (n) => (n == null ? '—' : `${n}%`);

let d;
try {
  const r = await fetch(API, { signal: AbortSignal.timeout(20_000) });
  if (!r.ok) throw new Error(`HTTP ${r.status}`);
  d = await r.json();
} catch (e) {
  // Same rule as the personal publisher: never overwrite real numbers with
  // blanks because a fetch failed. Leave the last good file in place.
  console.error(`aggregate unavailable (${API}): ${e.message}. Existing files untouched.`);
  process.exit(78);
}

const t = d.today || {};
const g = d.growth || {};
const trailing = g.trailing7 || {};

const md = [
  '# openzoo — network aggregate',
  '',
  `_Everyone's traffic through the gateway, not just this repo's scan. For our own_`,
  '_run see [STATS.md](STATS.md). Refreshed by `.github/workflows/openzoo-stats.yml`._',
  '',
  `Source: \`${API}\` · day \`${t.day ?? '—'}\``,
  '',
  '## Today',
  '',
  '| metric | value |',
  '| --- | --- |',
  `| calls | ${num(t.calls)} |`,
  `| paid calls | ${num(t.paid)} |`,
  `| free calls | ${num(t.free)} |`,
  `| revenue | ${usd(t.usdPaid)} |`,
  `| cost of goods | ${usd(t.usdCogs)} |`,
  `| margin | ${pct(t.marginPct)} |`,
  `| buying direct would be | ${usd(t.usdDirect)} |`,
  `| **leCore saving** | **${t.lecoreSavingX == null ? '—' : `${t.lecoreSavingX}x`}** |`,
  `| distinct payers | ${num(t.distinctPayers)} |`,
  `| quote → paid conversion | ${pct(t.conversionPct)} |`,
  '',
  '## Trailing 7 days',
  '',
  '| metric | value |',
  '| --- | --- |',
  `| calls | ${num(trailing.calls)} |`,
  `| paid calls | ${num(trailing.paid)} |`,
  `| revenue | ${usd(trailing.usdPaid)} |`,
  `| average per day | ${usd(trailing.avgDailyUsd)} |`,
  '',
];

if (Array.isArray(d.days) && d.days.length) {
  md.push('## Daily history', '', '| day | calls | paid | revenue | margin | leCore saving |', '| --- | --- | --- | --- | --- | --- |');
  for (const r of d.days) {
    md.push(`| ${r.day} | ${num(r.calls)} | ${num(r.paid)} | ${usd(r.usdPaid)} | ${pct(r.marginPct)} | ${r.lecoreSavingX == null ? '—' : `${r.lecoreSavingX}x`} |`);
  }
  md.push('');
}

if (Array.isArray(d.topModels) && d.topModels.length) {
  md.push('## Top models', '', '| model | calls |', '| --- | --- |');
  for (const m of d.topModels.slice(0, 10)) md.push(`| \`${m.model}\` | ${num(m.calls)} |`);
  md.push('');
}

// The endpoint ships its own honesty note. Reprinting it beats paraphrasing it.
if (d.coverage) {
  md.push('## Coverage', '', `- days: ${d.coverage.days}, since ${d.coverage.since}`);
  if (d.coverage.caveat) md.push(`- ${d.coverage.caveat}`);
  if (d.coverage.identifying) md.push(`- identifying data: ${d.coverage.identifying}`);
  md.push('');
}

fs.writeFileSync(path.join(repoRoot, 'AGGREGATE.md'), md.join('\n') + '\n');

// ── card ─────────────────────────────────────────────────────────────────
const aggSvg = comparisonCard({
  title: 'OPENZOO \u00b7 EVERY DEVELOPER, TODAY',
  titleColour: '#ff9955',
  paid: t.usdPaid, direct: t.usdDirect, cogs: t.usdCogs,
  foot: [
    ['calls', num(t.calls)],
    ['paid calls', num(t.paid)],
    ['developers paying', num(t.distinctPayers)],
  ],
});
const imgName = rotateImage(repoRoot, 'net', aggSvg);

const busted = true; // README link rewritten by rotateImage

console.log(JSON.stringify({
  wrote: ['AGGREGATE.md', `openzoo/cards/${imgName}`, ...(busted ? ['README.md'] : [])],
  day: t.day, calls: t.calls, paid: t.paid,
  usdPaid: t.usdPaid, marginPct: t.marginPct, lecoreSavingX: t.lecoreSavingX,
}, null, 2));
