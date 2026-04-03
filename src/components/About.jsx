import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Eye, Cpu, Users, Rocket, Award } from "lucide-react";
import StarBackground from "./StarBackground";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const stats = [
    { value: 24, label: 'Active Members', icon: Users },
    { value: 3, label: 'Rovers Built', icon: Rocket },
    { value: 5, label: 'Competitions', icon: Award },
  ];

  const highlights = [
    {
      icon: Cpu,
      title: 'Rover Focus',
      description: 'Specialized in building advanced rovers with rocker-bogie suspension',
    },
    {
      icon: Target,
      title: 'Our Mission',
      description: 'Push technical boundaries and inspire space exploration',
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'Become India\'s premier student space robotics team',
    },
  ];

  return (
    <section id="about" ref={ref} className="relative py-20 px-4 overflow-hidden">

      <StarBackground />

      <div className="relative max-w-6xl mx-auto z-40">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-linear-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              About AstroCET
            </span>
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-purple-500 to-cyan-500 mx-auto rounded-full" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            India's emerging force in student-led space robotics
          </p>
        </motion.div>

        {/* Main Content - Split Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-white">
              Who We Are
            </h3>
            <p className="text-gray-300 leading-relaxed">
              AstroCET is the premier space robotics community at College of Engineering 
              Trivandrum. We're a team of passionate engineers, developers, and dreamers 
              building advanced rovers for exploration and competition.
            </p>
            <p className="text-gray-300 leading-relaxed">
              With a strong focus on <span className="text-purple-400 font-semibold">software-hardware integration</span>, 
              we're pushing the boundaries of what student teams can achieve in space robotics.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 bg-white/5 rounded-full px-4 py-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full" />
                <span className="text-sm text-gray-300">6-Wheel Rover</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 rounded-full px-4 py-2">
                <div className="w-2 h-2 bg-cyan-500 rounded-full" />
                <span className="text-sm text-gray-300">Rocker-Bogie</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 rounded-full px-4 py-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full" />
                <span className="text-sm text-gray-300">Telemetry Dashboard</span>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-linear-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-2xl border border-white/10 p-6"
          >
            <h4 className="text-xl font-semibold text-center mb-6 text-gray-200">
              Our Impact
            </h4>
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="text-center"
                >
                  <stat.icon className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5 }}
                    className="text-2xl md:text-3xl font-bold text-white"
                  >
                    {stat.value}+
                  </motion.div>
                  <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-6 pt-4 border-t border-white/10 text-center">
              <p className="text-sm text-gray-400">
                🚀 Established 2022 • Growing strong
              </p>
            </div>
          </motion.div>
        </div>

        {/* Highlight Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group relative bg-linear-to-br from-white/5 to-white/0 rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-linear-to-r from-purple-600/0 via-purple-600/0 to-cyan-600/0 group-hover:from-purple-600/10 group-hover:to-cyan-600/10 rounded-xl transition-all duration-500" />
              
              <item.icon className="w-12 h-12 text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
              
              <h3 className="text-xl font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;