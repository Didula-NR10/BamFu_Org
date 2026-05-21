function ServiceCard({ title, description, features = [] }) {
  return (
    <div className="service-card">
      <div className="service-card-header">
        <h3 className="service-title">{title}</h3>
        <p className="service-description">{description}</p>
      </div>

      <ul className="service-feature-list">
        {features.map((feature, index) => (
          <li key={index} className="service-feature-item">
            <span className="bullet-point">•</span>
            {feature}
          </li>
        ))}
      </ul>

      <div className="service-decorator">
        <span className="quote-mark">“</span>
      </div>
    </div>
  );
}

export default ServiceCard;