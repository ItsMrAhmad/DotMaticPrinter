import React from "react";
import { Cpu, Printer, Sparkles, CheckCircle2, ShieldCheck, Clock } from "lucide-react";

export default function WhyChooseUs() {
  const points = [
    {
      icon: Printer,
      title: "German Heidelberg Offset Precision",
      desc: "Industrial multi-color offset presses calibrated for high color fidelity, sharp microscopic type, and consistent tone across large print runs.",
    },
    {
      icon: Cpu,
      title: "Computerized Die-Cutting & Creasing",
      desc: "Every box and folder is cut with laser-guided precision dies, ensuring tight tucks, crisp edges, and effortless assembly.",
    },
    {
      icon: Sparkles,
      title: "Luxury Embellishments In-House",
      desc: "Velvet soft-touch lamination, raised 3D Spot UV varnish, hot metallic foil stamping (Gold, Rose Gold, Silver), and blind embossing.",
    },
    {
      icon: ShieldCheck,
      title: "Complimentary Prepress File Check",
      desc: "Avoid costly misprints. Our experienced prepress team reviews your vector artwork, resolution, and bleeds before going to plate.",
    },
  ];

  return (
    <section id="why-choose-us" className="bg-slate-50 py-16 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-[#F88521] mb-1">
            Industrial Print Precision
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Why Leading Brands Trust Dot Matic Printer
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            Operating from Gulberg, Lahore, we combine advanced machinery with attentive customer support to deliver packaging that elevates your brand.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((p, index) => {
            const Icon = p.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-[#2D3092]/40 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#2D3092] flex items-center justify-center mb-4 group-hover:bg-[#2D3092] group-hover:text-white transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-base text-slate-900 mb-2 group-hover:text-[#2D3092] transition-colors">
                  {p.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
