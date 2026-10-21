"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, MessageCircle } from "lucide-react";
import { BUSINESS_INFO } from "@/data/products";

interface InstaHeroProps {
  onSelectCategory: (name: string) => void;
  onOpenProduct: (product: { title: string; image: string; category: string }) => void;
  onOpenAllCategories?: () => void;
}

export default function InstaHero({ onSelectCategory, onOpenProduct, onOpenAllCategories }: InstaHeroProps) {
  const topCategories = [
    { title: "Business Cards", image: "/images/cat-business-cards.jpg", linkText: "Business Cards" },
    { title: "Luxury Envelopes", image: "/images/cat-luxury-envelopes.jpg", linkText: "Envelopes" },
    { title: "Stickers", image: "/images/cat-stickers.jpg", linkText: "Stickers" },
    { title: "Corporate Boxes", image: "/images/cat-corporate-boxes.jpg", linkText: "Corporate Boxes" },
    { title: "Wedding Cards", image: "/images/cat-wedding-cards.jpg", linkText: "Wedding Cards" },
    { title: "Bid Boxes", image: "/images/cat-bid-boxes.jpg", linkText: "Bid Boxes" },
    { title: "Mugs", image: "/images/cat-mugs.jpg", linkText: "Mugs" },
    { title: "Polaroid", image: "/images/cat-polaroid.jpg", linkText: "Polaroid" },
  ];

  const subBanners = [
    {
      title: "Personalized Drinkware",
      bg: "bg-[#F3EFE0]",
      buttonText: "Shop",
      image: "/images/hero-sub-drinkware.png",
      productName: "Personalized Drinkware & Ceramic Mugs",
    },
    {
      title: "Merch that Matters",
      bg: "bg-[#F8ECE8]",
      buttonText: "Shop",
      image: "/images/hero-sub-merch.png",
      productName: "Custom Printed Apparel & Corporate Merch",
    },
    {
      title: "Launch your new business",
      bg: "bg-[#E2EDF3]",
      buttonText: "Shop",
      image: "/images/hero-sub-business.png",
      productName: "Eco-Friendly Branded Tote Bags",
    },
  ];

  const handleWhatsApp = (productName: string) => {
    const url = `https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent(
      `Hello Dot Matic Printer! I saw "${productName}" on your website and would like an instant quote.`
    )}`;
    window.open(url, "_blank");
  };

  return (
    <section className="bg-[#F8F9FA] py-6 sm:py-8 border-b border-slate-200">
      <div className="max-w-[1400px] mx-auto px-3 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          
          {/* ================= LEFT COLUMN: TOP CATEGORIES ================= */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-5 shadow-xs h-full flex flex-col justify-between">
              <div>
                <h3 className="font-extrabold text-slate-900 text-lg mb-4 tracking-tight">
                  Top Categories
                </h3>

                <div className="grid grid-cols-2 gap-3">
                  {topCategories.map((cat, idx) => (
                    <button
                      key={idx}
                      onClick={() =>
                        onOpenProduct({
                          title: cat.title,
                          image: cat.image,
                          category: "Top Categories",
                        })
                      }
                      className="p-2 rounded-xl hover:bg-slate-50 active:bg-blue-50 active:scale-95 transition-all flex flex-col items-center justify-center text-center group border border-slate-100 hover:border-slate-300 active:border-[#2D3092] cursor-pointer"
                    >
                      <div className="w-14 h-14 relative flex items-center justify-center mb-1.5 transition-transform group-hover:scale-105">
                        <Image
                          src={cat.image}
                          alt={cat.title}
                          width={56}
                          height={56}
                          className="object-contain max-h-14 max-w-14"
                        />
                      </div>
                      <span className="text-[12px] font-semibold text-slate-800 group-hover:text-[#2D3092] leading-tight">
                        {cat.title}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* View All Categories Button */}
              <div className="pt-4 mt-2">
                <button
                  onClick={() => {
                    if (onOpenAllCategories) {
                      onOpenAllCategories();
                    } else {
                      const el = document.getElementById("business-customers-section");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="w-full bg-[#E5E7EB] hover:bg-slate-300 active:bg-[#2D3092] active:text-white text-slate-900 font-bold text-xs sm:text-sm py-2.5 rounded-full transition-all text-center cursor-pointer active:scale-95"
                >
                  View All Categories
                </button>
              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: HERO BANNER & 3 SUB-CARDS ================= */}
          <div className="lg:col-span-9 flex flex-col justify-between gap-5">
            
            {/* Top Main Hero Banner */}
            <div className="relative rounded-3xl overflow-hidden min-h-[300px] sm:min-h-[360px] md:min-h-[400px] bg-[#E9DDD1] shadow-xs flex items-center">
              {/* Background Photo */}
              <div className="absolute inset-0">
                <Image
                  src="/images/hero-banner.jpg"
                  alt="You think We Create"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>

              {/* Text & CTA Overlay */}
              <div className="relative z-10 p-6 sm:p-10 md:p-14 max-w-lg">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight leading-[1.1] mb-6">
                  You think We Create
                </h1>

                <button
                  onClick={() => handleWhatsApp("You think We Create - Custom Print & Packaging")}
                  className="inline-flex items-center gap-2 bg-black hover:bg-slate-800 active:bg-[#F88521] text-white px-7 py-3 rounded-full font-bold text-sm transition-all shadow-md active:scale-95 cursor-pointer"
                >
                  <span>Shop Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* 3 Horizontal Sub-Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {subBanners.map((card, idx) => (
                <div
                  key={idx}
                  className={`${card.bg} rounded-2xl p-5 flex items-center justify-between overflow-hidden shadow-xs relative min-h-[140px] group transition-transform hover:-translate-y-0.5`}
                >
                  <div className="z-10 pr-2">
                    <h4 className="text-base sm:text-lg font-black text-slate-950 leading-tight mb-3">
                      {card.title}
                    </h4>
                    <button
                      onClick={() => handleWhatsApp(card.productName)}
                      className="bg-black hover:bg-slate-800 active:bg-[#F88521] text-white px-5 py-1.5 rounded-full font-bold text-xs transition-all active:scale-95 cursor-pointer"
                    >
                      {card.buttonText}
                    </button>
                  </div>

                  <div className="w-28 h-28 relative shrink-0 transition-transform group-hover:scale-105">
                    <Image
                      src={card.image}
                      alt={card.title}
                      width={112}
                      height={112}
                      className="object-contain max-h-28 max-w-28"
                    />
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
