
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import { Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" component={<Home />} />
        <Route path="/about" component={<About/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
