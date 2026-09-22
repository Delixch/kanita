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
    price: 'CHF 37.95',
    pricePeriod: '/ Monat',
    oldPrice: 'CHF 89.-',
    description: 'Unlimitierte Anrufe, SMS & Daten in CH und Europe-Zone.',
    highlights: [
      'Unlimitierte Anrufe & SMS in CH, EU & Business-Zone',
      'Unlimitierte Daten in CH & Europe-Zone',
      '3 GB Roaming-Daten in Business-Zone',
      'Highspeed 5G Schweizer Netz'
    ],
    image: '/images/offer-mobile-premium.webp',
    accentColor: 'cyan',
    popular: true,
  },
  {
    id: 'mobile-premium-plus',
    name: 'Mobile-Abo Premium+',
    badge: 'Business Zone',
    price: 'CHF 53.95',
    pricePeriod: '/ Monat',
    oldPrice: 'CHF 99.-',
    description: 'Volle Unlimitierung in CH, Europe-Zone & Business-Zone.',
    highlights: [
      'Unlimitierte Anrufe & SMS in CH, EU & Business-Zone',
      'Unlimitierte Daten in CH, Europe-Zone & Business-Zone',
      'Weltweite VIP Business Abdeckung',
      'Top Ultra-Fast 5G Verbindung'
    ],
    image: '/images/offer-mobile-plus.webp',
    accentColor: 'orange',
  },
  {
    id: 'salt-home-plus',
    name: 'Salt Home+',
    badge: 'Crazy Deal',
    price: 'CHF 39.95',
    pricePeriod: '/ Monat (12 Mt., danach 49.95)',
    oldPrice: 'CHF 69.95',
    description: '10 Gbit/s Glasfaser-Internet mit Wi-Fi 7+, 300+ TV-Sender & Festnetz.',
    highlights: [
      '10-Gbit/s-Internet (Fiber Box Wi-Fi 7+)',
      '300+ TV Sender & TV-Box inklusive',
      '7 Tage Replay & Recordings Max',
      'Unbegrenzte Anrufe in CH',
      'Gratis Aktivierung & 3 Mt. Sky Sport'
    ],
    image: '/images/offer-salt-home.webp',
    accentColor: 'lime',
  },
  {
    id: 'travel-limited-edition',
    name: 'Travel – Limited Edition',
    badge: '-70% Rabatt',
    price: 'CHF 29.95',
    pricePeriod: '/ Monat',
    oldPrice: 'CHF 96.95',
    description: 'Schweiz 5G unlimitiert + EU, US, Canada & Top-Reiseländer.',
    highlights: [
      'CH: Unlimitierte Daten 5G, Anrufe & SMS',
      'Europe, US & Canada: Unlimitiert Internet + 100 min Anrufe',
      'TUR, THA, CHN & JPN: Unlimitiert Internet (5 GB Highspeed)',
      'Premium-Support inklusive (Nur Online Deal)'
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
