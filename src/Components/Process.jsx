import {
  FaPhoneAlt,
  FaClipboardList,
  FaUsers,
  FaRocket,
} from "react-icons/fa";

function Process() {
  const steps = [
    {
      icon: <FaPhoneAlt size={35} />,
      title: "Discovery Call",
      description:
        "We start with a consultation to understand your business, goals, and requirements.",
    },
    {
      icon: <FaClipboardList size={35} />,
      title: "Planning & Strategy",
      description:
        "Our team creates a customized outsourcing plan tailored to your business needs.",
    },
    {
      icon: <FaUsers size={35} />,
      title: "Team Onboarding",
      description:
        "We assign and train dedicated agents who are ready to represent your business professionally.",
    },
    {
      icon: <FaRocket size={35} />,
      title: "Launch & Grow",
      description:
        "Your campaign goes live while we continuously monitor performance and optimize results.",
    },
  ];

  return (
    <section className="py-5 bg-light" id="process">
      <div className="container">

        <div className="text-center mb-5">
          <h1 className="text-primary fw-bold">OUR PROCESS</h1>
          <h3 className="fw-bold">How We Work</h3>
          <p className="text-muted">
            A simple and efficient process designed to help your business succeed.
          </p>
        </div>

        <div className="row g-4">

          {steps.map((step, index) => (
            <div className="col-md-6 col-lg-3" key={index} data-aos="zoom-in" data-aos-delay={index * 150}>
              <div className="card custom-card border-0 shadow-sm h-100 text-center p-4">
                <div className="icon-box mb-4">
                  {step.icon}
                </div>

                <h5 className="fw-bold">{step.title}</h5>

                <p className="text-muted">
                  {step.description}
                </p>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Process;