import React, { useEffect, useRef, useState } from 'react'
import { useScrollAnimation } from '../hooks/useScroll'
import { portfolioData } from '../data'
import './Projects.css'

const Projects = () => {
  useScrollAnimation()
  const { projects } = portfolioData
  const cardsRef = useRef([])
  const [imageIndices, setImageIndices] = useState({})

  // Initialize image indices for all projects
  useEffect(() => {
    const indices = {}
    projects.forEach((project) => {
      indices[project.id] = 0
    })
    setImageIndices(indices)
  }, [projects])

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
  })

  const nextImage = (projectId, totalImages) => {
    setImageIndices((prev) => ({
      ...prev,
      [projectId]: (prev[projectId] + 1) % totalImages,
    }))
  }

  const prevImage = (projectId, totalImages) => {
    setImageIndices((prev) => ({
      ...prev,
      [projectId]: (prev[projectId] - 1 + totalImages) % totalImages,
    }))
  }

  return (
    <section id="projects">
      <div className="section-label">Portfolio</div>
      <div className="section-title">Projects</div>
      <div className="section-sub">I've done various projects including both individual and group collaborations.</div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={project.id}
            ref={(el) => (cardsRef.current[index] = el)}
            className="proj-card"
            id={project.id}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            {project.video && (
              <div className="proj-video-container">
                <video 
                  src={project.video} 
                  controls 
                  className="proj-video"
                  poster="https://via.placeholder.com/600x400?text=Video+Thumbnail"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
            {project.images && project.images.length > 0 && (
              <div className="proj-image-container">
                <img
                  src={project.images[imageIndices[project.id] || 0]}
                  alt={`${project.title} - Screenshot ${(imageIndices[project.id] || 0) + 1}`}
                  className="proj-image"
                />
                {project.images.length > 1 && (
                  <>
                    <button
                      className="proj-image-btn proj-image-prev"
                      onClick={() => prevImage(project.id, project.images.length)}
                      aria-label="Previous image"
                    >
                      ‹
                    </button>
                    <button
                      className="proj-image-btn proj-image-next"
                      onClick={() => nextImage(project.id, project.images.length)}
                      aria-label="Next image"
                    >
                      ›
                    </button>
                    <div className="proj-image-dots">
                      {project.images.map((_, dotIndex) => (
                        <div
                          key={dotIndex}
                          className={`dot ${
                            dotIndex === (imageIndices[project.id] || 0) ? 'active' : ''
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            )}
            <div className="proj-icon">{project.icon}</div>
            <div className="proj-title">{project.title}</div>
            <div className="proj-desc">{project.description}</div>
            <div className="proj-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="proj-tag">
                  {tag}
                </span>
              ))}
            </div>
            <div className="proj-links">
              {project.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="proj-link"
                >
                  {link.label}
                </a>
              ))}
              {project.liveNote && <p className="proj-live-note">{project.liveNote}</p>}  
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
