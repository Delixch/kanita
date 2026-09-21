export interface WhatsAppFormData {
  vorname: string;
  nachname: string;
  produkt: string;
  zeit: string;
}

export function sanitizePhoneNumber(phone: string): string {
  return phone.replace(/[^\d]/g, '');
}

export function buildWhatsAppMessage(data: WhatsAppFormData): string {
  return `Hallo,

ich interessiere mich für ein Angebot.

Vorname: ${data.vorname.trim()}
Nachname: ${data.nachname.trim()}
Angebot: ${data.produkt.trim()}
Bevorzugte Kontaktzeit: ${data.zeit.trim()}

Bitte kontaktieren Sie mich über WhatsApp.

Vielen Dank.`;
}

export function buildWhatsAppUrl(phone: string, data: WhatsAppFormData): string {
  const cleanNumber = sanitizePhoneNumber(phone);
  const message = buildWhatsAppMessage(data);
  const encodedText = encodeURIComponent(message);
  return `https://wa.me/${cleanNumber}?text=${encodedText}`;
}
