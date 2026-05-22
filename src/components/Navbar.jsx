import React, { useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useActiveNavLink } from '../hooks/useScroll'
import './Navbar.css'

const Navbar = ({ isDark, onThemeToggle }) => {
  const activeSection = useActiveNavLink()
  const navRef = useRef(null)
  const location = useLocation()
  const navigate = useNavigate()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleNavigation = (id) => {
    setMobileMenuOpen(false)
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => scrollTo(id), 100)
    } else {
      scrollTo(id)
    }
  }

  const handleProjectsClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <nav ref={navRef}>
      <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className="logo">&lt;djay.dev /&gt;</div>
      </Link>
      
      {/* Hamburger Menu Button */}
      <button
        className={`hamburger-btn ${mobileMenuOpen ? 'active' : ''}`}
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Desktop Navigation */}
      <div className="nav-links">
        <a
          onClick={() => handleNavigation('about')}
          className={location.pathname === '/' && activeSection === 'about' ? 'active' : ''}
          style={{ cursor: 'pointer' }}
        >
          About
        </a>

        <a
          onClick={() => handleNavigation('experience')}
          className={location.pathname === '/' && activeSection === 'experience' ? 'active' : ''}
          style={{ cursor: 'pointer' }}
        >
          Experience
        </a>
        
        <Link
          to="/projects"
          onClick={handleProjectsClick}
          className={location.pathname === '/projects' ? 'active' : ''}
          style={{ cursor: 'pointer' }}
        >
          Projects
        </Link>
        
        <a
          onClick={() => handleNavigation('education')}
          className={location.pathname === '/' && activeSection === 'education' ? 'active' : ''}
          style={{ cursor: 'pointer' }}
        >
          Education
        </a>

        <a
          onClick={() => handleNavigation('skills')}
          className={location.pathname === '/' && activeSection === 'skills' ? 'active' : ''}
          style={{ cursor: 'pointer' }}
        >
          Skills
        </a>

        <a
          onClick={() => handleNavigation('contact')}
          className={location.pathname === '/' && activeSection === 'contact' ? 'active' : ''}
          style={{ cursor: 'pointer' }}
        >
          Contact
        </a>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          <a
            onClick={() => handleNavigation('about')}
            style={{ cursor: 'pointer' }}
          >
            About
          </a>
          <a
            onClick={() => handleNavigation('skills')}
            style={{ cursor: 'pointer' }}
          >
            Skills
          </a>
          <Link
            to="/projects"
            onClick={handleProjectsClick}
            style={{ textDecoration: 'none' }}
          >
            Projects
          </Link>
          <a
            onClick={() => handleNavigation('experience')}
            style={{ cursor: 'pointer' }}
          >
            Experience
          </a>
          <a
            onClick={() => handleNavigation('education')}
            style={{ cursor: 'pointer' }}
          >
            Education
          </a>
          <a
            onClick={() => handleNavigation('contact')}
            style={{ cursor: 'pointer' }}
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  )
}

export default Navbar
