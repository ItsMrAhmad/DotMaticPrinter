import React from "react";
import { Factory, ShieldCheck, Truck, Palette } from "lucide-react";

export default function ValueProps() {
  const props = [
    {
      icon: Factory,
      title: "Direct Factory Pricing",
      desc: "Complete offset & digital production in-house. Transparent wholesale rates without middleman commissions.",
      badge: "Best Value",
    },
    {
      icon: Palette,
      title: "Free Artwork & Die-Line Review",
      desc: "Send your PDF, AI, or PSD files. Our prepress team verifies bleeds, cut lines, and resolution before printing.",
      badge: "Zero Errors",
    },
    {
      icon: Truck,
      title: "Nationwide Express Delivery",
      desc: "Fast doorstep delivery across Lahore, Karachi, Islamabad, Rawalpindi, Faisalabad, and all cities in Pakistan.",
      badge: "Safe Packing",
    },
    {
      icon: ShieldCheck,
      title: "100% Quality Guaranteed",
      desc: "Heavyweight certified paperboards, sharp Pantone color accuracy, and flawless laminations on every batch.",
      badge: "Satisfaction First",
    },
  ];

  return (
    <section className="bg-white py-10 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {props.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#2D3092]/30 hover:shadow-md transition-all group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#2D3092] group-hover:bg-[#2D3092] group-hover:text-white transition-colors shadow-xs">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#F88521] bg-orange-50 px-2 py-0.5 rounded-md border border-orange-200">
                    {item.badge}
                  </span>
                </div>
                <h3 className="font-bold text-slate-900 text-sm mb-1.5 group-hover:text-[#2D3092] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
