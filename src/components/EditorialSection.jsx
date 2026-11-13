import React from 'react';
import { Link } from 'react-router-dom';

const EditorialSection = () => {
  return (
    <section id="layering" className="editorial-split" aria-labelledby="layering-heading">
      <div className="container">
        <div className="editorial-split__grid">
          {/* Left Column: Cinematic Editorial Image */}
          <div className="editorial-split__media">
            <img
              src="/images/editorial-layering.png"
              alt="Pink LUNÉA perfume bottle and matching lotion surrounded by flowers and travertine stones in sunset light"
              className="editorial-split__image"
              loading="lazy"
            />
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="editorial-split__content">
            <div className="editorial-split__content-inner">
              <span className="eyebrow-label">THE ART OF LAYERING</span>
              <h2 id="layering-heading" className="editorial-split__title">
                More than a scent —
                <br />
                it&rsquo;s a feeling.
              </h2>
              <p className="editorial-split__description">
                Layer your favorite fragrances with our matching body mists and lotions for a longer-lasting, more personal experience.
              </p>
              <Link to="/shop?category=sets" className="btn-primary">
                SHOP LAYERING SETS <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditorialSection;

