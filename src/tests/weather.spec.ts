import { test, expect } from '@playwright/test';
import { WeatherPage } from '../logic/pages/WeatherPage';
import { WeatherApiService } from '../logic/services/WeatherApiService';
import { config } from './testConfig';

test.describe('Weather Comparison Test', () => {
  test('Verify weather from weather.com and weatherapi.com', async ({ page }) => {
    const zipCode = config.defaultZipCode;

    const weatherPage = new WeatherPage(page);
    await weatherPage.navigate(config.urls.weatherPage(zipCode));
    const weatherComTemp = await weatherPage.getCurrentTemperature();

    const weatherApiService = new WeatherApiService();
    const weatherApiTemp = await weatherApiService.getCurrentTemperature(zipCode);

    const gap = Math.abs(weatherComTemp - weatherApiTemp) / weatherComTemp * 100;
    expect(gap).toBeLessThan(10);
  });
});