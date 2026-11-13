const fs = require('fs');
const path = require('path');

const explicitMap = {
  'attacks-blue.jpg': 'Attacks blue.jpg',
  'arrogate-pink.jpg': 'Arrogate pink.jpg',
  'dangerous-arrogate.jpg': 'Dangerous Arrogate.jpg',
  'first-night.jpg': 'First night.jpg',
  'glitch.jpg': 'Glitch .jpg',
  'arrogate-euphoria.jpg': 'Arrogate euphoria.jpg',
  'arrogate-pink-rose.jpg': 'Arrogate pink rose.jpg',
  'arrogate-pink-diva.jpg': 'Arrogate pink diva.jpg',
  'arrogate-girl.jpg': 'Arrogate girl.jpg',
  'lip-stick.jpg': 'Lip  stick.jpg',
  'strike-black.jpg': 'Strike black.jpg',
  'brazilian-tobacco.jpg': 'Brazilian tobacco.jpg',
  'pink-diamond-sakura.jpg': 'Pink diamond sakura.jpg',
  'black-diamond-incense.jpg': 'Black diamond incense.jpg',
  'purple-heart.jpg': 'Purple heart.jpg',
  'nude-coral.jpg': 'Nude coral.jpg',
  'emerald-soul.jpg': 'Emerald soul.jpg',
  'glamour.jpg': 'Glamour.jpg',
  'musk-garden.jpg': 'Musk garden.jpg',
  'pink-queen.jpg': 'Pink queen.jpg',
  'arrogate-blue-de.jpg': 'Arrogate blue de.jpg',
  'sense.jpg': 'Sense.jpg',
  'miss-laverne-extreme.jpg': 'Miss laverne extreme.jpg',
  'lady-reef.jpg': 'Lady reef.jpg',
  'princess-reef.jpg': 'Princess reef.jpg',
  'so-sweety.jpg': 'So sweety.jpg',
  'zayed.jpg': 'Khalifa.jpg', // Zayed image
  'pegasus.jpg': 'Pegasus.jpg',
  'gold-tears.jpg': 'Gold tears.jpg',
  'opera.jpg': 'Opera.jpg',
  'khalifa.jpg': 'Khalifa.jpg',
  'risk.jpg': 'Risk.jpg',
  'prive-reserve.jpg': 'WhatsApp_Image_2026-11-04_at_1.06.05_55cd90b9_2K.jpg',
  'imperial-white.jpg': 'Replace_white_background_for_per…_d9c3c84b_2K.jpg'
};

const srcDir = 'Perfume';
const destDir = 'public/perfumes';

for (const [cleanName, srcName] of Object.entries(explicitMap)) {
  const srcPath = path.join(srcDir, srcName);
  const destPath = path.join(destDir, cleanName);
  const detailPath = path.join(destDir, cleanName.replace('.jpg', '-detail.jpg'));

  if (fs.existsSync(srcPath)) {
    // Read buffer and write to ensure clean new file
    const buf = fs.readFileSync(srcPath);
    fs.writeFileSync(destPath, buf);
    fs.writeFileSync(detailPath, buf);
    console.log(`Synced clean: ${cleanName} (${buf.length} bytes)`);
  } else {
    console.error(`MISSING SOURCE: ${srcPath}`);
  }
}

console.log('Explicit image sync completed.');

