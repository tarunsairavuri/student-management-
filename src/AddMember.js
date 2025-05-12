import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './AddMember.css';

function AddMember() {
  const [formData, setFormData] = useState({
    _id: '',
    name: '',
    regNo: '',
    year: '',
    role: '',
    bio: '',
    aboutProject: '',
    hobbies: '',
    certificate: '',
    internship: '',
    aim: '',
    imageUrl: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formattedData = {
      ...formData,
      hobbies: formData.hobbies.split(',').map(h => h.trim())
    };
    try {
      await axios.post('http://localhost:5000/api/members', formattedData);
      alert('Member added successfully!');
      navigate('/team');
    } catch (err) {
      console.error(err);
      alert('Failed to add member');
    }
  };

  return (
    <div className="form-container">
      <h2>Add New Team Member</h2>
      <form onSubmit={handleSubmit}>
        {Object.keys(formData).map((key) => (
          <div key={key}>
            <label>{key}</label>
            <input
              type="text"
              name={key}
              value={formData[key]}
              onChange={handleChange}
              required
            />
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddMember;
