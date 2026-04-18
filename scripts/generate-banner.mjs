import sharp from "sharp";
import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, "..");

// 2x resolution for retina sharpness
const SCALE = 2;
const WIDTH = 1584 * SCALE;
const HEIGHT = 396 * SCALE;
const S = SCALE;

const logoBuffer = readFileSync(join(rootDir, "public", "logo.png"));

// Layout reasoning:
// LinkedIn profile photo sits at bottom-left, roughly:
//   center x ~ 240, center y ~ 400 (extending below banner)
//   circle radius ~ 180px (at 1584 width)
//   overlap zone: x = 60-420, y = 200-396
//
// New strategy:
// - Colorful glow orbs concentrated in LEFT-TOP area (above profile photo zone)
// - All TEXT shifted to center-right (starts at x=480+, well clear of profile photo)
// - Logo stays on far right
// - This makes the colorful orbs frame your profile photo from above

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

  <!-- Glowing orbs concentrated on LEFT side (above where profile photo sits) -->
  <circle cx="${180*S}" cy="${100*S}" r="${260*S}" fill="url(#glowTeal)"/>
  <circle cx="${340*S}" cy="${180*S}" r="${280*S}" fill="url(#glowViolet)"/>
  <circle cx="${100*S}" cy="${250*S}" r="${220*S}" fill="url(#glowBlue)"/>
  <circle cx="${420*S}" cy="${80*S}" r="${200*S}" fill="url(#glowMagenta)"/>
  <circle cx="${250*S}" cy="${320*S}" r="${180*S}" fill="url(#glowViolet)"/>

  <!-- Top accent bar -->
  <rect x="0" y="0" width="${WIDTH}" height="${4*S}" fill="url(#barGradD)" opacity="1"/>

  <!-- Headline TEXT shifted to center (clear of profile photo zone) -->
  <text x="${560*S}" y="${162*S}" font-family="Inter, system-ui, -apple-system, sans-serif" font-size="${50*S}" font-weight="700" fill="#FFFFFF" letter-spacing="${-1.8*S}">Prepare your SaaS for</text>

  <text x="${560*S}" y="${224*S}" font-family="Inter, system-ui, -apple-system, sans-serif" font-size="${50*S}" font-weight="700" fill="url(#textGradD)" letter-spacing="${-1.8*S}">an AI agent future.</text>

  <!-- Accent gradient bar -->
  <rect x="${560*S}" y="${244*S}" width="${220*S}" height="${3*S}" rx="${1.5*S}" fill="url(#barGradD)"/>

  <!-- Subtext -->
  <text x="${560*S}" y="${288*S}" font-family="Inter, system-ui, -apple-system, sans-serif" font-size="${17*S}" font-weight="500" fill="#94A3B8" letter-spacing="${0.2*S}">AI-Driven Growth Strategy for SaaS · $500K–$5M ARR</text>

  <!-- Website URL -->
  <text x="${560*S}" y="${325*S}" font-family="Inter, system-ui, -apple-system, sans-serif" font-size="${18*S}" font-weight="600" fill="#35C3C9" letter-spacing="${0.1*S}">futurereadystudio.com</text>

  <!-- Bottom accent bar -->
  <rect x="0" y="${HEIGHT - 4*S}" width="${WIDTH}" height="${4*S}" fill="url(#barGradD)"/>
</svg>`;

const svgLayer = Buffer.from(v1Dark);

const resizedLogo = await sharp(logoBuffer)
  .resize({ width: 280 * S, withoutEnlargement: true })
  .png()
  .toBuffer();

const logoInfo = await sharp(resizedLogo).metadata();
const logoX = Math.round(WIDTH * 0.90) - Math.round(logoInfo.width / 2);
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
