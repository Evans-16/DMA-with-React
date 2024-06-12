import React from 'react';
import './Services.css';
import { Link } from 'react-router-dom';

function Services() {
  const services = [
    { title: 'Media Buying', img: 'images/medbuy.png', details: ['Media Planning', 'Optimization'] },
    { title: 'Digital Marketing', img: 'images/SMM.jpg', details: ['Social media marketing', 'Marketing Campaigns'] },
    { title: 'Web Development', img: 'images/web.jpg', details: ['Web Design', 'SEO'] },
    { title: 'Content Creation', img: 'images/web.jpg', details: ['Tiktok content', 'Youtube content'] },
  ];

  return (
    <section id="services">
      <h2>What We Do?</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service">
            <img src={service.img} alt={service.title} />
            <h3>{service.title}</h3>
            {service.details.map((detail, i) => (
              <p key={i}>{detail}</p>
            ))}
          </div>
        ))}
      </div>
      <Link to="/services-details">
         <button>Our Services</button>
      </Link>
    </section>
  );
}

export default Services;
