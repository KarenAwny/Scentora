import React, { useState } from 'react';
import { X, Star, Heart, Check, ShoppingBag, Truck, ShieldCheck, ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useLanguage } from '../context/LanguageContext';
import { formatPrice } from '../utils/formatCurrency';

const QuickViewModal = ({ product, onClose }) => {
  if (!product) return null;

  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { t, lang, isRTL } = useLanguage();

  const [selectedSize, setSelectedSize] = useState(
    product.size || (product.availableSizes && product.availableSizes[0]) || '100ml'
  );
  const [quantity, setQuantity] = useState(1);
  const [justAdded, setJustAdded] = useState(false);

  const isFavorited = isInWishlist(product.id);
  const displayName = lang === 'ar' && product.nameAr ? product.nameAr : product.name;
  const displayDesc = lang === 'ar' && product.descriptionAr ? product.descriptionAr : product.descriptionEn;
  const topNotes = lang === 'ar' && product.notes?.topAr ? product.notes.topAr : product.notes?.topEn;
  const heartNotes = lang === 'ar' && product.notes?.heartAr ? product.notes.heartAr : product.notes?.heartEn;
  const baseNotes = lang === 'ar' && product.notes?.baseAr ? product.notes.baseAr : product.notes?.baseEn;

  const currentPrice = (product.sizePrices && product.sizePrices[selectedSize])
    ? product.sizePrices[selectedSize]
    : product.price;

  const currentOriginalPrice = product.originalPrice
    ? Math.round((currentPrice / product.price) * product.originalPrice)
    : null;

  const handleAdd = () => {
    addToCart(product, quantity, selectedSize, true);
    setJustAdded(true);
    setTimeout(() => {
      setJustAdded(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="quickview-modal-card" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close Quick View"
        >
          <X size={20} />
        </button>

        <div className="quickview-modal-grid">
          {/* Left Media */}
          <div className="quickview-media">
            <img
              src={product.image}
              alt={displayName}
              className="quickview-img"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = '/perfumes/arrogate-blue-de.jpg';
              }}
            />
            {product.discount && (
              <span className="product-badge product-badge--discount">
                {t.productCard.save} {product.discount}
              </span>
            )}
          </div>

          {/* Right Details */}
          <div className="quickview-details">
            <span className="quickview-brand">{product.brand}</span>
            <h2 className="quickview-title">{displayName}</h2>

            <div className="quickview-rating-row">
              <div className="rating-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="#C6A36A" color="#C6A36A" />
                ))}
              </div>
              <span className="rating-text">
                {product.rating} ({product.reviewsCount} {t.productCard.reviews})
              </span>
              <span className="stock-tag">
                <span className="stock-dot" /> {t.productCard.inStock}
              </span>
            </div>

            <div className="quickview-price-row">
              <span className="quickview-price">{formatPrice(currentPrice, lang)}</span>
              {currentOriginalPrice && (
                <span className="quickview-original-price">{formatPrice(currentOriginalPrice, lang)}</span>
              )}
              <span className="quickview-concentration">{product.concentration}</span>
            </div>

            <p className="quickview-desc">{displayDesc}</p>

            {/* Olfactory Architecture */}
            {product.notes && (
              <div className="quickview-notes">
                <span className="notes-label">
                  {lang === 'ar' ? 'الهرم العطري' : 'OLFACTORY NOTES'}
                </span>
                <div className="notes-list">
                  <div className="note-row">
                    <strong>{lang === 'ar' ? 'القمة:' : 'Top:'}</strong> {topNotes}
                  </div>
                  <div className="note-row">
                    <strong>{lang === 'ar' ? 'القلب:' : 'Heart:'}</strong> {heartNotes}
                  </div>
                  <div className="note-row">
                    <strong>{lang === 'ar' ? 'القاعدة:' : 'Base:'}</strong> {baseNotes}
                  </div>
                </div>
              </div>
            )}

            {/* Size Selector */}
            {product.availableSizes && (
              <div className="quickview-size-selector">
                <label className="size-label">{t.productDetails.size}:</label>
                <div className="size-options">
                  {product.availableSizes.map((sz) => (
                    <button
                      key={sz}
                      type="button"
                      className={`size-btn ${selectedSize === sz ? 'size-btn--active' : ''}`}
                      onClick={() => setSelectedSize(sz)}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Action Row */}
            <div className="quickview-actions">
              <div className="quantity-counter">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  aria-label="Decrease"
                >
                  -
                </button>
                <span>{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  aria-label="Increase"
                >
                  +
                </button>
              </div>

              <button
                type="button"
                className={`btn-gold quickview-add-btn ${justAdded ? 'btn-gold--added' : ''}`}
                onClick={handleAdd}
              >
                {justAdded ? (
                  <>
                    <Check size={16} /> {t.productCard.added}
                  </>
                ) : (
                  <>
                    <ShoppingBag size={16} /> {t.productCard.addToCart} — {formatPrice(currentPrice * quantity, lang)}
                  </>
                )}
              </button>

              <button
                type="button"
                className={`wishlist-square-btn ${isFavorited ? 'wishlist-square-btn--active' : ''}`}
                onClick={() => toggleWishlist(product)}
                aria-label="Wishlist"
              >
                <Heart size={18} fill={isFavorited ? 'currentColor' : 'none'} />
              </button>
            </div>

            <div className="quickview-footer-link">
              <Link to={`/product/${product.id}`} onClick={onClose}>
                <span>{lang === 'ar' ? 'عرض تفاصيل العطر كاملة' : 'View Full Fragrance Details'}</span>
                {isRTL ? <ArrowLeft size={14} /> : <ArrowRight size={14} />}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;

