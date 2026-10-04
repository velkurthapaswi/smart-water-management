import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Smart Water Management System - Intelligent Irrigation Decision Support",
  description:
    "Smart irrigation recommendations for efficient water use, soil-specific advice, and crop water management for sustainable agriculture.",
  keywords: [
    "water management",
    "smart irrigation",
    "crop water requirement",
    "drip irrigation",
    "soil moisture",
    "sustainable farming",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 antialiased selection:bg-emerald-500 selection:text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
