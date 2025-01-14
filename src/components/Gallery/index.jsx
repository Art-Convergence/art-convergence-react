import { motion } from 'framer-motion'
import './Gallery.css'

function GalleryPage() {
  const projects = [
    {
      id: 1,
      title: 'Project 1',
      image: 'https://artconvergence-html.netlify.app/Media/IMG-20241118-WA0003.jpg',
    },
    {
      id: 2,
      title: 'Project 2',
      image: 'https://artconvergence-html.netlify.app/Media/IMG-20241118-WA0004.jpg',
    },
    {
      id: 3,
      title: 'Project 3',
      image: 'https://artconvergence-html.netlify.app/Media/IMG-20241118-WA0005.jpg',
    }
  ]

  return (
    <section className="gallery">
      <div className="gallery-header">
        <h2>Our Work</h2>
      </div>
      <div className="gallery-grid">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="gallery-item"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <img src={project.image} alt={project.title} />
            <div className="project-info">
              <h3>{project.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default GalleryPage 