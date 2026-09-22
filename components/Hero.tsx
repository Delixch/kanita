'use client';

import Image from 'next/image';
import { CONFIG } from '@/lib/config';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

export default function Hero() {
  const whatsappUrl = buildWhatsAppUrl(CONFIG.whatsappNumber, {
    vorname: 'Interessent',
    nachname: 'Hero',
    produkt: 'Mobile-Abo Premium',
    zeit: 'Egal',
  });

  return (
    <section className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 28rem), 1fr))',
            gap: 'clamp(32px, 5vw, 64px)',
            alignItems: 'center',
          }}
        >
          {/* Text Content Column */}
          <div>
            <div className="badge" style={{ marginBottom: '20px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--lime)', display: 'inline-block' }} />
              EXKLUSIVE SCHWEIZER KAMPAGNE
            </div>

            <h1 className="hero-title">
              Mehr Leistung.{' '}
              <span className="text-gradient-orange">Weniger zahlen.</span>
            </h1>

            <p
              style={{
                fontSize: 'clamp(16px, calc(15.429px + 0.179vw), 20px)',
                color: 'var(--text-secondary)',
                marginBottom: 'clamp(24px, 4vw, 40px)',
                lineHeight: 1.6,
                maxWidth: '540px',
              }}
            >
              Mobile, Internet, TV und Travel – entdecke das Angebot, das zu dir passt.
            </p>

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '16px',
                alignItems: 'center',
              }}
            >
              <a href="#angebote" className="btn btn-primary">
                <span>Angebote entdecken</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <polyline points="19 12 12 19 5 12" />
                </svg>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.031 2c-5.517 0-9.993 4.476-9.993 9.993 0 1.764.46 3.487 1.332 5.005l-1.417 5.176 5.297-1.39c1.472.802 3.136 1.222 4.781 1.222h.004c5.516 0 9.992-4.476 9.992-9.993 0-2.67-1.04-5.18-2.927-7.068-1.888-1.887-4.398-2.926-7.069-2.926zm0 16.5c-1.493 0-2.955-.401-4.23-1.158l-.303-.18-3.144.824.838-3.064-.198-.315c-.832-1.325-1.272-2.868-1.272-4.449 0-4.406 3.585-7.992 7.992-7.992 2.135 0 4.141.831 5.65 2.341 1.509 1.509 2.34 3.515 2.34 5.651 0 4.407-3.586 7.992-7.993 7.992z" />
                </svg>
                <span>Über WhatsApp anfragen</span>
              </a>
            </div>

            {/* Micro Highlights */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '24px',
                marginTop: 'clamp(32px, 4vw, 48px)',
                paddingTop: '24px',
                borderTop: '1px solid var(--border-subtle)',
              }}
            >
              <div>
                <div style={{ fontWeight: 800, fontSize: '1.25rem', color: 'var(--cyan)' }}>10 Gbit/s</div>
                <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>Glasfaser Power</div>
              </div>
              <div style={{ width: '1px', height: '32px', background: 'var(--border-subtle)' }} />
              <div>
                <div style={{ fontWeight: 800, fontSize: '1.25rem', color: 'var(--lime)' }}>5G Ultra</div>
                <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>Top Schweizer Netz</div>
              </div>
              <div style={{ width: '1px', height: '32px', background: 'var(--border-subtle)' }} />
              <div>
                <div style={{ fontWeight: 800, fontSize: '1.25rem', color: 'var(--orange)' }}>CHF 29.95</div>
                <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>Ab-Preise Aktionen</div>
              </div>
            </div>
          </div>

          {/* Visual Composition Image Column */}
          <div
            style={{
              position: 'relative',
              borderRadius: '32px',
              overflow: 'hidden',
              boxShadow: '0 20px 60px var(--shadow-color)',
              border: '1px solid var(--border-strong)',
            }}
          >
            <Image
              src="/images/hero-composition.webp"
              alt="Salt Mobil, Internet, TV und Travel Kampagne"
              width={1200}
              height={850}
              priority
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                objectFit: 'cover',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
