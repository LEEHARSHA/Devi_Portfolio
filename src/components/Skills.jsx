import { useMemo, useState } from 'react'
import { skills } from '../data/skills'

const categories = ['ALL', 'PROGRAMMING', 'WEB', 'DATABASE', 'AI', 'TOOLS']

const Skills = () => {
  const [activeFilter, setActiveFilter] = useState('ALL')
  const hasSkills = Array.isArray(skills) && skills.length > 0

  const visibleSkills = useMemo(() => {
    if (!hasSkills) return []

    if (activeFilter === 'ALL') return skills

    return skills.filter((skill) => skill.category?.toUpperCase() === activeFilter)
  }, [activeFilter, hasSkills])

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Skills</p>
          <h2>Skills</h2>
        </div>

        {hasSkills ? (
          <>
            <div className="filter-row" aria-label="Skills filters">
              {categories.map((category) => (
                <button
                  type="button"
                  key={category}
                  className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
                  aria-pressed={activeFilter === category}
                  aria-label={`Filter ${category}`}
                  onClick={() => setActiveFilter(category)}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="skills-grid">
              {visibleSkills.map((skill) => (
                <article key={skill.name || skill.category} className="skill-card">
                  <div className="skill-card__icon" aria-hidden="true">{skill.icon || '•'}</div>
                  <h3>{skill.name || 'Skill'}</h3>
                  <p className="skill-card__category">{skill.category || 'General'}</p>
                  <p>{skill.description || 'Skill details will be added soon.'}</p>
                </article>
              ))}
            </div>
          </>
        ) : (
          <div className="empty-state">
            <p>Skills are being updated.</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default Skills
