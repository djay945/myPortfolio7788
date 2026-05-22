import React from 'react'
import Hero from '../sections/Hero'
import Skills from '../sections/Skills'
import Experience from '../sections/Experience'
import Projects from '../sections/Projects'
import Education from '../sections/Education'
import Contact from '../sections/Contact'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <>
      <Hero />
      <Experience />
      <Projects />
      <Education />
      <Skills />
      <Contact />
      <Footer />
    </>
  )
}

export default HomePage
