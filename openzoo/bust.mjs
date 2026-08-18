/**
 * Bump the ?v= on one card's <img> in the README.
 *
 * GITHUB CACHES README IMAGES THROUGH CAMO, KEYED BY URL. Committing a new
 * openzoo/stats.svg does NOT refresh the card: the URL in the README is
 * unchanged, so camo keeps serving the render it fetched the first time.
 * OBSERVED: the file said 179 paid calls while GitHub still displayed 108.
 *
 * A changing query string is a different URL, so camo fetches again. Each
 * publisher bumps only its own card, so the two can update independently
 * without fighting over the file.
 */
import fs from 'node:fs';
import path from 'node:path';

export function bust(repoRoot, file) {
  const readme = path.join(repoRoot, 'README.md');
  if (!fs.existsSync(readme)) return false;
  const src = fs.readFileSync(readme, 'utf8');
  const re = new RegExp(`(openzoo/${file}\\?v=)(\\d+)`, 'g');
  if (!re.test(src)) return false;
  const v = Date.now();
  fs.writeFileSync(readme, src.replace(re, `$1${v}`));
  return true;
}
