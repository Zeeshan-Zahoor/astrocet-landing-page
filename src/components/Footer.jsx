import React from 'react'
import { motion } from 'framer-motion';
import {  Mail, MapPin, Rocket } from 'lucide-react';
import {FaGithub ,FaInstagram, FaLinkedin } from 'react-icons/fa';
import { scrollToElement } from '../utils/smoothScroll';

function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About', id: 'about' },
    { name: 'Events', id: 'events' },
    { name: 'Feature', id: 'feature' },
  ]
  const socialLinks = [
    { icon: FaGithub, href: '#', label: 'GitHub' },
    { icon: FaInstagram, href: '#', label: 'Instagram' },
    { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: '#', label: 'Email' },
  ];

  return (
    <footer className="relative bg-[#0A0A1A]/95 border-t border-white/10 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          
          {/* Column 1 - Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Rocket className="w-6 h-6 text-purple-400" />
              <span className="text-xl font-bold bg-linear-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                AstroCET
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Exploring beyond boundaries — Building advanced rovers 
              and pushing technical limits at CET Trivandrum.
            </p>
            <div className="flex items-center gap-2 mt-4 text-gray-500 text-xs">
              <MapPin size={12} />
              <span>CET Trivandrum, Kerala, India</span>
            </div>
          </motion.div>

          {/* Column 2 - Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToElement(link.id, 70)}
                    className="text-gray-400 text-sm hover:text-purple-400 transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3 - Connect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-white font-semibold mb-4">Connect With Us</h3>
            <div className="flex gap-4 mb-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-purple-400 hover:bg-white/10 transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
            <p className="text-gray-500 text-xs">
              Join our community to stay updated on rover projects and events.
            </p>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-xs">
              © {currentYear} AstroCET. All rights reserved.
            </p>
            <p className="text-gray-600 text-xs">
              Built with 🚀 for space exploration
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer