import { NextRequest, NextResponse } from "next/server";
import AppFeatures from "@/lib/appFeatures";
import dbConnect from "@/lib/db";
import payment from "@/models/payment";
import { updateOne } from "@/lib/factoryfun";


// GET /api/payment?status=success&sort=createdAt
export const PATCH = async (req: NextRequest, { params }: { params: { id: string } }) => {
  return updateOne(payment)(req, params);
};

