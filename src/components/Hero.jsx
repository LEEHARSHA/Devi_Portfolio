import { useMemo, useState, useEffect } from 'react'

const words = ['I EXPLORE', 'TECHNOLOGY', 'SOFTWARE', 'AI', 'WEB DEVELOPMENT', 'INNOVATION']

const Hero = () => {
  const [wordIndex, setWordIndex] = useState(0)
  const [resumeMessage, setResumeMessage] = useState('')

  useEffect(() => {
    const timer = setInterval(() => {
      setWordIndex((current) => (current + 1) % words.length)
    }, 1700)

    return () => clearInterval(timer)
  }, [])

  const activeWord = useMemo(() => words[wordIndex], [wordIndex])

  const handleResumeClick = async (event) => {
    event.preventDefault()

    try {
      const response = await fetch('/assets/Kintali-Devi-Resume.pdf', { method: 'HEAD' })

      if (response.ok) {
        window.open('/assets/Kintali-Devi-Resume.pdf', '_blank', 'noopener,noreferrer')
        setResumeMessage('')
        return
      }

      setResumeMessage('Resume is not available yet. Place the real PDF at public/assets/Kintali-Devi-Resume.pdf to enable the download.')
    } catch (error) {
      setResumeMessage('Resume file could not be located. Place the real PDF at public/assets/Kintali-Devi-Resume.pdf.')
    }
  }

  return (
    <section id="home" className="hero-section section">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="eyebrow-block">
            <span className="eyebrow">Computer Science Student | Developer | Technology Enthusiast</span>
          </div>
          <h1>Turning Ideas Into Technology.</h1>
          <p className="hero-intro">
            I&apos;m Kintali Devi — a Computer Science student passionate about technology, learning, and building meaningful digital experiences.
          </p>

          <div className="animated-word" aria-live="polite">
            <span className="animated-word__label">{activeWord}</span>
          </div>

          <div className="hero-actions">
            <a href="#projects" className="button primary">EXPLORE MY WORK</a>
            <button type="button" className="button secondary" onClick={handleResumeClick}>
              DOWNLOAD RESUME
            </button>
            <a href="#contact" className="button tertiary">LET&apos;S CONNECT</a>
          </div>

          {resumeMessage ? <p className="resume-note">{resumeMessage}</p> : null}

          <div className="social-strip" aria-label="Social links">
            <a href="https://github.com/kkintali-devi" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/kintali-devi-07bb12424/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
              LinkedIn
            </a>
            <a href="mailto:kkintali@student.gitam.edu" aria-label="Email Kintali Devi">Email</a>
            <a href="tel:8688020963" aria-label="Call Kintali Devi">Phone</a>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="visual-shell">
            <div className="window-header">
              <span />
              <span />
              <span />
            </div>
            <div className="code-block">
              <span>const curiosity = true</span>
              <span>while (learning) {'{'}</span>
              <span>  buildSolutions()</span>
              <span>  exploreAI()</span>
              <span>  craftWeb()</span>
              <span>{'}'}</span>
            </div>
            <div className="tech-card card-top">AI</div>
            <div className="tech-card card-middle">WEB</div>
            <div className="tech-card card-bottom">CODE</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
