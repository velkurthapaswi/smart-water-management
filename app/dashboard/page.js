"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  BarChart3,
  Droplets,
  Sprout,
  ShieldCheck,
  TrendingDown,
  PieChart as PieIcon,
  CheckCircle2,
  Layers,
  ArrowRight,
  Info,
  Calendar,
} from "lucide-react";
import StatCard from "@/components/StatCard";
import { CROPS, WATER_SAVING_TIPS } from "@/data/crops";

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("waterRequirement");

  // Calculate statistics from the CROPS dataset
  const stats = useMemo(() => {
    const total = CROPS.length;
    const low = CROPS.filter((c) => c.waterRequirement === "Low").length;
    const medium = CROPS.filter((c) => c.waterRequirement === "Medium").length;
    const high = CROPS.filter((c) => c.waterRequirement === "High").length;

    // Soil compatibility distribution
    const soilCounts = {
      "Loamy Soil": 0,
      "Sandy Soil": 0,
      "Clay Soil": 0,
      "Black Soil": 0,
      "Red Soil": 0,
    };
    CROPS.forEach((crop) => {
      crop.suitableSoils?.forEach((s) => {
        if (soilCounts[s] !== undefined) soilCounts[s]++;
      });
    });

    // Irrigation method distribution
    const methodCounts = {
      "Drip Focused": CROPS.filter((c) => c.irrigationMethod.includes("Drip")).length,
      "Sprinkler": CROPS.filter((c) => c.irrigationMethod.includes("Sprinkler")).length,
      "Surface / Controlled": CROPS.filter(
        (c) =>
          c.irrigationMethod.includes("Controlled") ||
          c.irrigationMethod.includes("Furrow") ||
          c.irrigationMethod.includes("Light")
      ).length,
    };

    return { total, low, medium, high, soilCounts, methodCounts };
  }, []);

  const waterCategories = [
    {
      name: "Low Water Demand",
      count: stats.low,
      percentage: Math.round((stats.low / stats.total) * 100),
      color: "bg-emerald-500",
      textColor: "text-emerald-700",
      bgLight: "bg-emerald-50",
      border: "border-emerald-200",
      crops: "Pulses",
    },
    {
      name: "Medium Water Demand",
      count: stats.medium,
      percentage: Math.round((stats.medium / stats.total) * 100),
      color: "bg-blue-500",
      textColor: "text-blue-700",
      bgLight: "bg-blue-50",
      border: "border-blue-200",
      crops: "Wheat, Maize, Cotton, Groundnut, Tomato, Onion, Potato, Chilli",
    },
    {
      name: "High Water Demand",
      count: stats.high,
      percentage: Math.round((stats.high / stats.total) * 100),
      color: "bg-amber-500",
      textColor: "text-amber-700",
      bgLight: "bg-amber-50",
      border: "border-amber-200",
      crops: "Rice, Sugarcane",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold mb-2">
            <BarChart3 className="w-3.5 h-3.5 text-emerald-600" />
            <span>Water Analytics & Conservation</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Water Management Dashboard
          </h1>
          <p className="text-slate-600 text-sm mt-1">
            Aggregated metrics, crop water intensity distribution, and conservation tips.
          </p>
        </div>

        <Link
          href="/recommendation"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm shadow-md shadow-emerald-600/20 transition-all self-start md:self-center"
        >
          <span>Calculate Recommendation</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Top 4 Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Crops"
          value={stats.total}
          subtitle="Indexed field & horticultural crops"
          icon={Sprout}
          badgeText="100% Calibrated"
          colorScheme="slate"
        />
        <StatCard
          title="Low Water Crops"
          value={stats.low}
          subtitle="Drought-hardy legumes & pulses"
          icon={TrendingDown}
          badgeText={`${Math.round((stats.low / stats.total) * 100)}% of total`}
          colorScheme="emerald"
        />
        <StatCard
          title="Medium Water Crops"
          value={stats.medium}
          subtitle="Grains, fibers, oilseeds & veggies"
          icon={Droplets}
          badgeText={`${Math.round((stats.medium / stats.total) * 100)}% of total`}
          colorScheme="blue"
        />
        <StatCard
          title="High Water Crops"
          value={stats.high}
          subtitle="Rice & Sugarcane cash crops"
          icon={Droplets}
          badgeText={`${Math.round((stats.high / stats.total) * 100)}% of total`}
          colorScheme="amber"
        />
      </div>

      {/* Visual Chart Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Visual Chart (CSS & SVG based) */}
        <div className="lg:col-span-2 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
            <div>
              <h2 className="text-xl font-bold text-slate-900 tracking-tight">
                Crop Water Requirement Distribution
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Proportion of crops categorized by irrigation intensity
              </p>
            </div>

            {/* Toggle switch between water demand & soil compatibility */}
            <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-xl text-xs font-semibold">
              <button
                onClick={() => setActiveTab("waterRequirement")}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  activeTab === "waterRequirement"
                    ? "bg-white text-slate-900 shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Water Demand
              </button>
              <button
                onClick={() => setActiveTab("soilAffinity")}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  activeTab === "soilAffinity"
                    ? "bg-white text-slate-900 shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Soil Affinity
              </button>
            </div>
          </div>

          {activeTab === "waterRequirement" ? (
            <div className="space-y-6">
              {/* Stacked Progress Bar */}
              <div>
                <div className="h-6 w-full rounded-xl overflow-hidden flex shadow-inner bg-slate-100">
                  <div
                    style={{ width: `${(stats.low / stats.total) * 100}%` }}
                    className="bg-emerald-500 hover:opacity-90 transition-all flex items-center justify-center text-[11px] font-bold text-white"
                    title={`Low Water: ${stats.low} crops`}
                  >
                    {stats.low > 0 && `${Math.round((stats.low / stats.total) * 100)}%`}
                  </div>
                  <div
                    style={{ width: `${(stats.medium / stats.total) * 100}%` }}
                    className="bg-blue-500 hover:opacity-90 transition-all flex items-center justify-center text-[11px] font-bold text-white"
                    title={`Medium Water: ${stats.medium} crops`}
                  >
                    {`${Math.round((stats.medium / stats.total) * 100)}%`}
                  </div>
                  <div
                    style={{ width: `${(stats.high / stats.total) * 100}%` }}
                    className="bg-amber-500 hover:opacity-90 transition-all flex items-center justify-center text-[11px] font-bold text-white"
                    title={`High Water: ${stats.high} crops`}
                  >
                    {`${Math.round((stats.high / stats.total) * 100)}%`}
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs text-slate-500 mt-2 px-1">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
                    <span>Low ({stats.low})</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-500 inline-block" />
                    <span>Medium ({stats.medium})</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
                    <span>High ({stats.high})</span>
                  </span>
                </div>
              </div>

              {/* Detailed Category Bars */}
              <div className="space-y-4 pt-2">
                {waterCategories.map((cat) => (
                  <div
                    key={cat.name}
                    className={`p-4 rounded-2xl border ${cat.border} ${cat.bgLight} space-y-2`}
                  >
                    <div className="flex items-center justify-between text-sm">
                      <span className={`font-bold ${cat.textColor}`}>
                        {cat.name}
                      </span>
                      <span className="font-bold text-slate-800">
                        {cat.count} {cat.count === 1 ? "crop" : "crops"} ({cat.percentage}%)
                      </span>
                    </div>

                    {/* Progress track */}
                    <div className="w-full bg-white/80 rounded-full h-2.5 overflow-hidden">
                      <div
                        className={`h-full ${cat.color} rounded-full transition-all duration-500`}
                        style={{ width: `${cat.percentage}%` }}
                      />
                    </div>

                    <p className="text-xs text-slate-600 pt-0.5">
                      <span className="font-semibold text-slate-700">Includes: </span>
                      {cat.crops}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            /* Soil Affinity Tab */
            <div className="space-y-4">
              <p className="text-xs text-slate-600">
                Number of supported crops that can be cultivated in each soil type:
              </p>
              {Object.entries(stats.soilCounts).map(([soil, count]) => {
                const pct = Math.round((count / stats.total) * 100);
                return (
                  <div key={soil} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs font-semibold text-slate-700">
                      <span>{soil}</span>
                      <span>
                        {count} crops ({pct}%)
                      </span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
                      <div
                        className="bg-emerald-600 h-full rounded-full transition-all duration-500"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Quick Irrigation Insights Card */}
        <div className="bg-gradient-to-br from-emerald-900 to-teal-950 text-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-lg">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center backdrop-blur-md">
              <Droplets className="w-6 h-6 text-cyan-300" />
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider">
                Agronomic Target
              </span>
              <h3 className="text-2xl font-bold mt-1 text-white">
                Drip & Micro Irrigation
              </h3>
              <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed mt-2">
                Over 70% of crops in this system perform optimally under Drip or
                Micro-Sprinkler systems, delivering water directly to root zones
                and cutting evaporative loss by up to 50%.
              </p>
            </div>

            <div className="space-y-2 pt-4 border-t border-white/15 text-xs">
              <div className="flex items-center justify-between py-1 border-b border-white/10">
                <span className="text-emerald-200">Drip-Adoptable Crops:</span>
                <span className="font-bold text-white">8 of 11</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-white/10">
                <span className="text-emerald-200">Average Water Savings:</span>
                <span className="font-bold text-white">35% - 45%</span>
              </div>
              <div className="flex items-center justify-between py-1">
                <span className="text-emerald-200">Yield Consistency:</span>
                <span className="font-bold text-emerald-300">+15% to +25%</span>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-4">
            <Link
              href="/crops"
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white text-emerald-950 font-bold text-xs hover:bg-emerald-50 transition-colors shadow-md"
            >
              <span>Explore All Crop Specs</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Water Saving Tips Section (Mandatory 6 items) */}
      <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm space-y-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 uppercase tracking-wider mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span>Standard Operational Protocols</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Water Saving Tips
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Core practices every agricultural producer should implement to preserve groundwater and boost efficiency.
            </p>
          </div>
          <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
            6 Key Directives
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WATER_SAVING_TIPS.map((tip, index) => (
            <div
              key={index}
              className="p-5 rounded-2xl bg-slate-50 hover:bg-emerald-50/50 border border-slate-200/80 transition-all hover:border-emerald-300 space-y-3 group"
            >
              <div className="flex items-center justify-between">
                <span className="w-8 h-8 rounded-xl bg-emerald-600 text-white font-bold text-xs flex items-center justify-center shadow-xs">
                  {index + 1}
                </span>
                <CheckCircle2 className="w-5 h-5 text-emerald-500 opacity-60 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="font-bold text-slate-900 text-base leading-snug">
                {tip}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                {index === 0 &&
                  "Drip systems deliver precise drops directly to the plant root zone, drastically reducing deep percolation and evaporation."}
                {index === 1 &&
                  "Use tensiometers, feel-and-appearance methods, or digital sensors before applying water to avoid irrigating wet soil."}
                {index === 2 &&
                  "Excess water displaces oxygen in the root zone, stunts development, and fosters fungal pathogens."}
                {index === 3 &&
                  "Adequate field slope and drainage channels prevent waterlogging, soil salinization, and root asphyxiation during heavy rains."}
                {index === 4 &&
                  "Focus water during critical moisture-sensitive stages such as CRI in wheat, flowering in cotton, or silking in maize."}
                {index === 5 &&
                  "Irrigate early in the morning or during dusk hours to minimize wind drift and solar evaporative losses."}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
