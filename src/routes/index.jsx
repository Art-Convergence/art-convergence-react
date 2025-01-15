import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Services from '../pages/Services'
import Gallery from '../pages/Gallery'
import Contact from '../pages/Contact'
import About from '../pages/About'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
    </Routes>
  )
}

export default AppRoutes 