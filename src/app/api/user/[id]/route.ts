import { NextRequest } from 'next/server';
import dbConnect from '@/lib/db';
import userModel from '../../../../models/user';
import { updateOne, deleteOne } from '../../../../lib/factoryfun';

export const DELETE = async (req: NextRequest, { params }: { params: { id: string } }) => {
  return deleteOne(userModel)(req, params);
};

export const PATCH = async (req: NextRequest, { params }: { params: { id: string } }) => {
  return updateOne(userModel)(req, params);
};
