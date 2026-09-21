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
              <div key={`${item.category}-${item.title || item.name}`} className="timeline-item">
                <div className="timeline-dot" aria-hidden="true" />
                <div className="timeline-content">
                  <span className="timeline-category">{item.category || 'Learning'}</span>
                  <h3>{item.title || item.name || 'Experience'}</h3>
                  <p>{item.description || 'Details will be updated soon.'}</p>
                  {item.year ? <span className="timeline-year">{item.year}</span> : null}
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
