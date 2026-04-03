import { motion } from "framer-motion";


function StarBackground() {
    const stars = [...Array(60)].map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 4 + 2,
        delay: Math.random() * 5,
    }));

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Base dark gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-[#0A0A1A] via-[#09091b] to-[#0A0A1A]" />
      
      {/* Floating stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute bg-white rounded-full"
          style={{
            width: star.size + 'px',
            height: star.size + 'px',
            left: star.left + '%',
            top: star.top + '%',
          }}
          animate={{
            y: [0, -40, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Glowing orbit 1 - Purple */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-purple-800 rounded-full blur-[60px] opacity-15"
        animate={{
          x: [0, 80, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      {/* Glowing orb 2 Cyan */}
      <motion.div
        className="absolute bottom-20 right-10 w-86 h-86 bg-cyan-800 rounded-full blur-[70px] opacity-20"
        animate={{
          x: [0, -100, 0],
          y: [0, -70, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      {/* Glowing orb 3 --> Pink (new, for variety) */}
      {/* <motion.div
        className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-600 rounded-full blur-[120px] opacity-10"
        animate={{
          x: [0, -50, 50, 0],
          y: [0, 30, -30, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      /> */}
    </div>
  );
}

export default StarBackground