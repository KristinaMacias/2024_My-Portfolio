import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import TechStack from './components/TechStack'
import Testimonials from './components/Testimonials'
import Nav from './components/Navbar'
import './App.css'

function App() {

  return (
    <>
      {/* <Nav /> */}
      <div className="main">
        <Hero />
        <About />
        <TechStack />
        <Testimonials />
      </div>
    </>
  );
}

export default App
