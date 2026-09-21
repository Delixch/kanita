'use client';

import { useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import { CONFIG } from '@/lib/config';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

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

  const quickWhatsAppUrl = buildWhatsAppUrl(CONFIG.whatsappNumber, {
    vorname: 'Interessent',
    nachname: 'Allgemein',
    produkt: 'Mobile-Abo Premium',
    zeit: 'Egal',
  });

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 999,
        background: 'rgba(9, 11, 16, 0.6)',
        backdropFilter: 'blur(12px)',
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
          borderLeft: '1px solid var(--border-strong)',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
            <span style={{ fontWeight: 900, fontSize: '1.25rem', color: 'var(--text-primary)' }}>Menü</span>
            <button
              type="button"
              onClick={onClose}
              aria-label="Menü schließen"
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--text-primary)',
                fontSize: '1.5rem',
                cursor: 'pointer',
                padding: '4px',
              }}
            >
              ✕
            </button>
          </div>

          <nav style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
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
            </a>
          </nav>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Erscheinungsbild</span>
            <ThemeToggle />
          </div>

          <a
            href={quickWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
            style={{ width: '100%', textDecoration: 'none' }}
          >
            Jetzt über WhatsApp anfragen
          </a>
        </div>
      </div>
    </div>
  );
}
