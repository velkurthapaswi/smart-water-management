"use client";

import Link from "next/link";
import {
  Droplets,
  Sprout,
  Layers,
  Calendar,
  Wrench,
  Clock,
  Lightbulb,
  ShieldAlert,
  Printer,
  RotateCcw,
  CheckCircle2,
  AlertTriangle,
  ArrowRight
} from "lucide-react";

export default function RecommendationCard({ recommendation, onReset }) {
  if (!recommendation) return null;

  const {
    crop,
    cropDetails,
    soilType,
    waterAvailability,
    season,
    waterRequirement,
    irrigationMethod,
    wateringFrequency,
    waterManagementAdvice,
    waterAvailabilityStatus,
    waterAvailabilityTips,
    waterSavingTips,
    generalWaterSavingTips,
    suitableSeason,
    seasonalAdvice,
    soilAdvice,
    disclaimer,
  } = recommendation;

  const waterLevelBadges = {
    Low: {
      color: "bg-emerald-100 text-emerald-800 border-emerald-300",
      pill: "bg-emerald-600 text-white",
      desc: "Low Water Demand - Drought Resilient",
    },
    Medium: {
      color: "bg-blue-100 text-blue-800 border-blue-300",
      pill: "bg-blue-600 text-white",
      desc: "Moderate Water Demand - Balanced Needs",
    },
    High: {
      color: "bg-amber-100 text-amber-900 border-amber-300",
      pill: "bg-amber-600 text-white",
      desc: "High Water Demand - Intensive Monitoring",
    },
  };

  const currentWaterBadge =
    waterLevelBadges[waterRequirement] || waterLevelBadges.Medium;

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-slate-200/90 overflow-hidden print-card animate-in fade-in slide-in-from-bottom-4 duration-300">
      {/* Top Banner */}
      <div className="p-6 sm:p-8 bg-gradient-to-r from-emerald-800 via-teal-800 to-cyan-900 text-white relative">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="text-4xl p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
              {cropDetails?.icon || "🌱"}
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider font-semibold text-emerald-300">
                Irrigation Recommendation
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mt-0.5">
                {crop} Irrigation Plan
              </h2>
              <p className="text-sm text-emerald-100/90">
                Tailored for {soilType} • {season} Season • {waterAvailability} Water Availability
              </p>
            </div>
          </div>

          {/* Action buttons (hidden in print) */}
          <div className="flex items-center gap-2 no-print self-end sm:self-center">
            <button
              onClick={handlePrint}
              type="button"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold backdrop-blur-sm transition-colors border border-white/15"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>
            {onReset && (
              <button
                onClick={onReset}
                type="button"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-semibold transition-colors shadow-sm"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>New Calculation</span>
              </button>
            )}
          </div>
        </div>

        {/* Selected Parameters Chips */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-6 pt-6 border-t border-white/15 text-xs">
          <div className="bg-white/10 backdrop-blur-xs rounded-xl p-2.5">
            <p className="text-emerald-200 text-[11px] uppercase font-semibold">
              Selected Crop
            </p>
            <p className="font-bold text-sm text-white mt-0.5">{crop}</p>
          </div>
          <div className="bg-white/10 backdrop-blur-xs rounded-xl p-2.5">
            <p className="text-emerald-200 text-[11px] uppercase font-semibold">
              Soil Type
            </p>
            <p className="font-bold text-sm text-white mt-0.5">{soilType}</p>
          </div>
          <div className="bg-white/10 backdrop-blur-xs rounded-xl p-2.5">
            <p className="text-emerald-200 text-[11px] uppercase font-semibold">
              Water Availability
            </p>
            <p className="font-bold text-sm text-white mt-0.5">
              {waterAvailability} Level
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-xs rounded-xl p-2.5">
            <p className="text-emerald-200 text-[11px] uppercase font-semibold">
              Season
            </p>
            <p className="font-bold text-sm text-white mt-0.5">{season}</p>
          </div>
        </div>
      </div>

      {/* Main Content Body */}
      <div className="p-6 sm:p-8 space-y-6">
        {/* Key Metrics: Water Requirement, Irrigation Method, Frequency */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Water Requirement */}
          <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50/70 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Water Requirement
              </span>
              <Droplets className="w-5 h-5 text-cyan-600" />
            </div>
            <div>
              <span
                className={`inline-block px-3 py-1 rounded-full text-xs font-bold border ${currentWaterBadge.color}`}
              >
                {waterRequirement}
              </span>
              <p className="text-lg font-bold text-slate-900 mt-2">
                {waterRequirement} Requirement
              </p>
              <p className="text-xs text-slate-500 mt-0.5">
                {currentWaterBadge.desc}
              </p>
            </div>
          </div>

          {/* Irrigation Method */}
          <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50/70 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Recommended Irrigation Method
              </span>
              <Wrench className="w-5 h-5 text-teal-600" />
            </div>
            <div>
              <p className="text-base font-bold text-slate-900 leading-snug">
                {irrigationMethod}
              </p>
              <p className="text-xs text-slate-500 mt-1">
                Optimized for maximum water-use efficiency
              </p>
            </div>
          </div>

          {/* Watering Frequency */}
          <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50/70 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Watering Frequency
              </span>
              <Clock className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900 leading-snug">
                {wateringFrequency}
              </p>
              <p className="text-xs text-slate-500 mt-1">
                Based on {soilType} drainage dynamics
              </p>
            </div>
          </div>
        </div>

        {/* Water Management Advice */}
        <div className="p-5 sm:p-6 rounded-2xl bg-cyan-50/60 border border-cyan-200/80">
          <div className="flex items-center gap-2.5 mb-3">
            <div className="p-2 rounded-lg bg-cyan-600 text-white">
              <Droplets className="w-4 h-4" />
            </div>
            <h3 className="text-base font-bold text-cyan-950">
              Water Management Advice
            </h3>
          </div>
          <div className="space-y-2 text-sm text-cyan-950">
            <p className="font-semibold text-cyan-900 bg-cyan-100/70 px-3 py-1.5 rounded-lg inline-block text-xs">
              {waterAvailabilityStatus}
            </p>
            <p className="text-xs text-slate-700 leading-relaxed mt-2">
              Based on your available water resources and the {waterRequirement.toLowerCase()} water demand of {crop}, implement the following recommendations:
            </p>
            <ul className="space-y-1.5 mt-2 text-xs sm:text-sm text-slate-700">
              {waterAvailabilityTips?.map((tip, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-700 mt-0.5 shrink-0" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Soil & Seasonal Guidance (Two columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Soil Advice */}
          <div className="p-5 rounded-2xl bg-amber-50/50 border border-amber-200/80">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-900 uppercase tracking-wider mb-2">
              <Layers className="w-4 h-4 text-amber-700" />
              <span>Soil-Specific Advice ({soilType})</span>
            </div>
            <p className="text-sm text-amber-950 leading-relaxed">
              {soilAdvice}
            </p>
          </div>

          {/* Suitable Season */}
          <div className="p-5 rounded-2xl bg-blue-50/50 border border-blue-200/80">
            <div className="flex items-center gap-2 text-xs font-bold text-blue-900 uppercase tracking-wider mb-2">
              <Calendar className="w-4 h-4 text-blue-700" />
              <span>Suitable Growing Season</span>
            </div>
            <p className="text-sm text-blue-950 leading-relaxed">
              {seasonalAdvice}
            </p>
          </div>
        </div>

        {/* Water-Saving Tips Card */}
        <div className="p-5 sm:p-6 rounded-2xl bg-emerald-50/60 border border-emerald-200/80">
          <div className="flex items-center gap-2.5 mb-3">
            <div className="p-2 rounded-lg bg-emerald-600 text-white">
              <Lightbulb className="w-4 h-4" />
            </div>
            <h3 className="text-base font-bold text-emerald-950">
              Water-Saving Tips
            </h3>
          </div>
          <div className="space-y-3">
            <div className="p-3 bg-white rounded-xl border border-emerald-200/70 text-xs sm:text-sm text-emerald-900 font-medium">
              <span className="font-bold text-emerald-950">Crop-Specific Note: </span>
              {waterSavingTips}
            </div>
            <div className="text-xs text-slate-600">
              <p className="font-semibold text-slate-700 mb-1.5">
                Core Conservation Measures:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {generalWaterSavingTips?.map((tip, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 p-2 rounded-lg bg-white/80 border border-slate-200/60 text-slate-700"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{tip}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="p-4 rounded-xl bg-slate-100 border border-slate-200/90 text-xs text-slate-600 flex items-start gap-3">
          <ShieldAlert className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
          <p className="leading-relaxed">
            <span className="font-semibold text-slate-800">Educational Disclaimer: </span>
            {disclaimer}
          </p>
        </div>

        {/* Bottom Actions */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 no-print">
          <Link
            href="/crops"
            className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1.5"
          >
            <span>Explore all 11 supported crops</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          {onReset && (
            <button
              onClick={onReset}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition-colors"
            >
              Test Another Scenario
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
