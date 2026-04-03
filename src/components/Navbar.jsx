import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("about")

  const navLinks = ["About", "Events", "Feature", "Team"];

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className='fixed top-0 left-0 w-full z-50 bg-[#050513]/80 backdrop-blur-md border-b border-white/10'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            className='text-xl font-bold bg-linear-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(139,92,246,0.5)]'
          >
            AstroCET
          </motion.div>

          {/* desktop menu, hidden on phones and shown on larger screens */}
          <div className='hidden md:flex space-x-8'>
            {navLinks.map((link) => (
              <motion.a
                whileHover={{ scale: 1.1 }}
                key={link}
                href={`#${link.toLowerCase()}`}
                className={`{${active === link.toLowerCase() ? "text-white" : "text-gray-300"} transition-colors duration-200`}
                onClick={() => setActive(link.toLowerCase())}
              >
                {link}
              </motion.a>
            ))}
          </div>

            {/* mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='md:hidden text-gray-300 cursor-pointer'
            >
            {isOpen ? <X size={24}/> : <Menu size={24}/>}
          </button>
        </div>

        {/* mobile menu dropdown */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate = {{ opacity: 1, y: 0 }}
            className='md:hidden py-4 border-t border-white/10'
          >
            {navLinks.map((link) => (
              <motion.a
                whileHover={{ scale: 1.1 }}
                key={link}
                href={`#${link.toLowerCase()}`}
                className='block py-2 text-gray-300 hover:text-white'
                onClick={() => setIsOpen(false)}
              >
                {link}
              </motion.a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

export default Navbar