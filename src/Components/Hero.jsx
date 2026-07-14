function Hero() {
  return (
    <section className="hero"id="home">
      <div className="container">
        <div className="row align-items-center g-5">

          {/* Left Side */}
          <div className="col-lg-6">


            <h1 className="display-4 fw-bold mb-4">
              Professional Call Center &
              <span className="text-primary"> Virtual Solutions </span>
              That Help Your Business Grow.
            </h1>

            <p className="text-muted mb-4 fs-5">
              Covered Connect helps businesses increase revenue,
              generate qualified leads, improve customer service,
              and scale faster through highly trained virtual teams.
            </p>

            <div className="d-flex gap-3">
<button className="btn hero-btn">
    Get Started
</button>

<button className="btn hero-btn-outline">
    Learn More
</button>
            </div>
          </div>

          {/* Right Side */}
          <div className="col-lg-6 text-center mt-5 mt-lg-0">

<img
  src="/hero-image.jpg"
  alt="Customer Support Team"
  className="img-fluid hero-image"
/>

          </div>

        </div>
      </div>
      <div className="hero-shape shape-1"></div>
<div className="hero-shape shape-2"></div>
<div className="hero-shape shape-3"></div>
    </section>
  );
}

export default Hero;