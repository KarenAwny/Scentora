import React from 'react';
import { ShieldCheck, Award, Sparkles, Heart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="page-about">
      {/* Hero */}
      <div className="about-hero-section">
        <div className="container">
          <span className="section-eyebrow">
            <span className="gold-gem">✦</span>
            {t.aboutPage.eyebrow}
          </span>
          <h1 className="about-hero-title">{t.aboutPage.title}</h1>
          <p className="about-hero-subtitle">{t.brand.tagline}</p>
        </div>
      </div>

      <div className="container about-content-container">
        {/* Story Section */}
        <div className="about-story-grid">
          <div className="about-story-media">
            <img
              src="/images/editorial-layering.png"
              alt="Maison Scentora Parfumerie craftsmanship"
              className="about-story-img"
            />
          </div>
          <div className="about-story-text">
            <span className="section-eyebrow">OUR PHILOSOPHY</span>
            <h2 className="about-story-heading">{t.brand.tagline}</h2>
            <p className="about-paragraph">{t.aboutPage.p1}</p>
            <p className="about-paragraph">{t.aboutPage.p2}</p>
          </div>
        </div>

        {/* Core Pillars */}
        <div className="about-pillars-grid">
          {t.aboutPage.values.map((v, i) => (
            <div key={i} className="about-pillar-card">
              <span className="pillar-num">0{i + 1}</span>
              <h3 className="pillar-title">{v.title}</h3>
              <p className="pillar-desc">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;

