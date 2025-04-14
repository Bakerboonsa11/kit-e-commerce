'use client';

import React from 'react';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store'; // Adjust based on your setup
import { BsCartFill } from 'react-icons/bs'; // Import Bootstrap cart icon from react-icons


export default function Header() {
  const { data: session, status } = useSession();
  const loading = status === 'loading';
  const router = useRouter();


  const cartItems = useSelector((state: RootState) => state?.cart.items);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  console.log(cartItems)
  
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
              <button
                onClick={() => signOut({ callbackUrl: '/' })}
                className="btn btn-outline-light btn-sm"
              >
                Sign Out
              </button>
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
              <button
                onClick={() => router.push('/signup')}
                className="btn btn-outline-light btn-sm"
              >
                Sign Up
              </button>
              <button
                onClick={() => router.push('/api/auth/signin')}
                className="btn btn-outline-light btn-sm"
              >
                Sign In
              </button>
            </>
          )}
        </div>

        {/* Cart Icon */}
       {/* Cart Icon with Badge */}
{/* Cart Icon with Badge */}
<Link href="/cart" className="position-relative text-white ms-3 d-inline-block">
  <BsCartFill size={24} />
  {totalItems > 0 && (
    <span
      className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
      style={{ fontSize: '0.6rem' }}
    >
      {totalItems}
    </span>
  )}
</Link>


   
      </div>
    </header>
  );
}
