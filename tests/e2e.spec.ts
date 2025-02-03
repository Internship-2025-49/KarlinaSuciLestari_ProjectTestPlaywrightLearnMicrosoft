import { test, expect } from '@playwright/test';

test('should show search', async({page})=>{
    await page.goto('/');   
    
});

test('show Logout', async ({ page }) => {
    await page.goto('https://en.wikipedia.org/wiki/Main_Page');
      
    await expect(page.getByRole('button', { name: 'Personal tools' })).toBeVisible();
    await page.getByRole('button', { name: 'Personal tools' }).click();
    await page.getByRole('link', { name: 'Log out' }).click();
  });