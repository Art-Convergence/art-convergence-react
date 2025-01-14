import { motion } from 'framer-motion'
import './Gallery.css'

function Gallery() {
  const projects = [
    {
      id: 1,
      title: 'Project 1',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 2,
      title: 'Project 2',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 3,
      title: 'Project 3',
      image: 'https://via.placeholder.com/300',
    }
  ]

  return (
    <section className="gallery">
      <h2>Our Work</h2>
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

export default Gallery 