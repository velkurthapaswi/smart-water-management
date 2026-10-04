import { NextResponse } from "next/server";
import { CROPS } from "@/data/crops";

export async function GET() {
  try {
    return NextResponse.json({
      success: true,
      total: CROPS.length,
      data: CROPS
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to retrieve crops list"
      },
      { status: 500 }
    );
  }
}
