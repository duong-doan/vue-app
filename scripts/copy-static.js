const fs = require('fs');
const path = require('path');

const files = ['tiktokSoZLDW0Zk80QLYwhmztBwehxqNgleju.txt'];

files.forEach((file) => {
  const src = path.resolve(__dirname, '../public', file);
  const dest = path.resolve(__dirname, '../dist', file);

  if (!fs.existsSync(src)) {
    console.error(`❌ Missing ${file} in public/`);
    process.exit(1);
  }

  fs.copyFileSync(src, dest);
  console.log(`✅ Copied ${file}`);
});
