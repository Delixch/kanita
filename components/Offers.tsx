'use client';

import { OFFERS } from '@/lib/offers';
import OfferCard from './OfferCard';
import { trackEvent } from '@/lib/analytics';

interface OffersProps {
  onSelectOffer: (offerName: string) => void;
}

export default function Offers({ onSelectOffer }: OffersProps) {
  const handleSelect = (name: string) => {
    trackEvent({ name: 'offer_select', payload: { offerName: name } });
    onSelectOffer(name);
    const element = document.getElementById('kontakt');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="angebote" className="section" style={{ position: 'relative' }}>
      <div className="container">
        <div className="badge" style={{ margin: '0 auto 16px auto', display: 'table' }}>
          AKTUELLE AKTIONEN
        </div>
        <h2 className="section-title">Wähle dein Wunschangebot</h2>
        <p className="section-subtitle">
          Alle Angebote mit Bestpreis-Garantie, bester Netzabdeckung und unkomplizierter WhatsApp-Bestellung.
        </p>

        <div className="grid-offers">
          {OFFERS.map((offer) => (
            <OfferCard key={offer.id} offer={offer} onSelect={handleSelect} />
          ))}
        </div>
      </div>
    </section>
  );
}
