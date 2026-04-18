import sharp from "sharp";
import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, "..");

// Company page banner: 1128x191, rendered at 2x for retina
const SCALE = 2;
const WIDTH = 1128 * SCALE;
const HEIGHT = 191 * SCALE;
const S = SCALE;

const logoBuffer = readFileSync(join(rootDir, "public", "logo.png"));

// LinkedIn overlays a ~130px circular profile logo anchored near the bottom-left
// (roughly x:24-160, y:85-191 at 1x). Reserve that zone so nothing gets clipped.
const TEXT_X = 200;

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}">
  <defs>
    <linearGradient id="textGradD" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#35C3C9"/>
      <stop offset="100%" stop-color="#8B6CF6"/>
    </linearGradient>
    <linearGradient id="barGradD" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#2EC4B6"/>
      <stop offset="35%" stop-color="#49BDF2"/>
      <stop offset="60%" stop-color="#7C5CFF"/>
      <stop offset="100%" stop-color="#E96BC8"/>
    </linearGradient>
    <radialGradient id="glowTeal" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#2EC4B6" stop-opacity="0.75"/>
      <stop offset="100%" stop-color="#2EC4B6" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glowViolet" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#8B6CF6" stop-opacity="0.75"/>
      <stop offset="100%" stop-color="#8B6CF6" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glowMagenta" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#E96BC8" stop-opacity="0.55"/>
      <stop offset="100%" stop-color="#E96BC8" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glowBlue" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#49BDF2" stop-opacity="0.55"/>
      <stop offset="100%" stop-color="#49BDF2" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <!-- Dark background -->
  <rect x="0" y="0" width="${WIDTH}" height="${HEIGHT}" fill="#0A0F1E"/>

  <!-- Glowing orbs spread across the banner -->
  <circle cx="${620*S}" cy="${95*S}" r="${180*S}" fill="url(#glowTeal)"/>
  <circle cx="${770*S}" cy="${100*S}" r="${200*S}" fill="url(#glowViolet)"/>
  <circle cx="${920*S}" cy="${80*S}" r="${160*S}" fill="url(#glowMagenta)"/>
  <circle cx="${690*S}" cy="${150*S}" r="${140*S}" fill="url(#glowBlue)"/>

  <!-- Top accent bar -->
  <rect x="0" y="0" width="${WIDTH}" height="${3*S}" fill="url(#barGradD)" opacity="1"/>

  <!-- Headline (scaled for shorter height) -->
  <text x="${TEXT_X*S}" y="${60*S}" font-family="Inter, system-ui, -apple-system, sans-serif" font-size="${30*S}" font-weight="700" fill="#FFFFFF" letter-spacing="${-1.2*S}">Prepare your SaaS for</text>

  <text x="${TEXT_X*S}" y="${100*S}" font-family="Inter, system-ui, -apple-system, sans-serif" font-size="${30*S}" font-weight="700" fill="url(#textGradD)" letter-spacing="${-1.2*S}">an AI agent future.</text>

  <!-- Accent gradient bar -->
  <rect x="${TEXT_X*S}" y="${118*S}" width="${140*S}" height="${2*S}" rx="${1*S}" fill="url(#barGradD)"/>

  <!-- Subtext -->
  <text x="${TEXT_X*S}" y="${146*S}" font-family="Inter, system-ui, -apple-system, sans-serif" font-size="${11*S}" font-weight="500" fill="#94A3B8" letter-spacing="${0.2*S}">AI-Driven Growth Strategy for SaaS · $500K-$5M ARR</text>

  <!-- Website URL -->
  <text x="${TEXT_X*S}" y="${170*S}" font-family="Inter, system-ui, -apple-system, sans-serif" font-size="${12*S}" font-weight="600" fill="#35C3C9" letter-spacing="${0.1*S}">futurereadystudio.com</text>

  <!-- Bottom accent bar -->
  <rect x="0" y="${HEIGHT - 3*S}" width="${WIDTH}" height="${3*S}" fill="url(#barGradD)"/>
</svg>`;

const svgLayer = Buffer.from(svg);

const resizedLogo = await sharp(logoBuffer)
  .resize({ width: 130 * S, withoutEnlargement: true })
  .png()
  .toBuffer();

const logoInfo = await sharp(resizedLogo).metadata();
const logoX = WIDTH - logoInfo.width - Math.round(40 * S);
const logoY = Math.round(HEIGHT / 2) - Math.round(logoInfo.height / 2);

await sharp({
  create: {
    width: WIDTH,
    height: HEIGHT,
    channels: 4,
    background: { r: 10, g: 15, b: 30, alpha: 1 },
  },
})
  .composite([
    { input: svgLayer, top: 0, left: 0 },
    { input: resizedLogo, top: logoY, left: logoX },
  ])
  .png({ quality: 100, compressionLevel: 6 })
  .toFile(join(rootDir, "public", "linkedin-company-banner.png"));

console.log("Generated: public/linkedin-company-banner.png (2256x382 @2x for 1128x191)");
