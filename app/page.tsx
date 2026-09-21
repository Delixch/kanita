'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Offers from '@/components/Offers';
import PromoVideo from '@/components/PromoVideo';
import SpecialBundle from '@/components/SpecialBundle';
import ContactForm from '@/components/ContactForm';
import SocialFollow from '@/components/SocialFollow';
import StickyWhatsApp from '@/components/StickyWhatsApp';
import Footer from '@/components/Footer';

export default function Home() {
  const [selectedOffer, setSelectedOffer] = useState<string>('Mobile-Abo Premium');

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <main style={{ flex: 1 }}>
        <Hero />
        <Offers onSelectOffer={(name) => setSelectedOffer(name)} />
        <PromoVideo />
        <SpecialBundle onSelectSpecialOffer={() => setSelectedOffer('Spezialangebot / mehrere Produkte')} />
        <ContactForm selectedOffer={selectedOffer} onOfferChange={(name) => setSelectedOffer(name)} />
        <SocialFollow />
      </main>
      <StickyWhatsApp />
      <Footer />
    </div>
  );
}
