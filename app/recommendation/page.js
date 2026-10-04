"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
  Droplets,
  Layers,
  Calendar,
  Waves,
  Sparkles,
  AlertCircle,
  HelpCircle,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import RecommendationCard from "@/components/RecommendationCard";
import Loading from "@/components/Loading";

const CROPS_LIST = [
  "Rice",
  "Wheat",
  "Maize",
  "Cotton",
  "Groundnut",
  "Tomato",
  "Sugarcane",
  "Onion",
  "Potato",
  "Pulses",
  "Chilli",
];

const SOILS_LIST = [
  "Sandy Soil",
  "Clay Soil",
  "Loamy Soil",
  "Black Soil",
  "Red Soil",
];

const WATER_LEVELS_LIST = ["Low", "Medium", "High"];

const SEASONS_LIST = ["Kharif", "Rabi", "Summer"];

function RecommendationContent() {
  const searchParams = useSearchParams();
  const initialCrop = searchParams.get("crop") || "";

  const [formData, setFormData] = useState({
    crop: initialCrop,
    soil: "",
    waterAvailability: "",
    season: "",
  });

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [recommendation, setRecommendation] = useState(null);

  // Sync if query param changes
  useEffect(() => {
    const cropFromUrl = searchParams.get("crop");
    if (cropFromUrl && CROPS_LIST.includes(cropFromUrl)) {
      setFormData((prev) => ({ ...prev, crop: cropFromUrl }));
    }
  }, [searchParams]);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errorMessage) setErrorMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    // Client-side validation for clear user feedback
    const missing = [];
    if (!formData.crop) missing.push("Crop");
    if (!formData.soil) missing.push("Soil Type");
    if (!formData.waterAvailability) missing.push("Water Availability");
    if (!formData.season) missing.push("Season");

    if (missing.length > 0) {
      setErrorMessage(
        `Please select all required fields before proceeding: ${missing.join(
          ", "
        )}.`
      );
      return;
    }

    setLoading(true);
    setRecommendation(null);

    try {
      // POST relative API call (Vercel-compatible)
      const res = await fetch("/api/recommendation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(
          data.message || "Failed to generate recommendation. Please try again."
        );
      }

      // Smooth simulated delay if response is instantaneous for pleasant loading experience
      setTimeout(() => {
        setRecommendation(data.data);
        setLoading(false);
        // Scroll to results
        if (typeof window !== "undefined") {
          window.scrollTo({ top: 300, behavior: "smooth" });
        }
      }, 350);
    } catch (err) {
      setLoading(false);
      setErrorMessage(
        err.message || "An unexpected error occurred. Please verify your selections."
      );
    }
  };

  const handleReset = () => {
    setRecommendation(null);
    setErrorMessage("");
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold">
          <Droplets className="w-3.5 h-3.5 text-emerald-600" />
          <span>Decision Support Calculator</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Water Recommendation System
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Select your farming parameters below. Our agronomic engine will
          generate a custom irrigation schedule, soil water retention analysis,
          and water-saving strategies.
        </p>
      </div>

      {/* Form Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-8" noValidate>
          {/* Error Alert */}
          {errorMessage && (
            <div
              role="alert"
              className="p-4 rounded-2xl bg-red-50 border border-red-200 text-red-800 text-sm flex items-start gap-3 animate-in fade-in"
            >
              <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 shrink-0" />
              <div>
                <p className="font-bold">Incomplete Information</p>
                <p className="mt-0.5">{errorMessage}</p>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Field 1: CROP */}
            <div className="space-y-2">
              <label
                htmlFor="crop-select"
                className="block text-sm font-bold text-slate-800 flex items-center justify-between"
              >
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>1. Crop</span>
                </span>
                <span className="text-xs text-emerald-700 font-semibold">Required</span>
              </label>
              <div className="relative">
                <select
                  id="crop-select"
                  value={formData.crop}
                  onChange={(e) => handleChange("crop", e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all font-medium"
                >
                  <option value="">-- Choose a Crop --</option>
                  {CROPS_LIST.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
              <p className="text-[11px] text-slate-500">
                11 field crops with scientifically indexed water requirements.
              </p>
            </div>

            {/* Field 2: SOIL TYPE */}
            <div className="space-y-2">
              <label
                htmlFor="soil-select"
                className="block text-sm font-bold text-slate-800 flex items-center justify-between"
              >
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-500" />
                  <span>2. Soil Type</span>
                </span>
                <span className="text-xs text-amber-700 font-semibold">Required</span>
              </label>
              <div className="relative">
                <select
                  id="soil-select"
                  value={formData.soil}
                  onChange={(e) => handleChange("soil", e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all font-medium"
                >
                  <option value="">-- Choose Soil Type --</option>
                  {SOILS_LIST.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
              <p className="text-[11px] text-slate-500">
                Determines moisture percolation, drainage speed, and frequency.
              </p>
            </div>

            {/* Field 3: WATER AVAILABILITY */}
            <div className="space-y-2">
              <label className="block text-sm font-bold text-slate-800 flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                  <span>3. Water Availability</span>
                </span>
                <span className="text-xs text-blue-700 font-semibold">Required</span>
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {WATER_LEVELS_LIST.map((level) => {
                  const isSelected = formData.waterAvailability === level;
                  return (
                    <button
                      key={level}
                      type="button"
                      onClick={() => handleChange("waterAvailability", level)}
                      className={`py-3 px-3 rounded-xl border text-sm font-semibold transition-all flex flex-col items-center justify-center gap-1 ${
                        isSelected
                          ? "bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/20"
                          : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                      }`}
                    >
                      <Waves className={`w-4 h-4 ${isSelected ? "text-cyan-200" : "text-slate-400"}`} />
                      <span>{level}</span>
                    </button>
                  );
                })}
              </div>
              <p className="text-[11px] text-slate-500">
                Your available irrigation supply (canal, borewell, or rainfed).
              </p>
            </div>

            {/* Field 4: SEASON */}
            <div className="space-y-2">
              <label className="block text-sm font-bold text-slate-800 flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-teal-500" />
                  <span>4. Season</span>
                </span>
                <span className="text-xs text-teal-700 font-semibold">Required</span>
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {SEASONS_LIST.map((season) => {
                  const isSelected = formData.season === season;
                  return (
                    <button
                      key={season}
                      type="button"
                      onClick={() => handleChange("season", season)}
                      className={`py-3 px-3 rounded-xl border text-sm font-semibold transition-all flex flex-col items-center justify-center gap-1 ${
                        isSelected
                          ? "bg-teal-700 text-white border-teal-700 shadow-md shadow-teal-700/20"
                          : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                      }`}
                    >
                      <Calendar className={`w-4 h-4 ${isSelected ? "text-teal-200" : "text-slate-400"}`} />
                      <span>{season}</span>
                    </button>
                  );
                })}
              </div>
              <p className="text-[11px] text-slate-500">
                Kharif (Monsoon), Rabi (Winter), or Summer (Zaid).
              </p>
            </div>
          </div>

          {/* Form Actions */}
          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              <span>Real-time agronomic calculation via Next.js API</span>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-sm text-white shadow-lg transition-all flex items-center justify-center gap-2 ${
                loading
                  ? "bg-slate-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 shadow-emerald-600/30 hover:scale-102 active:scale-98"
              }`}
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Generating recommendation...</span>
                </>
              ) : (
                <>
                  <span>Get Recommendation</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </form>
      </div>

      {/* Loading State Banner */}
      {loading && (
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm animate-in fade-in">
          <Loading message="Generating recommendation..." />
        </div>
      )}

      {/* Results View */}
      {recommendation && !loading && (
        <div id="recommendation-result" className="pt-2">
          <RecommendationCard
            recommendation={recommendation}
            onReset={handleReset}
          />
        </div>
      )}
    </div>
  );
}

export default function RecommendationPage() {
  return (
    <Suspense
      fallback={
        <div className="max-w-5xl mx-auto px-4 py-20 text-center">
          <Loading message="Loading recommendation engine..." />
        </div>
      }
    >
      <RecommendationContent />
    </Suspense>
  );
}
