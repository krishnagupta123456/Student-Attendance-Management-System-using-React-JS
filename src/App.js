import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Protal from './components/Protal';
import Registration from './components/Registration';

// import Fileas from './components/Fileas';
function App() {
  return (
    <Router>
      <div className='App'>                  
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/protal" element={<Protal />} />
          <Route path="/register" element={<Registration />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
