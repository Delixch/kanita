'use client';

import { CONFIG } from '@/lib/config';
import { trackEvent } from '@/lib/analytics';

export default function SocialFollow() {
  const socialChannels = [
    {
      id: 'instagram',
      name: 'Instagram',
      ctaText: 'Auf Instagram folgen',
      url: CONFIG.instagramUrl,
      gradient: 'linear-gradient(135deg, #833AB4 0%, #FD1D1D 50%, #FCB045 100%)',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      ),
    },
    /* Extensible channel slot e.g. TikTok */
  ];

  return (
    <section className="section" style={{ position: 'relative' }}>
      <div className="container">
        <div
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '28px',
            padding: 'clamp(32px, 5vw, 56px)',
            textAlign: 'center',
            boxShadow: '0 16px 40px var(--shadow-color)',
            backdropFilter: 'blur(16px)',
          }}
        >
          <div className="badge" style={{ margin: '0 auto 16px auto', display: 'table' }}>
            COMMUNITY &amp; DEALS
          </div>

          <h2 className="section-title">Folge uns und erfahre sofort von neuen Aktionen.</h2>
          <p className="section-subtitle" style={{ marginBottom: '32px' }}>
            Neue Angebote, Aktionen und exklusive Deals – direkt auf deinem Feed.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            {socialChannels.map((channel) => (
              <a
                key={channel.id}
                href={channel.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent({ name: 'instagram_click' })}
                className="btn"
                style={{
                  background: channel.gradient,
                  color: '#FFFFFF',
                  padding: '14px 28px',
                  boxShadow: '0 6px 24px rgba(253, 29, 29, 0.3)',
                  textDecoration: 'none',
                }}
              >
                {channel.icon}
                <span>{channel.ctaText}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
