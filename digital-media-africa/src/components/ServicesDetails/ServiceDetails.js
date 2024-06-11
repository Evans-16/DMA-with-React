import React from 'react';
import './ServiceDetails.css';

function ServiceDetails() {
    const services = [
       { title: 'Media Buying', img: 'images/medbuy.png', details: ['Media Planning', 'Optimization'] },
       { title: 'Digital Marketing', img: 'images/SMM.jpg', details: ['Social media marketing', 'Marketing Campaigns'] },
       { title: 'Web Development', img: 'images/web.jpg', details: ['Web Design', 'SEO'] },
       { title: 'SEO/SEM', img: 'images/SEO.jpg', details: ['SEO', 'SEM'] },
       { title: 'SEO/SEM', img: 'images/SEO.jpg', details: ['SEO', 'SEM'] },
       { title: 'SEO/SEM', img: 'images/SEO.jpg', details: ['SEO', 'SEM'] },
    ];

    return (
        <section id="services-details">
            <h2 className='service-details-heading'>Our Services</h2>
            <div className="service-details-container">
                {services.map((service, index) => (
                    <div key={index} className="service">
                        <img src={service.img} alt={service.title} />
                        <p>{service.title}</p>
                        <ul>
                            {service.details.map((detail, idx) => (
                                <li key={idx}>{detail}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ServiceDetails;
