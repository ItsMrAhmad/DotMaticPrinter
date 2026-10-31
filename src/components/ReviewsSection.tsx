import React from "react";
import { Star, Quote, CheckCircle2 } from "lucide-react";

export default function ReviewsSection() {
  const reviews = [
    {
      name: "Hamza Tariq",
      role: "Founder, Velvet Apparel Co.",
      city: "Lahore",
      text: "We ordered 2,000 custom matte black mailer boxes with interior gold foiling. Dot Matic Printer delivered them right on schedule with flawless edge creasing. Our customer unboxing videos have never looked better!",
      rating: 5,
      product: "Corrugated Mailer Boxes",
    },
    {
      name: "Dr. Ayesha Malik",
      role: "Managing Director, DermaGlow Labs",
      city: "Karachi",
      text: "Outstanding printing quality for our cosmetic product cartons and roll labels. The silver foil stamping and varnish are exceptionally crisp. Communicating directly on WhatsApp made revisions so seamless.",
      rating: 5,
      product: "Cosmetic Cartons & Roll Labels",
    },
    {
      name: "Bilal Rasheed",
      role: "Chief Operating Officer, Horizon Tech",
      city: "Islamabad",
      text: "Their 450gsm velvet visiting cards with raised 3D spot UV are in a class of their own. Every executive in our office was impressed. Highly recommend them for corporate stationery across Pakistan.",
      rating: 5,
      product: "Luxury Visiting Cards",
    },
  ];

  return (
    <section id="reviews-section" className="bg-white py-16 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-[#F88521] mb-1">
            Client Success Stories
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Trusted by Brands Across Pakistan
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            Read what corporate clients, e-commerce retailers, and founders say about our print accuracy and service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between hover:shadow-md transition-shadow relative"
            >
              <Quote className="w-8 h-8 text-slate-200 absolute top-5 right-5 pointer-events-none" />

              <div>
                {/* Rating Stars */}
                <div className="flex gap-1 mb-3 text-amber-400">
                  {[...Array(r.rating)].map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-6 italic">
                  &ldquo;{r.text}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <div>
                  <div className="font-bold text-sm text-slate-900">{r.name}</div>
                  <div className="text-xs text-slate-500">{r.role} • {r.city}</div>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
