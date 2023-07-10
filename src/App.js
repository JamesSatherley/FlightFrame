import React from 'react';
import './index.css';

// Components
import Navigation from './components/Navigation';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import About from './components/About';

function App() {
  return (
    <div>
      <Navigation />
      <Portfolio />
      <Contact />
      <About />
    </div>
  );
}

export default App;
