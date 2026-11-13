const fs = require('fs');
const path = require('path');

const backendPath = path.join(__dirname, '..', 'backend', 'data', 'products.json');
const frontendPath = path.join(__dirname, '..', 'src', 'data', 'products.js');

const NEW_PERFUMES = [
  // 1. In Love (Laverne)
  {
    id: "laverne-in-love",
    brand: "Laverne",
    name: "In Love Eau de Parfum",
    nameAr: "إن لاف - لافيرن",
    category: "women",
    gender: "women",
    concentration: "Eau de Parfum",
    size: "200 ml",
    availableSizes: ["200 ml", "30 ml", "12 ml", "5 ml"],
    price: 2400,
    originalPrice: 2800,
    sizePrices: {
      "200 ml": 2400,
      "30 ml": 600,
      "12 ml": 250,
      "5 ml": 150
    },
    discount: "14%",
    rating: 5.0,
    reviewsCount: 230,
    isBestSeller: true,
    isNew: true,
    inStock: true,
    sku: "LAV-INL-200",
    image: "/perfumes/in-love-laverne.jpg",
    secondaryImage: "/perfumes/in-love-laverne.jpg",
    shortDescEn: "A romantic, intoxicating aura of blooming pink roses, sweet lychee, velvety peony, and warm vanilla.",
    shortDescAr: "سحر الرومانسية الفاتنة بتوليفة مبهجة من الورد الوردي والبيوني المخملي مع الليتشي والفانيليا الناعمة.",
    descriptionEn: "In Love by Laverne encapsulates tender passion and modern femininity. A sparkling burst of lychee and soft rose opens into a heart of lush peonies, anchored by creamy vanilla and silky musks.",
    descriptionAr: "عطر إن لاف من لافيرن يجسد مشاعر الشغف والأنوثة الساحرة. يفتتح بنفحات منعشة من الورد وليتشي الفواكه، مع قلب زهري غني ببتلات البيوني وقاعدة دافئة من المسك الحريري وفانيليا البوربون.",
    notes: {
      topEn: "Pink Rose, Sweet Lychee, Wild Berries",
      topAr: "ورد وردي، ليتشي سكري، توت بري",
      heartEn: "Lush Peony, Star Jasmine, Cotton Candy",
      heartAr: "بيوني متفتحة، ياسمين النجوم، غزل البنات",
      baseEn: "Bourbon Vanilla, White Amber, Silky Musk",
      baseAr: "فانيليا بوربون، عنبر أبيض، مسك حريري"
    },
    longevity: "10-12 Hours",
    sillage: "Romantic & Captivating",
    department: "perfume"
  },

  // 2. Bella (Laverne)
  {
    id: "laverne-bella",
    brand: "Laverne",
    name: "Bella Eau de Parfum",
    nameAr: "بيلا - لافيرن",
    category: "women",
    gender: "women",
    concentration: "Eau de Parfum",
    size: "200 ml",
    availableSizes: ["200 ml", "30 ml", "12 ml", "5 ml"],
    price: 2400,
    originalPrice: 2800,
    sizePrices: {
      "200 ml": 2400,
      "30 ml": 600,
      "12 ml": 250,
      "5 ml": 150
    },
    discount: "14%",
    rating: 4.9,
    reviewsCount: 195,
    isBestSeller: true,
    isNew: true,
    inStock: true,
    sku: "LAV-BEL-200",
    image: "/perfumes/bella-laverne.jpg",
    secondaryImage: "/perfumes/bella-laverne.jpg",
    shortDescEn: "A sophisticated, hypnotic blend of ripe blackberries, French lavender, soft violet and cashmere woods.",
    shortDescAr: "توليفة ملكية غامضة تجمع بين التوت الأسود الناضج، والخزامى الفرنسية، وزهور البنفسج وأخشاب الكشمير.",
    descriptionEn: "Bella by Laverne is an ode to regal allure and timeless poise. Dark juicy berries intertwine with velvety lavender petals and warm cashmere amber.",
    descriptionAr: "عطر بيلا من لافيرن يقدم تجربة عطرية أرستقراطية تفيض بالجاذبية من خلال التوت البري الداكن ونقاء الخزامى الفرنسية مع لمسات الكشمير والعنبر الدافئ.",
    notes: {
      topEn: "Ripe Blackberries, Wild Blueberry, Bergamot",
      topAr: "توت أسود ناضج، بلوبيري بري، برغموت صقلي",
      heartEn: "French Lavender, Night Violet, Jasmine",
      heartAr: "خزامى فرنسية، بنفسج ليلي، ياسمين",
      baseEn: "Cashmere Wood, Warm Amber, Sensual Musk",
      baseAr: "خشب الكشمير، عنبر دافئ، مسك جذاب"
    },
    longevity: "10-12 Hours",
    sillage: "Hypnotic & Luxurious",
    department: "perfume"
  },

  // 3. Boom Blue (Assaf)
  {
    id: "assaf-boom-blue",
    brand: "Assaf Perfumes",
    name: "Boom Blue Eau de Parfum",
    nameAr: "بوم بلو - عساف",
    category: "men",
    gender: "unisex",
    concentration: "Eau de Parfum",
    size: "200 ml",
    availableSizes: ["200 ml", "30 ml", "12 ml", "5 ml"],
    price: 2400,
    originalPrice: 2800,
    sizePrices: {
      "200 ml": 2400,
      "30 ml": 550,
      "12 ml": 260,
      "5 ml": 150
    },
    discount: "14%",
    rating: 5.0,
    reviewsCount: 340,
    isBestSeller: true,
    isNew: true,
    inStock: true,
    sku: "ASF-BBLU-200",
    image: "/perfumes/boom-blue-assaf.jpg",
    secondaryImage: "/perfumes/boom-blue-assaf.jpg",
    shortDescEn: "An explosive surge of cool oceanic waters, crisp green apple, white jasmine and mineral amber.",
    shortDescAr: "انفجار عطري منعش من نسيم المحيط البارد، والتفاح الأخضر المقرمش، والياسمين الأبيض والعنبر المعدني.",
    descriptionEn: "Boom Blue from the Arrogate Collection by Assaf delivers pure adrenaline and high-octane freshness. Oceanic waves crash over aromatic herbs and vibrant woods.",
    descriptionAr: "عطر بوم بلو من مجموعة أروجيت لدار عساف يمنحك طاقة لا نهائية وانتعاشاً بحرياً فائق النقاء يجمع بين أملاح البحر والياسمين والأخشاب العطرية.",
    notes: {
      topEn: "Cool Aquatic Accord, Crisp Green Apple, White Jasmine",
      topAr: "نفحات مائية مثلجة، تفاح أخضر، ياسمين أبيض",
      heartEn: "Crushed Ferns, Blue Sage, Geranium",
      heartAr: "أوراق السرخس الأخضر، مريمية زرقاء، إبرة الراعي",
      baseEn: "Oceanic Cedarwood, Ambroxan, Mineral Amber",
      baseAr: "خشب الأرز البحري، أمبروكسان، عنبر معدني"
    },
    longevity: "12+ Hours",
    sillage: "Explosive & Fresh",
    department: "perfume"
  },

  // 4. Wild Colt Boss (Assaf)
  {
    id: "assaf-wild-colt-boss",
    brand: "Assaf Perfumes",
    name: "Wild Colt Boss Eau de Parfum",
    nameAr: "وايلد كولت بوس - عساف",
    category: "men",
    gender: "men",
    concentration: "Eau de Parfum",
    size: "200 ml",
    availableSizes: ["200 ml", "30 ml", "12 ml", "5 ml"],
    price: 2400,
    originalPrice: 2800,
    sizePrices: {
      "200 ml": 2400,
      "30 ml": 550,
      "12 ml": 260,
      "5 ml": 150
    },
    discount: "14%",
    rating: 5.0,
    reviewsCount: 420,
    isBestSeller: true,
    isNew: true,
    inStock: true,
    sku: "ASF-WCB-200",
    image: "/perfumes/wild-colt-boss-assaf.jpg",
    secondaryImage: "/perfumes/wild-colt-boss-assaf.jpg",
    shortDescEn: "Unapologetic leadership: sun-drenched citrus, wild cornflower, spiced cardamom, and smoked leather.",
    shortDescAr: "عطر الهيبة والقيادة المطلقة: حمضيات مشمسة، زهور الذرة البرية، هيل متبل، وقاعدة من الجلد المدخن الفاخر.",
    descriptionEn: "Wild Colt Boss from Assaf represents supreme confidence and authoritative charisma. Bright zesty opening meets the untamed raw power of smoked leather and amber woods.",
    descriptionAr: "عطر وايلد كولت بوس من عساف يجسد الحضور القيادي الطاغي. يمزج بين انتعاش الحمضيات الصقلية وسحر الهيل، مع قاعدة ذكورية مهيبة من الجلود الفاخرة وخشب الأرز.",
    notes: {
      topEn: "Sun-drenched Mandarin, Sicilian Lemon, Blue Cornflower",
      topAr: "يوسفي مشمس، ليمون صقلي، زهور الذرة الزرقاء",
      heartEn: "Spiced Cardamom, Wild Lavender, Haitian Vetiver",
      heartAr: "هيل متبل، خزامى برية، نجيل الهند الهايتي",
      baseEn: "Smoky Leather, Dark Ambergris, Cedarwood",
      baseAr: "جلد مدخن فاخر، عنبر الحوت الداكن، خشب الأرز"
    },
    longevity: "14+ Hours",
    sillage: "Dominant & Charismatic",
    department: "perfume"
  },

  // 5. Shift (Assaf)
  {
    id: "assaf-shift",
    brand: "Assaf Perfumes",
    name: "Shift Eau de Parfum",
    nameAr: "شيفت - عساف",
    category: "men",
    gender: "men",
    concentration: "Eau de Parfum",
    size: "100 ml",
    availableSizes: ["100 ml"],
    price: 2000,
    originalPrice: 2400,
    sizePrices: {
      "100 ml": 2000
    },
    discount: "17%",
    rating: 4.9,
    reviewsCount: 260,
    isBestSeller: true,
    isNew: true,
    inStock: true,
    sku: "ASF-SHF-100",
    image: "/perfumes/shift-assaf.jpg",
    secondaryImage: "/perfumes/shift-assaf.jpg",
    shortDescEn: "A dramatic shift into absolute freshness: glacial waterfalls, frozen grapefruit, and black rock vetiver.",
    shortDescAr: "تحول مذهل نحو الانتعاش الفائق: شلالات جليدية نقية، جريب فروت مثلج، مع نجيل الهند البركاني الأنيق.",
    descriptionEn: "Shift by Assaf (The Originals) creates an unstoppable wave of vitality. Cold mineral freshness surges forward against dark vetiver and modern incense.",
    descriptionAr: "عطر شيفت من عساف (الأصلي) ينبض بالحيوية والانتعاش العصري الحاد. يعكس قوة المياه الجارية فوق الصخور البركانية مع نفحات البخور والأخشاب العطرية النقية.",
    notes: {
      topEn: "Glacial Waterfall Accord, Icy Grapefruit, Pink Peppercorn",
      topAr: "ماء جليدي نقي، جريب فروت مثلج، فلفل وردي",
      heartEn: "Coastal Birch, French Lavender, Sheer Incense",
      heartAr: "خشب البتولا، خزامى فرنسية، بخور نقي",
      baseEn: "Black Rock Vetiver, Dark Patchouli, Grey Amber",
      baseAr: "نجيل الهند البركاني، باتشولي داكن، عنبر رمادي"
    },
    longevity: "12-14 Hours",
    sillage: "Crisp & Modern",
    department: "perfume"
  }
];

let products = JSON.parse(fs.readFileSync(backendPath, 'utf-8'));

// Filter out if already exists
const newIds = new Set(NEW_PERFUMES.map(p => p.id));
products = products.filter(p => !newIds.has(p.id));

// Put the new perfumes right after existing perfumes, before Bath & Body Works
const perfumes = products.filter(p => p.category !== 'bath-and-body-works' && p.brand !== 'Bath & Body Works');
const bbw = products.filter(p => p.category === 'bath-and-body-works' || p.brand === 'Bath & Body Works');

const allProducts = [...perfumes, ...NEW_PERFUMES, ...bbw];

fs.writeFileSync(backendPath, JSON.stringify(allProducts, null, 2), 'utf-8');

const jsContent = `export const PRODUCTS = ${JSON.stringify(allProducts, null, 2)};\n\nexport const getProductById = (id) => PRODUCTS.find((p) => p.id === id);\n`;
fs.writeFileSync(frontendPath, jsContent, 'utf-8');

console.log(`Successfully added ${NEW_PERFUMES.length} new perfumes!`);
console.log(`Total perfumes: ${perfumes.length + NEW_PERFUMES.length}`);
console.log(`Total BBW: ${bbw.length}`);
console.log(`Total catalog: ${allProducts.length}`);

