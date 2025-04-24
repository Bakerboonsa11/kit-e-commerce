// import { NextRequest, NextResponse } from "next/server";
// import AppFeatures from "@/lib/appFeatures";
// import dbConnect from "@/lib/db";
// import payment from "@/models/payment";
// import { updateOne } from "@/lib/factoryfun";


// // GET /api/payment?status=success&sort=createdAt
// export const PATCH = async (req: NextRequest, { params }: { params: { id: string } }) => {
//   return updateOne(payment)(req, params);
// };


import { NextRequest } from "next/server";
import dbConnect from "@/lib/db";
import payment from "@/models/payment";
import { updateOne } from "@/lib/factoryfun";

// PATCH /api/payment/[id]
// export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
//   await dbConnect();
//   return updateOne(payment)(req, params);
// }


export async function PATCH(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  await dbConnect();
  const params = await context.params;
  return updateOne(payment)(req, params);
}
