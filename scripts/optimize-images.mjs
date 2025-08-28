import sharp from 'sharp';
import fs from 'node:fs/promises';
import path from 'node:path';

// Gambar sumber (taruh file asli di sini)
const src = 'assets/hero-printer-original.jpg';

// Output
const outHeroDir = 'public/gallery';
const outOgDir = 'public';

async function main() {
  await fs.mkdir(outHeroDir, { recursive: true });
  await fs.mkdir(outOgDir, { recursive: true });

  // Hero ukuran utama
  await sharp(src)
    .resize({ width: 1600 })
    .webp({ quality: 78 })
    .toFile(path.join(outHeroDir, 'hero-printer.webp'));

  // Hero @2x (opsional, untuk layar besar)
  await sharp(src)
    .resize({ width: 2400 })
    .webp({ quality: 72 })
    .toFile(path.join(outHeroDir, 'hero-printer@2x.webp'));

  // OG image untuk share (1200x630)
  await sharp(src)
    .resize(1200, 630, { fit: 'cover', position: 'attention' })
    .jpeg({ quality: 80, mozjpeg: true })
    .toFile(path.join(outOgDir, 'og.jpg'));

  console.log('✔ Selesai: public/gallery/hero-printer.webp, hero-printer@2x.webp, dan public/og.jpg');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});