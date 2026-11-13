import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const LanguageSwitcher = () => {
  const { lang, setLanguage, isRTL } = useLanguage();

  return (
    <div className="language-switcher">
      <button
        type="button"
        className={`lang-pill ${lang === 'en' ? 'lang-pill--active' : ''}`}
        onClick={() => setLanguage('en')}
        aria-label="Switch to English"
      >
        EN
      </button>
      <span className="lang-divider">/</span>
      <button
        type="button"
        className={`lang-pill ${lang === 'ar' ? 'lang-pill--active' : ''}`}
        onClick={() => setLanguage('ar')}
        aria-label="التبديل إلى العربية"
      >
        عربي
      </button>
    </div>
  );
};

export default LanguageSwitcher;

