const SectionTitle = ({ subtitle, title, description }) => {
  return (
    <div className="section-title text-center mb-5" data-aos="fade-up">
      <span className="section-subtitle">
        {subtitle}
      </span>

      <h2 className="mt-3">
        {title}
      </h2>

      {description && (
        <p className="mt-3">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;