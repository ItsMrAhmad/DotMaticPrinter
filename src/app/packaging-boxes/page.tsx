import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { BUSINESS_INFO, PRODUCTS } from "@/data/products";
import { Package, ShieldCheck, Sparkles, Truck, Check, MessageCircle, ArrowRight, ChevronRight, HelpCircle } from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Custom Packaging & Boxes Manufacturer Pakistan | Dot Matic Printer",
  description:
    "Direct factory custom corrugated mailer boxes, luxury rigid gift boxes, cosmetic cartons & food packaging in Pakistan. Free 3D proofs, Gulberg Lahore workshop.",
  alternates: {
    canonical: `https://${BUSINESS_INFO.domain}/packaging-boxes/`,
  },
  openGraph: {
    title: "Custom Packaging & Boxes Manufacturer Pakistan | Dot Matic Printer",
    description:
      "Direct factory custom corrugated mailer boxes, luxury rigid gift boxes, cosmetic cartons & food packaging in Pakistan. Free 3D proofs, Gulberg Lahore workshop.",
    url: `https://${BUSINESS_INFO.domain}/packaging-boxes/`,
    type: "website",
    images: [{ url: "/images/pkg-corrugated.webp", width: 800, height: 600, alt: "Custom Corrugated Mailer Boxes" }],
  },
};

export default function PackagingBoxesPage() {
  const packagingProducts = PRODUCTS.filter((p) => p.categorySlug === "packaging-boxes");

  const faqs = [
    {
      q: "What is your Minimum Order Quantity (MOQ) for custom boxes?",
      a: "Our MOQs start as low as 100 pcs for custom corrugated mailer boxes, 50 pcs for luxury rigid chipboard gift boxes, and 500 pcs for folding paperboard cartons.",
    },
    {
      q: "Can I inspect a sample proof before placing a full production run?",
      a: "Yes! We provide complimentary 3D digital PDF proofs with die-cut fold lines for every order. Physical unprinted structural dummies or printed digital samples are also available upon request.",
    },
    {
      q: "What fluting thickness do you use for corrugated shipping boxes?",
      a: "We manufacture heavy-duty 3-ply E-flute (approx. 1.5mm - 2mm, ideal for sharp full-color printing and e-commerce mailers) and B-flute (approx. 3mm, ideal for heavier shipping protection).",
    },
    {
      q: "Do you deliver custom boxes nationwide across Pakistan?",
      a: "Yes! We ship daily to Lahore, Karachi, Islamabad, Rawalpindi, Faisalabad, Multan, Sialkot, Peshawar, Quetta, and all industrial zones across Pakistan with trusted cargo carriers.",
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
        name: "Custom Packaging & Boxes",
        item: `https://${BUSINESS_INFO.domain}/packaging-boxes/`,
      },
    ],
  };

  return (
    <main className="min-h-screen flex flex-col bg-white selection:bg-[#F88521] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Header activeCategory="packaging" />

      {/* Breadcrumb Navigation */}
      <div className="bg-slate-50 border-b border-slate-200/80 py-3">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <nav className="flex items-center gap-2 text-xs text-slate-500 font-medium">
            <Link href="/" className="hover:text-[#2D3092] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 font-semibold">Custom Packaging &amp; Boxes</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-12 sm:py-16 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md text-[#F88521] text-xs font-bold uppercase tracking-wider mb-4 border border-white/10">
              <Package className="w-3.5 h-3.5" />
              <span>Direct Factory Packaging Manufacturer</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.1] mb-4">
              Custom Corrugated &amp; Luxury Rigid Boxes
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 font-normal">
              Engineered for e-commerce brands, cosmetics, perfumes, retail, and corporate gifting. Manufactured with industrial Heidelberg offset precision and laser die-cutting at our Gulberg, Lahore workshop.
            </p>

            {/* Quick Benefits Chips */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-semibold text-slate-200 mb-8">
              <span className="bg-white/10 px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-400" /> MOQs from 50 pcs
              </span>
              <span className="bg-white/10 px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-400" /> Free 3D Die-Line Proofs
              </span>
              <span className="bg-white/10 px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-400" /> Full Interior &amp; Exterior Print
              </span>
              <span className="bg-white/10 px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-400" /> Nationwide Cargo Dispatch
              </span>
            </div>

            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent(
                "Hello Dot Matic Printer! I would like to get a quote for custom packaging boxes."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] active:bg-[#128C7E] text-white px-7 py-3.5 rounded-full font-bold text-sm shadow-lg hover:shadow-xl transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Get Instant Packaging Quote</span>
            </a>
          </div>
        </div>
      </section>

      {/* Product Catalog Grid */}
      <section className="py-12 sm:py-16 bg-[#F8F9FA] border-b border-slate-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Our Packaging Box Solutions
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Browse our standard structures and custom-engineered boxes. Every box is customized to your exact dimensions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packagingProducts.map((p) => (
              <div
                key={p.id}
                className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl hover:border-slate-300 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Image Container */}
                  <div className="relative aspect-4/3 bg-slate-100 overflow-hidden p-6 flex items-center justify-center">
                    <Image
                      src={
                        p.slug === "corrugated-mailer-boxes"
                          ? "/images/pkg-corrugated.webp"
                          : p.slug === "luxury-rigid-gift-boxes"
                          ? "/images/pkg-magnet-box.webp"
                          : p.slug === "custom-cosmetic-perfume-boxes"
                          ? "/images/cat-corporate-boxes.webp"
                          : "/images/wed-bid-boxes.webp"
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

                  {/* Content Details */}
                  <div className="p-6">
                    <h3 className="font-extrabold text-lg text-slate-900 tracking-tight mb-2">
                      {p.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {p.shortDesc}
                    </p>

                    {/* Features List */}
                    <div className="space-y-1.5 mb-5 text-xs text-slate-700">
                      {p.features.slice(0, 3).map((f, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="leading-tight">{f}</span>
                        </div>
                      ))}
                    </div>

                    {/* Specs Pills */}
                    <div className="flex flex-wrap gap-1.5 text-[11px] font-bold text-slate-600 pt-3 border-t border-slate-100">
                      <span className="bg-slate-100 px-2 py-0.5 rounded">MOQ: {p.moq}</span>
                      <span className="bg-slate-100 px-2 py-0.5 rounded">{p.turnaround}</span>
                    </div>
                  </div>
                </div>

                {/* Card Footer CTA */}
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

      {/* Materials & Embellishments Guide */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200">
              <div className="w-12 h-12 rounded-2xl bg-orange-100 text-[#F88521] flex items-center justify-center mb-4">
                <Package className="w-6 h-6" />
              </div>
              <h3 className="font-black text-xl text-slate-900 mb-2">Paperboard &amp; Fluting Options</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Choose from 3-ply E-flute kraft, bleach-white corrugated cardboard, 350gsm folding art cards, or heavy 1500gsm rigid greyboard wrapped in imported specialty linen textures.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-[#2D3092] flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-black text-xl text-slate-900 mb-2">Luxury Embellishments</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Add metallic hot foil stamping (Gold, Rose Gold, Silver), velvet soft-touch lamination, raised 3D spot UV varnish, blind embossing, or custom EVA foam inserts.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-black text-xl text-slate-900 mb-2">Prepress &amp; Die Accuracy</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Avoid costly assembly errors. Every box die is custom crafted with laser accuracy to ensure seamless fold snaps, tight dust flaps, and clean unboxing edges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Category FAQs */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-[#F88521] text-xs font-bold uppercase tracking-wider mb-2">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Packaging Questions</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Frequently Asked Questions About Packaging
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-2">{faq.q}</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
