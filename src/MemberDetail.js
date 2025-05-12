import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './MemberDetail.css';  // Import the CSS file

function MemberDetail() {
  const { id } = useParams();
  const [member, setMember] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/members/${id}`)
      .then(res => setMember(res.data))
      .catch(err => console.error('Error fetching member:', err));
  }, [id]);

  if (!member) return <div>Loading...</div>;

  return (
    <div className="member-detail-container">
      <div className="member-header">
        <img src={`http://localhost:5000${member.imageUrl}`} alt={member.name} className="member-img" />
        <div>
          <h2>{member.name}</h2>
          <h4>{member.role}</h4>
        </div>
      </div>
      <div className="member-details">
        <p><strong>Reg. No:</strong> {member.regNo}</p>
        <p><strong>Year:</strong> {member.year}</p>
        <p><strong>About Project:</strong> {member.aboutProject}</p>
        <p><strong>Hobbies:</strong> {member.hobbies.join(', ')}</p>
        <p><strong>Certificate:</strong> {member.certificate}</p>
        <p><strong>Internship:</strong> {member.internship}</p>
        <p><strong>About Aim:</strong> {member.aim}</p>
      </div>
    </div>
  );
}

export default MemberDetail;
