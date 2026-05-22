import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { useScrollAnimation } from '../hooks/useScroll'
import './Contact.css'

// Initialize EmailJS - Replace with your public key from EmailJS
emailjs.init('7BFHtVXjXwcMpXj1f')

const Contact = () => {
  useScrollAnimation()
  const formRef = useRef()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState(null) // 'loading', 'success', 'error'
  const [statusMessage, setStatusMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const validateForm = () => {
    if (!formData.name.trim()) {
      setStatusMessage('Please enter your name')
      return false
    }
    if (!formData.email.trim()) {
      setStatusMessage('Please enter your email')
      return false
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setStatusMessage('Please enter a valid email')
      return false
    }
    if (!formData.message.trim()) {
      setStatusMessage('Please enter a message')
      return false
    }
    if (formData.message.trim().length < 10) {
      setStatusMessage('Message must be at least 10 characters')
      return false
    }
    return true
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      setStatus('error')
      return
    }

    setStatus('loading')
    setStatusMessage('')

    try {
      // Replace these with your EmailJS service details
      const result = await emailjs.send(
        'service_z67t5te',
        'template_9iyi5x3',
        {
          to_email: 'dananjaya24945@gmail.com',
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        }
      )

      if (result.text === 'OK') {
        setStatus('success')
        setStatusMessage('Message sent successfully! I will get back to you soon.')
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setStatus(null), 5000)
      }
    } catch (error) {
      setStatus('error')
      setStatusMessage('Failed to send message. Please try again later.')
      console.error('EmailJS Error:', error)
    }
  }

  return (
    <section id="contact">
      <div className="section-label">Let's Connect</div>
      <div className="section-title">Contact Me</div>
      <div className="section-sub">
        I'm always open to new opportunities and collaborations
      </div>

      <div className="contact-wrapper">
        {/* Contact Form */}
        <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              rows="6"
              className="form-textarea"
            ></textarea>
          </div>

          {status && (
            <div className={`status-message status-${status}`}>
              {statusMessage}
            </div>
          )}

          <button
            type="submit"
            className="submit-btn"
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
