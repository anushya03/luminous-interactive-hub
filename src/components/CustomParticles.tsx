import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const CustomParticles = () => {
  // Memoize random fields so they stay stable across renders
  const stars = useMemo(
    () => Array.from({ length: 140 }, (_, i) => ({
      id: `star-${i}`,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 1.4 + 0.6,
      duration: Math.random() * 4 + 3,
      delay: Math.random() * 6,
    })),
    []
  );

  const particles = useMemo(
    () => Array.from({ length: 40 }, (_, i) => ({
      id: `p-${i}`,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 18 + 12,
      delay: Math.random() * 6,
    })),
    []
  );

  const shootingStars = useMemo(
    () => Array.from({ length: 4 }, (_, i) => ({
      id: `shoot-${i}`,
      startX: Math.random() * 100,
      startY: Math.random() * 40 + 5,
      length: Math.random() * 140 + 100,
      delay: Math.random() * 8 + i * 2,
      duration: Math.random() * 2 + 2.5,
      rotate: -35 + Math.random() * -15,
    })),
    []
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Nebula glows */}
      <motion.div
        className="absolute -top-20 -left-10 w-[38rem] h-[38rem] rounded-full"
        style={{
          background:
            'radial-gradient(closest-side, hsl(var(--hero-gradient-to)/0.25), transparent 70%)',
          filter: 'blur(60px)'
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute -bottom-24 -right-16 w-[34rem] h-[34rem] rounded-full"
        style={{
          background:
            'radial-gradient(closest-side, hsl(var(--primary)/0.20), transparent 70%)',
          filter: 'blur(60px)'
        }}
        animate={{ rotate: -360 }}
        transition={{ duration: 110, repeat: Infinity, ease: 'linear' }}
      />

      {/* Starfield (twinkling) */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            background:
              'radial-gradient(circle, hsla(var(--star-color), 0.9) 0%, hsla(var(--star-color), 0.5) 40%, hsla(var(--star-color), 0) 70%)',
          }}
          animate={{ opacity: [0.2, 0.9, 0.3] }}
          transition={{ duration: star.duration, delay: star.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      {/* Gentle drifting particles */}
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
      
      {/* Shooting stars */}
      {shootingStars.map((s) => (
        <motion.div
          key={s.id}
          className="absolute"
          style={{
            left: `${s.startX}%`,
            top: `${s.startY}%`,
            width: `${s.length}px`,
            height: '2px',
            background:
              'linear-gradient(90deg, rgba(255,255,255,0.0) 0%, rgba(255,255,255,0.9) 40%, rgba(255,255,255,0.0) 100%)',
            borderRadius: '9999px',
            transform: `rotate(${s.rotate}deg)`
          }}
          initial={{ opacity: 0, x: -40, y: -20 }}
          animate={{ opacity: [0, 1, 0], x: 200, y: 60 }}
          transition={{ delay: s.delay, duration: s.duration, repeat: Infinity, repeatDelay: 6 }}
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