// scripts/optimize-images.mjs
//
// One-time batch resize + WebP conversion for everything in
// src/assets/images and the public/ hero background.
//
// Usage:
//   npm install --save-dev sharp
//   node scripts/optimize-images.mjs
//
// This writes NEW .webp files next to the originals. It does not
// delete anything — check the output looks right, then delete the
// old .jpg/.png files and update the imports (see README note below).

import sharp from "sharp";
import { readdirSync, statSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

// Card/category images — displayed small (~380-430px), so 900px wide
// covers retina screens with plenty of margin.
const cardImagesDir = path.join(root, "src/assets/images");
const CARD_TARGET_WIDTH = 900;
const CARD_QUALITY = 78;

// Hero background — full-bleed, needs to stay sharp at large viewports.
const heroImage = path.join(root, "public/luxury-sedan.jpg");
const heroOutput = path.join(root, "public/hero-bg.webp");
const HERO_TARGET_WIDTH = 1920;
const HERO_QUALITY = 78;

async function optimizeCardImages() {
  const files = readdirSync(cardImagesDir).filter((f) =>
    /\.(jpe?g|png)$/i.test(f)
  );

  for (const file of files) {
    const inputPath = path.join(cardImagesDir, file);
    const outputPath = path.join(
      cardImagesDir,
      file.replace(/\.(jpe?g|png)$/i, ".webp")
    );

    const { size: originalSize } = statSync(inputPath);

    await sharp(inputPath)
      .resize({ width: CARD_TARGET_WIDTH, withoutEnlargement: true })
      .webp({ quality: CARD_QUALITY })
      .toFile(outputPath);

    const { size: newSize } = statSync(outputPath);
    console.log(
      `${file} -> ${path.basename(outputPath)}  ` +
        `${(originalSize / 1024 / 1024).toFixed(2)}MB -> ${(
          newSize /
          1024 /
          1024
        ).toFixed(2)}MB`
    );
  }
}

async function optimizeHero() {
  const { size: originalSize } = statSync(heroImage);

  await sharp(heroImage)
    .resize({ width: HERO_TARGET_WIDTH, withoutEnlargement: true })
    .webp({ quality: HERO_QUALITY })
    .toFile(heroOutput);

  const { size: newSize } = statSync(heroOutput);
  console.log(
    `luxury-sedan.jpg (hero) -> hero-bg.webp  ` +
      `${(originalSize / 1024 / 1024).toFixed(2)}MB -> ${(
        newSize /
        1024 /
        1024
      ).toFixed(2)}MB`
  );
}

await optimizeCardImages();
await optimizeHero();
console.log("\nDone. Review the new .webp files, then:");
console.log("1. Delete the old .jpg/.png originals");
console.log("2. Update the import extensions in src/assets/assets.jsx to .webp");
console.log("3. Update HeroSection.jsx: src=\"/luxury-sedan.jpg\" -> src=\"/hero-bg.webp\"");
console.log("4. Delete the old public/luxury-sedan.jpg");
