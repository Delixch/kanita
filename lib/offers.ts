export interface Offer {
  id: string;
  name: string;
  badge?: string;
  price: string;
  pricePeriod: string;
  oldPrice?: string;
  description: string;
  highlights: string[];
  image: string;
  accentColor: 'cyan' | 'orange' | 'lime' | 'violet';
  popular?: boolean;
}

export const OFFERS: Offer[] = [
  {
    id: 'mobile-premium',
    name: 'Mobile-Abo Premium',
    badge: 'Bestseller',
    price: 'CHF 19.95',
    pricePeriod: '/ Monat',
    oldPrice: 'CHF 59.95',
    description: 'Highspeed 5G Internet & unlimitierte Anrufe in der Schweiz.',
    highlights: [
      'Unlimitiertes 5G Highspeed Data CH',
      'Unlimitierte Anrufe & SMS/MMS in CH',
      'Highspeed Premium 5G Netz',
      'Keine Aktivierungsgebühr online',
      'Monatlich kündbar (flexible Laufzeit)'
    ],
    image: '/images/offer-mobile-premium.webp',
    accentColor: 'cyan',
    popular: true,
  },
  {
    id: 'mobile-premium-plus',
    name: 'Mobile-Abo Premium+',
    badge: 'Europa Wide',
    price: 'CHF 29.95',
    pricePeriod: '/ Monat',
    oldPrice: 'CHF 79.95',
    description: 'Sorgenfrei in der Schweiz und in ganz Europa surfen & telefonieren.',
    highlights: [
      'Unlimitiertes 5G Highspeed Data CH & EU',
      'Unlimitierte Anrufe & SMS CH & EU',
      '40 GB Highspeed Roaming pro Monat',
      'Top Ultra-Fast 5G Verbindung',
      'VIP-Kundenservice inklusive'
    ],
    image: '/images/offer-mobile-plus.webp',
    accentColor: 'orange',
  },
  {
    id: 'salt-home-plus',
    name: 'Salt Home+',
    badge: 'Ultraschnell',
    price: 'CHF 39.95',
    pricePeriod: '/ Monat',
    oldPrice: 'CHF 69.95',
    description: '10 Gbit/s Glasfaser-Internet, TV mit 260+ Sendern & Festnetz.',
    highlights: [
      '10 Gbit/s Symmetrischer Speed',
      'Apple TV 4K Box inkludiert',
      '260+ TV-Sender (150+ in HD)',
      'Festnetztelefonie unlimitiert',
      'Inklusive Wi-Fi 6 Router'
    ],
    image: '/images/offer-salt-home.webp',
    accentColor: 'lime',
  },
  {
    id: 'travel-limited-edition',
    name: 'Travel – Limited Edition',
    badge: 'Limitiert',
    price: 'CHF 14.95',
    pricePeriod: '/ Monat',
    oldPrice: 'CHF 34.95',
    description: 'Das ultimative Roaming-Paket für Weltenbummler & Vielreisende.',
    highlights: [
      'Global Roaming in über 100 Ländern',
      'Sofort-Aktivierung per eSIM',
      '10 GB Highspeed Daten weltweit',
      'Flexibel zubuchbares Datenvolumen',
      'Exklusiver Aktionspreis'
    ],
    image: '/images/offer-travel-edition.webp',
    accentColor: 'violet',
  },
];

export const FORM_OFFER_OPTIONS = [
  ...OFFERS.map(o => o.name),
  'Spezialangebot / mehrere Produkte'
] as const;

export type FormOfferOption = typeof FORM_OFFER_OPTIONS[number];
