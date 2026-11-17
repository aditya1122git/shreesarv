import { useState } from 'react'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="nav-wrap">
      <a href="#top" className="wordmark" aria-label="Shreesarv Intelligence home" onClick={closeMenu}>
        <img className="brand-logo" src="/Shreesarv-Logo.png" alt="Shreesarv Intelligence logo" />
        <span>SHREESARV<br /><small>INTELLIGENCE</small></span>
      </a>
      <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation">
        <span></span><span></span>
      </button>
      <nav className={menuOpen ? 'open' : ''} aria-label="Main navigation">
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#services" onClick={closeMenu}>Services</a>
        <a href="#approach" onClick={closeMenu}>Approach</a>
        <a href="#capabilities" onClick={closeMenu}>Capabilities</a>
        <a href="#contact" className="nav-cta" onClick={closeMenu}>Start a project <i className="fa-solid fa-arrow-right"></i></a>
      </nav>
    </header>
  )
}

export default Header
