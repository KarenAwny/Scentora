import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import { FRAGRANCE_SETS } from '../data/products';
import { useCart } from '../context/CartContext';

const FragranceSets = () => {
  const { addToCart } = useCart();
  const [addedId, setAddedId] = useState(null);

  const handleAddBundle = (bundle) => {
    addToCart(bundle, 1);
    setAddedId(bundle.id);
    setTimeout(() => {
      setAddedId((prev) => (prev === bundle.id ? null : prev));
    }, 1400);
  };

  return (
    <section id="fragrance-sets" className="fragrance-sets" aria-labelledby="sets-heading">
      <div className="container">
        <div className="fragrance-sets__grid">
          {/* Left Side: Curated Bundles */}
          <div className="fragrance-sets__content">
            <span className="eyebrow-label">CURATED FOR YOU</span>
            <h2 id="sets-heading" className="fragrance-sets__title">
              Build your perfect fragrance routine.
            </h2>
            <p className="fragrance-sets__description">
              Choose from our best-selling sets and discover new favorites at a special price.
            </p>

            <div className="bundle-list">
              {FRAGRANCE_SETS.map((bundle) => {
                const isAdded = addedId === bundle.id;
                return (
                  <div key={bundle.id} className="bundle-item">
                    <Link to={`/product/${bundle.id}`} className="bundle-item__thumb-link">
                      <img
                        src={bundle.image}
                        alt={bundle.name}
                        className="bundle-item__thumb"
                        loading="lazy"
                      />
                    </Link>

                    <div className="bundle-item__info">
                      <h3 className="bundle-item__name">
                        <Link to={`/product/${bundle.id}`}>{bundle.name}</Link>
                      </h3>
                      <p className="bundle-item__desc">{bundle.shortDescription}</p>
                      <span className="bundle-item__price">${bundle.price}</span>
                    </div>

                    <div className="bundle-item__action">
                      <button
                        type="button"
                        className={`bundle-item__btn ${isAdded ? 'bundle-item__btn--added' : ''}`}
                        onClick={() => handleAddBundle(bundle)}
                      >
                        {isAdded ? (
                          <>
                            <Check size={13} strokeWidth={2} /> ADDED
                          </>
                        ) : (
                          'ADD TO CART'
                        )}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Side: Luxury Editorial Image */}
          <div className="fragrance-sets__media">
            <img
              src="/images/editorial-fragrance-sets.png"
              alt="Luxury pink perfume bottle surrounded by purple lilac flowers and delicate petals"
              className="fragrance-sets__image"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FragranceSets;

