
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Award, Users, Code, Target, School } from 'lucide-react';

const About = () => {
  const achievements = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "B.Tech - AI & Data Science",
      description: "CGPA: 8.17 | Bannari Amman Institute of Technology"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Multiple Finalist",
      description: "VASHISHT 2023, TechSpectrum 2024, Tech-Challenge 2025"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Youth Red Cross",
      description: "Educational & health awareness campaigns"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "AI Specialist",
      description: "Computer Vision, NLP & Deep Learning expert"
    }
  ];

  const interests = [
    "Machine Learning", "Deep Learning", "Computer Vision", "Natural Language Processing",
    "Computer Vision", "AI-Driven Solutions", "Manufacturing Automation", "Real-time Systems"
  ];

  const education = [
    {
      degree: "B.Tech – Artificial Intelligence & Data Science",
      institution: "Bannari Amman Institute of Technology",
      score: "CGPA: 8.17 (up to 5th sem)",
      icon: <GraduationCap className="w-5 h-5" />
    },
    {
      degree: "Higher Secondary (HSC)",
      institution: "Veveaham Matric Hr Sec School",
      score: "86.83%",
      icon: <School className="w-5 h-5" />
    },
    {
      degree: "SSLC",
      institution: "Adharsh Vidhyalaya Matric Hr Sec School",
      score: "84%",
      icon: <School className="w-5 h-5" />
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-hero-gradient mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Career Objective */}
            <Card className="glass card-hover">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-6 h-6 text-primary" />
                  <h3 className="text-2xl font-bold gradient-text">Career Objective</h3>
                </div>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  Passionate AI and Machine Learning engineer with hands-on experience in machine learning, 
                  deep learning, and computer vision. Skilled in building intelligent systems, real-time AI 
                  solutions, and user-centric applications. Seeking to apply technical expertise in delivering 
                  impactful AI-driven solutions for automation, security, and enhanced user experiences.
                </p>
                
                {/* Areas of Interest */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-primary">Areas of Expertise:</h4>
                  <div className="flex flex-wrap gap-2">
                    {interests.map((interest, index) => (
                      <motion.div
                        key={interest}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1, duration: 0.4 }}
                        viewport={{ once: true }}
                      >
                        <Badge variant="secondary" className="hover:bg-primary/20 transition-colors">
                          {interest}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Education */}
            <Card className="glass card-hover">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-6 gradient-text flex items-center gap-2">
                  <GraduationCap className="w-5 h-5" />
                  Education
                </h3>
                <div className="space-y-4">
                  {education.map((edu, index) => (
                    <motion.div
                      key={edu.degree}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="border-l-2 border-primary/30 pl-4 py-2"
                    >
                      <div className="flex items-start gap-2">
                        <div className="text-primary mt-1">{edu.icon}</div>
                        <div>
                          <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                          <p className="text-sm text-foreground/70">{edu.institution}</p>
                          <Badge variant="outline" className="mt-1 text-xs">{edu.score}</Badge>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Content - Achievement Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid gap-6"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="glass card-hover group">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <motion.div 
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors"
                      >
                        <div className="text-primary">
                          {achievement.icon}
                        </div>
                      </motion.div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg mb-2">
                          {achievement.title}
                        </h4>
                        <p className="text-foreground/70">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Soft Skills & Languages */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-2 gap-8"
        >
          <Card className="glass">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-semibold mb-4 gradient-text">
                💪 Soft Skills
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                {["Creativity", "Communication", "Leadership", "Time Management", "Integrity"].map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                    className="px-3 py-1 bg-primary/10 rounded-full text-sm border border-primary/20"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="glass">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-semibold mb-4 gradient-text">
                🌐 Languages
              </h3>
              <div className="space-y-2">
                <div className="flex items-center justify-center gap-2">
                  <span className="font-medium">English</span>
                  <Badge variant="outline" className="text-xs">Read/Write/Speak</Badge>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span className="font-medium">Tamil</span>
                  <Badge variant="outline" className="text-xs">Read/Write/Speak</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
