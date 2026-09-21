'use client';

import { trackEvent } from '@/lib/analytics';

interface SpecialBundleProps {
  onSelectSpecialOffer: () => void;
}

export default function SpecialBundle({ onSelectSpecialOffer }: SpecialBundleProps) {
  const handleClick = () => {
    trackEvent({ name: 'special_offer_click' });
    onSelectSpecialOffer();
    const element = document.getElementById('kontakt');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="spezialangebot" className="section" style={{ position: 'relative' }}>
      <div className="container">
        <div
          style={{
            position: 'relative',
            borderRadius: '32px',
            padding: 'clamp(32px, 6vw, 64px)',
            background: 'linear-gradient(135deg, rgba(124, 92, 255, 0.15) 0%, rgba(59, 232, 255, 0.1) 100%)',
            border: '2px solid var(--violet)',
            boxShadow: '0 20px 50px rgba(124, 92, 255, 0.2)',
            overflow: 'hidden',
            backdropFilter: 'blur(20px)',
          }}
        >
          {/* Ambient Glow Graphic */}
          <div
            style={{
              position: 'absolute',
              top: '-30%',
              right: '-10%',
              width: '400px',
              height: '400px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(124, 92, 255, 0.3) 0%, rgba(0,0,0,0) 70%)',
              pointerEvents: 'none',
            }}
          />

          <div
            style={{
              position: 'relative',
              zIndex: 1,
              maxWidth: '780px',
              margin: '0 auto',
              textAlign: 'center',
            }}
          >
            <div
              className="badge"
              style={{
                margin: '0 auto 20px auto',
                borderColor: 'var(--violet)',
                color: 'var(--text-primary)',
              }}
            >
              VIP KOMBINATION
            </div>

            <h2
              style={{
                fontSize: 'clamp(26px, calc(20px + 1.8vw), 44px)',
                marginBottom: '16px',
              }}
            >
              Alles zusammen? Dann wird es besonders interessant.
            </h2>

            <p
              style={{
                fontSize: 'clamp(16px, 1.2vw, 20px)',
                color: 'var(--text-primary)',
                fontWeight: 600,
                marginBottom: '12px',
              }}
            >
              Für Kundinnen und Kunden, die mehere Angebote kombinieren möchten, gibt es eine besondere Lösung.
            </p>

            <p
              style={{
                fontSize: 'clamp(15px, 1vw, 18px)',
                color: 'var(--text-secondary)',
                marginBottom: '32px',
                lineHeight: 1.6,
              }}
            >
              Welche Kombination für dich möglich ist und welche Vorteile du erhältst, besprechen wir persönlich mit dir.
            </p>

            <button
              type="button"
              onClick={handleClick}
              className="btn btn-primary"
              style={{
                background: 'linear-gradient(135deg, var(--violet) 0%, #5B2CFF 100%)',
                boxShadow: '0 6px 28px rgba(124, 92, 255, 0.4)',
                fontSize: '1.0625rem',
                padding: '16px 36px',
              }}
            >
              <span>Spezialangebot anfragen</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
