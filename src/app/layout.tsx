import type { Metadata, Viewport } from "next";
import "./globals.css";
import { BUSINESS_INFO } from "@/data/products";

export const viewport: Viewport = {
  themeColor: "#2D3092",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Dot Matic Printer - Custom Printing & Packaging Solutions",
  description:
    "Custom corrugated mailer boxes, luxury rigid packaging, business cards, flyers & merchandise in Pakistan. Direct factory rates, Gulberg Lahore workshop.",
  metadataBase: new URL(`https://${BUSINESS_INFO.domain}`),
  alternates: {
    canonical: `https://${BUSINESS_INFO.domain}/`,
  },
  verification: {
    google: "_pZFzBDOIGkwYRIGtrhIT8mAOm9Z06NpN4hntGtndQ4",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: `https://${BUSINESS_INFO.domain}/`,
    siteName: BUSINESS_INFO.name,
    title: "Dot Matic Printer - Custom Printing & Packaging Solutions",
    description:
      "Custom corrugated mailer boxes, luxury rigid packaging, business cards, flyers & merchandise in Pakistan. Direct factory rates, Gulberg Lahore workshop.",
    images: [
      {
        url: "/brand/logo-1024.png",
        width: 1024,
        height: 1024,
        alt: "Dot Matic Printer & Packaging Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dot Matic Printer - Custom Printing & Packaging Solutions",
    description:
      "Custom corrugated mailer boxes, luxury rigid packaging, business cards, flyers & merchandise in Pakistan. Direct factory rates, Gulberg Lahore workshop.",
    images: ["/brand/logo-1024.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": BUSINESS_INFO.name,
    "image": `https://${BUSINESS_INFO.domain}/brand/logo-1024.png`,
    "@id": `https://${BUSINESS_INFO.domain}`,
    "url": `https://${BUSINESS_INFO.domain}`,
    "telephone": "+923155550809",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Office #40, 2nd Floor, Al Latif Center, Main Boulevard, Gulberg",
      "addressLocality": "Lahore",
      "addressRegion": "Punjab",
      "postalCode": "54000",
      "addressCountry": "PK",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 31.5135,
      "longitude": 74.3436,
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "10:00",
      "closes": "20:00",
    },
    "sameAs": [
      BUSINESS_INFO.socials.instagram,
      BUSINESS_INFO.socials.facebook,
      BUSINESS_INFO.socials.tiktok,
      BUSINESS_INFO.socials.youtube,
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is your typical turnaround time for orders?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Standard turnaround for stationery, business cards, flyers, and stickers is 2 to 3 working days. Custom packaging boxes and luxury rigid boxes typically take 4 to 6 working days from final artwork and advance approval. Urgent rush production options are also available upon request.",
        },
      },
      {
        "@type": "Question",
        "name": "What payment methods do you accept in Pakistan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We accept Online Bank Transfers (Meezan Bank, HBL, Bank Alfalah, etc.), JazzCash, and EasyPaisa. For clients in Lahore, partial Cash on Delivery (COD) or workshop pickup at Al Latif Center, Gulberg is available.",
        },
      },
      {
        "@type": "Question",
        "name": "What file formats should I submit for printing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We recommend vector files in PDF, Adobe Illustrator (.AI), CorelDraw (.CDR), or layered Adobe Photoshop (.PSD). Please ensure all fonts are outlined/converted to curves, colors are set to CMYK mode, and images are at least 300 DPI with a 3mm bleed allowance.",
        },
      },
      {
        "@type": "Question",
        "name": "Can I inspect a sample proof before placing a bulk order?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! We always send a high-resolution 3D digital PDF proof showing die-cuts and fold lines for free. For large volume custom box production, we can also produce a physical unprinted dummy or single printed digital sample upon request.",
        },
      },
      {
        "@type": "Question",
        "name": "Do you offer nationwide delivery across Pakistan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we ship nationwide! We deliver daily to Lahore, Karachi, Islamabad, Rawalpindi, Faisalabad, Multan, Sialkot, Peshawar, Quetta, and all surrounding regions using trusted courier partners and cargo logistics for heavy bulk pallets.",
        },
      },
      {
        "@type": "Question",
        "name": "What are your Minimum Order Quantities (MOQs)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We support both startups and large corporations! Our MOQs start as low as 100 pcs for custom corrugated mailer boxes, 50 pcs for luxury rigid boxes, and 500 pcs for premium visiting cards and folding cartons.",
        },
      },
    ],
  };

  return (
    <html lang="en" className="h-full scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-slate-900 antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
