import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>The Art Convergence</h3>
          <p>Design, Develop, Deliver IT</p>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>contact@artconvergence.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} The Art Convergence</p>
      </div>
    </footer>
  )
}

export default Footer
