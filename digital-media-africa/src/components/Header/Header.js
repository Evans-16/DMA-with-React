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
            <li><Link to="#home">Home</Link></li>
            <li><Link to="#team">Team</Link></li>
            <li><Link to="#services">Services</Link></li>
            <li><Link to="#clients">Clients</Link></li>
            <li><Link to="#contact">Contact</Link></li>
            <li><Link to="/FAQs">FAQs</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
