import { NextRequest } from 'next/server';
import dbConnect from '@/lib/db';
import Kit from '@/models/product';
import { updateOne, deleteOne, getOne } from '@/lib/factoryfun';

// GET: Get a single Kit by ID
export async function GET(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  await dbConnect();
  const params = await context.params;
  return getOne(Kit)(req, params);
}

// PATCH: Update a Kit by ID
export async function PATCH(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  await dbConnect();
  const params = await context.params;
  return updateOne(Kit)(req, params);
}

// DELETE: Delete a Kit by ID
export async function DELETE(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  await dbConnect();
  const params=await context.params
  return deleteOne(Kit)(req, params);
}
