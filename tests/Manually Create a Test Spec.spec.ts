import { test, expect } from '@playwright/test';


test.describe('New Todo', () => {
  let todoInput;

  
  test.beforeEach(async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc/#'); // BaseURL is set in the config file
    todoInput = page.getByPlaceholder('What needs to be done?');
  });

  
  test('should allow adding a new todo', async ({page}) => {
    await todoInput.fill('Buy groceries');
    await todoInput.press('Enter');
    await expect(page.locator('.todo-list li')).toHaveText('Buy groceries');
  });

 
  test('text field is cleared when item is added', async ({ page }) => {
    await todoInput.fill('water the plants');
    await todoInput.press('Enter');
    await expect(todoInput).toBeEmpty();
  });
});
