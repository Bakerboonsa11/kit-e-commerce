import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Kit from '@/models/product';
import { updateOne, deleteOne, getOne } from '@/lib/factoryfun';

export async function GET(req: NextRequest, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params;
  await dbConnect();
  return getOne(Kit)(req, { id });
}

export async function PATCH(req: NextRequest, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params;
  await dbConnect();
  return updateOne(Kit)(req, { id });
}

export async function DELETE(req: NextRequest, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params;
  await dbConnect();
  return deleteOne(Kit)(req, { id });
}
