import { services } from '../../store/servicesData';
import './Services.css';

function Services() {
  return (

      <section className="services-section">
        <div className="services-container">
          <div className="services-header">
            <span className="subtitle">What We Offer</span>
            <h2>Our Services</h2>
            <p className="header-description">
              Comprehensive IT solutions tailored to elevate your business to the next level
            </p>
          </div>
          
          <div className="services-grid">
            {services.map((service) => (
              <div key={service.id} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <div className="service-features">
                  <ul>
                    {service.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  );
}

export default Services; 