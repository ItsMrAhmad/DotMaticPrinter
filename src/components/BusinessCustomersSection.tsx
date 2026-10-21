"use client";

import React from "react";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { BUSINESS_INFO } from "@/data/products";

interface BusinessCustomersSectionProps {
  onOpenProduct: (product: { title: string; image: string; category: string; desc?: string }) => void;
}

export default function BusinessCustomersSection({ onOpenProduct }: BusinessCustomersSectionProps) {
  const products = [
    { title: "Pen", image: "/images/biz-pen.jpg", desc: "Custom branded metal & plastic promotional pens" },
    { title: "Calendar", image: "/images/biz-calendar.png", desc: "Desktop easel & executive wall calendars" },
    { title: "Notebook", image: "/images/biz-notebook.jpg", desc: "Hardcover executive diaries & customized notepads" },
    { title: "Booklet", image: "/images/biz-booklet.jpg", desc: "Saddle-stitched corporate brochures & booklets" },
    { title: "Wallet", image: "/images/biz-wallet.jpg", desc: "Leather corporate wallets & executive gift sets" },
    { title: "Business Cards", image: "/images/biz-business-cards.jpg", desc: "Premium matte, velvet, spot UV & gold foil visiting cards" },
    { title: "USB", image: "/images/biz-usb.png", desc: "Custom logo engraved swivel flash drives" },
    { title: "Keychain", image: "/images/biz-keychain.jpg", desc: "Die-cast metallic & leather branded keychains" },
    { title: "Cap", image: "/images/biz-cap.jpg", desc: "Embroidered & heat-transferred corporate baseball caps" },
    { title: "Bottle", image: "/images/biz-bottle.jpg", desc: "Insulated stainless steel tumblers & water bottles" },
    { title: "Envelope", image: "/images/biz-envelope.jpg", desc: "Standard DL, A5 & A4 peel-and-seal corporate envelopes" },
    { title: "Paper Bag", image: "/images/biz-paper-bag.jpg", desc: "Custom kraft & luxury laminated shopping bags with rope handles" },
  ];

  return (
    <section id="business-customers-section" className="bg-[#F8F9FA] py-12 sm:py-16 border-b border-slate-200">
      <div className="max-w-[1400px] mx-auto px-3 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            For Our Business Customers
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1.5 max-w-lg mx-auto">
            Explore our curated corporate gifts, branded stationery, and workplace merchandise.
          </p>
        </div>

        {/* 4-Column Grid of 12 Products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {products.map((item, idx) => (
            <div
              key={idx}
              onClick={() =>
                onOpenProduct({
                  title: item.title,
                  image: item.image,
                  category: "Business Customers",
                  desc: item.desc,
                })
              }
              className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-7 flex flex-col items-center justify-between text-center shadow-2xs hover:shadow-lg hover:border-slate-300 transition-all duration-300 group cursor-pointer relative overflow-hidden"
            >
              {/* Image Container */}
              <div className="w-full h-36 sm:h-44 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={220}
                  height={180}
                  className="object-contain max-h-36 sm:max-h-44 w-auto drop-shadow-xs"
                />
              </div>

              {/* Title & WhatsApp trigger */}
              <div className="w-full pt-2 border-t border-slate-100 flex items-center justify-between">
                <span className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#2D3092] transition-colors">
                  {item.title}
                </span>

                <span
                  title="Inquire on WhatsApp"
                  className="w-8 h-8 rounded-full bg-emerald-50 group-hover:bg-[#25D366] text-[#25D366] group-hover:text-white flex items-center justify-center transition-colors shadow-2xs"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
