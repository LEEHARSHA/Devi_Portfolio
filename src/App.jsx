import { useEffect, useMemo, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Hackathons from './components/Hackathons'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ThemeToggle from './components/ThemeToggle'
import ScrollProgress from './components/ScrollProgress'
import BackToTop from './components/BackToTop'

const getInitialTheme = () => {
  if (typeof window === 'undefined') return 'dark'

  const saved = localStorage.getItem('kintali-theme')
  if (saved) return saved

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function App() {
  const [theme, setTheme] = useState(() => getInitialTheme())
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('kintali-theme', theme)
  }, [theme])

  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      const progress = total > 0 ? (window.scrollY / total) * 100 : 0
      setScrollProgress(progress)
      setShowBackToTop(window.scrollY > 300)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const themeLabel = useMemo(() => (theme === 'dark' ? 'light' : 'dark'), [theme])

  return (
    <>
      <ScrollProgress progress={scrollProgress} />
      <div className="app-shell">
        <div className="theme-switch-wrap">
          <ThemeToggle theme={theme} onToggle={() => setTheme(themeLabel)} />
        </div>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Hackathons />
          <Contact />
        </main>
        <Footer />
        <BackToTop visible={showBackToTop} onClick={handleBackToTop} />
      </div>
    </>
  )
}

export default App
