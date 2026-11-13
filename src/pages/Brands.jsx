import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const BRAND_HOUSES = [
  {
    name: 'Bath & Body Works',
    origin: 'USA 🇺🇸 (Columbus, Ohio)',
    descEn: 'America\'s beloved body care & fragrance mist house, featuring Into the Night, In the Stars, and Gingham.',
    descAr: 'الدار الأمريكية الأولى والأشهر عالمياً في معطرات الجسم ولوشنات العناية الفاخرة مثل إنتو ذا نايت وإن ذا ستارز وجينجهام.',
    count: '62 Products',
    image: '/bath-and-body-works/dream-bright-body-wash-295-ml.jpg'
  },
  {
    name: 'Arrogate Parfums',
    origin: 'France & Gulf (Haute Parfumerie)',
    descEn: 'Celebrated for iconic scents such as Arrogate Bleu de Parfum, Pink Rose, and Pink Diva.',
    descAr: 'الدار الراقية الشهيرة بأيقوناتها العطرية الخالدة مثل أروجيت بلو دي، بينك روز، وبينك ديفا.',
    count: '8 Fragrances',
    image: '/perfumes/arrogate-blue-de.jpg'
  },
  {
    name: 'Scentora Privé',
    origin: 'Dubai & Grasse',
    descEn: 'Our bespoke private reserve featuring Black Diamond Incense, Gold Tears, and Khalifa Royal Oud.',
    descAr: 'المجموعة الخاصة الحصرية لدار سنتورا من خشب العود المعتق، بخور بلاك دايموند، وجولد تيرز.',
    count: '9 Masterpieces',
    image: '/perfumes/gold-tears.jpg'
  },
  {
    name: 'Strike Perfumes',
    origin: 'Paris, France',
    descEn: 'Architectural masculine power with dark leather, smoked birch, and intense bourbon vanilla.',
    descAr: 'الجاذبية الذكورية القوية مع الجلود الفاخرة وخشب البتولا المدخن وفانيليا البوربون.',
    count: '3 Fragrances',
    image: '/perfumes/strike-black.jpg'
  },
  {
    name: 'Attacks Fragrances',
    origin: 'Italy & Mediterranean',
    descEn: 'Dynamic, electric freshness balancing crisp mint, ambroxan, and Mediterranean woods.',
    descAr: 'الانتعاش الإيطالي المتوهج الذي يوازن بين النعناع المتوسطي وأمبروكسان الأرز.',
    count: '2 Fragrances',
    image: '/perfumes/attacks-blue.jpg'
  },
  {
    name: 'Laverne',
    origin: 'Saudi Arabia & France',
    descEn: 'Modern luxury sensation famous for Miss Laverne Extreme, In Love, and Bella.',
    descAr: 'الدار الشهيرة التي حققت نجاحاً باهراً بأيقونات ميس لافيرن، إن لاف، وعطر بيلا الرومانسي.',
    count: '3 Fragrances',
    image: '/perfumes/in-love-laverne.jpg'
  },
  {
    name: 'Assaf Perfumes',
    origin: 'Saudi Arabia & Grasse',
    descEn: 'Masterpieces of intense prestige featuring Boom Blue, Wild Colt Boss, and Shift.',
    descAr: 'روائع الفخامة العطرية وقوة الحضور مع بوم بلو، وايلد كولت بوس، وإصدار شيفت الأيقوني.',
    count: '4 Fragrances',
    image: '/perfumes/boom-blue-assaf.jpg'
  },
  {
    name: 'Reef Perfumes',
    origin: 'Saudi Arabia',
    descEn: 'Signature Gulf elegance renowned for Lady Reef and Princess Reef with delicate powdery iris.',
    descAr: 'رمز الأناقة الخليجية الفاخرة بأشهر العطور مثل ليدي ريف وبرينسيس ريف بلمسات السوسن.',
    count: '3 Fragrances',
    image: '/perfumes/lady-reef.jpg'
  }
];

const Brands = () => {
  const { lang, isRTL } = useLanguage();

  return (
    <div className="page-brands">
      <div className="shop-header-banner">
        <div className="container">
          <span className="section-eyebrow">
            <span className="gold-gem">✦</span>
            OFFICIAL PARTNERS
          </span>
          <h1 className="shop-header-title">
            {lang === 'ar' ? 'دور العطور المتوفرة بالمتجر' : 'Featured Perfume Houses'}
          </h1>
          <p className="shop-header-subtitle">
            {lang === 'ar'
              ? 'نضمن لك أصالة 100% لكل زجاجة عطر تأتيك مباشرة من المصدر الرسمي المعتمد.'
              : 'Every flacon is sourced directly with verifiable quality and batch authentication.'}
          </p>
        </div>
      </div>

      <div className="container brands-container">
        <div className="brands-showcase-grid">
          {BRAND_HOUSES.map((b) => (
            <div key={b.name} className="brand-house-card">
              <div className="brand-house-card__media">
                <img
                  src={b.image}
                  alt={b.name}
                  className="brand-house-card__img"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = '/perfumes/arrogate-blue-de.jpg';
                  }}
                />
                <div className="brand-house-card__overlay" />
                <span className="brand-house-count">{b.count}</span>
              </div>
              <div className="brand-house-card__body">
                <span className="brand-house-origin">{b.origin}</span>
                <h3 className="brand-house-name">{b.name}</h3>
                <p className="brand-house-desc">{lang === 'ar' ? b.descAr : b.descEn}</p>
                <Link
                  to={`/shop?search=${encodeURIComponent(b.name)}`}
                  className="brand-house-link"
                >
                  <span>{lang === 'ar' ? `استكشف عطور ${b.name}` : `Explore ${b.name}`}</span>
                  {isRTL ? <ArrowLeft size={14} /> : <ArrowRight size={14} />}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;
