import React from 'react';
import { motion } from 'framer-motion';

const CustomParticles = () => {
  // Generate random particles
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-r from-primary/30 to-accent/30"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, -10, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Floating orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-primary/50"
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -80, 60, 0],
          opacity: [0.5, 1, 0.3, 0.5],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute top-3/4 right-1/3 w-3 h-3 rounded-full bg-accent/40"
        animate={{
          x: [0, -80, 40, 0],
          y: [0, 70, -30, 0],
          opacity: [0.4, 0.8, 0.2, 0.4],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute top-1/2 right-1/4 w-1.5 h-1.5 rounded-full bg-primary/60"
        animate={{
          x: [0, 60, -30, 0],
          y: [0, -40, 80, 0],
          opacity: [0.6, 1, 0.4, 0.6],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default CustomParticles;