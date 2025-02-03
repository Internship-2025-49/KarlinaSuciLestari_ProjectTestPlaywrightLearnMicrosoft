import { test as setup, expect } from '@playwright/test';

setup('do login', async({page})=>{
    await page.goto('/');   
});
 