import { NextRequest } from 'next/server';
import dbConnect from '@/lib/db';
import Kit from '@/models/product';
import { updateOne, deleteOne, getOne } from '@/lib/factoryfun';

// GET: Get a single Kit by ID
export const GET = async (req: NextRequest, { params }: { params: { id: string } }) => {
  await dbConnect();
  return getOne(Kit)(req, params); // Using the ID from dynamic route
};

// PATCH: Update a Kit by ID
export const PATCH = async (req: NextRequest, { params }: { params: { id: string } }) => {
  await dbConnect();
  return updateOne(Kit)(req, params); // Update using factory function
};

// DELETE: Delete a Kit by ID
export const DELETE = async (req: NextRequest, { params }: { params: { id: string } }) => {
  await dbConnect();
  return deleteOne(Kit)(req, params); // Delete using factory function
};
