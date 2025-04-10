'use client';

import React from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

export default function Header() {
  const { data: session, status } = useSession();
  const loading = status === 'loading';
  console.log(session)
  return (
    <header className="bg-dark text-white py-3">
      <div className="container d-flex justify-content-between align-items-center flex-wrap">
        
        {/* Logo */}
        <Link href="/" className="text-white text-decoration-none fs-4 fw-bold">
          Kit E-Commerce
        </Link>

        {/* Navigation */}
        <nav className="d-none d-md-block">
          <ul className="nav">
            <li className="nav-item">
              <Link href="/" className="nav-link text-white">Home</Link>
            </li>
            <li className="nav-item">
              <Link href="/shop" className="nav-link text-white">Shop</Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className="nav-link text-white">About</Link>
            </li>
            <li className="nav-item">
              <Link href="/contact" className="nav-link text-white">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* Auth Buttons */}
        <div className="d-flex align-items-center gap-2">
          {!loading && session ? (
            <>
              <Link href="/api/auth/signout" className="btn btn-outline-light btn-sm">Sign Out</Link>
              <Link href="/profile">
                <img
                  src={session?.user?.image || '/next.svg'}
                  alt="Profile"
                  className="rounded-circle"
                  style={{ width: '36px', height: '36px', objectFit: 'cover' }}
                />
              </Link>
            </>
          ) : (
            <>
              <Link href="/signup" className="btn btn-outline-light btn-sm">Sign Up</Link>
              <Link href="/api/auth/signin" className="btn btn-outline-light btn-sm">Sign In</Link>
            </>
          )}
        </div>

        {/* Cart Icon */}
        <Link href="/cart" className="text-white ms-3">
          <i className="bi bi-cart-fill fs-5"></i>
        </Link>
      </div>
    </header>
  );
}
