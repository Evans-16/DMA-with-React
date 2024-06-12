import React, { useEffect } from 'react';
import './TeamDetails.css';

function TeamDetails() {

  useEffect(() => {
    window.scrollTo(0, 0);  
  }, []);

  const teamMembers = [
    { name: 'Justin Ongeri', title: 'Director of Digital', img: '/images/person.png' },
    { name: 'Job Ondicho', title: 'Operations', img: 'https://via.placeholder.com/100' },
    { name: 'Carol Wangui', title: 'Relationship Manager', img: 'https://via.placeholder.com/100' },
    { name: 'Henry Getaro', title: 'Community Manager', img: 'https://via.placeholder.com/100' },
    { name: 'Johnson Kamau', title: 'Media Buyer', img: 'https://via.placeholder.com/100' },
  ];

  return (
    <section id="team-details">
      <div className="company-overview">
        <h2>Company Overview</h2>
        <p>We are a leading digital media company dedicated to delivering innovative solutions to our clients. Our team of experts is passionate about driving results and helping businesses achieve their goals.</p>
      </div>

      <div className="mission-core-values">
        <div className="mission">
          <h2>Our Mission</h2>
          <p>To empower businesses with cutting-edge digital strategies that drive growth and success.</p>
        </div>
        <div className="core-values">
          <h2>Our Core Values</h2>
          <ul>
            <li>Integrity</li>
            <li>Innovation</li>
            <li>Excellence</li>
            <li>Teamwork</li>
            <li>Customer Focus</li>
          </ul>
        </div>
      </div>

      <h2 className="team-details-heading">Our Full Team</h2>
      <div className="team-details-container">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img src={member.img} alt={member.name} />
            <p>{member.name}</p>
            <p>{member.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TeamDetails;
