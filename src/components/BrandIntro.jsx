import React from 'react';
import { Link } from 'react-router-dom';

const BrandIntro = () => {
  return (
    <section id="brand-intro" className="brand-intro" aria-labelledby="brand-intro-heading">
      <div className="container brand-intro__inner">
        <span className="eyebrow-label">SCENTS FOR EVERY CHAPTER</span>
        <h2 id="brand-intro-heading" className="brand-intro__title">
          Find your signature.
        </h2>
        <p className="brand-intro__description">
          From fresh florals to deep woods, our fragrances are crafted to match your mood, your style, and your story.
        </p>
        <div className="brand-intro__action">
          <Link to="/shop" className="btn-outline">
            BROWSE ALL SCENTS
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrandIntro;

