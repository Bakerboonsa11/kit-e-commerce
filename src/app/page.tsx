'use client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-500 to-teal-500 text-white text-center py-5">
        <h1 className="display-4 font-weight-bold">Welcome to IBRII Kit!</h1>
        <p className="lead">The trendiest e-commerce platform, where style meets convenience.</p>
        
        {/* Hero Image with Border, Shadow, and Fade-up effect */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="hero-image-container"
        >
          <Image
            src="/banner2.webp"
            alt="Hero Banner"
            width={1200}
            height={400}
            className="img-fluid rounded border shadow-lg"
          />
        </motion.div>
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

      {/* Why Choose Us Section with Framer Motion */}
      <motion.section
        className="py-5"
        style={{ backgroundColor: '#f8f9fa' }}
        animate={{ x: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
      >
        <div className="container">
          <h2 className="text-center mb-5 fw-bold" style={{ color: '#333' }}>Why IBRII Kit?</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="text-center p-4 shadow-sm rounded bg-white h-100">
                <i className="bi bi-shield-lock mb-3" style={{ fontSize: '3rem', color: '#0d6efd' }}></i>
                <h5 className="fw-semibold mb-2">Safe & Secure</h5>
                <p className="text-muted">Your personal and payment info is protected with top-tier encryption methods.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-center p-4 shadow-sm rounded bg-white h-100">
                <i className="bi bi-truck mb-3" style={{ fontSize: '3rem', color: '#0d6efd' }}></i>
                <h5 className="fw-semibold mb-2">Fast Delivery</h5>
                <p className="text-muted">Swift and reliable shipping that gets your products to you on time.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-center p-4 shadow-sm rounded bg-white h-100">
                <i className="bi bi-star mb-3" style={{ fontSize: '3rem', color: '#0d6efd' }}></i>
                <h5 className="fw-semibold mb-2">Top Rated Support</h5>
                <p className="text-muted">We prioritize your happiness with responsive, friendly customer service.</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Featured Products Section */}
      <section className="container py-5">
        <h2 className="text-center mb-4">Featured Products</h2>
        <div className="row">
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

      {/* New Section Above Testimonials */}
      <motion.section 
        className="container py-5 rounded shadow-lg mb-5"
        style={{ backgroundColor: '#f0f8ff', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="row align-items-center">
          {/* Text on the Left */}
          <div className="col-md-6">
            <h2 className="fw-bold mb-4">Ping of Robe: Achieving Greatness</h2>
            <p>
              Ping of Robe has always been dedicated to pushing boundaries and achieving excellence, both on and off the field. Over the years, Ping has had a significant impact in various fields, including:
            </p>
            <ul className="fs-6 text-muted">
              <li>Leading the Ethiopian Premier League with unmatched skill and determination.</li>
              <li>Developing and mentoring young talent, ensuring the future of Ethiopian football.</li>
              <li>Raising the level of sports in Bale and taking it to new heights.</li>
            </ul>
            <p>
              His dedication to the sport has made Ping a household name and an inspiration to many. Whether on the field or off, Ping of Robe continues to set an example of hard work, resilience, and passion.
            </p>
          </div>

          {/* Image on the Right */}
          <div className="col-md-6">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <Image
                src="/banner3.jpg" // Replace with the actual image path
                alt="Ping of Robe Achievements"
                width={600}
                height={400}
                className="img-fluid rounded shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Testimonial Section */}
      <section className="container py-5">
        <h2 className="text-center mb-4">What Our Customers Say</h2>
        
        <motion.div
          className="row text-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }} // Ensures it triggers only once when entering the viewport
        >
          <div className="col-md-3 mb-4">
            <motion.div
              className="border p-3 rounded shadow-sm"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <p className="fs-6 fst-italic mb-3">"IBRII Kit consistently provides exceptional products and top-tier service. The entire shopping experience was seamless, and I couldn’t be happier with my purchase."</p>
              <p className="fs-6"><strong>Abebe B., Addis Ababa</strong></p>
            </motion.div>
          </div>
          <div className="col-md-3 mb-4">
            <motion.div
              className="border p-3 rounded shadow-sm"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <p className="fs-6 fst-italic mb-3">"From the easy navigation of their website to the fast delivery, every aspect of my experience with IBRII Kit exceeded expectations. Truly outstanding!"</p>
              <p className="fs-6"><strong>Jemal D., Harar</strong></p>
            </motion.div>
          </div>
          <div className="col-md-3 mb-4">
            <motion.div
              className="border p-3 rounded shadow-sm"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <p className="fs-6 fst-italic mb-3">"A one-stop shop for everything I need. From quality sports gear to trendy gadgets, I’ve had an amazing experience every time."</p>
              <p className="fs-6"><strong>Fatiha R., Dire Dawa</strong></p>
            </motion.div>
          </div>
          <div className="col-md-3 mb-4">
            <motion.div
              className="border p-3 rounded shadow-sm"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <p className="fs-6 fst-italic mb-3">"I’ve been a customer for a year now, and I’m continuously impressed with the product quality and the outstanding customer service."</p>
              <p className="fs-6"><strong>Mohammed T., Addis Ababa</strong></p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Footer Section */}
      <footer className="bg-dark text-white text-center py-4">
        <p className="mb-0">© 2025 IBRII Kit | All Rights Reserved</p>
      </footer>
    </div>
  );
}
