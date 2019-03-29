import puppeteer from 'puppeteer';

let browser;
let page;

describe('e2e for example app', () => {
  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    jest.setTimeout(35000);
    await page.goto('http://localhost:1234/');
  });

  test('data is fetched and chart is rendered', async () => {
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
