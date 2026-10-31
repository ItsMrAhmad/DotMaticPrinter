import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { BUSINESS_INFO } from "@/data/products";
import { Sparkles, Heart, Check, MessageCircle, ChevronRight, HelpCircle } from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Luxury Wedding Invitation Cards & Nikahnama Pakistan | Dot Matic Printer",
  description:
    "Custom acrylic wedding cards, luxury hardbound invitation boxes, handmade Nikahnama certificates & wax seals in Pakistan. Workshop in Gulberg, Lahore.",
  alternates: {
    canonical: `https://${BUSINESS_INFO.domain}/wedding-cards/`,
  },
  openGraph: {
    title: "Luxury Wedding Invitation Cards & Nikahnama Pakistan | Dot Matic Printer",
    description:
      "Custom acrylic wedding cards, luxury hardbound invitation boxes, handmade Nikahnama certificates & wax seals in Pakistan. Workshop in Gulberg, Lahore.",
    url: `https://${BUSINESS_INFO.domain}/wedding-cards/`,
    type: "website",
    images: [{ url: "/images/wed-acrylic-cards.webp", width: 800, height: 600, alt: "Luxury Acrylic Wedding Cards" }],
  },
};

export default function WeddingCardsPage() {
  const weddingItems = [
    { title: "Custom Nikahnama", image: "/images/wed-nikahnama.webp", desc: "Gold foiled & illuminated handmade certificates on archival velvet paper", tag: "Most Loved" },
    { title: "Acrylic Wedding Cards", image: "/images/wed-acrylic-cards.webp", desc: "Crystal-clear transparent acrylic cards with metallic screen printing", tag: "Trending" },
    { title: "Hardbound Boxed Cards", image: "/images/wed-premium-cards.webp", desc: "Rigid chipboard presentation boxes with velvet cushions and ribbon pulls", tag: "Royal Luxury" },
    { title: "Custom Brass Wax Stamps", image: "/images/wed-wax-stamps.webp", desc: "Precision engraved monogram wax seal stamps with metallic sealing wax beads", tag: "Handcrafted" },
    { title: "Favor & Sweet Bags", image: "/images/wed-favor-bags.webp", desc: "Delicate foil stamped favor gift bags with satin ribbon handles", tag: "Event Favor" },
    { title: "Bid & Sweet Boxes", image: "/images/wed-bid-boxes.webp", desc: "Traditional floral and gold foiled rigid bid sweet distribution boxes", tag: "Bespoke" },
    { title: "Acrylic Keepsake Boxes", image: "/images/wed-acrylic-boxes.webp", desc: "Transparent luxury keepsake boxes for jewelry, perfumes, and sweets", tag: "Luxury" },
    { title: "Budget Elegant Cards", image: "/images/wed-budget-cards.webp", desc: "Affordable & stylish invitation cards with matching custom envelopes", tag: "Value" },
    { title: "Menu & Reception Cards", image: "/images/wed-menu-cards.webp", desc: "Coordinated banquet table dinner menus and RSVP cards", tag: "Banquet" },
    { title: "Digital E-Cards", image: "/images/wed-ecards.webp", desc: "Animated and high-res digital wedding invitations ready for WhatsApp sharing", tag: "Digital" },
  ];

  const faqs = [
    {
      q: "Can I customize the calligraphy and Urdu / Arabic typography on Nikahnamas?",
      a: "Yes! Every Nikahnama is individually formatted with customized couple names, Quranic verses, and signature lines in Thuluth, Nastaliq, or contemporary typography with genuine gold foiling.",
    },
    {
      q: "What is the turnaround time for custom acrylic wedding cards?",
      a: "Production for acrylic invitations and luxury boxed cards typically takes 4 to 6 working days from final artwork approval. We always share 3D digital artwork proofs before initiating physical laser cutting.",
    },
    {
      q: "Can I order custom brass wax seal stamps with our initials?",
      a: "Yes, we custom-engrave high-density solid brass wax stamps with custom couple monograms, family crests, or modern minimalist initials, complete with natural rosewood handles.",
    },
    {
      q: "Do you ship wedding cards and Nikahnama sets across Pakistan and abroad?",
      a: "Yes! We securely pack every order in double-boxed crush-proof packaging and dispatch nationwide across Lahore, Karachi, Islamabad, and all Pakistani cities, as well as international overseas shipping.",
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
        name: "Wedding & Event Cards",
        item: `https://${BUSINESS_INFO.domain}/wedding-cards/`,
      },
    ],
  };

  return (
    <main className="min-h-screen flex flex-col bg-white selection:bg-[#F88521] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Header activeCategory="wedding" />

      {/* Breadcrumb Navigation */}
      <div className="bg-slate-50 border-b border-slate-200/80 py-3">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <nav className="flex items-center gap-2 text-xs text-slate-500 font-medium">
            <Link href="/" className="hover:text-[#2D3092] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 font-semibold">Wedding &amp; Event Cards</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-12 sm:py-16 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md text-[#F88521] text-xs font-bold uppercase tracking-wider mb-4 border border-white/10">
              <Heart className="w-3.5 h-3.5" />
              <span>Couture Wedding Stationery Atelier</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.1] mb-4">
              Luxury Wedding Invitations &amp; Custom Nikahnama
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 font-normal">
              Celebrate your most memorable day with crystal acrylic invitations, hardbound presentation boxes, hand-engraved wax seal stamps, and illuminated Islamic Nikahnama certificates crafted in Gulberg, Lahore.
            </p>

            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-semibold text-slate-200 mb-8">
              <span className="bg-white/10 px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-400" /> Crystal Clear Cast Acrylic
              </span>
              <span className="bg-white/10 px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-400" /> Metallic Gold &amp; Rose Gold Foil
              </span>
              <span className="bg-white/10 px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-400" /> Custom Engraved Brass Wax Stamps
              </span>
              <span className="bg-white/10 px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-400" /> Safe Nationwide Delivery
              </span>
            </div>

            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent(
                "Hello Dot Matic Printer! I am interested in custom wedding invitation cards / Nikahnama certificates."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] active:bg-[#128C7E] text-white px-7 py-3.5 rounded-full font-bold text-sm shadow-lg hover:shadow-xl transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Inquire Wedding Collection</span>
            </a>
          </div>
        </div>
      </section>

      {/* Product Catalog Grid */}
      <section className="py-12 sm:py-16 bg-[#F8F9FA] border-b border-slate-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Curated Wedding &amp; Event Products
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Every invitation is custom made with personalized typography, color palettes, and luxury materials.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {weddingItems.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl hover:border-slate-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-square bg-slate-50 overflow-hidden p-4 flex items-center justify-center">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain p-2 transition-transform hover:scale-105 duration-300"
                    />
                    <span className="absolute top-2.5 right-2.5 bg-orange-100 text-[#F88521] text-[10px] font-bold uppercase px-2 py-0.5 rounded-full">
                      {item.tag}
                    </span>
                  </div>

                  <div className="p-4">
                    <h3 className="font-extrabold text-sm sm:text-base text-slate-900 tracking-tight mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-snug">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="p-4 pt-0">
                  <a
                    href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent(
                      `Hello Dot Matic Printer! I would like to inquire about ${item.title}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-1.5 bg-slate-900 hover:bg-[#F88521] text-white py-2.5 rounded-xl font-bold text-xs transition-all shadow-xs cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-white" />
                    <span>Inquire Details</span>
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
              <span>Wedding Inquiries</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Frequently Asked Questions About Wedding Stationery
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
