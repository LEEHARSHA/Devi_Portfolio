import { hackathons } from '../data/hackathons'

const Hackathons = () => {
  const items = Array.isArray(hackathons) ? hackathons : []

  if (!items.length) {
    return (
      <section id="hackathons" className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Hackathons & Innovation</p>
            <h2>Hackathons &amp; Innovation</h2>
          </div>
          <div className="empty-state">
            <p>Future innovation milestones will be added here.</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="hackathons" className="section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Hackathons & Innovation</p>
          <h2>Hackathons &amp; Innovation</h2>
        </div>

        <div className="hackathon-grid">
          {items.map((item) => (
            <article key={`${item.name}-${item.year}`} className="hackathon-card">
              <p className="eyebrow">{item.year || 'Year'}</p>
              <h3>{item.name || 'Hackathon'}</h3>
              <p className="hackathon-role">{item.role || 'Participant'}</p>
              <p>{item.description || 'Details coming soon.'}</p>
              {item.result ? <p className="hackathon-result">{item.result}</p> : null}
              {item.link ? (
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="mini-link">
                  View Link
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hackathons
