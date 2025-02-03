// global-teardown.ts
import fs from 'fs';

async function globalTeardown() {
  // Global teardown: Misalnya logout atau membersihkan sesi
  console.log('Global teardown completed!');
  
  // Hapus file cookies jika diperlukan
  if (fs.existsSync('./cookies.json')) {
    fs.unlinkSync('./cookies.json');
  }
}

export default globalTeardown;
