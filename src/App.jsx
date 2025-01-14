import { BrowserRouter as Router } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import AppRoutes from './routes'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './styles/global.css'

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