import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { useWishlist } from '../context/WishlistContext';
import { useLanguage } from '../context/LanguageContext';

const Wishlist = () => {
  const { wishlistItems } = useWishlist();
  const { t } = useLanguage();

  return (
    <div className="page-wishlist">
      <div className="shop-header-banner">
        <div className="container">
          <span className="section-eyebrow">
            <span className="gold-gem">✦</span>
            CURATED FAVORITES
          </span>
          <h1 className="shop-header-title">{t.wishlist.title}</h1>
          <p className="shop-header-subtitle">{t.brand.tagline}</p>
        </div>
      </div>

      <div className="container wishlist-content-area">
        {wishlistItems.length === 0 ? (
          <div className="wishlist-empty-box">
            <div className="wishlist-empty-icon-wrap">
              <Heart size={44} strokeWidth={1.2} />
            </div>
            <h3>{t.wishlist.emptyTitle}</h3>
            <p>{t.wishlist.emptyDesc}</p>
            <Link to="/shop" className="btn-gold">
              {t.wishlist.exploreBtn}
            </Link>
          </div>
        ) : (
          <div className="product-cards-grid">
            {wishlistItems.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
