import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mobile, Internet & Travel Angebote | Aktuelle Aktionen',
  description: 'Entdecke attraktive Mobile-, Internet-, TV- und Travel-Angebote und kontaktiere uns direkt über WhatsApp.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://saltwerbung.vercel.app'),
  openGraph: {
    title: 'Mobile, Internet & Travel Angebote | Aktuelle Aktionen',
    description: 'Entdecke attraktive Mobile-, Internet-, TV- und Travel-Angebote und kontaktiere uns direkt über WhatsApp.',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://saltwerbung.vercel.app',
    siteName: 'Salt Promo',
    images: [
      {
        url: '/images/hero-composition.webp',
        width: 1200,
        height: 800,
        alt: 'Salt Kampagne Angebote',
      },
    ],
    locale: 'de_CH',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mobile, Internet & Travel Angebote | Aktuelle Aktionen',
    description: 'Entdecke attraktive Mobile-, Internet-, TV- und Travel-Angebote und kontaktiere uns direkt über WhatsApp.',
    images: ['/images/hero-composition.webp'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" data-theme="dark" suppressHydrationWarning>
      <head>
        {/* Anti-flash script forcing Dark Mode as strict default */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('salt_theme');
                  if (saved === 'light') {
                    document.documentElement.setAttribute('data-theme', 'light');
                  } else {
                    document.documentElement.setAttribute('data-theme', 'dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
