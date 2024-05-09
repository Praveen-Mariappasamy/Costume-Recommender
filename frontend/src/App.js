import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Addproduct from './components/Addproduct/Addproduct'
import Display from './components/Display/Display'
import Navbar from './components/Navbar/Navbar'
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addproduct" element={<Addproduct />} />
        <Route path="/update" element={<Display />} />
      </Routes>
    </Router>
  );
};

export default App;
