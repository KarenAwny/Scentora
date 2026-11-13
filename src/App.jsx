import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetails from './pages/ProductDetails';
import Wishlist from './pages/Wishlist';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Brands from './pages/Brands';
import { useCart } from './context/CartContext';
import { useLanguage } from './context/LanguageContext';

const ToastBanner = () => {
  const { toastMessage, setIsCartOpen } = useCart();
  const { lang } = useLanguage();

  if (!toastMessage) return null;

  const text = typeof toastMessage === 'string'
    ? toastMessage
    : (lang === 'ar' ? toastMessage.ar : toastMessage.en);

  return (
    <div className="luxury-toast-banner" role="status" aria-live="polite">
      <Sparkles size={16} className="gold-icon" />
      <span className="toast-text">{text}</span>
      <button
        type="button"
        className="toast-action-btn"
        onClick={() => setIsCartOpen(true)}
      >
        {lang === 'ar' ? 'عرض السلة' : 'VIEW BAG'}
      </button>
    </div>
  );
};

function App() {
  return (
    <div className="bespecial-app">
      {/* SECTION 01: TOP ANNOUNCEMENT BAR */}
      <AnnouncementBar />

      {/* SECTION 02: MAIN NAVIGATION */}
      <Navbar />

      <main className="main-content-flow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/brands" element={<Brands />} />
        </Routes>
      </main>

      {/* SECTION 10: FOOTER */}
      <Footer />

      {/* Slide-over Cart Drawer */}
      <CartDrawer />

      {/* Floating Action Notifications */}
      <ToastBanner />
    </div>
  );
}

export default App;
