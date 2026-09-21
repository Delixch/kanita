'use client';

import Link from 'next/link';
import { CONFIG } from '@/lib/config';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: '1px solid var(--border-subtle)',
        background: 'var(--bg-card)',
        paddingTop: '40px',
        paddingBottom: '40px',
        marginTop: '60px',
        color: 'var(--text-secondary)',
        fontSize: '0.875rem',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        {/* Brand Logo */}
        <a
          href="#"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            textDecoration: 'none',
            color: 'var(--text-primary)',
          }}
        >
          <span
            style={{
              fontSize: '1.25rem',
              fontWeight: 900,
              background: 'linear-gradient(135deg, var(--cyan) 0%, var(--orange) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            SALT
          </span>
          <span
            style={{
              fontSize: '0.6875rem',
              fontWeight: 800,
              padding: '2px 6px',
              borderRadius: '4px',
              background: 'var(--orange)',
              color: '#FFFFFF',
            }}
          >
            PROMO
          </span>
        </a>

        {/* Footer Navigation Links */}
        <nav
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '24px',
          }}
        >
          <a href="#angebote" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 600 }}>
            Angebote
          </a>
          <a href="#kontakt" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 600 }}>
            Kontakt
          </a>
          <a
            href={CONFIG.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 600 }}
          >
            Instagram
          </a>
          <Link href="/privacy" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 600 }}>
            Datenschutz
          </Link>
          <Link href="/impressum" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 600 }}>
            Impressum
          </Link>
        </nav>

        {/* Copyright notice */}
        <p style={{ color: 'var(--text-muted)', fontSize: '0.8125rem' }}>
          &copy; {currentYear} Salt Promo Landing Page. Alle Rechte vorbehalten. Unoffizielle Aktions-Landing-Page.
        </p>
      </div>
    </footer>
  );
}
