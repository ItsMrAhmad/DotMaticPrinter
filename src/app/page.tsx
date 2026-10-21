"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import InstaHero from "@/components/InstaHero";
import BusinessCustomersSection from "@/components/BusinessCustomersSection";
import PackagingSolutionsSection from "@/components/PackagingSolutionsSection";
import WeddingSection from "@/components/WeddingSection";
import InstaProductModal, { ModalProduct } from "@/components/InstaProductModal";
import { Product } from "@/data/products";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedProduct, setSelectedProduct] = useState<ModalProduct | null>(null);

  const handleSelectCategory = (catId: string) => {
    setActiveCategory(catId);
    // Smooth scroll to relevant section
    if (catId === "packaging") {
      const el = document.getElementById("packaging-solutions-section");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      const el = document.getElementById("business-customers-section");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleOpenLegacyProduct = (p: Product) => {
    setSelectedProduct({
      title: p.title,
      image: "/images/cat-business-cards.jpg",
      category: p.category,
      desc: p.description,
    });
  };

  return (
    <main className="min-h-screen flex flex-col bg-white selection:bg-[#F88521] selection:text-white">
      {/* 1. HEADER (Kept as is) */}
      <Header
        activeCategory={activeCategory}
        onSelectCategory={handleSelectCategory}
        onOpenProductModal={handleOpenLegacyProduct}
      />

      {/* 2. SECTION 1: HERO (Image 1 - Top Categories Sidebar + 'You think We Create' + 3 Sub-Cards) */}
      <InstaHero
        onSelectCategory={handleSelectCategory}
        onOpenProduct={(item) => setSelectedProduct(item)}
      />

      {/* 3. SECTION 2: FOR OUR BUSINESS CUSTOMERS (Image 2 - 12 Clean White Cards) */}
      <BusinessCustomersSection
        onOpenProduct={(item) => setSelectedProduct(item)}
      />

      {/* 4. SECTION 3: PACKAGING SOLUTIONS (Image 3 - 5 Colored Feature Cards) */}
      <PackagingSolutionsSection
        onOpenProduct={(item) => setSelectedProduct(item)}
      />

      {/* 5. SECTION 4: WEDDING SECTION (Image 4 - 10 Wedding Cards Grid) */}
      <WeddingSection
        onOpenProduct={(item) => setSelectedProduct(item)}
      />

      {/* 6. FOOTER (Kept as is) */}
      <Footer onSelectCategory={handleSelectCategory} />

      {/* 7. FLOATING WHATSAPP (Bottom-Right Corner) */}
      <FloatingWhatsApp />

      {/* 8. PRODUCT MODAL */}
      <InstaProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </main>
  );
}
