import { motion } from 'framer-motion'
import './Services.css'

function Services() {
  const services = [
    {
      title: 'Graphics Designing',
      description: 'Creative visual solutions for your brand identity, marketing materials, and digital assets.',
      icon: '🎨'
    },
    {
      title: 'Web Development',
      description: 'Custom, responsive websites and web applications built with modern technologies.',
      icon: '💻'
    },
    {
      title: 'Web Maintenance',
      description: 'Regular updates, security monitoring, and performance optimization for your website.',
      icon: '🔧'
    }
  ]

  return (
    <section className="services">
      <div className="services-container">
        <motion.div 
          className="services-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="services-title">Our Services</h2>
          <p className="services-subtitle">Comprehensive solutions for your digital needs</p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services 