import React, { useEffect, useRef } from 'react'
import { useScrollAnimation } from '../hooks/useScroll'
import { portfolioData } from '../data'
import './Education.css'

const Education = () => {
  useScrollAnimation()
  const { education, certifications } = portfolioData
  const cardsRef = useRef([])

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

    cardsRef.current.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="education">
      <div className="section-label">Academic</div>
      <div className="section-title">Education</div>
      <div className="section-sub">My academic journey</div>

      {education.map((edu, index) => (
        <div
          key={edu.id}
          ref={(el) => (cardsRef.current[index] = el)}
          className="edu-card"
          id={edu.id}
        >
          <div className="edu-icon">{edu.icon}</div>
          <div>
            <div className="edu-degree">{edu.degree}</div>
            <div className="edu-uni">{edu.institution}</div>
            <div className="edu-year">{edu.years}</div>
            <div className="edu-note">{edu.note}</div>
          </div>
        </div>
      ))}

      <div style={{ marginTop: '32px' }}>
        <div className="section-label" style={{ marginBottom: '12px' }}>
          Certifications
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          {certifications.map((cert) => (
            <div
              key={cert.name}
              style={{
                background: 'var(--card)',
                border: '1px solid var(--border)',
                borderRadius: '10px',
                padding: '12px 18px',
                fontSize: '13px',
              }}
            >
              <strong>{cert.name}</strong>
              <span
                style={{
                  color: 'var(--text2)',
                  display: 'block',
                  fontSize: '11px',
                  marginTop: '2px',
                }}
              >
                {cert.issuer} · {cert.year}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
