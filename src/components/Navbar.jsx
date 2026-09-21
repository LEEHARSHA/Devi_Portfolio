import { useEffect, useState } from 'react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      const sections = navItems
        .map((item) => document.querySelector(item.href))
        .filter(Boolean)

      const current = sections.findLast((section) => {
        const rect = section.getBoundingClientRect()
        return rect.top <= 150
      })

      if (current) {
        setActiveSection(current.id)
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('keydown', handleEsc)
    return () => document.removeEventListener('keydown', handleEsc)
  }, [])

  const handleNavClick = () => setIsMenuOpen(false)

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="nav container" aria-label="Main navigation">
        <a href="#home" className="brand" aria-label="Kintali Devi home">
          KINTALI DEVI
        </a>

        <button
          type="button"
          className="nav-toggle"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`nav-panel ${isMenuOpen ? 'open' : ''}`}>
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={activeSection === item.href.replace('#', '') ? 'active' : ''}
                  onClick={handleNavClick}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a href="#contact" className="nav-cta" onClick={handleNavClick}>
            LET&apos;S TALK <span aria-hidden="true">→</span>
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
