import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Truck, Gift, RefreshCw, ArrowRight, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const { t, isRTL } = useLanguage();

  const benefitIcons = [
    <ShieldCheck size={16} key="b1" className="benefit-icon" />,
    <Truck size={16} key="b2" className="benefit-icon" />,
    <Gift size={16} key="b3" className="benefit-icon" />,
    <RefreshCw size={16} key="b4" className="benefit-icon" />
  ];

  return (
    <section className="hero-section" aria-label="Hero Perfume Campaign">
      {/* Background Campaign Visual */}
      <div className="hero-backdrop">
        <img
          src="/images/bespecial-hero.jpg"
          alt="Scentora Luxury Perfume Campaign featuring elegant couple holding bespoke perfume bottles"
          className="hero-backdrop__image"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = '/perfumes/arrogate-blue-de.jpg';
          }}
        />
        <div className="hero-backdrop__overlay" />
      </div>

      <div className="container hero-container">
        <div className="hero-content">
          <span className="hero-eyebrow">
            <span className="hero-eyebrow__gem">✦</span>
            {t.hero.eyebrow}
          </span>

          <h1 className="hero-title">{t.hero.title}</h1>

          <p className="hero-description">{t.hero.description}</p>

          <div className="hero-actions">
            <Link to="/shop" className="btn-gold hero-cta-primary">
              <span>{t.hero.ctaShop}</span>
              {isRTL ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
            </Link>
            <Link to="/shop?category=luxury" className="btn-outline-gold hero-cta-secondary">
              {t.hero.ctaExplore}
            </Link>
          </div>

          {/* 4 Benefits Indicators */}
          <div className="hero-benefits">
            {t.hero.benefits.map((benefit, idx) => (
              <div key={idx} className="hero-benefit-item">
                <span className="hero-benefit-item__icon">{benefitIcons[idx]}</span>
                <span className="hero-benefit-item__label">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
