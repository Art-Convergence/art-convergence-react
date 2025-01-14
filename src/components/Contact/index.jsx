import { motion } from 'framer-motion'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css'

function ContactForm() {
  const [formData, setFormData] = useState({
    from_name: '',
    email: '',
    message: '',
    to_name: 'Admin' // This will be shown in the email you receive
  })
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          to_name: formData.to_name,
          from_name: formData.from_name,
          message: formData.message,
          reply_to: formData.email,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )

      if (result.status === 200) {
        setStatus('success')
        setFormData({ 
          from_name: '', 
          email: '', 
          message: '', 
          to_name: 'Admin' 
        })
      }
    } catch (error) {
      setStatus('error')
      console.error('Error sending email:', error)
    }
  }

  return (
    <section className="contact">
      <h2>Contact Us</h2>
      <motion.form 
        className="contact-form"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onSubmit={handleSubmit}
      >
        <div className="form-group">
          <input 
            type="text" 
            name="from_name"
            value={formData.from_name}
            onChange={handleChange}
            placeholder="Your Name" 
            required 
          />
        </div>
        <div className="form-group">
          <input 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email" 
            required 
          />
        </div>
        <div className="form-group">
          <textarea 
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message" 
            required
          ></textarea>
        </div>
        <motion.button 
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={status === 'sending'}
        >
          {status === 'sending' ? 'Sending...' : 'Send Message'}
        </motion.button>

        {status === 'success' && (
          <p className="success-message">Message sent successfully!</p>
        )}
        {status === 'error' && (
          <p className="error-message">Failed to send message. Please try again.</p>
        )}
      </motion.form>
    </section>
  )
}

export default ContactForm 