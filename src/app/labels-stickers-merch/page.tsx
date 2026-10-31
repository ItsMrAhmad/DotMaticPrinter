import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { BUSINESS_INFO, PRODUCTS } from "@/data/products";
import { Tag, ShieldCheck, Sparkles, Check, MessageCircle, ChevronRight, HelpCircle } from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Waterproof Vinyl Stickers, Roll Labels & Merch Printing Pakistan | Dot Matic Printer",
  description:
    "Custom die-cut vinyl stickers, product roll labels, branded ceramic mugs & corporate keychains in Pakistan. Fast turnaround, Gulberg Lahore workshop.",
  alternates: {
    canonical: `https://${BUSINESS_INFO.domain}/labels-stickers-merch/`,
  },
  openGraph: {
    title: "Waterproof Vinyl Stickers, Roll Labels & Merch Printing Pakistan | Dot Matic Printer",
    description:
      "Custom die-cut vinyl stickers, product roll labels, branded ceramic mugs & corporate keychains in Pakistan. Fast turnaround, Gulberg Lahore workshop.",
    url: `https://${BUSINESS_INFO.domain}/labels-stickers-merch/`,
    type: "website",
    images: [{ url: "/images/cat-stickers.webp", width: 800, height: 600, alt: "Custom Die Cut Vinyl Stickers" }],
  },
};

export default function LabelsStickersMerchPage() {
  const merchProducts = PRODUCTS.filter((p) => p.categorySlug === "labels-stickers-merch");

  const faqs = [
    {
      q: "Are your vinyl stickers truly waterproof and weather-resistant?",
      a: "Yes! Our stickers are printed on industrial PVC vinyl with UV-resistant over-lamination, making them 100% waterproof, scratch-proof, and suitable for bottles, laptop lids, and outdoor vehicle bumpers.",
    },
    {
      q: "What shapes can you cut for die-cut stickers?",
      a: "Any shape imaginable! Our laser and plotter digital cutters follow the exact vector contours of your artwork, whether organic, circular, square, or complex silhouette contours.",
    },
    {
      q: "Can roll labels be used in automated machine labeling applicators?",
      a: "Yes, our continuous product labels are supplied on industry-standard 1-inch or 3-inch machine cores with adjustable un-wind directions for automated bottle, jar, and pouch labeling lines.",
    },
    {
      q: "What is the turnaround for custom ceramic mugs and promotional merch?",
      a: "Ceramic mugs and corporate keychains typically take 1 to 3 working days depending on quantity, with individual protective gift packaging included.",
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
        name: "Labels, Stickers & Merch",
        item: `https://${BUSINESS_INFO.domain}/labels-stickers-merch/`,
      },
    ],
  };

  return (
    <main className="min-h-screen flex flex-col bg-white selection:bg-[#F88521] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Header activeCategory="labels-stickers" />

      {/* Breadcrumb Navigation */}
      <div className="bg-slate-50 border-b border-slate-200/80 py-3">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <nav className="flex items-center gap-2 text-xs text-slate-500 font-medium">
            <Link href="/" className="hover:text-[#2D3092] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 font-semibold">Labels, Stickers &amp; Merch</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-12 sm:py-16 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md text-[#F88521] text-xs font-bold uppercase tracking-wider mb-4 border border-white/10">
              <Tag className="w-3.5 h-3.5" />
              <span>Sticker &amp; Label Printing Studio</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.1] mb-4">
              Custom Vinyl Stickers, Roll Labels &amp; Branded Merch
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 font-normal">
              Elevate your product packaging and promotional giveaways with waterproof contour die-cut stickers, continuous bottle roll labels, ceramic mugs, and custom engraved corporate keychains.
            </p>

            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-semibold text-slate-200 mb-8">
              <span className="bg-white/10 px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-400" /> 100% Waterproof &amp; UV Scratchproof
              </span>
              <span className="bg-white/10 px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-400" /> Any Contour Laser Cut Shape
              </span>
              <span className="bg-white/10 px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-400" /> Roll Labels on Machine Cores
              </span>
              <span className="bg-white/10 px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-400" /> 24-48 Hours Express Delivery
              </span>
            </div>

            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent(
                "Hello Dot Matic Printer! I would like to inquire about stickers, roll labels, and merchandise."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] active:bg-[#128C7E] text-white px-7 py-3.5 rounded-full font-bold text-sm shadow-lg hover:shadow-xl transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Inquire Stickers &amp; Merch</span>
            </a>
          </div>
        </div>
      </section>

      {/* Product Catalog Grid */}
      <section className="py-12 sm:py-16 bg-[#F8F9FA] border-b border-slate-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Stickers, Labels &amp; Corporate Merchandise
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              High-definition digital and offset printing for products, event giveaways, and retail branding.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {merchProducts.map((p) => (
              <div
                key={p.id}
                className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl hover:border-slate-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-4/3 bg-slate-100 overflow-hidden p-6 flex items-center justify-center">
                    <Image
                      src={
                        p.slug === "custom-die-cut-vinyl-stickers"
                          ? "/images/cat-stickers.webp"
                          : p.slug === "custom-product-roll-labels"
                          ? "/images/pkg-labels.webp"
                          : p.slug === "custom-printed-ceramic-mugs"
                          ? "/images/cat-mugs.webp"
                          : "/images/biz-keychain.webp"
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
              <span>Sticker &amp; Label Questions</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Frequently Asked Questions About Labels &amp; Stickers
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
