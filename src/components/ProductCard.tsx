"use client";

import React from "react";
import { MessageCircle, Star, Sparkles, Clock, Check, Eye } from "lucide-react";
import { Product, BUSINESS_INFO } from "@/data/products";

interface ProductCardProps {
  product: Product;
  onOpenDetails: (product: Product) => void;
}

export default function ProductCard({ product, onOpenDetails }: ProductCardProps) {
  // Pre-filled WhatsApp message
  const whatsappMessage = encodeURIComponent(
    `Hello Dot Matic Printer! I am interested in *${product.title}* (${product.startingPrice}, MOQ: ${product.moq}). Please share quotation, custom sizing, and artwork requirements.`
  );

  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${whatsappMessage}`;

  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl hover:border-[#2D3092]/30 transition-all duration-300 flex flex-col justify-between group">
      <div>
        {/* Product Visual Top Banner with Badge */}
        <div className="relative h-48 bg-gradient-to-br from-slate-100 via-slate-50 to-blue-50/40 p-4 flex items-center justify-center border-b border-slate-100 overflow-hidden">
          {/* Subtle Grid / Pattern */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#2D3092_1px,transparent_1px)] [background-size:12px_12px]" />

          {/* Badge */}
          {product.badge && (
            <div className="absolute top-3 left-3 z-10">
              <span className="inline-flex items-center gap-1 bg-[#111827] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-xs">
                <Sparkles className="w-2.5 h-2.5 text-[#F88521]" />
                {product.badge}
              </span>
            </div>
          )}

          {/* Quick View Button on Hover */}
          <button
            onClick={() => onOpenDetails(product)}
            className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/90 text-slate-700 hover:text-[#2D3092] hover:bg-white flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 transition-opacity"
            title="Quick Details"
          >
            <Eye className="w-4 h-4" />
          </button>

          {/* Modern Minimalistic Vector Graphic Representation */}
          <div className="relative z-0 text-center transform group-hover:scale-105 transition-transform duration-300">
            <div className="w-24 h-24 mx-auto rounded-2xl bg-white shadow-md border border-slate-200 flex flex-col items-center justify-center p-3">
              <div className="text-[11px] font-black uppercase text-[#2D3092] tracking-wider">
                DOT MATIC
              </div>
              <div className="w-8 h-1 bg-[#F88521] my-1 rounded-full" />
              <div className="text-[9px] font-bold text-slate-500 uppercase text-center line-clamp-2">
                {product.categorySlug.replace("-", " ")}
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Body */}
        <div className="p-5 space-y-3">
          {/* Category & Rating */}
          <div className="flex items-center justify-between text-xs">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#F88521]">
              {product.category}
            </span>
            <div className="flex items-center gap-1 text-amber-500 font-semibold text-xs">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>{product.rating.toFixed(1)}</span>
              <span className="text-slate-400 text-[10px]">({product.reviewsCount})</span>
            </div>
          </div>

          {/* Title */}
          <h3
            onClick={() => onOpenDetails(product)}
            className="font-black text-base text-slate-900 group-hover:text-[#2D3092] transition-colors cursor-pointer line-clamp-1"
          >
            {product.title}
          </h3>

          {/* Short Description */}
          <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
            {product.shortDesc}
          </p>

          {/* Quick Specs Pill Tags */}
          <div className="flex flex-wrap items-center gap-1.5 pt-1 text-[11px] text-slate-600">
            <div className="flex items-center gap-1 bg-slate-100 px-2 py-0.5 rounded-md font-medium">
              <Clock className="w-3 h-3 text-slate-400" />
              <span>{product.turnaround}</span>
            </div>
            <div className="bg-slate-100 px-2 py-0.5 rounded-md font-medium">
              MOQ: <span className="font-bold text-slate-900">{product.moq}</span>
            </div>
          </div>

          {/* Key Finish Options */}
          <div className="text-[11px] text-slate-500 pt-1">
            <span className="font-semibold text-slate-700">Finishes: </span>
            <span>{product.finishes.slice(0, 2).join(", ")}</span>
          </div>
        </div>
      </div>

      {/* Product Footer & Action Buttons */}
      <div className="p-5 pt-0 space-y-3 border-t border-slate-100 mt-2">
        <div className="flex items-baseline justify-between pt-3">
          <div>
            <span className="text-[10px] text-slate-400 uppercase font-semibold block">
              Estimated Pricing
            </span>
            <span className="text-base font-black text-slate-900">
              {product.startingPrice}
            </span>
          </div>
          <button
            onClick={() => onOpenDetails(product)}
            className="text-xs font-bold text-[#2D3092] hover:underline"
          >
            Specs &amp; Options
          </button>
        </div>

        {/* PRIMARY CTA: CHAT ON WHATSAPP */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white py-2.5 px-4 rounded-xl font-bold text-xs sm:text-sm shadow-xs hover:shadow-md transition-all active:scale-95 group/btn"
        >
          <MessageCircle className="w-4 h-4 fill-white shrink-0 group-hover/btn:scale-110 transition-transform" />
          <span>Chat on WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
