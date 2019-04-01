import puppeteer from 'puppeteer';

let browser;
let page;

beforeAll(() => {
  jest.setTimeout(50000);
});

describe('e2e for example app', () => {
  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    jest.setTimeout(35000);
    await page.goto('http://localhost:1234/');
  });

  test('data is fetched and chart is rendered', async () => {
    let html = await page.$eval('.chart', e => e.innerHTML);
    expect(html).toContain('Fetching app');
    // check if chart has been rendered
    await page.waitFor(5000);
    const bar = await page.$('[data-label="Django Unchained"]');
    html = await page.$eval('.chart', e => e.innerHTML);
    expect(bar).not.toBeNull();
  });
});

afterAll(async () => {
  await browser.close();
});
