import { NextRequest } from 'next/server';
import dbConnect from '@/lib/db';
import userModel from '../../../models/user';
import { createOne, getAll } from '../../../lib/factoryfun';

export const GET = async (req: NextRequest) => {
  await dbConnect();
  return getAll(userModel)(req);
};

export const POST = async (req: NextRequest) => {
  await dbConnect();
  return createOne(userModel)(req);
};

