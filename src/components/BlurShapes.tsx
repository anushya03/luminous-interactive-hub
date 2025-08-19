
import React from 'react';
import { motion } from 'framer-motion';

const BlurShapes = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-20">
      {/* Primary floating shapes with enhanced animations */}
      <motion.div
        animate={{
          x: [0, 150, -50, 100, 0],
          y: [0, -80, 50, -30, 0],
          scale: [1, 1.3, 0.9, 1.1, 1],
          rotate: [0, 90, 180, 270, 360],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-10 w-96 h-96 blur-shape blur-shape-1"
      />
      
      <motion.div
        animate={{
          x: [0, -120, 80, -60, 0],
          y: [0, 90, -40, 70, 0],
          scale: [1, 0.7, 1.4, 0.8, 1],
          rotate: [0, -120, 120, -60, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 right-20 w-80 h-80 blur-shape blur-shape-2"
      />
      
      <motion.div
        animate={{
          x: [0, 80, -40, 60, 0],
          y: [0, -60, 80, -20, 0],
          scale: [1, 1.2, 0.8, 1.3, 1],
          rotate: [360, 270, 180, 90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-32 left-1/3 w-72 h-72 blur-shape blur-shape-3"
      />
      
      {/* Medium accent shapes with complex paths */}
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.5, 0.8, 1.2, 1],
          x: [0, 60, -30, 40, 0],
          y: [0, -40, 30, -20, 0],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-1/4 left-1/2 w-48 h-48 blur-shape blur-shape-1 opacity-30"
      />
      
      <motion.div
        animate={{
          rotate: [360, 0],
          x: [0, 50, -25, 35, 0],
          y: [0, 30, -50, 20, 0],
          scale: [1, 0.9, 1.4, 1.1, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-1/4 right-1/3 w-56 h-56 blur-shape blur-shape-2 opacity-35"
      />

      {/* Small dynamic particles */}
      <motion.div
        animate={{
          x: [0, 200, -100, 150, 0],
          y: [0, -100, 80, -50, 0],
          scale: [0.5, 1.2, 0.7, 1, 0.5],
          rotate: [0, 720, 360, 180, 0],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-10 right-1/4 w-32 h-32 blur-shape blur-shape-3 opacity-25"
      />

      <motion.div
        animate={{
          x: [0, -80, 60, -40, 0],
          y: [0, 70, -30, 50, 0],
          scale: [0.8, 1.3, 0.6, 1.1, 0.8],
          rotate: [0, -360, 180, -90, 0],
        }}
        transition={{
          duration: 32,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-10 left-10 w-40 h-40 blur-shape blur-shape-1 opacity-20"
      />

      {/* Orbital motion shapes */}
      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-1/2 left-1/2 w-4 h-4"
      >
        <motion.div
          className="w-24 h-24 blur-shape blur-shape-2 opacity-40"
          style={{
            transformOrigin: "12px 12px",
            transform: "translateX(-150px) translateY(-150px)",
          }}
          animate={{
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      <motion.div
        animate={{
          rotate: [360, 0],
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-3/4 right-1/4 w-4 h-4"
      >
        <motion.div
          className="w-36 h-36 blur-shape blur-shape-3 opacity-30"
          style={{
            transformOrigin: "18px 18px",
            transform: "translateX(-100px) translateY(-100px)",
          }}
          animate={{
            scale: [1, 0.7, 1.3, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </div>
  );
};

export default BlurShapes;
