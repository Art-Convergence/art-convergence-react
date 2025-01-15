import { BrowserRouter as Router } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import AppRoutes from './routes'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './styles/global.css'
import emailjs from '@emailjs/browser';

emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <AnimatePresence mode="wait">
          <AppRoutes />
        </AnimatePresence>
        <Footer />
      </div>
    </Router>
  )
}

export default App