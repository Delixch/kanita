const { chromium } = require('@playwright/test');

async function debug() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  const consoleLogs = [];
  page.on('console', msg => consoleLogs.push(`${msg.type()}: ${msg.text()}`));
  page.on('pageerror', err => consoleLogs.push(`pageerror: ${err.message}`));

  await page.goto('http://localhost:3003');
  await page.waitForTimeout(2000);

  // Take screenshot
  await page.screenshot({ path: 'scratch/page_screenshot.png', fullPage: true });

  const metrics = await page.evaluate(() => {
    const docWidth = document.documentElement.clientWidth;
    const scrollW = document.documentElement.scrollWidth;
    
    // Check missing images
    const images = Array.from(document.querySelectorAll('img')).map(img => ({
      src: img.src,
      complete: img.complete,
      naturalWidth: img.naturalWidth,
      naturalHeight: img.naturalHeight,
    }));

    // Check video status
    const video = document.querySelector('video');
    const videoData = video ? {
      src: video.src,
      paused: video.paused,
      error: video.error ? video.error.message : null,
      readyState: video.readyState,
    } : null;

    return {
      docWidth,
      scrollW,
      overflow: scrollW - docWidth,
      images,
      videoData,
    };
  });

  console.log('--- METRICS ---');
  console.log(JSON.stringify(metrics, null, 2));
  console.log('--- CONSOLE LOGS ---');
  console.log(consoleLogs.join('\n'));

  await browser.close();
}

debug().catch(console.error);
