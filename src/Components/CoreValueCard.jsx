function CoreValueCard({ title, description, iconSrc }) {
  return (
    <div className="core-value-card">
      <div className="core-value-header">
        <div className="core-value-icon-wrapper">
          {iconSrc ? (
            <img src={iconSrc} alt={`${title} Icon`} className="core-value-icon" />
          ) : (
            <div className="core-value-icon-placeholder"></div>
          )}
        </div>
        <div className="core-value-quote-decorator">
          <span className="value-quote-mark">“</span>
        </div>
      </div>

      <div className="core-value-body">
        <p className="core-value-description">{description}</p>
        <h3 className="core-value-title">{title}</h3>
      </div>
    </div>
  );
}

export default CoreValueCard;