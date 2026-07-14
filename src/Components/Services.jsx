import {
  FaHeadset,
  FaHome,
  FaUserTie,
  FaPhoneAlt,
  FaCalendarCheck,
  FaChartLine,
} from "react-icons/fa";

function Services() {
  const services = [
    {
      icon: <FaHome size={35} />,
      title: "Real Estate Calling",
      description:
        "Cold calling, lead generation, appointment setting, and CRM updates for real estate businesses.",
    },
    {
      icon: <FaPhoneAlt size={35} />,
      title: "Roofing Campaigns",
      description:
        "Professional outbound calling and appointment setting for roofing contractors.",
    },
    {
      icon: <FaUserTie size={35} />,
      title: "Virtual Assistants",
      description:
        "Reliable virtual assistants for administrative tasks, emails, scheduling, and data entry.",
    },
    {
      icon: <FaHeadset size={35} />,
      title: "Customer Support",
      description:
        "Inbound and outbound customer support delivered by trained professionals.",
    },
    {
      icon: <FaCalendarCheck size={35} />,
      title: "Appointment Setting",
      description:
        "We qualify prospects and schedule meetings directly into your calendar.",
    },
    {
      icon: <FaChartLine size={35} />,
      title: "Lead Generation",
      description:
        "Generate high-quality leads through targeted outbound campaigns.",
    },
  ];

  return (
    <section className="py-5 bg-light" id="services">
      <div className="container">

        <div className="text-center mb-5">
          <h1 className="text-primary fw-bold">OUR SERVICES</h1>
          <h3 className="fw-bold">
            Solutions Designed to Help Your Business Grow
          </h3>
          <p className="text-muted">
            We provide reliable outsourcing services tailored to your business
            goals.
          </p>
        </div>

        <div className="row g-4 " >
          {services.map((service, index) => (
            <div className="col-md-6 col-lg-4" key={index} data-aos="fade-up"
  data-aos-delay={index * 150} >
              <div className="card h-100 border-0 shadow-sm p-4 custom-card">

                <div className="icon-box mb-4">
                  {service.icon}
                </div>

                <h5 className="fw-bold">{service.title}</h5>

                <p className="text-muted">
                  {service.description}
                </p>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;