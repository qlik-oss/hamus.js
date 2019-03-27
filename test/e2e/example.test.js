import puppeteer from 'puppeteer';

let browser;
let page;

beforeAll(async () => {
  browser = await puppeteer.launch({
    // headless: false,
  });
  page = await browser.newPage();
});

describe('e2e for example app', () => {
  test('data is fetched and chart is rendered', async () => {
    await page.goto('http://localhost:1234/');
    const html = await page.$eval('.chart', e => e.innerHTML);
    expect(html).toContain('Fetching app');
    // check if chart has been rendered
    await page.waitFor(2000);
    const bar = await page.$('[data-label="Django Unchained"]');
    expect(bar).not.toBeNull();
  });
});

afterAll(() => {
  browser.close();
});
