import { Link } from 'react-router-dom';
import { FaLinkedin, FaFacebookF, FaInstagram, FaArtstation, FaGithub, FaXTwitter, FaWhatsapp } from 'react-icons/fa6';
import { MdEmail, MdPhone, MdHome, MdInfo, MdMiscellaneousServices, MdPhotoLibrary, MdContactPage } from 'react-icons/md';
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="company-name">The Art Convergence</h3>
          <p>Design, Develop, Deliver IT</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li>
              <MdHome className="link-icon" />
              <Link to="/">Home</Link>
            </li>
            <li>
              <MdInfo className="link-icon" />
              <Link to="/about">About</Link>
            </li>
            <li>
              <MdMiscellaneousServices className="link-icon" />
              <Link to="/services">Services</Link>
            </li>
            <li>
              <MdPhotoLibrary className="link-icon" />
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <MdContactPage className="link-icon" />
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <div className="contact-info">
            <p>
              <MdEmail className="contact-icon" />
              <a href="mailto:artcovergence@outlook.com">artcovergence@outlook.com</a>
            </p>
            <p>
              <MdPhone className="contact-icon" />
              <a href="tel:+971503486897">+971 50 348 6897</a>
            </p>
            <p>
              <FaWhatsapp className="contact-icon" />
              <a href="https://wa.me/971503486897" target="_blank" rel="noopener noreferrer">
                Art Convergence
              </a>
            </p>
          </div>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="https://www.linkedin.com/company/105435888" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61565739043517&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://artconvergence.artstation.com/" target="_blank" rel="noopener noreferrer" aria-label="ArtStation">
              <FaArtstation />
            </a>
            <a href="https://x.com/" target="_blank" rel="noopener noreferrer" aria-label="X (formerly Twitter)">
              <FaXTwitter />
            </a>
            <a href="https://github.com/artconvergence" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} The Art Convergence. All rights reserved.</p>
        <p className="developer-credit">
          Made with <span className="heart">❤️</span> by{" "}
          <a 
            href="https://www.linkedin.com/in/wali-haider-6497a5251/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="developer-link"
          >
            Syed Wali Haider
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
