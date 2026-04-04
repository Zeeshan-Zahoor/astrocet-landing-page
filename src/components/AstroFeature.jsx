import React from 'react'
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  Sparkles, RefreshCw, Rocket, Moon, Star, Globe,
  CircuitBoard,
  Plane,
  Battery,
  Settings,
  Flame,
  Zap,
  Icon
} from 'lucide-react';

import StarBackground from './StarBackground';

//later we can use api
const spaceFacts = [
  {
    fact: "Rovers on Mars have titanium wheels with tiny cleats for better traction on rocky terrain.",
    icon: CircuitBoard,
    category: "Rover Tech",
  },
  {
    fact: "Perseverance rover carries a helicopter named Ingenuity — the first aircraft to fly on another planet.",
    icon: Plane,
    category: "Mars Mission",
  },
  {
    fact: "A day on Mars (sol) is 24 hours and 39 minutes — just 39 minutes longer than an Earth day.",
    icon: Star,
    category: "Mars Facts",
  },
  {
    fact: "The Curiosity rover's nuclear battery has a lifespan of 14 years — still active since 2012!",
    icon: Battery,
    category: "Power Systems",
  },
  {
    fact: "Rocker-bogie suspension, used in Mars rovers, allows 6 wheels to maintain contact even on 45° slopes.",
    icon: Settings,
    category: "Suspension",
  },
  {
    fact: "The heat shield on Mars rovers reaches temperatures of 2,000°C during atmospheric entry.",
    icon: Flame,
    category: "Entry & Descent",
  },
];

function AstroFeature() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [factIndex, setFactIndex] = useState(0);
  const [isRotating, setIsRotating] = useState(false);

  const currentFact = spaceFacts[factIndex];

  const nextFact = () => {
    setIsRotating(true);
    setTimeout(() => {
      setFactIndex((prev) => (prev + 1) % spaceFacts.length);
      setIsRotating(false);
    }, 300);
  }

  return (
    <section id='feature' ref={ref} className='relative py-20 px-4 overflow-hidden'>
      <StarBackground />

      <div className='relative z-10 max-w-6xl mx-auto'>
        {/* section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 mb-4 border border-white/10">
            <Sparkles size={16} className="text-purple-400" />
            <span className="text-sm text-gray-300">Daily Feature</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-linear-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Space Spotlight
            </span>
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-purple-500 to-cyan-500 mx-auto rounded-full" />
        </motion.div>


        {/* main feature content */}
        <div className="grid md:grid-cols-2 gap-8 items-center">

          {/*animated space object on left side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center items-center"
          >
            {/* animated rotating planet / rover representation */}
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* outer orbit ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-purple-500/30"
              />

              {/* middle orbit ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 rounded-full border border-cyan-500/20"
              />

              {/* center planet */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8 rounded-full bg-linear-to-br from-purple-600/30 via-pink-600/20 to-cyan-600/30 backdrop-blur-sm flex items-center justify-center"
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="relative"
                >
                  {/* Animated planet surface with rings */}
                  <svg width="80" height="80" viewBox="0 0 100 100" className="md:w-24 md:h-24">
                    {/* Planet body */}
                    <circle cx="50" cy="50" r="35" fill="url(#planetGradient)" />

                    {/* Planet atmosphere glow */}
                    <circle cx="50" cy="50" r="38" fill="none" stroke="rgba(168,85,247,0.3)" strokeWidth="2">
                      <animate attributeName="r" values="38;42;38" dur="3s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.3;0.1;0.3" dur="3s" repeatCount="indefinite" />
                    </circle>

                    {/* Craters */}
                    <circle cx="35" cy="40" r="6" fill="rgba(0,0,0,0.2)" />
                    <circle cx="60" cy="55" r="4" fill="rgba(0,0,0,0.15)" />
                    <circle cx="45" cy="65" r="3" fill="rgba(0,0,0,0.2)" />

                    {/* Highlight */}
                    <ellipse cx="40" cy="38" rx="12" ry="8" fill="rgba(255,255,255,0.1)" transform="rotate(-30 40 38)" />

                    <defs>
                      <radialGradient id="planetGradient" cx="30%" cy="30%">
                        <stop offset="0%" stopColor="#a855f7" />
                        <stop offset="50%" stopColor="#7c3aed" />
                        <stop offset="100%" stopColor="#2dd4bf" />
                      </radialGradient>
                    </defs>
                  </svg>

                  {/* Orbiting ring around planet */}
                  <svg width="110" height="110" viewBox="0 0 110 110" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <ellipse
                      cx="55" cy="55" rx="50" ry="15"
                      fill="none"
                      stroke="rgba(168,85,247,0.4)"
                      strokeWidth="1.5"
                      transform="rotate(-20 55 55)"
                    >
                      <animateTransform
                        attributeName="transform"
                        type="rotate"
                        from="-20 55 55"
                        to="340 55 55"
                        dur="8s"
                        repeatCount="indefinite"
                      />
                    </ellipse>
                  </svg>
                </motion.div>
              </motion.div>

              {/* orbiting small objects */}
              {/* object 1  */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
                style={{ transformOrigin: "center" }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-3 h-3 bg-linear-to-r from-purple-400 to-cyan-400 rounded-full shadow-lg shadow-purple-500/50" />
                </div>
              </motion.div>

              {/* object 2 */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
                style={{ transformOrigin: "center" }}
              >
                <div className="absolute top-4 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-2 h-2 bg-linear-to-r from-pink-400 to-purple-400 rounded-full" />
                </div>
              </motion.div>


              {/* decorative stars around */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1.5, 0],
                  }}
                  transition={{
                    duration: Math.random() * 2 + 1,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* space fact card on the right side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-linear-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-2xl border border-white/10 p-6 md:p-8"
          >
            {/* catagory badge */}
            <div className="inline-flex items-center gap-2 bg-purple-500/20 rounded-full px-3 py-1 mb-4">
              <Rocket size={14} className="text-purple-400" />
              <span className="text-xs text-purple-400 font-semibold">{currentFact.category}</span>
            </div>

            {/* fact text with rotation animation */}
            <motion.div
              key={factIndex}
              initial={{ opacity: 0, y: 20, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.5 }}
              className="min-h-45"
            >
              <p className="text-xl md:text-2xl text-white leading-relaxed">
                "{currentFact.fact}"
              </p>
            </motion.div>

            {/* next fact button */}
            <motion.button
              onClick={nextFact}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 flex items-center gap-2 px-4 py-2 bg-linear-to-r from-purple-600/50 to-cyan-600/50 rounded-lg text-white text-sm hover:from-purple-600 hover:to-cyan-600 transition-all"
            >
              <RefreshCw size={14} className={isRotating ? "animate-spin" : ""} />
              <span>Next Space Fact</span>
            </motion.button>

            {/* progress indicator */}
            <div className="mt-4 flex gap-1">
              {spaceFacts.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-1 rounded-full transition-all duration-300 ${idx === factIndex
                    ? "w-6 bg-linear-to-r from-purple-400 to-cyan-400"
                    : "w-3 bg-white/20"
                    }`}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* quict stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { icon: Moon, label: "Moon Missions", value: "147+" },
            { icon: Star, label: "Space Agencies", value: "77" },
            { icon: Rocket, label: "Mars Rovers", value: "5" },
            { icon: Globe, label: "Countries in Space", value: "45" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="text-center p-4 bg-white/5 rounded-xl border border-white/5 hover:border-purple-500/30 transition-all duration-300"
            >
              <stat.icon className="w-6 h-6 text-purple-400 mx-auto mb-2" />
              <div className="text-xl font-bold text-white">{stat.value}</div>
              <div className="text-xs text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default AstroFeature