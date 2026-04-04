import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import AstroFeature from './components/AstroFeature';
import Team from './components/Team';
import Footer from './components/Footer';
import SmoothScroll from './components/smoothScroll';

import './App.css';

function App() {

  return (
    <SmoothScroll>
      <div className='min-h-screen bg-[#0A0A1A]'>
        <Navbar />
        <Hero />
        <About />
        <Events />
        <AstroFeature />
        <Team />
        <Footer />
      </div>
    </SmoothScroll>
  )
}

export default App
