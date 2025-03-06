import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LuxuryCarRental from './components/LuxuryCarRental';
import './App.css';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
      <Route path="/" element={<LuxuryCarRental />} />
      </Routes>
    </Router>
  );
}

export default App;