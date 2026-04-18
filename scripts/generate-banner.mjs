import sharp from "sharp";
import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, "..");

const WIDTH = 1584;
const HEIGHT = 396;

const logoBuffer = readFileSync(join(rootDir, "public", "logo.png"));

const svg = `
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

    <!-- Proper radial gradient zones - clean color, no muddy blur -->
    <radialGradient id="tealZone" cx="10%" cy="30%" r="55%" fx="10%" fy="30%">
      <stop offset="0%" stop-color="#2EC4B6" stop-opacity="0.42"/>
      <stop offset="40%" stop-color="#2EC4B6" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="#2EC4B6" stop-opacity="0"/>
    </radialGradient>

    <radialGradient id="blueZone" cx="35%" cy="85%" r="40%" fx="35%" fy="85%">
      <stop offset="0%" stop-color="#49BDF2" stop-opacity="0.28"/>
      <stop offset="60%" stop-color="#49BDF2" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="#49BDF2" stop-opacity="0"/>
    </radialGradient>

    <radialGradient id="violetZone" cx="75%" cy="20%" r="50%" fx="75%" fy="20%">
      <stop offset="0%" stop-color="#7C5CFF" stop-opacity="0.32"/>
      <stop offset="50%" stop-color="#7C5CFF" stop-opacity="0.12"/>
      <stop offset="100%" stop-color="#7C5CFF" stop-opacity="0"/>
    </radialGradient>

    <radialGradient id="magentaZone" cx="95%" cy="80%" r="45%" fx="95%" fy="80%">
      <stop offset="0%" stop-color="#E96BC8" stop-opacity="0.35"/>
      <stop offset="50%" stop-color="#E96BC8" stop-opacity="0.12"/>
      <stop offset="100%" stop-color="#E96BC8" stop-opacity="0"/>
    </radialGradient>

    <radialGradient id="violetZone2" cx="60%" cy="60%" r="35%" fx="60%" fy="60%">
      <stop offset="0%" stop-color="#7C5CFF" stop-opacity="0.22"/>
      <stop offset="100%" stop-color="#7C5CFF" stop-opacity="0"/>
    </radialGradient>

    <filter id="grain">
      <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="3" stitchTiles="stitch"/>
      <feColorMatrix type="saturate" values="0"/>
      <feBlend in="SourceGraphic" mode="multiply" result="grainBlend"/>
      <feComponentTransfer>
        <feFuncA type="linear" slope="0.02"/>
      </feComponentTransfer>
      <feComposite in2="SourceGraphic" operator="in"/>
      <feBlend in2="SourceGraphic" mode="multiply"/>
    </filter>
  </defs>

  <!-- Clean white base -->
  <rect width="${WIDTH}" height="${HEIGHT}" fill="#FBFBFC"/>

  <!-- Stacked radial gradient zones - each a distinct color region -->
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#tealZone)"/>
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#blueZone)"/>
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#violetZone)"/>
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#magentaZone)"/>
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#violetZone2)"/>

  <!-- Subtle grain overlay -->
  <rect width="${WIDTH}" height="${HEIGHT}" filter="url(#grain)" opacity="0.3"/>

  <!-- Top thin gradient bar accent -->
  <rect x="0" y="0" width="${WIDTH}" height="3" fill="url(#barGrad)" opacity="0.85"/>

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

  <!-- Website URL only -->
  <text x="96" y="320" font-family="Inter, system-ui, -apple-system, sans-serif" font-size="18" font-weight="600" fill="#2EC4B6" letter-spacing="0.1">
    futurereadystudio.com
  </text>

  <!-- Right side: agent node constellation positioned around logo -->
  <g>
    <!-- Far outer nodes - framing the logo area -->
    <circle cx="1040" cy="100" r="4" fill="#E96BC8" opacity="0.7"/>
    <circle cx="1020" cy="290" r="3.5" fill="#2EC4B6" opacity="0.7"/>
    <circle cx="1500" cy="100" r="4" fill="#49BDF2" opacity="0.65"/>
    <circle cx="1520" cy="300" r="4" fill="#7C5CFF" opacity="0.7"/>
    <circle cx="1080" cy="200" r="3" fill="#49BDF2" opacity="0.55"/>
    <circle cx="1540" cy="200" r="3.5" fill="#E96BC8" opacity="0.6"/>

    <!-- Mid-ring nodes -->
    <circle cx="1100" cy="60" r="3" fill="#2EC4B6" opacity="0.6"/>
    <circle cx="1450" cy="60" r="3.5" fill="#7C5CFF" opacity="0.6"/>
    <circle cx="1100" cy="340" r="3.5" fill="#49BDF2" opacity="0.6"/>
    <circle cx="1450" cy="340" r="3" fill="#E96BC8" opacity="0.55"/>

    <!-- Connecting lines forming a network mesh around logo -->
    <line x1="1040" y1="100" x2="1100" y2="60" stroke="#E96BC8" stroke-width="1" opacity="0.25"/>
    <line x1="1100" y1="60" x2="1450" y2="60" stroke="#2EC4B6" stroke-width="1" opacity="0.2"/>
    <line x1="1450" y1="60" x2="1500" y2="100" stroke="#7C5CFF" stroke-width="1" opacity="0.25"/>
    <line x1="1500" y1="100" x2="1540" y2="200" stroke="#49BDF2" stroke-width="1" opacity="0.25"/>
    <line x1="1540" y1="200" x2="1520" y2="300" stroke="#E96BC8" stroke-width="1" opacity="0.25"/>
    <line x1="1520" y1="300" x2="1450" y2="340" stroke="#7C5CFF" stroke-width="1" opacity="0.25"/>
    <line x1="1450" y1="340" x2="1100" y2="340" stroke="#E96BC8" stroke-width="1" opacity="0.2"/>
    <line x1="1100" y1="340" x2="1020" y2="290" stroke="#49BDF2" stroke-width="1" opacity="0.25"/>
    <line x1="1020" y1="290" x2="1080" y2="200" stroke="#2EC4B6" stroke-width="1" opacity="0.25"/>
    <line x1="1080" y1="200" x2="1040" y2="100" stroke="#49BDF2" stroke-width="1" opacity="0.25"/>
  </g>

  <!-- Bottom accent line -->
  <rect x="0" y="${HEIGHT - 3}" width="${WIDTH}" height="3" fill="url(#barGrad)" opacity="0.85"/>
</svg>
`;

const svgLayer = Buffer.from(svg);

const resizedLogo = await sharp(logoBuffer)
  .resize({ width: 280, withoutEnlargement: true })
  .png()
  .toBuffer();

const logoInfo = await sharp(resizedLogo).metadata();

const logoX = 1270 - Math.round(logoInfo.width / 2);
const logoY = Math.round(HEIGHT / 2) - Math.round(logoInfo.height / 2);

await sharp({
  create: {
    width: WIDTH,
    height: HEIGHT,
    channels: 4,
    background: { r: 251, g: 251, b: 252, alpha: 1 },
  },
})
  .composite([
    { input: svgLayer, top: 0, left: 0 },
    { input: resizedLogo, top: logoY, left: logoX },
  ])
  .png({ quality: 100 })
  .toFile(join(rootDir, "public", "linkedin-banner.png"));

console.log("Banner generated: public/linkedin-banner.png (1584x396)");
