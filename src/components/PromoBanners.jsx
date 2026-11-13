import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Sparkles, Gift } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const PromoBanners = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section className="promo-banners-section" aria-label="Promotional Campaigns">
      <div className="container">
        <div className="promo-banners-grid">
          {/* LEFT: Gift Sets Banner */}
          <div className="promo-banner-card promo-banner-card--gift">
            <div className="promo-banner-card__bg">
              <img
                src="/perfumes/pink-diamond-sakura.jpg"
                alt="Luxury Perfume Gift Sets with golden ribbons"
                className="promo-banner-card__img"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = '/perfumes/arrogate-blue-de.jpg';
                }}
              />
              <div className="promo-banner-card__overlay" />
            </div>

            <div className="promo-banner-card__content">
              <span className="promo-banner-card__tag">
                <Gift size={14} />
                {t.promoBanners.giftSets.tag}
              </span>
              <h3 className="promo-banner-card__title">
                {t.promoBanners.giftSets.title}
              </h3>
              <p className="promo-banner-card__desc">
                {t.promoBanners.giftSets.subtitle}
              </p>
              <Link
                to={t.promoBanners.giftSets.link}
                className="btn-gold promo-banner-card__btn"
              >
                <span>{t.promoBanners.giftSets.cta}</span>
                {isRTL ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
              </Link>
            </div>
          </div>

          {/* RIGHT: Exclusive Offers Banner */}
          <div className="promo-banner-card promo-banner-card--sale">
            <div className="promo-banner-card__bg">
              <img
                src="/perfumes/black-diamond-incense.jpg"
                alt="Exclusive luxury perfume offers up to 50% off"
                className="promo-banner-card__img"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = '/perfumes/arrogate-blue-de.jpg';
                }}
              />
              <div className="promo-banner-card__overlay promo-banner-card__overlay--crimson" />
            </div>

            <div className="promo-banner-card__content">
              <span className="promo-banner-card__tag">
                <Sparkles size={14} />
                {t.promoBanners.exclusiveOffers.tag}
              </span>
              <h3 className="promo-banner-card__title promo-banner-card__title--sale">
                {t.promoBanners.exclusiveOffers.title}
              </h3>
              <p className="promo-banner-card__desc">
                {t.promoBanners.exclusiveOffers.subtitle}
              </p>
              <Link
                to={t.promoBanners.exclusiveOffers.link}
                className="btn-gold promo-banner-card__btn"
              >
                <span>{t.promoBanners.exclusiveOffers.cta}</span>
                {isRTL ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanners;
