import React, { useEffect } from 'react';
import './ServiceDetails.css';

function ServiceDetails() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const services = [
       { title: 'Media Buying', img: 'images/medbuy.png', details: 'Our team excels in targeting audiences and maximizing brand visibility through strategic ad placements on Meta platforms like Facebook.' },
       { title: 'Digital Marketing', img: 'images/SMM.jpg', details: 'We create and manage top-performing social media campaigns to help businesses grow and meet their goals.' },
       { title: 'Web Development', img: 'images/web.jpg', details: 'Our web development services include designing, building, and maintaining websites that are fast, secure, and mobile-friendly.' },
       { title: 'SEO/SEM', img: 'images/SEO.jpg', details: 'We improve your website’s visibility on search engines through effective SEO and SEM strategies.' },
       { title: 'Content Creation', img: 'images/web.jpg', details: 'Our content creation team produces high-quality, engaging content that aligns with your brand’s voice and goals.' },
       { title: 'Analytics', img: 'images/web.jpg', details: 'We provide comprehensive analytics services to help you track, analyze, and optimize your marketing performance.' },
    ];

    return (
        <section id="service-details-page">
            <h2 className='service-details-heading'>Our Services</h2>
            <div className="service-details-container">
                {services.map((service, index) => (
                    <div key={index} className="service-detail">
                        <div className="service-detail-image">
                            <img src={service.img} alt={service.title} />
                        </div>
                        <div className="service-detail-content">
                            <h3>{service.title}</h3>
                            <p>{service.details}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ServiceDetails;
