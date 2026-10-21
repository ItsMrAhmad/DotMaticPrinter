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
import AboutUsModal from "@/components/AboutUsModal";
import AppointmentModal from "@/components/AppointmentModal";
import AllCategoriesModal from "@/components/AllCategoriesModal";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedProduct, setSelectedProduct] = useState<ModalProduct | null>(null);
  const [isAboutOpen, setIsAboutOpen] = useState<boolean>(false);
  const [isAppointmentOpen, setIsAppointmentOpen] = useState<boolean>(false);
  const [isCategoriesModalOpen, setIsCategoriesModalOpen] = useState<boolean>(false);

  const handleSelectCategory = (catId: string) => {
    setActiveCategory(catId);
    if (catId === "packaging" || catId === "packaging-solutions-section") {
      const el = document.getElementById("packaging-solutions-section");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else if (catId === "wedding" || catId === "wedding-section") {
      const el = document.getElementById("wedding-section");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      const el = document.getElementById("business-customers-section");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen flex flex-col bg-white selection:bg-[#F88521] selection:text-white">
      {/* 1. HEADER (With replica navigations, sub-navigation dropdowns, search & WhatsApp) */}
      <Header
        activeCategory={activeCategory}
        onSelectCategory={handleSelectCategory}
        onOpenProductModal={(p) => setSelectedProduct(p)}
        onOpenAbout={() => setIsAboutOpen(true)}
        onOpenAppointment={() => setIsAppointmentOpen(true)}
      />

      {/* 2. SECTION 1: HERO (Image 1 - Top Categories Sidebar + 'You think We Create' + 3 Sub-Cards) */}
      <InstaHero
        onSelectCategory={handleSelectCategory}
        onOpenProduct={(item) => setSelectedProduct(item)}
        onOpenAllCategories={() => setIsCategoriesModalOpen(true)}
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

      {/* 6. FOOTER */}
      <Footer onSelectCategory={handleSelectCategory} />

      {/* 7. FLOATING WHATSAPP (Bottom-Right Corner) */}
      <FloatingWhatsApp />

      {/* 8. PRODUCT MODAL */}
      <InstaProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

      {/* 9. ABOUT US MODAL */}
      <AboutUsModal
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
        onOpenAppointment={() => setIsAppointmentOpen(true)}
      />

      {/* 10. APPOINTMENT BOOKING MODAL */}
      <AppointmentModal
        isOpen={isAppointmentOpen}
        onClose={() => setIsAppointmentOpen(false)}
      />

      {/* 11. ALL CATEGORIES POPUP MODAL */}
      <AllCategoriesModal
        isOpen={isCategoriesModalOpen}
        onClose={() => setIsCategoriesModalOpen(false)}
        onSelectCategory={handleSelectCategory}
        onOpenProduct={(item) => setSelectedProduct(item)}
      />
    </main>
  );
}
