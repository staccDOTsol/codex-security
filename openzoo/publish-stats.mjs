#!/usr/bin/env node
/**
 * Publish live run stats + findings into the repo.
 *
 * WHY COMMITTED FILES AND NOT A LIVE BADGE URL: GitHub proxies every README
 * image through **camo**, which caches by URL. A `?t=` cachebust does not help
 * because the URL in the README is static, so camo serves the first render
 * forever. The reliable way to get a README that changes is to change the
 * repository — regenerate an SVG and a markdown table, commit them, and let
 * GitHub invalidate on the new blob.
 *
 * Reads the openzoo proxy for money and the codex-security output dir for
 * findings. Both are optional; whichever is present gets rendered.
 *
 *   node openzoo/publish-stats.mjs --out-dir /path/to/scan-output
 */
import fs from 'node:fs';
import path from 'node:path';
import { rotateImage, writeBlock } from './cards.mjs';
import { comparisonCard, series } from './render.mjs';
import * as history from './history.mjs';

const PROXY = process.env.OPENZOO_PROXY || 'http://127.0.0.1:8402';
const args = process.argv.slice(2);
const outDir = args[args.indexOf('--out-dir') + 1];
const repoRoot = path.resolve(new URL('..', import.meta.url).pathname);

const usd = (n) => (n == null ? '—' : n < 0.01 ? `$${n.toFixed(4)}` : `$${n.toFixed(2)}`);
const num = (n) => (n == null ? '—' : Number(n).toLocaleString());

async function get(p) {
  try {
    const r = await fetch(`${PROXY}${p}`, { signal: AbortSignal.timeout(10_000) });
    return r.ok ? await r.json() : null;
  } catch {
    return null; // a dead proxy must not fail the publish
  }
}

const session = await get('/v1/session');
const credits = await get('/v1/credits');

/** Every result row the bulk scan has written so far. */
function readResults(dir) {
  if (!dir) return [];
  const f = path.join(dir, 'results.jsonl');
  if (!fs.existsSync(f)) return [];
  return fs.readFileSync(f, 'utf8').split('\n').filter(Boolean).map((l) => {
    try { return JSON.parse(l); } catch { return null; }
  }).filter(Boolean);
}

/** Findings across every repo's artifact directory. */
function readFindings(dir) {
  if (!dir) return [];
  const art = path.join(dir, 'artifacts');
  if (!fs.existsSync(art)) return [];
  const out = [];
  for (const repo of fs.readdirSync(art)) {
    const stack = [path.join(art, repo)];
    while (stack.length) {
      const cur = stack.pop();
      let entries = [];
      try { entries = fs.readdirSync(cur, { withFileTypes: true }); } catch { continue; }
      for (const e of entries) {
        const p = path.join(cur, e.name);
        if (e.isDirectory()) { stack.push(p); continue; }
        if (e.name !== 'findings.json') continue;
        try {
          const j = JSON.parse(fs.readFileSync(p, 'utf8'));
          for (const f of (Array.isArray(j) ? j : j.findings || [])) {
            // `severity` is an OBJECT — {level, score, scoringSystem, rationale}
            // — not a string. Storing it raw renders "[object Object]" in the
            // table and groups every finding under one bogus severity.
            const sev = typeof f.severity === 'string'
              ? f.severity
              : (f.severity?.level ?? 'unknown');
            const score = typeof f.severity === 'object' ? f.severity?.score : undefined;
            // Locations is an array of {path, lines...}; take the first as the
            // headline and keep the count so a multi-site finding is not
            // silently presented as a single-site one.
            const locs = Array.isArray(f.locations) ? f.locations : [];
            const first = locs[0] || {};
            out.push({
              repo,
              severity: String(sev).toLowerCase(),
              score: typeof score === 'number' ? score : null,
              title: f.title || f.summary || '(untitled)',
              file: first.path || first.file || f.file || f.path || '',
              locations: locs.length,
              confidence: f.confidence?.level ?? f.confidence ?? null,
            });
          }
        } catch { /* a half-written artifact is normal mid-scan */ }
      }
    }
  }
  return out;
}

const results = readResults(outDir);

/** How many repos the run was ASKED to do. */
function queued(dir) {
  try {
    const m = JSON.parse(fs.readFileSync(path.join(dir, 'manifest.json'), 'utf8'));
    return Array.isArray(m.tasks) ? m.tasks.length : 0;
  } catch { return 0; }
}
// "0 / 0" reads as "nothing to do". The denominator is the queue.
const total = (outDir && queued(outDir)) || results.length;
const findings = readFindings(outDir);

// REFUSE TO PUBLISH NOTHING.
//
// Every field degrades to "—" when a source is missing, which is right for a
// half-finished run and catastrophic on a schedule: a hosted runner cannot
// reach a proxy on localhost and cannot see a scan directory on someone's
// laptop, so an unguarded cron would overwrite real numbers with blanks every
// 15 minutes and look like it was working. Publish only when there is something
// to say.
if (!session && !results.length && !findings.length) {
  console.error(
    `nothing to publish: proxy ${PROXY} unreachable and no results under ${outDir || '(no --out-dir)'}.\n` +
    'Run this on the machine hosting the proxy and the scan output. Existing STATS.md left untouched.',
  );
  process.exit(78); // EX_CONFIG — "this environment cannot do the job"
}
const done = results.filter((r) => r.status === 'completed').length;
const failed = results.filter((r) => r.status === 'failed').length;

const spent = session?.spentUsd, direct = session?.directUsd, cogs = session?.cogsUsd;
const mult = spent > 0 && direct != null ? direct / spent : null;

const bySev = findings.reduce((a, f) => ((a[f.severity] = (a[f.severity] || 0) + 1), a), {});
const sevOrder = ['critical', 'high', 'medium', 'low', 'unknown'];

// ── STATS.md ──────────────────────────────────────────────────────────────
const md = [
  '# Live run stats',
  '',
  '_Regenerated by `openzoo/publish-stats.mjs`. Committed rather than served,',
  "because GitHub's image proxy caches a static README URL indefinitely._",
  '',
  '## Cost',
  '',
  '| metric | value |',
  '| --- | --- |',
  `| paid calls | ${num(session?.paidCalls)} |`,
  `| spent | ${usd(spent)} |`,
  `| our cost (cogs) | ${usd(cogs)} |`,
  `| buying direct would be | ${usd(direct)} |`,
  `| multiple | ${mult == null ? '—' : `${mult.toFixed(2)}x`} |`,
  `| prepaid credit left | ${usd(credits?.balanceUsd)} |`,
  '',
  '## Scan',
  '',
  '| metric | value |',
  '| --- | --- |',
  `| repos completed | ${done} / ${total} |`,
  `| repos failed | ${failed} |`,
  `| findings | ${findings.length} |`,
  '',
];

if (findings.length) {
  md.push('### By severity', '', '| severity | count |', '| --- | --- |');
  for (const s of sevOrder) if (bySev[s]) md.push(`| ${s} | ${bySev[s]} |`);
  md.push('', '### Findings', '', '| repo | severity | score | finding | file |', '| --- | --- | --- | --- | --- |');
  const rank = (f) => sevOrder.indexOf(f.severity);
  for (const f of [...findings].sort((a, b) => rank(a) - rank(b)).slice(0, 200)) {
    const cell = (v) => String(v).replace(/\|/g, '\\|').slice(0, 90);
    md.push(`| ${cell(f.repo)} | ${cell(f.severity)} | ${f.score ?? '—'} | ${cell(f.title)} | ${cell(f.file)} |`);
  }
  if (findings.length > 200) md.push('', `_${findings.length - 200} further findings omitted._`);
}

fs.writeFileSync(path.join(repoRoot, 'STATS.md'), md.join('\n') + '\n');

// PUBLISH THE FINDINGS THEMSELVES, not just a count. A security run whose
// output never leaves the scanning laptop is a cost demo wearing a security
// costume.
const outRoot = path.join(repoRoot, 'openzoo', 'findings');
if (findings.length) {
  fs.mkdirSync(outRoot, { recursive: true });
  const byRepo = {};
  for (const f of findings) (byRepo[f.repo] ||= []).push(f);
  for (const [repo, list] of Object.entries(byRepo)) {
    fs.writeFileSync(path.join(outRoot, `${repo}.json`), JSON.stringify(list, null, 2) + '\n');
  }
  fs.writeFileSync(path.join(outRoot, 'README.md'),
    ['# Findings', '', `Published by \`openzoo/publish-stats.mjs\` from a live scan.`,
     `${findings.length} findings across ${Object.keys(byRepo).length} repositories.`, '',
     'These are raw scanner output, not triaged or verified. Treat them as leads.', ''].join('\n'));
}

// One sample per publish. The shape of the run is the argument; a single
// snapshot cannot show spent and direct pulling apart.
history.append(repoRoot, {
  t: Date.now(), calls: session?.paidCalls ?? null,
  spent: spent ?? null, direct: direct ?? null, cogs: cogs ?? null,
  repos: done, findings: findings.length,
});
const points = history.read(repoRoot);

// ── card �────────────────────────────────────────────────────────────────
const svg = comparisonCard({
  title: 'OPENZOO · THIS REPO\u2019S SECURITY SCAN',
  paid: spent, direct, cogs,
  foot: [
    ['paid calls', num(session?.paidCalls)],
    ['repos scanned', `${done} / ${total}`],
    ['findings', String(findings.length)],
  ],
  chart: series(points),
});
const imgName = rotateImage(repoRoot, 'run', svg);

// ITEMISE THE FINDINGS ON THE README ITSELF. A count is a claim; the table is
// the evidence, and it is the only part of this a security reader cares about.
const sevRank = { critical: 0, high: 1, medium: 2, low: 3, unknown: 4 };
const block = findings.length
  ? [
      '',
      `**${findings.length} finding${findings.length === 1 ? '' : 's'}** across ` +
        `${new Set(findings.map((f) => f.repo)).size} repositor` +
        `${new Set(findings.map((f) => f.repo)).size === 1 ? 'y' : 'ies'}, ` +
        `scanned through openzoo. Raw scanner output — leads, not triaged results.`,
      '',
      '| severity | score | repository | finding | file |',
      '| --- | --- | --- | --- | --- |',
      ...[...findings]
        .sort((a, b) => (sevRank[a.severity] ?? 9) - (sevRank[b.severity] ?? 9) || (b.score ?? 0) - (a.score ?? 0))
        .slice(0, 40)
        .map((f) => {
          const cell = (v) => String(v ?? '').replace(/\|/g, '\\|').slice(0, 90);
          return `| \`${cell(f.severity)}\` | ${f.score ?? '—'} | ${cell(f.repo)} | ${cell(f.title)} | \`${cell(f.file)}\` |`;
        }),
      ...(findings.length > 40 ? ['', `_${findings.length - 40} more in [openzoo/findings](openzoo/findings)._`] : []),
      '',
    ]
  : ['', '_No findings yet — the scan is still running. This table populates itself._', ''];
writeBlock(repoRoot, 'findings', block);

const busted = true; // README link rewritten by rotateImage

console.log(JSON.stringify({
  wrote: ['STATS.md', `openzoo/cards/${imgName}`, ...(busted ? ['README.md'] : [])],
  paidCalls: session?.paidCalls ?? null,
  spent, direct, multiple: mult,
  reposCompleted: done, reposFailed: failed, findings: findings.length,
  proxyReachable: Boolean(session),
}, null, 2));
