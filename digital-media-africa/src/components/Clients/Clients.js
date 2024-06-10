import React, { useEffect, useRef } from 'react';
import './Clients.css';

function Clients() {
  const carouselRef = useRef(null);

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

    const interval = setInterval(moveToNextClient, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="clients">
      <h2>Our Clients</h2>
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
