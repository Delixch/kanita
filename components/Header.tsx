'use client';

import { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import MobileDrawer from './MobileDrawer';
import { CONFIG } from '@/lib/config';

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        {/* Brand Logo */}
        <a href="#" className="site-header__logo">
          <span className="site-header__logo-text">SALT</span>
          <span className="site-header__logo-badge">PROMO</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="site-header__nav">
          <a href="#angebote" className="site-header__link">Angebote</a>
          <a href="#spezialangebot" className="site-header__link">Spezialangebot</a>
          <a href="#video" className="site-header__link">Video</a>
          <a href="#kontakt" className="site-header__link">Kontakt</a>
          <a
            href={CONFIG.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="site-header__link site-header__link--icon"
            aria-label="Instagram"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
        </nav>

        {/* Right Actions */}
        <div className="site-header__actions">
          <div className="site-header__theme-toggle">
            <ThemeToggle />
          </div>

          <button
            type="button"
            className="site-header__mobile-btn"
            onClick={() => setDrawerOpen(true)}
            aria-label="Menü öffnen"
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
    </header>
  );
}
