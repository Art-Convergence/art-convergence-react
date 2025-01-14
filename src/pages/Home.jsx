import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Gallery from '../components/Gallery'
import Contact from '../components/Contact'
import './Home.css'

function Home() {
  return (
    <motion.main 
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero />
      <Services />
      <Gallery />
      <Contact />
    </motion.main>
  )
}

export default Home 