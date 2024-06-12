import React, { useEffect, useRef, useState } from 'react';
import './Clients.css';

function Clients() {
  const carouselRef = useRef(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const track = carouselRef.current;
    const clients = Array.from(track.children);
    const clientWidth = clients[0].getBoundingClientRect().width;

    let currentSlide = 0;

    const moveToNextClient = () => {
      if (currentSlide >= clients.length / 2) {
        currentSlide = 0;
        track.style.transition = 'none';
        track.style.transform = 'translateX(0)';
      } else {
        track.style.transition = 'transform 0.5s linear';
        currentSlide++;
        track.style.transform = `translateX(${-clientWidth * currentSlide}px)`;
      }
    };

    const clientInterval = setInterval(moveToNextClient, 2000);

    return () => clearInterval(clientInterval);
  }, []);

  useEffect(() => {
    const testimonials = document.querySelectorAll('.testimonial');
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(testimonialInterval);
  }, []);

  return (
    <section id="clients">
      <h2>Our Clients</h2>

      <div className="testimonials-container">
        <div className="testimonial" style={{ display: currentTestimonial === 0 ? 'block' : 'none' }}>
          <p>"This company has transformed our business. Their services are unmatched!"</p>
          <h4>— John Doe, CEO of Company XYZ</h4>
        </div>
        <div className="testimonial" style={{ display: currentTestimonial === 1 ? 'block' : 'none' }}>
          <p>"Exceptional quality and attention to detail. Highly recommend!"</p>
          <h4>— Jane Smith, Marketing Director at ABC Corp</h4>
        </div>
        <div className="testimonial" style={{ display: currentTestimonial === 2 ? 'block' : 'none' }}>
          <p>"We've seen significant growth since partnering with them. Truly outstanding!"</p>
          <h4>— Alice Johnson, COO of DEF Ltd</h4>
        </div>
      </div>

      <div className="carousel">
        <div className="carousel-track" ref={carouselRef}>
          <div className="client"><img src="images/coca.png" alt="Coca Cola" /></div>
          <div className="client"><img src="images/Stanbic.jpg" alt="Stanbic" /></div>
          <div className="client"><img src="images/CARduka.png" alt="Car Duka" /></div>
          <div className="client"><img src="images/airtel.jpg" alt="Airtel" /></div>
          <div className="client"><img src="images/coca.png" alt="Coca Cola" /></div>
          <div className="client"><img src="images/Stanbic.jpg" alt="Stanbic" /></div>
          <div className="client"><img src="images/CARduka.png" alt="Car Duka" /></div>
          <div className="client"><img src="images/airtel.jpg" alt="Airtel" /></div>
        </div>
      </div>
    </section>
  );
}

export default Clients;
