import { NextRequest } from 'next/server';
import dbConnect from '@/lib/db';
import Kit from '@/models/product';
import { updateOne, deleteOne, getOne } from '@/lib/factoryfun';

// GET: Get a single Kit by ID
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  await dbConnect();
  return getOne(Kit)(req, params);
}

// PATCH: Update a Kit by ID
export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  await dbConnect();
  return updateOne(Kit)(req, params);
}

// DELETE: Delete a Kit by ID
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  await dbConnect();
  return deleteOne(Kit)(req, params);
}
