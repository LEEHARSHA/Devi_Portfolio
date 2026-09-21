import { useEffect, useRef } from 'react'

const ProjectModal = ({ project, onClose }) => {
  const modalRef = useRef(null)
  const previousFocus = useRef(null)

  useEffect(() => {
    previousFocus.current = document.activeElement

    const focusable = modalRef.current?.querySelectorAll(
      'button, [href], input, textarea, select, [tabindex]:not([tabindex="-1"])',
    )
    focusable?.[0]?.focus()

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }

      if (event.key === 'Tab' && modalRef.current) {
        const focusableItems = [...modalRef.current.querySelectorAll(
          'button, [href], input, textarea, select, [tabindex]:not([tabindex="-1"])',
        )]

        if (!focusableItems.length) return

        const first = focusableItems[0]
        const last = focusableItems[focusableItems.length - 1]

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      previousFocus.current?.focus()
    }
  }, [onClose])

  if (!project) return null

  const hasGithub = Boolean(project.github)
  const hasLiveDemo = Boolean(project.liveDemo)

  return (
    <div className="modal-overlay" onClick={onClose} role="presentation">
      <div
        className="project-modal"
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="modal-close"
          onClick={onClose}
          aria-label="Close project details"
        >
          ×
        </button>

        <div className="project-modal__image-wrap">
          {project.image ? (
            <img src={project.image} alt={project.title} className="project-modal__image" />
          ) : (
            <div className="project-modal__fallback">Project preview unavailable</div>
          )}
        </div>

        <div className="project-modal__content">
          <p className="eyebrow">{project.category || 'Project'}</p>
          <h3 id="project-modal-title">{project.title}</h3>
          <p>{project.description}</p>

          {project.technologies?.length ? (
            <div className="project-modal__meta">
              <h4>Technologies</h4>
              <div className="tag-list">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ) : null}

          {project.features?.length ? (
            <div className="project-modal__meta">
              <h4>Features</h4>
              <ul className="feature-list">
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>
          ) : null}

          <div className="project-modal__actions">
            {hasGithub && (
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            )}
            {hasLiveDemo && (
              <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectModal
