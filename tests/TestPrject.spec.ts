// import { test, expect, beforeEach, describe } from '@playwright/test';


// // Describe block for organizing related tests
// describe('New Todo', () => {
//   let todoInput;

 
//   beforeEach(async ({ page }) => {
//     await page.goto('');
//     todoInput = page.locator('input[placeholder="What needs to be done?"]');
//   });

 
//   test('text field is cleared when item is added', async ({ page }) => {
   
//     await todoInput.fill('water the plants');
//     await todoInput.press('Enter');
//     await page.waitForTimeout(500);

    
//     await expect(todoInput).toBeEmpty();
//   });

  
//   test('active and completed filters', async ({ page }) => {
   
//     await todoInput.fill('water the plants');
//     await todoInput.press('Enter');
//     await page.waitForTimeout(500);

  
//     await todoInput.fill('feed the dog');
//     await todoInput.press('Enter');
//     await page.waitForTimeout(500);

   
//     await page.locator('li').filter({ hasText: 'water the plants' }).locator('input[type="checkbox"]').check();
//     await page.waitForTimeout(500);

    
//     await page.locator('a', { hasText: 'Active' }).click();
//     await page.waitForTimeout(500);
//     await expect(page.locator('ul.todo-list li')).toContainText('feed the dog');


//     await page.locator('a', { hasText: 'Completed' }).click();
//     await page.waitForTimeout(500);
//     await expect(page.locator('ul.todo-list li')).toContainText('water the plants');
//   });
// });
