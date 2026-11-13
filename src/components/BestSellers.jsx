import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import ProductCard from './ProductCard';
import QuickViewModal from './QuickViewModal';
import { PRODUCTS } from '../data/products';
import { useLanguage } from '../context/LanguageContext';

const BestSellers = () => {
  const { t, isRTL } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  const filters = [
    { id: 'all', label: t.bestSellers.filterAll },
    { id: 'women', label: t.bestSellers.filterWomen },
    { id: 'perfume', label: t.nav.perfume },
    { id: 'bath-and-body-works', label: t.nav.bathAndBody }
  ];

  const filteredProducts = PRODUCTS.filter((p) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'women') return p.gender === 'women';
    if (activeFilter === 'perfume') return p.category !== 'bath-and-body-works';
    if (activeFilter === 'bath-and-body-works') return p.category === 'bath-and-body-works' || p.brand?.toLowerCase().includes('bath');
    return true;
  }).slice(0, 8);

  return (
    <section className="bestsellers-section" aria-labelledby="bestsellers-heading">
      <div className="container">
        {/* Section Header */}
        <div className="section-title-wrap">
          <div className="section-title-left">
            <span className="section-eyebrow">
              <span className="gold-gem">✦</span>
              {t.brand.name} SELECTION
            </span>
            <h2 id="bestsellers-heading" className="section-main-title">
              {t.bestSellers.title}
            </h2>
            <p className="section-subtitle">{t.bestSellers.subtitle}</p>
          </div>

          <Link to="/shop" className="section-view-all-btn">
            <span>{t.bestSellers.viewAll}</span>
            {isRTL ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
          </Link>
        </div>

        {/* Filter Pills */}
        <div className="bestsellers-filters" role="tablist">
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              role="tab"
              aria-selected={activeFilter === f.id}
              className={`filter-pill ${activeFilter === f.id ? 'filter-pill--active' : ''}`}
              onClick={() => setActiveFilter(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* 8 Product Grid */}
        <div className="product-cards-grid">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={(p) => setQuickViewProduct(p)}
            />
          ))}
        </div>
      </div>

      {/* Quick View Modal */}
      {quickViewProduct && (
        <QuickViewModal
          product={quickViewProduct}
          onClose={() => setQuickViewProduct(null)}
        />
      )}
    </section>
  );
};

export default BestSellers;
