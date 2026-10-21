"use client";

import React from "react";
import Image from "next/image";
import { X, MapPin, Phone, Clock, Truck, ShieldCheck, Sparkles, MessageCircle } from "lucide-react";
import { BUSINESS_INFO } from "@/data/products";

interface AboutUsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenAppointment?: () => void;
}

export default function AboutUsModal({ isOpen, onClose, onOpenAppointment }: AboutUsModalProps) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 relative bg-white rounded-xl p-1 shadow-xs border border-slate-200 flex items-center justify-center shrink-0">
              <Image
                src="/brand/logo.png"
                alt="Dot Matic Printer Logo"
                width={36}
                height={36}
                className="w-8 h-8 object-contain rounded-sm"
              />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-black text-slate-900 tracking-tight leading-none">
                About Dot Matic Printer
              </h2>
              <span className="text-[11px] font-bold text-[#F88521] uppercase tracking-wider">
                Industrial Printing &amp; Packaging • Gulberg, Lahore
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-200 hover:bg-red-100 hover:text-red-600 text-slate-700 flex items-center justify-center transition-all cursor-pointer active:scale-90"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-700 text-sm leading-relaxed">
          {/* Main Story */}
          <div className="space-y-3">
            <h3 className="text-base font-extrabold text-slate-900">
              Crafting Exceptional Print &amp; Packaging Since Day One
            </h3>
            <p>
              Located in the heart of commercial Lahore at <strong>Al Latif Center, Main Boulevard, Gulberg</strong>, <strong>Dot Matic Printer</strong> is an industrial-grade printing and packaging facility dedicated to helping Pakistani businesses, brands, and families bring their creative ideas to life.
            </p>
            <p>
              Whether you need 100 bespoke wedding invitation boxes or 50,000 custom-printed corrugated mailers for an e-commerce brand, we combine master offset craftsmanship with modern digital technology to deliver pinpoint color accuracy and sharp finishing.
            </p>
          </div>

          {/* Core Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
              <div className="w-8 h-8 rounded-xl bg-blue-100 text-[#2D3092] flex items-center justify-center shrink-0 mt-0.5">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-bold text-xs text-slate-900">In-House Manufacturing</h4>
                <p className="text-[12px] text-slate-500 mt-0.5 leading-snug">
                  Heidelberg offset presses, automatic die-cutting, spot UV, embossing, and foil stamping under one roof.
                </p>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
              <div className="w-8 h-8 rounded-xl bg-orange-100 text-[#F88521] flex items-center justify-center shrink-0 mt-0.5">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-bold text-xs text-slate-900">Quality Assured</h4>
                <p className="text-[12px] text-slate-500 mt-0.5 leading-snug">
                  Rigorous paper GSM checks, edge-to-edge die precision, and true Pantone color fidelity.
                </p>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
              <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                <Truck className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-bold text-xs text-slate-900">Nationwide Shipping</h4>
                <p className="text-[12px] text-slate-500 mt-0.5 leading-snug">
                  Prompt daily cargo &amp; courier delivery to Karachi, Islamabad, Rawalpindi, Faisalabad, and all cities.
                </p>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
              <div className="w-8 h-8 rounded-xl bg-indigo-100 text-[#2D3092] flex items-center justify-center shrink-0 mt-0.5">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-bold text-xs text-slate-900">Fast Turnaround</h4>
                <p className="text-[12px] text-slate-500 mt-0.5 leading-snug">
                  Quick production schedules, free pre-press artwork checks, and dedicated WhatsApp support.
                </p>
              </div>
            </div>
          </div>

          {/* Workshop Location & Info */}
          <div className="bg-slate-900 text-slate-200 p-4 sm:p-5 rounded-2xl space-y-2 text-xs">
            <div className="font-bold text-white uppercase tracking-wider text-[11px] mb-1">
              Visit Our Workshop
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#F88521] shrink-0" />
              <span>{BUSINESS_INFO.address}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#F88521] shrink-0" />
              <span>{BUSINESS_INFO.hours}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#F88521] shrink-0" />
              <span>{BUSINESS_INFO.whatsappFormatted} (Direct Inquiries &amp; Orders)</span>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          {onOpenAppointment && (
            <button
              onClick={() => {
                onClose();
                onOpenAppointment();
              }}
              className="w-full sm:w-auto px-5 py-2.5 rounded-full border-2 border-[#2D3092] text-[#2D3092] hover:bg-[#2D3092] hover:text-white font-bold text-xs transition-all cursor-pointer active:scale-95 active:bg-[#F88521] active:text-white"
            >
              Book an Appointment
            </button>
          )}

          <a
            href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent(
              "Hello Dot Matic Printer! I read about your workshop on your website and would like to discuss a printing project."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] active:bg-[#128C7E] text-white py-2.5 px-6 rounded-full font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all cursor-pointer active:scale-95"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
