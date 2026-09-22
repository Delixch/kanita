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
  <svg width="1200" height="850" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#090B10" />
        <stop offset="50%" stop-color="#141820" />
        <stop offset="100%" stop-color="#090B10" />
      </linearGradient>
      <linearGradient id="cyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#3BE8FF" />
        <stop offset="100%" stop-color="#0099FF" />
      </linearGradient>
      <linearGradient id="orangeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FF5A1F" />
        <stop offset="100%" stop-color="#FFB700" />
      </linearGradient>
      <linearGradient id="limeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#C7FF38" />
        <stop offset="100%" stop-color="#00E676" />
      </linearGradient>
      <linearGradient id="violetGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#7C5CFF" />
        <stop offset="100%" stop-color="#D500F9" />
      </linearGradient>

      <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
        <feGaussianBlur stdDeviation="45" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>

    <!-- Deep Background -->
    <rect width="1200" height="850" fill="url(#bg)" />

    <!-- Ambient Glowing Orbs -->
    <circle cx="250" cy="250" r="280" fill="#3BE8FF" opacity="0.22" filter="url(#glow)" />
    <circle cx="950" cy="450" r="320" fill="#FF5A1F" opacity="0.2" filter="url(#glow)" />
    <circle cx="600" cy="700" r="240" fill="#C7FF38" opacity="0.18" filter="url(#glow)" />
    <circle cx="650" cy="150" r="200" fill="#7C5CFF" opacity="0.15" filter="url(#glow)" />

    <!-- Light Rays Grid Pattern -->
    <g opacity="0.08" stroke="#FFFFFF" stroke-width="1">
      <line x1="0" y1="100" x2="1200" y2="100" />
      <line x1="0" y1="300" x2="1200" y2="300" />
      <line x1="0" y1="500" x2="1200" y2="500" />
      <line x1="0" y1="700" x2="1200" y2="700" />
      <line x1="200" y1="0" x2="200" y2="850" />
      <line x1="600" y1="0" x2="600" y2="850" />
      <line x1="1000" y1="0" x2="1000" y2="850" />
    </g>

    <!-- CARD 1: Mobile Premium Glass Card (Left Perspective) -->
    <g transform="translate(100, 180) rotate(-7)">
      <rect x="0" y="0" width="340" height="520" rx="32" fill="rgba(20,24,32,0.85)" stroke="url(#cyanGrad)" stroke-width="3" />
      <!-- Top Badge -->
      <rect x="30" y="35" width="130" height="32" rx="16" fill="url(#cyanGrad)" opacity="0.9" />
      <text x="95" y="56" font-family="-apple-system, sans-serif" font-size="13" font-weight="900" fill="#090B10" text-anchor="middle">BESTSELLER</text>
      
      <text x="30" y="115" font-family="-apple-system, sans-serif" font-size="28" font-weight="900" fill="#3BE8FF">SALT MOBILE</text>
      <text x="30" y="145" font-family="-apple-system, sans-serif" font-size="18" font-weight="700" fill="#94A3B8">Premium 5G</text>
      
      <!-- Price Display -->
      <text x="30" y="210" font-family="-apple-system, sans-serif" font-size="46" font-weight="900" fill="#FFFFFF">CHF 37.95</text>
      <text x="30" y="240" font-family="-apple-system, sans-serif" font-size="16" font-weight="600" fill="#94A3B8">statt CHF 89.- / Monat</text>
      
      <!-- Bullet Points -->
      <g transform="translate(30, 275)" fill="#F7F8FA" font-family="-apple-system, sans-serif" font-size="15" font-weight="600">
        <circle cx="10" cy="10" r="5" fill="#3BE8FF" />
        <text x="25" y="15">Unlimitierte Anrufe CH &amp; EU</text>
        <circle cx="10" cy="45" r="5" fill="#3BE8FF" />
        <text x="25" y="50">Unlimitiertes 5G Data CH &amp; EU</text>
        <circle cx="10" cy="80" r="5" fill="#3BE8FF" />
        <text x="25" y="85">3 GB Business-Zone Roaming</text>
      </g>
    </g>

    <!-- CARD 2: Salt Home+ Ultra Card (Center Prominent) -->
    <g transform="translate(440, 100) rotate(3)">
      <!-- Outer Glow Frame -->
      <rect x="-4" y="-4" width="418" height="618" rx="38" fill="none" stroke="url(#limeGrad)" stroke-width="4" opacity="0.8" />
      <rect x="0" y="0" width="410" height="610" rx="34" fill="rgba(14,18,26,0.92)" stroke="url(#orangeGrad)" stroke-width="2" />
      
      <!-- Top Badge -->
      <rect x="35" y="35" width="150" height="36" rx="18" fill="url(#limeGrad)" />
      <text x="110" y="58" font-family="-apple-system, sans-serif" font-size="14" font-weight="900" fill="#090B10" text-anchor="middle">10 GBIT/S FIBER</text>
      
      <text x="35" y="125" font-family="-apple-system, sans-serif" font-size="34" font-weight="900" fill="#FF5A1F">SALT HOME+</text>
      <text x="35" y="160" font-family="-apple-system, sans-serif" font-size="20" font-weight="700" fill="#C7FF38">Wi-Fi 7+ Router &amp; 300+ TV</text>
      
      <!-- Price Display -->
      <text x="35" y="235" font-family="-apple-system, sans-serif" font-size="56" font-weight="900" fill="#C7FF38">CHF 39.95</text>
      <text x="35" y="270" font-family="-apple-system, sans-serif" font-size="16" font-weight="600" fill="#94A3B8">/ Monat (12 Mt. danach 49.95)</text>

      <!-- Glass Highlight Pill -->
      <rect x="35" y="300" width="340" height="50" rx="14" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.12)" />
      <text x="55" y="331" font-family="-apple-system, sans-serif" font-size="16" font-weight="800" fill="#FFFFFF">CRAZY DEAL: Gratis Aktivierung!</text>

      <!-- Feature Checklist -->
      <g transform="translate(35, 385)" fill="#F7F8FA" font-family="-apple-system, sans-serif" font-size="16" font-weight="600">
        <text x="0" y="15">✓ 10-Gbit/s Internet-Speed</text>
        <text x="0" y="50">✓ Apple TV 4K Box inkludiert</text>
        <text x="0" y="85">✓ 7 Tage Replay &amp; Recordings</text>
        <text x="0" y="120">✓ 3 Monate Sky Sport inklusive</text>
      </g>
    </g>

    <!-- CARD 3: Travel Limited Edition (Right Perspective) -->
    <g transform="translate(860, 220) rotate(8)">
      <rect x="0" y="0" width="310" height="480" rx="28" fill="rgba(20,24,32,0.85)" stroke="url(#violetGrad)" stroke-width="3" />
      <rect x="25" y="30" width="120" height="30" rx="15" fill="url(#violetGrad)" />
      <text x="85" y="50" font-family="-apple-system, sans-serif" font-size="13" font-weight="900" fill="#FFFFFF" text-anchor="middle">-70% RABATT</text>

      <text x="25" y="105" font-family="-apple-system, sans-serif" font-size="26" font-weight="900" fill="#7C5CFF">TRAVEL</text>
      <text x="25" y="132" font-family="-apple-system, sans-serif" font-size="16" font-weight="700" fill="#94A3B8">Limited Edition</text>

      <text x="25" y="195" font-family="-apple-system, sans-serif" font-size="42" font-weight="900" fill="#FFFFFF">CHF 29.95</text>
      <text x="25" y="222" font-family="-apple-system, sans-serif" font-size="14" font-weight="600" fill="#94A3B8">statt CHF 96.95 / Monat</text>

      <g transform="translate(25, 255)" fill="#F7F8FA" font-family="-apple-system, sans-serif" font-size="14" font-weight="600">
        <text x="0" y="15">🌐 EU, US &amp; Canada Zone</text>
        <text x="0" y="45">✈️ TUR, THA, CHN, JPN</text>
        <text x="0" y="75">⚡ 5G Ultra Speed CH</text>
      </g>
    </g>

    <!-- Floating Speed Badges & Accents -->
    <g transform="translate(70, 110)">
      <rect x="0" y="0" width="160" height="44" rx="22" fill="#090B10" stroke="#3BE8FF" stroke-width="2" />
      <text x="80" y="27" font-family="-apple-system, sans-serif" font-size="14" font-weight="900" fill="#3BE8FF" text-anchor="middle">⚡ 5G ULTRA NETZ</text>
    </g>

    <g transform="translate(970, 120)">
      <rect x="0" y="0" width="170" height="44" rx="22" fill="#090B10" stroke="#C7FF38" stroke-width="2" />
      <text x="85" y="27" font-family="-apple-system, sans-serif" font-size="14" font-weight="900" fill="#C7FF38" text-anchor="middle">🚀 BESTER DEAL CH</text>
    </g>
  </svg>
  `;
}

async function build() {
  const assets = [
    {
      file: 'offer-mobile-premium.webp',
      svg: createSvg('Mobile Premium', 'Unlimitiert CH + Europe', 'CHF 37.95 / mtl.', 'BESTSELLER', ['#3BE8FF', '#0099FF']),
    },
    {
      file: 'offer-mobile-plus.webp',
      svg: createSvg('Mobile Premium+', 'Unlimitiert Business Zone', 'CHF 53.95 / mtl.', 'BUSINESS ZONE', ['#FF5A1F', '#FFB700']),
    },
    {
      file: 'offer-salt-home.webp',
      svg: createSvg('Salt Home+', '10 Gbit/s Fiber &amp; TV 300+', 'CHF 39.95 / mtl.', 'CRAZY DEAL', ['#C7FF38', '#00E676']),
    },
    {
      file: 'offer-travel-edition.webp',
      svg: createSvg('Travel Edition', 'EU, US, Canada &amp; Top Roaming', 'CHF 29.95 / mtl.', '-70% RABATT', ['#7C5CFF', '#D500F9']),
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
}

build().catch(console.error);
