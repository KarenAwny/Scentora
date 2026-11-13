import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight, ArrowLeft, ShieldCheck, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import { formatPrice } from '../utils/formatCurrency';

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    clearCart,
    subtotal,
    shippingCost,
    total,
    freeShippingThreshold
  } = useCart();

  const { t, lang, isRTL } = useLanguage();
  const navigate = useNavigate();

  const amountRemaining = Math.max(0, freeShippingThreshold - subtotal);
  const progressPercent = Math.min(100, (subtotal / freeShippingThreshold) * 100);

  if (cartItems.length === 0) {
    return (
      <div className="container page-cart-empty">
        <div className="cart-empty-view">
          <div className="cart-empty-icon-wrap">
            <ShoppingBag size={48} strokeWidth={1.2} />
          </div>
          <h2>{t.cart.emptyTitle}</h2>
          <p>{t.cart.emptyDesc}</p>
          <Link to="/shop" className="btn-gold">
            {t.cart.exploreBtn}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="page-cart-full">
      <div className="shop-header-banner">
        <div className="container">
          <span className="section-eyebrow">
            <span className="gold-gem">✦</span>
            HAUTE PARFUMERIE
          </span>
          <h1 className="shop-header-title">{t.cart.title}</h1>
        </div>
      </div>

      <div className="container cart-full-container">
        {/* Free Shipping Strip */}
        <div className="cart-shipping-bar cart-shipping-bar--full">
          {amountRemaining > 0 ? (
            <p className="cart-shipping-bar__text">
              {t.cart.awayFromFree.replace('{amount}', formatPrice(amountRemaining, lang))}
            </p>
          ) : (
            <p className="cart-shipping-bar__unlocked">
              <Sparkles size={16} />
              {t.cart.freeShippingNote}
            </p>
          )}
          <div className="shipping-progress-track">
            <div
              className="shipping-progress-fill"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        <div className="cart-full-grid">
          {/* Left Table / List */}
          <div className="cart-full-items-col">
            <div className="cart-items-table-header">
              <span>{lang === 'ar' ? 'المنتج' : 'Product'}</span>
              <span>{t.cart.size}</span>
              <span>{t.cart.quantity}</span>
              <span>{t.cart.subtotal}</span>
              <span></span>
            </div>

            <div className="cart-full-items-list">
              {cartItems.map((item) => (
                <div key={item.key || item.id} className="cart-full-item-row">
                  <div className="cart-full-product-info">
                    <img src={item.image} alt={item.name} className="cart-full-thumb" />
                    <div>
                      <span className="cart-item-brand">{item.brand}</span>
                      <h4 className="cart-full-title">
                        <Link to={`/product/${item.id}`}>
                          {lang === 'ar' && item.nameAr ? item.nameAr : item.name}
                        </Link>
                      </h4>
                      <span className="cart-full-price-mobile">{formatPrice(item.price, lang)}</span>
                    </div>
                  </div>

                  <div className="cart-full-size-cell">
                    <span className="cart-item-size-tag">{item.size}</span>
                  </div>

                  <div className="cart-full-quantity-cell">
                    <div className="cart-quantity-pill">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.key || item.id, item.quantity - 1)}
                        aria-label="Decrease"
                      >
                        <Minus size={13} />
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.key || item.id, item.quantity + 1)}
                        aria-label="Increase"
                      >
                        <Plus size={13} />
                      </button>
                    </div>
                  </div>

                  <div className="cart-full-subtotal-cell">
                    <span>{formatPrice(item.price * item.quantity, lang)}</span>
                  </div>

                  <div className="cart-full-action-cell">
                    <button
                      type="button"
                      className="cart-item-remove-btn"
                      onClick={() => removeFromCart(item.key || item.id)}
                      aria-label="Remove"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-full-actions-row">
              <Link to="/shop" className="btn-outline-gold">
                {lang === 'ar' ? 'متابعة التسوق' : 'Continue Shopping'}
              </Link>
              <button
                type="button"
                className="cart-clear-btn"
                onClick={clearCart}
              >
                {t.cart.clearCart}
              </button>
            </div>
          </div>

          {/* Right Summary */}
          <div className="cart-full-summary-col">
            <div className="order-summary-card">
              <h3 className="order-summary-title">{t.checkout.orderSummary}</h3>

              <div className="cart-calc-row">
                <span>{t.cart.subtotal}</span>
                <span>{formatPrice(subtotal, lang)}</span>
              </div>
              <div className="cart-calc-row">
                <span>{t.cart.shipping}</span>
                <span>
                  {shippingCost === 0 ? t.cart.freeShipping : formatPrice(shippingCost, lang)}
                </span>
              </div>
              <div className="cart-calc-row cart-calc-row--total">
                <span>{t.cart.total}</span>
                <span className="cart-calc-total">{formatPrice(total, lang)}</span>
              </div>

              <button
                type="button"
                className="btn-gold btn-full checkout-full-btn"
                onClick={() => navigate('/checkout')}
              >
                <span>{t.cart.checkoutBtn}</span>
                {isRTL ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
              </button>

              <div className="summary-security-note">
                <ShieldCheck size={18} className="gold-icon" />
                <span>
                  {lang === 'ar'
                    ? 'دفع مشفر وآمن 100% مع ضمان استرداد الأموال'
                    : '100% Secure Encrypted Checkout & Authenticity Guarantee'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

