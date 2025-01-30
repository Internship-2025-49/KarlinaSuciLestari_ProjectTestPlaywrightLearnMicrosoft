import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://playwright.dev/docs/intro');
  await page.getByRole('link', { name: 'Writing tests', exact: true }).click();
  await page.getByRole('link', { name: 'Writing tests' }).click();
  await page.getByLabel('Breadcrumbs').getByText('Getting Started').click();
  await page.getByRole('heading', { name: 'Writing tests' }).click();
});