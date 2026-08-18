/**
 * Card rendering.
 *
 * These are COMPARE surfaces, not dashboards. The previous version listed six
 * equal-weight rows, so the one number a reader should leave with — what the
 * run cost versus what it would have cost — carried the same visual weight as
 * "payers". A comparison needs a shared scale and a dominant element, so the
 * two amounts get a proportional bar and the delta gets the largest type on the
 * card. Everything else is support.
 *
 * Colours are inline: GitHub strips <style> from SVG, and these render on both
 * light and dark READMEs, so the card carries its own background.
 */

const BG = '#0e0e11';
const EDGE = '#33333d';
const DIM = '#8a8a95';
const TEXT = '#e6e6e6';
const GOOD = '#b8f22d';
const WARN = '#ff9955';
const MONO = 'ui-monospace,SFMono-Regular,Menlo,monospace';

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
export const usd = (n) =>
  n == null ? '—'
    : n < 0.01 && n > 0 ? `$${n.toFixed(4)}`
      : `$${n.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
export const num = (n) => (n == null ? '—' : Number(n).toLocaleString());

/**
 * @param title   card heading
 * @param paid    what was actually spent
 * @param direct  what the same work would have cost buying direct
 * @param cogs    what the protocol paid upstream for it
 * @param foot    [[label, value], ...] small print
 */
export function comparisonCard({ title, titleColour = GOOD, paid, direct, cogs, foot = [], chart = null }) {
  const W = 420;
  const barTop = 108;
  const barH = 26;
  const gap = 12;
  const footTop = barTop + barH * 2 + gap + 30;
  const chartH = chart ? 92 : 0;
  const H = footTop + foot.length * 19 + chartH + 14;

  // Bars share ONE scale — that is the whole point. Scaling each to its own
  // width would draw two equal bars and destroy the comparison.
  const max = Math.max(paid || 0, direct || 0, 0.0001);
  const inner = W - 32;
  const wPaid = Math.max(2, Math.round((paid / max) * inner));
  const wDirect = Math.max(2, Math.round((direct / max) * inner));

  const saved = direct != null && paid != null ? direct - paid : null;
  const mult = paid > 0 && direct != null ? direct / paid : null;
  // Below 1x this is a COST, not a saving. Say so rather than printing a
  // negative "saved".
  const win = saved != null && saved >= 0;

  const rows = foot.map(([k, v], i) => {
    const y = footTop + i * 19;
    return `  <text x="16" y="${y}" font-family="${MONO}" font-size="11" fill="${DIM}">${esc(k)}</text>
  <text x="${W - 16}" y="${y}" text-anchor="end" font-family="${MONO}" font-size="11" fill="${TEXT}">${esc(v)}</text>`;
  }).join('\n');

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" role="img" aria-label="${esc(title)}">
  <rect width="${W}" height="${H}" rx="10" fill="${BG}"/>
  <rect width="${W}" height="${H}" rx="10" fill="none" stroke="${EDGE}"/>

  <text x="16" y="26" font-family="${MONO}" font-size="11" fill="${titleColour}" letter-spacing="0.06em">${esc(title)}</text>

  <text x="16" y="62" font-family="${MONO}" font-size="26" font-weight="600" fill="${win ? GOOD : WARN}">${
    saved == null ? '—' : `${win ? 'saved ' : 'cost '}${usd(Math.abs(saved))}`
  }</text>
  <text x="${W - 16}" y="62" text-anchor="end" font-family="${MONO}" font-size="26" font-weight="600" fill="${win ? GOOD : WARN}">${
    mult == null ? '' : `${mult.toFixed(2)}x`
  }</text>
  <text x="16" y="84" font-family="${MONO}" font-size="10.5" fill="${DIM}">${
    win ? 'vs buying the same tokens direct' : 'more than buying direct — corpus not repeating yet'
  }</text>

  <rect x="16" y="${barTop}" width="${wPaid}" height="${barH - 8}" rx="3" fill="${GOOD}" opacity="0.85"/>
  <text x="22" y="${barTop + 13}" font-family="${MONO}" font-size="11" fill="#0e0e11" font-weight="600">dev spent</text>
  <text x="${W - 16}" y="${barTop + 13}" text-anchor="end" font-family="${MONO}" font-size="12" fill="${TEXT}">${usd(paid)}</text>

  <rect x="16" y="${barTop + barH}" width="${wDirect}" height="${barH - 8}" rx="3" fill="${WARN}" opacity="0.85"/>
  <text x="22" y="${barTop + barH + 13}" font-family="${MONO}" font-size="11" fill="#0e0e11" font-weight="600">buying direct</text>
  <text x="${W - 16}" y="${barTop + barH + 13}" text-anchor="end" font-family="${MONO}" font-size="12" fill="${WARN}">${usd(direct)}</text>

  <text x="16" y="${barTop + barH * 2 + gap + 8}" font-family="${MONO}" font-size="11" fill="${DIM}">protocol&#8217;s cost (cogs)</text>
  <text x="${W - 16}" y="${barTop + barH * 2 + gap + 8}" text-anchor="end" font-family="${MONO}" font-size="12" fill="${TEXT}">${usd(cogs)}</text>

  <line x1="16" y1="${footTop - 12}" x2="${W - 16}" y2="${footTop - 12}" stroke="${EDGE}"/>
${rows}
${chart ? `  <g transform="translate(0, ${footTop + foot.length * 19 - 4})">\n${chart}\n  </g>` : ''}
</svg>
`;
}

/**
 * Cumulative spent vs cumulative direct, over the life of the run.
 *
 * ONE SHARED Y SCALE. Two series normalised independently would draw the same
 * curve twice and hide the very gap the chart exists to show. The filled area
 * between them IS the saving, which is why it is drawn rather than described.
 */
export function series(points, { w = 388, h = 84 } = {}) {
  const pts = (points || []).filter((p) => p && typeof p.spent === 'number' && typeof p.direct === 'number');
  if (pts.length < 2) {
    return `  <text x="16" y="${h / 2}" font-family="${MONO}" font-size="10.5" fill="${DIM}">collecting — the chart needs a few minutes of run</text>`;
  }
  const max = Math.max(...pts.map((p) => Math.max(p.spent, p.direct)), 0.0001);
  const x = (i) => 16 + (i / (pts.length - 1)) * w;
  const y = (v) => h - 6 - (v / max) * (h - 16);

  const path = (key) => pts.map((p, i) => `${i ? 'L' : 'M'}${x(i).toFixed(1)},${y(p[key]).toFixed(1)}`).join(' ');
  // The gap, as a closed shape: direct along the top, back along spent.
  const gap = `${path('direct')} ` +
    pts.slice().reverse().map((p, i) => `L${x(pts.length - 1 - i).toFixed(1)},${y(p.spent).toFixed(1)}`).join(' ') + ' Z';

  return `  <path d="${gap}" fill="${GOOD}" opacity="0.13"/>
  <path d="${path('direct')}" fill="none" stroke="${WARN}" stroke-width="1.6"/>
  <path d="${path('spent')}" fill="none" stroke="${GOOD}" stroke-width="1.6"/>
  <text x="16" y="${h - 1}" font-family="${MONO}" font-size="9.5" fill="${DIM}">${pts.length} samples \u00b7 the shaded gap is what leCore saved</text>`;
}
