import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const FAQ = () => {
  const { t } = useLanguage();
  const [openIdx, setOpenIdx] = useState(0);

  const toggle = (idx) => {
    setOpenIdx((prev) => (prev === idx ? -1 : idx));
  };

  return (
    <div className="page-faq">
      <div className="shop-header-banner">
        <div className="container">
          <span className="section-eyebrow">
            <span className="gold-gem">✦</span>
            CUSTOMER CARE
          </span>
          <h1 className="shop-header-title">{t.faqPage.title}</h1>
          <p className="shop-header-subtitle">{t.faqPage.subtitle}</p>
        </div>
      </div>

      <div className="container faq-container">
        <div className="faq-accordion-list">
          {t.faqPage.items.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`faq-accordion-item ${isOpen ? 'faq-accordion-item--open' : ''}`}
              >
                <button
                  type="button"
                  className="faq-question-btn"
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-question-text">{item.q}</span>
                  <ChevronDown
                    size={18}
                    className={`faq-chevron ${isOpen ? 'faq-chevron--rotated' : ''}`}
                  />
                </button>
                {isOpen && (
                  <div className="faq-answer-pane">
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FAQ;

