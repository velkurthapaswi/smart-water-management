import { NextResponse } from "next/server";
import {
  generateRecommendation,
  getCropByName,
  SOILS,
  SEASONS,
  WATER_LEVELS
} from "@/data/crops";

export async function POST(request) {
  try {
    let body;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid JSON request payload."
        },
        { status: 400 }
      );
    }

    const { crop, soil, waterAvailability, season } = body || {};

    // Validate required fields
    const missing = [];
    if (!crop) missing.push("crop");
    if (!soil) missing.push("soil");
    if (!waterAvailability) missing.push("waterAvailability");
    if (!season) missing.push("season");

    if (missing.length > 0) {
      return NextResponse.json(
        {
          success: false,
          message: `Missing required field(s): ${missing.join(", ")}. All fields are required.`
        },
        { status: 400 }
      );
    }

    // Validate crop
    const cropObj = getCropByName(crop);
    if (!cropObj) {
      return NextResponse.json(
        {
          success: false,
          message: `Invalid crop: "${crop}". Please select a supported crop.`
        },
        { status: 400 }
      );
    }

    // Validate soil
    if (!SOILS.includes(soil)) {
      return NextResponse.json(
        {
          success: false,
          message: `Invalid soil type: "${soil}". Allowed soils: ${SOILS.join(", ")}.`
        },
        { status: 400 }
      );
    }

    // Validate water availability
    if (!WATER_LEVELS.includes(waterAvailability)) {
      return NextResponse.json(
        {
          success: false,
          message: `Invalid water availability: "${waterAvailability}". Allowed values: ${WATER_LEVELS.join(", ")}.`
        },
        { status: 400 }
      );
    }

    // Validate season
    if (!SEASONS.includes(season)) {
      return NextResponse.json(
        {
          success: false,
          message: `Invalid season: "${season}". Allowed seasons: ${SEASONS.join(", ")}.`
        },
        { status: 400 }
      );
    }

    // Generate recommendation
    const recommendation = generateRecommendation({
      crop: cropObj.name,
      soil,
      waterAvailability,
      season
    });

    return NextResponse.json({
      success: true,
      data: recommendation
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error.message || "Failed to generate recommendation."
      },
      { status: 500 }
    );
  }
}
