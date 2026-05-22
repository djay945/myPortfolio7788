import React, { useEffect, useRef, useState } from 'react'
import { useScrollAnimation } from '../hooks/useScroll'
import { portfolioData } from '../data'
import './Skills.css'

const Skills = () => {
  useScrollAnimation()
  const { skillsWithProficiency } = portfolioData
  const skillsRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show')
          }
        })
      },
      { threshold: 0.1 }
    )

    // Re-observe all skill items
    skillsRef.current.forEach((el) => {
      if (el) {
        observer.observe(el)
      }
    })

    return () => observer.disconnect()
  })

  //  Skill Item (list view)
  const SkillItem = ({ skill, index }) => {
    const [filled, setFilled] = useState(false)

    return (
      <div
        key={skill.name}
        className="skill-item"
        ref={(el) => (skillsRef.current[index] = el)}
        style={{ transitionDelay: `${index * 50}ms` }}
        onMouseEnter={() => setFilled(true)}
      >
        <div className="skill-header">
          <span className="skill-name">{skill.name}</span>
          <span className="skill-percentage">{skill.proficiency}%</span>
        </div>

        <div className="progress-bar-container">
          <div
            className={`progress-bar ${filled ? 'filled' : ''}`}
            style={{ '--progress': `${skill.proficiency}%` }}
          />
        </div>
      </div>
    )
  }

  //  Skill Card (grid view)
  const SkillCard = ({ skill, index }) => {
    const [filled, setFilled] = useState(false)

    return (
      <div
        key={skill.name}
        className="skill-card"
        ref={(el) => (skillsRef.current[index + 20] = el)}
        onMouseEnter={() => setFilled(true)}
      >
        <div className="skill-card-name">{skill.name}</div>

        <div className="skill-card-bar-container">
          <div
            className={`skill-card-bar ${filled ? 'filled' : ''}`}
            style={{ '--progress': `${skill.proficiency}%` }}
          />
        </div>

        <div className="skill-card-percentage">
          {skill.proficiency}%
        </div>
      </div>
    )
  }

  return (
    <section id="skills">
      <div className="section-label">Expertise</div>
      <div className="section-title">Skills</div>
      <div className="section-sub">
        Tools, technologies, and frameworks I work with
      </div>

      <div className="skills-container">
        {/* First Column */}
        <div className="skill-category">
          <div className="skill-category-title">💻 Programming & Development</div>
          {skillsWithProficiency.slice(0, 6).map((skill, index) => (
            <SkillItem key={skill.name} skill={skill} index={index} />
          ))}
        </div>

        {/* Second Column */}
        <div className="skill-category">
          <div className="skill-category-title">🎯 Technical Skills</div>
          {skillsWithProficiency.slice(6, 10).map((skill, index) => (
            <SkillItem key={skill.name} skill={skill} index={6 + index} />
          ))}
        </div>
      </div>

      {/* Grid View */}
      
    </section>
  )
}

export default Skills