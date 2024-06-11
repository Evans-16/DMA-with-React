import React from 'react';
import './TeamDetails.css';

function TeamDetails() {
  const teamMembers = [
    { name: 'Justin Ongeri', title: 'Director of Digital', img: '/images/person.png' },
    { name: 'Job Ondicho', title: 'Operations', img: 'https://via.placeholder.com/100' },
    { name: 'Carol Wangui', title: 'Relationship Manager', img: 'https://via.placeholder.com/100' },
    { name: 'Henry Getaro', title: 'Community Manager', img: 'https://via.placeholder.com/100' },
    { name: 'Johnson Kamau', title: 'Media Buyer', img: 'https://via.placeholder.com/100' },
  ];

  return (
    <section id="team-details">
      <h2 className='team-details-heading'>Our Full Team</h2>
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
