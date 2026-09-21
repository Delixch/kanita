import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Datenschutz | Salt Promo',
  description: 'Datenschutzerklärung für die Salt Kampagne Landing Page.',
};

export default function PrivacyPage() {
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
          <h1 style={{ fontSize: '2rem', marginBottom: '24px' }}>Datenschutzerklärung</h1>

          <h2 style={{ fontSize: '1.25rem', marginTop: '24px', marginBottom: '12px' }}>1. Datenschutz auf einen Blick</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '16px', lineHeight: 1.6 }}>
            Wir nehmen den Schutz deiner persönlichen Daten sehr ernst. Auf dieser Landing Page erheben wir keine personenbezogenen Daten auf eigenen Servern.
          </p>

          <h2 style={{ fontSize: '1.25rem', marginTop: '24px', marginBottom: '12px' }}>2. Kontaktaufnahme via WhatsApp</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '16px', lineHeight: 1.6 }}>
            Wenn du das Kontaktformular ausfüllst und auf „Anfrage über WhatsApp senden“ klickst, wird deine Eingabe lokal im Browser zu einer Nachricht formatiert und direkt in die WhatsApp-Anwendung übertragen. Es findet keine Zwischenspeicherung auf Datenbanken statt.
          </p>

          <h2 style={{ fontSize: '1.25rem', marginTop: '24px', marginBottom: '12px' }}>3. Deine Rechte</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', lineHeight: 1.6 }}>
            Du hast jederzeit das Recht auf Auskunft über deine gespeicherten personenbezogenen Daten. Da wir keine Daten auf Servern speichern, entstehen hierzu keine langfristigen Datenbestände.
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
