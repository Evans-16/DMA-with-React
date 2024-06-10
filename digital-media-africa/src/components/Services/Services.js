import React from 'react';
import './Services.css';

function Services() {
  const services = [
    { title: 'Media Buying', img: 'images/medbuy.png', details: ['Media Planning', 'Optimization'] },
    { title: 'Digital Marketing', img: 'images/SMM.jpg', details: ['Social media marketing', 'Marketing Campaigns'] },
    { title: 'Web Development', img: 'images/web.jpg', details: ['Web Design', 'SEO'] },
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
    </section>
  );
}

export default Services;
