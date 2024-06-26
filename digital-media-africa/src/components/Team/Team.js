import React from 'react';
import './Team.css';
import { Link } from 'react-router-dom';

function Team() {
  const teamMembers = [
    { name: 'Justin Ongeri', title: 'Director of Digital', img: '/images/member/justin1.jfif' },
    { name: 'Job Ondicho', title: 'Operations', img: '/images/member/job.png' },
    { name: 'Carol Wangui', title: 'Relationship Manager', img: 'https://via.placeholder.com/100' },
    { name: 'Henry Getaro', title: 'Community Manager', img: '/images/member/henry.png' },
    { name: 'Johnson Kamau', title: 'Media Buyer', img: '/images/member/john.png' },
  ];

  const initialMembers = teamMembers.slice(0,4);

  return (
    <section id="team">
      <h2>Meet The Team</h2>
      <div className="team-container">
        {initialMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img src={member.img} alt={member.name} />
            <h3>{member.name}</h3>
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
