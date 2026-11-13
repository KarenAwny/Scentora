import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const BrandLogo = ({ variant = 'default', showTagline = true }) => {
  const { lang } = useLanguage();

  return (
    <Link to="/" className={`brand-logo brand-logo--${variant}`} aria-label="Scentora Home">
      <img
        src="/images/scentora-logo.jpg"
        alt="Scentora"
        className="brand-logo__img"
      />
    </Link>
  );
};

export default BrandLogo;
