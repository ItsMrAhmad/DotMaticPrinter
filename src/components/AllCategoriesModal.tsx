"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, ArrowRight, Package, Heart, Briefcase, ExternalLink, MessageCircle } from "lucide-react";
import { ModalProduct } from "@/components/InstaProductModal";
import { BUSINESS_INFO } from "@/data/products";

interface AllCategoriesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCategory: (sectionId: string) => void;
  onOpenProduct: (product: ModalProduct) => void;
}

export default function AllCategoriesModal({
  isOpen,
  onClose,
  onSelectCategory,
  onOpenProduct,
}: AllCategoriesModalProps) {
  const [activeTab, setActiveTab] = useState<"all" | "packaging" | "wedding" | "business">("all");

  if (!isOpen) return null;

  const categoriesData = [
    {
      id: "packaging",
      sectionId: "packaging-solutions-section",
      name: "Packaging Solutions",
      badge: "5 Categories",
      icon: Package,
      themeColor: "from-amber-500/10 to-orange-500/10 border-orange-200",
      accentText: "text-[#F88521]",
      buttonBg: "bg-[#F88521] hover:bg-[#e07212]",
      desc: "Custom fluted corrugated cartons, luxury magnetic rigid boxes, boutique shopping bags, product labels & flyers.",
      items: [
        {
          title: "Corrugated Box",
          image: "/images/pkg-corrugated.webp",
          desc: "Custom heavy-duty 3-ply corrugated mailer boxes for e-commerce brands",
        },
        {
          title: "Magnet Box",
          image: "/images/pkg-magnet-box.webp",
          desc: "Luxury rigid chipboard presentation gift boxes with hidden magnetic closures",
        },
        {
          title: "Shopping Bags",
          image: "/images/pkg-shopping-bags.webp",
          desc: "Premium boutique kraft & art card paper shopping bags with rope handles",
        },
        {
          title: "Labels & Stickers",
          image: "/images/pkg-labels.webp",
          desc: "Waterproof vinyl roll labels, bottle packaging stickers, and circular hang tags",
        },
        {
          title: "Flyers & Brochures",
          image: "/images/pkg-flyers.webp",
          desc: "High-definition offset flyers, tri-fold brochures, and marketing collateral",
        },
      ],
    },
    {
      id: "wedding",
      sectionId: "wedding-section",
      name: "Wedding & Event Collection",
      badge: "10 Categories",
      icon: Heart,
      themeColor: "from-rose-500/10 to-pink-500/10 border-pink-200",
      accentText: "text-rose-600",
      buttonBg: "bg-rose-600 hover:bg-rose-700",
      desc: "Bespoke Islamic Nikahnama certificates, transparent acrylic invitations, velvet presentation boxes, wax seals & favor bags.",
      items: [
        {
          title: "Nikahnama",
          image: "/images/wed-nikahnama.webp",
          desc: "Custom designed luxury printed Islamic Nikahnama certificates with gold illumination",
        },
        {
          title: "Favor Bags",
          image: "/images/wed-favor-bags.webp",
          desc: "Delicate wedding favor gift bags with satin ribbon handles",
        },
        {
          title: "Wax Stamps & Seals",
          image: "/images/wed-wax-stamps.webp",
          desc: "Custom engraved brass wax seal stamps with metallic sealing wax beads",
        },
        {
          title: "Acrylic Cards",
          image: "/images/wed-acrylic-cards.webp",
          desc: "Crystal-clear transparent acrylic luxury wedding invitations",
        },
        {
          title: "Budget Cards",
          image: "/images/wed-budget-cards.webp",
          desc: "Affordable & elegant wedding invitation cards with matching envelopes",
        },
        {
          title: "Premium Cards",
          image: "/images/wed-premium-cards.webp",
          desc: "Hardbound luxury presentation wedding boxes with velvet linings & gold foil",
        },
        {
          title: "Menu Cards",
          image: "/images/wed-menu-cards.webp",
          desc: "Dining table food & beverage wedding reception menu cards",
        },
        {
          title: "Bid Boxes",
          image: "/images/wed-bid-boxes.webp",
          desc: "Traditional floral & gold foiled bid distribution sweet boxes",
        },
        {
          title: "Acrylic Boxes",
          image: "/images/wed-acrylic-boxes.webp",
          desc: "Transparent luxury acrylic keepsake gift & wishing well card boxes",
        },
        {
          title: "E-cards",
          image: "/images/wed-ecards.webp",
          desc: "Digital mobile wedding invitations formatted for instant WhatsApp sharing",
        },
      ],
    },
    {
      id: "business",
      sectionId: "business-customers-section",
      name: "For Our Business Customers",
      badge: "12 Categories",
      icon: Briefcase,
      themeColor: "from-blue-500/10 to-indigo-500/10 border-blue-200",
      accentText: "text-[#2D3092]",
      buttonBg: "bg-[#2D3092] hover:bg-[#202370]",
      desc: "Corporate gifts, executive stationery, visiting cards, branded pens, custom flash drives, and promotional drinkware.",
      items: [
        {
          title: "Custom Pens",
          image: "/images/biz-pen.webp",
          desc: "Custom branded metal & plastic promotional pens with logo engraving",
        },
        {
          title: "Desk Calendars",
          image: "/images/biz-calendar.webp",
          desc: "Desktop easel & executive corporate wall calendars",
        },
        {
          title: "Hardcover Notebooks",
          image: "/images/biz-notebook.webp",
          desc: "Hardcover executive diaries & customized corporate notepads",
        },
        {
          title: "Booklets & Catalogs",
          image: "/images/biz-booklet.webp",
          desc: "Saddle-stitched corporate brochures, catalogs & booklets",
        },
        {
          title: "Leather Wallets",
          image: "/images/biz-wallet.webp",
          desc: "Leather corporate wallets & executive gift sets",
        },
        {
          title: "Business Cards",
          image: "/images/biz-business-cards.webp",
          desc: "Premium matte, velvet, spot UV & gold foil visiting cards",
        },
        {
          title: "Custom USBs",
          image: "/images/biz-usb.webp",
          desc: "Custom logo engraved swivel flash drives (16GB - 64GB)",
        },
        {
          title: "Metallic Keychains",
          image: "/images/biz-keychain.webp",
          desc: "Die-cast metallic & leather branded promotional keychains",
        },
        {
          title: "Embroidered Caps",
          image: "/images/biz-cap.webp",
          desc: "Embroidered & heat-transferred corporate baseball caps",
        },
        {
          title: "Stainless Bottles",
          image: "/images/biz-bottle.webp",
          desc: "Insulated stainless steel tumblers & promotional water bottles",
        },
        {
          title: "Peel & Seal Envelopes",
          image: "/images/biz-envelope.webp",
          desc: "Standard DL, A5 & A4 peel-and-seal corporate envelopes",
        },
        {
          title: "Luxury Paper Bags",
          image: "/images/biz-paper-bag.webp",
          desc: "Custom kraft & luxury laminated shopping bags with rope handles",
        },
      ],
    },
  ];

  const filteredCategories =
    activeTab === "all"
      ? categoriesData
      : categoriesData.filter((cat) => cat.id === activeTab);

  const handleJumpToSection = (sectionId: string) => {
    onClose();
    setTimeout(() => {
      onSelectCategory(sectionId);
    }, 150);
  };

  const handleProductClick = (
    product: { title: string; image: string; desc: string },
    categoryName: string
  ) => {
    onClose();
    setTimeout(() => {
      onOpenProduct({
        title: product.title,
        image: product.image,
        category: categoryName,
        desc: product.desc,
      });
    }, 150);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/75 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ================= MODAL HEADER ================= */}
        <div className="flex items-center justify-between px-5 sm:px-8 py-4 sm:py-5 border-b border-slate-100 bg-slate-50 shrink-0">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#F88521]/10 text-[#F88521] text-[11px] font-bold uppercase tracking-wider">
                Full Catalog
              </span>
              <span className="text-xs text-slate-500 font-medium">
                27 Custom Product Categories
              </span>
            </div>
            <h2 className="text-lg sm:text-2xl font-black text-slate-900 tracking-tight mt-1">
              All Product Categories
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-200 hover:bg-red-100 hover:text-red-600 text-slate-700 flex items-center justify-center transition-all cursor-pointer active:scale-90"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* ================= CATEGORY FILTER TABS ================= */}
        <div className="px-5 sm:px-8 py-3 bg-white border-b border-slate-200/80 flex items-center gap-2 overflow-x-auto shrink-0 scrollbar-none">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap active:scale-95 ${
              activeTab === "all"
                ? "bg-slate-900 text-white shadow-xs"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
            }`}
          >
            All Categories (27)
          </button>
          <button
            onClick={() => setActiveTab("packaging")}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap active:scale-95 ${
              activeTab === "packaging"
                ? "bg-[#F88521] text-white shadow-xs"
                : "bg-orange-50 text-orange-800 hover:bg-orange-100"
            }`}
          >
            Packaging Solutions (5)
          </button>
          <button
            onClick={() => setActiveTab("wedding")}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap active:scale-95 ${
              activeTab === "wedding"
                ? "bg-rose-600 text-white shadow-xs"
                : "bg-rose-50 text-rose-800 hover:bg-rose-100"
            }`}
          >
            Wedding &amp; Events (10)
          </button>
          <button
            onClick={() => setActiveTab("business")}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap active:scale-95 ${
              activeTab === "business"
                ? "bg-[#2D3092] text-white shadow-xs"
                : "bg-indigo-50 text-indigo-800 hover:bg-indigo-100"
            }`}
          >
            Business &amp; Merch (12)
          </button>
        </div>

        {/* ================= MODAL BODY: CATEGORY SECTIONS ================= */}
        <div className="p-5 sm:p-8 overflow-y-auto space-y-10">
          {filteredCategories.map((catGroup) => {
            const Icon = catGroup.icon;
            return (
              <div key={catGroup.id} className="space-y-4">
                
                {/* Section Header Card */}
                <div
                  className={`bg-gradient-to-r ${catGroup.themeColor} border rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-2xs`}
                >
                  <div className="flex items-start sm:items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-white shadow-xs text-slate-800 shrink-0">
                      <Icon className={`w-5 h-5 ${catGroup.accentText}`} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-base sm:text-lg font-black text-slate-900 tracking-tight">
                          {catGroup.name}
                        </h3>
                        <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-white/80 text-slate-700 border border-slate-200/60 shadow-2xs">
                          {catGroup.badge}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Jump To Page / Section Button */}
                  <button
                    onClick={() => handleJumpToSection(catGroup.sectionId)}
                    className={`inline-flex items-center justify-center gap-1.5 ${catGroup.buttonBg} text-white px-4 py-2 rounded-xl text-xs font-bold shadow-xs transition-all active:scale-95 cursor-pointer shrink-0`}
                  >
                    <span>View Section On Page</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Grid of Items */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                  {catGroup.items.map((item, idx) => (
                    <div
                      key={idx}
                      onClick={() => handleProductClick(item, catGroup.name)}
                      className="bg-slate-50 hover:bg-white rounded-xl p-3 border border-slate-200/80 hover:border-[#F88521] hover:shadow-md transition-all duration-200 flex flex-col items-center text-center group cursor-pointer active:scale-95"
                    >
                      <div className="w-full h-24 sm:h-28 bg-white rounded-lg p-2 mb-2 flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={100}
                          height={100}
                          className="object-contain max-h-20 sm:max-h-24 w-auto"
                        />
                      </div>
                      <span className="text-xs font-bold text-slate-900 group-hover:text-[#F88521] transition-colors leading-tight">
                        {item.title}
                      </span>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}

          {/* Bottom Help Banner */}
          <div className="rounded-2xl bg-slate-900 text-white p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-center sm:text-left">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                <MessageCircle className="w-5 h-5 text-[#25D366]" />
              </div>
              <div>
                <h4 className="font-bold text-sm">Need a custom size or unlisted category?</h4>
                <p className="text-xs text-slate-300">
                  We manufacture custom dies, bespoke box sizes, and special finishes on request.
                </p>
              </div>
            </div>
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent(
                "Hello Dot Matic Printer! I'd like to ask about a custom printing or packaging project."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] active:bg-[#1da850] text-white px-5 py-2.5 rounded-xl font-bold text-xs transition-all active:scale-95 shrink-0 cursor-pointer shadow-md"
            >
              <span>Instant WhatsApp Quote</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
