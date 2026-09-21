'use client';

import Image from 'next/image';
import { Offer } from '@/lib/offers';

interface OfferCardProps {
  offer: Offer;
  onSelect: (offerName: string) => void;
}

export default function OfferCard({ offer, onSelect }: OfferCardProps) {
  const getGradientClass = (color: Offer['accentColor']) => {
    switch (color) {
      case 'cyan': return 'text-gradient-cyan';
      case 'orange': return 'text-gradient-orange';
      case 'lime': return 'text-gradient-lime';
      case 'violet': return 'text-gradient-violet';
    }
  };

  const getBorderGlow = (color: Offer['accentColor']) => {
    switch (color) {
      case 'cyan': return 'var(--cyan)';
      case 'orange': return 'var(--orange)';
      case 'lime': return 'var(--lime)';
      case 'violet': return 'var(--violet)';
    }
  };

  return (
    <article
      className="offer-card"
      style={{
        borderColor: offer.popular ? getBorderGlow(offer.accentColor) : undefined,
      }}
    >
      {/* Popular / Badge banner */}
      {offer.badge && (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <span
            className="badge"
            style={{
              borderColor: getBorderGlow(offer.accentColor),
              color: 'var(--text-primary)',
            }}
          >
            {offer.badge}
          </span>
          {offer.popular && (
            <span
              style={{
                fontSize: '0.75rem',
                fontWeight: 800,
                color: 'var(--dark)',
                background: getBorderGlow(offer.accentColor),
                padding: '4px 10px',
                borderRadius: '8px',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}
            >
              TOP EMPFEHLUNG
            </span>
          )}
        </div>
      )}

      {/* Image Container with Hover Zoom */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '4 / 3',
          borderRadius: '16px',
          overflow: 'hidden',
          marginBottom: '20px',
          background: 'rgba(0,0,0,0.2)',
          border: '1px solid var(--border-subtle)',
        }}
      >
        <Image
          src={offer.image}
          alt={offer.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="lazy"
          style={{
            objectFit: 'cover',
            transition: 'transform 0.4s ease',
          }}
        />
      </div>

      {/* Card Content Body */}
      <div>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>{offer.name}</h3>
        <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', marginBottom: '16px', minHeight: '44px' }}>
          {offer.description}
        </p>

        {/* Pricing Area */}
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '20px' }}>
          <span className={`price ${getGradientClass(offer.accentColor)}`} style={{ fontSize: '2rem', fontWeight: 900 }}>
            {offer.price}
          </span>
          <span style={{ fontSize: '0.9375rem', color: 'var(--text-muted)', fontWeight: 600 }}>
            {offer.pricePeriod}
          </span>
          {offer.oldPrice && (
            <span style={{ fontSize: '0.9375rem', color: 'var(--text-muted)', textDecoration: 'line-through', marginLeft: 'auto' }}>
              {offer.oldPrice}
            </span>
          )}
        </div>

        {/* Advantage Highlights List */}
        <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {offer.highlights.map((item, idx) => (
            <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9375rem', color: 'var(--text-primary)' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={getBorderGlow(offer.accentColor)} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Action CTA */}
      <button
        type="button"
        onClick={() => onSelect(offer.name)}
        className="btn btn-secondary"
        style={{ width: '100%', justifyContent: 'center' }}
      >
        <span>Ich interessiere mich dafür</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </button>
    </article>
  );
}
