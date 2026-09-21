import { education } from '../data/education'

const Education = () => {
  const items = Array.isArray(education) ? education : []

  return (
    <section id="education" className="section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Education</p>
          <h2>Education</h2>
          <p className="section-subtitle">Academic foundation and continuous technical growth.</p>
        </div>

        {items.length ? (
          <div className="education-grid">
            {items.map((item) => (
              <article key={`${item.institution}-${item.degree}`} className="education-card academic-card">
                <div className="education-badge" aria-hidden="true">🎓</div>
                <p className="eyebrow">{item.institution || 'Institution'}</p>
                <h3>{item.degree || 'Degree'}</h3>
                <p className="education-field">{item.field || 'Field of study'}</p>
                <div className="education-meta">
                  <span>Expected Graduation: {item.graduationYear || 'N/A'}</span>
                  <span>{item.status || 'Status'}</span>
                </div>
                <p>{item.description || 'Details will be updated soon.'}</p>
              </article>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <p>Education details will be updated soon.</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default Education
