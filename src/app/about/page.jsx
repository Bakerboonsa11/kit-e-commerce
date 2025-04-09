import React from 'react';

const About = () => {
  return (
    <>
      {/* Hero/About Section */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="row align-items-center mb-5">
            <div className="col-md-6">
              <img
                src="/blu.png"
                alt="About IBRII"
                className="img-fluid rounded-4 shadow"
              />
            </div>
            <div className="col-md-6">
              <h2 className="mb-4 text-primary fw-bold">About IBRII</h2>
              <p className="text-muted">
                At <strong>IBRII</strong>, we believe that sports are more than just games — they're a lifestyle.
                Whether you're on the field, in the gym, or hitting the streets, we’re here to equip you with premium-quality gear that keeps you moving.
              </p>
              <p className="text-muted">
                From cutting-edge performance kits to everyday street-ready sneakers and gear, our goal is to blend style with functionality.
                Our team of sports enthusiasts curates every product with precision, passion, and performance in mind.
              </p>
              <a href="/shop" className="btn btn-primary mt-3">Explore Our Products</a>
            </div>
          </div>

          <div className="row text-center mt-5">
            <div className="col-md-4">
              <h5 className="text-dark fw-semibold">Premium Quality</h5>
              <p className="text-muted">Handpicked gear made for athletes, by athletes.</p>
            </div>
            <div className="col-md-4">
              <h5 className="text-dark fw-semibold">Fast Shipping</h5>
              <p className="text-muted">Get your equipment on time — every time.</p>
            </div>
            <div className="col-md-4">
              <h5 className="text-dark fw-semibold">Top Customer Service</h5>
              <p className="text-muted">We’re here to support your journey — on and off the field.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PING OF ROBE Section */}
      <section className="py-5 bg-white">
        <div className="container text-center">
          <h2 className="mb-4 text-success fw-bold">Meet PING OF ROBE</h2>
          <p className="text-muted mb-4">
            One of the backbones of IBRII is the dynamic team called <strong>PING OF ROBE</strong>.
            This passionate and ambitious crew is dedicated to turning dreams into reality — inspiring the youth, empowering athletes, and leading transformative projects that push the boundaries of what’s possible.
          </p>
          <div className="row mb-4">
            <div className="col-md-6 mb-3">
              <img
                src="/pinglogo.jpg"
                alt="PING OF ROBE Team"
                className="img-fluid rounded shadow-sm"
              />
            </div>
            <div className="col-md-6 mb-3">
              <video controls className="w-100 rounded shadow-sm">
                <source src="/ping-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <video controls className="w-100 rounded shadow-sm">
                <source src="/ping-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <p className="text-muted">
            Through innovation, determination, and strong community bonds, PING OF ROBE works tirelessly to make an impact. Whether organizing events, mentoring young talents, or crafting new ideas — their mission is rooted in progress and unity.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-5">
        <div className="container text-center">
          <h2 className="mb-4 text-primary fw-bold">Our Mission & Vision</h2>
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="p-4 border rounded shadow-sm h-100 bg-white">
                <h5 className="text-success fw-semibold">Our Mission</h5>
                <p className="text-muted">
                  To empower athletes and active individuals by providing premium sportswear and gear that inspires confidence, comfort, and performance.
                </p>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="p-4 border rounded shadow-sm h-100 bg-white">
                <h5 className="text-success fw-semibold">Our Vision</h5>
                <p className="text-muted">
                  To become a global leader in sport-focused e-commerce by fusing style with function and delivering unmatched customer experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manager/Coach Section */}
      <section className="bg-light py-5">
        <div className="container text-center">
          <h2 className="mb-4 text-primary fw-bold">Our Manager</h2>
          <div className="row justify-content-center">
            <div className="col-md-4 mb-3">
              <img
                src="/coach.jpg"
                alt="IBRII Manager"
                className="img-fluid rounded-circle shadow"
                style={{ maxWidth: '250px' }}
              />
            </div>
            <div className="col-md-8 d-flex align-items-center">
              <p className="text-muted">
                Meet <strong>Coach Daniel Robe</strong>, the visionary behind IBRII. With over a decade of experience in sports leadership, he's not just a manager — he's a mentor, motivator, and master planner.
                His strategic mind and heart for athletes keep IBRII evolving and thriving in a competitive world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose IBRII Section */}
      <section className="bg-primary text-white py-5">
        <div className="container text-center">
          <h2 className="mb-4">Why Choose IBRII?</h2>
          <div className="row">
            <div className="col-md-4">
              <i className="bi bi-check-circle-fill" style={{ fontSize: '2rem' }}></i>
              <h5 className="mt-3">Trusted by Thousands</h5>
              <p>We’ve built a strong community of loyal customers who trust our products and service.</p>
            </div>
            <div className="col-md-4">
              <i className="bi bi-lightning-fill" style={{ fontSize: '2rem' }}></i>
              <h5 className="mt-3">Always Innovating</h5>
              <p>We stay on top of trends and tech to bring you the best in sports fashion and gear.</p>
            </div>
            <div className="col-md-4">
              <i className="bi bi-heart-fill" style={{ fontSize: '2rem' }}></i>
              <h5 className="mt-3">We Care Deeply</h5>
              <p>Our team is passionate about sports and committed to your journey as an athlete or enthusiast.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
