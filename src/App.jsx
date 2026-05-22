import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import ScrollIndicator from './components/ScrollIndicator'
import ScrollToTop from './components/ScrollToTop'
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'
import './styles/globals.css'

function App() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    document.documentElement.className = isDark ? '' : 'light'
  }, [isDark])

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <Router>
      <div className="app">
        <ScrollIndicator />
        <ScrollToTop isDark={isDark} onThemeToggle={toggleTheme} />
        <Navbar isDark={isDark} onThemeToggle={toggleTheme} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
