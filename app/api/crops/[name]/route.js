import { NextResponse } from "next/server";
import { getCropByName } from "@/data/crops";

export async function GET(request, context) {
  try {
    const params = await context.params;
    const { name } = params;

    if (!name) {
      return NextResponse.json(
        {
          success: false,
          message: "Crop name parameter is required."
        },
        { status: 400 }
      );
    }

    const decodedName = decodeURIComponent(name);
    const crop = getCropByName(decodedName);

    if (!crop) {
      return NextResponse.json(
        {
          success: false,
          message: `Crop "${decodedName}" not found.`
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: crop
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "An internal error occurred while fetching the crop."
      },
      { status: 500 }
    );
  }
}
