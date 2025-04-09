// app/components/Header.tsx

import React from 'react';

export default function Header() {
  return (
    <header className="bg-dark text-white py-3">
      <div className="container d-flex justify-content-between align-items-center">
        {/* Logo */}
        <a href="/" className="text-white text-decoration-none">
          <h1 className="m-0">Kit E-Commerce</h1>
        </a>

        {/* Navigation */}
        <nav className="d-none d-md-block">
          <ul className="nav">
            <li className="nav-item">
              <a href="/" className="nav-link text-white">Home</a>
            </li>
            <li className="nav-item">
              <a href="/shop" className="nav-link text-white">Shop</a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link text-white">About</a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link text-white">Contact</a>
            </li>
          </ul>
        </nav>

        {/* Hamburger Menu for smaller screens */}
        <div className="d-md-none">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        {/* Collapsible Nav on small screens */}
        <div className="collapse navbar-collapse d-md-none" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="/" className="nav-link text-white">Home</a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link text-white">Shop</a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link text-white">About</a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link text-white">Contact</a>
            </li>
          </ul>
        </div>

        {/* Search Form */}
        <form className="d-flex">
          <input
            type="search"
            className="form-control me-2"
            placeholder="Search for products"
            aria-label="Search"
          />
          <button className="btn btn-outline-light" type="submit">
            Search
          </button>
        </form>

        {/* Shopping Cart Icon */}
        <a href="/" className="text-white ms-3">
          <i className="bi bi-cart-fill" style={{ fontSize: '1.5rem' }}></i>
        </a>
      </div>
    </header>
  );
}
