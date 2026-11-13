import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Star, Eye, Check, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useLanguage } from '../context/LanguageContext';
import { formatPrice } from '../utils/formatCurrency';

const ProductCard = ({ product, onQuickView }) => {
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { t, lang } = useLanguage();
  const [justAdded, setJustAdded] = useState(false);

  const isFavorited = isInWishlist(product.id);
  const displayName = lang === 'ar' && product.nameAr ? product.nameAr : product.name;
  const displayShort = lang === 'ar' && product.shortDescAr ? product.shortDescAr : product.shortDescEn;

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1400);
  };

  const handleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product);
  };

  return (
    <article className="luxury-product-card">
      <div className="luxury-product-card__media">
        <Link to={`/product/${product.id}`} className="luxury-product-card__link">
          <img
            src={product.image}
            alt={displayName}
            className="luxury-product-card__img"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = '/perfumes/arrogate-blue-de.jpg';
            }}
          />
        </Link>

        {/* Badges */}
        <div className="luxury-product-card__badges">
          {product.discount && (
            <span className="product-badge product-badge--discount">
              {t.productCard.save} {product.discount}
            </span>
          )}
          {product.isBestSeller && (
            <span className="product-badge product-badge--bestseller">
              {lang === 'ar' ? 'الأكثر طلباً' : 'BESTSELLER'}
            </span>
          )}
        </div>

        {/* Action buttons (Wishlist & Quick View) */}
        <div className="luxury-product-card__floating-actions">
          <button
            type="button"
            className={`action-circle-btn ${isFavorited ? 'action-circle-btn--active' : ''}`}
            onClick={handleWishlist}
            aria-label="Wishlist"
            title="Wishlist"
          >
            <Heart size={16} fill={isFavorited ? 'currentColor' : 'none'} strokeWidth={1.8} />
          </button>

          {onQuickView && (
            <button
              type="button"
              className="action-circle-btn"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onQuickView(product);
              }}
              aria-label={t.productCard.quickView}
              title={t.productCard.quickView}
            >
              <Eye size={16} strokeWidth={1.8} />
            </button>
          )}
        </div>
      </div>

      <div className="luxury-product-card__details">
        {/* Brand & Stock status */}
        <div className="luxury-product-card__meta">
          <span className="luxury-product-card__brand">{product.brand}</span>
          <span className="luxury-product-card__stock">
            <span className="stock-dot" />
            {t.productCard.inStock}
          </span>
        </div>

        {/* Product Title */}
        <h3 className="luxury-product-card__title">
          <Link to={`/product/${product.id}`}>{displayName}</Link>
        </h3>

        {/* Short Description */}
        <p className="luxury-product-card__desc">{displayShort}</p>

        {/* Rating & Size */}
        <div className="luxury-product-card__specs">
          <div className="rating-stars">
            <Star size={13} fill="#C6A36A" color="#C6A36A" />
            <span className="rating-value">{product.rating}</span>
            <span className="reviews-count">({product.reviewsCount})</span>
          </div>
          <span className="product-size-label">{product.size}</span>
        </div>

        {/* Price & Add to Cart button */}
        <div className="luxury-product-card__footer">
          <div className="product-pricing">
            <span className="current-price">{formatPrice(product.price, lang)}</span>
            {product.originalPrice && (
              <span className="original-price">{formatPrice(product.originalPrice, lang)}</span>
            )}
          </div>

          <button
            type="button"
            className={`product-add-btn ${justAdded ? 'product-add-btn--added' : ''}`}
            onClick={handleAdd}
          >
            {justAdded ? (
              <>
                <Check size={14} strokeWidth={2.2} />
                <span>{t.productCard.added}</span>
              </>
            ) : (
              <>
                <ShoppingBag size={14} strokeWidth={1.8} />
                <span>{t.productCard.addToCart}</span>
              </>
            )}
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
