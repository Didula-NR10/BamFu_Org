function TechBubble({ name, logoSrc, size = 120, xPosition, yPosition }) {
  const bubbleStyle = {
    width: `${size}px`,
    height: `${size}px`,
    position: xPosition || yPosition ? 'absolute' : 'relative',
    left: xPosition ? `${xPosition}` : undefined,
    top: yPosition ? `${yPosition}` : undefined,
  };

  return (
    <div className="tech-bubble-wrapper" style={bubbleStyle}>
      <div className="tech-bubble">
        {logoSrc ? (
          <img src={logoSrc} alt={`${name} Logo`} className="tech-bubble-icon" />
        ) : (
          <div className="tech-bubble-placeholder"></div>
        )}
      </div>
      {name && <span className="tech-bubble-label">{name}</span>}
    </div>
  );
}

export default TechBubble;