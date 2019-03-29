import puppeteer from 'puppeteer';

let browser;
let page;

describe('e2e for example app', () => {
  beforeAll(async () => {
    try {
      browser = await puppeteer.launch();
      page = await browser.newPage();
      jest.setTimeout(35000);
      await page.goto('http://localhost:1234/');
    } catch (error) {
      console.log(error);
    }
  });

  test('data is fetched and chart is rendered', async () => {
    try {
      jest.setTimeout(35000);
      const html = await page.$eval('.chart', e => e.innerHTML);
      expect(html).toContain('Fetching app');
      // check if chart has been rendered
      await page.waitFor(2000);
      const bar = await page.$('[data-label="Django Unchained"]');
      expect(bar).not.toBeNull();
    } catch (error) {
      console.log(error);
    }
  });
});

afterAll(async () => {
  try {
    await browser.close();
  } catch (error) {
    console.log(error);
  }
});
