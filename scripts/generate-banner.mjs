import sharp from "sharp";
import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, "..");

const WIDTH = 1584;
const HEIGHT = 396;

const logoBuffer = readFileSync(join(rootDir, "public", "logo.png"));
const logoMeta = await sharp(logoBuffer).metadata();

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}">
  <defs>
    <!-- Gradient for headline line 2 -->
    <linearGradient id="textGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#2EC4B6"/>
      <stop offset="100%" stop-color="#7C5CFF"/>
    </linearGradient>

    <!-- Gradient for accent bar -->
    <linearGradient id="barGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#2EC4B6"/>
      <stop offset="45%" stop-color="#49BDF2"/>
      <stop offset="70%" stop-color="#7C5CFF"/>
      <stop offset="100%" stop-color="#E96BC8"/>
    </linearGradient>

    <!-- Blur filter for orbs -->
    <filter id="orbBlur">
      <feGaussianBlur in="SourceGraphic" stdDeviation="60"/>
    </filter>

    <filter id="orbBlur2">
      <feGaussianBlur in="SourceGraphic" stdDeviation="50"/>
    </filter>

    <!-- Subtle grain noise -->
    <filter id="grain">
      <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/>
      <feColorMatrix type="saturate" values="0"/>
      <feBlend in="SourceGraphic" mode="multiply" result="grainBlend"/>
      <feComponentTransfer>
        <feFuncA type="linear" slope="0.03"/>
      </feComponentTransfer>
      <feComposite in2="SourceGraphic" operator="in"/>
      <feBlend in2="SourceGraphic" mode="multiply"/>
    </filter>

    <!-- Pill gradient background -->
    <linearGradient id="pillGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#2EC4B6" stop-opacity="0.12"/>
      <stop offset="100%" stop-color="#7C5CFF" stop-opacity="0.08"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="${WIDTH}" height="${HEIGHT}" fill="#F6F7F8"/>

  <!-- Floating gradient orbs -->
  <circle cx="220" cy="120" r="200" fill="#2EC4B6" opacity="0.10" filter="url(#orbBlur)"/>
  <circle cx="1300" cy="180" r="180" fill="#7C5CFF" opacity="0.08" filter="url(#orbBlur)"/>
  <circle cx="800" cy="340" r="160" fill="#E96BC8" opacity="0.05" filter="url(#orbBlur2)"/>
  <circle cx="600" cy="60" r="120" fill="#49BDF2" opacity="0.06" filter="url(#orbBlur2)"/>

  <!-- Grain overlay -->
  <rect width="${WIDTH}" height="${HEIGHT}" filter="url(#grain)" opacity="0.4"/>

  <!-- Headline line 1 -->
  <text x="88" y="155" font-family="Inter, system-ui, -apple-system, sans-serif" font-size="44" font-weight="600" fill="#0F172A" letter-spacing="-1.5">
    Prepare your SaaS for
  </text>

  <!-- Headline line 2 (gradient) -->
  <text x="88" y="210" font-family="Inter, system-ui, -apple-system, sans-serif" font-size="44" font-weight="600" fill="url(#textGrad)" letter-spacing="-1.5">
    an AI agent future.
  </text>

  <!-- Accent gradient bar -->
  <rect x="88" y="232" width="180" height="3" rx="1.5" fill="url(#barGrad)" opacity="0.7"/>

  <!-- Subtext -->
  <text x="88" y="268" font-family="Inter, system-ui, -apple-system, sans-serif" font-size="15" font-weight="400" fill="#64748B" letter-spacing="0.2">
    AI-Driven Growth Strategy for B2B SaaS
  </text>

  <!-- Pill tag -->
  <rect x="88" y="286" width="164" height="28" rx="14" fill="url(#pillGrad)" stroke="#2EC4B6" stroke-opacity="0.2" stroke-width="1"/>
  <text x="170" y="305" font-family="Inter, system-ui, -apple-system, sans-serif" font-size="12" font-weight="500" fill="#2EC4B6" text-anchor="middle" letter-spacing="0.5">
    Future Ready Studio
  </text>

  <!-- Decorative dots / agent nodes on right side -->
  <!-- Central node cluster suggesting agentic workflow -->
  <circle cx="1180" cy="198" r="4" fill="#2EC4B6" opacity="0.5"/>
  <circle cx="1240" cy="148" r="3" fill="#7C5CFF" opacity="0.4"/>
  <circle cx="1260" cy="238" r="3.5" fill="#49BDF2" opacity="0.45"/>
  <circle cx="1140" cy="148" r="2.5" fill="#E96BC8" opacity="0.35"/>
  <circle cx="1140" cy="258" r="3" fill="#2EC4B6" opacity="0.4"/>
  <circle cx="1300" cy="188" r="2.5" fill="#7C5CFF" opacity="0.35"/>

  <!-- Connecting lines between nodes -->
  <line x1="1180" y1="198" x2="1240" y2="148" stroke="#7C5CFF" stroke-width="0.8" opacity="0.2"/>
  <line x1="1180" y1="198" x2="1260" y2="238" stroke="#49BDF2" stroke-width="0.8" opacity="0.2"/>
  <line x1="1180" y1="198" x2="1140" y2="148" stroke="#E96BC8" stroke-width="0.8" opacity="0.15"/>
  <line x1="1180" y1="198" x2="1140" y2="258" stroke="#2EC4B6" stroke-width="0.8" opacity="0.2"/>
  <line x1="1240" y1="148" x2="1300" y2="188" stroke="#7C5CFF" stroke-width="0.8" opacity="0.15"/>
  <line x1="1260" y1="238" x2="1300" y2="188" stroke="#49BDF2" stroke-width="0.8" opacity="0.15"/>

  <!-- Bottom accent line spanning full width -->
  <rect x="0" y="${HEIGHT - 3}" width="${WIDTH}" height="3" fill="url(#barGrad)" opacity="0.5"/>
</svg>
`;

const svgLayer = Buffer.from(svg);

const resizedLogo = await sharp(logoBuffer)
  .resize({ width: 220, withoutEnlargement: true })
  .png()
  .toBuffer();

const logoInfo = await sharp(resizedLogo).metadata();

const logoX = 1280 - Math.round(logoInfo.width / 2);
const logoY = Math.round(HEIGHT / 2) - Math.round(logoInfo.height / 2) - 10;

await sharp({
  create: {
    width: WIDTH,
    height: HEIGHT,
    channels: 4,
    background: { r: 246, g: 247, b: 248, alpha: 1 },
  },
})
  .composite([
    { input: svgLayer, top: 0, left: 0 },
    { input: resizedLogo, top: logoY, left: logoX },
  ])
  .png({ quality: 100 })
  .toFile(join(rootDir, "public", "linkedin-banner.png"));

console.log("Banner generated: public/linkedin-banner.png (1584x396)");
