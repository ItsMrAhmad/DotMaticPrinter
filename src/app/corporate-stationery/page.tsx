import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { BUSINESS_INFO, PRODUCTS } from "@/data/products";
import { FileText, ShieldCheck, Sparkles, Check, MessageCircle, ChevronRight, HelpCircle } from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Corporate Stationery & Visiting Cards Printing Pakistan | Dot Matic Printer",
  description:
    "Premium visiting cards, official letterheads, custom presentation folders, envelopes & invoice books in Pakistan. Direct factory rates, Gulberg Lahore facility.",
  alternates: {
    canonical: `https://${BUSINESS_INFO.domain}/corporate-stationery/`,
  },
  openGraph: {
    title: "Corporate Stationery & Visiting Cards Printing Pakistan | Dot Matic Printer",
    description:
      "Premium visiting cards, official letterheads, custom presentation folders, envelopes & invoice books in Pakistan. Direct factory rates, Gulberg Lahore facility.",
    url: `https://${BUSINESS_INFO.domain}/corporate-stationery/`,
    type: "website",
    images: [{ url: "/images/biz-business-cards.webp", width: 800, height: 600, alt: "Luxury Visiting Cards Printing" }],
  },
};

export default function CorporateStationeryPage() {
  const stationeryProducts = PRODUCTS.filter((p) => p.categorySlug === "corporate-stationery");

  const faqs = [
    {
      q: "What paper stocks are available for luxury visiting cards?",
      a: "We offer 350gsm premium art card, 450gsm heavyweight board, and 700gsm multi-layer cotton stock. Finishes include velvet soft-touch lamination, raised 3D spot UV, and metallic hot foil stamping.",
    },
    {
      q: "Are your executive letterheads compatible with office desktop printers?",
      a: "Yes! Our letterheads are printed on imported 100gsm alabaster bond and textured woodfree papers, guaranteed to pass smoothly through office HP, Canon, and Epson laser/inkjet printers without curling or ink bleeding.",
    },
    {
      q: "Can I add business card slits and expanding spines to presentation folders?",
      a: "Absolutely. All our document folders feature custom die-cut inner pockets with business card slits. We also provide expanding 5mm capacity gusset spines for holding bulky proposals and product catalogs.",
    },
    {
      q: "What is your standard turnaround for corporate print orders?",
      a: "Standard delivery for visiting cards, envelopes, and letterheads is 2 to 3 working days from artwork approval. Urgent rush dispatch is available for tight corporate events and exhibitions.",
    },
  ];

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
        name: "Corporate Stationery & Print",
        item: `https://${BUSINESS_INFO.domain}/corporate-stationery/`,
      },
    ],
  };

  return (
    <main className="min-h-screen flex flex-col bg-white selection:bg-[#F88521] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Header activeCategory="stationery" />

      {/* Breadcrumb Navigation */}
      <div className="bg-slate-50 border-b border-slate-200/80 py-3">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <nav className="flex items-center gap-2 text-xs text-slate-500 font-medium">
            <Link href="/" className="hover:text-[#2D3092] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 font-semibold">Corporate Stationery &amp; Print</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-12 sm:py-16 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md text-[#F88521] text-xs font-bold uppercase tracking-wider mb-4 border border-white/10">
              <FileText className="w-3.5 h-3.5" />
              <span>Executive Corporate Print House</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.1] mb-4">
              Premium Corporate Stationery &amp; Visiting Cards
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 font-normal">
              Empower your enterprise brand image. We manufacture velvet visiting cards, laser-safe letterheads, presentation tender folders, official peel-and-seal envelopes, and carbonless invoice pads with factory precision.
            </p>

            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-semibold text-slate-200 mb-8">
              <span className="bg-white/10 px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-400" /> 350gsm - 700gsm Luxury Boards
              </span>
              <span className="bg-white/10 px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-400" /> Raised 3D Spot UV &amp; Foil
              </span>
              <span className="bg-white/10 px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-400" /> Laser Printer Safe Papers
              </span>
              <span className="bg-white/10 px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-400" /> Nationwide Express Delivery
              </span>
            </div>

            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent(
                "Hello Dot Matic Printer! I would like to inquire about corporate stationery & business cards."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] active:bg-[#128C7E] text-white px-7 py-3.5 rounded-full font-bold text-sm shadow-lg hover:shadow-xl transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Inquire Corporate Stationery</span>
            </a>
          </div>
        </div>
      </section>

      {/* Product Catalog Grid */}
      <section className="py-12 sm:py-16 bg-[#F8F9FA] border-b border-slate-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Essential Corporate Print Products
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Printed on German Heidelberg offset presses for true brand consistency across every office document.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stationeryProducts.map((p) => (
              <div
                key={p.id}
                className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl hover:border-slate-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-4/3 bg-slate-100 overflow-hidden p-6 flex items-center justify-center">
                    <Image
                      src={
                        p.slug === "premium-visiting-cards"
                          ? "/images/biz-business-cards.webp"
                          : p.slug === "executive-letterheads"
                          ? "/images/biz-notebook.webp"
                          : p.slug === "presentation-folders"
                          ? "/images/biz-booklet.webp"
                          : p.slug === "custom-printed-envelopes"
                          ? "/images/biz-envelope.webp"
                          : "/images/cat-corporate-boxes.webp"
                      }
                      alt={p.title}
                      fill
                      className="object-contain p-4 transition-transform hover:scale-105 duration-300"
                    />
                    {p.badge && (
                      <span className="absolute top-3 right-3 bg-[#2D3092] text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full shadow-xs">
                        {p.badge}
                      </span>
                    )}
                  </div>

                  <div className="p-6">
                    <h3 className="font-extrabold text-lg text-slate-900 tracking-tight mb-2">
                      {p.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {p.shortDesc}
                    </p>

                    <div className="space-y-1.5 mb-5 text-xs text-slate-700">
                      {p.features.slice(0, 3).map((f, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="leading-tight">{f}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-1.5 text-[11px] font-bold text-slate-600 pt-3 border-t border-slate-100">
                      <span className="bg-slate-100 px-2 py-0.5 rounded">MOQ: {p.moq}</span>
                      <span className="bg-slate-100 px-2 py-0.5 rounded">{p.turnaround}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <a
                    href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent(
                      `Hello Dot Matic Printer! I would like a quote for ${p.title}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-slate-900 hover:bg-[#F88521] text-white py-3 rounded-2xl font-bold text-xs sm:text-sm transition-all shadow-xs cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Inquire on WhatsApp</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category FAQs */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-[#F88521] text-xs font-bold uppercase tracking-wider mb-2">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Stationery Inquiries</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Frequently Asked Questions About Corporate Stationery
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-2xs">
                <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-2">{faq.q}</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
