import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaArrowRight,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer pt-5">

      <div className="container">

        <div className="row gy-5">

          {/* Company */}

          <div className="col-lg-4">


            <h4>Covered Connect</h4>

            <p>
              We help businesses grow through professional call center
              services, virtual assistants, lead generation, and customer
              support solutions.
            </p>

          </div>

          {/* Quick Links */}

          <div className="col-lg-2">

            <h5>Quick Links</h5>

            <ul>

              <li><a href="#home">Home</a></li>

              <li><a href="#services">Services</a></li>

              <li><a href="#process">Process</a></li>

              <li><a href="#contact">Contact</a></li>

            </ul>

          </div>

          {/* Services */}

          <div className="col-lg-3">

            <h5>Services</h5>

            <ul>

              <li>Real Estate</li>

              <li>Roofing</li>

              <li>Virtual Assistants</li>

              <li>Customer Support</li>

            </ul>

          </div>

          {/* CTA */}

          <div className="col-lg-3">

            <h5>Let's Talk</h5>

            <p>
              Ready to grow your business with Covered Connect?
            </p>

            <a href="#contact" className="footer-btn">

              Get Started

              <FaArrowRight />

            </a>

          </div>

        </div>

        <hr />

        <div className="copyright">

          © 2026 Covered Connect. All Rights Reserved.

        </div>

      </div>

    </footer>
  );
}

export default Footer;