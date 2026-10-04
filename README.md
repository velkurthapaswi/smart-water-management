# SMART WATER MANAGEMENT SYSTEM
**Intelligent Agricultural Irrigation Decision-Support System**

A complete, production-ready, full-stack Next.js 15 application designed to help farmers, agronomists, and agricultural students determine optimal water management protocols, irrigation frequencies, and soil conservation strategies based on crop species, soil dynamics, available water resources, and growing seasons.

---

## 🌿 Project Description

Water is the single most critical input in agricultural production, yet over 70% of freshwater withdrawals worldwide suffer from inefficient application methods. The **Smart Water Management System** serves as an educational decision-support platform that transforms static agronomic rules into real-time, actionable irrigation schedules. 

By analyzing four core parameters—**Crop**, **Soil Type**, **Water Availability**, and **Season**—the system dynamically determines:
1. Crop water requirements (Low, Medium, High).
2. Recommended irrigation technologies (Drip, Sprinkler, Furrow, Controlled Alternate Wetting & Drying).
3. Calibrated watering frequency adapted to soil drainage characteristics.
4. Comprehensive water-saving agronomic guidance and critical growth stage advisories.

> **Academic Notice:** This application provides educational recommendations and should not replace on-ground advice from qualified agricultural experts or local extension services.

---

## ✨ Features

- **Decision-Support Recommendation Engine (`/recommendation`)**:
  - Interactive multi-parameter form with strict validation.
  - Real-time calculations via Next.js REST API routes.
  - Complete output card displaying water requirement, irrigation method, soil drainage advice, frequency, and water-saving tips.
  - Printable / Export to PDF capability with dedicated print stylesheets.
  - Scenario re-calculator and URL query parameter pre-selection (`?crop=Rice`).

- **Agronomic Crop Database (`/crops`)**:
  - Comprehensive index of 11 major field and horticultural crops (Rice, Wheat, Maize, Cotton, Groundnut, Tomato, Sugarcane, Onion, Potato, Pulses, Chilli).
  - Instant live search by name, soil affinity, irrigation method, or season.
  - Filter tabs by water requirement: *All*, *Low Water*, *Medium Water*, and *High Water*.
  - Interactive modal dialogs detailing growth duration, moisture-critical growth stages, and water-saving tips.

- **Analytics Dashboard (`/dashboard`)**:
  - KPI Stat Cards: Total Crops, Low Water Crops, Medium Water Crops, High Water Crops.
  - Responsive visual charts (CSS/SVG) displaying crop water intensity distribution and soil compatibility breakdown.
  - The 6 Standard Water-Saving Operational Directives for farmers.

- **Educational & Scientific Foundation (`/about`)**:
  - Comprehensive explanation of agricultural water management.
  - Agronomic dangers of over-irrigation (waterlogging, nutrient leaching, fungal pathogens).
  - Agronomic risks of under-irrigation (wilting, stomatal closure, yield collapse).
  - Core sustainability and economic benefits.
  - Formal academic disclaimer.

- **Next.js App Router API**:
  - `GET /api/crops`: Fetches all crops as JSON.
  - `GET /api/crops/[name]`: Fetches a single crop by name (case-insensitive).
  - `POST /api/recommendation`: Validates inputs and returns tailored irrigation plans.

---

## 🛠️ Technology Used

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router, Turbopack, Server & Client Components)
- **Language**: JavaScript (ES6+ only, no TypeScript compilation bottlenecks)
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with responsive mobile-first architecture
- **Icons**: [Lucide React](https://lucide.dev/)
- **Architecture**: Single unified codebase, 100% serverless, zero external database requirements (Vercel-native)

---

## 📁 Folder Structure

```
smart-water-management/
│
├── app/
│   ├── layout.js                     # Root layout with Navbar and Footer
│   ├── page.js                       # Home landing page with feature cards
│   ├── globals.css                   # Tailwind CSS styling and print media rules
│   │
│   ├── recommendation/
│   │   └── page.js                   # Water recommendation calculator form & results
│   ├── crops/
│   │   └── page.js                   # Crop catalog with instant search & filter tabs
│   ├── dashboard/
│   │   └── page.js                   # Analytics stats, visual charts & conservation tips
│   ├── about/
│   │   └── page.js                   # Educational overview, risks & disclaimer
│   │
│   └── api/
│       ├── crops/
│       │   └── route.js              # GET /api/crops
│       ├── crops/[name]/
│       │   └── route.js              # GET /api/crops/[name]
│       └── recommendation/
│           └── route.js              # POST /api/recommendation
│
├── components/
│   ├── Navbar.js                     # Responsive navigation with mobile hamburger
│   ├── Footer.js                     # Educational footer with quick links
│   ├── CropCard.js                   # Reusable crop profile card
│   ├── CropDetailModal.js            # Detailed agronomic modal view
│   ├── RecommendationCard.js         # Comprehensive recommendation output report
│   ├── StatCard.js                   # Reusable KPI dashboard card
│   └── Loading.js                    # Animated spinner & status indicator
│
├── data/
│   └── crops.js                      # Central crop data, soil logic, & recommendation engine
│
├── src/
│   └── data/
│       └── crops.js                  # Alias re-export for alternative directory convention
│
├── public/                           # Static public assets
├── package.json                      # Project dependencies & scripts
├── next.config.mjs                   # Next.js configuration
└── README.md                         # Comprehensive documentation
```

---

## 🚀 Installation Steps

Ensure you have **Node.js 18+** installed on your machine.

1. **Clone or navigate to the project directory:**
   ```bash
   cd "Water management system"
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

---

## 💻 How to Run Locally

Start the Next.js local development server:

```bash
npm run dev
```

Open your browser and navigate to:
```
http://localhost:3000
```

The application will immediately hot-reload on edits.

---

## 🏗️ How to Build

To test production bundling and verify zero compilation errors:

```bash
npm run build
```

To run the optimized production server locally:

```bash
npm run start
```

---

## ☁️ How to Deploy to Vercel

This project is built 100% compliant with Vercel requirements:
- No localhost or hardcoded absolute server URLs are used (relative API endpoints only).
- No MongoDB, Firebase, or external database connection strings needed.
- No separate Express server process.

### Method 1: Deploy via Vercel CLI
```bash
npm install -g vercel
vercel
```

### Method 2: Deploy via Vercel Web Dashboard
1. Push this project repository to **GitHub**, **GitLab**, or **Bitbucket**.
2. Sign in to [Vercel](https://vercel.com).
3. Click **"Add New Project"** and select the repository.
4. Keep the default settings (Framework: Next.js, Build Command: `npm run build`, Output Directory: `.next`).
5. Click **"Deploy"**. The system will build and provide a live URL in seconds.

---

## ⚠️ Project Limitations

- **Educational Decision-Support Only**: Recommendations are derived from agronomic baselines and regional averages; they cannot detect sudden unseasonal precipitation or localized microclimate shifts without physical sensors.
- **Soil Classification**: Uses 5 primary agricultural soil textures (Sandy, Clay, Loamy, Black, Red); variations such as saline-alkaline or rocky soils are not modeled.
- **Static Baseline Data**: Current crop water thresholds are stored locally without live satellite evapotranspiration (ET₀) integrations.

---

## 🔮 Future Improvements

1. **IoT Sensor Integration**: Ingest real-time soil moisture and ambient humidity via LoRaWAN / ESP32 sensors.
2. **Weather API Sync**: Dynamically pull live 7-day rainfall forecasts to delay irrigation cycles automatically.
3. **Multilingual Support**: Add Hindi, Tamil, Telugu, Marathi, and regional language translations for grassroots farmers.
4. **Offline PWA Support**: Implement service workers to enable full offline lookup in rural areas with low network connectivity.
5. **Fertigation Calculator**: Provide fertilizer dosage schedules synchronized with drip irrigation events.

---

## 📜 License & Academic Integrity

Developed for academic and educational purposes under the MIT License.
#   s m a r t - w a t e r - m a n a g e m e n t  
 