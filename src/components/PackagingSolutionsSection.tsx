"use client";

import React from "react";
import Image from "next/image";
import { MessageCircle, ArrowRight } from "lucide-react";
import { BUSINESS_INFO } from "@/data/products";

interface PackagingSolutionsSectionProps {
  onOpenProduct: (product: { title: string; image: string; category: string; desc?: string }) => void;
}

export default function PackagingSolutionsSection({ onOpenProduct }: PackagingSolutionsSectionProps) {
  const packagingItems = [
    {
      title: "Corrugated Box",
      tag: "Fresh Everyday",
      bg: "bg-[#D9D9D9]",
      image: "/images/pkg-corrugated.webp",
      desc: "Custom heavy-duty 3-ply corrugated mailer boxes with edge printing for e-commerce.",
    },
    {
      title: "Magnet Box",
      tag: "Hot This Week",
      bg: "bg-[#F6E7D2]",
      image: "/images/pkg-magnet-box.webp",
      desc: "Luxury rigid chipboard presentation gift boxes with hidden magnetic closures.",
    },
    {
      title: "Shopping Bags",
      tag: "Hand-Picked",
      bg: "bg-[#DFF1E7]",
      image: "/images/pkg-shopping-bags.webp",
      desc: "Premium boutique kraft & art card paper shopping bags with rope handles.",
    },
    {
      title: "Labels",
      tag: "Just Arrived!",
      bg: "bg-[#DEDCEB]",
      image: "/images/pkg-labels.webp",
      desc: "Waterproof vinyl roll labels, bottle packaging stickers, and circular hang tags.",
    },
    {
      title: "Flyers",
      tag: "Fresh Everyday",
      bg: "bg-[#F7EBDC]",
      image: "/images/pkg-flyers.webp",
      desc: "High-definition offset flyers, tri-fold brochures, and marketing collateral.",
    },
  ];

  const handleWhatsApp = (title: string) => {
    const url = `https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent(
      `Hello Dot Matic Printer! I am interested in custom ${title} packaging solutions. Please share pricing and die-line templates.`
    )}`;
    window.open(url, "_blank");
  };

  return (
    <section id="packaging-solutions-section" className="bg-white py-12 sm:py-16 border-b border-slate-200">
      <div className="max-w-[1400px] mx-auto px-3 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Packaging Solutions
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1.5 max-w-lg mx-auto">
            High-grade custom boxes, paper bags, labels, and mailers manufactured in our workshop.
          </p>
        </div>

        {/* 5-Column Responsive Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
          {packagingItems.map((item, idx) => (
            <div
              key={idx}
              className={`${item.bg} rounded-2xl p-5 sm:p-6 flex flex-col items-center justify-between text-center min-h-[380px] shadow-xs hover:shadow-xl active:scale-[0.98] transition-all duration-300 group`}
            >
              {/* Top Tag Pill */}
              <div className="w-full flex justify-center">
                <span className="text-[11px] font-bold text-slate-800 bg-white/70 backdrop-blur-xs px-3.5 py-1 rounded-full border border-black/5 shadow-2xs">
                  {item.tag}
                </span>
              </div>

              {/* Center Product Image */}
              <div
                onClick={() =>
                  onOpenProduct({
                    title: item.title,
                    image: item.image,
                    category: "Packaging Solutions",
                    desc: item.desc,
                  })
                }
                className="w-full h-44 sm:h-48 flex items-center justify-center cursor-pointer transition-transform duration-300 group-hover:scale-105 my-2"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={240}
                  height={200}
                  className="object-contain max-h-44 sm:max-h-48 w-auto drop-shadow-sm"
                />
              </div>

              {/* Bottom Title & Shop Now Button */}
              <div className="w-full space-y-3">
                <h3 className="text-base sm:text-lg font-black text-slate-950 tracking-tight">
                  {item.title}
                </h3>

                <button
                  onClick={() => handleWhatsApp(item.title)}
                  className="inline-flex items-center gap-1.5 bg-black hover:bg-slate-800 active:bg-[#F88521] text-white px-6 py-2 rounded-full font-bold text-xs transition-all shadow-md active:scale-95 cursor-pointer"
                >
                  <span>Shop Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
