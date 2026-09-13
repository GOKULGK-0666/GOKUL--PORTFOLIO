import { useState } from 'react'
import About from './components/About'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Skills from './components/Skills'

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [showAllCertificates, setShowAllCertificates] = useState(false)

  return (
    <div className="site-shell">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Certificates
          showAll={showAllCertificates}
          setShowAll={setShowAllCertificates}
        />
        <Resume />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
