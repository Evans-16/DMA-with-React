import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1>Digital Media Africa</h1>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#team">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#clients">Portfolio</a></li>
          <li><a href="#contact">Contacts</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;