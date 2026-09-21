import { test, expect } from '@playwright/test';
import { buildWhatsAppMessage, buildWhatsAppUrl, sanitizePhoneNumber } from '../lib/whatsapp';

test.describe('WhatsApp Integration & Form Validation Suite', () => {
  test('Unit Test: WhatsApp URL & Message string formatting', () => {
    const data = {
      vorname: 'Anna',
      nachname: 'Muster',
      produkt: 'Travel – Limited Edition',
      zeit: 'Nachmittags',
    };
    const phone = '+41 79 123 45 67';
    const cleanPhone = sanitizePhoneNumber(phone);
    expect(cleanPhone).toBe('41791234567');

    const message = buildWhatsAppMessage(data);
    expect(message).toContain('Vorname: Anna');
    expect(message).toContain('Nachname: Muster');
    expect(message).toContain('Angebot: Travel – Limited Edition');
    expect(message).toContain('Bevorzugte Kontaktzeit: Nachmittags');

    const url = buildWhatsAppUrl(phone, data);
    expect(url).toContain('https://wa.me/41791234567?text=');
    expect(url).toContain(encodeURIComponent('Vorname: Anna'));
    expect(url).toContain(encodeURIComponent('Travel – Limited Edition'));
  });

  test('E2E UI Test: Form submission opens WhatsApp modal preview with prefilled message', async ({ page }) => {
    await page.goto('/');

    // Scroll to contact form section
    await page.locator('#kontakt').scrollIntoViewIfNeeded();

    // Fill form
    await page.fill('#vorname', 'Anna');
    await page.fill('#nachname', 'Muster');
    await page.selectOption('#produkt', 'Travel – Limited Edition');
    await page.selectOption('#zeit', 'Nachmittags');

    // Submit form
    await page.click('button[type="submit"]');

    // Verify confirmation modal appears with correct details
    const modalHeading = page.getByRole('heading', { name: 'Bereit zum Senden!' });
    await expect(modalHeading).toBeVisible();

    const summaryOffer = page.getByRole('strong').filter({ hasText: 'Travel – Limited Edition' });
    await expect(summaryOffer).toBeVisible();
  });
});
