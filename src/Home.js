import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';  // Import the CSS file for the styles

function Home() {
  const navigate = useNavigate();
  return (
    <div className="home-container">
      <h1 className="main-heading">FSD Team Project</h1>
      <div className="button-container">
        <button className="view-team-btn" onClick={() => navigate('/team')}>
          View Team Members
        </button>
      </div>
      <div>
        <button className="add-member-btn" onClick={() => navigate('/add')}>
            Add Team Member
          </button>
      </div> 
    </div>
  );
}

export default Home;
