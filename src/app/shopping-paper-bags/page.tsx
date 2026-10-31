import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { BUSINESS_INFO, PRODUCTS } from "@/data/products";
import { ShoppingBag, ShieldCheck, Sparkles, Check, MessageCircle, ChevronRight, HelpCircle } from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Custom Printed Paper Bags & Kraft Shopping Bags Pakistan | Dot Matic Printer",
  description:
    "Direct factory custom kraft paper bags & luxury laminated shopping bags with rope handles in Pakistan. Factory rates, Gulberg Lahore manufacturing.",
  alternates: {
    canonical: `https://${BUSINESS_INFO.domain}/shopping-paper-bags/`,
  },
  openGraph: {
    title: "Custom Printed Paper Bags & Kraft Shopping Bags Pakistan | Dot Matic Printer",
    description:
      "Direct factory custom kraft paper bags & luxury laminated shopping bags with rope handles in Pakistan. Factory rates, Gulberg Lahore manufacturing.",
    url: `https://${BUSINESS_INFO.domain}/shopping-paper-bags/`,
    type: "website",
    images: [{ url: "/images/biz-paper-bag.webp", width: 800, height: 600, alt: "Custom Printed Shopping Bags" }],
  },
};

export default function ShoppingPaperBagsPage() {
  const bagProducts = PRODUCTS.filter((p) => p.categorySlug === "shopping-paper-bags");

  const bagTypes = [
    { title: "Brown Kraft Paper Bags", desc: "Eco-friendly 150gsm virgin natural kraft with twisted paper rope handles.", image: "/images/biz-paper-bag.webp", tag: "Eco-Friendly" },
    { title: "White Bleached Kraft Bags", desc: "Crisp white 180gsm kraft ideal for vibrant high-contrast full color logos.", image: "/images/hero-sub-business.webp", tag: "Popular" },
    { title: "Luxury Laminated Boutique Bags", desc: "Heavy 250gsm art card with matte lamination, spot UV, and grosgrain ribbon handles.", image: "/images/wed-favor-bags.webp", tag: "Luxury Fashion" },
    { title: "Takeaway Food Delivery Bags", desc: "Wide-base flat bottom kraft bags for restaurants, cafes, and bakery packaging.", image: "/images/pkg-corrugated.webp", tag: "Food Takeaway" },
  ];

  const faqs = [
    {
      q: "What weight capacity do your custom paper shopping bags support?",
      a: "Our paper bags feature heavy cardboard bottom reinforcement inserts and folded top turn-overs, easily supporting between 5kg to 10kg depending on paper stock selection.",
    },
    {
      q: "What handle options are available?",
      a: "We offer twisted kraft paper handles, braided cotton cords, flat cotton tape handles, and premium silk/grosgrain ribbon handles.",
    },
    {
      q: "What is the Minimum Order Quantity (MOQ) for custom bags?",
      a: "Our standard MOQ starts from 250 pcs for custom printed kraft paper bags and luxury laminated boutique shopping bags.",
    },
    {
      q: "Can I print on the side gussets and inside the bag?",
      a: "Yes! We offer 360-degree all-around printing, including the front, back, both side gussets, and even the top interior turn-over flap.",
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
        name: "Paper Bags & Shopping Bags",
        item: `https://${BUSINESS_INFO.domain}/shopping-paper-bags/`,
      },
    ],
  };

  return (
    <main className="min-h-screen flex flex-col bg-white selection:bg-[#F88521] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Header activeCategory="bags" />

      {/* Breadcrumb Navigation */}
      <div className="bg-slate-50 border-b border-slate-200/80 py-3">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <nav className="flex items-center gap-2 text-xs text-slate-500 font-medium">
            <Link href="/" className="hover:text-[#2D3092] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 font-semibold">Paper Bags &amp; Shopping Bags</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-12 sm:py-16 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md text-[#F88521] text-xs font-bold uppercase tracking-wider mb-4 border border-white/10">
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Direct Factory Bag Manufacturer</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.1] mb-4">
              Custom Printed Paper Shopping Bags
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 font-normal">
              High-strength kraft paper shopping bags and luxury boutique laminated bags with custom ribbon handles. Perfect for retail clothing brands, shoe stores, bakeries, and corporate giveaways across Pakistan.
            </p>

            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-semibold text-slate-200 mb-8">
              <span className="bg-white/10 px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-400" /> 100% Recyclable Kraft &amp; Art Card
              </span>
              <span className="bg-white/10 px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-400" /> Reinforced Bottom Supports 10kg
              </span>
              <span className="bg-white/10 px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-400" /> Twisted Paper, Ribbon or Cotton Handles
              </span>
              <span className="bg-white/10 px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-400" /> Nationwide Cargo Delivery
              </span>
            </div>

            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent(
                "Hello Dot Matic Printer! I would like to inquire about custom printed paper shopping bags."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] active:bg-[#128C7E] text-white px-7 py-3.5 rounded-full font-bold text-sm shadow-lg hover:shadow-xl transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Get Shopping Bag Quote</span>
            </a>
          </div>
        </div>
      </section>

      {/* Bag Styles Grid */}
      <section className="py-12 sm:py-16 bg-[#F8F9FA] border-b border-slate-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Retail Paper Bag Collections
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Available in small jewelry sizes, standard retail apparel dimensions, and large heavy-duty shopping sizes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bagTypes.map((bag, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl hover:border-slate-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-4/3 bg-slate-100 overflow-hidden p-6 flex items-center justify-center">
                    <Image
                      src={bag.image}
                      alt={bag.title}
                      fill
                      className="object-contain p-4 transition-transform hover:scale-105 duration-300"
                    />
                    <span className="absolute top-3 right-3 bg-slate-900 text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full shadow-xs">
                      {bag.tag}
                    </span>
                  </div>

                  <div className="p-6">
                    <h3 className="font-extrabold text-lg text-slate-900 tracking-tight mb-2">
                      {bag.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {bag.desc}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <a
                    href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent(
                      `Hello Dot Matic Printer! I would like to inquire about ${bag.title}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-slate-900 hover:bg-[#F88521] text-white py-3 rounded-2xl font-bold text-xs sm:text-sm transition-all shadow-xs cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Inquire Custom Quote</span>
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
              <span>Paper Bag Questions</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Frequently Asked Questions About Paper Bags
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
