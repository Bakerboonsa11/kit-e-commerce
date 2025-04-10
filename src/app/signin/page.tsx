'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import { useState, FormEvent } from 'react';
import { FaGoogle, FaGithub } from 'react-icons/fa';

const SignIn: React.FC = () => {
  const { data: session, status } = useSession();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null); // Added error state

  const handleCredentialsSignIn = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null); // Reset any previous errors
    const result = await signIn('credentials', {
      email,
      password,
      redirect: false, // Prevent auto redirect, we'll handle it manually
    });

    if (result?.error) {
      setError('Invalid email or password. Please try again.');
    } else if (result?.url) {
      window.location.href = result.url; // Redirect manually if no error
    }
  };

  if (status === 'loading') {
    return <div className="text-center mt-5">Loading...</div>;
  }

  return (
    <div className="container py-5" style={{ maxWidth: '400px' }}>
      <h2 className="text-center mb-4">Sign In</h2>

      {session ? (
        <div className="text-center">
          <img
            src={session.user?.image || '/default-profile.png'}
            alt="Profile"
            className="rounded-circle mb-3"
            style={{ width: '80px', height: '80px', objectFit: 'cover' }}
          />
          <h5 className="mb-2">{session.user?.name || session.user?.email}</h5>
          <button onClick={() => signOut()} className="btn btn-outline-danger w-100">
            Sign Out
          </button>
        </div>
      ) : (
        <>
          {/* Error Message */}
          {error && <div className="alert alert-danger">{error}</div>}

          {/* Email/Password Form */}
          <form onSubmit={handleCredentialsSignIn} className="mb-3">
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-primary w-100">Sign In</button>
          </form>

          <hr />

          {/* Social Logins */}
          <div className="d-grid gap-2">
            <button
              className="btn w-100 text-white"
              style={{ backgroundColor: '#4285F4' }}
              onClick={() => signIn('google', { callbackUrl: '/' })}
            >
              <FaGoogle className="me-2" />
              Continue with Google
            </button>

            <button
              className="btn w-100 text-white"
              style={{ backgroundColor: '#333' }}
              onClick={() => signIn('github', { callbackUrl: '/' })}
            >
              <FaGithub className="me-2" />
              Continue with GitHub
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default SignIn;
