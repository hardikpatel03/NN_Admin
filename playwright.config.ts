import { defineConfig, devices } from '@playwright/test';
export default defineConfig({
  timeout: 30 * 1000, //30000 ms(30 secs)
  testDir: './tests',
  fullyParallel: false, // Run all tests in parallel true or false and worker changes based on that
  //retries: process.env.CI ? 2 : 0,
  retries: 0,
  //workers: process.env.CI ? 1 : undefined,
  workers: 1,

  reporter: [
    ['html'],
    ['allure-playwright'],
    ['dot'],
    ['list']
  ],
  use: {
    baseURL: process.env.TEST_ENV === "stage"
      ? "https://stage-nurses-now-admin-v2.solz.me"
      : "https://dev-nurses-now-admin-v2.solz.me",

    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    //headless: false,
    viewport: { width: 1366, height: 768 }, // Set default viewport size for consistency
   
    ignoreHTTPSErrors: true, // Ignore SSL errors if necessary
    permissions: ['geolocation'], // Set necessary permissions for geolocation-based tests

  },
  //grep: /@master/,
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],

});