import TechBubble from '../components/TechBubble.jsx';

function TechStackSection() {
  const techStack = [
    { name: 'Firebase', logoSrc: '/src/assets/tech/firebase.svg', size: 140, x: '25%', y: '70%' },
    { name: 'React', logoSrc: '/src/assets/tech/react.svg', size: 130, x: '10%', y: '25%' },
    { name: 'Node.js', logoSrc: '/src/assets/tech/node.svg', size: 150, x: '45%', y: '15%' },
    { name: 'Next.js', logoSrc: '/src/assets/tech/next.svg', size: 120, x: '75%', y: '20%' },
    { name: 'Tailwind', logoSrc: '/src/assets/tech/tailwind.svg', size: 135, x: '78%', y: '55%' },
    { name: 'MongoDB', logoSrc: '/src/assets/tech/mongodb.svg', size: 110, x: '52%', y: '75%' },
    { name: '', logoSrc: null, size: 70, x: '5%', y: '50%' }, // Pure gray decorative circles from wireframe
    { name: '', logoSrc: null, size: 85, x: '90%', y: '80%' }
  ];

  return (
    <section className="tech-section">
      <div className="tech-display-panel">
        
        <div className="tech-header-overlay">
          <span className="tech-subtitle">We Do Best</span>
          <h2 className="tech-title">Technology</h2>
        </div>

        <div className="tech-bubbles-canvas">
          {techStack.map((tech, index) => (
            <TechBubble
              key={index}
              name={tech.name}
              logoSrc={tech.logoSrc}
              size={tech.size}
              xPosition={tech.x}
              yPosition={tech.y}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default TechStackSection;