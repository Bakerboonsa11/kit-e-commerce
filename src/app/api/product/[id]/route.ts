import { NextRequest } from 'next/server';
import dbConnect from '@/lib/db';
import Kit from '@/models/product';
import { updateOne, deleteOne, getOne } from '@/lib/factoryfun';

// GET: Get a single Kit by ID
export async function GET(
  req: NextRequest,
  context: { params: { id: string } }
) {
  await dbConnect();
  return getOne(Kit)(req, context.params);
}

// PATCH: Update a Kit by ID
export async function PATCH(
  req: NextRequest,
  context: { params: { id: string } }
) {
  await dbConnect();
  return updateOne(Kit)(req, context.params);
}

// DELETE: Delete a Kit by ID
export async function DELETE(
  req: NextRequest,
  context: { params: { id: string } }
) {
  await dbConnect();
  return deleteOne(Kit)(req, context.params);
}
