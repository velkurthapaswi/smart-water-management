"use client";

import { useEffect } from "react";
import Link from "next/link";
import {
  X,
  Droplets,
  Layers,
  Calendar,
  Wrench,
  Clock,
  Lightbulb,
  AlertCircle,
  ArrowRight
} from "lucide-react";

export default function CropDetailModal({ crop, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!crop) return null;

  const waterColors = {
    Low: "bg-emerald-100 text-emerald-800 border-emerald-300",
    Medium: "bg-blue-100 text-blue-800 border-blue-300",
    High: "bg-amber-100 text-amber-800 border-amber-300",
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-slate-200 overflow-hidden relative max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="p-6 bg-gradient-to-r from-emerald-700 via-teal-700 to-cyan-800 text-white flex items-start justify-between">
          <div className="flex items-center gap-4">
            <span className="text-4xl p-3 bg-white/10 rounded-2xl backdrop-blur-md">
              {crop.icon || "🌱"}
            </span>
            <div>
              <div className="flex items-center gap-2.5">
                <h2 className="text-2xl font-bold tracking-tight">{crop.name}</h2>
                <span
                  className={`text-xs font-bold px-2.5 py-0.5 rounded-full border ${
                    waterColors[crop.waterRequirement] || "bg-slate-100 text-slate-800"
                  }`}
                >
                  {crop.waterRequirement} Water
                </span>
              </div>
              <p className="text-sm text-emerald-100 mt-0.5">{crop.category}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-white/80 hover:text-white rounded-full hover:bg-white/10 transition-colors focus:outline-hidden"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-700">
          {/* Description */}
          {crop.description && (
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-sm leading-relaxed text-slate-700">
              {crop.description}
            </div>
          )}

          {/* Grid of Key Properties */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Suitable Soils */}
            <div className="p-4 rounded-xl border border-slate-200/80 bg-white">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                <Layers className="w-4 h-4 text-emerald-600" />
                <span>Suitable Soils</span>
              </div>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {crop.suitableSoils?.map((soil) => (
                  <span
                    key={soil}
                    className="text-xs px-2.5 py-1 rounded-md bg-amber-50 text-amber-900 border border-amber-200/80 font-medium"
                  >
                    {soil}
                  </span>
                ))}
              </div>
            </div>

            {/* Growing Season */}
            <div className="p-4 rounded-xl border border-slate-200/80 bg-white">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                <Calendar className="w-4 h-4 text-blue-600" />
                <span>Growing Season</span>
              </div>
              <p className="text-sm font-semibold text-slate-900 mt-2">
                {crop.seasonsDisplay || crop.seasons?.join(", ")}
              </p>
            </div>

            {/* Irrigation Method */}
            <div className="p-4 rounded-xl border border-slate-200/80 bg-white">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                <Wrench className="w-4 h-4 text-teal-600" />
                <span>Recommended Irrigation Method</span>
              </div>
              <p className="text-sm font-semibold text-slate-900 mt-2">
                {crop.irrigationMethod}
              </p>
            </div>

            {/* Duration / Cycle */}
            <div className="p-4 rounded-xl border border-slate-200/80 bg-white">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                <Clock className="w-4 h-4 text-purple-600" />
                <span>Growth Duration</span>
              </div>
              <p className="text-sm font-semibold text-slate-900 mt-2">
                {crop.growthDurationDays || "Standard agricultural cycle"}
              </p>
            </div>
          </div>

          {/* Watering Frequency */}
          <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200/80">
            <div className="flex items-center gap-2 text-xs font-bold text-blue-900 uppercase tracking-wider mb-1">
              <Droplets className="w-4 h-4 text-blue-600" />
              <span>Watering Frequency & Monitoring</span>
            </div>
            <p className="text-sm text-blue-950 font-medium mt-1.5">
              {crop.frequency}
            </p>
          </div>

          {/* Critical Stages */}
          {crop.criticalStages && (
            <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200/80">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-900 uppercase tracking-wider mb-1">
                <AlertCircle className="w-4 h-4 text-emerald-600" />
                <span>Moisture-Critical Growth Stages</span>
              </div>
              <p className="text-sm text-emerald-950 font-medium mt-1.5">
                {crop.criticalStages}
              </p>
            </div>
          )}

          {/* Tips */}
          <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-900 uppercase tracking-wider mb-1">
              <Lightbulb className="w-4 h-4 text-amber-600" />
              <span>Water-Saving Tip</span>
            </div>
            <p className="text-sm text-amber-950 font-medium mt-1.5">
              {crop.tips}
            </p>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2 rounded-xl border border-slate-300 text-slate-700 text-sm font-medium hover:bg-slate-100 transition-colors"
          >
            Close
          </button>
          <Link
            href={`/recommendation?crop=${encodeURIComponent(crop.name)}`}
            onClick={onClose}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 text-white text-sm font-medium hover:bg-emerald-700 shadow-md shadow-emerald-600/20 transition-all"
          >
            <span>Get Recommendation for {crop.name}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
