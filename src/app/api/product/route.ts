

// /app/api/kits/route.ts
import { NextRequest } from 'next/server';
import dbConnect from '@/lib/db';
import Kit from '@/models/product';
import { createOne, getAll } from '../../../lib/factoryfun';

export const GET = async (req: NextRequest) => {
  await dbConnect();
  return getAll(Kit)(req);
};

export const POST = async (req: NextRequest) => {
  await dbConnect();
  return createOne(Kit)(req);
};


 