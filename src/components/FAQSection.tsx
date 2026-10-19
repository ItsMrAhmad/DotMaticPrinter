"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";
import { BUSINESS_INFO } from "@/data/products";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is your typical turnaround time for orders?",
      a: "Standard turnaround for stationery, business cards, flyers, and stickers is 2 to 3 working days. Custom packaging boxes and luxury rigid boxes typically take 4 to 6 working days from final artwork and advance approval. Urgent rush production options are also available upon request.",
    },
    {
      q: "What payment methods do you accept in Pakistan?",
      a: "We accept Online Bank Transfers (Meezan Bank, HBL, Bank Alfalah, etc.), JazzCash, and EasyPaisa. For clients in Lahore, partial Cash on Delivery (COD) or workshop pickup at Al Latif Center, Gulberg is available.",
    },
    {
      q: "What file formats should I submit for printing?",
      a: "We recommend vector files in PDF, Adobe Illustrator (.AI), CorelDraw (.CDR), or layered Adobe Photoshop (.PSD). Please ensure all fonts are outlined/converted to curves, colors are set to CMYK mode, and images are at least 300 DPI with a 3mm bleed allowance.",
    },
    {
      q: "Can I inspect a sample proof before placing a bulk order?",
      a: "Yes! We always send a high-resolution 3D digital PDF proof showing die-cuts and fold lines for free. For large volume custom box production, we can also produce a physical unprinted dummy or single printed digital sample upon request.",
    },
    {
      q: "Do you offer nationwide delivery across Pakistan?",
      a: "Yes, we ship nationwide! We deliver daily to Lahore, Karachi, Islamabad, Rawalpindi, Faisalabad, Multan, Sialkot, Peshawar, Quetta, and all surrounding regions using trusted courier partners and cargo logistics for heavy bulk pallets.",
    },
    {
      q: "What are your Minimum Order Quantities (MOQs)?",
      a: "We support both startups and large corporations! Our MOQs start as low as 100 pcs for custom corrugated mailer boxes, 50 pcs for luxury rigid boxes, and 500 pcs for premium visiting cards and folding cartons.",
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="bg-slate-50 py-16 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-[#F88521] text-xs font-bold uppercase tracking-wider mb-2">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            Everything you need to know about placing a printing or packaging order with Dot Matic Printer.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs transition-all"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left px-5 py-4 font-bold text-sm sm:text-base text-slate-900 flex items-center justify-between gap-4 hover:text-[#2D3092] transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#2D3092]" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 animate-in fade-in duration-150">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Strip */}
        <div className="mt-8 p-6 rounded-2xl bg-white border border-slate-200 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <div className="font-bold text-sm text-slate-900">Have a custom packaging requirement?</div>
            <div className="text-xs text-slate-500 mt-0.5">
              Talk directly with our print technician on WhatsApp for free advice.
            </div>
          </div>
          <a
            href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent(
              "Hello Dot Matic Printer! I have a question regarding an upcoming print order."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm transition-all shadow-xs"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
