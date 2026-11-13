import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const CATEGORY_IMAGES = {
  perfume: '/perfumes/in-love-laverne.jpg',
  'bath-and-body-works': '/bath-and-body-works/dream-bright-body-wash-295-ml.jpg',
  women: '/perfumes/bella-laverne.jpg'
};

const CategorySection = () => {
  const { t } = useLanguage();

  return (
    <section className="categories-section" aria-labelledby="categories-heading">
      <div className="container">
        <div className="categories-scroll-wrapper">
          <div className="categories-track">
            {t.categories.items.map((cat) => (
              <Link
                key={cat.id}
                to={cat.path}
                className="category-circle-card"
                title={cat.name}
              >
                <div className="category-circle-card__media">
                  <img
                    src={CATEGORY_IMAGES[cat.id] || '/perfumes/arrogate-blue-de.jpg'}
                    alt={cat.name}
                    className="category-circle-card__img"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = '/perfumes/arrogate-blue-de.jpg';
                    }}
                  />
                  <div className="category-circle-card__ring" />
                </div>
                <h3 className="category-circle-card__name">{cat.name}</h3>
                <span className="category-circle-card__count">{cat.count}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
