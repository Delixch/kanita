export const CONFIG = {
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '41791234567',
  instagramUrl: process.env.NEXT_PUBLIC_INSTAGRAM_URL || 'https://instagram.com/salt_ch',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://saltwerbung.vercel.app',
  brandName: 'Salt Promo',
  contactTimeOptions: [
    { value: 'Vormittags', label: 'Vormittags' },
    { value: 'Nachmittags', label: 'Nachmittags' },
    { value: 'Egal', label: 'Egal' },
  ] as const,
};
