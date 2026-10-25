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
  ChevronDown,
  ChevronRight, 
  Sparkles,
  Clock,
  Calendar
} from "lucide-react";
import { InstagramIcon, FacebookIcon, YouTubeIcon, TikTokIcon } from "@/components/SocialIcons";
import { BUSINESS_INFO, PRODUCTS, Product } from "@/data/products";

export const NAV_SUB_ITEMS = {
  business: [
    { title: "Pen", image: "/images/biz-pen.webp", desc: "Custom branded metal & plastic promotional pens" },
    { title: "Calendar", image: "/images/biz-calendar.webp", desc: "Desktop easel & executive wall calendars" },
    { title: "Notebook", image: "/images/biz-notebook.webp", desc: "Hardcover executive diaries & customized notepads" },
    { title: "Booklet", image: "/images/biz-booklet.webp", desc: "Saddle-stitched corporate brochures & booklets" },
    { title: "Wallet", image: "/images/biz-wallet.webp", desc: "Leather corporate wallets & executive gift sets" },
    { title: "Business Cards", image: "/images/biz-business-cards.webp", desc: "Premium matte, velvet, spot UV & gold foil visiting cards" },
    { title: "USB", image: "/images/biz-usb.webp", desc: "Custom logo engraved swivel flash drives" },
    { title: "Keychain", image: "/images/biz-keychain.webp", desc: "Die-cast metallic & leather branded keychains" },
    { title: "Cap", image: "/images/biz-cap.webp", desc: "Embroidered & heat-transferred corporate baseball caps" },
    { title: "Bottle", image: "/images/biz-bottle.webp", desc: "Insulated stainless steel tumblers & water bottles" },
    { title: "Envelope", image: "/images/biz-envelope.webp", desc: "Standard DL, A5 & A4 peel-and-seal corporate envelopes" },
    { title: "Paper Bag", image: "/images/biz-paper-bag.webp", desc: "Custom kraft & luxury laminated shopping bags with rope handles" },
  ],
  wedding: [
    { title: "Nikahnama", image: "/images/wed-nikahnama.webp", desc: "Custom designed luxury printed Islamic Nikahnama certificates" },
    { title: "Favor Bags", image: "/images/wed-favor-bags.webp", desc: "Delicate wedding favor gift bags with satin ribbon handles" },
    { title: "Wax Seals & Stamps", image: "/images/wed-wax-stamps.webp", desc: "Custom engraved brass wax seal stamps with sealing wax beads" },
    { title: "Acrylic Wedding Cards", image: "/images/wed-acrylic-cards.webp", desc: "Crystal-clear transparent acrylic luxury wedding invitations" },
    { title: "Budget Friendly Cards", image: "/images/wed-budget-cards.webp", desc: "Affordable & elegant wedding invitation cards with envelopes" },
    { title: "Premium Wedding Cards", image: "/images/wed-premium-cards.webp", desc: "Hardbound luxury presentation wedding boxes with velvet linings" },
    { title: "Menu Cards", image: "/images/wed-menu-cards.webp", desc: "Dining table food & beverage wedding reception menu cards" },
    { title: "Bid Boxes", image: "/images/wed-bid-boxes.webp", desc: "Traditional floral & gold foiled bid distribution sweet boxes" },
    { title: "Acrylic Boxes", image: "/images/wed-acrylic-boxes.webp", desc: "Transparent luxury acrylic keepsake gift & jewelry boxes" },
    { title: "E-cards", image: "/images/wed-ecards.webp", desc: "Animated & digital mobile wedding invitations for WhatsApp sharing" },
  ],
  packaging: [
    { title: "Corrugated Box", image: "/images/pkg-corrugated.webp", desc: "Custom heavy-duty 3-ply corrugated mailer boxes with edge printing for e-commerce" },
    { title: "Magnet Box", image: "/images/pkg-magnet-box.webp", desc: "Luxury rigid chipboard presentation gift boxes with hidden magnetic closures" },
    { title: "Shopping Bags", image: "/images/pkg-shopping-bags.webp", desc: "Premium boutique kraft & art card paper shopping bags with rope handles" },
    { title: "Labels", image: "/images/pkg-labels.webp", desc: "Waterproof vinyl roll labels, bottle packaging stickers, and circular hang tags" },
    { title: "Flyers", image: "/images/pkg-flyers.webp", desc: "High-definition offset flyers, tri-fold brochures, and marketing collateral" },
  ],
};

interface HeaderProps {
  activeCategory: string;
  onSelectCategory: (catId: string) => void;
  onOpenProductModal: (product: { title: string; image: string; category: string; desc?: string }) => void;
  onOpenAbout: () => void;
  onOpenAppointment: () => void;
}

export default function Header({
  activeCategory,
  onSelectCategory,
  onOpenProductModal,
  onOpenAbout,
  onOpenAppointment,
}: HeaderProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  const searchRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Filter products for search dropdown
  const searchResults = searchQuery.trim()
    ? PRODUCTS.filter((p) =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.shortDesc.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 5)
    : [];

  // Close search & dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMouseEnter = (menuName: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(menuName);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  const handleSubItemClick = (
    sectionId: string, 
    item: { title: string; image: string; desc: string }, 
    categoryName: string
  ) => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    
    // Smooth scroll to section
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }

    // Open product modal
    onOpenProductModal({
      title: item.title,
      image: item.image,
      category: categoryName,
      desc: item.desc,
    });
  };

  const handleTopLevelNavClick = (sectionId: string) => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white shadow-xs">
      {/* 1. TOP ANNOUNCEMENT BAR */}
      <div className="bg-[#0F172A] text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          {/* Left: Contact Info */}
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
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
              className="p-1 text-slate-400 hover:text-[#F88521] transition-colors cursor-pointer"
            >
              <InstagramIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href={BUSINESS_INFO.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="p-1 text-slate-400 hover:text-[#F88521] transition-colors cursor-pointer"
            >
              <FacebookIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href={BUSINESS_INFO.socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="p-1 text-slate-400 hover:text-[#F88521] transition-colors cursor-pointer"
            >
              <YouTubeIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href={BUSINESS_INFO.socials.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="p-1 text-slate-400 hover:text-[#F88521] transition-colors cursor-pointer"
            >
              <TikTokIcon className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* 2. MAIN BRAND & SEARCH BAR */}
      <div className="max-w-[1400px] mx-auto px-4 py-3 sm:py-3.5 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0 group cursor-pointer">
          <div className="relative w-11 h-11 sm:w-13 sm:h-13 shrink-0 transition-transform group-hover:scale-105 active:scale-95">
            <Image
              src="/brand/logo.svg"
              alt="Dot Matic Printer Logo"
              width={52}
              height={52}
              className="w-11 h-11 sm:w-13 sm:h-13 object-contain rounded-md"
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
                className="absolute right-3 text-slate-400 hover:text-slate-600 text-xs font-bold cursor-pointer"
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
                        onOpenProductModal({
                          title: product.title,
                          image: "/images/cat-business-cards.webp",
                          category: product.category,
                          desc: product.description,
                        });
                        setIsSearchOpen(false);
                      }}
                      className="w-full text-left px-4 py-3 hover:bg-slate-50 active:bg-blue-50 flex items-center justify-between group transition-colors cursor-pointer"
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
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Quick Book Appointment CTA */}
          <button
            onClick={onOpenAppointment}
            className="hidden sm:inline-flex items-center gap-1.5 border-2 border-[#2D3092] text-[#2D3092] hover:bg-[#2D3092] hover:text-white px-3.5 py-2 rounded-full font-bold text-xs transition-all cursor-pointer active:scale-95 active:bg-[#F88521] active:text-white shrink-0"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book Visit</span>
          </button>

          {/* WhatsApp CTA Button */}
          <a
            href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent(
              "Hello Dot Matic Printer! I would like to get a custom quote for printing / packaging."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] active:bg-[#128C7E] text-white px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all cursor-pointer active:scale-95 shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span className="hidden sm:inline">WhatsApp Quote</span>
            <span className="sm:hidden">WhatsApp</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-700 hover:text-slate-900 rounded-lg hover:bg-slate-100 cursor-pointer active:scale-90"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* 3. NEW NAVIGATION BAR (Replicating exact design from user image & instaprint.pk) */}
      <nav 
        ref={navRef}
        className="hidden md:block bg-white border-y border-slate-200/90 relative z-30"
      >
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex items-center justify-center space-x-8 lg:space-x-12 py-3">
            
            {/* 1. About Us */}
            <button
              onClick={onOpenAbout}
              className="font-bold text-[15px] lg:text-base text-slate-900 hover:text-[#2D3092] active:text-[#F88521] transition-all cursor-pointer py-1.5 active:scale-95 whitespace-nowrap"
            >
              About Us
            </button>

            {/* 2. Business Corporate ▾ */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter("business")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => {
                  setActiveDropdown(activeDropdown === "business" ? null : "business");
                  handleTopLevelNavClick("business-customers-section");
                }}
                className={`flex items-center gap-1.5 font-bold text-[15px] lg:text-base py-1.5 transition-all cursor-pointer active:scale-95 whitespace-nowrap ${
                  activeDropdown === "business" 
                    ? "text-[#2D3092]" 
                    : "text-slate-900 hover:text-[#2D3092] active:text-[#F88521]"
                }`}
              >
                <span>Business Corporate</span>
                <ChevronDown className={`w-4 h-4 stroke-[2.5] transition-transform duration-200 ${
                  activeDropdown === "business" ? "rotate-180 text-[#2D3092]" : "text-slate-600"
                }`} />
              </button>

              {/* Sub-Navigation Dropdown Panel */}
              {activeDropdown === "business" && (
                <div 
                  className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[480px] bg-white rounded-2xl shadow-2xl border border-slate-200 p-4 grid grid-cols-2 gap-1.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                  onMouseEnter={() => handleMouseEnter("business")}
                  onMouseLeave={handleMouseLeave}
                >
                  {NAV_SUB_ITEMS.business.map((sub, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSubItemClick("business-customers-section", sub, "Business Customers")}
                      className="flex items-center gap-3 p-2 rounded-xl text-left hover:bg-slate-100 hover:text-[#2D3092] active:bg-[#2D3092] active:text-white transition-all cursor-pointer group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-slate-100 p-1 flex items-center justify-center shrink-0 border border-slate-200 group-hover:border-slate-300">
                        <Image
                          src={sub.image}
                          alt={sub.title}
                          width={28}
                          height={28}
                          className="object-contain max-h-7 max-w-7"
                        />
                      </div>
                      <div className="truncate">
                        <span className="text-xs sm:text-sm font-semibold block truncate">
                          {sub.title}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* 3. Wedding ▾ */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter("wedding")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => {
                  setActiveDropdown(activeDropdown === "wedding" ? null : "wedding");
                  handleTopLevelNavClick("wedding-section");
                }}
                className={`flex items-center gap-1.5 font-bold text-[15px] lg:text-base py-1.5 transition-all cursor-pointer active:scale-95 whitespace-nowrap ${
                  activeDropdown === "wedding" 
                    ? "text-[#2D3092]" 
                    : "text-slate-900 hover:text-[#2D3092] active:text-[#F88521]"
                }`}
              >
                <span>Wedding</span>
                <ChevronDown className={`w-4 h-4 stroke-[2.5] transition-transform duration-200 ${
                  activeDropdown === "wedding" ? "rotate-180 text-[#2D3092]" : "text-slate-600"
                }`} />
              </button>

              {/* Sub-Navigation Dropdown Panel */}
              {activeDropdown === "wedding" && (
                <div 
                  className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[460px] bg-white rounded-2xl shadow-2xl border border-slate-200 p-4 grid grid-cols-2 gap-1.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                  onMouseEnter={() => handleMouseEnter("wedding")}
                  onMouseLeave={handleMouseLeave}
                >
                  {NAV_SUB_ITEMS.wedding.map((sub, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSubItemClick("wedding-section", sub, "Wedding & Events")}
                      className="flex items-center gap-3 p-2 rounded-xl text-left hover:bg-slate-100 hover:text-[#2D3092] active:bg-[#2D3092] active:text-white transition-all cursor-pointer group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-slate-100 p-1 flex items-center justify-center shrink-0 border border-slate-200 group-hover:border-slate-300">
                        <Image
                          src={sub.image}
                          alt={sub.title}
                          width={28}
                          height={28}
                          className="object-contain max-h-7 max-w-7"
                        />
                      </div>
                      <div className="truncate">
                        <span className="text-xs sm:text-sm font-semibold block truncate">
                          {sub.title}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* 4. Packaging Solutions ▾ */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter("packaging")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => {
                  setActiveDropdown(activeDropdown === "packaging" ? null : "packaging");
                  handleTopLevelNavClick("packaging-solutions-section");
                }}
                className={`flex items-center gap-1.5 font-bold text-[15px] lg:text-base py-1.5 transition-all cursor-pointer active:scale-95 whitespace-nowrap ${
                  activeDropdown === "packaging" 
                    ? "text-[#2D3092]" 
                    : "text-slate-900 hover:text-[#2D3092] active:text-[#F88521]"
                }`}
              >
                <span>Packaging Solutions</span>
                <ChevronDown className={`w-4 h-4 stroke-[2.5] transition-transform duration-200 ${
                  activeDropdown === "packaging" ? "rotate-180 text-[#2D3092]" : "text-slate-600"
                }`} />
              </button>

              {/* Sub-Navigation Dropdown Panel */}
              {activeDropdown === "packaging" && (
                <div 
                  className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[280px] bg-white rounded-2xl shadow-2xl border border-slate-200 p-3 space-y-1 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                  onMouseEnter={() => handleMouseEnter("packaging")}
                  onMouseLeave={handleMouseLeave}
                >
                  {NAV_SUB_ITEMS.packaging.map((sub, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSubItemClick("packaging-solutions-section", sub, "Packaging Solutions")}
                      className="w-full flex items-center gap-3 p-2 rounded-xl text-left hover:bg-slate-100 hover:text-[#2D3092] active:bg-[#2D3092] active:text-white transition-all cursor-pointer group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-slate-100 p-1 flex items-center justify-center shrink-0 border border-slate-200 group-hover:border-slate-300">
                        <Image
                          src={sub.image}
                          alt={sub.title}
                          width={28}
                          height={28}
                          className="object-contain max-h-7 max-w-7"
                        />
                      </div>
                      <span className="text-xs sm:text-sm font-semibold truncate">
                        {sub.title}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* 5. Book an Appointment */}
            <button
              onClick={onOpenAppointment}
              className="font-bold text-[15px] lg:text-base text-slate-900 hover:text-[#2D3092] active:text-[#F88521] transition-all cursor-pointer py-1.5 active:scale-95 whitespace-nowrap"
            >
              Book an Appointment
            </button>

          </div>
        </div>
      </nav>

      {/* 4. MOBILE NAVIGATION DRAWER */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-4 max-h-[85vh] overflow-y-auto">
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

          {/* Navigation Items (Accordion Style) */}
          <div className="space-y-1.5 pt-1">
            {/* About Us */}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAbout();
              }}
              className="w-full text-left px-3 py-2.5 rounded-xl font-bold text-sm text-slate-900 hover:bg-slate-50 active:bg-blue-50 active:text-[#2D3092] flex items-center justify-between cursor-pointer"
            >
              <span>About Us</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </button>

            {/* Business Corporate Expandable */}
            <div className="rounded-xl border border-slate-100 overflow-hidden">
              <button
                onClick={() => setMobileExpanded(mobileExpanded === "business" ? null : "business")}
                className="w-full text-left px-3 py-2.5 font-bold text-sm text-slate-900 bg-slate-50 flex items-center justify-between cursor-pointer"
              >
                <span>Business Corporate</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpanded === "business" ? "rotate-180 text-[#2D3092]" : "text-slate-400"}`} />
              </button>
              {mobileExpanded === "business" && (
                <div className="p-2 space-y-1 bg-white divide-y divide-slate-50">
                  {NAV_SUB_ITEMS.business.map((sub, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSubItemClick("business-customers-section", sub, "Business Customers")}
                      className="w-full text-left px-2 py-2 text-xs font-semibold text-slate-700 hover:text-[#2D3092] active:bg-blue-50 flex items-center gap-2 cursor-pointer"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F88521]" />
                      <span>{sub.title}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Wedding Expandable */}
            <div className="rounded-xl border border-slate-100 overflow-hidden">
              <button
                onClick={() => setMobileExpanded(mobileExpanded === "wedding" ? null : "wedding")}
                className="w-full text-left px-3 py-2.5 font-bold text-sm text-slate-900 bg-slate-50 flex items-center justify-between cursor-pointer"
              >
                <span>Wedding</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpanded === "wedding" ? "rotate-180 text-[#2D3092]" : "text-slate-400"}`} />
              </button>
              {mobileExpanded === "wedding" && (
                <div className="p-2 space-y-1 bg-white divide-y divide-slate-50">
                  {NAV_SUB_ITEMS.wedding.map((sub, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSubItemClick("wedding-section", sub, "Wedding & Events")}
                      className="w-full text-left px-2 py-2 text-xs font-semibold text-slate-700 hover:text-[#2D3092] active:bg-blue-50 flex items-center gap-2 cursor-pointer"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F88521]" />
                      <span>{sub.title}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Packaging Solutions Expandable */}
            <div className="rounded-xl border border-slate-100 overflow-hidden">
              <button
                onClick={() => setMobileExpanded(mobileExpanded === "packaging" ? null : "packaging")}
                className="w-full text-left px-3 py-2.5 font-bold text-sm text-slate-900 bg-slate-50 flex items-center justify-between cursor-pointer"
              >
                <span>Packaging Solutions</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpanded === "packaging" ? "rotate-180 text-[#2D3092]" : "text-slate-400"}`} />
              </button>
              {mobileExpanded === "packaging" && (
                <div className="p-2 space-y-1 bg-white divide-y divide-slate-50">
                  {NAV_SUB_ITEMS.packaging.map((sub, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSubItemClick("packaging-solutions-section", sub, "Packaging Solutions")}
                      className="w-full text-left px-2 py-2 text-xs font-semibold text-slate-700 hover:text-[#2D3092] active:bg-blue-50 flex items-center gap-2 cursor-pointer"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F88521]" />
                      <span>{sub.title}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Book an Appointment */}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAppointment();
              }}
              className="w-full text-left px-3 py-2.5 rounded-xl font-bold text-sm text-slate-900 hover:bg-slate-50 active:bg-blue-50 active:text-[#2D3092] flex items-center justify-between cursor-pointer"
            >
              <span className="text-[#2D3092]">Book an Appointment</span>
              <Calendar className="w-4 h-4 text-[#2D3092]" />
            </button>
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
