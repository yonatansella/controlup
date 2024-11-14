import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: './src/tests',
    reporter: [ ['html', { open: 'never' }] ],
    timeout: 70000,
    use: {
      trace: 'retain-on-failure',
      headless: true,
    },
});
