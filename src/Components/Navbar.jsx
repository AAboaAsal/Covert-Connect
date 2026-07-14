import { useEffect, useState } from "react";
function Navbar() {
    const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);
const [active, setActive] = useState("home");
useEffect(() => {

    const sections = document.querySelectorAll("section[id]");

    const handleScroll = () => {

        const scrollY = window.pageYOffset;

        sections.forEach((section) => {

            const sectionHeight = section.offsetHeight;

            const sectionTop = section.offsetTop - 120;

            const sectionId = section.getAttribute("id");

            if (
                scrollY >= sectionTop &&
                scrollY < sectionTop + sectionHeight
            ) {
                setActive(sectionId);
            }

        });

    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

}, []);
  return (
   <nav className={`navbar navbar-expand-lg fixed-top custom-navbar ${
    scrolled ? "navbar-scrolled" : ""
  }`}>

  <div className="container">

    <a className="navbar-brand d-flex align-items-center" href="#">

      <img
        src="/Logo.png"
        alt="Covered Connect"
        width="55"
        className="me-2"
      />

      <div>
        <h5 className="mb-0 fw-bold">Covered Connect</h5>
        <small>Virtual Solutions</small>
      </div>

    </a>

    <button
      className="navbar-toggler"
      data-bs-toggle="collapse"
      data-bs-target="#nav"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    <div
      className="collapse navbar-collapse"
      id="nav"
    >

      <ul className="navbar-nav mx-auto">

        <li className="nav-item">
          <a
    href="#home"
    className={`nav-link ${active === "home" ? "active-link" : ""}`}
>
    Home
</a>
        </li>

        <li className="nav-item">
          <a
    href="#services"
    className={`nav-link ${active === "services" ? "active-link" : ""}`}
>
    Services
</a>
        </li>

        <li className="nav-item">
          <a
    href="#process"
    className={`nav-link ${active === "process" ? "active-link" : ""}`}
>
    Process
</a>
        </li>

        <li className="nav-item">
          <a
    href="#testimonials"
    className={`nav-link ${active === "testimonials" ? "active-link" : ""}`}
>
    Testimonimals
</a>
        </li>

      </ul>

<a
  href="#contact"
  className="btn btn-contact"
>
  Contact Us
</a>

    </div>

  </div>

</nav>
  );
}

export default Navbar;