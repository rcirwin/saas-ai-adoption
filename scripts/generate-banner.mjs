import sharp from "sharp";
import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, "..");

const WIDTH = 1584;
const HEIGHT = 396;

const logoBuffer = readFileSync(join(rootDir, "public", "logo.png"));

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}">
  <defs>
    <linearGradient id="textGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#2EC4B6"/>
      <stop offset="100%" stop-color="#7C5CFF"/>
    </linearGradient>

    <linearGradient id="barGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#2EC4B6"/>
      <stop offset="35%" stop-color="#49BDF2"/>
      <stop offset="60%" stop-color="#7C5CFF"/>
      <stop offset="100%" stop-color="#E96BC8"/>
    </linearGradient>

    <radialGradient id="tealOrb" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#2EC4B6" stop-opacity="0.55"/>
      <stop offset="60%" stop-color="#2EC4B6" stop-opacity="0.12"/>
      <stop offset="100%" stop-color="#2EC4B6" stop-opacity="0"/>
    </radialGradient>

    <radialGradient id="violetOrb" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#7C5CFF" stop-opacity="0.55"/>
      <stop offset="60%" stop-color="#7C5CFF" stop-opacity="0.12"/>
      <stop offset="100%" stop-color="#7C5CFF" stop-opacity="0"/>
    </radialGradient>

    <radialGradient id="magentaOrb" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#E96BC8" stop-opacity="0.50"/>
      <stop offset="60%" stop-color="#E96BC8" stop-opacity="0.10"/>
      <stop offset="100%" stop-color="#E96BC8" stop-opacity="0"/>
    </radialGradient>

    <radialGradient id="blueOrb" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#49BDF2" stop-opacity="0.45"/>
      <stop offset="60%" stop-color="#49BDF2" stop-opacity="0.10"/>
      <stop offset="100%" stop-color="#49BDF2" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <!-- Pure white base, full opacity -->
  <rect x="0" y="0" width="${WIDTH}" height="${HEIGHT}" fill="#FFFFFF"/>

  <!-- Three cleanly positioned orbs in the middle band (between text and logo) -->
  <!-- They overlap subtly to blend without getting muddy -->
  <circle cx="780" cy="180" r="240" fill="url(#tealOrb)"/>
  <circle cx="950" cy="220" r="260" fill="url(#violetOrb)"/>
  <circle cx="1100" cy="180" r="200" fill="url(#magentaOrb)"/>
  <circle cx="860" cy="300" r="170" fill="url(#blueOrb)"/>

  <!-- Top gradient accent -->
  <rect x="0" y="0" width="${WIDTH}" height="3" fill="url(#barGrad)" opacity="0.9"/>

  <!-- Headline line 1 -->
  <text x="96" y="150" font-family="Inter, system-ui, -apple-system, sans-serif" font-size="50" font-weight="700" fill="#0F172A" letter-spacing="-1.8">
    Prepare your SaaS for
  </text>

  <!-- Headline line 2 (gradient) -->
  <text x="96" y="212" font-family="Inter, system-ui, -apple-system, sans-serif" font-size="50" font-weight="700" fill="url(#textGrad)" letter-spacing="-1.8">
    an AI agent future.
  </text>

  <!-- Accent gradient bar -->
  <rect x="96" y="234" width="220" height="3" rx="1.5" fill="url(#barGrad)" opacity="0.9"/>

  <!-- Subtext -->
  <text x="96" y="278" font-family="Inter, system-ui, -apple-system, sans-serif" font-size="17" font-weight="500" fill="#334155" letter-spacing="0.2">
    AI-Driven Growth Strategy for B2B SaaS · $500K–$5M ARR
  </text>

  <!-- Website URL -->
  <text x="96" y="320" font-family="Inter, system-ui, -apple-system, sans-serif" font-size="18" font-weight="600" fill="#2EC4B6" letter-spacing="0.1">
    futurereadystudio.com
  </text>

  <!-- Bottom gradient accent -->
  <rect x="0" y="${HEIGHT - 3}" width="${WIDTH}" height="3" fill="url(#barGrad)" opacity="0.9"/>
</svg>
`;

const svgLayer = Buffer.from(svg);

const resizedLogo = await sharp(logoBuffer)
  .resize({ width: 300, withoutEnlargement: true })
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
    background: { r: 255, g: 255, b: 255, alpha: 1 },
  },
})
  .composite([
    { input: svgLayer, top: 0, left: 0 },
    { input: resizedLogo, top: logoY, left: logoX },
  ])
  .png({ quality: 100, compressionLevel: 9 })
  .toFile(join(rootDir, "public", "linkedin-banner.png"));

console.log("Banner generated: public/linkedin-banner.png (1584x396)");
