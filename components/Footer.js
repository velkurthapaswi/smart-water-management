import Link from "next/link";
import { Droplets, ShieldAlert, Heart, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 no-print mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white shadow-md">
                <Droplets className="w-5 h-5 text-cyan-200" />
              </div>
              <span className="font-bold text-lg text-white tracking-tight">
                Smart Water Management System
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              An educational agricultural decision-support application designed to
              empower farmers and students with optimized irrigation recommendations,
              soil-specific guidance, and water conservation best practices.
            </p>
            <div className="flex flex-wrap gap-2 text-xs text-slate-400 pt-1">
              <span className="px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700">
                Next.js 15 App Router
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700">
                Tailwind CSS
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700">
                Zero External DB
              </span>
              <span className="px-2.5 py-1 rounded-md bg-emerald-950/80 text-emerald-400 border border-emerald-800">
                Vercel Ready
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/recommendation"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Water Recommendation
                </Link>
              </li>
              <li>
                <Link
                  href="/crops"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Explore Crops
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Analytics Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-emerald-400 transition-colors"
                >
                  About & Science
                </Link>
              </li>
            </ul>
          </div>

          {/* Educational Disclaimer */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 flex items-center gap-1.5">
              <ShieldAlert className="w-4 h-4 text-amber-400" />
              <span>Academic Notice</span>
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed bg-slate-800/60 p-3.5 rounded-xl border border-slate-700/60">
              This application provides educational decision-support recommendations.
              It should not replace on-ground advice from qualified agronomists,
              soil testing laboratories, or local agricultural extension services.
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>
            © {new Date().getFullYear()} Smart Water Management System. Designed for
            sustainable agriculture.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/about" className="hover:text-slate-400">
              Disclaimer
            </Link>
            <span>•</span>
            <Link href="/crops" className="hover:text-slate-400">
              Crop Database
            </Link>
            <span>•</span>
            <Link href="/dashboard" className="hover:text-slate-400">
              Water Tips
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
