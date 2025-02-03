import { chromium, Browser, BrowserContext } from 'playwright';
import fs from 'fs';

async function globalSetup() {
  const browser: Browser = await chromium.launch({ headless: false }); // Bisa diubah ke true jika tidak ingin melihat browser terbuka
  const context: BrowserContext = await browser.newContext();
  
  const page = await context.newPage();
  await page.goto('https://www.zalora.co.id/customer/account/login/?from=header');

  // Mengisi form login dengan selector yang benar
  await page.fill('input[name="login[username]"]', 'your-email@example.com'); // Ganti dengan email yang valid
  await page.fill('input[name="login[password]"]', 'your-password'); // Ganti dengan password yang valid
  await page.click('button[class*="LoginForm__SubmitButton"]'); // Selector untuk tombol login
  
  // Tunggu navigasi setelah login (pastikan tidak ada error)
  await page.waitForNavigation({ waitUntil: 'networkidle' });

  // Simpan cookies hanya jika login berhasil
  const cookies = await context.cookies();
  fs.writeFileSync('./cookies.json', JSON.stringify(cookies, null, 2));

  await browser.close();
  
  console.log('Global setup completed!');
}

export default globalSetup;
