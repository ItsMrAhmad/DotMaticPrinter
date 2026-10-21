"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, MessageCircle, Check, ArrowRight, Phone } from "lucide-react";
import { BUSINESS_INFO } from "@/data/products";

export interface ModalProduct {
  title: string;
  image: string;
  category: string;
  desc?: string;
}

interface InstaProductModalProps {
  product: ModalProduct | null;
  onClose: () => void;
}

export default function InstaProductModal({ product, onClose }: InstaProductModalProps) {
  if (!product) return null;

  const [quantity, setQuantity] = useState<string>("500 pcs");
  const [notes, setNotes] = useState<string>("");

  const whatsappMessage = encodeURIComponent(
    `Hello Dot Matic Printer!\n\n` +
    `I am inquiring about *${product.title}* (${product.category}):\n` +
    `• Target Quantity: ${quantity}\n` +
    (notes ? `• Custom Dimensions / Notes: ${notes}\n` : "") +
    `\nPlease share quotation, material samples, and turnaround time to Lahore / nationwide.`
  );

  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${whatsappMessage}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50">
          <span className="text-xs font-bold uppercase tracking-wider text-[#F88521] bg-orange-100 px-3 py-0.5 rounded-full">
            {product.category}
          </span>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-700 flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-5">
          {/* Product Image & Info */}
          <div className="flex flex-col sm:flex-row items-center gap-6 bg-slate-50 p-4 rounded-2xl border border-slate-200/60">
            <div className="w-40 h-40 bg-white rounded-xl p-3 flex items-center justify-center shadow-xs shrink-0">
              <Image
                src={product.image}
                alt={product.title}
                width={160}
                height={160}
                className="object-contain max-h-36 max-w-36"
              />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-snug">
                {product.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                {product.desc || "Custom offset & digital printing with premium finish options, die-cutting, and fast nationwide delivery."}
              </p>
            </div>
          </div>

          {/* Quick Specifications */}
          <div className="space-y-2 text-xs text-slate-700">
            <div className="font-bold uppercase tracking-wider text-slate-400 text-[10px]">
              Service Guarantee:
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Custom sizes down to the mm</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Free artwork check &amp; die-line</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Direct factory pricing</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Fast Pakistan-wide shipping</span>
              </div>
            </div>
          </div>

          {/* Quantity Selection */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-900 block mb-1.5">
              Select Estimated Quantity:
            </label>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 text-xs">
              {["100 pcs", "250 pcs", "500 pcs", "1,000 pcs", "2,500+ pcs"].map((qty) => (
                <button
                  key={qty}
                  onClick={() => setQuantity(qty)}
                  className={`py-2 px-1 rounded-xl font-bold border transition-all text-center ${
                    quantity === qty
                      ? "bg-[#2D3092] text-white border-[#2D3092] shadow-xs"
                      : "bg-white text-slate-700 border-slate-200 hover:border-slate-300"
                  }`}
                >
                  {qty}
                </button>
              ))}
            </div>
          </div>

          {/* Custom Size / Notes Input */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-900 block mb-1.5">
              Dimensions / Notes (Optional):
            </label>
            <input
              type="text"
              placeholder="e.g. Dimensions (W x H x D), special colors, or finish"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-[#2D3092]"
            />
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="text-xs font-semibold text-slate-600 hover:text-slate-900 flex items-center gap-1.5"
          >
            <Phone className="w-3.5 h-3.5 text-[#F88521]" />
            <span>Direct Call: {BUSINESS_INFO.whatsappFormatted}</span>
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white py-3 px-6 rounded-full font-bold text-sm shadow-md hover:shadow-lg transition-all active:scale-95 shrink-0"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
            <span>Chat on WhatsApp</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </a>
        </div>
      </div>
    </div>
  );
}
