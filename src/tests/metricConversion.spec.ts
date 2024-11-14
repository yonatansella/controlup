import { Browser, Page, test } from '@playwright/test';
import { chromium } from '@playwright/test';
import { ConversionPage } from '../logic/pages/ConversionPage';
import { AssertionManager } from '../infra/AssertionManager';

const conversions = [
    {
        category: 'Celsius to Fahrenheit',
        endPoint: '/temperature/celsius-to-fahrenheit.htm',
        input: 100,
        expected: (value: number) => (value * 9) / 5 + 32,
    },
    {
        category: 'Meters to Feet',
        endPoint: '/length/meters-to-feet.htm',
        input: 10,
        expected: (value: number) => value * 3.2808,
    },
    {
        category: 'Ounces to Grams',
        endPoint: '/weight/ounces-to-grams.htm',
        input: 5,
        expected: (value: number) => value * 28.35,
    },
];

test.describe('Metric Conversion Tests', () => {
    let browser: Browser;
    let page: Page;
    let assertion: AssertionManager;

    test.beforeEach(async () => {
        browser = await chromium.launch();
        page = await browser.newPage();
        assertion = new AssertionManager();
    });

    conversions.forEach(({ category, endPoint, input, expected }) => {
        test(`Verify conversion for ${category}`, async () => {
            const conversionPage = new ConversionPage(page);
            await conversionPage.navigate(endPoint);

            await conversionPage.enterValue(input);
            const actual = await conversionPage.getConvertedValue();
            const expectedValue = (expected(input));

            assertion.softAssert(actual === expectedValue,
                `Expected ${input} to convert to ${expectedValue}, but got ${actual}`);

            assertion.verifyAll();
        });
    });

    test.afterEach(async () => {
        await browser.close()
    })
});
