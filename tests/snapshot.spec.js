const { test } = require('@playwright/test');
const percySnapshot = require('@percy/playwright');

const pages = [
  { name: 'Google Home - English', url: 'https://www.google.com?hl=en' },
  { name: 'Google Home - French', url: 'https://www.example.com' },
  { name: 'Google Home - Spanish', url: 'https://www.bing.com' },
  { name: 'Google Home - German', url: 'https://duckduckgo.com' },
  { name: 'Google Home - Japanese', url: 'https://www.google.com?hl=ja' },
];

for (const page of pages) {
  test(`@visual-test ${page.name}`, async ({ page: browserPage }) => {
    await browserPage.goto(page.url, { waitUntil: 'networkidle' });
    await percySnapshot(browserPage, page.name);
  });
}
