export const translations = {
  en: {
    brand: {
      name: "Scentora",
      tagline: "Your Scent. Your Identity.",
      description: "Premium perfumes, Bath & Body Works, and exceptional quality. Discover your signature scent with Scentora."
    },
    announcements: [
      { text: "Free Shipping on Orders Over 3,000 EGP (100 EGP Flat Rate)", icon: "truck" },
      { text: "100% Authentic Products", icon: "shield" },
      { text: "Fast & Secure Delivery Across Egypt", icon: "truck" },
      { text: "Exclusive Offers & Discounts", icon: "sparkles" }
    ],
    nav: {
      home: "Home",
      perfume: "Perfume",
      bathAndBody: "Bath & Body Works",
      men: "Men",
      women: "Women",
      unisex: "Unisex",
      giftSets: "Gift Sets",
      bestSellers: "Best Sellers",
      brands: "Brands",
      about: "About",
      contact: "Contact",
      faq: "FAQs",
      shopAll: "Shop All",
      searchPlaceholder: "Search perfumes, mists, body care...",
      cart: "Cart",
      wishlist: "Wishlist",
      account: "Account",
      language: "Language",
      theme: "Theme"
    },
    hero: {
      eyebrow: "DISCOVER YOUR SIGNATURE SCENT",
      title: "Fragrances That Define You",
      description: "Premium perfumes for every mood, occasion, and personality. Explore a world of authentic fragrances from top global brands.",
      ctaShop: "Shop Now",
      ctaExplore: "Explore Collections",
      benefits: [
        "100% Authentic",
        "Shipping 100 EGP (Free over 3,000 EGP)",
        "Luxury Gift Packaging",
        "Fast & Secure Delivery"
      ]
    },
    categories: {
      title: "Explore by Category",
      items: [
        { id: "perfume", name: "Perfume", count: "38 Fragrances", path: "/shop?category=perfume" },
        { id: "bath-and-body-works", name: "Bath & Body Works", count: "62 Products", path: "/shop?category=bath-and-body-works" },
        { id: "women", name: "Women's Collection", count: "Exclusive Scents", path: "/shop?gender=women" }
      ]
    },
    collectionBanners: [
      {
        id: "women",
        tag: "COLLECTION",
        title: "WOMEN'S COLLECTION",
        description: "Elegant. Feminine. Timeless.",
        cta: "Shop Women",
        link: "/shop?gender=women"
      },
      {
        id: "bath-and-body-works",
        tag: "BODY CARE",
        title: "BATH & BODY WORKS",
        description: "America's Beloved Mists & Lotions.",
        cta: "Shop Bath & Body",
        link: "/shop?category=bath-and-body-works"
      },
      {
        id: "perfume",
        tag: "SIGNATURE SCENTS",
        title: "PERFUME COLLECTION",
        description: "Pure Luxury. Lasting Impressions.",
        cta: "Shop Perfumes",
        link: "/shop?category=perfume"
      }
    ],
    bestSellers: {
      title: "Best Selling Perfumes",
      subtitle: "The most coveted signature scents chosen by perfume connoisseurs worldwide",
      viewAll: "View All",
      filterAll: "All",
      filterMen: "Men",
      filterWomen: "Women",
      filterUnisex: "Unisex",
      filterNiche: "Luxury Niche",
      filterArabic: "Arabic Oud"
    },
    productCard: {
      addToCart: "ADD TO CART",
      added: "ADDED",
      quickView: "Quick View",
      inStock: "In Stock",
      authentic: "100% Authentic",
      save: "SAVE",
      off: "OFF",
      reviews: "reviews"
    },
    promoBanners: {
      giftSets: {
        tag: "CURATED SELECTION",
        title: "GIFT SETS",
        subtitle: "Perfect Fragrances for Every Occasion",
        cta: "Shop Gift Sets",
        link: "/shop?category=gift-sets"
      },
      exclusiveOffers: {
        tag: "EXCLUSIVE OFFERS",
        title: "Up to 50% OFF",
        subtitle: "On Selected Fragrances",
        cta: "Shop Sale",
        link: "/shop?filter=sale"
      }
    },
    whyChooseUs: {
      title: "Why Choose Scentora",
      subtitle: "The gold standard of luxury perfume shopping with unmatched authenticity and service",
      items: [
        {
          title: "Top Global Brands",
          desc: "All your favorites in one place with guaranteed origin."
        },
        {
          title: "Long-Lasting Scents",
          desc: "High concentration Eau de Parfum & Extrait formulations."
        },
        {
          title: "Perfect for Gifting",
          desc: "Complimentary luxury gift wrapping and personalized cards."
        },
        {
          title: "24/7 Customer Support",
          desc: "Expert fragrance consultants ready to assist you anytime."
        }
      ]
    },
    reviews: {
      tag: "TESTIMONIALS",
      title: "What Our Customers Say",
      subtitle: "Real stories from fragrance lovers who found their signature with Scentora",
      verified: "Verified Buyer",
      items: [
        {
          quote: "Absolutely love the fragrance! Authentic product and fast delivery. Will definitely shop again.",
          author: "Sarah M.",
          location: "New York, USA",
          rating: 5,
          purchased: "Bleu de Chanel EDP"
        },
        {
          quote: "Great collection and excellent service. The perfume quality is amazing and long-lasting.",
          author: "James K.",
          location: "London, UK",
          rating: 5,
          purchased: "Creed Aventus EDP"
        },
        {
          quote: "Beautiful packaging and genuine products. Highly recommend Scentora for luxury gifting!",
          author: "Priya S.",
          location: "Dubai, UAE",
          rating: 5,
          purchased: "Dior J'adore EDP"
        }
      ]
    },
    footer: {
      quickLinksTitle: "QUICK LINKS",
      customerCareTitle: "CUSTOMER CARE",
      contactTitle: "CONTACT US",
      newsletterTitle: "Subscribe to Our Newsletter",
      newsletterDesc: "Get exclusive offers, new arrivals, and fragrance tips.",
      emailPlaceholder: "Enter your email address",
      subscribeBtn: "SUBSCRIBE",
      subscribeSuccess: "Thank you for subscribing to Scentora Club.",
      rights: "All Rights Reserved.",
      privacy: "Privacy Policy",
      terms: "Terms & Conditions",
      shippingPolicy: "Shipping Policy",
      contactInfo: {
        address: "742 Fifth Avenue, Luxury Fragrance Row, New York & Boulevard de la Croisette, Cannes",
        phone: "+1 (800) 845-SPEC / +971 4 398 0000",
        email: "concierge@scentora.com",
        hours: "Mon – Sat: 9:00 AM – 9:00 PM EST"
      }
    },
    cart: {
      title: "Your Shopping Bag",
      emptyTitle: "Your shopping bag is empty",
      emptyDesc: "Explore our curated fragrance collection and discover your signature scent.",
      exploreBtn: "START SHOPPING",
      subtotal: "Subtotal",
      shipping: "Shipping",
      freeShipping: "FREE",
      total: "Total",
      freeShippingNote: "Free shipping unlocked on orders over 3,000 EGP!",
      awayFromFree: "Add {amount} more for FREE shipping (orders over 3,000 EGP)",
      checkoutBtn: "PROCEED TO CHECKOUT",
      clearCart: "Clear Bag",
      remove: "Remove",
      size: "Size",
      quantity: "Quantity"
    },
    wishlist: {
      title: "My Wishlist",
      emptyTitle: "Your wishlist is empty",
      emptyDesc: "Save your favorite perfumes and gift sets by tapping the heart icon on any product.",
      exploreBtn: "DISCOVER PERFUMES",
      moveToCart: "MOVE TO BAG"
    },
    checkout: {
      title: "Express Checkout",
      notice: "Demo Checkout — No real payment gateway will be charged.",
      shippingInfo: "Customer & Shipping Information",
      fullName: "Full Name",
      email: "Email Address",
      phone: "Phone Number",
      address: "Street Address / Apartment",
      city: "City / Emirate / State",
      country: "Country",
      postalCode: "Postal / ZIP Code",
      shippingMethod: "Delivery Method",
      standardShipping: "Delivery to All Governorates (100 EGP - Free over 3,000 EGP)",
      expressShipping: "VIP Express Courier Delivery (180 EGP, Within 24-48 Hours)",
      paymentMethod: "Payment Method (Demo)",
      cod: "Cash on Delivery",
      creditCard: "Credit / Debit Card (Visa, MasterCard, Amex)",
      applePay: "Apple Pay / Digital Wallet",
      orderSummary: "Order Summary",
      placeOrder: "PLACE ORDER NOW",
      successTitle: "Order Confirmed!",
      successMessage: "Thank you for shopping with Scentora. Your order #{orderNumber} has been received and will be packaged in our luxury gift wrap.",
      continueShopping: "Continue Shopping"
    },
    shopPage: {
      title: "All Fragrances & Perfumes",
      subtitle: "Discover iconic masterpieces and niche treasures from the world's most prestigious perfume houses.",
      filters: "Filters",
      sortBy: "Sort By",
      sortFeatured: "Featured",
      sortPriceAsc: "Price: Low to High",
      sortPriceDesc: "Price: High to Low",
      sortRating: "Highest Rated",
      sortBestSeller: "Best Sellers",
      filterCategory: "Category",
      filterGender: "Gender",
      filterBrand: "Brand",
      filterPrice: "Price Range",
      allBrands: "All Brands",
      clearFilters: "Reset Filters",
      showing: "Showing {count} fragrances",
      noResults: "No fragrances match your filters. Try clearing some selections."
    },
    productDetails: {
      home: "Home",
      shop: "Shop",
      brand: "House",
      concentration: "Concentration",
      sku: "SKU",
      size: "Select Size",
      quantity: "Quantity",
      addToCart: "ADD TO CART",
      addedToCart: "ADDED TO BAG",
      addToWishlist: "Add to Wishlist",
      removeFromWishlist: "In Wishlist",
      olfactoryPyramid: "Olfactory Architecture",
      topNotes: "Top Notes",
      heartNotes: "Heart Notes",
      baseNotes: "Base Notes",
      longevity: "Longevity",
      sillage: "Sillage",
      authenticityGuarantee: "100% Original Brand Guarantee",
      giftWrap: "Luxury Keepsake Gift Packaging",
      relatedTitle: "You May Also Like",
      reviewsTab: "Customer Reviews"
    },
    aboutPage: {
      eyebrow: "THE HOUSE OF SCENTORA",
      title: "Your Scent. Your Identity.",
      p1: "At Scentora, we believe fragrance is not merely an accessory — it is an invisible signature, an emotional memory, and an indelible statement of identity.",
      p2: "Founded with an unwavering dedication to authenticity, our curation spans royal French perfumeries, Italian artisanal ateliers, British heritage houses, and deeply evocative oriental oud masters.",
      values: [
        { title: "Uncompromising Authenticity", desc: "Every bottle sourced directly from authorized brand houses and master distributors." },
        { title: "Niche & Global Icons", desc: "From Creed and Dior to Amouage and BDK, curating the finest olfactory art." },
        { title: "Bespoke Packaging", desc: "Each order delivered in our signature velvet-lined presentation keepsake box." }
      ]
    },
    contactPage: {
      title: "Contact Concierge",
      subtitle: "Have a question about a fragrance or need personalized gifting advice? Our scent curators are here to assist.",
      name: "Your Name",
      email: "Your Email",
      subject: "Subject",
      message: "How can we assist you?",
      sendBtn: "SEND MESSAGE",
      sent: "Message sent successfully. A concierge will reply within 24 hours."
    },
    faqPage: {
      title: "Frequently Asked Questions",
      subtitle: "Everything you need to know about our authentic perfumes, delivery, and guarantees.",
      items: [
        {
          q: "Are all perfumes sold at Scentora 100% authentic?",
          a: "Yes, without exception. We partner exclusively with official distributors and certified fragrance houses. Every flacon carries verified batch codes and original sealings."
        },
        {
          q: "How does shipping and complimentary delivery work?",
          a: "Standard shipping is 100 EGP to all Egyptian governorates. Any order of 3,000 EGP or more automatically qualifies for 100% free tracked courier shipping."
        },
        {
          q: "Do you offer international shipping?",
          a: "We currently deliver across North America, Europe, the United Kingdom, and the GCC (UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, Oman) with expedited courier services."
        }
      ]
    }
  },

  ar: {
    brand: {
      name: "سنتورا (Scentora)",
      tagline: "عطرك.. بصمتك الخاصة.",
      description: "عطور أصلية فاخرة، ومنتجات باث آند بودي وركس الأصلية. اكتشف عطرك المميز مع سنتورا (Scentora)."
    },
    announcements: [
      { text: "شحن 100 ج.م لجميع المحافظات (مجاني للطلبات فوق 3,000 ج.م)", icon: "truck" },
      { text: "منتجات أصلية 100%", icon: "shield" },
      { text: "توصيل سريع وموثوق لكافة المحافظات", icon: "truck" },
      { text: "عروض وخصومات حصرية", icon: "sparkles" }
    ],
    nav: {
      home: "الرئيسية",
      perfume: "عطور (Perfume)",
      bathAndBody: "باث آند بودي وركس (Bath & Body Works)",
      men: "عطور رجالية",
      women: "عطور نسائية",
      unisex: "عطور للجنسين",
      giftSets: "أطقم الهدايا",
      bestSellers: "الأكثر مبيعاً",
      brands: "الماركات",
      about: "من نحن",
      contact: "اتصل بنا",
      faq: "الأسئلة الشائعة",
      shopAll: "جميع العطور",
      searchPlaceholder: "ابحث عن عطر، ميست، أو منتج عناية...",
      cart: "سلة التسوق",
      wishlist: "المفضلة",
      account: "حسابي",
      language: "اللغة",
      theme: "المظهر"
    },
    hero: {
      eyebrow: "اكتشف عطرك اللي بيعبر عنك",
      title: "عطور تُعرّف هويتك",
      description: "اكتشف عالم من العطور الأصلية الفاخرة، واختار العطر اللي يناسب شخصيتك ومناسباتك من أرقى بيوت العطور العالمية.",
      ctaShop: "تسوق الآن",
      ctaExplore: "اكتشف المجموعات",
      benefits: [
        "منتجات أصلية 100%",
        "شحن لجميع المحافظات 100 ج.م فقط (مجاني للطلبات فوق 3,000 ج.م)",
        "تغليف هدايا فاخر",
        "توصيل سريع لكافة المحافظات"
      ]
    },
    categories: {
      title: "تسوق حسب الفئة",
      items: [
        { id: "perfume", name: "عطور (Perfume)", count: "38 عطر أصلي", path: "/shop?category=perfume" },
        { id: "bath-and-body-works", name: "باث آند بودي وركس (Bath & Body Works)", count: "62 منتج فاخر", path: "/shop?category=bath-and-body-works" },
        { id: "women", name: "قسم النساء", count: "تشكيلة حصرية", path: "/shop?gender=women" }
      ]
    },
    collectionBanners: [
      {
        id: "women",
        tag: "مجموعة خاصة",
        title: "تشكيلة النساء",
        description: "أنوثة. رقة. سحر خالد.",
        cta: "تسوق للنساء",
        link: "/shop?gender=women"
      },
      {
        id: "bath-and-body-works",
        tag: "عناية بالجسم",
        title: "باث آند بودي وركس",
        description: "أشهر معطرات ولوشنات الجسم الأصلية.",
        cta: "تسوق باث آند بودي",
        link: "/shop?category=bath-and-body-works"
      },
      {
        id: "perfume",
        tag: "عطور أصلية",
        title: "تشكيلة العطور (Perfume)",
        description: "فخامة استثنائية وثبات يدوم طويلاً.",
        cta: "تسوق العطور",
        link: "/shop?category=perfume"
      }
    ],
    bestSellers: {
      title: "العطور الأكثر مبيعاً",
      subtitle: "العطور الأيقونية المفضلة لدى عشاق العطور حول العالم",
      viewAll: "عرض الكل",
      filterAll: "الكل",
      filterMen: "رجالي",
      filterWomen: "نسائي",
      filterUnisex: "للجنسين",
      filterNiche: "نيش فاخر",
      filterArabic: "عود وشرقي"
    },
    productCard: {
      addToCart: "أضف إلى السلة",
      added: "تمت الإضافة",
      quickView: "نظرة سريعة",
      inStock: "متوفر بالمخزون",
      authentic: "أصلي 100%",
      save: "وفر",
      off: "خصم",
      reviews: "تقييم"
    },
    promoBanners: {
      giftSets: {
        tag: "تشكيلات مختارة",
        title: "أطقم الهدايا الفاخرة",
        subtitle: "العطر المثالي لكل مناسبة ولحظة خاصة",
        cta: "تسوق أطقم الهدايا",
        link: "/shop?category=gift-sets"
      },
      exclusiveOffers: {
        tag: "عروض حصرية",
        title: "خصومات تصل إلى 50%",
        subtitle: "على تشكيلة مختارة من أرقى العطور",
        cta: "تسوق العروض",
        link: "/shop?filter=sale"
      }
    },
    whyChooseUs: {
      title: "لماذا تختار سنتورا (Scentora)؟",
      subtitle: "المعيار الذهبي لتسوق العطور الفاخرة مع ضمان الأصالة والخدمة الراقية",
      items: [
        {
          title: "أرقى الماركات العالمية",
          desc: "جميع عطرك المفضل تحت سقف واحد بضمان مصدر معتمد."
        },
        {
          title: "ثبات وفوحان يدوم",
          desc: "تركيزات عالية نقية من ماء العطر وخلاصات البارفام الأصلية."
        },
        {
          title: "تغليف هدايا ملكي",
          desc: "تغليف هدايا مجاني فاخر وبطاقات إهداء مخصصة بالاسم."
        },
        {
          title: "خدمة عملاء على مدار الساعة",
          desc: "خبراء عطور جاهزون دائماً لمساعدتك في اختيار عطرك المثالي."
        }
      ]
    },
    reviews: {
      tag: "آراء عملائنا",
      title: "ماذا يقول عملاؤنا الكرام",
      subtitle: "تجارب حقيقية من عشاق العطور الذين وجدوا بصمتهم الخاصة معنا",
      verified: "مشتري معتمد وموثق",
      items: [
        {
          quote: "عطر مذهل وقمة في الثبات والفوحان! المنتج أصلي 100% والتوصيل كان فائق السرعة. بالتأكيد سأطلب مجدداً.",
          author: "سارة م.",
          location: "الرياض، السعودية",
          rating: 5,
          purchased: "Bleu de Chanel EDP"
        },
        {
          quote: "تشكيلة رائعة وتغليف في قمة الفخامة. ثبات العطر يدوم أيام وخدمة العملاء محترفة جداً.",
          author: "جاسم ك.",
          location: "الكويت",
          rating: 5,
          purchased: "Creed Aventus EDP"
        },
        {
          quote: "تغليف ملكي مبهر وعطور أصلية ومضمونة. أنصح بشدة بموقع سنتورا لكل من يبحث عن عطر فخم كهدية!",
          author: "بريا س.",
          location: "دبي، الإمارات",
          rating: 5,
          purchased: "Dior J'adore EDP"
        }
      ]
    },
    footer: {
      quickLinksTitle: "روابط سريعة",
      customerCareTitle: "خدمة العملاء",
      contactTitle: "تواصل معنا",
      newsletterTitle: "اشترك في نشرتنا الخاصة",
      newsletterDesc: "احصل على عروض حصرية، وأحدث الإصدارات، ونصائح خبراء العطور.",
      emailPlaceholder: "أدخل بريدك الإلكتروني",
      subscribeBtn: "اشتراك",
      subscribeSuccess: "شكراً لاشتراكك في عالم سنتورا الخاص.",
      rights: "جميع الحقوق محفوظة.",
      privacy: "سياسة الخصوصية",
      terms: "الشروط والأحكام",
      shippingPolicy: "سياسة الشحن والتوصيل",
      contactInfo: {
        address: "برج العطور الفاخرة، شارع الشيخ زايد، دبي & الجادة الخامسة، نيويورك",
        phone: "+971 4 398 0000 / +1 (800) 845-SPEC",
        email: "concierge@scentora.com",
        hours: "السبت – الخميس: 9:00 ص – 9:00 م"
      }
    },
    cart: {
      title: "سلة التسوق",
      emptyTitle: "سلة التسوق فارغة حالياً",
      emptyDesc: "استكشف تشكيلاتنا العطرية الفاخرة واكتشف بصمتك العطرية الخاصة.",
      exploreBtn: "ابدأ التسوق الآن",
      subtotal: "المجموع الفرعي",
      shipping: "الشحن والتوصيل",
      freeShipping: "مجاناً",
      total: "المجموع الكلي",
      freeShippingNote: "مبروك! حصلت على شحن مجاني (طلبك تجاوز 3,000 ج.م)",
      awayFromFree: "أضف {amount} إضافية للحصول على شحن مجاني (فوق 3,000 ج.م)",
      checkoutBtn: "متابعة إتمام الطلب",
      clearCart: "إفراغ السلة",
      remove: "حذف",
      size: "الحجم",
      quantity: "الكمية"
    },
    wishlist: {
      title: "قائمة أمنياتي (المفضلة)",
      emptyTitle: "قائمتك المفضلة فارغة",
      emptyDesc: "احفظ عطورك المفضلة وأطقم الهدايا بالنقر على أيقونة القلب على أي منتج.",
      exploreBtn: "اكتشف العطور الآن",
      moveToCart: "نقل إلى سلة التسوق"
    },
    checkout: {
      title: "إتمام الطلب السريع",
      notice: "هذا نموذج تجريبي للدفع — لن يتم خصم أي مبالغ مالية حقيقية.",
      shippingInfo: "معلومات الشحن والتوصيل",
      fullName: "الاسم الكامل",
      email: "البريد الإلكتروني",
      phone: "رقم الهاتف / الجوال",
      address: "العنوان / الشارع / رقم المبنى",
      city: "المدينة / الإمارة / المحافظة",
      country: "الدولة",
      postalCode: "الرمز البريدي",
      shippingMethod: "طريقة التوصيل",
      standardShipping: "توصيل لكافة المحافظات (100 ج.م - مجاني فوق 3,000 ج.م)",
      expressShipping: "توصيل سريع خاص VIP (180 ج.م، خلال 24-48 ساعة)",
      paymentMethod: "طريقة الدفع (تجريبية)",
      cod: "الدفع عند الاستلام",
      creditCard: "بطاقة ائتمانية (فيزا، ماستركارد، مدى)",
      applePay: "آبل باي (Apple Pay)",
      orderSummary: "ملخص الطلب",
      placeOrder: "تأكيد وإتمام الطلب الآن",
      successTitle: "تم استلام طلبك بنجاح!",
      successMessage: "شكراً لتسوقك من سنتورا (Scentora). رقم طلبك هو #{orderNumber} وسيتم تغليفه بتغليف الهدايا الفاخر وإرساله إليك قريباً.",
      continueShopping: "متابعة التسوق"
    },
    shopPage: {
      title: "جميع العطور والمجموعات",
      subtitle: "اكتشف التحف العطرية الأيقونية وعطور النيش النادرة من أرقى دور العطور في العالم.",
      filters: "تصفية المنتجات",
      sortBy: "ترتيب حسب",
      sortFeatured: "المميز والمقترح",
      sortPriceAsc: "السعر: من الأقل للأعلى",
      sortPriceDesc: "السعر: من الأعلى للأقل",
      sortRating: "الأعلى تقييماً",
      sortBestSeller: "الأكثر طلباً ومبيعاً",
      filterCategory: "الفئة",
      filterGender: "النوع",
      filterBrand: "الماركة",
      filterPrice: "نطاق السعر",
      allBrands: "جميع الماركات",
      clearFilters: "إعادة ضبط الفلاتر",
      showing: "عرض {count} عطر",
      noResults: "لا توجد نتائج تطابق اختياراتك. جرب تخفيف الفلاتر أو البحث باسم آخر."
    },
    productDetails: {
      home: "الرئيسية",
      shop: "المتجر",
      brand: "دار العطور",
      concentration: "التركيز",
      sku: "رمز المنتج",
      size: "اختر الحجم",
      quantity: "الكمية",
      addToCart: "أضف إلى السلة",
      addedToCart: "تمت الإضافة للسلة",
      addToWishlist: "أضف للمفضلة",
      removeFromWishlist: "في المفضلة",
      olfactoryPyramid: "الهرم العطري والتكوين",
      topNotes: "القمة العطرية (افتتاحية العطر)",
      heartNotes: "قلب العطر",
      baseNotes: "قاعدة العطر",
      longevity: "درجة الثبات",
      sillage: "درجة الفوحان",
      authenticityGuarantee: "ضمان أصالة المنتج 100%",
      giftWrap: "تغليف هدايا ملكي فاخر ومحكم",
      relatedTitle: "عطور قد تنال إعجابك أيضاً",
      reviewsTab: "تقييمات وآراء المشترين"
    },
    aboutPage: {
      eyebrow: "دار سنتورا (SCENTORA)",
      title: "عطرك.. بصمتك الخاصة.",
      p1: "في سنتورا، نؤمن بأن العطر ليس مجرد لمسة تجميلية — بل هو توقيع غير مرئي، وذاكرة عاطفية، وهوية حقيقية تميزك أينما حللت.",
      p2: "تأسست دارنا بشغف لا يساوم على الأصالة، ونجمع لك بين عراقة دور العطور الفرنسية التاريخية، وإبداع بيوت العطور الإيطالية، وفخامة العود واللبان والزيوت الشرقية الأصيلة.",
      values: [
        { title: "أصالة مطلقة لا تقبل الشك", desc: "كل زجاجة عطر تأتي مباشرة من الوكلاء المعتمدين ودور العطور الأم." },
        { title: "أيقونات عالمية وعطور نيش نادرة", desc: "من كريد وديور إلى أمواج ومارشيلو، نختار لك قمم الإبداع العطري." },
        { title: "تغليف هدايا ملكي لا مثيل له", desc: "يصلك كل طلب داخل علبة هدايا فاخرة ومبطنة بالمخمل الأسود والشرائط الذهبية." }
      ]
    },
    contactPage: {
      title: "تواصل مع خدمة العملاء الخاصة",
      subtitle: "هل لديك استفسار حول عطر معين أو ترغب في نصيحة لاختيار هدية راقية؟ مستشارو العطور لدينا في خدمتك دائماً.",
      name: "الاسم الكريم",
      email: "البريد الإلكتروني",
      subject: "موضوع الرسالة",
      message: "كيف يمكننا مساعدتك؟",
      sendBtn: "إرسال الرسالة",
      sent: "تم إرسال رسالتك بنجاح! سيتواصل معك أحد خبرائنا خلال 24 ساعة."
    },
    faqPage: {
      title: "الأسئلة الأكثر تكراراً",
      subtitle: "كل ما تحتاج معرفته عن أصالة عطورنا، والتوصيل، والضمان الذهبي.",
      items: [
        {
          q: "هل جميع العطور المباعة في Scentora أصلية 100%؟",
          a: "نعم وبدون أدنى شك. نتعامل حصرياً مع الوكلاء الرسميين لبيوت العطور العالمية. كل عبوة تحمل الرقم التسلسلي (Batch Code) والتغليف الأصلي المصنعي."
        },
        {
          q: "كم تبلغ تكلفة الشحن وكيف يعمل الشحن المجاني؟",
          a: "تكلفة الشحن هي 100 ج.م فقط لكافة المحافظات، وأي طلب بقيمة 3,000 ج.م أو أكثر يحصل تلقائياً على شحن مجاني سريع ومؤمن في عبوات عازلة للحرارة للحفاظ على جودة العطر."
        },
        {
          q: "ما هي الدول التي تقومون بالتوصيل إليها؟",
          a: "نقوم بالتوصيل لجميع دول الخليج العربي (الإمارات، السعودية، الكويت، قطر، البحرين، عمان)، بالإضافة إلى الولايات المتحدة والمملكة المتحدة وأوروبا."
        }
      ]
    }
  }
};

