'use client';

import React from 'react';
import Link from 'next/link';

export default function Header() {
  const isLoggedIn = true; // toggle to test
  const userProfileImage = '/profile.jpg';

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
          {isLoggedIn ? (
            <>
              <Link href="/logout" className="btn btn-outline-light btn-sm">Sign Out</Link>
              <Link href="/profile">
                <img
                  src='/globe.svg'
                  alt="Profile"
                  className="rounded-circle"
                  style={{ width: '36px', height: '36px', objectFit: 'cover' }}
                />
              </Link>
            </>
          ) : (
            <>
              <Link href="/signup" className="btn btn-outline-light btn-sm">Sign Up</Link>
              <Link href="/signin" className="btn btn-outline-light btn-sm">Sign In</Link>
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
