import React from "react";
import { Package, FileText, Megaphone, Tag, ShoppingBag, ArrowRight } from "lucide-react";
import { CATEGORIES } from "@/data/products";

interface CategoryGridProps {
  activeCategory: string;
  onSelectCategory: (catId: string) => void;
}

export default function CategoryGrid({
  activeCategory,
  onSelectCategory,
}: CategoryGridProps) {
  const getIcon = (name: string) => {
    switch (name) {
      case "Package":
        return Package;
      case "FileText":
        return FileText;
      case "Megaphone":
        return Megaphone;
      case "Tag":
        return Tag;
      case "ShoppingBag":
        return ShoppingBag;
      default:
        return Package;
    }
  };

  return (
    <section className="bg-slate-50 py-12 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#F88521] mb-1">
              Complete Print &amp; Packaging Catalog
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Explore by Specialty Category
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 max-w-md">
            Click any category to filter available products, specifications, and instant WhatsApp quote options.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {CATEGORIES.map((cat) => {
            const Icon = getIcon(cat.iconName);
            const isSelected = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`text-left p-5 rounded-2xl border transition-all duration-200 group relative overflow-hidden flex flex-col justify-between ${
                  isSelected
                    ? "bg-[#2D3092] text-white border-[#2D3092] shadow-lg scale-[1.02]"
                    : "bg-white text-slate-900 border-slate-200 hover:border-[#2D3092]/40 hover:shadow-md"
                }`}
              >
                <div>
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${
                      isSelected
                        ? "bg-white/20 text-white"
                        : "bg-slate-100 text-[#2D3092] group-hover:bg-[#2D3092] group-hover:text-white"
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3
                    className={`font-black text-base mb-1.5 transition-colors ${
                      isSelected ? "text-white" : "text-slate-900 group-hover:text-[#2D3092]"
                    }`}
                  >
                    {cat.name}
                  </h3>
                  <p
                    className={`text-xs line-clamp-2 leading-relaxed ${
                      isSelected ? "text-slate-200" : "text-slate-500"
                    }`}
                  >
                    {cat.description}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-5 pt-3 border-t border-slate-100/30">
                  <span
                    className={`text-xs font-bold ${
                      isSelected ? "text-[#F88521]" : "text-slate-400 group-hover:text-[#F88521]"
                    }`}
                  >
                    {cat.itemCount} Products
                  </span>
                  <ArrowRight
                    className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${
                      isSelected ? "text-white" : "text-slate-400 group-hover:text-[#2D3092]"
                    }`}
                  />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
