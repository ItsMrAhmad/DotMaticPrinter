"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { BUSINESS_INFO } from "@/data/products";
import { MapPin, Phone, Mail, Clock, MessageCircle, Calendar, Send, ChevronRight, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [projectType, setProjectType] = useState("Custom Packaging & Boxes");
  const [preferredDate, setPreferredDate] = useState("");
  const [preferredTime, setPreferredTime] = useState("Afternoon (2:00 PM - 5:00 PM)");
  const [notes, setNotes] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hello Dot Matic Printer!\n\n` +
      `I would like to book a workshop visit or request an inquiry:\n` +
      (name ? `• Name: ${name}\n` : "") +
      `• Project Type: ${projectType}\n` +
      (preferredDate ? `• Date: ${preferredDate}\n` : "") +
      `• Time: ${preferredTime}\n` +
      (notes ? `• Details: ${notes}\n` : "") +
      `\nPlease let me know your availability. Thank you!`
    );
    window.open(`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${text}`, "_blank");
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `https://${BUSINESS_INFO.domain}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Contact & Workshop",
        item: `https://${BUSINESS_INFO.domain}/contact/`,
      },
    ],
  };

  return (
    <main className="min-h-screen flex flex-col bg-white selection:bg-[#F88521] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Header />

      {/* Breadcrumb Navigation */}
      <div className="bg-slate-50 border-b border-slate-200/80 py-3">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <nav className="flex items-center gap-2 text-xs text-slate-500 font-medium">
            <Link href="/" className="hover:text-[#2D3092] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 font-semibold">Contact &amp; Workshop</span>
          </nav>
        </div>
      </div>

      {/* Hero Header */}
      <section className="bg-slate-900 text-white py-12 sm:py-16 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md text-[#F88521] text-xs font-bold uppercase tracking-wider mb-4 border border-white/10">
              <MapPin className="w-3.5 h-3.5" />
              <span>Gulberg, Lahore Production Workshop</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.1] mb-4">
              Get in Touch with Our Print Specialists
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              Visit our workshop at Al Latif Center, Main Boulevard, Gulberg, Lahore, or discuss your packaging specifications directly over WhatsApp.
            </p>
          </div>
        </div>
      </section>

      {/* Contact & Map Grid */}
      <section className="py-16 bg-[#F8F9FA] border-b border-slate-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Column: Direct Info Cards */}
            <div className="lg:col-span-5 space-y-5">
              <div className="bg-white p-7 rounded-3xl border border-slate-200 shadow-xs space-y-6">
                <h2 className="text-xl font-black text-slate-900 tracking-tight">Workshop Details</h2>
                
                <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-orange-100 text-[#F88521] flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">Workshop &amp; Office Address</div>
                      <div className="text-slate-600 mt-0.5">{BUSINESS_INFO.address}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-100 text-[#2D3092] flex items-center justify-center shrink-0 mt-0.5">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">Call &amp; WhatsApp</div>
                      <a href={`tel:${BUSINESS_INFO.phone}`} className="text-slate-600 hover:text-[#2D3092] block mt-0.5">
                        {BUSINESS_INFO.phone} (Direct Voice Call)
                      </a>
                      <a href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}`} target="_blank" rel="noopener noreferrer" className="text-emerald-600 font-semibold block mt-0.5">
                        {BUSINESS_INFO.whatsappFormatted} (Instant WhatsApp)
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">Email Inquiries</div>
                      <a href={`mailto:${BUSINESS_INFO.email}`} className="text-slate-600 hover:text-[#2D3092] block mt-0.5">
                        {BUSINESS_INFO.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">Operating Hours</div>
                      <div className="text-slate-600 mt-0.5">{BUSINESS_INFO.hours}</div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <a
                    href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent(
                      "Hello Dot Matic Printer! I have an upcoming print order inquiry."
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white py-3.5 rounded-2xl font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Chat on WhatsApp Directly</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Appointment & Consultation Form */}
            <div className="lg:col-span-7">
              <div className="bg-white p-7 sm:p-9 rounded-3xl border border-slate-200 shadow-xs">
                <div className="mb-6">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#2D3092] text-xs font-bold uppercase tracking-wider mb-2">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Free Workshop Consultation</span>
                  </div>
                  <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                    Book an In-Person Visit or Custom Quote
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Fill out your project specifications to review physical paper samples, box dummies, and finish samples at our Gulberg facility.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Your Name / Company Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Tariq Ahmed (Velvet Apparel)"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs sm:text-sm focus:border-[#2D3092] focus:outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Project Type
                    </label>
                    <select
                      value={projectType}
                      onChange={(e) => setProjectType(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs sm:text-sm focus:border-[#2D3092] focus:outline-none transition-all bg-white"
                    >
                      <option value="Custom Packaging & Boxes">Custom Packaging &amp; Boxes (Mailer / Rigid)</option>
                      <option value="Wedding Stationery & Nikahnama">Wedding Stationery &amp; Nikahnama Certificates</option>
                      <option value="Corporate Stationery & Visiting Cards">Corporate Stationery &amp; Visiting Cards</option>
                      <option value="Shopping Paper Bags">Shopping Paper Bags (Kraft / Laminated)</option>
                      <option value="Waterproof Stickers & Roll Labels">Waterproof Stickers &amp; Roll Labels</option>
                      <option value="Bulk Commercial Printing">Bulk Commercial Printing &amp; Other</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        value={preferredDate}
                        onChange={(e) => setPreferredDate(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs sm:text-sm focus:border-[#2D3092] focus:outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Preferred Time Slot
                      </label>
                      <select
                        value={preferredTime}
                        onChange={(e) => setPreferredTime(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs sm:text-sm focus:border-[#2D3092] focus:outline-none transition-all bg-white"
                      >
                        <option value="Morning (11:00 AM - 1:00 PM)">Morning (11:00 AM - 1:00 PM)</option>
                        <option value="Afternoon (2:00 PM - 5:00 PM)">Afternoon (2:00 PM - 5:00 PM)</option>
                        <option value="Evening (5:00 PM - 8:00 PM)">Evening (5:00 PM - 8:00 PM)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Project Details / Dimensions / Quantities
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Describe your required dimensions, estimated quantities, and finish requirements..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs sm:text-sm focus:border-[#2D3092] focus:outline-none transition-all"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-[#2D3092] hover:bg-slate-900 text-white py-3.5 rounded-2xl font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer active:scale-95"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit &amp; Confirm on WhatsApp</span>
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
