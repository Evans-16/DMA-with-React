import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
  const location = useLocation();

  const isDetailPage = () => {
    return location.pathname.includes('/team-details') || location.pathname.includes('/FAQs') || location.pathname.includes('/services-details');
  };

  return (
    <header className="header">
      <h1>Digital Media Africa</h1>
      {!isDetailPage() && (
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#team">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#clients">Clients</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><Link to="/FAQs">FAQs</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
