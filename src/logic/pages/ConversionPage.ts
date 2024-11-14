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

    async enterValue(value: number) {
        await this.inputField.clear();
        await this.inputField.pressSequentially(value.toString());
}

    async getConvertedValue(): Promise<number | null> {
        const resultText = await this.resultField.textContent();
        if (!resultText) {
            throw new Error('Result not found!');
        }
        const match = resultText.match(/=\s*([\d.]+)/);
        return match ? parseFloat(match[1]) : null;
    }
}
