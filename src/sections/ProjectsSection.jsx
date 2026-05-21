import ProjectCard from '../components/ProjectCard.jsx';

function ProjectsSection() {
  const projectsData = [
    {
      title: 'Golden Treat',
      description: 'Bakery Management System & e-commerce Platform',
      tags: ['Management', 'e-commerce', 'Custom Software Development'],
      mediaType: 'image',
      mediaSrc: '/src/assets/projects/golden-treat.png'
    },
    {
      title: 'POS System',
      description: 'Point of sales system engineered for elite performance.',
      tags: ['Management', 'e-commerce', 'Custom Software Development'],
      mediaType: 'video',
      mediaSrc: 'https://www.youtube.com/embed/dQw4w9WgXcQ' // Replace with your showcase stream URL
    }
  ];

  return (
    <section className="projects-section">
      <div className="projects-container">
        
        <div className="projects-header">
          <h2 className="projects-title">
            <span className="accent-text">Our</span> Latest Projects
          </h2>
          <p className="projects-lead">
            Architecting the future of digital commerce. We fuse data-driven strategy 
            and elite design with technology engineered for performance.
          </p>
        </div>

        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div key={index} className="projects-grid-item">
              <ProjectCard
                title={project.title}
                description={project.description}
                tags={project.tags}
                mediaType={project.mediaType}
                mediaSrc={project.mediaSrc}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default ProjectsSection;