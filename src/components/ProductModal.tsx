"use client";

import React, { useState } from "react";
import { 
  X, 
  MessageCircle, 
  Star, 
  Check, 
  Clock, 
  Sparkles, 
  ShieldCheck, 
  Layers, 
  Truck,
  ArrowRight
} from "lucide-react";
import { Product, BUSINESS_INFO } from "@/data/products";

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  if (!product) return null;

  const [selectedFinish, setSelectedFinish] = useState<string>(product.finishes[0] || "");
  const [selectedMaterial, setSelectedMaterial] = useState<string>(product.materials[0] || "");
  const [quantity, setQuantity] = useState<string>("500 pcs");
  const [customSize, setCustomSize] = useState<string>("");

  // Construct precise WhatsApp inquiry message
  const inquiryMessage = encodeURIComponent(
    `Hello Dot Matic Printer!\n\n` +
    `I would like to get a custom quote for *${product.title}*:\n` +
    `• Quantity: ${quantity}\n` +
    `• Material: ${selectedMaterial}\n` +
    `• Finish: ${selectedFinish}\n` +
    (customSize ? `• Custom Dimensions: ${customSize}\n` : "") +
    `• Starting Price Reference: ${product.startingPrice}\n\n` +
    `Please share pricing, die-line templates, and delivery time to my city.`
  );

  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${inquiryMessage}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F88521] bg-orange-100 px-2.5 py-0.5 rounded-full">
              {product.category}
            </span>
            {product.badge && (
              <span className="text-[11px] font-bold text-slate-600 bg-white px-2 py-0.5 rounded-full border border-slate-200">
                {product.badge}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-700 flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Title & Rating */}
          <div>
            <div className="flex items-center gap-2 mb-1">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <span className="text-xs font-bold text-slate-700">{product.rating.toFixed(1)}</span>
              <span className="text-xs text-slate-400">({product.reviewsCount} verified Pakistani clients)</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              {product.title}
            </h2>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Quick Specifications Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs">
            <div>
              <span className="text-slate-400 block text-[10px] uppercase font-bold">Starting Price</span>
              <span className="font-black text-slate-900 text-sm">{product.startingPrice}</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px] uppercase font-bold">Minimum Order (MOQ)</span>
              <span className="font-black text-slate-900 text-sm">{product.moq}</span>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <span className="text-slate-400 block text-[10px] uppercase font-bold">Turnaround Time</span>
              <span className="font-black text-emerald-600 text-sm">{product.turnaround}</span>
            </div>
          </div>

          {/* Key Product Features */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2.5">
              Production Highlights:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
              {product.features.map((feat, index) => (
                <div key={index} className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Material Stock Selection */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-900 block mb-2">
              Choose Material / Paper Stock:
            </label>
            <div className="flex flex-wrap gap-2">
              {product.materials.map((mat) => (
                <button
                  key={mat}
                  onClick={() => setSelectedMaterial(mat)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
                    selectedMaterial === mat
                      ? "bg-[#2D3092] text-white border-[#2D3092] shadow-xs"
                      : "bg-white text-slate-700 border-slate-200 hover:border-slate-400"
                  }`}
                >
                  {mat}
                </button>
              ))}
            </div>
          </div>

          {/* Finish Options Selection */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-900 block mb-2">
              Select Surface Finish:
            </label>
            <div className="flex flex-wrap gap-2">
              {product.finishes.map((fin) => (
                <button
                  key={fin}
                  onClick={() => setSelectedFinish(fin)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
                    selectedFinish === fin
                      ? "bg-[#F88521] text-white border-[#F88521] shadow-xs"
                      : "bg-white text-slate-700 border-slate-200 hover:border-slate-400"
                  }`}
                >
                  {fin}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity & Custom Dimensions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-900 block mb-1.5">
                Target Quantity:
              </label>
              <select
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="w-full px-3 py-2 text-xs font-semibold rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-[#2D3092]"
              >
                <option value="100 pcs">100 pcs (Sample / Trial)</option>
                <option value="250 pcs">250 pcs</option>
                <option value="500 pcs">500 pcs</option>
                <option value="1,000 pcs">1,000 pcs (Popular Bulk Rate)</option>
                <option value="2,500 pcs">2,500 pcs</option>
                <option value="5,000+ pcs">5,000+ pcs (Wholesale Factory Rate)</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-900 block mb-1.5">
                Custom Dimensions (Optional):
              </label>
              <input
                type="text"
                placeholder="e.g. 8 x 6 x 3 inches or custom die"
                value={customSize}
                onChange={(e) => setCustomSize(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-[#2D3092]"
              />
            </div>
          </div>
        </div>

        {/* Modal Footer with WhatsApp Conversion Button */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-500 text-center sm:text-left">
            <span className="font-bold text-slate-800">Free artwork assistance</span> &amp; sample proofs available on WhatsApp.
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white py-3 px-6 rounded-full font-bold text-sm shadow-md hover:shadow-lg transition-all active:scale-95 shrink-0"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
            <span>Inquire on WhatsApp</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </a>
        </div>
      </div>
    </div>
  );
}
