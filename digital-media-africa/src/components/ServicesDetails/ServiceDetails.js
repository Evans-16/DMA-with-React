import React, { useEffect } from 'react';
import './ServiceDetails.css';

function ServiceDetails() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const services = [
       { title: 'Digital Media Buying', img: 'images/medbuy.png', details: 'Innovative and experienced in developing and deploying digital strategies for brands across Africa, larger EMEA and the Islands.' },
       { title: 'Digital Media Strategy Development', img: 'images/SMM.jpg', details: 'Focused on measurable impact, driving interaction, and building ROAS (ROI)-focused projects.' },
       { title: 'Web Development', img: 'images/web.jpg', details: 'Our web development services include designing, building, and maintaining websites that are fast, secure, and mobile-friendly.' },
       { title: 'SEO/SEM', img: 'images/SEO.jpg', details: 'We improve your website’s visibility on search engines through effective SEO and SEM strategies.' },
       { title: 'Content Creation', img: 'images/web.jpg', details: 'Our content creation team produces high-quality, engaging content that aligns with your brand’s voice and goals.' },
       { title: 'Social Media Management', img: 'images/web.jpg', details: 'We provide comprehensive analytics services to help you track, analyze, and optimize your marketing performance.' },
       { title: 'Digital Marketing Training', img: 'images/web.jpg', details: 'We provide training on digital marketing.' },
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
