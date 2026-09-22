'use client';

import { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import MobileDrawer from './MobileDrawer';
import { CONFIG } from '@/lib/config';

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        width: '100%',
        background: 'var(--bg-surface)',
        backgroundColor: 'var(--bg-surface)',
        borderBottom: '1px solid var(--border-subtle)',
        transition: 'background-color 0.25s ease, border-color 0.25s ease',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '76px',
        }}
      >
        {/* Brand Logo & Partner Badge */}
        <a
          href="#"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            textDecoration: 'none',
            color: 'var(--text-primary)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span
              style={{
                fontSize: '1.5rem',
                fontWeight: 900,
                letterSpacing: '-0.03em',
                background: 'linear-gradient(135deg, var(--cyan) 0%, var(--orange) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              SALT
            </span>
            <span
              style={{
                fontSize: '0.75rem',
                fontWeight: 800,
                padding: '2px 6px',
                borderRadius: '6px',
                background: 'var(--orange)',
                color: '#FFFFFF',
                letterSpacing: '0.05em',
              }}
            >
              PROMO
            </span>
          </div>

          <div
            className="partner-tag"
            style={{
              fontSize: '0.75rem',
              fontWeight: 600,
              color: 'var(--text-secondary)',
              borderLeft: '1px solid var(--border-strong)',
              paddingLeft: '12px',
            }}
          >
            Logic Group AG – Premium Business Partner
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          className="desktop-nav"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'clamp(16px, 2vw, 32px)',
          }}
        >
          <a href="#angebote" className="nav-link">Angebote</a>
          <a href="#spezialangebot" className="nav-link">Spezialangebot</a>
          <a href="#video" className="nav-link">Video</a>
          <a href="#kontakt" className="nav-link">Kontakt</a>
          <a
            href={CONFIG.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
            aria-label="Instagram Page"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
        </nav>

        {/* Right Header Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div className="desktop-toggle">
            <ThemeToggle />
          </div>

          {/* Mobile Hamburger Menu Toggle */}
          <button
            type="button"
            className="mobile-menu-btn"
            onClick={() => setDrawerOpen(true)}
            aria-label="Menü öffnen"
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-strong)',
              color: 'var(--text-primary)',
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </div>

      <MobileDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />

      <style jsx>{`
        .nav-link {
          color: var(--text-secondary);
          text-decoration: none;
          font-weight: 600;
          font-size: 0.9375rem;
          transition: color 0.2s ease;
        }
        .nav-link:hover {
          color: var(--cyan);
        }
        @media (width < 1100px) {
          .partner-tag {
            display: none !important;
          }
        }
        @media (width < 900px) {
          .desktop-nav, .desktop-toggle {
            display: none !important;
          }
          .mobile-menu-btn {
            display: inline-flex !important;
          }
        }
      `}</style>
    </header>
  );
}
