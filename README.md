# Salt Mobile / Home / Travel Kampanya Landing Page

Eine moderne, leistungsorientierte Kampagnen-Landing-Page für Schweizer Mobil-, Internet-, TV- und Travel-Angebote. Entwickelt mit **Next.js**, **TypeScript** und **flüssigem CSS clamp()**. 

Hauptziel: **Angebot wählen → Kurzes Formular ausfüllen → Direkt per WhatsApp kontaktieren.**

---

## Tech Stack & Features

- **Framework**: Next.js 14 (App Router) + TypeScript
- **Styling**: Vanilla CSS mit Fluid `clamp()` Design System, Flexbox und CSS Grid (0px horizontal overflow auf allen Bildschirmen).
- **Theme**: Dark Mode & Light Mode mit automatischer Erkennung (`prefers-color-scheme`) und Umschalter.
- **Interaktion**: Dynamisches WhatsApp-Kontaktformular mit Vorauswahl der Angebote & Zeitfenster.
- **Video Section**: HTML5 Video mit `IntersectionObserver` Auto-Pause und `prefers-reduced-motion` Berücksichtigung.
- **Medien-Budget**: < 1.5 MB Gesamtttransfer durch AVIF/WebP Optimierung.
- **Testabdeckung**: 452 automatisierte Playwright Tests (225 Viewport-Breiten × 2 Themes + WhatsApp Form Test).

---

## Environment Variables

Erstelle eine `.env.local` Datei im Hauptverzeichnis mit folgenden Werten:

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=41791234567
NEXT_PUBLIC_INSTAGRAM_URL=https://instagram.com/salt_ch
NEXT_PUBLIC_SITE_URL=https://saltwerbung.vercel.app
```

---

## Lokale Entwicklung

```bash
# Abhängigkeiten installieren
npm install

# WebP Grafiken & Video-Assets generieren
node scripts/generate-assets.js

# Entwicklungs-Server starten
npm run dev
```

Öffne [http://localhost:3000](http://localhost:3000) im Browser.

---

## Build & Production

```bash
# Produktions-Build erstellen
npm run build

# Produktions-Server starten
npm run start
```

---

## Automatisierte Tests

Automatisierte Playwright-Tests prüfen 225 Bildschirme (320px bis 2560px in 10px Schritten) im Light- und Dark-Mode auf 0px horizontalen Überlauf, sowie die korrekte WhatsApp-URL-Generierung:

```bash
# E2E & Responsive Testsuite ausführen
npm run test:e2e
```

---

## Vercel Deployment

1. Repo mit GitHub verbinden.
2. Neues Vercel Projekt anlegen.
3. Die Environment Variables `NEXT_PUBLIC_WHATSAPP_NUMBER`, `NEXT_PUBLIC_INSTAGRAM_URL` und `NEXT_PUBLIC_SITE_URL` in den Vercel Project Settings hinterlegen.
4. Deploy durchführen.
