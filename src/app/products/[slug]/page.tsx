import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { BUSINESS_INFO, PRODUCTS, getProductImage } from "@/data/products";
import { 
  Check, 
  MessageCircle, 
  Star, 
  ShieldCheck, 
  Truck, 
  Sparkles, 
  Clock, 
  Package, 
  ChevronRight, 
  ArrowRight,
  Phone,
  HelpCircle
} from "lucide-react";

export const dynamic = "force-static";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) return {};

  const img = getProductImage(product.slug);

  return {
    title: `${product.title} Pakistan | Direct Factory Rates | Dot Matic Printer`,
    description: `${product.shortDesc} Custom manufactured in Gulberg, Lahore. MOQs from ${product.moq}. Free 3D proofs & nationwide express delivery.`,
    alternates: {
      canonical: `https://${BUSINESS_INFO.domain}/products/${product.slug}/`,
    },
    openGraph: {
      title: `${product.title} | Dot Matic Printer Pakistan`,
      description: product.shortDesc,
      url: `https://${BUSINESS_INFO.domain}/products/${product.slug}/`,
      type: "website",
      images: [{ url: img, width: 800, height: 600, alt: product.title }],
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) notFound();

  const img = getProductImage(product.slug);
  const relatedProducts = PRODUCTS.filter(
    (p) => p.categorySlug === product.categorySlug && p.id !== product.id
  ).slice(0, 3);

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.description,
    image: `https://${BUSINESS_INFO.domain}${img}`,
    brand: {
      "@type": "Brand",
      name: "Dot Matic Printer",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: product.rating,
      reviewCount: product.reviewsCount,
    },
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
        name: product.category,
        item: `https://${BUSINESS_INFO.domain}/${product.categorySlug}/`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: product.title,
        item: `https://${BUSINESS_INFO.domain}/products/${product.slug}/`,
      },
    ],
  };

  const whatsappInquiryUrl = `https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent(
    `Hello Dot Matic Printer!\n\nI would like an instant quote for *${product.title}*:\n` +
    `• Starting MOQ: ${product.moq}\n` +
    `• Turnaround Required: ${product.turnaround}\n` +
    `\nPlease share pricing tiers, die-line templates, and delivery schedule.`
  )}`;

  return (
    <main className="min-h-screen flex flex-col bg-white selection:bg-[#F88521] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Header activeCategory={product.categorySlug} />

      {/* Breadcrumb Navigation Bar */}
      <div className="bg-slate-50 border-b border-slate-200/80 py-3">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <nav className="flex items-center flex-wrap gap-2 text-xs text-slate-500 font-medium">
            <Link href="/" className="hover:text-[#2D3092] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link href={`/${product.categorySlug}/`} className="hover:text-[#2D3092] transition-colors">
              {product.category}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 font-semibold truncate max-w-[200px] sm:max-w-none">
              {product.title}
            </span>
          </nav>
        </div>
      </div>

      {/* Main Product Showcase (2-Column) */}
      <section className="py-10 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left Column: Product Image & Trust Proofs */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative rounded-3xl overflow-hidden bg-slate-50 border border-slate-200 shadow-sm p-8 sm:p-12 aspect-square flex items-center justify-center group">
                <Image
                  src={img}
                  alt={product.title}
                  fill
                  className="object-contain p-6 transition-transform duration-300 group-hover:scale-105"
                  priority
                />
                {product.badge && (
                  <span className="absolute top-4 right-4 bg-[#2D3092] text-white text-xs font-extrabold uppercase px-3 py-1 rounded-full shadow-sm">
                    {product.badge}
                  </span>
                )}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-800 flex items-center gap-1.5">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span>{product.rating}</span>
                  <span className="text-slate-500 font-normal">({product.reviewsCount} reviews)</span>
                </div>
              </div>

              {/* 3 Quick Manufacturing Badges */}
              <div className="grid grid-cols-3 gap-3 text-center text-xs">
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200">
                  <Sparkles className="w-4 h-4 text-[#F88521] mx-auto mb-1" />
                  <div className="font-bold text-slate-900">Free 3D Proof</div>
                  <div className="text-[11px] text-slate-500">Before Printing</div>
                </div>
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200">
                  <ShieldCheck className="w-4 h-4 text-[#2D3092] mx-auto mb-1" />
                  <div className="font-bold text-slate-900">Direct Factory</div>
                  <div className="text-[11px] text-slate-500">Zero Middlemen</div>
                </div>
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200">
                  <Truck className="w-4 h-4 text-emerald-600 mx-auto mb-1" />
                  <div className="font-bold text-slate-900">Nationwide</div>
                  <div className="text-[11px] text-slate-500">Daily Dispatch</div>
                </div>
              </div>
            </div>

            {/* Right Column: Specifications & Quote Action */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-[#F88521] text-xs font-bold uppercase tracking-wider mb-2.5">
                  <span>{product.category}</span>
                </div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-950 tracking-tight leading-tight mb-3">
                  {product.title}
                </h1>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Key Commercial Metrics Strip */}
              <div className="p-5 rounded-2xl bg-[#F8F9FA] border border-slate-200 grid grid-cols-3 gap-4 text-xs">
                <div>
                  <div className="text-slate-500">Pricing Model</div>
                  <div className="text-base sm:text-lg font-black text-slate-900 mt-0.5">Custom Quote</div>
                </div>
                <div>
                  <div className="text-slate-500">Minimum Quantity</div>
                  <div className="text-base sm:text-lg font-black text-[#2D3092] mt-0.5">{product.moq}</div>
                </div>
                <div>
                  <div className="text-slate-500">Standard Delivery</div>
                  <div className="text-base sm:text-lg font-black text-emerald-700 mt-0.5">{product.turnaround}</div>
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-3">
                <h3 className="font-extrabold text-sm text-slate-900 uppercase tracking-wider">
                  Product Specifications &amp; Features:
                </h3>
                <div className="space-y-2">
                  {product.features.map((f, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span className="leading-snug">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Materials & Finishes Available */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-slate-100">
                <div>
                  <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                    Available Materials:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {product.materials.map((m, i) => (
                      <span key={i} className="bg-slate-100 text-slate-700 text-xs px-2.5 py-1 rounded-md font-medium">
                        {m}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                    Finishing Options:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {product.finishes.map((f, i) => (
                      <span key={i} className="bg-slate-100 text-slate-700 text-xs px-2.5 py-1 rounded-md font-medium">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Instant WhatsApp Action Card */}
              <div className="p-6 rounded-3xl bg-slate-900 text-white space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-[#F88521] uppercase tracking-wider">Ready for a Custom Quote?</div>
                    <div className="font-black text-lg text-white">Chat with Our Print Specialist</div>
                  </div>
                  <div className="w-10 h-10 rounded-2xl bg-[#25D366] flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5 text-white fill-white" />
                  </div>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Send your required dimensions, estimated quantity, and logo for an immediate quotation and die-line layout template.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 pt-1">
                  <a
                    href={whatsappInquiryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white py-3.5 rounded-2xl font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Inquire on WhatsApp Now</span>
                  </a>
                  <a
                    href={`tel:${BUSINESS_INFO.phone}`}
                    className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-5 py-3.5 rounded-2xl font-bold text-xs sm:text-sm border border-white/20 transition-all"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Direct</span>
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Related Products in this Category */}
      {relatedProducts.length > 0 && (
        <section className="py-16 bg-[#F8F9FA] border-b border-slate-200">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
            <div className="flex items-center justify-between mb-8">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#F88521]">Explore More</div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Related {product.category}
                </h2>
              </div>
              <Link
                href={`/${product.categorySlug}/`}
                className="text-xs font-bold text-[#2D3092] hover:text-[#F88521] flex items-center gap-1 transition-colors"
              >
                <span>View Category</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map((rel) => {
                const relImg = getProductImage(rel.slug);
                return (
                  <Link
                    key={rel.id}
                    href={`/products/${rel.slug}/`}
                    className="bg-white rounded-3xl border border-slate-200 p-6 shadow-xs hover:shadow-lg hover:border-slate-300 transition-all flex items-center gap-4 group"
                  >
                    <div className="w-20 h-20 bg-slate-50 rounded-2xl p-2 shrink-0 flex items-center justify-center border border-slate-100">
                      <Image
                        src={relImg}
                        alt={rel.title}
                        width={64}
                        height={64}
                        className="object-contain max-h-16 max-w-16 transition-transform group-hover:scale-105"
                      />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-sm text-slate-900 group-hover:text-[#2D3092] transition-colors leading-snug">
                        {rel.title}
                      </h4>
                      <div className="text-xs text-[#2D3092] font-semibold mt-1">MOQ: {rel.moq}</div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
