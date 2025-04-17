import { NextRequest } from 'next/server';
import dbConnect from '@/lib/db';
import userModel from '../../../../models/user';
import { updateOne, deleteOne,getOne } from '../../../../lib/factoryfun';

export const DELETE = async (req: NextRequest, { params }: { params: { id: string } }) => {
    console.log("the delete is hitted")
  return deleteOne(userModel)(req, params);
};

export const PATCH = async (req: NextRequest, { params }: { params: { id: string } }) => {
  return updateOne(userModel)(req, params);
};

export const GET = async (req: NextRequest, context: { params: { id: string } }) => {
  await dbConnect();
  console.log("entered a get one ")
  return getOne(userModel)(req, context.params); // ✅ use context.params, not destructuring
};