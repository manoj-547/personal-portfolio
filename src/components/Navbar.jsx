import React, { useState } from 'react'

function Navbar({ scrollPosition }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const handleNavClick = () => {
    setMenuOpen(false)
  }

  const navbarStyle = {
    boxShadow: scrollPosition > 100 ? '0 2px 10px rgba(0, 0, 0, 0.2)' : '0 4px 6px rgba(0, 0, 0, 0.1)'
  }

  return (
    <nav className="navbar" style={navbarStyle}>
      <div className="container">
        <div className="nav-brand">B. Manoj</div>
        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <li><a href="#home" className="nav-link" onClick={handleNavClick}>Home</a></li>
          <li><a href="#about" className="nav-link" onClick={handleNavClick}>About</a></li>
          <li><a href="#projects" className="nav-link" onClick={handleNavClick}>Projects</a></li>
          <li><a href="#skills" className="nav-link" onClick={handleNavClick}>Skills</a></li>
          <li><a href="#contact" className="nav-link" onClick={handleNavClick}>Contact</a></li>
        </ul>
        <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
