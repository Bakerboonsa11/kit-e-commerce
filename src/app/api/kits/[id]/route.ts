import { NextRequest } from 'next/server';
import dbConnect from '@/lib/db';
import Kit from '../../../../models/product';
import { updateOne, deleteOne, getOne } from '../../../../lib/factoryfun';

// GET: Get a single Kit by ID
export const GET = async (req: NextRequest, context: { params: { id: string } }) => {
  await dbConnect();
  return getOne(Kit)(req, context.params); // ✅ use context.params, not destructuring
};

// PATCH: Update a Kit
export const PATCH = async (req: NextRequest, context: { params: { id: string } }) => {
  await dbConnect();
  return updateOne(Kit)(req, context.params);
};

// DELETE: Delete a Kit
export const DELETE = async (req: NextRequest, context: { params: { id: string } }) => {
  await dbConnect();
  return deleteOne(Kit)(req, context.params);
};
