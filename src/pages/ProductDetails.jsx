import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Heart,
  Star,
  Plus,
  Minus,
  Check,
  Truck,
  ShieldCheck,
  Gift,
  ArrowLeft,
  ArrowRight,
  ShoppingBag,
  Sparkles
} from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { getProductById, PRODUCTS } from '../data/products';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useLanguage } from '../context/LanguageContext';
import { formatPrice } from '../utils/formatCurrency';

const ProductDetails = () => {
  const { id } = useParams();
  const product = getProductById(id);

  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { t, lang, isRTL } = useLanguage();

  const [activeImage, setActiveImage] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [justAdded, setJustAdded] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (product) {
      setActiveImage(product.image);
      setSelectedSize(
        product.size || (product.availableSizes && product.availableSizes[0]) || '100ml'
      );
      setQuantity(1);
    }
  }, [id, product]);

  if (!product) {
    return (
      <div className="container product-not-found-page">
        <h2>{lang === 'ar' ? 'العطر غير متوفر حالياً' : 'Fragrance Not Found'}</h2>
        <p>
          {lang === 'ar'
            ? 'ربما تم نقل هذا الإصدار أو نفاذ الكمية.'
            : 'The fragrance you are seeking may have been archived.'}
        </p>
        <Link to="/shop" className="btn-gold">
          {t.cart.exploreBtn}
        </Link>
      </div>
    );
  }

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

  const related = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 4);

  const handleAdd = () => {
    addToCart(product, quantity, selectedSize, true);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1400);
  };

  return (
    <div className="page-product-details">
      <div className="container">
        {/* Breadcrumb Navigation */}
        <nav className="pdp-breadcrumbs" aria-label="Breadcrumb">
          <Link to="/">{t.productDetails.home}</Link>
          <span className="crumb-sep">/</span>
          <Link to="/shop">{t.productDetails.shop}</Link>
          <span className="crumb-sep">/</span>
          <span className="crumb-active">{displayName}</span>
        </nav>

        {/* Main Product Layout */}
        <div className="pdp-hero-grid">
          {/* Left Media Gallery */}
          <div className="pdp-gallery-wrap">
            <div className="pdp-main-image-box">
              <img
                src={activeImage || product.image}
                alt={displayName}
                className="pdp-main-image"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = '/perfumes/arrogate-blue-de.jpg';
                }}
              />
              {product.discount && (
                <span className="product-badge product-badge--discount pdp-badge">
                  {t.productCard.save} {product.discount}
                </span>
              )}
            </div>

            {/* Thumbnail selector */}
            <div className="pdp-thumbnail-row">
              <button
                type="button"
                className={`pdp-thumb-btn ${activeImage === product.image ? 'pdp-thumb-btn--active' : ''}`}
                onClick={() => setActiveImage(product.image)}
              >
                <img
                  src={product.image}
                  alt="Primary angle"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = '/perfumes/arrogate-blue-de.jpg';
                  }}
                />
              </button>
              {product.secondaryImage && (
                <button
                  type="button"
                  className={`pdp-thumb-btn ${activeImage === product.secondaryImage ? 'pdp-thumb-btn--active' : ''}`}
                  onClick={() => setActiveImage(product.secondaryImage)}
                >
                  <img
                    src={product.secondaryImage}
                    alt="Editorial angle"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = product.image;
                    }}
                  />
                </button>
              )}
            </div>
          </div>

          {/* Right Product Information */}
          <div className="pdp-info-wrap">
            <div className="pdp-header">
              <span className="pdp-brand-tag">{product.brand}</span>
              <h1 className="pdp-product-title">{displayName}</h1>
              <span className="pdp-concentration-tag">{product.concentration}</span>
            </div>

            {/* Price Row */}
            <div className="pdp-price-rating-row">
              <div className="pdp-price-group">
                <span className="pdp-price">{formatPrice(currentPrice, lang)}</span>
                {currentOriginalPrice && (
                  <span className="pdp-original-price">{formatPrice(currentOriginalPrice, lang)}</span>
                )}
              </div>

              <div className="pdp-rating-group">
                <div className="rating-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={15} fill="#C6A36A" color="#C6A36A" />
                  ))}
                </div>
                <span className="pdp-rating-val">
                  {product.rating} ({product.reviewsCount} {t.productCard.reviews})
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="pdp-main-description">{displayDesc}</p>

            {/* Olfactory Notes Architecture Box */}
            {product.notes && (
              <div className="pdp-olfactory-box">
                <h3 className="olfactory-box-title">
                  <Sparkles size={16} />
                  {t.productDetails.olfactoryPyramid}
                </h3>
                <div className="olfactory-tiers">
                  <div className="olfactory-tier">
                    <span className="tier-name">{t.productDetails.topNotes}</span>
                    <span className="tier-desc">{topNotes}</span>
                  </div>
                  <div className="olfactory-tier">
                    <span className="tier-name">{t.productDetails.heartNotes}</span>
                    <span className="tier-desc">{heartNotes}</span>
                  </div>
                  <div className="olfactory-tier">
                    <span className="tier-name">{t.productDetails.baseNotes}</span>
                    <span className="tier-desc">{baseNotes}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Performance Indicators */}
            <div className="pdp-performance-row">
              <div className="perf-item">
                <span className="perf-label">{t.productDetails.longevity}:</span>
                <span className="perf-value">{product.longevity}</span>
              </div>
              <div className="perf-item">
                <span className="perf-label">{t.productDetails.sillage}:</span>
                <span className="perf-value">{product.sillage}</span>
              </div>
            </div>

            {/* Size Selector */}
            {product.availableSizes && (
              <div className="pdp-size-section">
                <label className="pdp-size-label">{t.productDetails.size}:</label>
                <div className="pdp-size-pills">
                  {product.availableSizes.map((sz) => (
                    <button
                      key={sz}
                      type="button"
                      className={`pdp-size-pill ${selectedSize === sz ? 'pdp-size-pill--active' : ''}`}
                      onClick={() => setSelectedSize(sz)}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Actions: Quantity + Add to Cart + Wishlist */}
            <div className="pdp-purchase-actions">
              <div className="pdp-quantity-box">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  aria-label="Decrease quantity"
                >
                  <Minus size={15} />
                </button>
                <span>{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  aria-label="Increase quantity"
                >
                  <Plus size={15} />
                </button>
              </div>

              <button
                type="button"
                className={`btn-gold pdp-add-cart-btn ${justAdded ? 'btn-gold--added' : ''}`}
                onClick={handleAdd}
              >
                {justAdded ? (
                  <>
                    <Check size={18} strokeWidth={2.4} />
                    <span>{t.productDetails.addedToCart}</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag size={18} />
                    <span>{t.productDetails.addToCart} — {formatPrice(currentPrice * quantity, lang)}</span>
                  </>
                )}
              </button>

              <button
                type="button"
                className={`pdp-wishlist-toggle ${isFavorited ? 'pdp-wishlist-toggle--active' : ''}`}
                onClick={() => toggleWishlist(product)}
                aria-label={isFavorited ? t.productDetails.removeFromWishlist : t.productDetails.addToWishlist}
                title={isFavorited ? t.productDetails.removeFromWishlist : t.productDetails.addToWishlist}
              >
                <Heart size={20} fill={isFavorited ? 'currentColor' : 'none'} />
              </button>
            </div>

            {/* Trust Badges */}
            <div className="pdp-trust-badges">
              <div className="trust-item">
                <ShieldCheck size={18} className="gold-icon" />
                <span>{t.productDetails.authenticityGuarantee}</span>
              </div>
              <div className="trust-item">
                <Truck size={18} className="gold-icon" />
                <span>{t.hero.benefits[1]}</span>
              </div>
              <div className="trust-item">
                <Gift size={18} className="gold-icon" />
                <span>{lang === 'ar' ? 'تغليف هدايا فاخر ومحكم' : 'Luxury Keepsake Gift Packaging'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        <section className="pdp-related-section">
          <div className="section-title-wrap">
            <h2 className="section-main-title">{t.productDetails.relatedTitle}</h2>
            <Link to="/shop" className="section-view-all-btn">
              <span>{t.bestSellers.viewAll}</span>
              {isRTL ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
            </Link>
          </div>
          <div className="product-cards-grid">
            {related.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductDetails;
