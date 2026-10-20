"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Phone, 
  MapPin, 
  Search, 
  MessageCircle, 
  Menu, 
  X, 
  ChevronRight, 
  Sparkles,
  Clock
} from "lucide-react";
import { InstagramIcon, FacebookIcon, YouTubeIcon, TikTokIcon } from "@/components/SocialIcons";
import { BUSINESS_INFO, PRODUCTS, CATEGORIES, Product } from "@/data/products";

interface HeaderProps {
  activeCategory: string;
  onSelectCategory: (catId: string) => void;
  onOpenProductModal: (product: Product) => void;
}

export default function Header({
  activeCategory,
  onSelectCategory,
  onOpenProductModal,
}: HeaderProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Filter products for search dropdown
  const searchResults = searchQuery.trim()
    ? PRODUCTS.filter((p) =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.shortDesc.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 5)
    : [];

  // Close search on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full bg-white shadow-xs">
      {/* 1. TOP ANNOUNCEMENT BAR */}
      <div className="bg-[#0F172A] text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          {/* Left: Contact Info */}
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#F88521]" />
              <span className="font-semibold text-white">{BUSINESS_INFO.whatsappFormatted}</span>
            </a>
            <span className="hidden md:inline text-slate-600">|</span>
            <div className="hidden md:flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-[#F88521]" />
              <span className="truncate max-w-[360px]">Al Latif Center, Main Blvd, Gulberg, Lahore</span>
            </div>
            <span className="hidden lg:inline text-slate-600">|</span>
            <div className="hidden lg:flex items-center gap-1 text-emerald-400 font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Fast Nationwide Shipping Across Pakistan</span>
            </div>
          </div>

          {/* Right: Social Media Links */}
          <div className="flex items-center gap-3">
            <span className="text-slate-400 text-[11px] hidden sm:inline">Follow Us:</span>
            <a
              href={BUSINESS_INFO.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="p-1 text-slate-400 hover:text-[#F88521] transition-colors"
            >
              <InstagramIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href={BUSINESS_INFO.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="p-1 text-slate-400 hover:text-[#F88521] transition-colors"
            >
              <FacebookIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href={BUSINESS_INFO.socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="p-1 text-slate-400 hover:text-[#F88521] transition-colors"
            >
              <YouTubeIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href={BUSINESS_INFO.socials.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="p-1 text-slate-400 hover:text-[#F88521] transition-colors"
            >
              <TikTokIcon className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* 2. MAIN HEADER BAR */}
      <div className="max-w-7xl mx-auto px-4 py-3 sm:py-4 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0 group">
          <div className="relative w-12 h-12 sm:w-14 sm:h-14 shrink-0 transition-transform group-hover:scale-105">
            <Image
              src="/brand/logo.svg"
              alt="Dot Matic Printer Logo"
              width={56}
              height={56}
              className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-black tracking-tight text-[#111827] leading-none">
              DOT MATIC
            </span>
            <span className="text-[10px] sm:text-[11px] font-bold tracking-widest text-[#F88521] uppercase mt-0.5">
              Printer &amp; Packaging
            </span>
          </div>
        </Link>

        {/* Live Search Bar (Desktop) */}
        <div ref={searchRef} className="hidden md:block flex-1 max-w-xl mx-4 relative">
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Search boxes, visiting cards, flyers, stickers, paper bags..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setIsSearchOpen(true);
              }}
              onFocus={() => setIsSearchOpen(true)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full border-2 border-slate-200 focus:border-[#2D3092] focus:outline-none text-sm bg-slate-50 focus:bg-white transition-all text-slate-800 placeholder:text-slate-400 shadow-inner"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 text-slate-400 hover:text-slate-600 text-xs font-bold"
              >
                ✕
              </button>
            )}
          </div>

          {/* Search Dropdown Results */}
          {isSearchOpen && searchQuery.trim() && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden z-50">
              {searchResults.length > 0 ? (
                <div className="divide-y divide-slate-100">
                  <div className="px-4 py-2 bg-slate-50 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                    Found {searchResults.length} Products
                  </div>
                  {searchResults.map((product) => (
                    <button
                      key={product.id}
                      onClick={() => {
                        onOpenProductModal(product);
                        setIsSearchOpen(false);
                      }}
                      className="w-full text-left px-4 py-3 hover:bg-slate-50 flex items-center justify-between group transition-colors"
                    >
                      <div>
                        <div className="font-semibold text-sm text-slate-900 group-hover:text-[#2D3092] transition-colors">
                          {product.title}
                        </div>
                        <div className="text-xs text-slate-500 mt-0.5">
                          {product.category} • From <span className="text-[#F88521] font-bold">{product.startingPrice}</span>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-[#2D3092] group-hover:translate-x-1 transition-all" />
                    </button>
                  ))}
                </div>
              ) : (
                <div className="p-6 text-center text-slate-500 text-sm">
                  No matching printing products found. Chat with us on WhatsApp for custom jobs!
                </div>
              )}
            </div>
          )}
        </div>

        {/* Header Right Actions */}
        <div className="flex items-center gap-3">
          {/* Quick WhatsApp CTA Button */}
          <a
            href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent(
              "Hello Dot Matic Printer! I would like to get a custom quote for printing / packaging."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all active:scale-95 shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span className="hidden sm:inline">WhatsApp Quote</span>
            <span className="sm:hidden">WhatsApp</span>
          </a>

          {/* Request Custom Quote Anchor */}
          <a
            href="#quote-calculator"
            className="hidden lg:flex items-center gap-1.5 border-2 border-[#2D3092] text-[#2D3092] hover:bg-[#2D3092] hover:text-white px-4 py-2 rounded-full font-bold text-xs transition-all"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Instant Estimator</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-700 hover:text-slate-900 rounded-lg hover:bg-slate-100"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* 3. CATEGORY NAVIGATION STRIP (Desktop) */}
      <nav className="hidden md:block bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between overflow-x-auto scrollbar-none py-1">
          <div className="flex items-center gap-1">
            <button
              onClick={() => onSelectCategory("all")}
              className={`px-3.5 py-2 rounded-lg font-bold text-xs tracking-wide transition-colors whitespace-nowrap ${
                activeCategory === "all"
                  ? "bg-[#2D3092] text-white shadow-xs"
                  : "text-slate-700 hover:text-[#2D3092] hover:bg-slate-100"
              }`}
            >
              All Products
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`px-3.5 py-2 rounded-lg font-semibold text-xs tracking-wide transition-colors whitespace-nowrap ${
                  activeCategory === cat.id
                    ? "bg-[#2D3092] text-white shadow-xs"
                    : "text-slate-700 hover:text-[#2D3092] hover:bg-slate-100"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <a
            href="#quote-calculator"
            className="flex items-center gap-1 text-[#F88521] hover:text-[#e07114] font-bold text-xs whitespace-nowrap px-3 py-2"
          >
            <span>Need Custom Sizes?</span>
            <ChevronRight className="w-3 h-3" />
          </a>
        </div>
      </nav>

      {/* 4. MOBILE NAVIGATION DRAWER */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-3">
          {/* Mobile Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search packaging, visiting cards, flyers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 text-sm bg-slate-50"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
          </div>

          {/* Category Links */}
          <div className="space-y-1 pt-2">
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-2">
              Browse Categories
            </div>
            <button
              onClick={() => {
                onSelectCategory("all");
                setMobileMenuOpen(false);
              }}
              className={`w-full text-left px-3 py-2 rounded-lg font-semibold text-sm ${
                activeCategory === "all"
                  ? "bg-[#2D3092] text-white"
                  : "text-slate-700 hover:bg-slate-100"
              }`}
            >
              All Products
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  onSelectCategory(cat.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left px-3 py-2 rounded-lg font-medium text-sm flex items-center justify-between ${
                  activeCategory === cat.id
                    ? "bg-[#2D3092] text-white"
                    : "text-slate-700 hover:bg-slate-100"
                }`}
              >
                <span>{cat.name}</span>
                <span className="text-xs opacity-60">({cat.itemCount})</span>
              </button>
            ))}
          </div>

          {/* Quick Contact Links in Mobile */}
          <div className="pt-3 border-t border-slate-100 space-y-2 text-xs">
            <div className="flex items-center gap-2 text-slate-600">
              <MapPin className="w-4 h-4 text-[#F88521] shrink-0" />
              <span>{BUSINESS_INFO.address}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <Clock className="w-4 h-4 text-[#F88521] shrink-0" />
              <span>{BUSINESS_INFO.hours}</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
