import sharp from "sharp";
import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, "..");

// 2x resolution for retina sharpness — LinkedIn displays at 1584x396 logical
const SCALE = 2;
const WIDTH = 1584 * SCALE;
const HEIGHT = 396 * SCALE;
const S = SCALE; // shorthand for scaling values

const logoBuffer = readFileSync(join(rootDir, "public", "logo.png"));

// Layout adjusted for LinkedIn profile photo overlap:
// Profile photo covers bottom-left ~35% width x ~45% height
// All important content needs to be ABOVE y=55% on the left side
// or to the RIGHT of x=35%

const v1Dark = `<?xml version="1.0" encoding="UTF-8"?>
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
      <stop offset="0%" stop-color="#2EC4B6" stop-opacity="0.7"/>
      <stop offset="100%" stop-color="#2EC4B6" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glowViolet" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#8B6CF6" stop-opacity="0.7"/>
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

  <!-- Glowing orbs -->
  <circle cx="${820*S}" cy="${200*S}" r="${280*S}" fill="url(#glowTeal)"/>
  <circle cx="${1000*S}" cy="${220*S}" r="${300*S}" fill="url(#glowViolet)"/>
  <circle cx="${1150*S}" cy="${160*S}" r="${220*S}" fill="url(#glowMagenta)"/>
  <circle cx="${900*S}" cy="${320*S}" r="${200*S}" fill="url(#glowBlue)"/>

  <!-- Top accent bar -->
  <rect x="0" y="0" width="${WIDTH}" height="${4*S}" fill="url(#barGradD)" opacity="1"/>

  <!-- Headline line 1 — pushed up, starts at ~25% height -->
  <text x="${96*S}" y="${100*S}" font-family="Inter, system-ui, -apple-system, sans-serif" font-size="${50*S}" font-weight="700" fill="#FFFFFF" letter-spacing="${-1.8*S}">Prepare your SaaS for</text>

  <!-- Headline line 2 (gradient) -->
  <text x="${96*S}" y="${162*S}" font-family="Inter, system-ui, -apple-system, sans-serif" font-size="${50*S}" font-weight="700" fill="url(#textGradD)" letter-spacing="${-1.8*S}">an AI agent future.</text>

  <!-- Accent gradient bar -->
  <rect x="${96*S}" y="${182*S}" width="${220*S}" height="${3*S}" rx="${1.5*S}" fill="url(#barGradD)"/>

  <!-- Subtext — moved to the right of profile photo zone (x > 35% of width) -->
  <text x="${560*S}" y="${310*S}" font-family="Inter, system-ui, -apple-system, sans-serif" font-size="${15*S}" font-weight="500" fill="#94A3B8" letter-spacing="${0.2*S}">AI-Driven Growth Strategy for SaaS · $500K–$5M ARR</text>

  <!-- Website URL — also right of profile photo zone -->
  <text x="${560*S}" y="${350*S}" font-family="Inter, system-ui, -apple-system, sans-serif" font-size="${16*S}" font-weight="600" fill="#35C3C9" letter-spacing="${0.1*S}">futurereadystudio.com</text>

  <!-- Bottom accent bar -->
  <rect x="0" y="${HEIGHT - 4*S}" width="${WIDTH}" height="${4*S}" fill="url(#barGradD)"/>
</svg>`;

const svgLayer = Buffer.from(v1Dark);

const resizedLogo = await sharp(logoBuffer)
  .resize({ width: 300 * S, withoutEnlargement: true })
  .png()
  .toBuffer();

const logoInfo = await sharp(resizedLogo).metadata();
const logoX = Math.round(WIDTH * 0.87) - Math.round(logoInfo.width / 2);
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
  .toFile(join(rootDir, "public", "linkedin-banner-v1-dark.png"));

console.log("Generated: public/linkedin-banner-v1-dark.png (3168x792 @2x)");
