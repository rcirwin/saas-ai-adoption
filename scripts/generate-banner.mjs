import sharp from "sharp";
import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, "..");

const WIDTH = 1584;
const HEIGHT = 396;

const logoBuffer = readFileSync(join(rootDir, "public", "logo.png"));

async function composite(svgString, outputPath, logoOpts = {}) {
  const {
    logoWidth = 300,
    logoXPercent = 0.87,
    logoYCenter = true,
    logoYOffset = 0,
    logoColor = null,
  } = logoOpts;

  let logoImg = sharp(logoBuffer).resize({ width: logoWidth, withoutEnlargement: true });
  if (logoColor === "white") {
    const meta = await logoImg.clone().metadata();
    const resized = await logoImg.clone().png().toBuffer();
    const whiteLogo = await sharp(resized)
      .ensureAlpha()
      .threshold(20, { grayscale: true })
      .negate({ alpha: false })
      .toBuffer();
    logoImg = sharp(whiteLogo);
  }

  const resizedLogo = await logoImg.png().toBuffer();
  const logoInfo = await sharp(resizedLogo).metadata();
  const logoX = Math.round(WIDTH * logoXPercent) - Math.round(logoInfo.width / 2);
  const logoY = logoYCenter
    ? Math.round(HEIGHT / 2) - Math.round(logoInfo.height / 2) + logoYOffset
    : logoYOffset;

  await sharp({
    create: {
      width: WIDTH,
      height: HEIGHT,
      channels: 4,
      background: { r: 255, g: 255, b: 255, alpha: 1 },
    },
  })
    .composite([
      { input: Buffer.from(svgString), top: 0, left: 0 },
      { input: resizedLogo, top: logoY, left: logoX },
    ])
    .png({ quality: 100, compressionLevel: 9 })
    .toFile(outputPath);

  console.log(`Generated: ${outputPath}`);
}

// ============================================================
// VARIATION 1: DARK / DRAMATIC — Deep navy, glowing neon orbs
// ============================================================
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
  <rect x="0" y="0" width="${WIDTH}" height="${HEIGHT}" fill="#0A0F1E"/>
  <circle cx="820" cy="200" r="280" fill="url(#glowTeal)"/>
  <circle cx="1000" cy="220" r="300" fill="url(#glowViolet)"/>
  <circle cx="1150" cy="160" r="220" fill="url(#glowMagenta)"/>
  <circle cx="900" cy="320" r="200" fill="url(#glowBlue)"/>
  <rect x="0" y="0" width="${WIDTH}" height="3" fill="url(#barGradD)" opacity="1"/>
  <text x="96" y="150" font-family="Inter, system-ui, -apple-system, sans-serif" font-size="50" font-weight="700" fill="#FFFFFF" letter-spacing="-1.8">Prepare your SaaS for</text>
  <text x="96" y="212" font-family="Inter, system-ui, -apple-system, sans-serif" font-size="50" font-weight="700" fill="url(#textGradD)" letter-spacing="-1.8">an AI agent future.</text>
  <rect x="96" y="234" width="220" height="3" rx="1.5" fill="url(#barGradD)"/>
  <text x="96" y="278" font-family="Inter, system-ui, -apple-system, sans-serif" font-size="17" font-weight="500" fill="#94A3B8" letter-spacing="0.2">AI-Driven Growth Strategy for SaaS · $500K–$5M ARR</text>
  <text x="96" y="320" font-family="Inter, system-ui, -apple-system, sans-serif" font-size="18" font-weight="600" fill="#35C3C9" letter-spacing="0.1">futurereadystudio.com</text>
  <rect x="0" y="${HEIGHT - 3}" width="${WIDTH}" height="3" fill="url(#barGradD)"/>
</svg>`;

// ============================================================
// VARIATION 2: DIAGONAL SPLIT — Bold color block + white zone
// ============================================================
const v2Split = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}">
  <defs>
    <linearGradient id="bigGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#2EC4B6"/>
      <stop offset="50%" stop-color="#7C5CFF"/>
      <stop offset="100%" stop-color="#E96BC8"/>
    </linearGradient>
    <linearGradient id="textGradS" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#2EC4B6"/>
      <stop offset="100%" stop-color="#7C5CFF"/>
    </linearGradient>
  </defs>
  <rect x="0" y="0" width="${WIDTH}" height="${HEIGHT}" fill="#FFFFFF"/>
  <!-- Diagonal color block on right side -->
  <polygon points="1050,0 ${WIDTH},0 ${WIDTH},${HEIGHT} 900,${HEIGHT}" fill="url(#bigGrad)"/>
  <!-- Overlay darker gradient for depth on the block -->
  <polygon points="1050,0 ${WIDTH},0 ${WIDTH},${HEIGHT} 900,${HEIGHT}" fill="#0F172A" opacity="0.08"/>

  <!-- Text on white side -->
  <text x="96" y="150" font-family="Inter, system-ui, -apple-system, sans-serif" font-size="52" font-weight="700" fill="#0F172A" letter-spacing="-1.8">Prepare your SaaS for</text>
  <text x="96" y="214" font-family="Inter, system-ui, -apple-system, sans-serif" font-size="52" font-weight="700" fill="url(#textGradS)" letter-spacing="-1.8">an AI agent future.</text>
  <rect x="96" y="236" width="220" height="3" rx="1.5" fill="#2EC4B6"/>
  <text x="96" y="280" font-family="Inter, system-ui, -apple-system, sans-serif" font-size="17" font-weight="500" fill="#334155" letter-spacing="0.2">AI-Driven Growth Strategy for B2B SaaS · $500K–$5M ARR</text>
  <text x="96" y="322" font-family="Inter, system-ui, -apple-system, sans-serif" font-size="18" font-weight="600" fill="#2EC4B6" letter-spacing="0.1">futurereadystudio.com</text>
</svg>`;

// ============================================================
// VARIATION 3: FULL MESH GRADIENT — Rich flowing color everywhere
// ============================================================
const v3Mesh = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}">
  <defs>
    <linearGradient id="baseFlow" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#C8F2E8"/>
      <stop offset="40%" stop-color="#D4CDFD"/>
      <stop offset="100%" stop-color="#FAD1EB"/>
    </linearGradient>
    <radialGradient id="meshTeal" cx="20%" cy="30%" r="60%">
      <stop offset="0%" stop-color="#2EC4B6" stop-opacity="0.55"/>
      <stop offset="100%" stop-color="#2EC4B6" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="meshViolet" cx="65%" cy="70%" r="55%">
      <stop offset="0%" stop-color="#7C5CFF" stop-opacity="0.5"/>
      <stop offset="100%" stop-color="#7C5CFF" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="meshMagenta" cx="90%" cy="20%" r="45%">
      <stop offset="0%" stop-color="#E96BC8" stop-opacity="0.45"/>
      <stop offset="100%" stop-color="#E96BC8" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="meshBlue" cx="45%" cy="100%" r="40%">
      <stop offset="0%" stop-color="#49BDF2" stop-opacity="0.4"/>
      <stop offset="100%" stop-color="#49BDF2" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect x="0" y="0" width="${WIDTH}" height="${HEIGHT}" fill="url(#baseFlow)"/>
  <rect x="0" y="0" width="${WIDTH}" height="${HEIGHT}" fill="url(#meshTeal)"/>
  <rect x="0" y="0" width="${WIDTH}" height="${HEIGHT}" fill="url(#meshViolet)"/>
  <rect x="0" y="0" width="${WIDTH}" height="${HEIGHT}" fill="url(#meshMagenta)"/>
  <rect x="0" y="0" width="${WIDTH}" height="${HEIGHT}" fill="url(#meshBlue)"/>

  <text x="96" y="150" font-family="Inter, system-ui, -apple-system, sans-serif" font-size="52" font-weight="800" fill="#0F172A" letter-spacing="-1.8">Prepare your SaaS for</text>
  <text x="96" y="214" font-family="Inter, system-ui, -apple-system, sans-serif" font-size="52" font-weight="800" fill="#0F172A" letter-spacing="-1.8">an AI agent future.</text>
  <rect x="96" y="236" width="220" height="3" rx="1.5" fill="#0F172A" opacity="0.8"/>
  <text x="96" y="280" font-family="Inter, system-ui, -apple-system, sans-serif" font-size="17" font-weight="600" fill="#0F172A" letter-spacing="0.2">AI-Driven Growth Strategy for B2B SaaS · $500K–$5M ARR</text>
  <text x="96" y="322" font-family="Inter, system-ui, -apple-system, sans-serif" font-size="18" font-weight="700" fill="#0F172A" letter-spacing="0.1">futurereadystudio.com</text>
</svg>`;

// ============================================================
// VARIATION 4: OVERSIZED TYPOGRAPHY — Massive text, minimal color
// ============================================================
const v4Typography = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}">
  <defs>
    <linearGradient id="bigTextGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#2EC4B6"/>
      <stop offset="50%" stop-color="#7C5CFF"/>
      <stop offset="100%" stop-color="#E96BC8"/>
    </linearGradient>
    <linearGradient id="barGradT" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#2EC4B6"/>
      <stop offset="35%" stop-color="#49BDF2"/>
      <stop offset="60%" stop-color="#7C5CFF"/>
      <stop offset="100%" stop-color="#E96BC8"/>
    </linearGradient>
  </defs>
  <rect x="0" y="0" width="${WIDTH}" height="${HEIGHT}" fill="#FFFFFF"/>
  <!-- Massive headline -->
  <text x="96" y="165" font-family="Inter, system-ui, -apple-system, sans-serif" font-size="82" font-weight="800" fill="#0F172A" letter-spacing="-3">The AI agent</text>
  <text x="96" y="255" font-family="Inter, system-ui, -apple-system, sans-serif" font-size="82" font-weight="800" fill="url(#bigTextGrad)" letter-spacing="-3">future is here.</text>

  <!-- Thick gradient bar -->
  <rect x="96" y="280" width="420" height="5" rx="2.5" fill="url(#barGradT)"/>

  <!-- Subline and URL -->
  <text x="96" y="322" font-family="Inter, system-ui, -apple-system, sans-serif" font-size="18" font-weight="600" fill="#334155" letter-spacing="0.2">
    <tspan fill="#0F172A" font-weight="700">Future Ready Studio</tspan> · AI-Driven Growth for B2B SaaS · futurereadystudio.com
  </text>

  <!-- Decorative gradient bar at far right top -->
  <rect x="${WIDTH - 200}" y="0" width="200" height="5" fill="url(#barGradT)"/>
  <rect x="0" y="${HEIGHT - 5}" width="200" height="5" fill="url(#barGradT)"/>
</svg>`;

// Generate all variations
await composite(v1Dark, join(rootDir, "public", "linkedin-banner-v1-dark.png"), {
  logoWidth: 280,
  logoXPercent: 0.87,
});

await composite(v2Split, join(rootDir, "public", "linkedin-banner-v2-split.png"), {
  logoWidth: 280,
  logoXPercent: 0.87,
});

await composite(v3Mesh, join(rootDir, "public", "linkedin-banner-v3-mesh.png"), {
  logoWidth: 280,
  logoXPercent: 0.87,
});

await composite(v4Typography, join(rootDir, "public", "linkedin-banner-v4-typography.png"), {
  logoWidth: 200,
  logoXPercent: 0.90,
  logoYOffset: -60,
});

console.log("\nAll banner variations generated in public/");
