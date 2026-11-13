import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Truck, CheckCircle2, ArrowRight, ArrowLeft, CreditCard, DollarSign, Smartphone } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import { formatPrice } from '../utils/formatCurrency';

const Checkout = () => {
  const { cartItems, subtotal, clearCart } = useCart();
  const { t, lang, isRTL } = useLanguage();

  const [deliveryMethod, setDeliveryMethod] = useState('standard');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    country: 'United States',
    postalCode: ''
  });

  const shippingCost = deliveryMethod === 'express' ? 180 : (subtotal >= 3000 ? 0 : 100);
  const finalTotal = subtotal + shippingCost;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitOrder = async (e) => {
    e.preventDefault();
    const generatedNum = 'BSP-' + Math.floor(100000 + Math.random() * 900000);
    setOrderNumber(generatedNum);
    setOrderConfirmed(true);

    // Sync order to Node.js backend
    try {
      await fetch('http://localhost:5000/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: generatedNum,
          customer: formData,
          items: cartItems,
          subtotal,
          shipping: shippingCost,
          total: finalTotal,
          deliveryMethod,
          paymentMethod
        })
      });
    } catch (err) {
      console.log('Order saved locally (backend offline):', err);
    }

    clearCart();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (orderConfirmed) {
    return (
      <div className="container page-checkout-confirmed">
        <div className="checkout-success-card">
          <div className="success-icon-wrap">
            <CheckCircle2 size={54} />
          </div>
          <span className="section-eyebrow">
            <span className="gold-gem">✦</span>
            MAISON SCENTORA
          </span>
          <h1 className="success-title">{t.checkout.successTitle}</h1>
          <p className="success-desc">
            {t.checkout.successMessage.replace('{orderNumber}', orderNumber)}
          </p>

          <div className="order-details-recap">
            <div className="recap-row">
              <span>{lang === 'ar' ? 'المستلم:' : 'Customer:'}</span>
              <strong>{formData.fullName || 'VIP Collector'}</strong>
            </div>
            <div className="recap-row">
              <span>{lang === 'ar' ? 'العنوان:' : 'Delivery Address:'}</span>
              <strong>{formData.address ? `${formData.address}, ${formData.city}` : 'Default Address'}</strong>
            </div>
            <div className="recap-row">
              <span>{lang === 'ar' ? 'طريقة الدفع:' : 'Payment:'}</span>
              <strong>{paymentMethod === 'card' ? t.checkout.creditCard : paymentMethod === 'cod' ? t.checkout.cod : t.checkout.applePay}</strong>
            </div>
          </div>

          <Link to="/shop" className="btn-gold success-btn">
            {t.checkout.continueShopping}
          </Link>
        </div>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="container page-cart-empty">
        <div className="cart-empty-view">
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
    <div className="page-checkout">
      <div className="shop-header-banner">
        <div className="container">
          <span className="section-eyebrow">
            <span className="gold-gem">✦</span>
            CONCIERGE CHECKOUT
          </span>
          <h1 className="shop-header-title">{t.checkout.title}</h1>
          <p className="checkout-demo-notice">
            <ShieldCheck size={16} />
            {t.checkout.notice}
          </p>
        </div>
      </div>

      <div className="container checkout-container">
        <form onSubmit={handleSubmitOrder} className="checkout-form-grid">
          {/* Left Form: Details & Delivery */}
          <div className="checkout-details-column">
            {/* Customer Information */}
            <div className="checkout-section-box">
              <h3 className="checkout-box-title">{t.checkout.shippingInfo}</h3>

              <div className="form-grid-2">
                <div className="form-group">
                  <label>{t.checkout.fullName} *</label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    placeholder="Sarah Miller"
                    value={formData.fullName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label>{t.checkout.email} *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="sarah@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="form-grid-2">
                <div className="form-group">
                  <label>{t.checkout.phone} *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="+1 (555) 019-2834"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label>{t.checkout.city} *</label>
                  <input
                    type="text"
                    name="city"
                    required
                    placeholder="New York / Dubai"
                    value={formData.city}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label>{t.checkout.address} *</label>
                <input
                  type="text"
                  name="address"
                  required
                  placeholder="742 Evergreen Terrace, Apt 4B"
                  value={formData.address}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-grid-2">
                <div className="form-group">
                  <label>{t.checkout.country}</label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                  >
                    <option value="United States">United States</option>
                    <option value="United Arab Emirates">United Arab Emirates (الإمارات)</option>
                    <option value="Saudi Arabia">Saudi Arabia (المملكة العربية السعودية)</option>
                    <option value="Kuwait">Kuwait (الكويت)</option>
                    <option value="Qatar">Qatar (قطر)</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="France">France</option>
                    <option value="Canada">Canada</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>{t.checkout.postalCode}</label>
                  <input
                    type="text"
                    name="postalCode"
                    placeholder="10001"
                    value={formData.postalCode}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>

            {/* Delivery Method Selection */}
            <div className="checkout-section-box">
              <h3 className="checkout-box-title">{t.checkout.shippingMethod}</h3>
              <div className="delivery-options-list">
                <label className={`delivery-option ${deliveryMethod === 'standard' ? 'delivery-option--active' : ''}`}>
                  <input
                    type="radio"
                    name="delivery"
                    checked={deliveryMethod === 'standard'}
                    onChange={() => setDeliveryMethod('standard')}
                  />
                  <div className="delivery-option-desc">
                    <strong>{t.checkout.standardShipping}</strong>
                    <span>{subtotal >= 3000 ? t.cart.freeShipping : formatPrice(100, lang)}</span>
                  </div>
                </label>

                <label className={`delivery-option ${deliveryMethod === 'express' ? 'delivery-option--active' : ''}`}>
                  <input
                    type="radio"
                    name="delivery"
                    checked={deliveryMethod === 'express'}
                    onChange={() => setDeliveryMethod('express')}
                  />
                  <div className="delivery-option-desc">
                    <strong>{t.checkout.expressShipping}</strong>
                    <span>{formatPrice(180, lang)}</span>
                  </div>
                </label>
              </div>
            </div>

            {/* Payment Method Selection */}
            <div className="checkout-section-box">
              <h3 className="checkout-box-title">{t.checkout.paymentMethod}</h3>
              <div className="payment-options-list">
                <label className={`payment-option ${paymentMethod === 'card' ? 'payment-option--active' : ''}`}>
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === 'card'}
                    onChange={() => setPaymentMethod('card')}
                  />
                  <CreditCard size={18} className="gold-icon" />
                  <span>{t.checkout.creditCard}</span>
                </label>

                <label className={`payment-option ${paymentMethod === 'cod' ? 'payment-option--active' : ''}`}>
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === 'cod'}
                    onChange={() => setPaymentMethod('cod')}
                  />
                  <DollarSign size={18} className="gold-icon" />
                  <span>{t.checkout.cod}</span>
                </label>

                <label className={`payment-option ${paymentMethod === 'apple' ? 'payment-option--active' : ''}`}>
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === 'apple'}
                    onChange={() => setPaymentMethod('apple')}
                  />
                  <Smartphone size={18} className="gold-icon" />
                  <span>{t.checkout.applePay}</span>
                </label>
              </div>
            </div>
          </div>

          {/* Right Summary Column */}
          <div className="checkout-summary-column">
            <div className="order-summary-card">
              <h3 className="order-summary-title">{t.checkout.orderSummary}</h3>

              <div className="checkout-items-mini-list">
                {cartItems.map((item) => (
                  <div key={item.key || item.id} className="checkout-mini-item">
                    <img src={item.image} alt={item.name} className="checkout-mini-img" />
                    <div className="checkout-mini-info">
                      <span className="checkout-mini-name">
                        {lang === 'ar' && item.nameAr ? item.nameAr : item.name}
                      </span>
                      <span className="checkout-mini-qty">
                        {item.size} • Qty: {item.quantity}
                      </span>
                    </div>
                    <span className="checkout-mini-price">
                      {formatPrice(item.price * item.quantity, lang)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="cart-calc-row">
                <span>{t.cart.subtotal}</span>
                <span>{formatPrice(subtotal, lang)}</span>
              </div>
              <div className="cart-calc-row">
                <span>{t.cart.shipping}</span>
                <span>{shippingCost === 0 ? t.cart.freeShipping : formatPrice(shippingCost, lang)}</span>
              </div>
              <div className="cart-calc-row cart-calc-row--total">
                <span>{t.cart.total}</span>
                <span className="cart-calc-total">{formatPrice(finalTotal, lang)}</span>
              </div>

              <button
                type="submit"
                className="btn-gold btn-full checkout-submit-btn"
              >
                <span>{t.checkout.placeOrder}</span>
                {isRTL ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
              </button>

              <div className="summary-security-note">
                <ShieldCheck size={18} className="gold-icon" />
                <span>
                  {lang === 'ar'
                    ? 'شحن آمن ومؤمن 100% بتغليف هدايا فاخر ومحكم'
                    : 'Dispatched in discreet luxury temperature-controlled packaging'}
                </span>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;

