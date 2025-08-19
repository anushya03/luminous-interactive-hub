
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download, Mail, Phone } from 'lucide-react';
import ThreeScene from './ThreeScene';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left space-y-8"
          >
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center glass px-4 py-2 rounded-full"
            >
              <div className="w-2 h-2 bg-success rounded-full pulse-dot mr-3"></div>
              <span className="text-sm text-foreground/80">Available for new opportunities</span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="space-y-4"
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Hi, I'm{' '}
                <span className="gradient-text">Anushya Varshini K</span>
              </h1>
              <p className="text-xl md:text-2xl text-foreground/80">
                AI & Machine Learning Engineer
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-lg text-foreground/70 max-w-2xl"
            >
              Passionate AI engineer with hands-on experience in machine learning, deep learning, 
              and computer vision. Skilled in building intelligent systems, real-time AI solutions, 
              and user-centric applications.
            </motion.p>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-wrap gap-4 text-sm text-foreground/60"
            >
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>63697 25720</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>anukarthikeyan03@gmail.com</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button 
                variant="hero" 
                size="lg" 
                onClick={scrollToContact}
                className="group"
              >
                <Mail className="w-5 h-5 mr-2" />
                Hire Me
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button variant="glow" size="lg" asChild>
                <a href="/resume.pdf" download>
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </a>
              </Button>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="grid grid-cols-3 gap-8 pt-8"
            >
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-primary">4+</div>
                <div className="text-sm text-foreground/60">AI Projects</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-primary">8.17</div>
                <div className="text-sm text-foreground/60">CGPA</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-primary">3x</div>
                <div className="text-sm text-foreground/60">Finalist</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - 3D Scene */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative"
          >
            <div className="glass rounded-2xl p-0 overflow-hidden hover:shadow-glow transition-all duration-500 ring-1 ring-border max-w-md mx-auto aspect-[4/5]">
              <img
                src="/profile.jpg"
                alt="Anushya Varshini K"
                className="w-full h-full object-cover object-bottom"
                loading="lazy"
              />
            </div>
            
            {/* Enhanced Floating elements */}
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute -top-4 -right-4 w-16 h-16 glass rounded-full flex items-center justify-center"
            >
              <div className="w-8 h-8 bg-hero-gradient rounded-full"></div>
            </motion.div>
            
            <motion.div
              animate={{ 
                y: [0, -15, 0],
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut",
                staggerChildren: 0.2
              }}
              className="absolute -bottom-6 -left-6 w-12 h-12 glass rounded-xl flex items-center justify-center"
            >
              <div className="w-6 h-6 bg-accent rounded-full"></div>
            </motion.div>

            {/* Additional floating elements */}
            <motion.div
              animate={{ 
                x: [0, 20, 0],
                y: [0, -10, 0],
                rotate: [0, -90, 0]
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="absolute top-1/2 -right-8 w-8 h-8 glass rounded-lg flex items-center justify-center"
            >
              <div className="w-4 h-4 bg-gradient-to-br from-primary to-accent rounded-full"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center hover:border-primary/60 transition-colors cursor-pointer"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-primary rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
