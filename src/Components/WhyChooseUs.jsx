import {
  FaUserTie,
  FaHandshake,
  FaHeadset,
  FaChartLine,
  FaClock,
  FaShieldAlt,
} from "react-icons/fa";

function WhyChooseUs() {
  const features = [
    {
      icon: <FaUserTie size={35} />,
      title: "Professional Agents",
      text: "Experienced agents trained to represent your business professionally.",
    },
    {
      icon: <FaHandshake size={35} />,
      title: "Customized Solutions",
      text: "Every business is unique, and we tailor our services to your goals.",
    },
    {
      icon: <FaHeadset size={35} />,
      title: "Quality Support",
      text: "Reliable inbound and outbound customer support whenever you need it.",
    },
    {
      icon: <FaChartLine size={35} />,
      title: "Business Growth",
      text: "Helping companies generate leads and improve customer engagement.",
    },
    {
      icon: <FaClock size={35} />,
      title: "Fast Response",
      text: "Quick onboarding and efficient communication from day one.",
    },
    {
      icon: <FaShieldAlt size={35} />,
      title: "Trusted Partner",
      text: "We focus on transparency, consistency, and long-term partnerships.",
    },
  ];

  return (
    <section className="py-5">
      <div className="container">

        <div className="text-center mb-5">
          <h1 className="text-primary fw-bold">WHY CHOOSE US</h1>
          <h3 className="fw-bold">Why Businesses Choose Covered Connect</h3>
          <p className="text-muted">
            We provide reliable outsourcing solutions that help businesses save
            time, reduce costs, and improve customer satisfaction.
          </p>
        </div>

        <div className="row g-4">

          {features.map((item, index) => (

            <div className="col-md-6 col-lg-4 " key={index} data-aos="fade-down" data-aos-delay={index * 150} >

              <div className="card custom-card shadow-sm h-100 p-4">

                <div className="icon-box mb-4">
                  {item.icon}
                </div>

                <h5 className="fw-bold">
                  {item.title}
                </h5>

                <p className="text-muted">
                  {item.text}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;