'use client';

import { useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import { CONFIG } from '@/lib/config';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        display: 'flex',
        justifyContent: 'flex-end',
      }}
      onClick={onClose}
    >
      {/* 100% Opaque Solid Mobile Drawer Panel */}
      <div
        style={{
          width: 'min(320px, 85vw)',
          height: '100%',
          backgroundColor: '#0A0D14',
          background: '#0A0D14',
          borderLeft: '2px solid #222938',
          padding: '28px 24px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          boxShadow: '-15px 0 50px rgba(0, 0, 0, 0.95)',
          color: '#FFFFFF',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          {/* Header row */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '36px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '1.25rem', fontWeight: 900, color: 'var(--cyan)' }}>MENÜ</span>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, padding: '2px 6px', borderRadius: '4px', background: 'var(--orange)', color: '#FFFFFF' }}>SALT</span>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Menü schließen"
              style={{
                background: '#141A26',
                border: '1px solid #2A3447',
                color: '#FFFFFF',
                fontSize: '1.25rem',
                cursor: 'pointer',
                width: '40px',
                height: '40px',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              ✕
            </button>
          </div>

          {/* Navigation Links with High Contrast Solid Buttons */}
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <a
              href="#angebote"
              onClick={onClose}
              style={{
                fontSize: '1.125rem',
                fontWeight: 700,
                color: '#FFFFFF',
                textDecoration: 'none',
                padding: '12px 16px',
                borderRadius: '12px',
                background: '#141A26',
                border: '1px solid #222938',
                display: 'block',
              }}
            >
              Angebote
            </a>
            <a
              href="#spezialangebot"
              onClick={onClose}
              style={{
                fontSize: '1.125rem',
                fontWeight: 700,
                color: '#FFFFFF',
                textDecoration: 'none',
                padding: '12px 16px',
                borderRadius: '12px',
                background: '#141A26',
                border: '1px solid #222938',
                display: 'block',
              }}
            >
              Spezialangebot
            </a>
            <a
              href="#video"
              onClick={onClose}
              style={{
                fontSize: '1.125rem',
                fontWeight: 700,
                color: '#FFFFFF',
                textDecoration: 'none',
                padding: '12px 16px',
                borderRadius: '12px',
                background: '#141A26',
                border: '1px solid #222938',
                display: 'block',
              }}
            >
              Video
            </a>
            <a
              href="#kontakt"
              onClick={onClose}
              style={{
                fontSize: '1.125rem',
                fontWeight: 700,
                color: '#FFFFFF',
                textDecoration: 'none',
                padding: '12px 16px',
                borderRadius: '12px',
                background: '#141A26',
                border: '1px solid #222938',
                display: 'block',
              }}
            >
              Kontakt
            </a>
            <a
              href={CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              style={{
                fontSize: '1.125rem',
                fontWeight: 700,
                color: '#FFFFFF',
                textDecoration: 'none',
                padding: '12px 16px',
                borderRadius: '12px',
                background: '#141A26',
                border: '1px solid #222938',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <span>Instagram</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
          </nav>
        </div>

        {/* Bottom Theme Switcher */}
        <div style={{ paddingTop: '20px', borderTop: '1px solid #222938', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#94A3B8' }}>Erscheinungsbild</span>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
