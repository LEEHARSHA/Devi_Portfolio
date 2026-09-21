import { education } from '../data/education'

const Education = () => {
  const items = Array.isArray(education) ? education : []

  return (
    <section id="education" className="section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Education</p>
          <h2>Education</h2>
        </div>

        {items.length ? (
          <div className="education-grid">
            {items.map((item) => (
              <article key={`${item.institution}-${item.degree}`} className="education-card">
                <p className="eyebrow">{item.startYear || item.endYear ? `${item.startYear || ''}${item.startYear && item.endYear ? ' - ' : ''}${item.endYear || ''}` : 'Year'}</p>
                <h3>{item.institution || 'Institution'}</h3>
                <p className="education-degree">{item.degree || 'Degree'}</p>
                <p className="education-field">{item.field || 'Field of study'}</p>
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
