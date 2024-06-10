import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section id="home">
      <div className="home-container">
        <h2 className="animated-text">
          <span className="line">Hi welcome to Digital Media Africa team. We are an</span>
          <span className="line">agency</span>
        </h2>
      </div>
      <div className="home-content">
        <img src={`${process.env.PUBLIC_URL}/images/DMA.jpg`} alt="DMA" className="animated-image" />
      </div>
    </section>
  );
}

export default Home;
