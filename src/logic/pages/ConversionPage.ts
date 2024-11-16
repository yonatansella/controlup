import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class ConversionPage extends BasePage {
    private inputField: Locator;
    private resultField: Locator;

    constructor(page: Page) {
        super(page);
        this.inputField = page.locator('#arg');
        this.resultField = page.locator('#answerDisplay');
    }

    enterValue = async (value: number) => {
        await this.inputField.clear();
        await this.inputField.pressSequentially(value.toString());
    }

    getConvertedValue = async (): Promise<string | null> => {
        const resultText = await this.resultField.textContent();
        if (!resultText) {
            throw new Error('Result not found!');
        }
        const match = resultText.match(/=\s*(-?[\d.]+)/);
        return match ? (match[1]) : null;
    }
}
