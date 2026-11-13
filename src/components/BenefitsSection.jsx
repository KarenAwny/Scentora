import React from 'react';
import { Award, Clock, Gift, Headphones } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const BenefitsSection = () => {
  const { t } = useLanguage();

  const icons = [
    <Award size={26} strokeWidth={1.5} key="b1" />,
    <Clock size={26} strokeWidth={1.5} key="b2" />,
    <Gift size={26} strokeWidth={1.5} key="b3" />,
    <Headphones size={26} strokeWidth={1.5} key="b4" />
  ];

  return (
    <section className="benefits-section" aria-labelledby="why-choose-heading">
      <div className="container">
        <div className="section-title-wrap section-title-wrap--center">
          <span className="section-eyebrow">
            <span className="gold-gem">✦</span>
            THE SCENTORA ADVANTAGE
          </span>
          <h2 id="why-choose-heading" className="section-main-title">
            {t.whyChooseUs.title}
          </h2>
          <p className="section-subtitle">{t.whyChooseUs.subtitle}</p>
        </div>

        <div className="benefits-grid">
          {t.whyChooseUs.items.map((item, idx) => (
            <div key={idx} className="benefit-card">
              <div className="benefit-card__icon-wrap">
                <span className="benefit-card__icon">{icons[idx]}</span>
              </div>
              <h3 className="benefit-card__title">{item.title}</h3>
              <p className="benefit-card__desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;

