import React, { useEffect, useState } from 'react'
import { useScrollAnimation } from '../hooks/useScroll'
import { portfolioData } from '../data'
import CVFile from '../assets/Dananjaya_Atapattu_CV.1.pdf'
import './Hero.css'

const Hero = () => {
  useScrollAnimation()
  const [heroVisible, setHeroVisible] = useState(false)
  const { personal, skills, stats } = portfolioData

  useEffect(() => {
    setTimeout(() => {
      setHeroVisible(true)
    }, 200)
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const downloadCV = () => {
    const link = document.createElement('a')
    link.href = CVFile
    link.download = 'Dananjaya_Atapattu_CV.1.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="about">
      <div className="hero-inner">
        <div className="hero-text">
          <div className="status">
            <span className="dot" />
            {personal.status}
          </div>
          <div
            className={`greeting ${heroVisible ? 'show' : ''}`}
            id="g1"

            style={{
               fontSize: '50px',
               fontWeight: '800',
               marginBottom: '16px', 
               fontFamily: 'monospace',
               letterSpacing: '2px',
            }}
          >
            Hi There, I'm
          </div>
          <h1 className={`name ${heroVisible ? 'show' : ''}`} id="g2">
            {personal.name}
          </h1>
          <div className={`role ${heroVisible ? 'show' : ''}`} id="g3">
            {personal.role}
          </div>
          <p className={`bio ${heroVisible ? 'show' : ''}`} id="g4">
            {personal.bio}
          </p>
          <div className={`hero-btns ${heroVisible ? 'show' : ''}`} id="g5">
            <button
              className="btn-primary"
              onClick={downloadCV}
            >
              Download CV
            </button>
            <button
              className="btn-outline"
              onClick={() => scrollTo('contact')}
            >
              Get In Touch
            </button>
          </div>
          <div
            className={`skill-chips ${heroVisible ? 'show' : ''}`}
            id="g6"
            style={{ marginTop: '24px' }}
          >
            {skills.map((skill) => (
              <span key={skill} className="chip">
                {skill}
              </span>
            ))}
          </div>
          <div
            className={`stats-container ${heroVisible ? 'show' : ''}`}
            id="g7"
          >
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="hero-image">
          <img
            src={personal.avatarImage}
            alt="Avatar"
            className={`avatar ${heroVisible ? 'show' : ''}`}
            id="avatar"
          />
          <div className="social-icons">
            {portfolioData.social.map((social) => (
              <a
                key={social.id}
                href={social.label === 'Email' ? `mailto:${social.value}` : `https://${social.value}`}
                title={social.label}
                className="social-icon"
                target={social.label !== 'Email' ? '_blank' : undefined}
                rel={social.label !== 'Email' ? 'noopener noreferrer' : undefined}
              >
                {social.icon.startsWith('http') ? (
                  <img src={social.icon} alt={social.label} className="social-icon-img" />
                ) : (
                  social.icon
                )}
              </a>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default Hero
