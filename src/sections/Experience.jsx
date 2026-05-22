import React, { useEffect, useRef } from 'react'
import { useScrollAnimation } from '../hooks/useScroll'
import { portfolioData } from '../data'
import './Experience.css'

const Experience = () => {
  useScrollAnimation()
  const { experience } = portfolioData
  const itemsRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show')
          }
        })
      },
      { threshold: 0.15 }
    )

    itemsRef.current.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience">
      <div className="section-label">Work History</div>
      <div className="section-title">Experience</div>
      <div className="section-sub">Internships & work placements</div>
      <div className="timeline">
        {experience.map((exp, index) => (
          <div
            key={exp.id}
            ref={(el) => (itemsRef.current[index] = el)}
            className="tl-item"
            id={exp.id}
          >
            <div className="tl-left">
              <div className="tl-dot" />
              {index < experience.length - 1 && (
                <div className="tl-line" />
              )}
            </div>
            <div className="tl-content">
              <div className="tl-card">
                <div className="tl-role">{exp.role}</div>
                <div className="tl-company">{exp.company}</div>
                <div className="tl-date">{exp.date}</div>
                <div className="tl-desc">{exp.description}</div>
                <div style={{ marginTop: '12px' }}>
                  {exp.tags.map((tag) => (
                    <span key={tag} className="badge">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
