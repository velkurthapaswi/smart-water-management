"use client";

import { useState, useMemo, useEffect } from "react";
import {
  Sprout,
  Search,
  Filter,
  X,
  Droplets,
  HelpCircle,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import CropCard from "@/components/CropCard";
import CropDetailModal from "@/components/CropDetailModal";
import { CROPS } from "@/data/crops";

export default function CropsPage() {
  const [cropsList, setCropsList] = useState(CROPS);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("All"); // All, Low, Medium, High
  const [selectedCrop, setSelectedCrop] = useState(null);
  const [loading, setLoading] = useState(false);

  // Attempt to fetch from API route to verify API integration
  useEffect(() => {
    async function loadCropsFromApi() {
      try {
        setLoading(true);
        const res = await fetch("/api/crops");
        if (res.ok) {
          const json = await res.json();
          if (json.success && Array.isArray(json.data)) {
            setCropsList(json.data);
          }
        }
      } catch (e) {
        // Fallback to static CROPS dataset
        console.warn("Using fallback local dataset:", e);
      } finally {
        setLoading(false);
      }
    }
    loadCropsFromApi();
  }, []);

  // Instant reactive search and filter
  const filteredCrops = useMemo(() => {
    return cropsList.filter((crop) => {
      // Water requirement filter
      if (selectedFilter !== "All" && crop.waterRequirement !== selectedFilter) {
        return false;
      }

      // Search query (matches name, soils, irrigation method, season, category)
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const nameMatch = crop.name.toLowerCase().includes(query);
        const categoryMatch = crop.category?.toLowerCase().includes(query);
        const soilMatch = crop.suitableSoils?.some((s) =>
          s.toLowerCase().includes(query)
        );
        const methodMatch = crop.irrigationMethod?.toLowerCase().includes(query);
        const seasonMatch =
          crop.seasonsDisplay?.toLowerCase().includes(query) ||
          crop.seasons?.some((s) => s.toLowerCase().includes(query));

        return (
          nameMatch || categoryMatch || soilMatch || methodMatch || seasonMatch
        );
      }

      return true;
    });
  }, [cropsList, searchQuery, selectedFilter]);

  const filterOptions = [
    { label: "All Crops", value: "All" },
    { label: "Low Water", value: "Low" },
    { label: "Medium Water", value: "Medium" },
    { label: "High Water", value: "High" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold">
          <Sprout className="w-3.5 h-3.5 text-emerald-600" />
          <span>Agronomic Database</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Crop Irrigation Profiles
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Explore complete agricultural water requirements, soil affinities, and
          suitable irrigation methods across 11 key field and horticultural crops.
        </p>
      </div>

      {/* Search and Filters Bar */}
      <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/90 shadow-sm space-y-4">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Search Box */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by crop name, soil type (e.g. Clay), irrigation method, or season..."
              className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-slate-300 bg-slate-50 text-slate-900 placeholder:text-slate-400 text-sm focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all font-medium"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
                aria-label="Clear search query"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            <span className="text-xs font-bold text-slate-500 mr-1 hidden sm:inline">
              Filter:
            </span>
            {filterOptions.map((f) => {
              const active = selectedFilter === f.value;
              return (
                <button
                  key={f.value}
                  onClick={() => setSelectedFilter(f.value)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                    active
                      ? "bg-emerald-600 text-white shadow-sm shadow-emerald-600/30"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {f.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Counter and Active Filter Info */}
        <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-100">
          <p>
            Showing{" "}
            <span className="font-bold text-slate-900">{filteredCrops.length}</span>{" "}
            of {cropsList.length} crops
          </p>
          {(searchQuery || selectedFilter !== "All") && (
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedFilter("All");
              }}
              className="text-emerald-700 hover:text-emerald-800 font-semibold"
            >
              Reset filters
            </button>
          )}
        </div>
      </div>

      {/* Crop Cards Grid */}
      {filteredCrops.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCrops.map((crop) => (
            <CropCard
              key={crop.id || crop.name}
              crop={crop}
              onSelect={(selected) => setSelectedCrop(selected)}
            />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="text-center py-16 px-4 bg-white rounded-3xl border border-slate-200 shadow-xs max-w-md mx-auto space-y-4">
          <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto">
            <Search className="w-7 h-7" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900">
              No Matching Crops Found
            </h3>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              We couldn&apos;t find any crop matching &quot;{searchQuery}&quot;
              {selectedFilter !== "All" && ` with ${selectedFilter} water demand`}.
            </p>
          </div>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedFilter("All");
            }}
            className="px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 transition-colors shadow-xs"
          >
            Clear Search & Filters
          </button>
        </div>
      )}

      {/* Modal View for Crop Details */}
      {selectedCrop && (
        <CropDetailModal
          crop={selectedCrop}
          onClose={() => setSelectedCrop(null)}
        />
      )}
    </div>
  );
}
