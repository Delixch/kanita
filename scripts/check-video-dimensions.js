const { chromium } = require('@playwright/test');

async function checkVideo() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:3003');
  
  const videoDimensions = await page.evaluate(async () => {
    const video = document.querySelector('video');
    if (!video) return null;
    await new Promise(resolve => {
      if (video.readyState >= 1) resolve();
      else video.onloadedmetadata = resolve;
    });
    return {
      videoWidth: video.videoWidth,
      videoHeight: video.videoHeight,
      aspectRatio: video.videoWidth / video.videoHeight,
    };
  });

  console.log('VIDEO DIMENSIONS:', videoDimensions);
  await browser.close();
}

checkVideo().catch(console.error);
