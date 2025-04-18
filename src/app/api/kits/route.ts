import { NextRequest } from 'next/server';
import dbConnect from '@/lib/db';
import Kit from '../../../models/product';
import { createMany,createOne,deleteOne } from '../../../lib/factoryfun';

// GET: Get a single Kit by ID
// POST: Create multiple Kits
export const POST = async (req: NextRequest) => {
  await dbConnect();
  return createOne(Kit)(req);
};

