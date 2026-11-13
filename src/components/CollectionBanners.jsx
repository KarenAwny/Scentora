import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const BANNER_IMAGES = [
  '/perfumes/in-love-laverne.jpg',
  '/bath-and-body-works/dream-bright-body-wash-295-ml.jpg',
  '/perfumes/bella-laverne.jpg'
];

const CollectionBanners = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section className="collection-banners-section" aria-label="Featured Collections">
      <div className="container">
        <div className="collection-banners-grid">
          {t.collectionBanners.map((card, idx) => (
            <div key={card.id} className="collection-banner-card">
              <div className="collection-banner-card__bg">
                <img
                  src={BANNER_IMAGES[idx]}
                  alt={card.title}
                  className="collection-banner-card__img"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = '/perfumes/arrogate-blue-de.jpg';
                  }}
                />
                <div className="collection-banner-card__overlay" />
              </div>

              <div className="collection-banner-card__content">
                <span className="collection-banner-card__tag">{card.tag}</span>
                <h3 className="collection-banner-card__title">{card.title}</h3>
                <p className="collection-banner-card__desc">{card.description}</p>
                <Link to={card.link} className="collection-banner-card__cta">
                  <span>{card.cta}</span>
                  {isRTL ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionBanners;
