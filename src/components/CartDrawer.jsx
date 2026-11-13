import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { X, Plus, Minus, Trash2, ShoppingBag, Sparkles, ArrowRight, ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import { formatPrice } from '../utils/formatCurrency';

const CartDrawer = () => {
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
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

  if (!isCartOpen) return null;

  const amountRemaining = Math.max(0, freeShippingThreshold - subtotal);
  const progressPercent = Math.min(100, (subtotal / freeShippingThreshold) * 100);

  const handleProceedCheckout = () => {
    setIsCartOpen(false);
    navigate('/checkout');
  };

  return (
    <div className="cart-drawer-backdrop" onClick={() => setIsCartOpen(false)}>
      <aside
        className="cart-drawer-panel"
        onClick={(e) => e.stopPropagation()}
        aria-label="Shopping Cart Drawer"
      >
        {/* Header */}
        <div className="cart-drawer-header">
          <div className="cart-drawer-header__title">
            <ShoppingBag size={20} className="gold-icon" />
            <h3>{t.cart.title}</h3>
            <span className="cart-drawer-header__count">({cartItems.length})</span>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            onClick={() => setIsCartOpen(false)}
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        {/* Free Shipping Progress Indicator */}
        <div className="cart-shipping-bar">
          {amountRemaining > 0 ? (
            <p className="cart-shipping-bar__text">
              {t.cart.awayFromFree.replace('{amount}', formatPrice(amountRemaining, lang))}
            </p>
          ) : (
            <p className="cart-shipping-bar__unlocked">
              <Sparkles size={15} />
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

        {/* Drawer Body */}
        {cartItems.length === 0 ? (
          <div className="cart-empty-view">
            <div className="cart-empty-icon-wrap">
              <ShoppingBag size={44} strokeWidth={1.2} />
            </div>
            <h4>{t.cart.emptyTitle}</h4>
            <p>{t.cart.emptyDesc}</p>
            <button
              type="button"
              className="btn-gold"
              onClick={() => {
                setIsCartOpen(false);
                navigate('/shop');
              }}
            >
              {t.cart.exploreBtn}
            </button>
          </div>
        ) : (
          <>
            <div className="cart-items-scroll">
              {cartItems.map((item) => (
                <div key={item.key || item.id} className="cart-drawer-item">
                  <Link
                    to={`/product/${item.id}`}
                    onClick={() => setIsCartOpen(false)}
                    className="cart-item-thumb-link"
                  >
                    <img src={item.image} alt={item.name} className="cart-item-thumb" />
                  </Link>

                  <div className="cart-item-details">
                    <div className="cart-item-details__top">
                      <span className="cart-item-brand">{item.brand}</span>
                      <button
                        type="button"
                        className="cart-item-remove-btn"
                        onClick={() => removeFromCart(item.key || item.id)}
                        aria-label="Remove item"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>

                    <h4 className="cart-item-name">
                      <Link to={`/product/${item.id}`} onClick={() => setIsCartOpen(false)}>
                        {lang === 'ar' && item.nameAr ? item.nameAr : item.name}
                      </Link>
                    </h4>

                    <span className="cart-item-size-tag">{item.size}</span>

                    <div className="cart-item-details__bottom">
                      <div className="cart-quantity-pill">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.key || item.id, item.quantity - 1)}
                          aria-label="Decrease"
                        >
                          <Minus size={12} />
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.key || item.id, item.quantity + 1)}
                          aria-label="Increase"
                        >
                          <Plus size={12} />
                        </button>
                      </div>

                      <span className="cart-item-subtotal">
                        {formatPrice(item.price * item.quantity, lang)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Drawer Footer with Calculations */}
            <div className="cart-drawer-footer">
              <div className="cart-calc-row">
                <span>{t.cart.subtotal}</span>
                <span className="cart-calc-val">{formatPrice(subtotal, lang)}</span>
              </div>
              <div className="cart-calc-row">
                <span>{t.cart.shipping}</span>
                <span className="cart-calc-val">
                  {shippingCost === 0 ? t.cart.freeShipping : formatPrice(shippingCost, lang)}
                </span>
              </div>
              <div className="cart-calc-row cart-calc-row--total">
                <span>{t.cart.total}</span>
                <span className="cart-calc-total">{formatPrice(total, lang)}</span>
              </div>

              <button
                type="button"
                className="btn-gold btn-full cart-checkout-btn"
                onClick={handleProceedCheckout}
              >
                <span>{t.cart.checkoutBtn}</span>
                {isRTL ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
              </button>

              <button
                type="button"
                className="cart-clear-btn"
                onClick={clearCart}
              >
                {t.cart.clearCart}
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  );
};

export default CartDrawer;
