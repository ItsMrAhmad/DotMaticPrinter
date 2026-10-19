# Dot Matic Printer (dotmaticprinter.com)

Official website and digital catalog for **Dot Matic Printer & Packaging** — custom printing and packaging solutions based in Gulberg, Lahore, Pakistan.

Built with **Next.js 16 (App Router)**, **TypeScript**, and **Tailwind CSS v4**, configured for pure static edge hosting on **Cloudflare Pages**.

---

## 🌟 Key Features

- **Brand-Harmonized Visual Identity**: Recreated vector logo (`dm` monogram with printing dot-matrix steps) in Royal Cobalt Blue (`#2D3092`) and Electric Orange (`#F88521`).
- **Complete Favicon & Brand Asset Suite**: SVG favicon, 32x32, 16x16, Apple touch icon, and high-res 1024x1024 PNGs.
- **Full Printing & Packaging Catalog**:
  - Corrugated Mailer Boxes (E-Commerce Shipping)
  - Luxury Rigid Gift & Presentation Boxes
  - Premium Business Cards (Velvet Matte, Spot UV, Gold/Silver Hot Foil)
  - Kraft Paper Shopping Bags
  - Full-Color Flyers, Tri-Fold Brochures & Roll-Up Standees
  - Waterproof Die-Cut Vinyl Stickers & Packaging Roll Labels
- **WhatsApp-First Commerce Flow**:
  - Floating WhatsApp button on the **bottom-right corner** with pulsing badge and 1-tap inquiry prompts.
  - "Chat on WhatsApp" button on **every product card and detail modal** with pre-filled specifications.
- **Interactive Instant Quote Estimator**: Dynamic calculator for sizes, materials, finishes, and quantities with 1-click WhatsApp quote submission.
- **SEO & Social Optimization**:
  - Schema.org `LocalBusiness` JSON-LD markup.
  - Social media integrations: Instagram, Facebook, TikTok, YouTube.
  - Verified Lahore workshop address: Office #40, 2nd Floor, Al Latif Center, Main Boulevard, Gulberg, Lahore.

---

## 🚀 Getting Started

### Prerequisites
- Node.js 20.x or higher
- npm 10.x or higher

### Installation
```bash
# Clone the repository
git clone https://github.com/ItsMrAhmad/DotMaticPrinter.git
cd DotMaticPrinter

# Install dependencies
npm install
```

### Local Development
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Static Build (Cloudflare Pages)
```bash
npm run build
```
This exports static HTML/CSS/JS assets to the `out/` directory ready for Cloudflare Pages deployment.

---

## ☁️ Cloudflare Pages Setup

1. In the Cloudflare Dashboard, navigate to **Compute (Workers & Pages)** > **Create an application** > **Pages**.
2. Connect your GitHub repository: `ItsMrAhmad/DotMaticPrinter`.
3. Set build configuration:
   - **Framework preset**: `Next.js (Static HTML Export)`
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
4. Deploy and bind custom domain: `dotmaticprinter.com`.

---

## 📄 License
All rights reserved © 2026 Dot Matic Printer.
