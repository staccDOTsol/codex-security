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
