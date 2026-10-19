"use client";

import React, { useState } from "react";
import { Calculator, MessageCircle, Sparkles, Check, ArrowRight } from "lucide-react";
import { BUSINESS_INFO } from "@/data/products";

export default function InstantQuoteCalculator() {
  const [productType, setProductType] = useState<string>("Corrugated Mailer Boxes");
  const [quantity, setQuantity] = useState<number>(500);
  const [material, setMaterial] = useState<string>("Heavy 3-Ply E-Flute Kraft");
  const [finish, setFinish] = useState<string>("Matte Lamination + Spot UV");
  const [customDimensions, setCustomDimensions] = useState<string>("10 x 8 x 3 inches");
  const [notes, setNotes] = useState<string>("");

  // Price estimate logic
  const calculateEstimate = () => {
    let unitRate = 45;
    if (productType === "Corrugated Mailer Boxes") unitRate = quantity >= 1000 ? 55 : 68;
    else if (productType === "Luxury Rigid Boxes") unitRate = quantity >= 500 ? 195 : 240;
    else if (productType === "Premium Visiting Cards") unitRate = quantity >= 1000 ? 1.2 : 1.8;
    else if (productType === "Kraft Paper Shopping Bags") unitRate = quantity >= 1000 ? 28 : 36;
    else if (productType === "Die-Cut Vinyl Stickers") unitRate = quantity >= 1000 ? 2.5 : 3.8;
    else if (productType === "Promotional Flyers") unitRate = quantity >= 1000 ? 1.6 : 2.4;

    if (finish.includes("Spot UV") || finish.includes("Gold Foil")) {
      unitRate += productType.includes("Visiting") ? 0.4 : 8;
    }

    const totalEstimate = Math.round(unitRate * quantity);
    return {
      unitRate,
      totalEstimate,
      turnaround: quantity > 2000 ? "5-7 Days" : "3-5 Days",
    };
  };

  const { unitRate, totalEstimate, turnaround } = calculateEstimate();

  const quoteMessage = encodeURIComponent(
    `Hello Dot Matic Printer!\n\n` +
    `I used your Instant Quote Estimator on dotmaticprinter.com:\n` +
    `• Product: ${productType}\n` +
    `• Quantity: ${quantity.toLocaleString()} pcs\n` +
    `• Dimensions: ${customDimensions}\n` +
    `• Material: ${material}\n` +
    `• Finish: ${finish}\n` +
    (notes ? `• Special Instructions: ${notes}\n` : "") +
    `• Approx Estimate: Rs. ${totalEstimate.toLocaleString()} (Rs. ${unitRate}/pc)\n\n` +
    `Please confirm final quotation and send die-line file template to my WhatsApp.`
  );

  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${quoteMessage}`;

  return (
    <section id="quote-calculator" className="bg-slate-900 text-white py-14 sm:py-20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#2D3092]/30 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F88521]/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-bold text-[#F88521] mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            Instant Custom Quote Calculator
          </h2>
          <p className="text-sm text-slate-300 mt-2">
            Configure your exact print specs below to get an estimated factory rate, then send it straight to our Lahore prepress team on WhatsApp for final approval.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-8 space-y-5">
            {/* 1. Product Type */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-2">
                1. Select Product Type:
              </label>
              <select
                value={productType}
                onChange={(e) => setProductType(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 text-white rounded-xl px-4 py-3 text-xs sm:text-sm font-semibold focus:outline-none focus:border-[#F88521]"
              >
                <option value="Corrugated Mailer Boxes">Corrugated Mailer Boxes (E-Commerce)</option>
                <option value="Luxury Rigid Boxes">Luxury Rigid Gift Boxes (Chipboard)</option>
                <option value="Kraft Paper Shopping Bags">Kraft Paper Shopping Bags</option>
                <option value="Premium Visiting Cards">Premium Luxury Visiting Cards</option>
                <option value="Die-Cut Vinyl Stickers">Die-Cut Waterproof Vinyl Stickers</option>
                <option value="Promotional Flyers">Promotional Flyers &amp; Brochures</option>
              </select>
            </div>

            {/* 2. Target Quantity */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  2. Select Quantity:
                </label>
                <span className="text-xs font-black text-[#F88521]">
                  {quantity.toLocaleString()} pcs
                </span>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 text-xs">
                {[100, 250, 500, 1000, 2500, 5000].map((qty) => (
                  <button
                    key={qty}
                    type="button"
                    onClick={() => setQuantity(qty)}
                    className={`py-2 px-2 rounded-xl font-bold border transition-all ${
                      quantity === qty
                        ? "bg-[#F88521] text-white border-[#F88521] shadow-md"
                        : "bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-750"
                    }`}
                  >
                    {qty.toLocaleString()}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Dimensions & Material */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-2">
                  3. Dimensions / Size:
                </label>
                <input
                  type="text"
                  value={customDimensions}
                  onChange={(e) => setCustomDimensions(e.target.value)}
                  placeholder="e.g. 10 x 8 x 3 inches"
                  className="w-full bg-slate-800 border border-slate-700 text-white rounded-xl px-4 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-[#F88521]"
                />
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-2">
                  4. Paper / Material Stock:
                </label>
                <select
                  value={material}
                  onChange={(e) => setMaterial(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 text-white rounded-xl px-3 py-2.5 text-xs font-medium focus:outline-none focus:border-[#F88521]"
                >
                  <option value="Heavy 3-Ply E-Flute Kraft">Heavy 3-Ply E-Flute Kraft</option>
                  <option value="Premium Bleached White E-Flute">Bleached White E-Flute</option>
                  <option value="350gsm Bleached Art Card">350gsm Heavy Art Card</option>
                  <option value="1500gsm Luxury Rigid Greyboard">1500gsm Rigid Greyboard</option>
                  <option value="Waterproof BOPP / Vinyl">Waterproof BOPP / Vinyl</option>
                </select>
              </div>
            </div>

            {/* 4. Surface Finish */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-2">
                5. Surface Finish / Lamination:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {[
                  "Matte Lamination (Velvet Smooth)",
                  "Gloss High-Shine UV Lamination",
                  "Matte Lamination + Spot UV On Logo",
                  "Metallic Gold / Silver Foil Stamping",
                ].map((fin) => (
                  <button
                    key={fin}
                    type="button"
                    onClick={() => setFinish(fin)}
                    className={`p-2.5 rounded-xl text-left border text-xs font-semibold transition-all ${
                      finish === fin
                        ? "bg-[#2D3092] text-white border-[#2D3092] shadow-xs"
                        : "bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-750"
                    }`}
                  >
                    {fin}
                  </button>
                ))}
              </div>
            </div>

            {/* 5. Custom Notes */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-1.5">
                Special Requests or Notes (Optional):
              </label>
              <input
                type="text"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="e.g. Need window cutout, inside printing, or custom foam insert"
                className="w-full bg-slate-800 border border-slate-700 text-white rounded-xl px-4 py-2 text-xs focus:outline-none focus:border-[#F88521]"
              />
            </div>
          </div>

          {/* Estimate Summary & WhatsApp CTA Column */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#2D3092]/90 to-slate-900 border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
            <div className="border-b border-white/10 pb-4">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#F88521] block">
                Estimated Order Summary
              </span>
              <h3 className="text-xl font-black text-white mt-1">
                {productType}
              </h3>
            </div>

            <div className="space-y-3 text-xs">
              <div className="flex justify-between py-1.5 border-b border-white/10">
                <span className="text-slate-300">Quantity</span>
                <span className="font-bold text-white">{quantity.toLocaleString()} pcs</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-white/10">
                <span className="text-slate-300">Material</span>
                <span className="font-bold text-white truncate max-w-[180px]">{material}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-white/10">
                <span className="text-slate-300">Finish</span>
                <span className="font-bold text-white truncate max-w-[180px]">{finish}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-white/10">
                <span className="text-slate-300">Est. Turnaround</span>
                <span className="font-bold text-emerald-400">{turnaround}</span>
              </div>
            </div>

            {/* Price Display */}
            <div className="p-4 rounded-2xl bg-black/40 border border-white/10">
              <div className="text-[11px] text-slate-400 uppercase font-semibold">
                Estimated Total (Excl. Tax)
              </div>
              <div className="text-2xl sm:text-3xl font-black text-[#F88521] mt-1">
                Rs. {totalEstimate.toLocaleString()}
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                Approx. Rs. {unitRate} per piece
              </div>
            </div>

            {/* SEND DIRECT TO WHATSAPP */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white py-3.5 px-6 rounded-full font-bold text-sm sm:text-base shadow-lg hover:shadow-emerald-500/30 transition-all hover:scale-[1.02] active:scale-95"
            >
              <MessageCircle className="w-5 h-5 fill-white shrink-0" />
              <span>Send Quote to WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <div className="text-[11px] text-slate-400 text-center leading-relaxed">
              Our sales manager in Gulberg, Lahore responds within minutes with exact die-lines and invoice details.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
