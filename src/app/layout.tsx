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

  return (
    <html lang="en" className="h-full scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-slate-900 antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
