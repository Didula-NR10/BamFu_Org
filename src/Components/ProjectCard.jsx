import Tag from './Tag.jsx';

function ProjectCard({ title, description, tags = [], mediaType = 'image', mediaSrc }) {
  return (
    <div className="project-card">
      <div className="project-card-media">
        {mediaType === 'video' ? (
          <div className="video-container">
            <iframe
              src={mediaSrc}
              title={`${title} video demonstration`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ) : (
          <img 
            src={mediaSrc || "/src/assets/placeholder.png"} 
            alt={`${title} Preview`} 
            className="project-image"
          />
        )}
      </div>

      <div className="project-card-body">
        <h3 className="project-card-title">{title}</h3>
        <p className="project-card-description">{description}</p>
        
        <div className="project-card-tags">
          {tags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;