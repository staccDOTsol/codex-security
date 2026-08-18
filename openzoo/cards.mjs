/**
 * Rotate the card images and repoint the README at them.
 *
 * A README image is a second request with its own cache, and `?v=` only changes
 * the query — which some caches ignore. A new FILENAME is a new URL at the path
 * level, which nothing between here and the reader can serve from cache.
 *
 * OBSERVED before this: the SVG on GitHub read 241 paid calls while the
 * rendered README still showed 179.
 */
import fs from 'node:fs';
import path from 'node:path';

/**
 * Write `svg` under a fresh timestamped name, repoint every reference to this
 * card in the README, and prune older renders.
 *
 * Returns the new filename.
 */
export function rotateImage(repoRoot, id, svg, keep = 2) {
  const dir = path.join(repoRoot, 'openzoo', 'cards');
  fs.mkdirSync(dir, { recursive: true });

  const name = `${id}-${Date.now()}.svg`;
  fs.writeFileSync(path.join(dir, name), svg);

  // Keep a couple of old renders so a README still resolving from a cached
  // page does not 404 the moment a new one lands.
  for (const old of fs.readdirSync(dir)
    .filter((f) => f.startsWith(`${id}-`) && f.endsWith('.svg') && f !== name)
    .sort()
    .reverse()
    .slice(keep)) {
    fs.rmSync(path.join(dir, old), { force: true });
  }

  const readme = path.join(repoRoot, 'README.md');
  if (fs.existsSync(readme)) {
    const src = fs.readFileSync(readme, 'utf8');
    const re = new RegExp(`openzoo/cards/${id}-\\d+\\.svg`, 'g');
    if (re.test(src)) fs.writeFileSync(readme, src.replace(re, `openzoo/cards/${name}`));
  }
  return name;
}

/**
 * Replace the content between `<!-- openzoo:<id> -->` markers in README.md.
 *
 * Refuses when the pair is missing or inverted rather than appending: a
 * half-edited README would otherwise gain a duplicate block on every publish,
 * every two minutes, forever.
 */
export function writeBlock(repoRoot, id, lines) {
  const readme = path.join(repoRoot, 'README.md');
  if (!fs.existsSync(readme)) return false;
  const src = fs.readFileSync(readme, 'utf8');
  const open = `<!-- openzoo:${id} -->`;
  const close = `<!-- /openzoo:${id} -->`;
  const i = src.indexOf(open);
  const j = src.indexOf(close);
  if (i === -1 || j === -1 || j < i) return false;
  // Preserve whatever prefix the closing marker sits behind, so a block inside
  // a blockquote does not lose its '> ' and break the quote.
  const lineStart = src.lastIndexOf('\n', j) + 1;
  const prefix = src.slice(lineStart, j);
  const next = src.slice(0, i + open.length) + '\n' + lines.join('\n') + '\n' + prefix + src.slice(j);
  if (next === src) return false;
  fs.writeFileSync(readme, next);
  return true;
}
