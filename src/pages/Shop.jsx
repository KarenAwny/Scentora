import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, SlidersHorizontal, X, RotateCcw } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import QuickViewModal from '../components/QuickViewModal';
import { PRODUCTS } from '../data/products';
import { useLanguage } from '../context/LanguageContext';
import { formatPrice } from '../utils/formatCurrency';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { t, lang, isRTL } = useLanguage();

  const urlCategory = searchParams.get('category') || 'all';
  const urlGender = searchParams.get('gender') || 'all';
  const urlFilter = searchParams.get('filter') || 'all';
  const urlSearch = searchParams.get('search') || '';

  const [selectedGender, setSelectedGender] = useState(urlGender);
  const [selectedCategory, setSelectedCategory] = useState(urlCategory);
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [selectedPriceMax, setSelectedPriceMax] = useState(4000);
  const [selectedRating, setSelectedRating] = useState('all');
  const [searchQuery, setSearchQuery] = useState(urlSearch);
  const [sortBy, setSortBy] = useState('featured');
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  useEffect(() => {
    setSelectedGender(searchParams.get('gender') || 'all');
    setSelectedCategory(searchParams.get('category') || 'all');
    setSearchQuery(searchParams.get('search') || '');
  }, [searchParams]);

  // Extract unique brands
  const brands = useMemo(() => {
    const list = Array.from(new Set(PRODUCTS.map((p) => p.brand)));
    return ['all', ...list];
  }, []);

  const handleResetFilters = () => {
    setSelectedGender('all');
    setSelectedCategory('all');
    setSelectedBrand('all');
    setSelectedPriceMax(4000);
    setSelectedRating('all');
    setSearchQuery('');
    setSortBy('featured');
    setSearchParams({});
  };

  const filteredProducts = useMemo(() => {
    let list = [...PRODUCTS];

    if (selectedGender !== 'all') {
      list = list.filter((p) => p.gender === selectedGender || p.gender === 'unisex');
    }

    if (selectedCategory !== 'all') {
      if (selectedCategory === 'perfume') {
        list = list.filter((p) => p.category !== 'bath-and-body-works');
      } else if (selectedCategory === 'bath-and-body-works') {
        list = list.filter((p) => p.category === 'bath-and-body-works' || p.brand?.toLowerCase().includes('bath'));
      } else {
        list = list.filter((p) => p.category === selectedCategory);
      }
    }

    if (urlFilter === 'bestseller') {
      list = list.filter((p) => p.isBestSeller);
    } else if (urlFilter === 'sale') {
      list = list.filter((p) => !!p.discount);
    }

    if (selectedBrand !== 'all') {
      list = list.filter((p) => p.brand === selectedBrand);
    }

    if (selectedPriceMax < 4000) {
      list = list.filter((p) => p.price <= selectedPriceMax);
    }

    if (selectedRating !== 'all') {
      list = list.filter((p) => p.rating >= Number(selectedRating));
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter((p) => {
        return (
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          (p.nameAr && p.nameAr.toLowerCase().includes(q)) ||
          p.shortDescEn.toLowerCase().includes(q)
        );
      });
    }

    if (sortBy === 'price-asc') {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      list.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      list.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'bestseller') {
      list.sort((a, b) => (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0));
    }

    return list;
  }, [
    selectedGender,
    selectedCategory,
    selectedBrand,
    selectedPriceMax,
    selectedRating,
    searchQuery,
    sortBy,
    urlFilter
  ]);

  return (
    <div className="page-shop">
      {/* Shop Hero Banner */}
      <div className="shop-header-banner">
        <div className="shop-header-banner__bg">
          <img
            src="/images/shop-banner-solo-woman.jpg"
            alt="Scentora luxury perfume campaign featuring elegant woman holding perfume"
            className="shop-header-banner__img"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = "/images/bespecial-hero.jpg";
            }}
          />
          <div className="shop-header-banner__overlay" />
        </div>
        <div className="container shop-header-banner__container">
          <span className="section-eyebrow">
            <span className="gold-gem">✦</span>
            {t.brand.name} CATALOG
          </span>
          <h1 className="shop-header-title">{t.shopPage.title}</h1>
          <p className="shop-header-subtitle">{t.shopPage.subtitle}</p>
        </div>
      </div>

      <div className="container shop-layout-container">
        {/* Top Control Bar */}
        <div className="shop-control-bar">
          <div className="shop-search-field">
            <Search size={16} />
            <input
              type="text"
              placeholder={t.nav.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button
                type="button"
                className="clear-search-btn"
                onClick={() => setSearchQuery('')}
              >
                <X size={14} />
              </button>
            )}
          </div>

          <div className="shop-control-right">
            <button
              type="button"
              className="mobile-filter-trigger"
              onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
            >
              <SlidersHorizontal size={16} />
              <span>{t.shopPage.filters}</span>
            </button>

            <span className="results-count">
              {t.shopPage.showing.replace('{count}', filteredProducts.length)}
            </span>

            <div className="shop-sort-wrap">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                aria-label={t.shopPage.sortBy}
              >
                <option value="featured">{t.shopPage.sortFeatured}</option>
                <option value="price-asc">{t.shopPage.sortPriceAsc}</option>
                <option value="price-desc">{t.shopPage.sortPriceDesc}</option>
                <option value="rating">{t.shopPage.sortRating}</option>
                <option value="bestseller">{t.shopPage.sortBestSeller}</option>
              </select>
            </div>
          </div>
        </div>

        {/* Main Content: Sidebar Filters + Products Grid */}
        <div className="shop-main-layout">
          {/* Filters Sidebar */}
          <aside className={`shop-sidebar-filters ${mobileFilterOpen ? 'shop-sidebar-filters--mobile-open' : ''}`}>
            <div className="sidebar-filter-header">
              <h3 className="sidebar-filter-title">{t.shopPage.filters}</h3>
              <button
                type="button"
                className="reset-filters-btn"
                onClick={handleResetFilters}
              >
                <RotateCcw size={13} />
                <span>{t.shopPage.clearFilters}</span>
              </button>
              <button
                type="button"
                className="close-mobile-filters"
                onClick={() => setMobileFilterOpen(false)}
              >
                <X size={18} />
              </button>
            </div>

            {/* Gender Filter */}
            <div className="filter-group">
              <h4 className="filter-group-title">{t.shopPage.filterGender}</h4>
              <div className="filter-options-list">
                {[
                  { id: 'all', label: t.bestSellers.filterAll },
                  { id: 'women', label: lang === 'ar' ? 'النساء' : 'Women' }
                ].map((g) => (
                  <label key={g.id} className="filter-checkbox-label">
                    <input
                      type="radio"
                      name="gender"
                      checked={selectedGender === g.id}
                      onChange={() => setSelectedGender(g.id)}
                    />
                    <span>{g.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Category Filter */}
            <div className="filter-group">
              <h4 className="filter-group-title">{t.shopPage.filterCategory}</h4>
              <div className="filter-options-list">
                {[
                  { id: 'all', label: t.bestSellers.filterAll },
                  { id: 'perfume', label: t.nav.perfume },
                  { id: 'bath-and-body-works', label: t.nav.bathAndBody }
                ].map((c) => (
                  <label key={c.id} className="filter-checkbox-label">
                    <input
                      type="radio"
                      name="category"
                      checked={selectedCategory === c.id}
                      onChange={() => setSelectedCategory(c.id)}
                    />
                    <span>{c.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Filter Slider */}
            <div className="filter-group">
              <div className="filter-price-header">
                <h4 className="filter-group-title">{t.shopPage.filterPrice}</h4>
                <span className="price-range-val">
                  {lang === 'ar' ? `حتى ${formatPrice(selectedPriceMax, lang)}` : `Up to ${formatPrice(selectedPriceMax, lang)}`}
                </span>
              </div>
              <input
                type="range"
                min="100"
                max="4000"
                step="50"
                value={selectedPriceMax}
                onChange={(e) => setSelectedPriceMax(Number(e.target.value))}
                className="filter-range-slider"
              />
              <div className="price-slider-bounds">
                <span>{formatPrice(100, lang)}</span>
                <span>{formatPrice(4000, lang)}</span>
              </div>
            </div>

            {/* Rating Filter */}
            <div className="filter-group">
              <h4 className="filter-group-title">Minimum Rating</h4>
              <div className="filter-options-list">
                {[
                  { val: 'all', label: 'Any Rating' },
                  { val: '4.9', label: '★ 4.9 & Above' },
                  { val: '4.8', label: '★ 4.8 & Above' },
                  { val: '4.7', label: '★ 4.7 & Above' }
                ].map((r) => (
                  <label key={r.val} className="filter-checkbox-label">
                    <input
                      type="radio"
                      name="rating"
                      checked={selectedRating === r.val}
                      onChange={() => setSelectedRating(r.val)}
                    />
                    <span>{r.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </aside>

          {/* Product Grid Area */}
          <main className="shop-products-column">
            {filteredProducts.length === 0 ? (
              <div className="shop-empty-state">
                <h3>{lang === 'ar' ? 'لم يتم العثور على منتجات' : 'No Products Found'}</h3>
                <p>{t.shopPage.noResults}</p>
                <button
                  type="button"
                  className="btn-gold"
                  style={{ marginTop: '1rem' }}
                  onClick={handleResetFilters}
                >
                  {t.shopPage.resetFilters}
                </button>
              </div>
            ) : (
              <div className="product-cards-grid product-cards-grid--shop">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onQuickView={(p) => setQuickViewProduct(p)}
                  />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Quick View Modal */}
      {quickViewProduct && (
        <QuickViewModal
          product={quickViewProduct}
          onClose={() => setQuickViewProduct(null)}
        />
      )}
    </div>
  );
};

export default Shop;
