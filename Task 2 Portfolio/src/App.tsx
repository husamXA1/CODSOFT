import React from 'react'
import './App.css'

import Header from './Components/Header'
import Hero from './Components/Hero';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Footer from './Components/Footer';

export default function App() {
  const [darkMode, setDatkMode] = React.useState(false);

  function toggleDarkMode() {
    setDatkMode(pendingMode => !pendingMode);
  }

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  )
}