const Footer = () => {
  const footerLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <p>© 2025 Kintali Devi</p>
          <nav className="footer-links footer-nav" aria-label="Footer navigation">
            {footerLinks.map((link) => (
              <a key={link.label} href={link.href}>{link.label}</a>
            ))}
          </nav>
        </div>
        <div className="footer-links">
          <a href="https://github.com/kkintali-devi" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/kintali-devi-07bb12424/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:kkintali@student.gitam.edu">Email</a>
          <a href="tel:8688020963">Phone</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
