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
        zIndex: 999,
        background: 'rgba(0, 0, 0, 0.75)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        display: 'flex',
        justifyContent: 'flex-end',
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: 'min(320px, 85vw)',
          height: '100%',
          background: 'var(--bg-surface)',
          backgroundColor: 'var(--bg-surface)',
          borderLeft: '1px solid var(--border-strong)',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          boxShadow: '-10px 0 30px rgba(0, 0, 0, 0.8)',
          opacity: 1,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          {/* Header row */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
            <span style={{ fontWeight: 900, fontSize: '1.25rem', color: 'var(--text-primary)' }}>Menü</span>
            <button
              type="button"
              onClick={onClose}
              aria-label="Menü schließen"
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-strong)',
                color: 'var(--text-primary)',
                fontSize: '1.25rem',
                cursor: 'pointer',
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              ✕
            </button>
          </div>

          {/* Navigation Links */}
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
            <a
              href="#angebote"
              onClick={onClose}
              style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--text-primary)', textDecoration: 'none' }}
            >
              Angebote
            </a>
            <a
              href="#spezialangebot"
              onClick={onClose}
              style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--text-primary)', textDecoration: 'none' }}
            >
              Spezialangebot
            </a>
            <a
              href="#video"
              onClick={onClose}
              style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--text-primary)', textDecoration: 'none' }}
            >
              Video
            </a>
            <a
              href="#kontakt"
              onClick={onClose}
              style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--text-primary)', textDecoration: 'none' }}
            >
              Kontakt
            </a>
            <a
              href={CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--text-primary)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}
            >
              <span>Instagram</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
          </nav>
        </div>

        {/* Bottom Theme Switcher */}
        <div style={{ paddingTop: '24px', borderTop: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Erscheinungsbild</span>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
