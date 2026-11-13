import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { Search, User, Heart, ShoppingBag, Menu, X, ArrowRight, ArrowLeft } from 'lucide-react';
import BrandLogo from './BrandLogo';
import ThemeToggle from './ThemeToggle';
import LanguageSwitcher from './LanguageSwitcher';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useLanguage } from '../context/LanguageContext';
import { PRODUCTS } from '../data/products';
import { formatPrice } from '../utils/formatCurrency';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [accountModalOpen, setAccountModalOpen] = useState(false);

  const { cartCount, setIsCartOpen, showToast } = useCart();
  const { wishlistCount } = useWishlist();
  const { t, lang, isRTL } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();
  const searchInputRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setSearchOpen(false);
  }, [location.pathname, location.search]);

  const navLinks = [
    { label: t.nav.perfume, path: '/shop?category=perfume' },
    { label: t.nav.bathAndBody, path: '/shop?category=bath-and-body-works' }
  ];

  const filteredSearch = searchQuery.trim()
    ? PRODUCTS.filter((p) => {
        const q = searchQuery.toLowerCase();
        return (
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          (p.nameAr && p.nameAr.toLowerCase().includes(q)) ||
          p.shortDescEn.toLowerCase().includes(q) ||
          (p.shortDescAr && p.shortDescAr.toLowerCase().includes(q))
        );
      })
    : [];

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
    }
  };

  const handleAccountSubmit = (e) => {
    e.preventDefault();
    setAccountModalOpen(false);
    showToast({
      en: "Welcome to Scentora Club",
      ar: "مرحباً بك في نادي سنتورا الخاص"
    });
  };

  return (
    <>
      <header className={`navbar-header ${isScrolled ? 'navbar-header--scrolled' : ''}`}>
        <div className="container navbar-container">
          {/* Mobile Menu Button (Mobile view) */}
          <button
            type="button"
            className="navbar-mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* LEFT: Logo */}
          <div className="navbar-logo-area">
            <BrandLogo />
          </div>

          {/* CENTER: Navigation Links */}
          <nav className="navbar-nav" aria-label="Main Navigation">
            <ul className="navbar-nav__list">
              {navLinks.map((item) => (
                <li key={item.path} className="navbar-nav__item">
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `navbar-nav__link ${isActive && item.path === location.pathname ? 'navbar-nav__link--active' : ''}`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* RIGHT: Actions */}
          <div className="navbar-actions">
            {/* Inline search or search button */}
            <div className={`navbar-search-box ${searchOpen ? 'navbar-search-box--open' : ''}`}>
              <form onSubmit={handleSearchSubmit} className="navbar-search-form">
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder={t.nav.searchPlaceholder}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="navbar-search-input"
                />
                <button
                  type="button"
                  className="navbar-search-btn"
                  onClick={() => {
                    if (!searchOpen) {
                      setSearchOpen(true);
                      setTimeout(() => searchInputRef.current?.focus(), 150);
                    } else if (searchQuery.trim()) {
                      navigate(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
                      setSearchOpen(false);
                    } else {
                      setSearchOpen(false);
                    }
                  }}
                  aria-label="Search"
                >
                  <Search size={18} strokeWidth={1.7} />
                </button>
              </form>

              {/* Instant Search Results Dropdown */}
              {searchOpen && searchQuery.trim() && (
                <div className="instant-search-dropdown">
                  <div className="instant-search-header">
                    <span>
                      {lang === 'ar' ? `النتائج المطابقة (${filteredSearch.length})` : `MATCHING RESULTS (${filteredSearch.length})`}
                    </span>
                    <button
                      type="button"
                      className="instant-search-close"
                      onClick={() => setSearchOpen(false)}
                    >
                      <X size={14} />
                    </button>
                  </div>
                  {filteredSearch.length === 0 ? (
                    <div className="instant-search-empty">
                      {lang === 'ar' ? 'لم يتم العثور على عطور مطابقة' : 'No matching perfumes found.'}
                    </div>
                  ) : (
                    <div className="instant-search-list">
                      {filteredSearch.slice(0, 4).map((p) => (
                        <Link
                          key={p.id}
                          to={`/product/${p.id}`}
                          className="instant-search-item"
                          onClick={() => setSearchOpen(false)}
                        >
                          <img src={p.image} alt={p.name} className="instant-search-img" />
                          <div className="instant-search-info">
                            <span className="instant-search-brand">{p.brand}</span>
                            <span className="instant-search-title">
                              {lang === 'ar' && p.nameAr ? p.nameAr : p.name}
                            </span>
                            <span className="instant-search-price">{formatPrice(p.price, lang)}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Language Switcher */}
            <LanguageSwitcher />

            {/* Dark/Light Mode Toggle */}
            <ThemeToggle />

            {/* Admin Panel Direct Link */}
            <a
              href="http://localhost:5000/admin"
              target="_blank"
              rel="noreferrer"
              className="navbar-action-btn"
              aria-label={lang === 'ar' ? 'لوحة التحكم الإدارية' : 'Admin Dashboard'}
              title={lang === 'ar' ? 'لوحة التحكم الإدارية' : 'Admin Dashboard'}
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
                <rect x="3" y="14" width="7" height="7"></rect>
              </svg>
            </a>

            {/* Account Icon */}
            <button
              type="button"
              className="navbar-action-btn"
              onClick={() => setAccountModalOpen(true)}
              aria-label={t.nav.account}
              title={t.nav.account}
            >
              <User size={19} strokeWidth={1.6} />
            </button>

            {/* Wishlist Icon */}
            <Link
              to="/wishlist"
              className="navbar-action-btn"
              aria-label={`${t.nav.wishlist} (${wishlistCount})`}
              title={t.nav.wishlist}
            >
              <Heart size={19} strokeWidth={1.6} />
              {wishlistCount > 0 && <span className="action-badge">{wishlistCount}</span>}
            </Link>

            {/* Cart Icon */}
            <button
              type="button"
              className="navbar-action-btn"
              onClick={() => setIsCartOpen(true)}
              aria-label={`${t.nav.cart} (${cartCount})`}
              title={t.nav.cart}
            >
              <ShoppingBag size={19} strokeWidth={1.6} />
              <span className="action-badge">{cartCount}</span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'mobile-nav-drawer--open' : ''}`}>
          <div className="mobile-nav-content">
            <form onSubmit={handleSearchSubmit} className="mobile-nav-search">
              <Search size={16} />
              <input
                type="text"
                placeholder={t.nav.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>

            <ul className="mobile-nav-links">
              {navLinks.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="mobile-nav-link"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span>{item.label}</span>
                    {isRTL ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/wishlist"
                  className="mobile-nav-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>{t.nav.wishlist} ({wishlistCount})</span>
                  {isRTL ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="mobile-nav-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>{t.nav.about}</span>
                  {isRTL ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
                </Link>
              </li>
            </ul>

            <div className="mobile-nav-footer">
              <LanguageSwitcher />
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      {/* Account Login Modal */}
      {accountModalOpen && (
        <div className="modal-backdrop" onClick={() => setAccountModalOpen(false)}>
          <div className="account-modal-box" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="modal-close-btn"
              onClick={() => setAccountModalOpen(false)}
              aria-label="Close"
            >
              <X size={18} />
            </button>
            <div className="modal-header">
              <BrandLogo showTagline={false} />
              <h3 className="modal-title">
                {lang === 'ar' ? 'تسجيل الدخول إلى حسابك الخاص' : 'Sign In to Your Privé Account'}
              </h3>
              <p className="modal-desc">
                {lang === 'ar'
                  ? 'تمتع بتوصيات عطرية مخصصة، عروض حصرية، وخصومات خاصة بأعضاء نادي سنتورا.'
                  : 'Enjoy personalized fragrance wardrobes, exclusive offers, and private member perks.'}
              </p>
            </div>
            <form onSubmit={handleAccountSubmit} className="modal-form">
              <div className="form-group">
                <label>{lang === 'ar' ? 'البريد الإلكتروني' : 'EMAIL ADDRESS'}</label>
                <input type="email" required placeholder="vip@scentora.com" />
              </div>
              <div className="form-group">
                <label>{lang === 'ar' ? 'كلمة المرور' : 'PASSWORD'}</label>
                <input type="password" required placeholder="••••••••" />
              </div>
              <button type="submit" className="btn-gold btn-full">
                {lang === 'ar' ? 'دخول الحساب' : 'SIGN IN'}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
