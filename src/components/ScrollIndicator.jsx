import React from 'react'
import { useScrollProgress } from '../hooks/useScroll'
import './ScrollIndicator.css'

const ScrollIndicator = () => {
  const scrollProgress = useScrollProgress()

  return (
    <div
      className="scroll-indicator"
      style={{ width: `${scrollProgress}%` }}
    />
  )
}

export default ScrollIndicator
