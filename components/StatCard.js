export default function StatCard({
  title,
  value,
  subtitle,
  icon: Icon,
  badgeText,
  colorScheme = "emerald", // emerald, blue, amber, slate
}) {
  const colorMap = {
    emerald: {
      bg: "bg-emerald-50/70 border-emerald-200/80",
      iconBg: "bg-emerald-600 text-white shadow-emerald-600/20",
      valueColor: "text-emerald-950",
      badge: "bg-emerald-100 text-emerald-800",
    },
    blue: {
      bg: "bg-blue-50/70 border-blue-200/80",
      iconBg: "bg-blue-600 text-white shadow-blue-600/20",
      valueColor: "text-blue-950",
      badge: "bg-blue-100 text-blue-800",
    },
    amber: {
      bg: "bg-amber-50/70 border-amber-200/80",
      iconBg: "bg-amber-600 text-white shadow-amber-600/20",
      valueColor: "text-amber-950",
      badge: "bg-amber-100 text-amber-800",
    },
    cyan: {
      bg: "bg-cyan-50/70 border-cyan-200/80",
      iconBg: "bg-cyan-600 text-white shadow-cyan-600/20",
      valueColor: "text-cyan-950",
      badge: "bg-cyan-100 text-cyan-800",
    },
    slate: {
      bg: "bg-slate-50 border-slate-200",
      iconBg: "bg-slate-700 text-white shadow-slate-700/20",
      valueColor: "text-slate-900",
      badge: "bg-slate-200 text-slate-800",
    },
  };

  const scheme = colorMap[colorScheme] || colorMap.emerald;

  return (
    <div
      className={`p-6 rounded-2xl border transition-all duration-200 hover:shadow-md ${scheme.bg}`}
    >
      <div className="flex items-center justify-between mb-4">
        {Icon && (
          <div
            className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-md ${scheme.iconBg}`}
          >
            <Icon className="w-6 h-6" />
          </div>
        )}
        {badgeText && (
          <span
            className={`text-xs font-semibold px-2.5 py-1 rounded-full ${scheme.badge}`}
          >
            {badgeText}
          </span>
        )}
      </div>
      <div>
        <p className="text-sm font-medium text-slate-600 mb-1">{title}</p>
        <p className={`text-3xl font-extrabold tracking-tight ${scheme.valueColor}`}>
          {value}
        </p>
        {subtitle && (
          <p className="text-xs text-slate-500 mt-2 leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
