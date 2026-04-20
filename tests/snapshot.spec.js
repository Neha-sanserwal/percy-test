const { test } = require('@playwright/test');
const percySnapshot = require('@percy/playwright');

const pages = [
  { name: 'Google Home - English', url: 'https://www.google.com?hl=fr' },
  { name: 'Google Home - French', url: 'https://www.google.com?hl=en' },
  { name: 'Google Home - Spanish', url: 'https://www.google.com?hl=de' },
  { name: 'Google Home - German', url: 'https://www.google.com?hl=es' },
];

for (const page of pages) {
  test(`@visual-test ${page.name}`, async ({ page: browserPage }) => {
    await browserPage.goto(page.url, { waitUntil: 'networkidle' });
    await percySnapshot(browserPage, page.name);
  });
}
