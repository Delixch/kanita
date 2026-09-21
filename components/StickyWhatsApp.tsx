'use client';

import { CONFIG } from '@/lib/config';
import { buildWhatsAppUrl } from '@/lib/whatsapp';
import { trackEvent } from '@/lib/analytics';

export default function StickyWhatsApp() {
  const url = buildWhatsAppUrl(CONFIG.whatsappNumber, {
    vorname: 'Interessent',
    nachname: 'StickyCTA',
    produkt: 'Mobile-Abo Premium',
    zeit: 'Egal',
  });

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 'calc(env(safe-area-inset-bottom, 0px) + 20px)',
        right: 'clamp(16px, 3vw, 32px)',
        zIndex: 90,
      }}
    >
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackEvent({ name: 'whatsapp_click', payload: { offerName: 'Sticky CTA' } })}
        aria-label="Fragen? Schreib uns auf WhatsApp"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          padding: '12px 20px',
          borderRadius: '9999px',
          background: 'var(--whatsapp)',
          color: '#FFFFFF',
          fontWeight: 700,
          fontSize: '0.9375rem',
          textDecoration: 'none',
          boxShadow: '0 8px 30px rgba(37, 211, 102, 0.45)',
          border: '1px solid rgba(255,255,255,0.2)',
          transition: 'transform 0.25s ease, box-shadow 0.25s ease',
        }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.031 2c-5.517 0-9.993 4.476-9.993 9.993 0 1.764.46 3.487 1.332 5.005l-1.417 5.176 5.297-1.39c1.472.802 3.136 1.222 4.781 1.222h.004c5.516 0 9.992-4.476 9.992-9.993 0-2.67-1.04-5.18-2.927-7.068-1.888-1.887-4.398-2.926-7.069-2.926zm0 16.5c-1.493 0-2.955-.401-4.23-1.158l-.303-.18-3.144.824.838-3.064-.198-.315c-.832-1.325-1.272-2.868-1.272-4.449 0-4.406 3.585-7.992 7.992-7.992 2.135 0 4.141.831 5.65 2.341 1.509 1.509 2.34 3.515 2.34 5.651 0 4.407-3.586 7.992-7.993 7.992z" />
        </svg>
        <span>Fragen? Schreib uns.</span>
      </a>
    </div>
  );
}
