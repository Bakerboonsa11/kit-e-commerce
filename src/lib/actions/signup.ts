// lib/actions/authActions.ts
'use server';

import dbConnect from '../../lib/db';
import UserModel from '../../models/user';
import bcrypt from 'bcryptjs';
import { signIn } from 'next-auth/react';

type SignupProps = {
  name: string;
  email: string;
  password: string;
};

export async function handleSignup({ name, email, password }: SignupProps) {
  try {
    await dbConnect();

    const existingUser = await UserModel.findOne({ email });

    if (existingUser) {
      return { error: 'Email is already registered.' };
    }

    // Create user (password will be hashed via schema middleware)
    const user = await UserModel.create({ name, email, password });

    // Auto-login the user via next-auth credentials provider
   

    

    return { success: true };
  } catch (error: any) {
    console.error('Signup error:', error.message);
    return { error: 'Server error. Please try again later.' };
  }
}
