"use client";

import React from "react";
import Image from "next/image";
import { ChevronRight, MessageCircle } from "lucide-react";
import { BUSINESS_INFO } from "@/data/products";

interface WeddingSectionProps {
  onOpenProduct: (product: { title: string; image: string; category: string; desc?: string }) => void;
}

export default function WeddingSection({ onOpenProduct }: WeddingSectionProps) {
  const weddingItems = [
    { title: "Nikahnama", image: "/images/wed-nikahnama.jpg", desc: "Custom designed luxury printed Islamic Nikahnama certificates" },
    { title: "Favor Bags", image: "/images/wed-favor-bags.jpg", desc: "Delicate wedding favor gift bags with satin ribbon handles" },
    { title: "Wax Stamps", image: "/images/wed-wax-stamps.jpg", desc: "Custom engraved brass wax seal stamps with sealing wax beads", hasArrow: true },
    { title: "Acrylic Cards", image: "/images/wed-acrylic-cards.png", desc: "Crystal-clear transparent acrylic luxury wedding invitations" },
    { title: "Budget Cards", image: "/images/wed-budget-cards.jpg", desc: "Affordable & elegant wedding invitation cards with envelopes" },
    { title: "Premium Cards", image: "/images/wed-premium-cards.jpg", desc: "Hardbound luxury presentation wedding boxes with velvet linings" },
    { title: "Menu Cards", image: "/images/wed-menu-cards.jpg", desc: "Dining table food & beverage wedding reception menu cards" },
    { title: "Bid Boxes", image: "/images/wed-bid-boxes.jpg", desc: "Traditional floral & gold foiled bid distribution sweet boxes" },
    { title: "Acrylic Boxes", image: "/images/wed-acrylic-boxes.jpg", desc: "Transparent luxury acrylic keepsake gift & jewelry boxes" },
    { title: "E-cards", image: "/images/wed-ecards.jpg", desc: "Animated & digital mobile wedding invitations for WhatsApp sharing" },
  ];

  return (
    <section id="wedding-section" className="bg-[#F8F9FA] py-12 sm:py-16 border-b border-slate-200">
      <div className="max-w-[1400px] mx-auto px-3 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Wedding &amp; Event Collection
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1.5 max-w-lg mx-auto">
            Bespoke wedding cards, Nikahnama certificates, luxury bid boxes, and event favors.
          </p>
        </div>

        {/* 5-Column Grid (10 Items Total) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 sm:gap-4">
          {weddingItems.map((item, idx) => (
            <div
              key={idx}
              onClick={() =>
                onOpenProduct({
                  title: item.title,
                  image: item.image,
                  category: "Wedding & Events",
                  desc: item.desc,
                })
              }
              className="bg-[#F4F4F6] rounded-2xl p-3 sm:p-4 flex flex-col items-center justify-between text-center hover:bg-[#ECECF0] border border-slate-200/60 shadow-2xs hover:shadow-md transition-all duration-200 group cursor-pointer"
            >
              {/* Inner White Image Container */}
              <div className="bg-white rounded-xl p-2 sm:p-3 w-full h-36 sm:h-40 flex items-center justify-center shadow-2xs group-hover:scale-102 transition-transform duration-200">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={180}
                  height={150}
                  className="object-contain max-h-32 sm:max-h-36 w-auto"
                />
              </div>

              {/* Title Below */}
              <div className="mt-3 flex items-center justify-center gap-1">
                <span className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#2D3092] transition-colors">
                  {item.title}
                </span>
                {item.hasArrow && (
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-[#2D3092] group-hover:translate-x-0.5 transition-transform" />
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
