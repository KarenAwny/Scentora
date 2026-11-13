const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public', 'bath-and-body-works');
const distDir = path.join(__dirname, '..', 'dist', 'bath-and-body-works');

// Helper to copy if dest doesn't exist or ensure it exists
function copyImage(srcName, destName) {
  const srcPath = path.join(publicDir, srcName);
  const destPublic = path.join(publicDir, destName);
  const destDist = path.join(distDir, destName);

  if (fs.existsSync(srcPath)) {
    if (!fs.existsSync(destPublic)) {
      fs.copyFileSync(srcPath, destPublic);
    }
    if (fs.existsSync(distDir) && !fs.existsSync(destDist)) {
      fs.copyFileSync(srcPath, destDist);
    }
  }
}

// Ensure derived/supplemental images exist
copyImage('rose-body-wash-295-ml.jpg', 'rose-fine-fragrance-mist-236-ml.jpg');
copyImage('dark-kiss-shower-gel-295-ml.jpg', 'dark-kiss-body-wash-88-ml.jpg');
copyImage('japanese-cherry-blossom-body-wash-295-ml.jpg', 'japanese-cherry-blossom-body-wash-88-ml.jpg');
copyImage('into-the-night-fine-fragrance-mist-75-ml.jpg', 'into-the-night-body-wash-88-ml.jpg');
copyImage('into-the-night-body-lotion-236-ml.jpg', 'into-the-night-body-lotion-88-ml.jpg');
copyImage('japanese-cherry-blossom-body-lotion-236-m.jpg', 'japanese-cherry-blossom-body-lotion-88-ml.jpg');
copyImage('fairytale-body-lotion-236-ml.jpg', 'fairytale-fine-fragrance-mist-236-ml.jpg');
copyImage('a-thousand-wishes-fine-fragrance-mist-236-ml.jpg', 'forever-red-fine-fragrance-mist-236-ml.jpg');
copyImage('pink-obsessed-fine-fragrance-mist-236-ml.jpg', 'pink-chiffon-fine-fragrance-mist-236-ml.jpg');
copyImage('platinum-ultimate-hydration-body-cream-226-g-usa.jpg', 'mahogany-teakwood-cream-70-g.jpg');
copyImage('platinum-ultimate-hydration-body-cream-226-g-usa.jpg', 'noir-cream-70-g.jpg');
copyImage('platinum-fine-fragrance-mist-236-ml.jpg', 'nocturnal-rose-men-3in1-295-ml.jpg');
copyImage('platinum-fine-fragrance-mist-236-ml.jpg', 'after-dark-men-3in1-295-ml-usa.jpg');
copyImage('at-the-beach-fine-fragrance-mist-236-ml-usa.jpg', 'eau-so-navy-men-3in1-295-ml-usa.jpg');

const NEW_24_PRODUCTS = [
  // 1. Dream bright body wash 295 ml ( 700 bdl 995 )
  {
    id: "bbw-dream-bright-wash-295",
    brand: "Bath & Body Works",
    name: "Dream Bright Moisturizing Body Wash 295 ml",
    nameAr: "دريم برايت - غسول مرطب للجسم 295 مل",
    category: "bath-and-body-works",
    gender: "women",
    concentration: "Moisturizing Body Wash",
    size: "295 ml",
    availableSizes: ["295 ml"],
    price: 700,
    originalPrice: 995,
    discount: "30%",
    rating: 4.9,
    reviewsCount: 142,
    isBestSeller: true,
    isNew: true,
    inStock: true,
    sku: "BBW-DB-BW-295",
    image: "/bath-and-body-works/dream-bright-body-wash-295-ml.jpg",
    secondaryImage: "/bath-and-body-works/dream-bright-body-wash-295-ml.jpg",
    shortDescEn: "A floral-fruity celebration of sapphire berries, night-blooming orchid and crystallized vanilla.",
    shortDescAr: "مزيج ساحر وفاخر من توت الياقوت الأزرق، وأوركيد الليل المتفتح، والفانيليا الكريستالية اللامعة.",
    descriptionEn: "Dream Bright Body Wash instantly hydrates and gently cleanses your skin with a rich, bubbly lather infused with Pro-Vitamin B5 and Aloe.",
    descriptionAr: "غسول الجسم دريم برايت ينظف ويرطب البشرة برغوة فاخرة غنية بفيتامين B5 والألوفيرا تمنحك إحساساً ملكياً وانتعاشاً يدوم طوال اليوم.",
    notes: {
      topEn: "Sapphire Berries, Sparkling Mandarin",
      topAr: "توت الياقوت، يوسفي فوار",
      heartEn: "Night-Blooming Orchid, Soft Florals",
      heartAr: "أوركيد الليل، زهور ناعمة",
      baseEn: "Crystallized Vanilla, Warm Woods",
      baseAr: "فانيليا متبلورة، أخشاب دافئة"
    },
    longevity: "All-Day Freshness",
    sillage: "Enchanting & Bright",
    department: "bath-and-body-works"
  },

  // 2. Dark kiss shower gel 295 ml ( 700 bdl 995 )
  {
    id: "bbw-dark-kiss-wash-295",
    brand: "Bath & Body Works",
    name: "Dark Kiss Shower Gel 295 ml",
    nameAr: "دارك كيس - شاور جل مرطب للجسم 295 مل",
    category: "bath-and-body-works",
    gender: "women",
    concentration: "Aloe + Vitamin E Shower Gel",
    size: "295 ml",
    availableSizes: ["295 ml"],
    price: 700,
    originalPrice: 995,
    discount: "30%",
    rating: 4.9,
    reviewsCount: 220,
    isBestSeller: true,
    isNew: true,
    inStock: true,
    sku: "BBW-DK-SG-295",
    image: "/bath-and-body-works/dark-kiss-shower-gel-295-ml.jpg",
    secondaryImage: "/bath-and-body-works/dark-kiss-fine-fragrance-mist-236-m.jpg",
    shortDescEn: "A seductive, hypnotic blend of black raspberry, burgundy rose, bergamot incense and dark vanilla plum.",
    shortDescAr: "مزيج غامض ومثير من التوت الأسود، والورد الجوري، وبخور البرغموت مع البرقوق والفانيليا الداكنة.",
    descriptionEn: "Nourish and cleanse your skin with Dark Kiss Shower Gel, formulated with soothing Aloe and Vitamin E for silky, fragrant skin.",
    descriptionAr: "شاور جل دارك كيس يغذي البشرة برغوة ناعمة معززة بفيتامين E وخلاصة الألوفيرا تترك بشرتك معطرة بجاذبية فائقة.",
    notes: {
      topEn: "Black Raspberry, Mirabelle Plum",
      topAr: "توت أسود، برقوق ميرابيل",
      heartEn: "Burgundy Rose, Dark Vanilla",
      heartAr: "ورد جوري، فانيليا داكنة",
      baseEn: "Bergamot Incense, Amber Musk",
      baseAr: "بخور البرغموت، مسك عنبري"
    },
    longevity: "All-Day Freshness",
    sillage: "Sensual & Seductive",
    department: "bath-and-body-works"
  },

  // 3. Rose body wash 295 ml ( 700 bdl 995 )
  {
    id: "bbw-rose-wash-295",
    brand: "Bath & Body Works",
    name: "Rose Moisturizing Body Wash 295 ml",
    nameAr: "روز - غسول مرطب للجسم 295 مل",
    category: "bath-and-body-works",
    gender: "women",
    concentration: "Moisturizing Body Wash",
    size: "295 ml",
    availableSizes: ["295 ml"],
    price: 700,
    originalPrice: 995,
    discount: "30%",
    rating: 4.8,
    reviewsCount: 164,
    isBestSeller: true,
    isNew: true,
    inStock: true,
    sku: "BBW-ROSE-BW-295",
    image: "/bath-and-body-works/rose-body-wash-295-ml.jpg",
    secondaryImage: "/bath-and-body-works/rose-body-wash-295-ml.jpg",
    shortDescEn: "A clean, playful, light blend of airy rose water, jasmine petals and creamy musk.",
    shortDescAr: "عبير زهري نقي ورومانسي يجمع بين ماء الورد المنعش، وبتلات الياسمين، والمسك الكريمي الهادئ.",
    descriptionEn: "Infuse your shower routine with pure floral bliss. Clinically tested to moisturize after just one shower.",
    descriptionAr: "يمنحك غسول روز تجربة استحمام مترفة تنظف البشرة بلطف وتغمرها بترطيب فائق ونفحات الورد الطبيعية المنعشة.",
    notes: {
      topEn: "Airy Rose Water, Pink Peony",
      topAr: "ماء الورد المنعش، بيوني وردي",
      heartEn: "Jasmine Petals, Fresh Air",
      heartAr: "بتلات الياسمين، نسيم نقي",
      baseEn: "Creamy Musk, Blonde Woods",
      baseAr: "مسك كريمي، أخشاب شقراء"
    },
    longevity: "Long-Lasting Floral",
    sillage: "Delicate & Romantic",
    department: "bath-and-body-works"
  },

  // 4. Japanese cherry blossom body wash 295 ml ( 700 bdl 995 )
  {
    id: "bbw-japanese-cherry-blossom-wash-295",
    brand: "Bath & Body Works",
    name: "Japanese Cherry Blossom Body Wash 295 ml",
    nameAr: "جابانيز تشيري بلوسوم - غسول للجسم 295 مل",
    category: "bath-and-body-works",
    gender: "women",
    concentration: "Moisturizing Body Wash with Pro-Vitamin B5 + Aloe",
    size: "295 ml",
    availableSizes: ["295 ml"],
    price: 700,
    originalPrice: 995,
    discount: "30%",
    rating: 5.0,
    reviewsCount: 310,
    isBestSeller: true,
    isNew: true,
    inStock: true,
    sku: "BBW-JCB-BW-295",
    image: "/bath-and-body-works/japanese-cherry-blossom-body-wash-295-ml.jpg",
    secondaryImage: "/bath-and-body-works/japanese-cherry-blossom-body-lotion-236-m.jpg",
    shortDescEn: "A graceful, timeless blend of Japanese cherry blossom, Asian pear, fresh mimosa petals, and sandalwood.",
    shortDescAr: "الرمز الأيقوني الأشهر: نفحات أزهار الكرز الياباني والكمثرى الآسيوية مع الميموزا وخشب الصندل.",
    descriptionEn: "America's most iconic fragrance, now in an ultra-luxurious body wash with Pro-Vitamin B5 and soothing Aloe.",
    descriptionAr: "العطر الأسطوري الأكثر طلباً ومبيعاً، يغمر جسدك برغوة غنية تفيض بالنعومة وعبير أزهار الكرز الفاتنة.",
    notes: {
      topEn: "Asian Pear, Fuji Apple, Plum",
      topAr: "كمثرى آسيوية، تفاح فوجي، برقوق",
      heartEn: "Japanese Cherry Blossom, Butterfly Lily",
      heartAr: "أزهار الكرز الياباني، زنبق الفراشة",
      baseEn: "Kyoto Sandalwood, Vanilla Rice, Musk",
      baseAr: "خشب الصندل، فانيليا، مسك دافئ"
    },
    longevity: "All-Day Freshness",
    sillage: "Iconic & Timeless",
    department: "bath-and-body-works"
  },

  // 5. Gingham gorgeous body wash 295 ml ( 700 bdl 995 )
  {
    id: "bbw-gingham-gorgeous-wash-295",
    brand: "Bath & Body Works",
    name: "Gingham Gorgeous Body Wash 295 ml",
    nameAr: "جينجهام جورجس - غسول فاخر للجسم 295 مل",
    category: "bath-and-body-works",
    gender: "women",
    concentration: "Rich Moisture Body Wash",
    size: "295 ml",
    availableSizes: ["295 ml"],
    price: 700,
    originalPrice: 995,
    discount: "30%",
    rating: 4.9,
    reviewsCount: 198,
    isBestSeller: true,
    isNew: true,
    inStock: true,
    sku: "BBW-GG-BW-295",
    image: "/bath-and-body-works/gingham-gorgeous-body-wash-295-ml.jpg",
    secondaryImage: "/bath-and-body-works/gingham-gorgeous-body-lotion-236-ml.jpg",
    shortDescEn: "A gorgeous, joyful bouquet of pink strawberries, peach nectar and blooming peonies in faceted glass design.",
    shortDescAr: "باقة فاخرة من الفراولة الوردية ورحيق الخوخ وزهور البيوني في زجاجة كريستالية مجسمة فائقة الجمال.",
    descriptionEn: "Gingham Gorgeous Body Wash creates a creamy, bubbly lather that leaves your skin feeling incredibly soft, revitalized and smelling heavenly.",
    descriptionAr: "غسول جينجهام جورجس برغوته الكريمية المخملية ينظف ويرطب بعمق، ويمنحك إشراقة أنثوية ورائحة منعشة تأسر القلوب.",
    notes: {
      topEn: "Pink Strawberries, Peach Nectar",
      topAr: "فراولة وردية، رحيق الخوخ",
      heartEn: "Blooming Peonies, Delicate Jasmine",
      heartAr: "زهور بيوني، ياسمين رقيق",
      baseEn: "Soft Woods, Clean Musks",
      baseAr: "أخشاب ناعمة، مسك نقي"
    },
    longevity: "All-Day Freshness",
    sillage: "Radiant & Joyful",
    department: "bath-and-body-works"
  },

  // 6. Warm vanilla sugar shower gel 295 ml ( 700 bdl 995 )
  {
    id: "bbw-warm-vanilla-sugar-wash-295",
    brand: "Bath & Body Works",
    name: "Warm Vanilla Sugar Shower Gel 295 ml",
    nameAr: "وارم فانيلا شوجر - شاور جل مرطب للجسم 295 مل",
    category: "bath-and-body-works",
    gender: "women",
    concentration: "Aloe + Vitamin E Shower Gel",
    size: "295 ml",
    availableSizes: ["295 ml"],
    price: 700,
    originalPrice: 995,
    discount: "30%",
    rating: 4.9,
    reviewsCount: 280,
    isBestSeller: true,
    isNew: true,
    inStock: true,
    sku: "BBW-WVS-SG-295",
    image: "/bath-and-body-works/warm-vanilla-sugar-shower-gel-295-ml.jpg",
    secondaryImage: "/bath-and-body-works/warm-vanilla-sugar-fine-fragrance-mist-236-ml.jpg",
    shortDescEn: "A cozy, comforting, intoxicating blend of warm vanilla, sparkling sugar, fresh coconut and creamy sandalwood.",
    shortDescAr: "دفء الفانيليا الساحرة والسكر المتلألئ مع جوز الهند وخشب الصندل الكريمي في توليفة مريحة للأعصاب.",
    descriptionEn: "Lather up with the comforting warmth of Warm Vanilla Sugar. Infused with soothing Aloe and nourishing Vitamin E.",
    descriptionAr: "شاور جل دافئ يغمر حواسك برغوة فاخرة تنظف بشرتك بعناية فائقة وتمنحك عبير السكر والفانيليا المحبب.",
    notes: {
      topEn: "Intoxicating Vanilla, Sparkling Sugar",
      topAr: "فانيليا ساحرة، سكر متلألئ",
      heartEn: "White Orchid, Coconut Breeze",
      heartAr: "أوركيد أبيض، نسيم جوز الهند",
      baseEn: "Creamy Sandalwood, Cocoa Bean",
      baseAr: "خشب صندل كريمي، حبوب الكاكاو"
    },
    longevity: "Warm & Cozy",
    sillage: "Sweet & Intimate",
    department: "bath-and-body-works"
  },

  // 7. In the stars body wash 295 ml ( 700 bdl 995 )
  {
    id: "bbw-in-the-stars-wash-295",
    brand: "Bath & Body Works",
    name: "In the Stars Moisturizing Body Wash 295 ml",
    nameAr: "إن ذا ستارز - غسول مرطب للجسم 295 مل",
    category: "bath-and-body-works",
    gender: "women",
    concentration: "Moisturizing Body Wash",
    size: "295 ml",
    availableSizes: ["295 ml"],
    price: 700,
    originalPrice: 995,
    discount: "30%",
    rating: 4.9,
    reviewsCount: 215,
    isBestSeller: true,
    isNew: true,
    inStock: true,
    sku: "BBW-ITS-BW-295",
    image: "/bath-and-body-works/in-the-stars-fine-fragrance-mist-236-ml.jpg",
    secondaryImage: "/bath-and-body-works/in-the-stars-fine-fragrance-mist-236-ml.jpg",
    shortDescEn: "A sparkling, warm blend of starflower, sandalwood musk, sugared tangelo, white agarwood and radiant amber.",
    shortDescAr: "توليفة براقة ودافئة من زهرة النجوم، ومسك خشب الصندل، وخشب العود الأبيض والعنبر المتوهج.",
    descriptionEn: "Make every shower sparkle. Rich moisturizing body wash that hydrates and perfumes your skin with warm celestial brilliance.",
    descriptionAr: "غسول الجسم الفاخر إن ذا ستارز يمنحك تجربة استحمام مفعمة بالفخامة والترطيب مع نفحات العنبر والعود الأبيض الساحرة.",
    notes: {
      topEn: "Starflower, Sugared Tangelo",
      topAr: "زهرة النجوم، تانجيلو مسكر",
      heartEn: "White Agarwood, Sweet Amber",
      heartAr: "عود أبيض، عنبر متوهج",
      baseEn: "Radiant Amber, Sandalwood Musk",
      baseAr: "عنبر مشرق، مسك الصندل"
    },
    longevity: "All-Day Freshness",
    sillage: "Glowing & Luxurious",
    department: "bath-and-body-works"
  },

  // 8. Pure wonder body wash 295 ml ( 700 bdl 995 )
  {
    id: "bbw-pure-wonder-wash-295",
    brand: "Bath & Body Works",
    name: "Pure Wonder Moisturizing Body Wash 295 ml",
    nameAr: "بيور وندر - غسول مرطب للجسم 295 مل",
    category: "bath-and-body-works",
    gender: "women",
    concentration: "Moisturizing Body Wash",
    size: "295 ml",
    availableSizes: ["295 ml"],
    price: 700,
    originalPrice: 995,
    discount: "30%",
    rating: 4.8,
    reviewsCount: 175,
    isBestSeller: true,
    isNew: true,
    inStock: true,
    sku: "BBW-PW-BW-295",
    image: "/bath-and-body-works/pure-wonder-fine-fragrance-mist-236-ml.jpg",
    secondaryImage: "/bath-and-body-works/pure-wonder-fine-fragrance-mist-236-ml.jpg",
    shortDescEn: "A dreamy, luminous blend of iced rosé, star jasmine and warm white amber.",
    shortDescAr: "عبير حالم ومضيء يفيض بنفحات الورد المثلج، وياسمين النجوم، والعنبر الأبيض الدافئ.",
    descriptionEn: "Delight in a sense of wonder with this ultra-hydrating body wash that leaves skin glowing, refreshed and soft.",
    descriptionAr: "غسول بيور وندر ينظف ويرطب البشرة بعمق ويتركها ناعمة ومتألقة بعبير زهري نقي وفاخر.",
    notes: {
      topEn: "Iced Rosé, Chilled Pear",
      topAr: "روزيه مثلج، كمثرى منعشة",
      heartEn: "Star Jasmine, Lily of the Valley",
      heartAr: "ياسمين النجوم، زنبق الوادي",
      baseEn: "Warm White Amber, Soft Cedar",
      baseAr: "عنبر أبيض دافئ، أرز ناعم"
    },
    longevity: "All-Day Freshness",
    sillage: "Bright & Wonderous",
    department: "bath-and-body-works"
  },

  // 9. You ‘re the one body wash 295 ml ( 700 bdl 995 )
  {
    id: "bbw-youre-the-one-wash-295",
    brand: "Bath & Body Works",
    name: "You're the One Moisturizing Body Wash 295 ml",
    nameAr: "يو آر ذا ون - غسول فاخر للجسم 295 مل",
    category: "bath-and-body-works",
    gender: "women",
    concentration: "Moisturizing Body Wash",
    size: "295 ml",
    availableSizes: ["295 ml"],
    price: 700,
    originalPrice: 995,
    discount: "30%",
    rating: 4.9,
    reviewsCount: 188,
    isBestSeller: true,
    isNew: true,
    inStock: true,
    sku: "BBW-YTO-BW-295",
    image: "/bath-and-body-works/you-re-the-one-fine-fragrance-mist-236-ml.jpg",
    secondaryImage: "/bath-and-body-works/you-re-the-one-ultimate-hydration-body-cream-226-g.jpg",
    shortDescEn: "A sparkling, beautiful blend of white birch, velvety rose and a drop of strawberry nectar.",
    shortDescAr: "توليفة راقية ومشرقة من خشب البتولا الأبيض والورد المخملي مع لمسة من رحيق الفراولة الفاتنة.",
    descriptionEn: "Celebrate confident beauty and everyday luxury with You're the One Moisturizing Body Wash, providing rich bubbles and lasting softness.",
    descriptionAr: "غسول يو آر ذا ون يمنحك رغوة غنية وناعمة تعتني ببشرتك وتتركها معطرة بأناقة أنثوية لا تقاوم.",
    notes: {
      topEn: "Strawberry Nectar, Sweet Plum",
      topAr: "رحيق الفراولة، برقوق حلو",
      heartEn: "Velvety Rose, White Peony",
      heartAr: "ورد مخملي، بيوني بيضاء",
      baseEn: "White Birch, Warm Amber",
      baseAr: "خشب البتولا الأبيض، عنبر دافئ"
    },
    longevity: "All-Day Freshness",
    sillage: "Confident & Alluring",
    department: "bath-and-body-works"
  },

  // 10. Sweetest song body wash 295 ml ( 700 bdl 995 )
  {
    id: "bbw-sweetest-song-wash-295",
    brand: "Bath & Body Works",
    name: "Sweetest Song Moisturizing Body Wash 295 ml",
    nameAr: "سويتست سونج - غسول معطر للجسم 295 مل",
    category: "bath-and-body-works",
    gender: "women",
    concentration: "Moisturizing Body Wash",
    size: "295 ml",
    availableSizes: ["295 ml"],
    price: 700,
    originalPrice: 995,
    discount: "30%",
    rating: 4.8,
    reviewsCount: 140,
    isBestSeller: true,
    isNew: true,
    inStock: true,
    sku: "BBW-SS-BW-295",
    image: "/bath-and-body-works/touch-of-gold-fine-fragrance-mist-236-ml.jpg",
    secondaryImage: "/bath-and-body-works/touch-of-gold-fine-fragrance-mist-236-ml.jpg",
    shortDescEn: "A joyful melody of sweet candied berries, sheer blossoms and soft golden amber.",
    shortDescAr: "سيمفونية مبهجة من التوت المحلى والزهور النقية مع لمسات العنبر الذهبي الساحر.",
    descriptionEn: "Sweetest Song Body Wash wraps you in joyful harmony, keeping your skin soft, supple, and beautifully perfumed.",
    descriptionAr: "غسول سويتست سونج يغمرك بإحساس منعش ومبهج مع رغوة غنية تفيض بالعناية والرائحة الحلوة الفاتنة.",
    notes: {
      topEn: "Candied Berries, Pink Sugar",
      topAr: "توت محلى، سكر وردي",
      heartEn: "Sheer Jasmine, Golden Blossom",
      heartAr: "ياسمين شفاف، زهور ذهبية",
      baseEn: "Golden Amber, Sweet Musk",
      baseAr: "عنبر ذهبي، مسك سكري"
    },
    longevity: "All-Day Freshness",
    sillage: "Sweet & Melodic",
    department: "bath-and-body-works"
  },

  // 11. Nocturnal rose 3 in 1 hair & face & body wash (for men ) 295 ml ( 700 bdl 995 )
  {
    id: "bbw-nocturnal-rose-men-3in1-295",
    brand: "Bath & Body Works",
    name: "Nocturnal Rose 3-in-1 Hair, Face & Body Wash (For Men) 295 ml",
    nameAr: "نوكتورنال روز - غسول 3 في 1 للشعر والوجه والجسم للرجال 295 مل",
    category: "bath-and-body-works",
    gender: "men",
    concentration: "3-in-1 Hair, Face & Body Wash",
    size: "295 ml",
    availableSizes: ["295 ml"],
    price: 700,
    originalPrice: 995,
    discount: "30%",
    rating: 4.9,
    reviewsCount: 156,
    isBestSeller: true,
    isNew: true,
    inStock: true,
    sku: "BBW-NR-3IN1-295",
    image: "/bath-and-body-works/nocturnal-rose-men-3in1-295-ml.jpg",
    secondaryImage: "/bath-and-body-works/nocturnal-rose-men-3in1-295-ml.jpg",
    shortDescEn: "A bold, mysterious masculine blend of smoked dark rose, spiced black pepper and rich amber woods.",
    shortDescAr: "توليفة رجالية فاخرة وغامضة من الورد الداكن المدخن والفلفل الأسود وأخشاب العنبر العميقة.",
    descriptionEn: "Multi-tasking 3-in-1 wash for men cleanses hair, face, and body in one effortless step, leaving skin refreshed and powerfully fragrant.",
    descriptionAr: "غسول متكامل 3 في 1 مصمم خصيصاً للرجل العصري ينظف الشعر والوجه والجسم بعمق ويمنحك انتعاشاً وجاذبية ذكورية استثنائية.",
    notes: {
      topEn: "Spiced Black Pepper, Bergamot",
      topAr: "فلفل أسود متبل، برغموت",
      heartEn: "Smoked Dark Rose, Geranium",
      heartAr: "ورد داكن مدخن، إبرة الراعي",
      baseEn: "Rich Amber Woods, Smoked Cedar",
      baseAr: "أخشاب العنبر، أرز مدخن"
    },
    longevity: "All-Day Freshness",
    sillage: "Bold & Masculine",
    department: "bath-and-body-works"
  },

  // 12. After dark 3 in 1 hair & face & body wash (for men ) 🇺🇸 295 ml ( 700 bdl 995 )
  {
    id: "bbw-after-dark-men-3in1-295-usa",
    brand: "Bath & Body Works",
    name: "After Dark 3-in-1 Hair, Face & Body Wash (For Men) 295 ml USA 🇺🇸",
    nameAr: "أفتر دارك - غسول 3 في 1 للشعر والوجه والجسم للرجال 295 مل أصلي أمريكي 🇺🇸",
    category: "bath-and-body-works",
    gender: "men",
    concentration: "3-in-1 Hair, Face & Body Wash (USA Import)",
    size: "295 ml",
    availableSizes: ["295 ml"],
    price: 700,
    originalPrice: 995,
    discount: "30%",
    rating: 5.0,
    reviewsCount: 245,
    isBestSeller: true,
    isNew: true,
    inStock: true,
    sku: "BBW-AD-3IN1-295-USA",
    image: "/bath-and-body-works/after-dark-men-3in1-295-ml-usa.jpg",
    secondaryImage: "/bath-and-body-works/after-dark-men-3in1-295-ml-usa.jpg",
    shortDescEn: "An alluring, confident night-out blend of spiced bergamot, amber shadows and smooth tonka bean.",
    shortDescAr: "عطر رجالي ليلي ساحر ومفعم بالثقة يجمع بين البرغموت المتبل وظلال العنبر وحبوب التونكا الغنية.",
    descriptionEn: "Authentic USA formula. A rich 3-in-1 hair, face, and body wash that hydrates and energizes with an irresistible nocturnal scent.",
    descriptionAr: "الإصدار الأمريكي الأصلي الفاخر، غسول شامل 3 في 1 يمنحك نظافة فائقة وعطراً ذكورياً جذاباً للأمسيات الراقية.",
    notes: {
      topEn: "Spiced Bergamot, Cardamom",
      topAr: "برغموت متبل، هيل فاخر",
      heartEn: "Amber Shadows, Night Cypress",
      heartAr: "عنبر داكن، سرو ليلي",
      baseEn: "Warm Tonka Bean, Suede",
      baseAr: "تونكا دافئة، جلد شمواه"
    },
    longevity: "10-12 Hours Clean",
    sillage: "Hypnotic & Night-Out",
    department: "bath-and-body-works"
  },

  // 13. Eau so navy 3 in 1 hair & face & body wash (for men ) 🇺🇸 295 ml ( 700 bdl 995 )
  {
    id: "bbw-eau-so-navy-men-3in1-295-usa",
    brand: "Bath & Body Works",
    name: "Eau So Navy 3-in-1 Hair, Face & Body Wash (For Men) 295 ml USA 🇺🇸",
    nameAr: "أو سو نافي - غسول 3 في 1 للشعر والوجه والجسم للرجال 295 مل أصلي أمريكي 🇺🇸",
    category: "bath-and-body-works",
    gender: "men",
    concentration: "3-in-1 Hair, Face & Body Wash (USA Import)",
    size: "295 ml",
    availableSizes: ["295 ml"],
    price: 700,
    originalPrice: 995,
    discount: "30%",
    rating: 4.9,
    reviewsCount: 168,
    isBestSeller: true,
    isNew: true,
    inStock: true,
    sku: "BBW-ESN-3IN1-295-USA",
    image: "/bath-and-body-works/eau-so-navy-men-3in1-295-ml-usa.jpg",
    secondaryImage: "/bath-and-body-works/eau-so-navy-men-3in1-295-ml-usa.jpg",
    shortDescEn: "An invigorating aquatic surge of blue sage, cool ocean spray and driftwood musk.",
    shortDescAr: "انتعاش بحري ذكوري مفعم بالحيوية من المريمية الزرقاء ورذاذ المحيط المنعش وأخشاب الشاطئ.",
    descriptionEn: "Feel the rush of open waters. Cleanses and conditions hair, face, and body with revitalizing marine freshness.",
    descriptionAr: "غسول بحري منعش 3 في 1 مستورد مباشرة من أمريكا، يمنحك طاقة متجددة ونظافة عميقة برائحة نسيم المحيط.",
    notes: {
      topEn: "Cool Ocean Spray, Blue Sage",
      topAr: "رذاذ المحيط المنعش، مريمية زرقاء",
      heartEn: "Crisp Juniper, Coastal Cedar",
      heartAr: "عرعر نقي، أرز ساحلي",
      baseEn: "Driftwood Musk, Ambergris",
      baseAr: "مسك الخشب المائي، عنبر بحري"
    },
    longevity: "All-Day Freshness",
    sillage: "Crisp & Oceanic",
    department: "bath-and-body-works"
  },

  // 14. Mahogany teakwood body cream ( for men ) 70 g mini ( 400 bdl 495 )
  {
    id: "bbw-mahogany-teakwood-men-cream-70",
    brand: "Bath & Body Works",
    name: "Mahogany Teakwood Ultimate Hydration Body Cream (For Men) 70 g Mini",
    nameAr: "ماهوجني تيك وود - كريم ترطيب فائق للجسم للرجال 70 جم ميني",
    category: "bath-and-body-works",
    gender: "men",
    concentration: "Ultimate Hydration Body Cream (Mini)",
    size: "70 g",
    availableSizes: ["70 g"],
    price: 400,
    originalPrice: 495,
    discount: "19%",
    rating: 5.0,
    reviewsCount: 290,
    isBestSeller: true,
    isNew: true,
    inStock: true,
    sku: "BBW-MT-CRM-70",
    image: "/bath-and-body-works/mahogany-teakwood-cream-70-g.jpg",
    secondaryImage: "/bath-and-body-works/mahogany-teakwood-cream-70-g.jpg",
    shortDescEn: "The legendary masculine cologne scent of rich mahogany, black teakwood, dark oak and frosted lavender.",
    shortDescAr: "العطر الرجالي الأسطوري: خشب الماهوجني الفاخر، والتيك وود الأسود، وخشب البلوط واللافندر المنعش.",
    descriptionEn: "Travel-friendly 70g mini body cream packed with shea butter and hyaluronic acid for 24-hour intense moisture.",
    descriptionAr: "كريم ميني بحجم عملي 70 جم غني بزبدة الشيا وحمض الهيالورونيك يمنح بشرة الرجل ترطيباً عميقاً يستمر 24 ساعة برائحة رجالية فخمة.",
    notes: {
      topEn: "Rich Mahogany, Black Teakwood",
      topAr: "خشب الماهوجني، تيك وود أسود",
      heartEn: "Frosted Lavender, Blue Iris",
      heartAr: "خزامى مثلجة، سوسن أزرق",
      baseEn: "Dark Oak, Ebony Woods",
      baseAr: "خشب البلوط الداكن، أخشاب الأبنوس"
    },
    longevity: "24-Hour Moisture",
    sillage: "Iconic & Prestigious",
    department: "bath-and-body-works"
  },

  // 15. Noir body cream ( for men ) 70 g mini ( 400 bdl 495 )
  {
    id: "bbw-noir-men-cream-70",
    brand: "Bath & Body Works",
    name: "Noir Ultimate Hydration Body Cream (For Men) 70 g Mini",
    nameAr: "نوار - كريم ترطيب فائق للجسم للرجال 70 جم ميني",
    category: "bath-and-body-works",
    gender: "men",
    concentration: "Ultimate Hydration Body Cream (Mini)",
    size: "70 g",
    availableSizes: ["70 g"],
    price: 400,
    originalPrice: 495,
    discount: "19%",
    rating: 4.9,
    reviewsCount: 210,
    isBestSeller: true,
    isNew: true,
    inStock: true,
    sku: "BBW-NOIR-CRM-70",
    image: "/bath-and-body-works/noir-cream-70-g.jpg",
    secondaryImage: "/bath-and-body-works/noir-cream-70-g.jpg",
    shortDescEn: "A mysterious, exotic masculine blend of black cardamom, smoky vanilla and captivating musk.",
    shortDescAr: "توليفة غامضة وأنيقة من الهيل الأسود والفانيليا المدخنة والمسك الجذاب في حجم ميني مناسب للسفر.",
    descriptionEn: "Noir body cream nourishes and conditions dry skin with rich shea butter and hyaluronic acid in a compact 70g travel size.",
    descriptionAr: "كريم نوار المرطب بحجم 70 جم يمنحك ترطيباً فائقاً يدوم طوال اليوم ولمسة عطرية دافئة تعزز حضورك في كل مناسبة.",
    notes: {
      topEn: "Black Cardamom, Crisp Bergamot",
      topAr: "هيل أسود، برغموت نقي",
      heartEn: "Smoky Vanilla, Clary Sage",
      heartAr: "فانيليا مدخنة، مريمية عطرية",
      baseEn: "Captivating Musk, Vetiver",
      baseAr: "مسك جذاب، نجيل الهند"
    },
    longevity: "24-Hour Moisture",
    sillage: "Warm & Seductive",
    department: "bath-and-body-works"
  },

  // 16. Rose fine fragrance mist 236 ml ( 800 bdl 1095 )
  {
    id: "bbw-rose-mist-236",
    brand: "Bath & Body Works",
    name: "Rose Fine Fragrance Mist 236 ml",
    nameAr: "روز - معطر فاخر للجسم 236 مل",
    category: "bath-and-body-works",
    gender: "women",
    concentration: "Fine Fragrance Mist",
    size: "236 ml",
    availableSizes: ["236 ml"],
    price: 800,
    originalPrice: 1095,
    discount: "27%",
    rating: 4.9,
    reviewsCount: 205,
    isBestSeller: true,
    isNew: true,
    inStock: true,
    sku: "BBW-ROSE-MIST-236",
    image: "/bath-and-body-works/rose-fine-fragrance-mist-236-ml.jpg",
    secondaryImage: "/bath-and-body-works/rose-body-wash-295-ml.jpg",
    shortDescEn: "A clean, playful, light blend of airy rose water, jasmine petals and creamy musk.",
    shortDescAr: "عطر رومانسي أنيق يعبر عن الأنوثة الرقيقة بنفحات ماء الورد المنعش والياسمين والمسك الكريمي.",
    descriptionEn: "Rose Fine Fragrance Mist creates a soft, delicate aura of blooming florals that stays with you all day.",
    descriptionAr: "معطر الجسم روز يمنحك هالة عطرية ساحرة ورقيقة من بتلات الورد الطبيعي التي تنبض بالنعومة والنقاء.",
    notes: {
      topEn: "Airy Rose Water, Peony",
      topAr: "ماء الورد المنعش، بيوني",
      heartEn: "Jasmine Petals, Fresh Air",
      heartAr: "بتلات الياسمين، نسيم الصباح",
      baseEn: "Creamy Musk, Light Amber",
      baseAr: "مسك كريمي، عنبر خفيف"
    },
    longevity: "6-8 Hours",
    sillage: "Delicate & Romantic",
    department: "bath-and-body-works"
  },

  // 17. Dark kiss body wash 88 ml ( 400 bdl 495 ) mini
  {
    id: "bbw-dark-kiss-wash-88-mini",
    brand: "Bath & Body Works",
    name: "Dark Kiss Body Wash 88 ml (Mini)",
    nameAr: "دارك كيس - غسول مرطب للجسم 88 مل ميني",
    category: "bath-and-body-works",
    gender: "women",
    concentration: "Travel Size Body Wash",
    size: "88 ml",
    availableSizes: ["88 ml"],
    price: 400,
    originalPrice: 495,
    discount: "19%",
    rating: 4.8,
    reviewsCount: 130,
    isBestSeller: false,
    isNew: true,
    inStock: true,
    sku: "BBW-DK-BW-88",
    image: "/bath-and-body-works/dark-kiss-body-wash-88-ml.jpg",
    secondaryImage: "/bath-and-body-works/dark-kiss-shower-gel-295-ml.jpg",
    shortDescEn: "Travel-friendly mini size of the seductive black raspberry and dark vanilla plum body wash.",
    shortDescAr: "حجم ميني عملي مناسب للحقيبة والسفر من غسول دارك كيس الشهير بالتوت الأسود والفانيليا الداكنة.",
    descriptionEn: "Take seductive luxury everywhere. 88ml travel-size body wash infused with Aloe and Vitamin E.",
    descriptionAr: "غسول دارك كيس بحجم 88 مل ميني مثالي للسفر، ينظف بشرتك بعناية ويغمرها بعبير غامض وجذاب.",
    notes: {
      topEn: "Black Raspberry, Mirabelle Plum",
      topAr: "توت أسود، برقوق ميرابيل",
      heartEn: "Burgundy Rose, Dark Vanilla",
      heartAr: "ورد جوري، فانيليا داكنة",
      baseEn: "Bergamot Incense, Amber Musk",
      baseAr: "بخور البرغموت، مسك عنبري"
    },
    longevity: "All-Day Freshness",
    sillage: "Sensual & Seductive",
    department: "bath-and-body-works"
  },

  // 18. Japanese cherry blossom body wash 88 ml ( 400 bdl 495 ) mini
  {
    id: "bbw-japanese-cherry-blossom-wash-88-mini",
    brand: "Bath & Body Works",
    name: "Japanese Cherry Blossom Body Wash 88 ml (Mini)",
    nameAr: "جابانيز تشيري بلوسوم - غسول للجسم 88 مل ميني",
    category: "bath-and-body-works",
    gender: "women",
    concentration: "Travel Size Body Wash",
    size: "88 ml",
    availableSizes: ["88 ml"],
    price: 400,
    originalPrice: 495,
    discount: "19%",
    rating: 4.9,
    reviewsCount: 162,
    isBestSeller: false,
    isNew: true,
    inStock: true,
    sku: "BBW-JCB-BW-88",
    image: "/bath-and-body-works/japanese-cherry-blossom-body-wash-88-ml.jpg",
    secondaryImage: "/bath-and-body-works/japanese-cherry-blossom-body-wash-295-ml.jpg",
    shortDescEn: "Compact travel mini of the world's most iconic cherry blossom, pear, and sandalwood body wash.",
    shortDescAr: "حجم ميني 88 مل من الغسول الأيقوني الأشهر بأزهار الكرز الياباني والكمثرى وخشب الصندل.",
    descriptionEn: "Perfect for on-the-go luxury. Cleanses and softens your skin with nourishing Pro-Vitamin B5 and Aloe.",
    descriptionAr: "غسول جابانيز تشيري بلوسوم بحجم 88 مل ميني، رفيقك المثالي في السفر لنعومة وانتعاش لا ينقطعان.",
    notes: {
      topEn: "Asian Pear, Fuji Apple",
      topAr: "كمثرى آسيوية، تفاح فوجي",
      heartEn: "Japanese Cherry Blossom, Mimosa",
      heartAr: "أزهار الكرز، ميموزا",
      baseEn: "Kyoto Sandalwood, Vanilla Rice",
      baseAr: "صندل كيوتو، فانيليا ناعمة"
    },
    longevity: "All-Day Freshness",
    sillage: "Iconic & Timeless",
    department: "bath-and-body-works"
  },

  // 19. Into the night body wash 88 ml ( 400 bdl 495 ) mini
  {
    id: "bbw-into-the-night-wash-88-mini",
    brand: "Bath & Body Works",
    name: "Into the Night Body Wash 88 ml (Mini)",
    nameAr: "إنتو ذا نايت - غسول مرطب للجسم 88 مل ميني",
    category: "bath-and-body-works",
    gender: "women",
    concentration: "Travel Size Body Wash",
    size: "88 ml",
    availableSizes: ["88 ml"],
    price: 400,
    originalPrice: 495,
    discount: "19%",
    rating: 5.0,
    reviewsCount: 195,
    isBestSeller: true,
    isNew: true,
    inStock: true,
    sku: "BBW-ITN-BW-88",
    image: "/bath-and-body-works/into-the-night-body-wash-88-ml.jpg",
    secondaryImage: "/bath-and-body-works/into-the-night-fine-fragrance-mist-75-ml.jpg",
    shortDescEn: "Travel-size mini of the alluring night-out blend of dark berries, midnight jasmine and rich amber.",
    shortDescAr: "حجم ميني فاخر 88 مل من غسول إنتو ذا نايت الساحر بالتوت الداكن وياسمين الليل والعنبر الغني.",
    descriptionEn: "Into the Night Body Wash in a convenient 88ml travel bottle cleanses gently while draping your skin in sensual fragrance.",
    descriptionAr: "غسول إنتو ذا نايت ميني 88 مل ينظف البشرة برغوة غنية تفيض بالجاذبية والفخامة في كل رحلة.",
    notes: {
      topEn: "Dark Berries, Red Currant",
      topAr: "توت داكن، كشمش أحمر",
      heartEn: "Midnight Jasmine, Rose Petals",
      heartAr: "ياسمين منتصف الليل، بتلات الورد",
      baseEn: "Rich Amber, Mocha Musk",
      baseAr: "عنبر دافئ، مسك الموكا"
    },
    longevity: "All-Day Freshness",
    sillage: "Sensual & Bold",
    department: "bath-and-body-works"
  },

  // 20. Into the night body lotion 88 ml ( 400 bdl 495 ) mini
  {
    id: "bbw-into-the-night-lotion-88-mini",
    brand: "Bath & Body Works",
    name: "Into the Night Daily Nourishing Body Lotion 88 ml (Mini)",
    nameAr: "إنتو ذا نايت - لوشن مرطب للجسم 88 مل ميني",
    category: "bath-and-body-works",
    gender: "women",
    concentration: "Travel Size Daily Nourishing Body Lotion",
    size: "88 ml",
    availableSizes: ["88 ml"],
    price: 400,
    originalPrice: 495,
    discount: "19%",
    rating: 4.9,
    reviewsCount: 180,
    isBestSeller: true,
    isNew: true,
    inStock: true,
    sku: "BBW-ITN-LOT-88",
    image: "/bath-and-body-works/into-the-night-body-lotion-88-ml.jpg",
    secondaryImage: "/bath-and-body-works/into-the-night-body-lotion-236-ml.jpg",
    shortDescEn: "24-hour moisture in an 88ml travel size, featuring dark berries, midnight jasmine and amber.",
    shortDescAr: "لوشن مرطب بحجم ميني 88 مل يوفر ترطيباً مستمراً لمدة 24 ساعة بعبير التوت البري والياسمين الليلي.",
    descriptionEn: "Infused with shea butter and coconut oil, this travel lotion absorbs quickly to leave skin feeling soft and smooth.",
    descriptionAr: "لوشن إنتو ذا نايت ميني بزبدة الشيا وزيت جوز الهند يمتص سريعاً ليمنح بشرتك ترطيباً عميقاً وعطراً أنثوياً فاتناً.",
    notes: {
      topEn: "Dark Berries, Red Currant",
      topAr: "توت داكن، كشمش أحمر",
      heartEn: "Midnight Jasmine, Rose Petals",
      heartAr: "ياسمين منتصف الليل، بتلات الورد",
      baseEn: "Rich Amber, Mocha Musk",
      baseAr: "عنبر دافئ، مسك الموكا"
    },
    longevity: "24-Hour Moisture",
    sillage: "Sensual & Bold",
    department: "bath-and-body-works"
  },

  // 21. Japanese cherry blossom body lotion 88 ml ( 400 bdl 495 ) mini
  {
    id: "bbw-japanese-cherry-blossom-lotion-88-mini",
    brand: "Bath & Body Works",
    name: "Japanese Cherry Blossom Daily Nourishing Body Lotion 88 ml (Mini)",
    nameAr: "جابانيز تشيري بلوسوم - لوشن مرطب للجسم 88 مل ميني",
    category: "bath-and-body-works",
    gender: "women",
    concentration: "Travel Size Daily Nourishing Body Lotion",
    size: "88 ml",
    availableSizes: ["88 ml"],
    price: 400,
    originalPrice: 495,
    discount: "19%",
    rating: 4.9,
    reviewsCount: 170,
    isBestSeller: false,
    isNew: true,
    inStock: true,
    sku: "BBW-JCB-LOT-88",
    image: "/bath-and-body-works/japanese-cherry-blossom-body-lotion-88-ml.jpg",
    secondaryImage: "/bath-and-body-works/japanese-cherry-blossom-body-lotion-236-m.jpg",
    shortDescEn: "Classic cherry blossom, Asian pear, and sandalwood lotion in a compact 88ml travel companion.",
    shortDescAr: "لوشن مرطب بحجم 88 مل ميني يجمع بين عبير أزهار الكرز والكمثرى الآسيوية وخشب الصندل.",
    descriptionEn: "Provides 24 hours of nourishing moisture with vitamin E and shea butter, perfectly sized for your purse or luggage.",
    descriptionAr: "لوشن جابانيز تشيري بلوسوم ميني يمنحك ترطيباً يدوم 24 ساعة بنعومة حريرية في عبوة ملائمة للتنقل.",
    notes: {
      topEn: "Asian Pear, Fuji Apple",
      topAr: "كمثرى آسيوية، تفاح فوجي",
      heartEn: "Japanese Cherry Blossom, Mimosa",
      heartAr: "أزهار الكرز الياباني، ميموزا",
      baseEn: "Kyoto Sandalwood, Vanilla Rice",
      baseAr: "خشب صندل كيوتو، فانيليا ناعمة"
    },
    longevity: "24-Hour Moisture",
    sillage: "Iconic & Timeless",
    department: "bath-and-body-works"
  },

  // 22. Fairytale fine fragrance mist 236 ml ( 800 bdl 1095 )
  {
    id: "bbw-fairytale-mist-236",
    brand: "Bath & Body Works",
    name: "Fairytale Fine Fragrance Mist 236 ml",
    nameAr: "فيريتيل - معطر فاخر للجسم 236 مل",
    category: "bath-and-body-works",
    gender: "women",
    concentration: "Fine Fragrance Mist",
    size: "236 ml",
    availableSizes: ["236 ml"],
    price: 800,
    originalPrice: 1095,
    discount: "27%",
    rating: 4.9,
    reviewsCount: 228,
    isBestSeller: true,
    isNew: true,
    inStock: true,
    sku: "BBW-FT-MIST-236",
    image: "/bath-and-body-works/fairytale-fine-fragrance-mist-236-ml.jpg",
    secondaryImage: "/bath-and-body-works/fairytale-body-lotion-236-ml.jpg",
    shortDescEn: "A magical, enchanting blend of pomegranate nectar, fresh orange blossom, vanilla and warm amber.",
    shortDescAr: "مزيج ساحر مستوحى من القصص الخيالية: رحيق الرمان، وزهر البرتقال النقي، والفانيليا والعنبر الدافئ.",
    descriptionEn: "Write your own magical story. Fairytale Fine Fragrance Mist wraps you in an intoxicating, fairy-tale fantasy of sweetness and warmth.",
    descriptionAr: "معطر الجسم فيريتيل ينقلك إلى عالم خيالي حالم بتوليفة فريدة من أزهار البرتقال والرمان التي تفيض بالسحر والأنوثة.",
    notes: {
      topEn: "Pomegranate Nectar, Fresh Orange Blossom",
      topAr: "رحيق الرمان، زهر البرتقال المنعش",
      heartEn: "Vanilla Bean, Night Jasmine",
      heartAr: "فانيليا نقية، ياسمين الليل",
      baseEn: "Warm Amber, Cashmere Musk",
      baseAr: "عنبر دافئ، مسك الكشمير"
    },
    longevity: "8-10 Hours",
    sillage: "Magical & Enchanting",
    department: "bath-and-body-works"
  },

  // 23. Forever red fine fragrance mist 236 ml ( 800 bdl 1095 )
  {
    id: "bbw-forever-red-mist-236",
    brand: "Bath & Body Works",
    name: "Forever Red Fine Fragrance Mist 236 ml",
    nameAr: "فوريفر ريد - معطر فاخر للجسم 236 مل",
    category: "bath-and-body-works",
    gender: "women",
    concentration: "Fine Fragrance Mist",
    size: "236 ml",
    availableSizes: ["236 ml"],
    price: 800,
    originalPrice: 1095,
    discount: "27%",
    rating: 5.0,
    reviewsCount: 315,
    isBestSeller: true,
    isNew: true,
    inStock: true,
    sku: "BBW-FR-MIST-236",
    image: "/bath-and-body-works/forever-red-fine-fragrance-mist-236-ml.jpg",
    secondaryImage: "/bath-and-body-works/forever-red-fine-fragrance-mist-236-ml.jpg",
    shortDescEn: "A passionate, luxurious blend of fiery pomegranate, red peony, night-blooming marigold and vanilla rum.",
    shortDescAr: "عطر الشغف والفخامة المطلقة: مزيج متقد من الرمان الناري، والبيوني الأحمر، وفانيليا الروم الخشبية.",
    descriptionEn: "The most luxurious fragrance ever created by Bath & Body Works. Forever Red is bold, passionate, and unforgettable.",
    descriptionAr: "العطر الأيقوني الأكثر ترفاً وجاذبية؛ فوريفر ريد يعبر عن المرأة الجريئة والواثقة بنفحات غنية تدوم لساعات طويلة.",
    notes: {
      topEn: "Fiery Pomegranate, Rare Peach, Apple",
      topAr: "رمان ناري، خوخ نادر، تفاح أحمر",
      heartEn: "Red Peony, Night Marigold, Osmanthus",
      heartAr: "بيوني أحمر، مخملية ليلية، أوسمانثوس",
      baseEn: "Vanilla Rum, Oak Wood, Marshmallow",
      baseAr: "فانيليا الروم، خشب البلوط، مارشميلو"
    },
    longevity: "8-10 Hours",
    sillage: "Passionate & Luxurious",
    department: "bath-and-body-works"
  },

  // 24. Pink chiffon fine fragrance mist 236 ml ( 800 bdl 1095 )
  {
    id: "bbw-pink-chiffon-mist-236",
    brand: "Bath & Body Works",
    name: "Pink Chiffon Fine Fragrance Mist 236 ml",
    nameAr: "بينك شيفون - معطر فاخر للجسم 236 مل",
    category: "bath-and-body-works",
    gender: "women",
    concentration: "Fine Fragrance Mist",
    size: "236 ml",
    availableSizes: ["236 ml"],
    price: 800,
    originalPrice: 1095,
    discount: "27%",
    rating: 4.8,
    reviewsCount: 185,
    isBestSeller: true,
    isNew: true,
    inStock: true,
    sku: "BBW-PC-MIST-236",
    image: "/bath-and-body-works/pink-chiffon-fine-fragrance-mist-236-ml.jpg",
    secondaryImage: "/bath-and-body-works/pink-chiffon-fine-fragrance-mist-236-ml.jpg",
    shortDescEn: "An ultra-feminine, playful blend of sparkling red pear, vanilla orchid, and whipped chiffon musk.",
    shortDescAr: "نفحات أنثوية حالمة ومبهجة تمزج بين الكمثرى الحمراء المتلألئة، وأوركيد الفانيليا، ومسك الشيفون المخفوق.",
    descriptionEn: "Light as silk and sweet as sugar. Pink Chiffon Fine Fragrance Mist drapes your senses in flirtatious, airy sweetness.",
    descriptionAr: "معطر الجسم بينك شيفون ينساب على بشرتك برقة الحرير ونعومة الفانيليا والزهور الوردية لإطلالة ساحرة ومرحة.",
    notes: {
      topEn: "Sparkling Red Pear, Peach Nectar, Wild Berries",
      topAr: "كمثرى حمراء فوارة، رحيق الخوخ، توت بري",
      heartEn: "Vanilla Orchid, Pink Lily, Jasmine",
      heartAr: "أوركيد الفانيليا، زنبق وردي، ياسمين",
      baseEn: "Whipped Chiffon Musk, Sandalwood, Vanilla",
      baseAr: "مسك الشيفون، خشب الصندل، فانيليا دافئة"
    },
    longevity: "6-8 Hours",
    sillage: "Sweet & Airy",
    department: "bath-and-body-works"
  }
];

// Load existing products
const backendPath = path.join(__dirname, '..', 'backend', 'data', 'products.json');
const frontendPath = path.join(__dirname, '..', 'src', 'data', 'products.js');

let products = JSON.parse(fs.readFileSync(backendPath, 'utf-8'));

// Filter out any of these 24 if already added
const newIds = new Set(NEW_24_PRODUCTS.map(p => p.id));
products = products.filter(p => !newIds.has(p.id));

// Append new products
products.push(...NEW_24_PRODUCTS);

// Write to backend products.json
fs.writeFileSync(backendPath, JSON.stringify(products, null, 2), 'utf-8');

// Write to frontend products.js
const jsContent = `export const PRODUCTS = ${JSON.stringify(products, null, 2)};\n\nexport const getProductById = (id) => PRODUCTS.find((p) => p.id === id);\n`;
fs.writeFileSync(frontendPath, jsContent, 'utf-8');

console.log(`Successfully added all 24 Bath & Body Works products!`);
const bbwTotal = products.filter(p => p.category === 'bath-and-body-works' || p.brand === 'Bath & Body Works').length;
console.log(`Total Bath & Body Works products: ${bbwTotal}`);
console.log(`Total Catalog size: ${products.length} products.`);

