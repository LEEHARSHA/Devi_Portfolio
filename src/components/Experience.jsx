import { experience } from '../data/experience'

const Experience = () => {
  const items = Array.isArray(experience) ? experience : []

  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Journey</p>
          <h2>My Journey</h2>
        </div>

        {items.length ? (
          <div className="timeline">
            {items.map((item) => (
              <div key={`${item.type}-${item.title}`} className="timeline-item">
                <div className="timeline-dot" aria-hidden="true" />
                <div className="timeline-content">
                  <span className="timeline-category">{item.type || 'Learning'}</span>
                  <h3>{item.title || 'Experience'}</h3>
                  <p className="timeline-organization">{item.organization || 'Independent learning'}</p>
                  <p>{item.description || 'Details will be updated soon.'}</p>
                  {item.startDate || item.endDate ? (
                    <span className="timeline-year">
                      {item.startDate || 'Current'}
                      {item.startDate && item.endDate ? ` — ${item.endDate}` : ''}
                    </span>
                  ) : null}
                  {item.responsibilities?.length ? (
                    <ul className="timeline-list">
                      {item.responsibilities.map((responsibility) => (
                        <li key={responsibility}>{responsibility}</li>
                      ))}
                    </ul>
                  ) : null}
                  {item.technologies?.length ? (
                    <div className="tag-list">
                      {item.technologies.map((tech) => (
                        <span key={tech} className="tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <p>Experience details will be updated soon.</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default Experience
