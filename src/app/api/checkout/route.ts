import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';
import dbConnect from '@/lib/db';
import Payment from '@/models/payment';
import { getServerSession } from 'next-auth';
import { authOptions } from "@/lib/authOptions";

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  const email = session?.user?.email;
  try {
    const body = await req.json();
    const {  amount, first_name, phone_number,productIds} = body;

    const tx_ref = `tx-${Date.now()}`;

    await dbConnect();
    const doc=await Payment.create({ email, amount, tx_ref,productIds });
     console.log("payment data saved is ",doc)
    const chapaRes = await axios.post(
      'https://api.chapa.co/v1/transaction/initialize',
      {
        email,
        amount,
        currency: 'ETB',
        first_name,
        phone_number,
        tx_ref,
        return_url: `${process.env.NEXTAUTH_URL}/verify?tx_ref=${tx_ref}`,
      },
      
      {
        headers: {
          Authorization: `Bearer ${process.env.CHAPA_SECRET_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    return NextResponse.json({
      checkout_url: chapaRes.data.data.checkout_url,
    });
  } catch (err: any) {
    console.error('Checkout error:', err.response?.data || err.message);
    return NextResponse.json(
      { error: 'Error initializing payment' },
      { status: 500 }
    );
  }
}
