import { motion } from 'framer-motion';
import './About.css';

function AboutPage() {
  return (
    <section className="about">
      <div className="about-container">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="about-title"
        >
          About Us
        </motion.h1>

        <motion.div 
          className="about-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="about-section">
            <h2>Who We Are</h2>
            <p>
              Art Convergence is a creative hub where imagination meets expertise. 
              Founded with a passion for transforming spaces through innovative design, 
              we specialize in creating unique and captivating environments that tell 
              your story.
            </p>
          </div>

          <div className="about-section">
            <h2>Our Mission</h2>
            <p>
              To deliver exceptional design solutions that exceed expectations, 
              inspire creativity, and create lasting impressions. We believe in 
              the power of design to transform spaces and enhance experiences.
            </p>
          </div>

          <div className="about-section">
            <h2>Our Approach</h2>
            <p>
              We combine creativity with technical expertise to deliver solutions 
              that are both beautiful and functional. Our collaborative approach 
              ensures that each project is uniquely tailored to our clients' needs 
              and aspirations.
            </p>
          </div>

          <div className="about-section">
            <h2>Why Choose Us</h2>
            <ul className="features-list">
              <li>Innovative Design Solutions</li>
              <li>Experienced Team</li>
              <li>Quality Craftsmanship</li>
              <li>Attention to Detail</li>
              <li>Client-Focused Approach</li>
              <li>Timely Delivery</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutPage;