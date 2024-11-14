import { test } from '@playwright/test';
import { ConversionPage } from '../logic/pages/ConversionPage';
import { AssertionManager } from '../infra/AssertionManager';
import { config } from './testConfig';

test.describe('Metric Conversion Tests', () => {
  let assertion: AssertionManager;

  test.beforeEach(() => {
    assertion = new AssertionManager();
  });

  config.dataConversions.forEach(({ category, endPoint, input, expected }) => {
    test(`Verify conversion for ${category}`, async ({ page }) => {
      const conversionPage = new ConversionPage(page);
      await conversionPage.navigate(`${config.urls.metricPage}${endPoint}`);
      await conversionPage.enterValue(input);
      const actual = (await conversionPage.getConvertedValue())?.toString();
      const expectedValue = expected(input).toPrecision(5);

      assertion.softAssert(
        actual === expectedValue,
        `Expected ${input} to convert to ${expectedValue}, but got ${actual}`
      );
      
      assertion.verifyAll();
    });
  });
});

