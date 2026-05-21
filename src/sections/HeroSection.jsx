import { useState, useEffect } from 'react';

function HeroSection() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Updates every minute

    return () => clearInterval(timer);
  }, []);

  const formattedTime = currentTime.toLocaleTimeString([], { 
    hour: '2-digit', 
    minute: '2-digit' 
  });
  
  const formattedDate = currentTime.toLocaleDateString([], { 
    month: 'short', 
    day: 'numeric', 
    year: 'numeric' 
  });

  return (
    <section className="hero-section">
      <div className="hero-green-panel">
        
        {/* Floating Status Badge */}
        <div className="hero-status-badge">
          <div className="status-time">{formattedTime}</div>
          <div className="status-date">{formattedDate}</div>
        </div>

        {/* Large Centered Image-Mask Text */}
        <div className="hero-mask-container">
          <h1 className="hero-masked-text">BamFu</h1>
        </div>

      </div>
    </section>
  );
}

export default HeroSection;