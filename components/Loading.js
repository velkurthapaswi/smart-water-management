import { Droplets } from "lucide-react";

export default function Loading({ message = "Generating recommendation..." }) {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
      <div className="relative mb-6">
        <div className="w-16 h-16 rounded-full border-4 border-emerald-200 border-t-emerald-600 animate-spin" />
        <div className="absolute inset-0 flex items-center justify-center">
          <Droplets className="w-6 h-6 text-emerald-600 animate-pulse" />
        </div>
      </div>
      <p className="text-lg font-semibold text-slate-800 tracking-tight">
        {message}
      </p>
      <p className="text-sm text-slate-500 mt-1 max-w-sm">
        Analyzing crop requirements, soil moisture dynamics, and seasonal factors...
      </p>
    </div>
  );
}
