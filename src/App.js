import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import TeamList from './TeamList';
import MemberDetail from './MemberDetail';
import AddMember from './AddMember';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<TeamList />} />
        <Route path="/team/:id" element={<MemberDetail />} />
        <Route path="/add" element={<AddMember />} />
      </Routes>
    </Router>
  );
}
export default App;
