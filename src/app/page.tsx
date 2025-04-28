'use client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-[#328E6E] to-[#67AE6E] text-white text-center py-5">
       
        {/* Hero Image with Border, Shadow, and Fade-up effect */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="hero-image-container"
        >
          <Image
            src="/realbanner.jpg"
            alt="Hero Banner"
            width={1200}
            height={400}
            className="img-fluid rounded border shadow-lg"
          />
        </motion.div>
      </header>

      {/* About Us Section */}
      <section className="container py-5">
        <h2 className="text-center mb-4" style={{ color: '#328E6E' }}>Who We Are</h2>
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
            <h3 style={{ color: '#328E6E' }}>Passion for Quality</h3>
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
          <h2 className="text-center mb-5 fw-bold" style={{ color: '#328E6E' }}>Why IBRII Kit?</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="text-center p-4 shadow-sm rounded bg-white h-100">
                <i className="bi bi-shield-lock mb-3" style={{ fontSize: '3rem', color: '#328E6E' }}></i>
                <h5 className="fw-semibold mb-2">Safe & Secure</h5>
                <p className="text-muted">Your personal and payment info is protected with top-tier encryption methods.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-center p-4 shadow-sm rounded bg-white h-100">
                <i className="bi bi-truck mb-3" style={{ fontSize: '3rem', color: '#328E6E' }}></i>
                <h5 className="fw-semibold mb-2">Fast Delivery</h5>
                <p className="text-muted">Swift and reliable shipping that gets your products to you on time.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-center p-4 shadow-sm rounded bg-white h-100">
                <i className="bi bi-star mb-3" style={{ fontSize: '3rem', color: '#328E6E' }}></i>
                <h5 className="fw-semibold mb-2">Top Rated Support</h5>
                <p className="text-muted">We prioritize your happiness with responsive, friendly customer service.</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Featured Products Section */}
      <section className="container py-5">
        <h2 className="text-center mb-4" style={{ color: '#328E6E' }}>Featured Products</h2>
        <div className="row">

          <div className="col-md-4">
            <div className="card">
              <Image
                src="/magaca.jpg"
                alt="Football Kit"
                width={500}
                height={350}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title" style={{ color: '#328E6E' }}>Pro players protector</h5>
                <p className="card-text">Engineered for comfort and performance, this shoes keeps you cool and focused on the field.</p>
                <Link href="/shop" legacyBehavior>
                  <a className="btn" style={{ backgroundColor: '#328E6E', color: 'white' }}>Shop Now</a>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <Image
                src="/ibrirealshoes2.jpg"
                alt="Football Boots"
                width={500}
                height={350}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title" style={{ color: '#328E6E' }}>Elite Boot for sport</h5>
                <p className="card-text">Designed for grip and agility, these boot give you the edge you need on any surface.</p>
                <Link href="/shop" legacyBehavior>
                  <a className="btn" style={{ backgroundColor: '#328E6E', color: 'white' }}>Shop Now</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <Image
                src="/borsa.jpg"
                alt="Football"
                width={500}
                height={350}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title" style={{ color: '#328E6E' }}>Official T60 Bag</h5>
                <p className="card-text">Crafted for precision and durability, this Bag delivers true flight and perfect control.</p>
                <Link href="/shop" legacyBehavior>
                  <a className="btn" style={{ backgroundColor: '#328E6E', color: 'white' }}>Shop Now</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <Image
                src="/malyaibri.jpg"
                alt="Football"
                width={500}
                height={350}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title" style={{ color: '#328E6E' }}>Official local Jersey</h5>
                <p className="card-text">Crafted for precision and durability, this Jersey delivers true flight and perfect control.</p>
                <Link href="/shop" legacyBehavior>
                  <a className="btn" style={{ backgroundColor: '#328E6E', color: 'white' }}>Shop Now</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <Image
                src="/kalsi.jpg"
                alt="Football"
                width={500}
                height={350}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title" style={{ color: '#328E6E' }}>Official mini</h5>
                <p className="card-text">Crafted for precision and durability, this mini delivers true flight and perfect control.</p>
                <Link href="/shop" legacyBehavior>
                  <a className="btn" style={{ backgroundColor: '#328E6E', color: 'white' }}>Shop Now</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <Image
                src="/malyaibri2.jpg"
                alt="Football"
                width={500}
                height={350}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title" style={{ color: '#328E6E' }}>Official local kits</h5>
                <p className="card-text">Crafted for precision and durability, this Boots delivers true flight and perfect control.</p>
                <Link href="/shop" legacyBehavior>
                  <a className="btn" style={{ backgroundColor: '#328E6E', color: 'white' }}>Shop Now</a>
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
            <h2 className="fw-bold mb-4" style={{ color: '#328E6E' }}>Ping of Robe: Achieving Greatness</h2>
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
                src="/training.jpg" // Replace with the actual image path
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
        <h2 className="text-center mb-4" style={{ color: '#328E6E' }}>What Our Customers Say</h2>
        
        <motion.div
          className="row text-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }} // Ensures it animates only when visible
        >
          <div className="col-md-4">
            <div className="testimonial-box">
              <p>
                "IBRII Kit has transformed the way I shop online. Their product selection is fantastic, and the customer support is second to none!"
              </p>
              <footer>
                <strong>- John Doe</strong>, Customer
              </footer>
            </div>
          </div>
          <div className="col-md-4">
            <div className="testimonial-box">
              <p>
                "I can't get enough of IBRII Kit's amazing deals! Everything I need, all in one place, with fast shipping to top it off."
              </p>
              <footer>
                <strong>- Jane Smith</strong>, Customer
              </footer>
            </div>
          </div>
          <div className="col-md-4">
            <div className="testimonial-box">
              <p>
                "The ease of shopping at IBRII Kit is incredible. I found exactly what I was looking for in no time!"
              </p>
              <footer>
                <strong>- Michael Lee</strong>, Customer
              </footer>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
