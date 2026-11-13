const fs = require('fs');
const path = require('path');

const srcDir = 'Perfume';
const destDir = 'public/perfumes';

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

// Map each file from Perfume to its clean filename
const files = fs.readdirSync(srcDir).filter(f => !f.endsWith('.db'));

console.log('Processing', files.length, 'files from Perfume...');

files.forEach(file => {
  const srcFile = path.join(srcDir, file);
  // Generate clean slug name
  let cleanName = file.toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9\.\-]/g, '')
    .replace(/\-+/g, '-');

  if (cleanName.includes('replace-white-background')) {
    cleanName = 'imperial-white.jpg';
  } else if (cleanName.includes('whatsapp-image')) {
    cleanName = 'prive-reserve.jpg';
  }

  const destFile = path.join(destDir, cleanName);

  // If a file with different casing already exists in destDir, remove or rename it
  if (fs.existsSync(destFile)) {
    try {
      fs.unlinkSync(destFile);
    } catch (e) {}
  }

  // Copy fresh file
  fs.copyFileSync(srcFile, destFile);
  console.log(`Copied: "${file}" -> "${cleanName}"`);

  // Also create a secondary image copy e.g. cleanName-detail.jpg
  const detailName = cleanName.replace('.jpg', '-detail.jpg');
  const detailFile = path.join(destDir, detailName);
  fs.copyFileSync(srcFile, detailFile);
});

console.log('All files processed successfully into public/perfumes!');

