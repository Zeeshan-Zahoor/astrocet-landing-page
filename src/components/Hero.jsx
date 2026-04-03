import { useState, useEffect } from "react";
import { ArrowRight, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import StarBackground from "./StarBackground";
import scrollToElement from "../utils/smoothScroll";

function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const titles = ["Rover Team", "Space Explorers", "AstroCET"];

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* animate Background */}
      <StarBackground />

      {/* Hero content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/10"
        >
          <Rocket size={16} className="text-purple-400" />
          <span className="text-sm text-gray-300">CET Trivandrum</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 drop-shadow-[0_0_20px_rgba(139,92,246,0.5)]"
        >
          <span className="bg-linear-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent bg-size-[200%] animate-gradient">
            AstroCET
          </span>
        </motion.h1>

        <motion.p
          key={titles[titleIndex]}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
          className="text-xl md:text-2xl text-gray-300 mb-4"
        >
          {titles[titleIndex]}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg"
        >
          Exploring beyond boundaries, and reaching for the stars.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="group relative px-8 py-3 bg-linear-to-r from-purple-600 to-cyan-600 rounded-full font-semibold text-white overflow-hidden transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 flex">
            <span className="m-auto relative z-10 flex items-center gap-2">
              Join Us
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </button>

          <button className="px-8 py-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-full font-semibold text-white hover:bg-white/10 transition-all hover:scale-105">
            Explore
          </button>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={() => scrollToElement('about', 70)}
        >
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-gray-400 rounded-full mt-2 animate-bounce" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero