export type AnalyticsEvent =
  | { name: 'offer_view'; payload?: { offerId: string } }
  | { name: 'offer_select'; payload?: { offerName: string } }
  | { name: 'form_start'; payload?: Record<string, unknown> }
  | { name: 'whatsapp_click'; payload?: { offerName?: string } }
  | { name: 'special_offer_click'; payload?: Record<string, unknown> }
  | { name: 'instagram_click'; payload?: Record<string, unknown> }
  | { name: 'video_play'; payload?: Record<string, unknown> };

export function trackEvent(event: AnalyticsEvent): void {
  // Safe analytics hook wrapper - no third party script is loaded by default.
  // Developers can wire Google Analytics / Plausible / PostHog here when configured.
  if (typeof window !== 'undefined') {
    // console.log('[Analytics Event]', event.name, event.payload || {});
    if (Array.isArray((window as unknown as { dataLayer?: unknown[] }).dataLayer)) {
      (window as unknown as { dataLayer: unknown[] }).dataLayer.push({
        event: event.name,
        ...event.payload,
      });
    }
  }
}
