import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import './App.css';

function App() {

  return (
    <div className='min-h-screen bg-[#0A0A1A]'>
      <Navbar />
      <Hero />
      <About />
      <Events />
    </div>
  )
}

export default App
