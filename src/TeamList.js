import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './TeamList.css';  // Import the CSS file for the styles

function TeamList() {
  const [members, setMembers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:5000/api/members').then(res => setMembers(res.data));
  }, []);

  return (
    <div className="team-list-container">
      <h2>TEAM SRMS</h2>
      <div className="team-cards-container">
        {members.map(member => (
          <div
            key={member._id}
            className="team-card"
            onClick={() => navigate(`/team/${member._id}`)}
          >
            <div className="team-card-window">
              <img
                src={`http://localhost:5000${member.imageUrl}`}
                alt={member.name}
                className="team-img"
              />
              <h3 className="team-name">{member.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamList;
