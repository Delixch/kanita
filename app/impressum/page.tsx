import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Impressum | Salt Promo',
  description: 'Impressum und rechtliche Angaben.',
};

export default function ImpressumPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <main style={{ flex: 1 }} className="container section">
        <div
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '24px',
            padding: 'clamp(24px, 4vw, 48px)',
          }}
        >
          <h1 style={{ fontSize: '2rem', marginBottom: '24px' }}>Impressum</h1>

          <p style={{ color: 'var(--text-secondary)', marginBottom: '16px', lineHeight: 1.6 }}>
            <strong>Salt Promo Kampagne Landing Page</strong><br />
            Schweiz
          </p>

          <h2 style={{ fontSize: '1.25rem', marginTop: '24px', marginBottom: '12px' }}>Kontakt</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '16px', lineHeight: 1.6 }}>
            E-Mail: kontakt@salt-promo.ch<br />
            WhatsApp: +41 79 123 45 67
          </p>

          <h2 style={{ fontSize: '1.25rem', marginTop: '24px', marginBottom: '12px' }}>Haftungsausschluss</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', lineHeight: 1.6 }}>
            Alle Inhalte wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
          </p>

          <Link href="/" className="btn btn-secondary" style={{ textDecoration: 'none' }}>
            &larr; Zurück zur Startseite
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
