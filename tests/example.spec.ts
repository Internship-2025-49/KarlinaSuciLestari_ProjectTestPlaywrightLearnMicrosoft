import { test, expect } from '@playwright/test';


test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

// test('active and completed filters', async ({ page }) => {
//   await page.goto('https://demo.playwright.dev/todomvc/#/');
//   await page.waitForLoadState('domcontentloaded');

//   const input = page.getByPlaceholder('What needs to be done?');
//   await input.fill('water the plants');
//   await input.press('Enter');
//   await page.waitForTimeout(500); 


//   await input.fill('feed the dog');
//   await input.press('Enter');
//   await page.waitForTimeout(500);

  
//   await page.locator('li').filter({ hasText: 'water the plants' }).getByRole('checkbox').check();

 
//   await page.getByRole('link', { name: 'Active' }).click();
//   await expect(page.locator('ul.todo-list li')).toContainText('feed the dog');

//   await page.getByRole('link', { name: 'Completed' }).click();
//   await expect(page.locator('ul.todo-list li')).toContainText('water the plants');

  
//   await input.press('Enter');
//   await page.waitForTimeout(500);
//   await expect(page.locator('ul.todo-list li')).toHaveCount(3);

  
//   await page.locator('li').filter({ hasText: 'feed the dog' }).getByRole('checkbox').check();

  
//   await page.getByRole('link', { name: 'Active' }).click();
//   await expect(page.locator('ul.todo-list li')).toHaveCount(1);

  
//   await page.getByRole('link', { name: 'Completed' }).click();
//   await expect(page.locator('ul.todo-list li')).toHaveCount(2);
// });
