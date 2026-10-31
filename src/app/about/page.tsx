import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { BUSINESS_INFO } from "@/data/products";
import { Sparkles, ShieldCheck, Truck, Printer, Cpu, Clock, MapPin, Phone, MessageCircle, ChevronRight, Check } from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "About Dot Matic Printer | Printing & Packaging Factory Lahore",
  description:
    "Learn about Dot Matic Printer: industrial printing & packaging facility in Al Latif Center, Gulberg, Lahore. Heidelberg offset presses, custom boxes, nationwide dispatch.",
  alternates: {
    canonical: `https://${BUSINESS_INFO.domain}/about/`,
  },
  openGraph: {
    title: "About Dot Matic Printer | Printing & Packaging Factory Lahore",
    description:
      "Learn about Dot Matic Printer: industrial printing & packaging facility in Al Latif Center, Gulberg, Lahore. Heidelberg offset presses, custom boxes, nationwide dispatch.",
    url: `https://${BUSINESS_INFO.domain}/about/`,
    type: "website",
    images: [{ url: "/brand/logo-1024.png", width: 1024, height: 1024, alt: "About Dot Matic Printer" }],
  },
};

export default function AboutPage() {
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
        name: "About Us",
        item: `https://${BUSINESS_INFO.domain}/about/`,
      },
    ],
  };

  const values = [
    {
      icon: Printer,
      title: "German Heidelberg Offset Precision",
      desc: "Our press line features high-speed multi-color Heidelberg offset machines calibrated to ISO color standards, ensuring sharp text and consistent Pantone brand tones across thousands of prints.",
    },
    {
      icon: Cpu,
      title: "Computerized Laser Die-Cutting",
      desc: "Every box, presentation folder, and retail package is stamped with computerized laser steel dies to ensure tight dust flaps, crisp scoring folds, and zero manual tearing.",
    },
    {
      icon: Sparkles,
      title: "In-House Luxury Embellishments",
      desc: "From velvet soft-touch laminations to raised 3D spot UV varnishes, metallic foil stamping (Gold, Rose Gold, Silver), and blind debossing—all luxury embellishments are completed under one roof.",
    },
    {
      icon: ShieldCheck,
      title: "Complimentary Prepress File Check",
      desc: "Avoid expensive misprints and alignment errors. Our prepress technicians personally audit your vector artwork, bleed lines, font outlines, and CMYK separations before plates are cast.",
    },
  ];

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
            <span className="text-slate-900 font-semibold">About Us</span>
          </nav>
        </div>
      </div>

      {/* Hero Header */}
      <section className="bg-slate-900 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md text-[#F88521] text-xs font-bold uppercase tracking-wider mb-4 border border-white/10">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Workshop &amp; Production Facility</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.1] mb-4">
              Industrial Print Precision, Direct Factory Rates
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 font-normal">
              Operating from the commercial center of Gulberg, Lahore, Dot Matic Printer is an industrial printing and packaging manufacturer serving leading corporate brands, e-commerce retailers, and private events across Pakistan.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent(
                  "Hello Dot Matic Printer! I would like to schedule a workshop visit or inquire about print production."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] active:bg-[#128C7E] text-white px-7 py-3.5 rounded-full font-bold text-sm shadow-lg transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Chat with Print Technician</span>
              </a>
              <Link
                href="/contact/"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3.5 rounded-full font-bold text-sm border border-white/20 transition-all"
              >
                <span>Visit Our Workshop</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Story & Facility Section */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-5 text-slate-700 text-sm sm:text-base leading-relaxed">
              <div className="text-xs font-bold uppercase tracking-wider text-[#F88521]">Our Workshop Story</div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Crafting Packaging That Empowers Pakistani Businesses
              </h2>
              <p>
                Located at <strong>Office #40, 2nd Floor, Al Latif Center, Main Boulevard, Gulberg, Lahore</strong>, Dot Matic Printer combines master press craftsmanship with state-of-the-art prepress digital technologies.
              </p>
              <p>
                From custom corrugated mailer boxes for burgeoning D2C e-commerce brands to luxury hardbound wedding invitation suites and high-volume corporate stationery, we eliminate middleman markups by producing directly in-house.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="font-extrabold text-2xl text-[#2D3092]">50+</div>
                  <div className="text-xs font-bold text-slate-700 mt-1">Minimum Box Quantities</div>
                  <div className="text-xs text-slate-500 mt-0.5">Supporting startups and corporate giants alike</div>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="font-extrabold text-2xl text-[#F88521]">100%</div>
                  <div className="text-xs font-bold text-slate-700 mt-1">Nationwide Delivery</div>
                  <div className="text-xs text-slate-500 mt-0.5">Daily cargo dispatches to all Pakistani cities</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-100 aspect-4/3 flex items-center justify-center p-8">
                <Image
                  src="/images/hero-banner.webp"
                  alt="Dot Matic Printer Factory Workshop"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industrial Capabilities Grid */}
      <section className="py-16 bg-[#F8F9FA] border-b border-slate-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Our Manufacturing Standards
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Every print run is produced under strict quality control to guarantee sharp color fidelity and durable packaging structures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v, idx) => {
              const Icon = v.icon;
              return (
                <div key={idx} className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xs flex items-start gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#2D3092] flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-lg text-slate-900 mb-2">{v.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
