"use client";

import Link from "next/link";
import { Droplets, Layers, Calendar, Wrench, ArrowUpRight } from "lucide-react";

export default function CropCard({ crop, onSelect }) {
  const waterBadges = {
    Low: {
      text: "Low Water",
      badge: "bg-emerald-100 text-emerald-800 border-emerald-300",
      accent: "from-emerald-500/10 to-teal-500/5 border-emerald-200/80 hover:border-emerald-400",
    },
    Medium: {
      text: "Medium Water",
      badge: "bg-blue-100 text-blue-800 border-blue-300",
      accent: "from-blue-500/10 to-cyan-500/5 border-blue-200/80 hover:border-blue-400",
    },
    High: {
      text: "High Water",
      badge: "bg-amber-100 text-amber-800 border-amber-300",
      accent: "from-amber-500/10 to-orange-500/5 border-amber-200/80 hover:border-amber-400",
    },
  };

  const style = waterBadges[crop.waterRequirement] || waterBadges.Medium;

  return (
    <div
      onClick={() => onSelect && onSelect(crop)}
      className={`group cursor-pointer rounded-2xl bg-gradient-to-b ${style.accent} bg-white p-5 border shadow-xs hover:shadow-lg transition-all duration-200 flex flex-col justify-between`}
    >
      <div>
        {/* Top: Icon + Water badge */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-3">
            <span className="text-3xl p-2 rounded-xl bg-white shadow-xs border border-slate-100">
              {crop.icon || "🌱"}
            </span>
            <div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                {crop.name}
              </h3>
              <p className="text-xs text-slate-500">{crop.category}</p>
            </div>
          </div>
          <span
            className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${style.badge}`}
          >
            {style.text}
          </span>
        </div>

        {/* Details list */}
        <div className="space-y-2 mt-4 text-xs text-slate-600">
          {/* Suitable Soil */}
          <div className="flex items-start gap-2">
            <Layers className="w-3.5 h-3.5 text-slate-400 mt-0.5 shrink-0" />
            <div>
              <span className="font-semibold text-slate-700">Suitable Soil: </span>
              <span>{crop.suitableSoils?.join(", ")}</span>
            </div>
          </div>

          {/* Season */}
          <div className="flex items-start gap-2">
            <Calendar className="w-3.5 h-3.5 text-slate-400 mt-0.5 shrink-0" />
            <div>
              <span className="font-semibold text-slate-700">Season: </span>
              <span>{crop.seasonsDisplay || crop.seasons?.join(", ")}</span>
            </div>
          </div>

          {/* Irrigation Method */}
          <div className="flex items-start gap-2">
            <Wrench className="w-3.5 h-3.5 text-slate-400 mt-0.5 shrink-0" />
            <div>
              <span className="font-semibold text-slate-700">Irrigation: </span>
              <span className="line-clamp-1">{crop.irrigationMethod}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
        <span className="text-emerald-700 font-semibold group-hover:underline flex items-center gap-1">
          <span>View Details</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </span>
        <Link
          href={`/recommendation?crop=${encodeURIComponent(crop.name)}`}
          onClick={(e) => e.stopPropagation()}
          className="px-2.5 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-medium transition-colors"
        >
          Recommend
        </Link>
      </div>
    </div>
  );
}
