'use client';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure bootstrap is imported
import Image from 'next/image';
import Link from 'next/link'; // ✅ Import Link
import styles from './page.module.css';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-500 to-teal-500 text-white text-center py-5">
        <h1 className="display-4 font-weight-bold">Welcome to IBRII Kit!</h1>
        <p className="lead">The trendiest e-commerce platform, where style meets convenience.</p>
        <Image
          src="/banner2.webp"
          alt="Hero Banner"
          width={1200}
          height={400}
          className="img-fluid"
        />
      </header>

      {/* About Us Section */}
      <section className="container py-5">
        <h2 className="text-center mb-4">Who We Are</h2>
        <div className="row align-items-center">
          <div className="col-md-6">
            <Image
              src="/yl.avif"
              alt="About Us"
              width={500}
              height={350}
              className="img-fluid"
            />
          </div>
          <div className="col-md-6">
            <h3>Passion for Quality</h3>
            <p>
              At IBRII Kit, we believe that style shouldn't come at a high price. We are an online platform dedicated to bringing the latest fashion, tech gadgets, and lifestyle products right to your door. 
              Our handpicked collection of products ensures top-notch quality, affordability, and design that suits your modern lifestyle.
            </p>
            <p>
              We offer everything from fashionable apparel to innovative gadgets, and we always prioritize customer satisfaction. Join our journey and explore the future of e-commerce with us.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <h2 className="text-center mb-5 fw-bold" style={{ color: '#333' }}>Why IBRII Kit?</h2>
          <div className="row g-4">
            {/* Feature Card 1 */}
            <div className="col-md-4">
              <div className="text-center p-4 shadow-sm rounded bg-white h-100">
                <i className="bi bi-shield-lock mb-3" style={{ fontSize: '3rem', color: '#0d6efd' }}></i>
                <h5 className="fw-semibold mb-2">Safe & Secure</h5>
                <p className="text-muted">Your personal and payment info is protected with top-tier encryption methods.</p>
              </div>
            </div>

            {/* Feature Card 2 */}
            <div className="col-md-4">
              <div className="text-center p-4 shadow-sm rounded bg-white h-100">
                <i className="bi bi-truck mb-3" style={{ fontSize: '3rem', color: '#0d6efd' }}></i>
                <h5 className="fw-semibold mb-2">Fast Delivery</h5>
                <p className="text-muted">Swift and reliable shipping that gets your products to you on time.</p>
              </div>
            </div>

            {/* Feature Card 3 */}
            <div className="col-md-4">
              <div className="text-center p-4 shadow-sm rounded bg-white h-100">
                <i className="bi bi-star mb-3" style={{ fontSize: '3rem', color: '#0d6efd' }}></i>
                <h5 className="fw-semibold mb-2">Top Rated Support</h5>
                <p className="text-muted">We prioritize your happiness with responsive, friendly customer service.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="container py-5">
        <h2 className="text-center mb-4">Featured Products</h2>
        <div className="row">
          {/* Product 1 */}
          <div className="col-md-4">
            <div className="card">
              <Image
                src="/products/Athlete Running Shoes.webp"
                alt="Football Kit"
                width={500}
                height={350}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">Pro Athelate shoes</h5>
                <p className="card-text">Engineered for comfort and performance, this shoes keeps you cool and focused on the field.</p>
                <Link href="/shop" legacyBehavior>
                  <a className="btn btn-primary">Shop Now</a>
                </Link>
              </div>
            </div>
          </div>

          {/* Product 2 */}
          <div className="col-md-4">
            <div className="card">
              <Image
                src="/products/Yoga Mat - 10mm.webp"
                alt="Football Boots"
                width={500}
                height={350}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">Elite Mat for sport</h5>
                <p className="card-text">Designed for grip and agility, these Mats give you the edge you need on any surface.</p>
                <Link href="/shop" legacyBehavior>
                  <a className="btn btn-primary">Shop Now</a>
                </Link>
              </div>
            </div>
          </div>

          {/* Product 3 */}
          <div className="col-md-4">
            <div className="card">
              <Image
                src="/products/Puma Future Ultimate.webp"
                alt="Football"
                width={500}
                height={350}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">Official Puma Boots</h5>
                <p className="card-text">Crafted for precision and durability, this Boots delivers true flight and perfect control.</p>
                <Link href="/shop" legacyBehavior>
                  <a className="btn btn-primary">Shop Now</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-4">
        <p>© 2025 IBRII Kit | All Rights Reserved</p>
        <p>
          Follow us on{' '}
          <Link href="/" legacyBehavior>
            <a className="text-white">Facebook</a>
          </Link>,{' '}
          <Link href="/" legacyBehavior>
            <a className="text-white">Instagram</a>
          </Link>,{' '}
          <Link href="/" legacyBehavior>
            <a className="text-white">Twitter</a>
          </Link>
        </p>
      </footer>
    </div>
  );
}
