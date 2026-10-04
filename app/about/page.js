import Link from "next/link";
import {
  Droplets,
  Sprout,
  AlertTriangle,
  TrendingDown,
  CheckCircle2,
  ShieldAlert,
  ArrowRight,
  BookOpen,
  Info,
  Scale,
} from "lucide-react";

export default function AboutPage() {
  const overIrrigationProblems = [
    {
      title: "Water Wastage",
      desc: "Squanders finite groundwater reservoirs and escalates pumping energy costs without providing crop benefit.",
    },
    {
      title: "Waterlogging",
      desc: "Fills soil pores with water, suffocating root systems by depriving them of oxygen and causing root decay.",
    },
    {
      title: "Nutrient Loss",
      desc: "Excess water leaches vital soil nitrogen, potassium, and micronutrients deep below the reachable root zone.",
    },
    {
      title: "Possible Crop Damage",
      desc: "Promotes anaerobic fungal infections, collar rot, damping off, and severe fruit or flower shedding.",
    },
  ];

  const underIrrigationProblems = [
    {
      title: "Crop Stress",
      desc: "Triggers cell dehydration, leaf wilting, stomatal closure, and impaired photosynthetic metabolism.",
    },
    {
      title: "Reduced Growth",
      desc: "Inhibits cell division, stunting shoot elongation, leaf canopy expansion, and root development.",
    },
    {
      title: "Lower Productivity",
      desc: "Leads to poor flowering, aborted seed pods, substandard grain filling, and drastic yield losses.",
    },
  ];

  const systemBenefits = [
    {
      title: "Efficient Water Use",
      desc: "Calibrates application volumes directly with plant evapotranspiration needs, preventing wasteful runoff.",
    },
    {
      title: "Better Irrigation Planning",
      desc: "Empowers growers to establish scheduled, stage-specific irrigation timetables adapted to their soil drainage.",
    },
    {
      title: "Reduced Wastage",
      desc: "Transitioning toward drip, micro-sprinklers, and controlled furrow prevents losses to evaporation and deep seepage.",
    },
    {
      title: "Sustainable Agriculture",
      desc: "Preserves precious aquifers, maintains soil health, and minimizes fertilizer leaching into waterways.",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold">
          <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
          <span>Educational Curriculum & Background</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          About the Smart Water Management System
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Understanding the agronomic principles, water-soil dynamics, and sustainable
          practices that power this decision-support application.
        </p>
      </div>

      {/* Section 1: What is Water Management? */}
      <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
            <Droplets className="w-5 h-5 text-emerald-600" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            What is Water Management?
          </h2>
        </div>
        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
          Agricultural water management is the systematic process of planning,
          developing, distributing, and regulating the optimal use of water
          resources for agricultural production. It balances the natural water
          demands of crops against environmental conditions, soil texture,
          seasonal weather patterns, and the availability of water supplies.
        </p>
        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
          Rather than irrigating on fixed or arbitrary calendars, smart water
          management applies science-backed methodologies—such as soil moisture
          monitoring, critical stage prioritization, and targeted delivery
          systems (e.g., drip and sprinkler irrigation)—to supply water precisely
          when and where the plant requires it.
        </p>
      </section>

      {/* Section 2: Why is Agricultural Water Management Important? */}
      <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold">
            <Sprout className="w-5 h-5 text-blue-600" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Why is Agricultural Water Management Important?
          </h2>
        </div>
        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
          Agriculture accounts for roughly 70% of global freshwater withdrawals.
          With increasing groundwater depletion, unpredictable monsoon rhythms,
          and growing food security demands, water can no longer be treated as an
          infinite resource.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
            <h4 className="font-bold text-slate-900 text-sm">Aquifer Preservation</h4>
            <p className="text-xs text-slate-600 mt-1">
              Slows the alarming drop in underground water tables across agrarian belts.
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
            <h4 className="font-bold text-slate-900 text-sm">Energy & Cost Savings</h4>
            <p className="text-xs text-slate-600 mt-1">
              Reduces diesel and electric pumping hours, saving significant capital for growers.
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
            <h4 className="font-bold text-slate-900 text-sm">Climate Resilience</h4>
            <p className="text-xs text-slate-600 mt-1">
              Prepares farms to endure dry spells and drought conditions with conserved supplies.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: The Danger Zone: Over-irrigation vs. Under-irrigation */}
      <section className="space-y-6">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Balancing the Water Equation
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Both extremes harm crop productivity and long-term soil viability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Over-irrigation */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-200/90 shadow-sm space-y-4">
            <div className="flex items-center gap-2.5 text-amber-800">
              <div className="p-2 rounded-xl bg-amber-100">
                <AlertTriangle className="w-5 h-5 text-amber-700" />
              </div>
              <h3 className="text-lg font-bold">Problems with Over-Irrigation</h3>
            </div>
            <p className="text-xs text-slate-600">
              Applying more water than soil field capacity can hold creates severe agronomic hazards:
            </p>
            <div className="space-y-3 pt-1">
              {overIrrigationProblems.map((prob) => (
                <div
                  key={prob.title}
                  className="p-3.5 rounded-xl bg-amber-50/60 border border-amber-200/60"
                >
                  <p className="font-bold text-sm text-amber-950">{prob.title}</p>
                  <p className="text-xs text-amber-900 mt-0.5 leading-relaxed">
                    {prob.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Under-irrigation */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-red-200/90 shadow-sm space-y-4">
            <div className="flex items-center gap-2.5 text-red-800">
              <div className="p-2 rounded-xl bg-red-100">
                <TrendingDown className="w-5 h-5 text-red-700" />
              </div>
              <h3 className="text-lg font-bold">Problems with Under-Irrigation</h3>
            </div>
            <p className="text-xs text-slate-600">
              Allowing the root zone to dry below permanent wilting levels causes irreversible trauma:
            </p>
            <div className="space-y-3 pt-1">
              {underIrrigationProblems.map((prob) => (
                <div
                  key={prob.title}
                  className="p-3.5 rounded-xl bg-red-50/60 border border-red-200/60"
                >
                  <p className="font-bold text-sm text-red-950">{prob.title}</p>
                  <p className="text-xs text-red-900 mt-0.5 leading-relaxed">
                    {prob.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Benefits */}
      <section className="bg-gradient-to-br from-emerald-900 via-teal-900 to-slate-900 rounded-3xl p-6 sm:p-10 text-white shadow-xl space-y-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">
            System Value
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold mt-1 text-white">
            Benefits of Smart Water Management
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm mt-1">
            How systematic decision support transforms farming outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {systemBenefits.map((b) => (
            <div
              key={b.title}
              className="p-4 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-xs flex items-start gap-3"
            >
              <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />
              <div>
                <h4 className="font-bold text-sm text-white">{b.title}</h4>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  {b.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 5: Mandatory Disclaimer */}
      <section className="p-6 sm:p-8 rounded-3xl bg-amber-50 border-2 border-amber-300 shadow-sm flex flex-col sm:flex-row items-start gap-4">
        <div className="p-3 rounded-2xl bg-amber-500 text-white shrink-0">
          <ShieldAlert className="w-6 h-6" />
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-bold text-amber-950">
            Academic & Educational Disclaimer
          </h3>
          <p className="text-sm text-amber-900 leading-relaxed font-medium">
            &ldquo;This application provides educational recommendations and
            should not replace advice from qualified agricultural experts or
            local extension services.&rdquo;
          </p>
          <p className="text-xs text-amber-800/90 leading-relaxed">
            Local soil mineralogy, microclimates, weather forecasts, and crop
            phenology may demand fine adjustments. Always cross-reference with
            regional Krishi Vigyan Kendras (KVK), state agricultural
            universities, and licensed soil testing laboratories.
          </p>
        </div>
      </section>

      {/* Bottom CTA */}
      <div className="text-center pt-4">
        <Link
          href="/recommendation"
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-lg shadow-emerald-600/30 transition-all hover:scale-102"
        >
          <span>Calculate Water Recommendation</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
