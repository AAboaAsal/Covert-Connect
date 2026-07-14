import { FaQuoteLeft, FaStar } from "react-icons/fa";

function Testimonials() {
  const testimonials = [
    {
      name: "Business Owner",
      company: "Real Estate Company",
      review:
        "Covered Connect provided a professional team that improved our customer communication and appointment scheduling process.",
    },
    {
      name: "Operations Manager",
      company: "Roofing Contractor",
      review:
        "The onboarding process was smooth, and the agents quickly adapted to our workflow and CRM system.",
    },
    {
      name: "Sales Director",
      company: "Home Services",
      review:
        "Reliable communication, responsive support, and a professional approach made working together a great experience.",
    },
  ];

  return (
    <section className="py-5 bg-light" id="testimonials">
      <div className="container">

        <div className="text-center mb-5">
          <h1 className="text-primary fw-bold">TESTIMONIALS</h1>
          <h3 className="fw-bold">What Our Partners Say</h3>
          <p className="text-muted">
            Feedback from businesses that have worked with our team.
          </p>
        </div>

        <div className="row g-4">

          {testimonials.map((item, index) => (
            <div className="col-lg-4" key={index} data-aos="flip-right" data-aos-delay={index * 150}>

              <div className="card custom-card border-0 shadow-sm h-100 p-4">

                <FaQuoteLeft className="text-primary fs-2 mb-3" />

                <p className="text-muted">
                  "{item.review}"
                </p>

                <div className="mb-3 text-warning">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>

                <hr />

                <h5 className="mb-0">{item.name}</h5>
                <small className="text-muted">
                  {item.company}
                </small>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;