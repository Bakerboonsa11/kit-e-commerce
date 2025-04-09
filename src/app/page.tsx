import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure bootstrap is imported
import Image from 'next/image'; // For image optimization
import styles from './page.module.css'; // For custom styles (optional)

export default function Home() {
  return (
    <div>
      {/* Hero Section (Banner with a welcome message) */}
      <header className="bg-gradient-to-r from-blue-500 to-teal-500 text-white text-center py-5">
        <h1 className="display-4 font-weight-bold">Welcome to IBRII Kit!</h1>
        <p className="lead">The trendiest e-commerce platform, where style meets convenience.</p>
        <Image
          src="/banner1.png"
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
              src='/yl.avif'
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
    {/* Product 1: Kit */}
    <div className="col-md-4">
      <div className="card">
        <Image
          src="/fproduct1.png"
          alt="Football Kit"
          width={500}
          height={350}
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title">Pro Player Kit</h5>
          <p className="card-text">Engineered for comfort and performance, this kit keeps you cool and focused on the field.</p>
          <a href="/" className="btn btn-primary">Shop Now</a>
        </div>
      </div>
    </div>

    {/* Product 2: Boots */}
    <div className="col-md-4">
      <div className="card">
        <Image
          src="/fproduct2.png"
          alt="Football Boots"
          width={500}
          height={350}
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title">Elite Football Boots</h5>
          <p className="card-text">Designed for grip and agility, these boots give you the edge you need on any surface.</p>
          <a href="/" className="btn btn-primary">Shop Now</a>
        </div>
      </div>
    </div>

    {/* Product 3: Ball */}
    <div className="col-md-4">
      <div className="card">
        <Image
          src="/ball.jpg"
          alt="Football"
          width={500}
          height={350}
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title">Official Match Ball</h5>
          <p className="card-text">Crafted for precision and durability, this ball delivers true flight and perfect control.</p>
          <a href="/" className="btn btn-primary">Shop Now</a>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Footer Section */}
      <footer className="bg-dark text-white text-center py-4">
        <p>© 2025 Urban Kit | All Rights Reserved</p>
        <p>Follow us on <a href="/" className="text-white">Facebook</a>, <a href="/" className="text-white">Instagram</a>, <a href="/" className="text-white">Twitter</a></p>
      </footer>
    </div>
  );
}
