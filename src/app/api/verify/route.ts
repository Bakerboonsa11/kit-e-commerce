import { NextRequest, NextResponse } from 'next/server';
import dbConnect  from '../../../lib/db';
import Payment from '../../../models/payment';
import axios from 'axios';

export async function GET(req:NextRequest) {
  const { searchParams } = new URL(req.url);
  const tx_ref = searchParams.get('tx_ref');

  try {
    const verifyRes = await axios.get(
      `https://api.chapa.co/v1/transaction/verify/${tx_ref}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.CHAPA_SECRET_KEY}`,
        },
      }
    );
    
    const paymentData = verifyRes.data.data;
    const status = verifyRes.data.data.status;
    await dbConnect();
    await Payment.findOneAndUpdate({ tx_ref }, { status });

    return NextResponse.json({ paymentData });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Verification failed' }, { status: 500 });
  }
}
