const fs = require('fs');
const path = require('path');

const scriptPath = path.join(__dirname, 'add_bath_and_body_works.cjs');
let scriptContent = fs.readFileSync(scriptPath, 'utf-8');

// Mapping dictionary from id to image and secondaryImage
const imageMapping = {
  "bbw-youre-the-one-mist-236": {
    image: "/bath-and-body-works/you-re-the-one-fine-fragrance-mist-236-ml.jpg",
    secondaryImage: "/bath-and-body-works/you-re-the-one-ultimate-hydration-body-cream-226-g.jpg"
  },
  "bbw-into-the-night-mist-236": {
    image: "/bath-and-body-works/into-the-night-fine-fragrance-mist-236-ml.jpg",
    secondaryImage: "/bath-and-body-works/into-the-night-ultimate-hydration-body-cream-226-g.jpg"
  },
  "bbw-in-the-stars-mist-236": {
    image: "/bath-and-body-works/in-the-stars-fine-fragrance-mist-236-ml.jpg",
    secondaryImage: "/bath-and-body-works/in-the-stars-fine-fragrance-mist-236-ml.jpg"
  },
  "bbw-a-thousand-wishes-mist-236": {
    image: "/bath-and-body-works/a-thousand-wishes-fine-fragrance-mist-236-ml.jpg",
    secondaryImage: "/bath-and-body-works/a-thousand-wishes-body-lotion-236-ml.jpg"
  },
  "bbw-vanilla-romance-mist-236": {
    image: "/bath-and-body-works/vanilla-romance-fine-fragrance-mist-236-ml.jpg",
    secondaryImage: "/bath-and-body-works/vanilla-romance-fine-fragrance-mist-236-ml.jpg"
  },
  "bbw-platinum-mist-236": {
    image: "/bath-and-body-works/platinum-fine-fragrance-mist-236-ml.jpg",
    secondaryImage: "/bath-and-body-works/platinum-ultimate-hydration-body-cream-226-g-usa.jpg"
  },
  "bbw-at-the-beach-mist-236": {
    image: "/bath-and-body-works/at-the-beach-fine-fragrance-mist-236-ml.jpg",
    secondaryImage: "/bath-and-body-works/at-the-beach-fine-fragrance-mist-236-ml-usa.jpg"
  },
  "bbw-sweetest-song-mist-236": {
    image: "/bath-and-body-works/touch-of-gold-fine-fragrance-mist-236-ml.jpg",
    secondaryImage: "/bath-and-body-works/touch-of-gold-fine-fragrance-mist-236-ml.jpg"
  },
  "bbw-champagne-toast-mist-236": {
    image: "/bath-and-body-works/chmpagne-toast-fine-fragrance-mist-236-ml.jpg",
    secondaryImage: "/bath-and-body-works/chmpagne-toast-fine-fragrance-mist-236-ml.jpg"
  },
  "bbw-gingham-mist-236": {
    image: "/bath-and-body-works/gingham-fine-fragrance-mist-236-ml.jpg",
    secondaryImage: "/bath-and-body-works/gingham-body-lotion-236-ml.jpg"
  },
  "bbw-pure-wonder-mist-236": {
    image: "/bath-and-body-works/pure-wonder-fine-fragrance-mist-236-ml.jpg",
    secondaryImage: "/bath-and-body-works/pure-wonder-fine-fragrance-mist-236-ml.jpg"
  },
  "bbw-if-u-musk-mist-236": {
    image: "/bath-and-body-works/if-u-musk-fine-fragrance-mist-236-ml.jpg",
    secondaryImage: "/bath-and-body-works/if-u-musk-fine-fragrance-mist-236-ml.jpg"
  },
  "bbw-pink-obsessed-mist-236": {
    image: "/bath-and-body-works/pink-obsessed-fine-fragrance-mist-236-ml.jpg",
    secondaryImage: "/bath-and-body-works/pink-obsessed-fine-fragrance-mist-236-ml.jpg"
  },
  "bbw-warm-vanilla-sugar-mist-236": {
    image: "/bath-and-body-works/warm-vanilla-sugar-fine-fragrance-mist-236-ml.jpg",
    secondaryImage: "/bath-and-body-works/warm-vanilla-sugar-ultimate-hydration-body-cream-70-g.jpg"
  },
  "bbw-butterfly-mist-236": {
    image: "/bath-and-body-works/butterfly-fine-fragrance-mist-236-ml.jpg",
    secondaryImage: "/bath-and-body-works/butterfly-body-lotion-236-ml.jpg"
  },
  "bbw-paris-amour-mist-236": {
    image: "/bath-and-body-works/paris-amour-fine-fragrance-mist-236-ml.jpg",
    secondaryImage: "/bath-and-body-works/paris-amour-fine-fragrance-mist-236-ml.jpg"
  },
  "bbw-dark-kiss-mist-236": {
    image: "/bath-and-body-works/dark-kiss-fine-fragrance-mist-236-m.jpg",
    secondaryImage: "/bath-and-body-works/dark-kiss-ultimate-hydration-body-cream-226-g.jpg"
  },
  "bbw-blush-cardigan-mist-236": {
    image: "/bath-and-body-works/blush-cardigan-fine-fragrance-mist-236-ml.jpg",
    secondaryImage: "/bath-and-body-works/blush-cardigan-fine-fragrance-mist-236-ml.jpg"
  },
  "bbw-into-the-night-mist-75": {
    image: "/bath-and-body-works/into-the-night-fine-fragrance-mist-75-ml.jpg",
    secondaryImage: "/bath-and-body-works/into-the-night-fine-fragrance-mist-236-ml.jpg"
  },
  "bbw-japanese-cherry-blossom-mist-75": {
    image: "/bath-and-body-works/japanese-cherry-blossom-fine-fragrance-mist-75-ml.jpg",
    secondaryImage: "/bath-and-body-works/japanese-cherry-blossom-body-lotion-236-m.jpg"
  },
  "bbw-a-thousand-wishes-mist-75": {
    image: "/bath-and-body-works/a-thousand-wishes-fine-fragrance-mist-75-ml.jpg",
    secondaryImage: "/bath-and-body-works/a-thousand-wishes-fine-fragrance-mist-236-ml.jpg"
  },
  "bbw-a-toast-to-you-mist-75-usa": {
    image: "/bath-and-body-works/a-toast-to-you-fine-fragrance-mist-75-ml-usa.jpg",
    secondaryImage: "/bath-and-body-works/a-toast-to-you-fine-fragrance-mist-75-ml-usa.jpg"
  },
  "bbw-strawberry-pound-cake-mist-236-usa": {
    image: "/bath-and-body-works/strawberry-pound-cake-fine-fragrance-mist-236-ml-usa.jpg",
    secondaryImage: "/bath-and-body-works/strawberry-pound-cake-fine-fragrance-mist-236-ml-usa.jpg"
  },
  "bbw-snowflakes-cashmere-mist-236-usa": {
    image: "/bath-and-body-works/snowflakes-cashmere-fine-fragrance-mist-236-ml-usa.jpg",
    secondaryImage: "/bath-and-body-works/snowflakes-cashmere-fine-fragrance-mist-236-ml-usa.jpg"
  },
  "bbw-bright-christmas-morning-mist-236-usa": {
    image: "/bath-and-body-works/bright-christmas-morning-fine-fragrance-mist-236-ml-usa.jpg",
    secondaryImage: "/bath-and-body-works/bright-christmas-morning-fine-fragrance-mist-236-ml-usa.jpg"
  },
  "bbw-platinum-cream-226-usa": {
    image: "/bath-and-body-works/platinum-ultimate-hydration-body-cream-226-g-usa.jpg",
    secondaryImage: "/bath-and-body-works/platinum-fine-fragrance-mist-236-ml.jpg"
  },
  "bbw-youre-the-one-cream-226": {
    image: "/bath-and-body-works/you-re-the-one-ultimate-hydration-body-cream-226-g.jpg",
    secondaryImage: "/bath-and-body-works/you-re-the-one-fine-fragrance-mist-236-ml.jpg"
  },
  "bbw-into-the-night-cream-226": {
    image: "/bath-and-body-works/into-the-night-ultimate-hydration-body-cream-226-g.jpg",
    secondaryImage: "/bath-and-body-works/into-the-night-body-lotion-236-ml.jpg"
  },
  "bbw-gingham-cream-226": {
    image: "/bath-and-body-works/gingham-ultimate-hydration-body-cream-226-g.jpg",
    secondaryImage: "/bath-and-body-works/gingham-body-lotion-236-ml.jpg"
  },
  "bbw-dark-kiss-cream-226": {
    image: "/bath-and-body-works/dark-kiss-ultimate-hydration-body-cream-226-g.jpg",
    secondaryImage: "/bath-and-body-works/dark-kiss-fine-fragrance-mist-236-m.jpg"
  },
  "bbw-warm-vanilla-sugar-cream-70": {
    image: "/bath-and-body-works/warm-vanilla-sugar-ultimate-hydration-body-cream-70-g.jpg",
    secondaryImage: "/bath-and-body-works/warm-vanilla-sugar-fine-fragrance-mist-236-ml.jpg"
  },
  "bbw-into-the-night-lotion-236": {
    image: "/bath-and-body-works/into-the-night-body-lotion-236-ml.jpg",
    secondaryImage: "/bath-and-body-works/into-the-night-fine-fragrance-mist-236-ml.jpg"
  },
  "bbw-a-thousand-wishes-lotion-236": {
    image: "/bath-and-body-works/a-thousand-wishes-body-lotion-236-ml.jpg",
    secondaryImage: "/bath-and-body-works/a-thousand-wishes-fine-fragrance-mist-236-ml.jpg"
  },
  "bbw-japanese-cherry-blossom-lotion-236": {
    image: "/bath-and-body-works/japanese-cherry-blossom-body-lotion-236-m.jpg",
    secondaryImage: "/bath-and-body-works/japanese-cherry-blossom-fine-fragrance-mist-75-ml.jpg"
  },
  "bbw-fairytale-lotion-236": {
    image: "/bath-and-body-works/fairytale-body-lotion-236-ml.jpg",
    secondaryImage: "/bath-and-body-works/fairytale-body-lotion-236-ml.jpg"
  },
  "bbw-gingham-lotion-236": {
    image: "/bath-and-body-works/gingham-body-lotion-236-ml.jpg",
    secondaryImage: "/bath-and-body-works/gingham-fine-fragrance-mist-236-ml.jpg"
  },
  "bbw-butterfly-lotion-236": {
    image: "/bath-and-body-works/butterfly-body-lotion-236-ml.jpg",
    secondaryImage: "/bath-and-body-works/butterfly-fine-fragrance-mist-236-ml.jpg"
  }
};

// Also let's append Gingham Gorgeous Lotion as product 38
const ginghamGorgeousProduct = `
  // 38. Gingham gorgeous body lotion 236 ml (700 bdl 995)
  {
    id: "bbw-gingham-gorgeous-lotion-236",
    brand: "Bath & Body Works",
    name: "Gingham Gorgeous Daily Nourishing Body Lotion 236 ml",
    nameAr: "جينجهام جورجس - لوشن مرطب للجسم 236 مل",
    category: "bath-and-body-works",
    gender: "women",
    concentration: "Daily Nourishing Body Lotion",
    size: "236 ml",
    availableSizes: ["236 ml"],
    price: 700,
    originalPrice: 995,
    discount: "30%",
    rating: 4.9,
    reviewsCount: 165,
    isBestSeller: true,
    isNew: true,
    inStock: true,
    sku: "BBW-GG-LOT-236",
    image: "/bath-and-body-works/gingham-gorgeous-body-lotion-236-ml.jpg",
    secondaryImage: "/bath-and-body-works/gingham-gorgeous-body-lotion-236-ml.jpg",
    shortDescEn: "A gorgeous, floral blend of pink strawberries, peach nectar and blooming peonies with shea butter.",
    shortDescAr: "مزيج زهري ساحر من الفراولة الوردية ورحيق الخوخ وزهور البيوني المتفتحة مع زبدة الشيا الغنية.",
    descriptionEn: "Gingham Gorgeous Body Lotion envelops your skin in joyful elegance and 24-hour deep nourishment.",
    descriptionAr: "لوشن جينجهام جورجس يمنح بشرتك نعومة فائقة وترطيباً عميقاً يستمر 24 ساعة بعبير الفواكه والزهور الجذابة.",
    notes: {
      topEn: "Pink Strawberries, Peach Nectar",
      topAr: "فراولة وردية، رحيق الخوخ",
      heartEn: "Blooming Peonies, Soft Rose",
      heartAr: "بيوني متفتحة، ورد ناعم",
      baseEn: "Sheer Woods, Soft Musks",
      baseAr: "أخشاب ناعمة، مسك نقي"
    },
    longevity: "24-Hour Moisture",
    sillage: "Gorgeous & Radiant",
    department: "bath-and-body-works"
  }
`;

// Insert Gingham Gorgeous before the closing bracket of BBW_PRODUCTS
if (!scriptContent.includes('bbw-gingham-gorgeous-lotion-236')) {
  scriptContent = scriptContent.replace(
    /(\n\s*\}\s*\n\];\s*\nconst allProducts)/,
    `,\n${ginghamGorgeousProduct}\n];\nconst allProducts`
  );
}

// Now replace image and secondaryImage for each product
for (const [id, imgs] of Object.entries(imageMapping)) {
  const idRegex = new RegExp(`(id:\\s*\"${id}\"[\\s\\S]*?image:\\s*)\"[^\"]+\"([\\s\\S]*?secondaryImage:\\s*)\"[^\"]+\"`);
  if (idRegex.test(scriptContent)) {
    scriptContent = scriptContent.replace(idRegex, `$1\"${imgs.image}\"$2\"${imgs.secondaryImage}\"`);
    console.log(`Updated images for ${id}`);
  } else {
    console.warn(`Could not match regex for ${id}`);
  }
}

fs.writeFileSync(scriptPath, scriptContent, 'utf-8');
console.log('Successfully updated add_bath_and_body_works.cjs with real photos!');

