import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle2,
  Instagram,
  Facebook,
  Youtube,
  Share2,
  X
} from 'lucide-react';
import BrandLogo from './BrandLogo';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t, lang } = useLanguage();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [activeModal, setActiveModal] = useState(null);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (email.trim() && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setSubscribed(true);

      try {
        await fetch('http://localhost:5000/api/subscribers', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: email.trim() })
        });
      } catch (err) {
        console.log('Subscriber saved locally:', err);
      }

      setEmail('');
    }
  };

  const quickLinks = [
    { label: t.nav.home, path: '/' },
    { label: t.nav.men, path: '/shop?gender=men' },
    { label: t.nav.women, path: '/shop?gender=women' },
    { label: t.nav.unisex, path: '/shop?gender=unisex' },
    { label: t.nav.giftSets, path: '/shop?category=gift-sets' },
    { label: lang === 'ar' ? 'العروض والخصومات' : 'Sale & Offers', path: '/shop?filter=sale' },
    { label: t.nav.brands, path: '/brands' }
  ];

  const customerCareLinks = [
    { label: lang === 'ar' ? 'تتبع طلبك' : 'Track Order', modalKey: 'track' },
    { label: lang === 'ar' ? 'معلومات الشحن' : 'Shipping Information', modalKey: 'shipping' },
    { label: t.nav.faq, path: '/faq' },
    { label: lang === 'ar' ? 'دليل تركيزات العطور' : 'Fragrance Concentration Guide', modalKey: 'guide' },
    { label: t.nav.contact, path: '/contact' }
  ];

  const modalContents = {
    track: {
      titleEn: "Track Your Order",
      titleAr: "تتبع حالة شحنتك",
      bodyEn: "Enter your 8-digit order number from your confirmation email to see real-time courier updates. Our orders are shipped via temperature-monitored VIP carriers.",
      bodyAr: "أدخل رقم طلبك المكون من 8 أرقام للاطلاع على التحديثات المباشرة. يتم شحن جميع العطور في مركبات مجهزة ومراقبة حرارياً."
    },
    privacy: {
      titleEn: "Privacy Policy",
      titleAr: "سياسة الخصوصية",
      bodyEn: "We are committed to protecting your personal information and ensuring your shopping experience is completely safe and confidential.",
      bodyAr: "نلتزم بحماية بياناتك وخصوصيتك وسرية معلوماتك الشخصية بأعلى معايير الأمان والموثوقية."
    },
    shipping: {
      titleEn: "Shipping & Delivery Policy",
      titleAr: "الشحن والتوصيل لكافة المحافظات",
      bodyEn: "Standard shipping is 100 EGP to all governorates. Complimentary free shipping on all orders over 3,000 EGP. Deliveries arrive within 2-4 business days in our signature luxury gift packaging.",
      bodyAr: "تكلفة الشحن 100 ج.م فقط لجميع المحافظات، وشحن مجاني بالكامل لكافة الطلبات فوق 3,000 ج.م. تصل الطلبات خلال 2 إلى 4 أيام عمل في تغليف إهداء فاخر."
    },
    guide: {
      titleEn: "Fragrance Concentration Guide",
      titleAr: "دليل تركيزات ودرجات العطور",
      bodyEn: "Eau de Toilette (8-12% oil, 4-6 hrs) • Eau de Parfum (15-20% oil, 8-12 hrs) • Extrait de Parfum (25-40% oil, 16+ hrs longevity). Scentora offers exclusively concentrated EDP and Extrait formulations.",
      bodyAr: "أو دو تواليت (تركيز 8-12%، ثبات 4-6 ساعات) • أو دو بارفان (تركيز 15-20%، ثبات 8-12 ساعة) • إكستريت دي بارفان (تركيز 25-40%، ثبات يتجاوز 16 ساعة). نركز في سنتورا على أعلى درجات التركيز."
    }
  };

  return (
    <>
      <footer className="footer-section">
        <div className="container">
          {/* Top Newsletter Strip */}
          <div className="footer-newsletter-box">
            <div className="newsletter-text">
              <h3 className="newsletter-title">{t.footer.newsletterTitle}</h3>
              <p className="newsletter-desc">{t.footer.newsletterDesc}</p>
            </div>

            {subscribed ? (
              <div className="newsletter-success">
                <CheckCircle2 size={18} />
                <span>{t.footer.subscribeSuccess}</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="newsletter-form">
                <input
                  type="email"
                  required
                  placeholder={t.footer.emailPlaceholder}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="newsletter-input"
                  aria-label="Email Address"
                />
                <button type="submit" className="btn-gold newsletter-btn">
                  {t.footer.subscribeBtn}
                </button>
              </form>
            )}
          </div>

          {/* Main 4-Column Footer */}
          <div className="footer-main-grid">
            {/* Column 1: Brand & Socials */}
            <div className="footer-col footer-col--brand">
              <BrandLogo variant="light" />
              <p className="footer-brand-desc">{t.brand.description}</p>
              <div className="footer-socials">
                <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                  <Instagram size={18} />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
                  <Facebook size={18} />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube">
                  <Youtube size={18} />
                </a>
                <a href="https://tiktok.com" target="_blank" rel="noreferrer" aria-label="TikTok">
                  <Share2 size={18} />
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="footer-col">
              <h4 className="footer-col-title">{t.footer.quickLinksTitle}</h4>
              <ul className="footer-links-list">
                {quickLinks.map((item, idx) => (
                  <li key={idx}>
                    <Link to={item.path}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Customer Care */}
            <div className="footer-col">
              <h4 className="footer-col-title">{t.footer.customerCareTitle}</h4>
              <ul className="footer-links-list">
                {customerCareLinks.map((item, idx) => (
                  <li key={idx}>
                    {item.path ? (
                      <Link to={item.path}>{item.label}</Link>
                    ) : (
                      <button
                        type="button"
                        className="footer-link-btn"
                        onClick={() => setActiveModal(item.modalKey)}
                      >
                        {item.label}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact Us */}
            <div className="footer-col">
              <h4 className="footer-col-title">{t.footer.contactTitle}</h4>
              <ul className="footer-contact-list">
                <li>
                  <MapPin size={16} className="contact-icon" />
                  <span>{t.footer.contactInfo.address}</span>
                </li>
                <li>
                  <Phone size={16} className="contact-icon" />
                  <span dir="ltr">{t.footer.contactInfo.phone}</span>
                </li>
                <li>
                  <Mail size={16} className="contact-icon" />
                  <span>{t.footer.contactInfo.email}</span>
                </li>
                <li>
                  <Clock size={16} className="contact-icon" />
                  <span>{t.footer.contactInfo.hours}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Copyright & Legal */}
          <div className="footer-bottom-bar">
            <p className="footer-copyright">
              © 2026 {t.brand.name}. {t.footer.rights}
            </p>
            <div className="footer-legal-links">
              <button
                type="button"
                className="footer-legal-btn"
                onClick={() => setActiveModal('privacy')}
              >
                {t.footer.privacy}
              </button>
              <button
                type="button"
                className="footer-legal-btn"
                onClick={() => setActiveModal('guide')}
              >
                {t.footer.terms}
              </button>
              <button
                type="button"
                className="footer-legal-btn"
                onClick={() => setActiveModal('shipping')}
              >
                {t.footer.shippingPolicy}
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Info Dialog Modal */}
      {activeModal && modalContents[activeModal] && (
        <div className="modal-backdrop" onClick={() => setActiveModal(null)}>
          <div className="account-modal-box" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="modal-close-btn"
              onClick={() => setActiveModal(null)}
              aria-label="Close"
            >
              <X size={18} />
            </button>
            <div className="modal-header">
              <h3 className="modal-title">
                {lang === 'ar'
                  ? modalContents[activeModal].titleAr
                  : modalContents[activeModal].titleEn}
              </h3>
              <p className="modal-desc">
                {lang === 'ar'
                  ? modalContents[activeModal].bodyAr
                  : modalContents[activeModal].bodyEn}
              </p>
            </div>
            <button
              type="button"
              className="btn-gold btn-full"
              onClick={() => setActiveModal(null)}
            >
              {lang === 'ar' ? 'إغلاق' : 'CLOSE'}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
