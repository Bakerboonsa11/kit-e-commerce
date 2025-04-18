import { NextRequest, NextResponse } from "next/server";
import AppFeatures from "@/lib/appFeatures";
import dbConnect from "@/lib/db";
import payment from "@/models/payment";

// GET /api/payment?status=success&sort=createdAt
export async function GET(req: NextRequest) {
  try {
    await dbConnect(); // Make sure DB is connected

    // Get query parameters
    const url = new URL(req.url);
    const queryParams = Object.fromEntries(url.searchParams.entries());

    // Use AppFeatures for filtering, sorting, etc.
    const features = new AppFeatures(payment.find(), queryParams)
      .filter()
      .sort()
      .fields();
      // .pagination(); // Uncomment if pagination is implemented

    const instanceFiltered = await features.databaseQuery;

    return NextResponse.json({
      status: "success",
      length: instanceFiltered.length,
      data: instanceFiltered,
    });
  } catch (err) {
    return NextResponse.json(
      {
        status: "fail",
        message: (err as Error).message,
      },
      { status: 500 }
    );
  }
}
