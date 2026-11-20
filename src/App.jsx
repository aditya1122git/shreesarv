import { useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Ticker from './components/Ticker'
import About from './components/About'
import Services from './components/Services'
import Approach from './components/Approach'
import Spotlight from './components/Spotlight'
import Capabilities from './components/Capabilities'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Careers from './components/Careers'

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('visible')),
      { threshold: 0.12 },
    )

    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="site-shell">
      <Header />
      <main id="top">
        <Hero />
        <Ticker />
        <About />
        <Services />
        <Approach />
        <Spotlight />
        <Capabilities />
        <Careers />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
