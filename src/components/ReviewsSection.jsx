import React, { useState } from 'react';
import { Star, ShieldCheck, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const AVATARS = [
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
  'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80'
];

const ReviewsSection = () => {
  const { t, isRTL } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);

  const total = t.reviews.items.length;

  const nextReview = () => setActiveIndex((prev) => (prev + 1) % total);
  const prevReview = () => setActiveIndex((prev) => (prev - 1 + total) % total);

  return (
    <section className="reviews-section" aria-labelledby="reviews-heading">
      <div className="container">
        <div className="section-title-wrap section-title-wrap--center">
          <span className="section-eyebrow">
            <span className="gold-gem">✦</span>
            {t.reviews.tag}
          </span>
          <h2 id="reviews-heading" className="section-main-title">
            {t.reviews.title}
          </h2>
          <p className="section-subtitle">{t.reviews.subtitle}</p>
        </div>

        <div className="reviews-carousel-wrapper">
          {/* Navigation Controls */}
          <button
            type="button"
            className="review-nav-btn review-nav-btn--prev"
            onClick={isRTL ? nextReview : prevReview}
            aria-label="Previous Review"
          >
            {isRTL ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
          </button>

          <div className="review-cards-container">
            {t.reviews.items.map((rev, index) => {
              const isActive = index === activeIndex;
              return (
                <div
                  key={index}
                  className={`review-card ${isActive ? 'review-card--active' : ''}`}
                  style={{ display: isActive ? 'block' : 'none' }}
                >
                  <div className="review-card__quote-icon">
                    <Quote size={32} />
                  </div>

                  <div className="review-card__stars">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={18} fill="#C6A36A" color="#C6A36A" />
                    ))}
                  </div>

                  <p className="review-card__quote">&ldquo;{rev.quote}&rdquo;</p>

                  <div className="review-card__author-wrap">
                    <img
                      src={AVATARS[index]}
                      alt={rev.author}
                      className="review-card__avatar"
                      loading="lazy"
                    />
                    <div className="review-card__author-info">
                      <div className="author-name-row">
                        <h4 className="author-name">{rev.author}</h4>
                        <span className="verified-badge">
                          <ShieldCheck size={13} />
                          {t.reviews.verified}
                        </span>
                      </div>
                      <span className="author-meta">
                        {rev.location} • {rev.purchased}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <button
            type="button"
            className="review-nav-btn review-nav-btn--next"
            onClick={isRTL ? prevReview : nextReview}
            aria-label="Next Review"
          >
            {isRTL ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
          </button>
        </div>

        {/* Carousel Dots */}
        <div className="carousel-dots">
          {t.reviews.items.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`carousel-dot ${i === activeIndex ? 'carousel-dot--active' : ''}`}
              onClick={() => setActiveIndex(i)}
              aria-label={`Go to review ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;

