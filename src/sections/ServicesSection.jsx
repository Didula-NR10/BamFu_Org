import ServiceCard from '../components/ServiceCard.jsx';

function ServicesSection() {
  const servicesData = [
    {
      title: 'Web Development',
      description: 'Custom web applications built with modern frameworks and best practices for optimal performance.',
      features: ['React & Next.js', 'Vue & Angular', 'Full-stack Solutions']
    },
    {
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile apps that deliver exceptional user experiences.',
      features: ['iOS & Android', 'React Native', 'Flutter']
    },
    {
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment strategies for growing businesses.',
      features: ['AWS & Azure', 'DevOps', 'Microservices']
    },
    {
      title: 'Security & Testing',
      description: 'Comprehensive security audits and automated testing to ensure reliability.',
      features: ['Penetration Testing', 'CI/CD', 'Quality Assurance']
    }
  ];

  return (
    <section className="services-section">
      <div className="services-container">
        
        <div className="services-header">
          <span className="services-subtitle">Our Services</span>
          <h2 className="services-title">What We Do Best</h2>
          <p className="services-lead">
            From concept to deployment, we provide end-to-end software 
            development services tailored to your needs.
          </p>
        </div>

        <div className="services-grid-panel">
          <div className="services-grid">
            {servicesData.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                features={service.features}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default ServicesSection;