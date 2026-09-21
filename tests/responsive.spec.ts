import { test, expect } from '@playwright/test';

test.describe('Responsive Viewport & Theme Test Suite (320px - 2560px)', () => {
  const minWidth = 320;
  const maxWidth = 2560;
  const step = 10;
  const widths: number[] = [];

  for (let w = minWidth; w <= maxWidth; w += step) {
    widths.push(w);
  }

  const themes: Array<'light' | 'dark'> = ['light', 'dark'];

  for (const theme of themes) {
    test.describe(`${theme.toUpperCase()} Theme Layout Verification`, () => {
      for (const width of widths) {
        test(`Viewport ${width}px - ${theme} theme - 0px horizontal overflow`, async ({ page }) => {
          await page.setViewportSize({ width, height: 900 });
          await page.goto('/');

          // Set theme attribute on documentElement
          await page.evaluate((t) => {
            document.documentElement.setAttribute('data-theme', t);
          }, theme);

          // Force reflow check
          const overflowData = await page.evaluate(() => {
            const docWidth = document.documentElement.clientWidth;
            const scrollW = document.documentElement.scrollWidth;
            const overflow = Math.max(0, scrollW - docWidth);
            return {
              docWidth,
              scrollW,
              overflow,
            };
          });

          expect(
            overflowData.overflow,
            `Horizontal overflow detected at ${width}px width in ${theme} theme! scrollWidth=${overflowData.scrollW}, clientWidth=${overflowData.docWidth}`
          ).toBe(0);
        });
      }
    });
  }
});
