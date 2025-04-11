'use client';

import { useState } from 'react';
import { handleSignup } from '@/lib/actions/signup'; // adjust path as needed
import { useRouter } from 'next/navigation';
import {signIn} from 'next-auth/react'
export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError('Please fill out all fields.');
      return;
    }

    const res = await handleSignup({ name, email, password });

    if (res.error) {
      setError(res.error);
      return;
    }

    
    const loginRes = await signIn('credentials', {
      redirect: true, // or false if you want to manually redirect
      email,
      password,
      callbackUrl: '/', // or wherever you want to send them
    });

    if (loginRes?.error) {
      setError(loginRes.error);
    }
    
  };

  return (
    <div className="container py-5" style={{ maxWidth: '400px' }}>
      <h2 className="text-center mb-4">Sign Up</h2>

      {error && <div className="alert alert-danger">{error}</div>}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">Sign Up</button>
      </form>
    </div>
  );
}
