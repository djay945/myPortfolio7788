import React, { useState, useEffect } from 'react'
import './ScrollToTop.css'

const ScrollToTop = ({ isDark, onThemeToggle }) => {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return (
    <div className={`scroll-buttons ${isVisible ? 'visible' : ''}`}>
      <button
        className="theme-btn-float"
        onClick={onThemeToggle}
        aria-label="Toggle theme"
      >
        {isDark ? '🌙' : '☀️'}
      </button>
      <button
        className="scroll-to-top"
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
      </button>
    </div>
  )
}

export default ScrollToTop
