import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Phone, 
  MapPin, 
  Mail, 
  Clock, 
  Truck
} from "lucide-react";
import { InstagramIcon, FacebookIcon, YouTubeIcon, TikTokIcon } from "@/components/SocialIcons";
import { BUSINESS_INFO, CATEGORIES } from "@/data/products";

interface FooterProps {
  onSelectCategory: (catId: string) => void;
}

export default function Footer({ onSelectCategory }: FooterProps) {
  return (
    <footer id="about-us" className="bg-[#0B1120] text-slate-300 pt-16 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: Brand Info (Cols 1-4) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 bg-white rounded-2xl p-1 shrink-0">
                <Image
                  src="/brand/logo.svg"
                  alt="Dot Matic Printer Logo"
                  width={48}
                  height={48}
                  className="w-10 h-10 object-contain mx-auto rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black text-white tracking-tight leading-none">
                  DOT MATIC
                </span>
                <span className="text-[10px] font-bold tracking-widest text-[#F88521] uppercase mt-0.5">
                  Printer &amp; Packaging
                </span>
              </div>
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Your one-stop industrial printing and packaging workshop in Gulberg, Lahore. 
              We craft custom corrugated mailer boxes, rigid gift packaging, premium business stationery, and marketing materials with nationwide delivery across Pakistan.
            </p>

            {/* Social Media Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={BUSINESS_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-[#F88521] text-slate-300 hover:text-white flex items-center justify-center transition-all"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={BUSINESS_INFO.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-[#2D3092] text-slate-300 hover:text-white flex items-center justify-center transition-all"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={BUSINESS_INFO.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-red-600 text-slate-300 hover:text-white flex items-center justify-center transition-all"
                aria-label="YouTube"
              >
                <YouTubeIcon className="w-4 h-4" />
              </a>
              <a
                href={BUSINESS_INFO.socials.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-all"
                aria-label="TikTok"
              >
                <TikTokIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Product Categories (Cols 5-7) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Printing &amp; Packaging
            </h4>
            <ul className="space-y-2 text-xs">
              {CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <a
                    href={
                      cat.id === "packaging-boxes" || cat.id === "packaging"
                        ? "#packaging-solutions-section"
                        : cat.id === "wedding"
                        ? "#wedding-section"
                        : "#business-customers-section"
                    }
                    onClick={() => onSelectCategory(cat.id)}
                    className="text-slate-400 hover:text-[#F88521] transition-colors inline-block"
                  >
                    {cat.name}
                  </a>
                </li>
              ))}
              <li className="pt-2 border-t border-slate-800">
                <a href="#why-choose-us" className="text-slate-400 hover:text-[#F88521] transition-colors inline-block">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#reviews-section" className="text-slate-400 hover:text-[#F88521] transition-colors inline-block">
                  Client Reviews
                </a>
              </li>
              <li>
                <a href="#faq-section" className="text-slate-400 hover:text-[#F88521] transition-colors inline-block">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Workshop Details (Cols 8-12) */}
          <div className="lg:col-span-5 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Workshop &amp; Inquiries
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F88521] shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#F88521] shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-white">
                  {BUSINESS_INFO.whatsappFormatted} (Direct Call &amp; WhatsApp)
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#F88521] shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-white">
                  {BUSINESS_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#F88521] shrink-0" />
                <span>{BUSINESS_INFO.hours}</span>
              </div>
            </div>

            {/* Nationwide Delivery Note */}
            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-[11px] text-slate-400 flex items-center gap-2.5 mt-3">
              <Truck className="w-4 h-4 text-[#F88521] shrink-0" />
              <span>
                Daily dispatches to Lahore, Karachi, Islamabad, Rawalpindi, Faisalabad, and nationwide.
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="space-y-0.5 text-center sm:text-left">
            <div>
              &copy; {new Date().getFullYear()} Dot Matic Printer. All rights reserved.
            </div>
            <div className="text-slate-400 text-[11px] font-medium">
              Built by{" "}
              <a
                href="https://techsistlabs.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-[#F88521] hover:underline underline-offset-2 transition-colors cursor-pointer"
              >
                Techsist Labs
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
