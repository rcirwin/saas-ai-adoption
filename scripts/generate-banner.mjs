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

    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F0F6F5"/>
      <stop offset="50%" stop-color="#F6F7F8"/>
      <stop offset="100%" stop-color="#F2F0FA"/>
    </linearGradient>

    <filter id="orbBlurLg">
      <feGaussianBlur in="SourceGraphic" stdDeviation="80"/>
    </filter>
    <filter id="orbBlurMd">
      <feGaussianBlur in="SourceGraphic" stdDeviation="55"/>
    </filter>
    <filter id="orbBlurSm">
      <feGaussianBlur in="SourceGraphic" stdDeviation="40"/>
    </filter>

    <filter id="grain">
      <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/>
      <feColorMatrix type="saturate" values="0"/>
      <feBlend in="SourceGraphic" mode="multiply" result="grainBlend"/>
      <feComponentTransfer>
        <feFuncA type="linear" slope="0.025"/>
      </feComponentTransfer>
      <feComposite in2="SourceGraphic" operator="in"/>
      <feBlend in2="SourceGraphic" mode="multiply"/>
    </filter>
  </defs>

  <!-- Background with subtle warm-cool gradient -->
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bgGrad)"/>

  <!-- Bold gradient orbs — rich and colorful -->
  <circle cx="120" cy="80" r="280" fill="#2EC4B6" opacity="0.22" filter="url(#orbBlurLg)"/>
  <circle cx="500" cy="380" r="220" fill="#49BDF2" opacity="0.16" filter="url(#orbBlurMd)"/>
  <circle cx="900" cy="50" r="200" fill="#7C5CFF" opacity="0.14" filter="url(#orbBlurMd)"/>
  <circle cx="1350" cy="300" r="260" fill="#7C5CFF" opacity="0.18" filter="url(#orbBlurLg)"/>
  <circle cx="1500" cy="80" r="200" fill="#E96BC8" opacity="0.12" filter="url(#orbBlurMd)"/>
  <circle cx="700" cy="200" r="160" fill="#E96BC8" opacity="0.08" filter="url(#orbBlurSm)"/>
  <circle cx="1100" cy="180" r="180" fill="#2EC4B6" opacity="0.10" filter="url(#orbBlurMd)"/>

  <!-- Grain overlay -->
  <rect width="${WIDTH}" height="${HEIGHT}" filter="url(#grain)" opacity="0.35"/>

  <!-- Headline line 1 -->
  <text x="88" y="148" font-family="Inter, system-ui, -apple-system, sans-serif" font-size="46" font-weight="600" fill="#0F172A" letter-spacing="-1.5">
    Prepare your SaaS for
  </text>

  <!-- Headline line 2 (gradient) -->
  <text x="88" y="205" font-family="Inter, system-ui, -apple-system, sans-serif" font-size="46" font-weight="600" fill="url(#textGrad)" letter-spacing="-1.5">
    an AI agent future.
  </text>

  <!-- Accent gradient bar -->
  <rect x="88" y="224" width="200" height="3" rx="1.5" fill="url(#barGrad)" opacity="0.8"/>

  <!-- Subtext -->
  <text x="88" y="262" font-family="Inter, system-ui, -apple-system, sans-serif" font-size="15" font-weight="400" fill="#64748B" letter-spacing="0.3">
    AI-Driven Growth Strategy for B2B SaaS
  </text>

  <!-- Future Ready Studio — plain text, bigger -->
  <text x="88" y="296" font-family="Inter, system-ui, -apple-system, sans-serif" font-size="17" font-weight="600" fill="#2EC4B6" letter-spacing="0.3">
    Future Ready Studio
  </text>

  <!-- Decorative agent nodes on right -->
  <circle cx="1180" cy="198" r="5" fill="#2EC4B6" opacity="0.55"/>
  <circle cx="1250" cy="138" r="4" fill="#7C5CFF" opacity="0.5"/>
  <circle cx="1270" cy="248" r="4.5" fill="#49BDF2" opacity="0.5"/>
  <circle cx="1130" cy="138" r="3.5" fill="#E96BC8" opacity="0.45"/>
  <circle cx="1130" cy="268" r="4" fill="#2EC4B6" opacity="0.45"/>
  <circle cx="1320" cy="188" r="3.5" fill="#7C5CFF" opacity="0.45"/>
  <circle cx="1200" cy="280" r="3" fill="#E96BC8" opacity="0.35"/>
  <circle cx="1310" cy="128" r="3" fill="#49BDF2" opacity="0.35"/>

  <!-- Connecting lines -->
  <line x1="1180" y1="198" x2="1250" y2="138" stroke="#7C5CFF" stroke-width="1" opacity="0.25"/>
  <line x1="1180" y1="198" x2="1270" y2="248" stroke="#49BDF2" stroke-width="1" opacity="0.25"/>
  <line x1="1180" y1="198" x2="1130" y2="138" stroke="#E96BC8" stroke-width="1" opacity="0.2"/>
  <line x1="1180" y1="198" x2="1130" y2="268" stroke="#2EC4B6" stroke-width="1" opacity="0.25"/>
  <line x1="1250" y1="138" x2="1320" y2="188" stroke="#7C5CFF" stroke-width="1" opacity="0.2"/>
  <line x1="1270" y1="248" x2="1320" y2="188" stroke="#49BDF2" stroke-width="1" opacity="0.2"/>
  <line x1="1130" y1="268" x2="1200" y2="280" stroke="#E96BC8" stroke-width="0.8" opacity="0.18"/>
  <line x1="1250" y1="138" x2="1310" y2="128" stroke="#49BDF2" stroke-width="0.8" opacity="0.18"/>

  <!-- Bottom accent line -->
  <rect x="0" y="${HEIGHT - 3}" width="${WIDTH}" height="3" fill="url(#barGrad)" opacity="0.6"/>
</svg>
`;

const svgLayer = Buffer.from(svg);

const resizedLogo = await sharp(logoBuffer)
  .resize({ width: 240, withoutEnlargement: true })
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
