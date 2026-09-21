'use client';

import { useState } from 'react';
import { CONFIG } from '@/lib/config';
import { FORM_OFFER_OPTIONS, FormOfferOption } from '@/lib/offers';
import { buildWhatsAppUrl } from '@/lib/whatsapp';
import { trackEvent } from '@/lib/analytics';

interface ContactFormProps {
  selectedOffer: string;
  onOfferChange: (offer: string) => void;
}

export default function ContactForm({ selectedOffer, onOfferChange }: ContactFormProps) {
  const [vorname, setVorname] = useState('');
  const [nachname, setNachname] = useState('');
  const [zeit, setZeit] = useState<string>('Vormittags');

  const [errors, setErrors] = useState<{ vorname?: string; nachname?: string; produkt?: string }>({});
  const [showSummary, setShowSummary] = useState(false);
  const [generatedUrl, setGeneratedUrl] = useState('');

  const validate = () => {
    const newErrors: { vorname?: string; nachname?: string; produkt?: string } = {};
    if (!vorname.trim()) {
      newErrors.vorname = 'Bitte gib deinen Vornamen ein.';
    }
    if (!nachname.trim()) {
      newErrors.nachname = 'Bitte gib deinen Nachnamen ein.';
    }
    if (!selectedOffer) {
      newErrors.produkt = 'Bitte wähle ein Angebot.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    trackEvent({ name: 'whatsapp_click', payload: { offerName: selectedOffer } });

    const url = buildWhatsAppUrl(CONFIG.whatsappNumber, {
      vorname,
      nachname,
      produkt: selectedOffer,
      zeit,
    });

    setGeneratedUrl(url);
    setShowSummary(true);
  };

  const proceedToWhatsApp = () => {
    if (generatedUrl) {
      window.open(generatedUrl, '_blank', 'noopener,noreferrer');
      setShowSummary(false);
    }
  };

  return (
    <section id="kontakt" className="section" style={{ position: 'relative' }}>
      <div className="container">
        <div
          style={{
            maxWidth: '680px',
            margin: '0 auto',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-strong)',
            borderRadius: '28px',
            padding: 'clamp(24px, 5vw, 48px)',
            boxShadow: '0 20px 50px var(--shadow-color)',
            backdropFilter: 'blur(16px)',
          }}
        >
          <div className="badge" style={{ margin: '0 auto 16px auto', display: 'table' }}>
            SCHNELLE ANFRAGE
          </div>
          <h2 className="section-title">In 30 Sekunden per WhatsApp</h2>
          <p className="section-subtitle" style={{ marginBottom: '32px' }}>
            Fülle das kurze Formular aus – wir öffnen direkt dein vorbereitetes WhatsApp-Gespräch.
          </p>

          <form onSubmit={handleSubmit} noValidate>
            {/* Vorname */}
            <div className="form-group">
              <label htmlFor="vorname" className="form-label">
                Vorname <span style={{ color: 'var(--orange)' }}>*</span>
              </label>
              <input
                type="text"
                id="vorname"
                name="vorname"
                value={vorname}
                onChange={(e) => {
                  setVorname(e.target.value);
                  if (errors.vorname) setErrors((prev) => ({ ...prev, vorname: undefined }));
                }}
                onFocus={() => trackEvent({ name: 'form_start' })}
                placeholder="z. B. Anna"
                className="form-input"
                aria-required="true"
                aria-invalid={!!errors.vorname}
              />
              {errors.vorname && <span className="form-error" role="alert">{errors.vorname}</span>}
            </div>

            {/* Nachname */}
            <div className="form-group">
              <label htmlFor="nachname" className="form-label">
                Nachname <span style={{ color: 'var(--orange)' }}>*</span>
              </label>
              <input
                type="text"
                id="nachname"
                name="nachname"
                value={nachname}
                onChange={(e) => {
                  setNachname(e.target.value);
                  if (errors.nachname) setErrors((prev) => ({ ...prev, nachname: undefined }));
                }}
                placeholder="z. B. Muster"
                className="form-input"
                aria-required="true"
                aria-invalid={!!errors.nachname}
              />
              {errors.nachname && <span className="form-error" role="alert">{errors.nachname}</span>}
            </div>

            {/* Product selection */}
            <div className="form-group">
              <label htmlFor="produkt" className="form-label">
                Für welches Angebot interessierst du dich? <span style={{ color: 'var(--orange)' }}>*</span>
              </label>
              <select
                id="produkt"
                name="produkt"
                value={selectedOffer}
                onChange={(e) => {
                  onOfferChange(e.target.value);
                  if (errors.produkt) setErrors((prev) => ({ ...prev, produkt: undefined }));
                }}
                className="form-select"
                aria-required="true"
                aria-invalid={!!errors.produkt}
              >
                {FORM_OFFER_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
              {errors.produkt && <span className="form-error" role="alert">{errors.produkt}</span>}
            </div>

            {/* Preferred contact time */}
            <div className="form-group">
              <label htmlFor="zeit" className="form-label">
                Wann dürfen wir dich am besten kontaktieren?
              </label>
              <select
                id="zeit"
                name="zeit"
                value={zeit}
                onChange={(e) => setZeit(e.target.value)}
                className="form-select"
              >
                {CONFIG.contactTimeOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn btn-whatsapp"
              style={{
                width: '100%',
                padding: '16px 24px',
                fontSize: '1.0625rem',
                marginTop: '12px',
                justifyContent: 'center',
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.031 2c-5.517 0-9.993 4.476-9.993 9.993 0 1.764.46 3.487 1.332 5.005l-1.417 5.176 5.297-1.39c1.472.802 3.136 1.222 4.781 1.222h.004c5.516 0 9.992-4.476 9.992-9.993 0-2.67-1.04-5.18-2.927-7.068-1.888-1.887-4.398-2.926-7.069-2.926zm0 16.5c-1.493 0-2.955-.401-4.23-1.158l-.303-.18-3.144.824.838-3.064-.198-.315c-.832-1.325-1.272-2.868-1.272-4.449 0-4.406 3.585-7.992 7.992-7.992 2.135 0 4.141.831 5.65 2.341 1.509 1.509 2.34 3.515 2.34 5.651 0 4.407-3.586 7.992-7.993 7.992z" />
              </svg>
              <span>Anfrage über WhatsApp senden</span>
            </button>
          </form>
        </div>
      </div>

      {/* Summary Confirmation Modal */}
      {showSummary && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1000,
            background: 'rgba(9, 11, 16, 0.75)',
            backdropFilter: 'blur(12px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '16px',
          }}
          onClick={() => setShowSummary(false)}
        >
          <div
            style={{
              maxWidth: '480px',
              width: '100%',
              background: 'var(--bg-surface)',
              border: '2px solid var(--whatsapp)',
              borderRadius: '24px',
              padding: '32px',
              boxShadow: '0 24px 60px rgba(37, 211, 102, 0.3)',
              textAlign: 'center',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'rgba(37, 211, 102, 0.15)',
                color: 'var(--whatsapp)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px auto',
              }}
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.031 2c-5.517 0-9.993 4.476-9.993 9.993 0 1.764.46 3.487 1.332 5.005l-1.417 5.176 5.297-1.39c1.472.802 3.136 1.222 4.781 1.222h.004c5.516 0 9.992-4.476 9.992-9.993 0-2.67-1.04-5.18-2.927-7.068-1.888-1.887-4.398-2.926-7.069-2.926zm0 16.5c-1.493 0-2.955-.401-4.23-1.158l-.303-.18-3.144.824.838-3.064-.198-.315c-.832-1.325-1.272-2.868-1.272-4.449 0-4.406 3.585-7.992 7.992-7.992 2.135 0 4.141.831 5.65 2.341 1.509 1.509 2.34 3.515 2.34 5.651 0 4.407-3.586 7.992-7.993 7.992z" />
              </svg>
            </div>

            <h3 style={{ fontSize: '1.5rem', marginBottom: '12px' }}>Bereit zum Senden!</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', lineHeight: 1.5 }}>
              Perfekt, <strong>{vorname}</strong>. Wir öffnen jetzt WhatsApp mit deinen Angaben für:
              <br />
              <strong style={{ color: 'var(--cyan)' }}>{selectedOffer}</strong>
            </p>

            <button
              type="button"
              onClick={proceedToWhatsApp}
              className="btn btn-whatsapp"
              style={{ width: '100%', justifyContent: 'center', padding: '14px 24px' }}
            >
              WhatsApp Chat öffnen
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
