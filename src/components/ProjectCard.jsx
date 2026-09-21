const ProjectCard = ({ project, onSelect }) => {
  return (
    <article className="project-card">
      <div className="project-card__media">
        {project.image ? (
          <img src={project.image} alt={project.title} />
        ) : (
          <div className="project-card__fallback">Preview</div>
        )}
      </div>

      <div className="project-card__body">
        <p className="eyebrow">{project.category || 'Project'}</p>
        <h3>{project.title || 'Untitled project'}</h3>
        <p>{project.description || 'Project details will be added soon.'}</p>

        {project.technologies?.length ? (
          <div className="tag-list">
            {project.technologies.slice(0, 3).map((tech) => (
              <span key={tech} className="tag">
                {tech}
              </span>
            ))}
          </div>
        ) : null}

        <div className="project-card__actions">
          <button type="button" className="button minimal" onClick={() => onSelect(project)}>
            VIEW DETAILS
          </button>
          {project.github ? (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="mini-link">
              GitHub
            </a>
          ) : null}
          {project.liveDemo ? (
            <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="mini-link">
              Live Demo
            </a>
          ) : null}
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
