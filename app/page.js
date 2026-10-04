import Link from "next/link";
import {
  Droplets,
  Sprout,
  Layers,
  Lightbulb,
  ArrowRight,
  CheckCircle2,
  TrendingDown,
  ShieldCheck,
  Compass,
  Cpu,
  BarChart3,
  Sparkles,
} from "lucide-react";

export default function HomePage() {
  const featureCards = [
    {
      title: "Smart Water Recommendation",
      description:
        "Input your crop, soil type, water availability, and season to receive calibrated irrigation methods and watering frequencies.",
      icon: Droplets,
      href: "/recommendation",
      color: "emerald",
      badge: "Decision Engine",
    },
    {
      title: "Crop Information",
      description:
        "Access complete agronomic profiles for major agricultural crops, including water requirement levels and growth cycles.",
      icon: Sprout,
      href: "/crops",
      color: "teal",
      badge: "11 Crops",
    },
    {
      title: "Soil-Based Advice",
      description:
        "Tailored watering guidance adjusted for drainage characteristics of Sandy, Clay, Loamy, Black, and Red agricultural soils.",
      icon: Layers,
      href: "/recommendation",
      color: "amber",
      badge: "Soil Dynamics",
    },
    {
      title: "Water-Saving Tips",
      description:
        "Practical conservation strategies such as drip systems, moisture monitoring, and avoiding unnecessary standing water.",
      icon: Lightbulb,
      href: "/dashboard",
      color: "cyan",
      badge: "Conservation",
    },
  ];

  const whyPoints = [
    {
      title: "Prevents over-irrigation",
      desc: "Protects delicate root zones from waterlogging, root rot, and fertilizer leaching caused by excess water applications.",
    },
    {
      title: "Reduces water wastage",
      desc: "Targeted drip and micro-sprinkler approaches ensure that every drop delivered directly reaches active root systems.",
    },
    {
      title: "Supports efficient irrigation",
      desc: "Synchronizes watering frequency with specific crop growth stages and soil moisture holding capacities.",
    },
    {
      title: "Helps farmers make informed decisions",
      desc: "Provides clear, scientific decision-support based on season, soil drainage, and resource availability.",
    },
    {
      title: "Improves water-use efficiency",
      desc: "Maximizes yield per unit of water supplied, safeguarding farm sustainability during dry spells.",
    },
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 sm:pt-20 pb-16 bg-gradient-to-b from-emerald-950 via-teal-900 to-slate-900 text-white">
        {/* Background decorative circles */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full overflow-hidden pointer-events-none opacity-20">
          <div className="absolute -top-32 left-10 w-96 h-96 rounded-full bg-emerald-400 blur-3xl" />
          <div className="absolute top-40 right-10 w-96 h-96 rounded-full bg-cyan-400 blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            {/* Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs sm:text-sm font-medium backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-emerald-300" />
              <span>Smart Agricultural Decision Support System</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Smart Water{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-200 to-cyan-300">
                Management System
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl font-medium text-emerald-100/90 tracking-tight">
              Smart irrigation recommendations for efficient water use
            </p>

            {/* Short Description */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Empowering farmers, agronomists, and agricultural students to make
              data-backed irrigation choices based on crop species, soil
              drainage characteristics, water availability, and growing seasons.
            </p>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/recommendation"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold text-base shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-102 transition-all active:scale-98"
              >
                <span>Get Water Recommendation</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/crops"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-base border border-white/20 backdrop-blur-md transition-all hover:scale-102 active:scale-98"
              >
                <span>Explore Crops</span>
                <Sprout className="w-5 h-5 text-emerald-300" />
              </Link>
            </div>

            {/* Quick Metrics Bar */}
            <div className="pt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto border-t border-white/15 text-left">
              <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                <p className="text-2xl font-extrabold text-white">11</p>
                <p className="text-xs text-emerald-200">Major Field Crops</p>
              </div>
              <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                <p className="text-2xl font-extrabold text-white">5</p>
                <p className="text-xs text-emerald-200">Soil Drainage Profiles</p>
              </div>
              <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                <p className="text-2xl font-extrabold text-white">30-40%</p>
                <p className="text-xs text-emerald-200">Potential Water Saved</p>
              </div>
              <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                <p className="text-2xl font-extrabold text-white">100%</p>
                <p className="text-xs text-emerald-200">Local & Client Ready</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
            Core Capabilities
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mt-3">
            Intelligent Tools for Water Conservation
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Engineered to guide irrigation decisions and optimize agricultural yield.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featureCards.map((feat) => {
            const Icon = feat.icon;
            return (
              <Link
                key={feat.title}
                href={feat.href}
                className="group relative p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white transition-colors flex items-center justify-center shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700">
                      {feat.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    {feat.description}
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-slate-100 flex items-center text-xs font-semibold text-emerald-700 group-hover:gap-1.5 transition-all">
                  <span>Explore feature</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Why Smart Water Management? Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-teal-950 to-emerald-950 p-8 sm:p-12 text-white shadow-xl">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 border border-emerald-800 px-3 py-1 rounded-full">
              Essential Agronomic Science
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-3 text-white">
              Why Smart Water Management?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
              Water is the single most critical input in agriculture. Balancing crop
              requirements against soil retention preserves groundwater, maximizes crop
              vigor, and prevents irreversible soil degradation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyPoints.map((point, index) => (
              <div
                key={point.title}
                className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs hover:bg-white/10 transition-colors"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-300 flex items-center justify-center font-bold text-xs">
                    {index + 1}
                  </div>
                  <h3 className="font-bold text-base text-white">
                    {point.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {point.desc}
                </p>
              </div>
            ))}

            {/* Quick Action card in the grid */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-600 text-white flex flex-col justify-between shadow-lg">
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-emerald-200">
                  Ready to test?
                </span>
                <h3 className="text-lg font-bold mt-1">
                  Generate Your First Irrigation Plan
                </h3>
                <p className="text-xs text-emerald-100 mt-2">
                  Test scenarios across Rice, Wheat, Cotton, and 8 other crops.
                </p>
              </div>
              <Link
                href="/recommendation"
                className="mt-4 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white text-emerald-900 font-bold text-xs hover:bg-emerald-50 transition-colors"
              >
                <span>Launch Tool</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Process Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-100 px-3 py-1 rounded-full">
            How It Works
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-3">
            Four Simple Steps to Optimal Water Use
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center">
            <div className="w-10 h-10 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center mx-auto mb-3 shadow-sm">
              1
            </div>
            <h4 className="font-bold text-slate-900 text-sm">Select Crop</h4>
            <p className="text-xs text-slate-500 mt-1">
              Choose from 11 calibrated field and cash crops.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center">
            <div className="w-10 h-10 rounded-full bg-teal-600 text-white font-bold flex items-center justify-center mx-auto mb-3 shadow-sm">
              2
            </div>
            <h4 className="font-bold text-slate-900 text-sm">Specify Soil Type</h4>
            <p className="text-xs text-slate-500 mt-1">
              Select Sandy, Clay, Loamy, Black, or Red soil.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center">
            <div className="w-10 h-10 rounded-full bg-cyan-600 text-white font-bold flex items-center justify-center mx-auto mb-3 shadow-sm">
              3
            </div>
            <h4 className="font-bold text-slate-900 text-sm">Water & Season</h4>
            <p className="text-xs text-slate-500 mt-1">
              Define current water availability and crop season.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center">
            <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center mx-auto mb-3 shadow-sm">
              4
            </div>
            <h4 className="font-bold text-slate-900 text-sm">Receive Decision Support</h4>
            <p className="text-xs text-slate-500 mt-1">
              Get irrigation methods, schedules, and tips instantly.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
