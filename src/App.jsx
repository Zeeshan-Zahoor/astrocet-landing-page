import { useState } from 'react';
import Navbar from './components/Navbar';
import './App.css';

function App() {

  return (
    <div className='min-h-screen bg-[#0A0A1A]'>
      <Navbar />

      <div className='pt-16'>  
        <div className='text-center text-white py-10'>
          <p className='text-gray-500'>Components will be here</p>
        </div>
      </div>
    </div>
  )
}

export default App
