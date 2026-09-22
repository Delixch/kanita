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
        backgroundColor: '#090B10',
        background: '#090B10',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '70px',
        }}
      >
        {/* Clean Unified Brand Logo */}
        <a
          href="#"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            textDecoration: 'none',
          }}
        >
          <span
            style={{
              fontSize: '1.4rem',
              fontWeight: 900,
              letterSpacing: '-0.02em',
              color: '#FFFFFF',
            }}
          >
            SALT
          </span>
          <span
            style={{
              fontSize: '0.7rem',
              fontWeight: 800,
              padding: '2px 6px',
              borderRadius: '5px',
              background: 'var(--orange)',
              color: '#FFFFFF',
              letterSpacing: '0.04em',
            }}
          >
            PROMO
          </span>
        </a>

        {/* Desktop Navigation Links - Single Color Clean Styling */}
        <nav
          className="desktop-nav"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '28px',
          }}
        >
          <a href="#angebote" className="hdr-link">Angebote</a>
          <a href="#spezialangebot" className="hdr-link">Spezialangebot</a>
          <a href="#video" className="hdr-link">Video</a>
          <a href="#kontakt" className="hdr-link">Kontakt</a>
          <a
            href={CONFIG.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hdr-link"
            aria-label="Instagram"
            style={{ display: 'inline-flex', alignItems: 'center' }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
        </nav>

        {/* Right Action: Theme Toggle & Mobile Trigger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div className="desktop-toggle">
            <ThemeToggle />
          </div>

          <button
            type="button"
            className="mobile-menu-btn"
            onClick={() => setDrawerOpen(true)}
            aria-label="Menü öffnen"
            style={{
              background: '#141820',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              color: '#FFFFFF',
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </div>

      <MobileDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />

      <style jsx>{`
        .hdr-link {
          color: #94A3B8;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.9375rem;
          transition: color 0.15s ease;
        }
        .hdr-link:hover {
          color: #3BE8FF;
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
