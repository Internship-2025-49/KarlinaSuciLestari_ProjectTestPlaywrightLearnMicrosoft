import { test, expect } from '@playwright/test';
import { STORAGE_STATE } from '../playwright.config'; 

test.use({ storageState: STORAGE_STATE });

test('Teardown: Logout from Wikipedia', async ({ page, browser }) => {
  
  await browser.newContext({storageState: STORAGE_STATE}); 

  await page.goto('https://en.wikipedia.org/wiki/Main_Page');
  await expect(page.getByRole('button', { name: 'Personal tools' })).toBeVisible();
  await page.getByRole('button', { name: 'Personal tools' }).click();
  await page.getByRole('link', { name: 'Log out' }).click();
  
  await page.getByRole('heading', { name: 'Log out' }).click();
});
