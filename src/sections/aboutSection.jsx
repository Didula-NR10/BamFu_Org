import CoreValueCard from '../components/CoreValueCard.jsx';

function AboutSection() {
  const valuesData = [
    {
      title: 'Focused Approach',
      description: 'Like a panda focusing on bamboo, we concentrate on delivering excellence in every project.',
      iconSrc: '/src/assets/icons/focus.svg'
    },
    {
      title: 'Collaborative Team',
      description: 'Our diverse team works in harmony to create powerful software solutions.',
      iconSrc: '/src/assets/icons/team.svg'
    },
    {
      title: 'Quality Driven',
      description: 'Bamboo grows strong and flexible - so do our solutions, built to last and adapt.',
      iconSrc: '/src/assets/icons/quality.svg'
    }
  ];

  return (
    <section className="about-section">
      <div className="about-header">
        <span className="about-subtitle">About BamFu</span>
        <h2 className="about-title">Growing Success Through Technology</h2>
        <p className="about-lead">
          BamFu combines the strength and resilience of bamboo with the adaptability and 
          wisdom of the panda to deliver world-class software solutions.
        </p>
      </div>

      <div className="about-grid-container">
        <div className="about-grid">
          {valuesData.map((item, index) => (
            <CoreValueCard
              key={index}
              title={item.title}
              description={item.description}
              iconSrc={item.iconSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;