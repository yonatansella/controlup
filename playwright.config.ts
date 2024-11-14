import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: './src/tests',
    reporter: [ ['html', { open: 'never' }] ],
    timeout: 60000,
    use: {
      baseURL:'https://www.metric-conversions.org',
      trace: 'retain-on-failure',
      headless: true,
    },
});
