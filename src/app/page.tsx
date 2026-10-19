"use client";

import React, { useState, useMemo } from "react";
import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import ValueProps from "@/components/ValueProps";
import CategoryGrid from "@/components/CategoryGrid";
import ProductCard from "@/components/ProductCard";
import ProductModal from "@/components/ProductModal";
import InstantQuoteCalculator from "@/components/InstantQuoteCalculator";
import WhyChooseUs from "@/components/WhyChooseUs";
import ReviewsSection from "@/components/ReviewsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { PRODUCTS, CATEGORIES, Product, BUSINESS_INFO } from "@/data/products";
import { Sparkles, Filter, MessageCircle } from "lucide-react";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("popular");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let list = [...PRODUCTS];

    if (activeCategory !== "all") {
      list = list.filter((p) => p.categorySlug === activeCategory || p.id === activeCategory);
      // Check if activeCategory matches category id
      const matchedCat = CATEGORIES.find((c) => c.id === activeCategory);
      if (matchedCat) {
        list = PRODUCTS.filter((p) => p.categorySlug === matchedCat.slug);
      }
    }

    if (sortBy === "popular") {
      list.sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0));
    } else if (sortBy === "rating") {
      list.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "reviews") {
      list.sort((a, b) => b.reviewsCount - a.reviewsCount);
    }

    return list;
  }, [activeCategory, sortBy]);

  const scrollToCatalog = () => {
    const el = document.getElementById("catalog-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSelectCategory = (catId: string) => {
    setActiveCategory(catId);
    scrollToCatalog();
  };

  return (
    <main className="min-h-screen flex flex-col bg-slate-50 selection:bg-[#F88521] selection:text-white">
      {/* 1. Header with Top Announcement, Logo, Search, Menu */}
      <Header
        activeCategory={activeCategory}
        onSelectCategory={handleSelectCategory}
        onOpenProductModal={(p) => setSelectedProduct(p)}
      />

      {/* 2. Hero Interactive Banner Showcase */}
      <HeroBanner
        onExploreClick={scrollToCatalog}
        onSelectCategory={handleSelectCategory}
      />

      {/* 3. Value Props (Pillars of Trust) */}
      <ValueProps />

      {/* 4. Visual Category Grid Showcase */}
      <CategoryGrid
        activeCategory={activeCategory}
        onSelectCategory={handleSelectCategory}
      />

      {/* 5. Main Product Catalog Section */}
      <section id="catalog-section" className="py-14 sm:py-20 max-w-7xl mx-auto px-4 w-full">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-8 gap-4 border-b border-slate-200 pb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#F88521] mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full Print &amp; Packaging Lineup</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              {activeCategory === "all"
                ? "All Featured Printing Products"
                : CATEGORIES.find((c) => c.id === activeCategory)?.name || "Selected Products"}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Showing {filteredProducts.length} items with direct WhatsApp quotation &amp; custom sizing options.
            </p>
          </div>

          {/* Sort Selector */}
          <div className="flex items-center gap-2 self-end md:self-auto">
            <span className="text-xs text-slate-400 font-semibold flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" />
              Sort By:
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 text-xs font-bold rounded-xl border border-slate-200 bg-white text-slate-800 focus:outline-none focus:border-[#2D3092]"
            >
              <option value="popular">Most Popular</option>
              <option value="rating">Highest Rated (5.0★)</option>
              <option value="reviews">Most Reviews</option>
            </select>
          </div>
        </div>

        {/* Category Filter Pills on Top of Grid */}
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-4 mb-6">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
              activeCategory === "all"
                ? "bg-[#2D3092] text-white shadow-xs"
                : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            All Categories ({PRODUCTS.length})
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                activeCategory === cat.id
                  ? "bg-[#2D3092] text-white shadow-xs"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {cat.name} ({cat.itemCount})
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onOpenDetails={(p) => setSelectedProduct(p)}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 max-w-lg mx-auto">
            <h3 className="font-black text-lg text-slate-900 mb-2">
              Looking for a custom size or unlisted packaging style?
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              We engineer custom dies for any box dimensions, bottle carton, or specialty card in our Lahore facility.
            </p>
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent(
                "Hello Dot Matic Printer! I am looking for a custom packaging / printing style not listed on your website."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-bold text-xs"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Ask Our Prepress Team on WhatsApp</span>
            </a>
          </div>
        )}
      </section>

      {/* 6. Instant Custom Quote Calculator */}
      <InstantQuoteCalculator />

      {/* 7. Why Choose Us (Production Capability) */}
      <WhyChooseUs />

      {/* 8. Client Reviews & Testimonials */}
      <ReviewsSection />

      {/* 9. Frequently Asked Questions */}
      <FAQSection />

      {/* 10. Footer */}
      <Footer onSelectCategory={handleSelectCategory} />

      {/* 11. Floating WhatsApp (Right-Bottom Corner) */}
      <FloatingWhatsApp />

      {/* 12. Product Details Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </main>
  );
}
