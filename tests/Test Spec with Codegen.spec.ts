import { test, expect } from '@playwright/test';

test('active and completed filters', async ({ page }) => {
  
  await page.goto('https://demo.playwright.dev/todomvc#/');

  
  const input = page.locator('input[placeholder="What needs to be done?"]');
  await input.fill('water the plants');
  await input.press('Enter');
  await page.waitForTimeout(500);

  
  await input.fill('feed the dog');
  await input.press('Enter');
  await page.waitForTimeout(500);

  
  await page.locator('li').filter({ hasText: 'water the plants' }).locator('input[type="checkbox"]').check();
  await page.waitForTimeout(500);

  
  await page.locator('a', { hasText: 'Active' }).click();
  await page.waitForTimeout(500);
  await expect(page.locator('ul.todo-list li')).toContainText('feed the dog');

  
  await page.locator('a', { hasText: 'Completed' }).click();
  await page.waitForTimeout(500);
  await expect(page.locator('ul.todo-list li')).toContainText('water the plants');
});
