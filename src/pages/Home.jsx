import React from 'react';
import Hero from '../components/Hero';
import CategorySection from '../components/CategorySection';
import CollectionBanners from '../components/CollectionBanners';
import BestSellers from '../components/BestSellers';
import PromoBanners from '../components/PromoBanners';
import BenefitsSection from '../components/BenefitsSection';
import ReviewsSection from '../components/ReviewsSection';

const Home = () => {
  return (
    <div className="page-home">
      {/* SECTION 03: HERO BANNER */}
      <Hero />

      {/* SECTION 04: CATEGORY CIRCLES */}
      <CategorySection />

      {/* SECTION 05: FEATURED COLLECTION BANNERS */}
      <CollectionBanners />

      {/* SECTION 06: BEST SELLING PERFUMES */}
      <BestSellers />

      {/* SECTION 07: PROMOTIONAL BANNERS */}
      <PromoBanners />

      {/* SECTION 08: WHY CHOOSE US */}
      <BenefitsSection />

      {/* SECTION 09: CUSTOMER REVIEWS */}
      <ReviewsSection />
    </div>
  );
};

export default Home;
