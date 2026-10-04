// Central crop and agricultural water management dataset
// Educational decision-support dataset

export const CROPS = [
  {
    id: "rice",
    name: "Rice",
    category: "Cereal / Grain",
    waterRequirement: "High",
    suitableSoils: ["Clay Soil", "Loamy Soil"],
    seasons: ["Kharif"],
    seasonsDisplay: "Kharif",
    irrigationMethod: "Controlled irrigation / suitable surface irrigation",
    frequency: "Frequent monitoring and irrigation depending on soil moisture",
    tips: "Avoid unnecessary standing water where not required and maintain proper field drainage",
    description: "A staple grain crop requiring significant water management, primarily cultivated during the Kharif season.",
    growthDurationDays: "120 - 150 days",
    criticalStages: "Tillering, panicle initiation, flowering, and grain milk stage",
    icon: "🌾"
  },
  {
    id: "wheat",
    name: "Wheat",
    category: "Cereal / Grain",
    waterRequirement: "Medium",
    suitableSoils: ["Loamy Soil"],
    seasons: ["Rabi"],
    seasonsDisplay: "Rabi",
    irrigationMethod: "Sprinkler / Furrow",
    frequency: "Moderate irrigation based on crop stage and soil moisture",
    tips: "Avoid excessive irrigation",
    description: "A major cool-season cereal crop grown in the Rabi season with moderate moisture demands.",
    growthDurationDays: "110 - 140 days",
    criticalStages: "Crown root initiation (CRI), tillering, flowering, and milking stages",
    icon: "🌾"
  },
  {
    id: "maize",
    name: "Maize",
    category: "Cereal / Grain",
    waterRequirement: "Medium",
    suitableSoils: ["Loamy Soil"],
    seasons: ["Kharif", "Rabi"],
    seasonsDisplay: "Kharif / Rabi",
    irrigationMethod: "Drip / Sprinkler",
    frequency: "Moderate irrigation",
    tips: "Avoid waterlogging",
    description: "Versatile cereal crop requiring well-drained loamy soil and steady moderate moisture.",
    growthDurationDays: "90 - 110 days",
    criticalStages: "Tasseling and silking (extreme sensitivity to water deficit)",
    icon: "🌽"
  },
  {
    id: "cotton",
    name: "Cotton",
    category: "Cash / Fiber Crop",
    waterRequirement: "Medium",
    suitableSoils: ["Black Soil", "Loamy Soil"],
    seasons: ["Kharif"],
    seasonsDisplay: "Kharif",
    irrigationMethod: "Drip",
    frequency: "Moderate irrigation",
    tips: "Avoid excessive watering",
    description: "Leading fiber crop well suited to deep black soils with moderate water demand.",
    growthDurationDays: "150 - 180 days",
    criticalStages: "Square formation, flowering, and boll development",
    icon: "☁️"
  },
  {
    id: "groundnut",
    name: "Groundnut",
    category: "Oilseed / Legume",
    waterRequirement: "Medium",
    suitableSoils: ["Sandy Soil", "Loamy Soil"],
    seasons: ["Kharif", "Summer"],
    seasonsDisplay: "Kharif / Summer",
    irrigationMethod: "Sprinkler / Drip",
    frequency: "Moderate irrigation",
    tips: "Avoid waterlogging",
    description: "An important oilseed and legume crop favoring well-drained sandy or loamy soils.",
    growthDurationDays: "100 - 120 days",
    criticalStages: "Flowering, peg penetration into soil, and pod development",
    icon: "🥜"
  },
  {
    id: "tomato",
    name: "Tomato",
    category: "Vegetable / Horticulture",
    waterRequirement: "Medium",
    suitableSoils: ["Loamy Soil"],
    seasons: ["Kharif", "Rabi", "Summer"],
    seasonsDisplay: "Multiple seasons depending on region",
    irrigationMethod: "Drip",
    frequency: "Regular moderate irrigation",
    tips: "Keep soil moisture reasonably uniform",
    description: "High-value horticultural crop sensitive to both water stress and waterlogging.",
    growthDurationDays: "90 - 120 days",
    criticalStages: "Vegetative establishment, flowering, and fruit expansion",
    icon: "🍅"
  },
  {
    id: "sugarcane",
    name: "Sugarcane",
    category: "Cash Crop",
    waterRequirement: "High",
    suitableSoils: ["Loamy Soil", "Clay Soil"],
    seasons: ["Kharif", "Rabi", "Summer"],
    seasonsDisplay: "Varies by region",
    irrigationMethod: "Drip / Furrow",
    frequency: "Regular irrigation with monitoring",
    tips: "Prefer efficient irrigation where possible",
    description: "Long-duration tropical cash crop requiring substantial water throughout its formative phases.",
    growthDurationDays: "300 - 365 days",
    criticalStages: "Formative shoot stage and grand growth period",
    icon: "🎋"
  },
  {
    id: "onion",
    name: "Onion",
    category: "Vegetable / Horticulture",
    waterRequirement: "Medium",
    suitableSoils: ["Loamy Soil"],
    seasons: ["Rabi", "Kharif"],
    seasonsDisplay: "Rabi / Kharif depending on region",
    irrigationMethod: "Drip",
    frequency: "Moderate and regular irrigation",
    tips: "Avoid waterlogging",
    description: "Shallow-rooted vegetable crop requiring precise moisture levels and good drainage.",
    growthDurationDays: "100 - 130 days",
    criticalStages: "Bulb development and bulb enlargement",
    icon: "🧅"
  },
  {
    id: "potato",
    name: "Potato",
    category: "Tuber / Vegetable",
    waterRequirement: "Medium",
    suitableSoils: ["Sandy Soil", "Loamy Soil"],
    seasons: ["Rabi"],
    seasonsDisplay: "Rabi",
    irrigationMethod: "Drip / Sprinkler",
    frequency: "Moderate irrigation",
    tips: "Avoid excessive water",
    description: "Cool-season tuber crop highly responsive to sprinkler or drip irrigation.",
    growthDurationDays: "80 - 110 days",
    criticalStages: "Stolon initiation and tuber bulking",
    icon: "🥔"
  },
  {
    id: "pulses",
    name: "Pulses",
    category: "Legume / Pulse",
    waterRequirement: "Low",
    suitableSoils: ["Loamy Soil"],
    seasons: ["Kharif", "Rabi"],
    seasonsDisplay: "Kharif / Rabi depending on pulse",
    irrigationMethod: "Light irrigation",
    frequency: "Limited irrigation based on soil moisture",
    tips: "Avoid unnecessary watering",
    description: "Drought-hardy legume crops that enrich soil nitrogen and require minimal water.",
    growthDurationDays: "70 - 100 days",
    criticalStages: "Flower bud initiation and pod development",
    icon: "🌱"
  },
  {
    id: "chilli",
    name: "Chilli",
    category: "Spices / Vegetable",
    waterRequirement: "Medium",
    suitableSoils: ["Loamy Soil", "Red Soil"],
    seasons: ["Kharif", "Rabi", "Summer"],
    seasonsDisplay: "Varies by region",
    irrigationMethod: "Drip",
    frequency: "Moderate regular irrigation",
    tips: "Avoid waterlogging",
    description: "High-value spice crop thriving in well-drained soils with precise drip irrigation.",
    growthDurationDays: "120 - 150 days",
    criticalStages: "Flowering and fruit set",
    icon: "🌶️"
  }
];

export const SOIL_DATA = {
  "Sandy Soil": {
    characteristics: "Drains quickly.",
    advice: "May require more frequent but controlled irrigation.",
    retention: "Low",
    percolation: "Fast",
    color: "#d97706"
  },
  "Clay Soil": {
    characteristics: "Holds water for longer.",
    advice: "Avoid excessive irrigation and waterlogging.",
    retention: "High",
    percolation: "Slow",
    color: "#78350f"
  },
  "Loamy Soil": {
    characteristics: "Generally has balanced drainage and water retention.",
    advice: "Follow standard crop-specific watering schedules; ideal for most agricultural crops.",
    retention: "Moderate to Balanced",
    percolation: "Moderate",
    color: "#15803d"
  },
  "Black Soil": {
    characteristics: "Has relatively high water-holding capacity.",
    advice: "Avoid unnecessary irrigation; retain deep moisture and monitor cracks during dry periods.",
    retention: "Very High",
    percolation: "Slow",
    color: "#1e293b"
  },
  "Red Soil": {
    characteristics: "Generally has lower water-holding capacity than heavy clay soils.",
    advice: "Irrigation should be managed according to crop and soil moisture.",
    retention: "Low to Moderate",
    percolation: "Moderately Fast",
    color: "#dc2626"
  }
};

export const WATER_AVAILABILITY_DATA = {
  "Low": {
    status: "Water availability is low.",
    badgeColor: "text-amber-700 bg-amber-50 border-amber-200",
    recommendations: [
      "Prefer water-efficient irrigation.",
      "Drip irrigation where suitable.",
      "Monitor soil moisture.",
      "Avoid unnecessary irrigation.",
      "Prioritize critical crop growth stages."
    ]
  },
  "Medium": {
    status: "Water availability is moderate.",
    badgeColor: "text-blue-700 bg-blue-50 border-blue-200",
    recommendations: [
      "Follow crop-specific irrigation.",
      "Monitor soil moisture regularly.",
      "Avoid over-irrigation.",
      "Use efficient irrigation methods."
    ]
  },
  "High": {
    status: "Water availability is high.",
    badgeColor: "text-emerald-700 bg-emerald-50 border-emerald-200",
    recommendations: [
      "Do not over-irrigate.",
      "Maintain proper drainage.",
      "Monitor soil moisture.",
      "Use water according to crop requirements."
    ]
  }
};

export const SEASONS = ["Kharif", "Rabi", "Summer"];
export const SOILS = Object.keys(SOIL_DATA);
export const WATER_LEVELS = Object.keys(WATER_AVAILABILITY_DATA);

export const WATER_SAVING_TIPS = [
  "Use drip irrigation where suitable.",
  "Check soil moisture before irrigation.",
  "Avoid unnecessary watering.",
  "Maintain proper drainage.",
  "Irrigate according to crop growth stage.",
  "Prefer irrigation during appropriate times to reduce losses."
];

// Helper to look up a crop
export function getCropByName(name) {
  if (!name) return null;
  const cleanName = name.trim().toLowerCase();
  return CROPS.find(
    (c) => c.name.toLowerCase() === cleanName || c.id.toLowerCase() === cleanName
  ) || null;
}

// Educational recommendation generator
export function generateRecommendation({ crop, soil, waterAvailability, season }) {
  const cropObj = getCropByName(crop);
  if (!cropObj) {
    throw new Error(`Crop "${crop}" is not recognized.`);
  }

  const soilObj = SOIL_DATA[soil];
  if (!soilObj) {
    throw new Error(`Soil "${soil}" is not recognized.`);
  }

  const waterObj = WATER_AVAILABILITY_DATA[waterAvailability];
  if (!waterObj) {
    throw new Error(`Water availability level "${waterAvailability}" is not recognized.`);
  }

  if (!SEASONS.includes(season)) {
    throw new Error(`Season "${season}" is not recognized. Valid options: ${SEASONS.join(", ")}`);
  }

  // Adjust irrigation method based on water availability & crop
  let recommendedIrrigationMethod = cropObj.irrigationMethod;
  if (waterAvailability === "Low") {
    if (cropObj.irrigationMethod.includes("Drip")) {
      recommendedIrrigationMethod = "High-efficiency Drip irrigation system with mulching";
    } else if (cropObj.irrigationMethod.includes("Sprinkler")) {
      recommendedIrrigationMethod = "Micro-sprinkler or targeted furrow with moisture conservation";
    } else {
      recommendedIrrigationMethod = "Alternate Wetting & Drying / Controlled targeted irrigation";
    }
  }

  // Frequency adjustments based on soil & water availability
  let wateringFrequency = cropObj.frequency;
  if (soil === "Sandy Soil") {
    wateringFrequency = "Frequent light irrigations (soil drains quickly; avoid heavy single applications)";
  } else if (soil === "Clay Soil" || soil === "Black Soil") {
    wateringFrequency = "Less frequent, deeper irrigations with extended drying intervals to prevent root waterlogging";
  }

  // Check seasonal alignment
  const isOptimalSeason =
    cropObj.seasons.includes(season) ||
    cropObj.seasonsDisplay.toLowerCase().includes(season.toLowerCase()) ||
    cropObj.seasonsDisplay.toLowerCase().includes("multiple") ||
    cropObj.seasonsDisplay.toLowerCase().includes("varies");

  const seasonalAdvice = isOptimalSeason
    ? `Suitable growing season: ${season} aligns well with ${cropObj.name} cultivation (${cropObj.seasonsDisplay}).`
    : `Note: ${season} may require supplementary climate protection or altered irrigation for ${cropObj.name}, which typically prefers ${cropObj.seasonsDisplay}.`;

  // Soil compatibility advice
  const isOptimalSoil = cropObj.suitableSoils.includes(soil);
  const soilCompatibilityAdvice = isOptimalSoil
    ? `${soil} is ideally suited for ${cropObj.name}. ${soilObj.characteristics} ${soilObj.advice}`
    : `${cropObj.name} typically performs best in ${cropObj.suitableSoils.join(" or ")}. Since you are using ${soil}, note that it ${soilObj.characteristics.toLowerCase()} ${soilObj.advice}`;

  // Water management synthesized advice
  const waterManagementAdvice = [
    `Current resource profile: ${waterObj.status}`,
    `Crop water demand for ${cropObj.name} is classified as ${cropObj.waterRequirement}.`,
    ...waterObj.recommendations.map(r => `• ${r}`)
  ].join("\n");

  return {
    crop: cropObj.name,
    cropDetails: {
      category: cropObj.category,
      icon: cropObj.icon,
      growthDuration: cropObj.growthDurationDays,
      criticalStages: cropObj.criticalStages
    },
    soilType: soil,
    waterAvailability: waterAvailability,
    season: season,
    waterRequirement: cropObj.waterRequirement,
    irrigationMethod: recommendedIrrigationMethod,
    wateringFrequency: wateringFrequency,
    waterManagementAdvice: waterManagementAdvice,
    waterAvailabilityStatus: waterObj.status,
    waterAvailabilityTips: waterObj.recommendations,
    waterSavingTips: cropObj.tips,
    generalWaterSavingTips: WATER_SAVING_TIPS,
    suitableSeason: cropObj.seasonsDisplay,
    seasonalAdvice: seasonalAdvice,
    soilAdvice: soilCompatibilityAdvice,
    soilCharacteristics: soilObj.characteristics,
    disclaimer: "This application provides educational recommendations and should not replace advice from qualified agricultural experts or local extension services."
  };
}
