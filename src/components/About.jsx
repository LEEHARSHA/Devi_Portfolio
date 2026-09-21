const aboutCards = [
  { title: 'TECHNOLOGY', description: 'Exploring tools, systems, and ideas that shape digital experiences.', icon: '⚡' },
  { title: 'LEARNING', description: 'Growing through curiosity, self-driven study, and practical experimentation.', icon: '✦' },
  { title: 'BUILDING', description: 'Turning concepts into useful solutions with a hands-on mindset.', icon: '▣' },
  { title: 'INNOVATION', description: 'Looking for better ways to solve real problems with technology.', icon: '◎' },
]

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">About Me</p>
          <h2>About Me</h2>
        </div>

        <div className="about-content">
          <p>
            I&apos;m Kintali Devi, a Computer Science student with a growing interest in software development,
            technology, problem solving, and building practical digital experiences. I enjoy learning new technologies
            and transforming ideas into useful solutions.
          </p>

          <div className="info-grid">
            {aboutCards.map((card) => (
              <article key={card.title} className="info-card">
                <div className="info-card__icon" aria-hidden="true">{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
