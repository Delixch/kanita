const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'public', 'images');
const videoDir = path.join(__dirname, '..', 'public', 'video');

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
if (!fs.existsSync(videoDir)) fs.mkdirSync(videoDir, { recursive: true });

function escapeXml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function createSvg(title, subtitle, price, badge, gradientColors) {
  const safeTitle = escapeXml(title);
  const safeSubtitle = escapeXml(subtitle);
  const safePrice = escapeXml(price);
  const safeBadge = escapeXml(badge);

  return `
  <svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#090B10" />
        <stop offset="100%" stop-color="#141820" />
      </linearGradient>
      <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${gradientColors[0]}" />
        <stop offset="100%" stop-color="${gradientColors[1]}" />
      </linearGradient>
      <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="30" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>
    <rect width="800" height="600" fill="url(#bg)" rx="32" />
    
    <!-- Dynamic Glowing Spheres -->
    <circle cx="650" cy="150" r="180" fill="${gradientColors[0]}" opacity="0.25" filter="url(#glow)" />
    <circle cx="150" cy="450" r="140" fill="${gradientColors[1]}" opacity="0.2" filter="url(#glow)" />

    <!-- Card Frame Glass effect -->
    <rect x="50" y="50" width="700" height="500" rx="24" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.15)" stroke-width="2" />
    
    <!-- Badge -->
    <rect x="90" y="90" width="160" height="40" rx="20" fill="url(#accent)" opacity="0.95" />
    <text x="170" y="115" font-family="-apple-system, sans-serif" font-size="16" font-weight="bold" fill="#090B10" text-anchor="middle">${safeBadge}</text>
    
    <!-- Product Name & Subtitle -->
    <text x="90" y="210" font-family="-apple-system, sans-serif" font-size="44" font-weight="900" fill="#FFFFFF">${safeTitle}</text>
    <text x="90" y="260" font-family="-apple-system, sans-serif" font-size="22" font-weight="500" fill="#94A3B8">${safeSubtitle}</text>
    
    <!-- Decorative Device Graphic -->
    <g transform="translate(480, 200)">
      <rect x="0" y="0" width="180" height="300" rx="28" fill="#1E293B" stroke="url(#accent)" stroke-width="4" />
      <rect x="15" y="20" width="150" height="260" rx="16" fill="url(#bg)" />
      <circle cx="90" cy="150" r="45" fill="none" stroke="url(#accent)" stroke-width="6" />
      <text x="90" y="158" font-family="-apple-system, sans-serif" font-size="24" font-weight="bold" fill="url(#accent)" text-anchor="middle">5G</text>
    </g>
    
    <!-- Price Banner -->
    <rect x="90" y="400" width="340" height="100" rx="20" fill="rgba(0,0,0,0.4)" stroke="rgba(255,255,255,0.1)" />
    <text x="120" y="440" font-family="-apple-system, sans-serif" font-size="16" font-weight="bold" fill="#94A3B8">AKTIONSPREIS</text>
    <text x="120" y="480" font-family="-apple-system, sans-serif" font-size="36" font-weight="900" fill="url(#accent)">${safePrice}</text>
  </svg>
  `;
}

function createHeroSvg() {
  return `
  <svg width="1200" height="800" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#090B10" />
        <stop offset="50%" stop-color="#141820" />
        <stop offset="100%" stop-color="#090B10" />
      </linearGradient>
      <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#3BE8FF" />
        <stop offset="100%" stop-color="#FF5A1F" />
      </linearGradient>
      <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="40" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>
    <rect width="1200" height="800" fill="url(#bg)" />
    <circle cx="300" cy="300" r="250" fill="#3BE8FF" opacity="0.15" filter="url(#glow)" />
    <circle cx="900" cy="500" r="300" fill="#FF5A1F" opacity="0.15" filter="url(#glow)" />
    <circle cx="600" cy="200" r="200" fill="#C7FF38" opacity="0.1" filter="url(#glow)" />

    <!-- Abstract Devices Glass composition -->
    <g transform="translate(200, 150) rotate(-6)">
      <rect x="0" y="0" width="360" height="500" rx="36" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.2)" stroke-width="2" />
      <text x="40" y="100" font-family="-apple-system, sans-serif" font-size="32" font-weight="900" fill="#3BE8FF">SALT MOBILE</text>
      <text x="40" y="150" font-family="-apple-system, sans-serif" font-size="56" font-weight="900" fill="#FFFFFF">CHF 19.95</text>
    </g>

    <g transform="translate(600, 100) rotate(8)">
      <rect x="0" y="0" width="400" height="560" rx="36" fill="rgba(20,24,32,0.85)" stroke="url(#g1)" stroke-width="3" />
      <text x="50" y="100" font-family="-apple-system, sans-serif" font-size="36" font-weight="900" fill="#FF5A1F">SALT HOME</text>
      <text x="50" y="160" font-family="-apple-system, sans-serif" font-size="64" font-weight="900" fill="#C7FF38">10 Gbit/s</text>
      <text x="50" y="230" font-family="-apple-system, sans-serif" font-size="28" font-weight="700" fill="#FFFFFF">Ultra Fiber Speed</text>
    </g>
  </svg>
  `;
}

async function build() {
  const assets = [
    {
      file: 'offer-mobile-premium.webp',
      svg: createSvg('Mobile Premium', 'Unlimitiert CH + 5G Speed', 'CHF 19.95 / mtl.', 'BESTSELLER', ['#3BE8FF', '#0099FF']),
    },
    {
      file: 'offer-mobile-plus.webp',
      svg: createSvg('Mobile Premium+', 'Unlimitiert CH &amp; EU Roaming', 'CHF 29.95 / mtl.', 'EUROPA WIDE', ['#FF5A1F', '#FFB700']),
    },
    {
      file: 'offer-salt-home.webp',
      svg: createSvg('Salt Home+', '10 Gbit/s Glasfaser &amp; TV', 'CHF 39.95 / mtl.', 'ULTRASCHNELL', ['#C7FF38', '#00E676']),
    },
    {
      file: 'offer-travel-edition.webp',
      svg: createSvg('Travel Edition', 'Global eSIM Roaming Bundle', 'CHF 14.95 / mtl.', 'LIMITIERT', ['#7C5CFF', '#D500F9']),
    },
    {
      file: 'hero-composition.webp',
      svg: createHeroSvg(),
    },
    {
      file: 'promo-poster.webp',
      svg: createSvg('Salt Aktionen', 'Unsere Angebote in Bewegung', 'PROMO VIDEO', 'PLAY', ['#FF5A1F', '#3BE8FF']),
    }
  ];

  for (const item of assets) {
    const filePath = path.join(outDir, item.file);
    await sharp(Buffer.from(item.svg))
      .webp({ quality: 85 })
      .toFile(filePath);
    const stats = fs.statSync(filePath);
    console.log(`Generated ${item.file} (${stats.size} bytes)`);
  }

  // Create minimal valid MP4 video placeholder
  const dummyVideoPath = path.join(videoDir, 'promo-preview.mp4');
  // Minimal MP4 file structure
  const mp4Buffer = Buffer.from(
    '000000206674797069736f6d0000020069736f6d69736f32617663316d7034310000000866726565000000086d646174',
    'hex'
  );
  fs.writeFileSync(dummyVideoPath, mp4Buffer);
  console.log('Generated promo-preview.mp4 placeholder video file');
}

build().catch(console.error);
