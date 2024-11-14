import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class WeatherPage extends BasePage {
  private currentTempLocator: Locator;

  constructor(page: Page) {
    super(page);
    this.currentTempLocator = page.locator('//div[contains(@class,"primary")]/span[@data-testid="TemperatureValue"]');
  }

  getCurrentTemperature = async (): Promise<number> => {
    const tempText = await this.currentTempLocator.textContent();
    if (!tempText) {
      throw new Error('Current temperature not found!');
    }
    return parseFloat(tempText);
  }
}