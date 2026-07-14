function Contact() {
  return (
    <section className="contact py-5" id="contact" >

      <div className="container">

        <div className="text-center">

          <h6 className="text-primary fw-bold" data-aos="fade-left" data-aos-delay="150">
            GET IN TOUCH
          </h6>

          <h2 className="fw-bold mt-3" data-aos="zoom-in" data-aos-delay="150">
            Let's Build Something Great Together
          </h2>

          <p
            className="text-muted mx-auto"
            style={{ maxWidth: "650px" }}
            data-aos="zoom-out" data-aos-delay="150"
          >
Ready to improve your customer experience and grow your business? Our team is here to provide reliable outsourcing solutions tailored to your needs.
          </p>

          <a
            
            href="https://wa.me/201XXXXXXXXX"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary btn-lg px-5 py-3 mt-4"
          >
            Get Started
          </a>

        </div>

      </div>

    </section>
  );
}

export default Contact;