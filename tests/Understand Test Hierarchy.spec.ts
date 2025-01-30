import { test, expect } from '@playwright/test';

// Fungsi bantuan untuk membuat daftar tugas default
async function createDefaultTodos(page) {
    await page.goto('https://learn.microsoft.com/'); // Menggunakan halaman learn.microsoft.com
    await page.waitForSelector('body'); // Pastikan halaman dimuat sepenuhnya
}

// Fungsi bantuan untuk memeriksa jumlah tugas dalam penyimpanan lokal
async function checkNumberOfTodosInLocalStorage(page, expectedCount) {
    const todos = await page.evaluate(() => JSON.parse(localStorage.getItem('todos') || '[]'));
    expect(todos.length).toBe(expectedCount);
}

// Deskripsi pengujian untuk fitur "Tandai semua sebagai selesai"
test.describe('Mark all as completed', () => {
    
    // Persiapan sebelum setiap pengujian
    test.beforeEach(async ({ page }) => {
        await createDefaultTodos(page); // Membuka halaman learn.microsoft.com
    });

    // Pengujian: Halaman dapat dimuat dengan benar
    test('should load the learn.microsoft.com page successfully', async ({ page }) => {
        await expect(page).toHaveTitle(/Microsoft Learn/);
    });
});
