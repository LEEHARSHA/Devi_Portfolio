import ContactForm from './ContactForm'

const contactLinks = [
  { label: 'EMAIL', value: 'kkintali@student.gitam.edu', href: 'mailto:kkintali@student.gitam.edu' },
  { label: 'PHONE', value: '8688020963', href: 'tel:8688020963' },
  { label: 'GITHUB', value: 'https://github.com/kkintali-devi', href: 'https://github.com/kkintali-devi' },
  { label: 'LINKEDIN', value: 'https://www.linkedin.com/in/kintali-devi-07bb12424/', href: 'https://www.linkedin.com/in/kintali-devi-07bb12424/' },
]

const Contact = () => {
  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-grid">
        <div className="contact-intro">
          <p className="eyebrow">Contact</p>
          <h2>Let&apos;s Build Something.</h2>
          <p>Have an idea, project, collaboration opportunity, or simply want to connect? Let&apos;s talk.</p>

          <div className="contact-list">
            {contactLinks.map((link) => (
              <a key={link.label} href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined} className="contact-item">
                <span>{link.label}</span>
                <strong>{link.value}</strong>
              </a>
            ))}
          </div>

          <div className="hero-actions compact-actions">
            <a href="mailto:kkintali@student.gitam.edu" className="button primary">EMAIL ME</a>
            <a href="tel:8688020963" className="button secondary">CALL</a>
            <a href="https://github.com/kkintali-devi" target="_blank" rel="noopener noreferrer" className="button tertiary">GITHUB</a>
            <a href="https://www.linkedin.com/in/kintali-devi-07bb12424/" target="_blank" rel="noopener noreferrer" className="button tertiary">LINKEDIN</a>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  )
}

export default Contact
