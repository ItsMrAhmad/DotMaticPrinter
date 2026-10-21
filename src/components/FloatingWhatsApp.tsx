"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MessageCircle, X, Send, Sparkles, PhoneCall } from "lucide-react";
import { BUSINESS_INFO } from "@/data/products";

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [customMsg, setCustomMsg] = useState<string>("");

  const quickPrompts = [
    { label: "📦 Custom Box Packaging Quote", text: "Hello! I need a custom quote for box packaging for my brand." },
    { label: "💳 Luxury Visiting Cards", text: "Hello! I want to order premium luxury visiting cards with spot UV / foil." },
    { label: "🛍️ Kraft Paper Shopping Bags", text: "Hello! I need custom printed shopping bags with my brand logo." },
    { label: "🎨 Ready Artwork / Sample Check", text: "Hello! I have ready artwork (PDF/AI) and want to get it printed." },
  ];

  const handleSendPrompt = (text: string) => {
    const url = `https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  const handleCustomSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customMsg.trim()) return;
    const url = `https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent(customMsg)}`;
    window.open(url, "_blank");
    setCustomMsg("");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Expandable Chat Card */}
      {isOpen && (
        <div className="mb-3 w-[340px] sm:w-[380px] bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden animate-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="bg-[#0F172A] p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full bg-white p-1 shrink-0">
                <Image
                  src="/brand/logo.png"
                  alt="Dot Matic Printer"
                  width={36}
                  height={36}
                  className="object-contain rounded-full"
                />
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-[#0F172A]" />
              </div>
              <div>
                <div className="font-bold text-sm leading-tight">Dot Matic Printer</div>
                <div className="text-[11px] text-emerald-400 font-medium flex items-center gap-1">
                  <span>Online</span> • <span>Gulberg, Lahore</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-7 h-7 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center transition-colors cursor-pointer active:scale-90"
              aria-label="Close chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Welcome Message Bubble */}
          <div className="p-4 bg-slate-50 space-y-3">
            <div className="bg-white p-3 rounded-2xl rounded-tl-xs shadow-xs border border-slate-100 text-xs text-slate-700 leading-relaxed">
              Assalam-o-Alaikum! Welcome to <span className="font-bold text-[#2D3092]">Dot Matic Printer</span>. 
              How can we assist your business with printing or packaging today?
            </div>

            {/* Quick 1-Tap Action Prompts */}
            <div className="space-y-1.5 pt-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block px-1">
                Tap to chat instantly:
              </span>
              {quickPrompts.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendPrompt(q.text)}
                  className="w-full text-left text-xs bg-white hover:bg-emerald-50 hover:border-emerald-300 hover:text-emerald-900 active:bg-emerald-100 text-slate-700 font-medium px-3 py-2 rounded-xl border border-slate-200 transition-all flex items-center justify-between group shadow-2xs cursor-pointer active:scale-95"
                >
                  <span>{q.label}</span>
                  <Send className="w-3 h-3 text-slate-400 group-hover:text-emerald-600 transition-colors" />
                </button>
              ))}
            </div>
          </div>

          {/* Custom Message Input Form */}
          <form onSubmit={handleCustomSend} className="p-3 bg-white border-t border-slate-100 flex items-center gap-2">
            <input
              type="text"
              placeholder="Type your inquiry..."
              value={customMsg}
              onChange={(e) => setCustomMsg(e.target.value)}
              className="flex-1 text-xs px-3 py-2.5 rounded-full border border-slate-200 focus:outline-none focus:border-[#25D366] bg-slate-50"
            />
            <button
              type="submit"
              className="w-9 h-9 rounded-full bg-[#25D366] hover:bg-[#20ba59] active:bg-[#128C7E] text-white flex items-center justify-center transition-all active:scale-90 cursor-pointer shrink-0"
              aria-label="Send WhatsApp message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      {/* Floating Circular Launcher Button */}
      <div className="relative group">
        {/* Pulsing ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-60 animate-ping pointer-events-none" />

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] active:bg-[#128C7E] text-white px-4 py-3.5 rounded-full shadow-2xl hover:shadow-emerald-500/40 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6 fill-white" />
          <span className="font-black text-sm pr-1 hidden sm:inline">
            Chat with Us
          </span>
        </button>
      </div>
    </div>
  );
}
