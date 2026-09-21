import { useMemo, useState } from 'react'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'

const filters = ['ALL', 'AI', 'WEB', 'SOFTWARE', 'ENGINEERING']

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('ALL')
  const [selectedProject, setSelectedProject] = useState(null)

  const visibleProjects = useMemo(() => {
    if (!Array.isArray(projects) || !projects.length) return []

    if (activeFilter === 'ALL') return projects

    return projects.filter((project) =>
      project.category?.toUpperCase() === activeFilter ||
      (project.technologies || []).some((tech) => tech.toUpperCase() === activeFilter),
    )
  }, [activeFilter])

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Projects</p>
          <h2>Things I&apos;ve Built</h2>
          <p className="section-subtitle">Projects, experiments, and ideas transformed into technology.</p>
        </div>

        {!projects || !projects.length ? (
          <div className="empty-state">
            <p>Projects will be added soon.</p>
          </div>
        ) : (
          <>
            <div className="filter-row" aria-label="Project filters">
              {filters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                  onClick={() => setActiveFilter(filter)}
                  aria-pressed={activeFilter === filter}
                >
                  {filter}
                </button>
              ))}
            </div>

            <div className="projects-grid">
              {visibleProjects.length ? (
                visibleProjects.map((project) => (
                  <ProjectCard key={project.id || project.title} project={project} onSelect={setSelectedProject} />
                ))
              ) : (
                <div className="empty-state empty-state--wide">
                  <p>No projects match this filter yet.</p>
                </div>
              )}
            </div>
          </>
        )}
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  )
}

export default Projects
