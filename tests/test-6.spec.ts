import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://en.wikipedia.org/wiki/Main_Page');
});