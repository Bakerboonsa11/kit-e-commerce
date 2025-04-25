'use client';

import { Suspense } from 'react';
import Verify from '../../components/client/verify';

export default function VerifyPage() {
  return (
    <Suspense fallback={<div className="vh-100 d-flex justify-content-center align-items-center">Loading...</div>}>
      <Verify />
    </Suspense>
  );
}
// 