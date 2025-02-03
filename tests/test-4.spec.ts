import { test, expect } from '@playwright/test';
import { STORAGE_STATE} from '../playwright.config';

test('test', async ({ page }) => {
  await page.goto('https://en.wikipedia.org/wiki/Main_Page');
  await page.getByRole('searchbox', { name: 'Search Wikipedia' }).click();
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('karlinasucilestari');
  await page.getByRole('textbox', { name: 'Username' }).press('Enter');
  await page.getByRole('textbox', { name: 'Password' }).fill('karlina25042007');
  await page.getByRole('checkbox', { name: 'Keep me logged in (for up to' }).check();
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('heading', { name: 'Welcome to Wikipedia' }).click();

  await expect(page.getByRole('button',{ name:'Personal tools'})).toBeVisible();
  await page.context().storageState({
    path: STORAGE_STATE,
  })
});