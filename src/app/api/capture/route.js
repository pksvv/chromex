// frontend/src/app/api/capture/route.js
import { NextResponse } from 'next/server';
import puppeteer from 'puppeteer'; // Using puppeteer
import sharp from 'sharp';

export async function POST(request) {
  const { url, splits } = await request.json();

  if (!url || isNaN(splits) || splits < 1) {
    return NextResponse.json(
      { message: 'Invalid URL or number of splits' },
      { status: 400 }
    );
  }

  try {
    const browser = await puppeteer.launch({
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
      // executablePath: '/usr/bin/chromium-browser', // Uncomment and adjust if necessary
    });

    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle2' });
    const screenshotBuffer = await page.screenshot({ fullPage: true });
    await browser.close();

    const image = sharp(screenshotBuffer);
    const metadata = await image.metadata();
    const { width, height } = metadata;
    const segmentHeight = Math.floor(height / splits);
    const images = [];

    for (let i = 0; i < splits; i++) {
      const top = i * segmentHeight;
      const segmentBuffer = await image
        .extract({ left: 0, top, width, height: segmentHeight })
        .png()
        .toBuffer();

      const base64Image = segmentBuffer.toString('base64');
      const imgSrc = `data:image/png;base64,${base64Image}`;
      images.push(imgSrc);
    }

    return NextResponse.json({ images });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: 'An error occurred while processing your request.' },
      { status: 500 }
    );
  }
}
