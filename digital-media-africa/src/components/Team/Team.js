import React from 'react';
import './Team.css';
import { Link } from 'react-router-dom';

function Team() {
  const teamMembers = [
    { name: 'Justin Ongeri', title: 'Director of Digital', img: '/images/person.png' },
    { name: 'Job Ondicho', title: 'Operations', img: 'https://via.placeholder.com/100' },
    { name: 'Carol Wangui', title: 'Relationship Manager', img: 'https://via.placeholder.com/100' },
    { name: 'Henry Getaro', title: 'Community Manager', img: 'https://via.placeholder.com/100' },
    { name: 'Johnson Kamau', title: 'Media Buyer', img: 'https://via.placeholder.com/100' },
  ];

  const initialMembers = teamMembers.slice(0,4);

  return (
    <section id="team">
      <h2>Meet the Team</h2>
      <div className="team-container">
        {initialMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img src={member.img} alt={member.name} />
            <p>{member.name}</p>
            <p>{member.title}</p>
          </div>
        ))}
      </div>
      <Link to="/team-details">
         <button>About Us</button>
      </Link>
    </section>
  );
}

export default Team;
