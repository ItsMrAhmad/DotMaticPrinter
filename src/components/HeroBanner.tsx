"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  MessageCircle, 
  ArrowRight, 
  ShieldCheck, 
  Truck, 
  Sparkles, 
  Layers, 
  Award,
  CheckCircle2
} from "lucide-react";
import { BUSINESS_INFO } from "@/data/products";

interface HeroBannerProps {
  onExploreClick: () => void;
  onSelectCategory: (catId: string) => void;
}

export default function HeroBanner({ onExploreClick, onSelectCategory }: HeroBannerProps) {
  const [activeTab, setActiveTab] = useState<number>(0);

  const heroSlides = [
    {
      tag: "Direct Factory Pricing",
      title: "Custom Packaging Boxes Engineered for Your Brand",
      subtitle: "Heavy-duty corrugated mailers, luxury rigid gift boxes, and eco-friendly shopping bags with full custom die-lines and vibrant offset printing.",
      categoryTarget: "packaging",
      ctaText: "Get Box Quote on WhatsApp",
      features: ["Custom sizes down to the mm", "Matte, Gloss & Spot UV options", "MOQ starting at only 100 pcs"],
      accentColor: "#F88521",
    },
    {
      tag: "Executive Corporate Stationery",
      title: "Make an Unforgettable Impression with Luxury Visiting Cards",
      subtitle: "350gsm - 700gsm heavy multi-ply cardstocks with velvet touch lamination, raised 3D spot UV, and metallic gold foil stamping.",
      categoryTarget: "stationery",
      ctaText: "Order Visiting Cards on WhatsApp",
      features: ["350gsm - 700gsm heavy cardstock", "Raised 3D Spot UV & Gold Foil", "Fast 2-3 days turnaround"],
      accentColor: "#2D3092",
    },
    {
      tag: "Mass Marketing Collateral",
      title: "High-Definition Promotional Flyers, Brochures & Standees",
      subtitle: "Crisp German Heidelberg offset printing for product catalogs, tri-fold brochures, retail banners, and roll-up standees.",
      categoryTarget: "marketing",
      ctaText: "Get Marketing Print Quote",
      features: ["Photo-grade crisp printing", "Gloss, Matte & Aqueous coatings", "Free digital proof before printing"],
      accentColor: "#F88521",
    },
  ];

  const currentSlide = heroSlides[activeTab];

  return (
    <section className="relative bg-gradient-to-br from-slate-950 via-[#0a1226] to-[#121c3b] text-white overflow-hidden py-10 sm:py-16 lg:py-20">
      {/* Background Decorative Pattern / Gradient Glow */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#F88521_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#2D3092] rounded-full blur-[140px] opacity-40 pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#F88521] rounded-full blur-[140px] opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Hero Copy & Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Tag Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-bold text-[#F88521] tracking-wide">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{currentSlide.tag}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.15] text-white">
              {currentSlide.title}
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {currentSlide.subtitle}
            </p>

            {/* Feature Bullets */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-1">
              {currentSlide.features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#F88521] shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-4">
              {/* WhatsApp Quote Trigger */}
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent(
                  `Hello Dot Matic Printer! I saw your banner on dotmaticprinter.com and would like an instant quote for: ${currentSlide.title}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white px-6 py-3.5 rounded-full font-bold text-sm shadow-lg hover:shadow-emerald-500/20 transition-all hover:scale-[1.02] active:scale-95"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>{currentSlide.ctaText}</span>
              </a>

              {/* Explore Catalog Button */}
              <button
                onClick={onExploreClick}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3.5 rounded-full font-bold text-sm transition-all hover:scale-[1.02] active:scale-95"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Slide Navigation Dots */}
            <div className="flex items-center justify-center lg:justify-start gap-2 pt-4">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    activeTab === index
                      ? "w-8 bg-[#F88521]"
                      : "w-2.5 bg-white/30 hover:bg-white/60"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Card Showcase */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl">
              {/* Badge */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center p-1.5 shadow-md">
                    <Image
                      src="/brand/logo.svg"
                      alt="Dot Matic Emblem"
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-[#F88521]">
                      Official Workshop
                    </div>
                    <div className="text-sm font-black text-white">Gulberg, Lahore</div>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-emerald-400 text-xs font-bold bg-emerald-950/60 border border-emerald-500/30 px-2.5 py-1 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Printing Live</span>
                </div>
              </div>

              {/* Quick Quote Interactive Mini-Form */}
              <div className="space-y-4">
                <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                  Quick WhatApp Quote Request:
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <button
                    onClick={() => onSelectCategory("packaging")}
                    className="p-3 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 text-left transition-all group"
                  >
                    <Layers className="w-4 h-4 text-[#F88521] mb-1.5" />
                    <div className="font-bold text-white group-hover:text-[#F88521] transition-colors">
                      Custom Boxes
                    </div>
                    <div className="text-[10px] text-slate-400 mt-0.5">From Rs. 18 / pc</div>
                  </button>

                  <button
                    onClick={() => onSelectCategory("stationery")}
                    className="p-3 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 text-left transition-all group"
                  >
                    <Award className="w-4 h-4 text-[#2D3092] mb-1.5" />
                    <div className="font-bold text-white group-hover:text-[#F88521] transition-colors">
                      Visiting Cards
                    </div>
                    <div className="text-[10px] text-slate-400 mt-0.5">From Rs. 850 / 1000</div>
                  </button>

                  <button
                    onClick={() => onSelectCategory("marketing")}
                    className="p-3 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 text-left transition-all group"
                  >
                    <Sparkles className="w-4 h-4 text-[#F88521] mb-1.5" />
                    <div className="font-bold text-white group-hover:text-[#F88521] transition-colors">
                      Flyers &amp; Standees
                    </div>
                    <div className="text-[10px] text-slate-400 mt-0.5">Fast 24hr Dispatch</div>
                  </button>

                  <button
                    onClick={() => onSelectCategory("labels-stickers")}
                    className="p-3 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 text-left transition-all group"
                  >
                    <ShieldCheck className="w-4 h-4 text-emerald-400 mb-1.5" />
                    <div className="font-bold text-white group-hover:text-[#F88521] transition-colors">
                      Vinyl Stickers
                    </div>
                    <div className="text-[10px] text-slate-400 mt-0.5">100% Waterproof</div>
                  </button>
                </div>

                {/* Direct Help Strip */}
                <div className="p-3.5 rounded-xl bg-[#2D3092]/40 border border-[#2D3092]/60 text-xs flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Truck className="w-4 h-4 text-[#F88521] shrink-0" />
                    <span className="text-slate-200 text-[11px]">
                      Nationwide delivery across Pakistan
                    </span>
                  </div>
                  <span className="font-bold text-white text-[11px]">2-4 Days</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
