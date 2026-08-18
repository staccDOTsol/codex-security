/**
 * Append-only series behind the chart.
 *
 * The card is a snapshot; the interesting thing is the SHAPE — spent and
 * direct start together and pull apart as the agent loop starts repeating
 * context that leCore no longer re-uploads. One number cannot show that.
 *
 * JSONL because it is appended to every two minutes by a loop that can be
 * killed at any moment: a partial last line costs one point, where a truncated
 * JSON array would cost the whole file.
 */
import fs from 'node:fs';
import path from 'node:path';

export function append(repoRoot, point) {
  const f = path.join(repoRoot, 'openzoo', 'history.jsonl');
  fs.appendFileSync(f, JSON.stringify(point) + '\n');
  return f;
}

export function read(repoRoot, max = 400) {
  const f = path.join(repoRoot, 'openzoo', 'history.jsonl');
  if (!fs.existsSync(f)) return [];
  const rows = fs.readFileSync(f, 'utf8').split('\n').filter(Boolean).map((l) => {
    try { return JSON.parse(l); } catch { return null; }   // tolerate a torn last line
  }).filter(Boolean);
  // Down-sample rather than truncate: a long run should still show its whole
  // shape, just at coarser resolution.
  if (rows.length <= max) return rows;
  const step = rows.length / max;
  return Array.from({ length: max }, (_, i) => rows[Math.floor(i * step)]);
}
