import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Award, Users, Code } from 'lucide-react';

const About = () => {
  const achievements = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Academic Excellence",
      description: "Computer Science Engineering with focus on AI/ML"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "IEEE Publication",
      description: "Research paper on machine learning applications"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Leadership",
      description: "Led multiple successful project teams"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Full-Stack Dev",
      description: "Proficient in modern web technologies"
    }
  ];

  const interests = [
    "Machine Learning", "Deep Learning", "Data Science", "Web Development",
    "Computer Vision", "Natural Language Processing", "Cloud Computing", "DevOps"
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

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="glass card-hover">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 gradient-text">
                  Passionate ML Engineer & Developer
                </h3>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  I'm a dedicated Computer Science Engineering student with a deep passion for 
                  machine learning and artificial intelligence. My journey in technology has led 
                  me to explore various domains including deep learning, data science, and 
                  full-stack web development.
                </p>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  With a strong foundation in both theoretical concepts and practical 
                  implementation, I strive to create innovative solutions that bridge the 
                  gap between cutting-edge research and real-world applications.
                </p>
                
                {/* Interests Tags */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-primary">Areas of Interest:</h4>
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
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <div className="text-primary">
                          {achievement.icon}
                        </div>
                      </div>
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

        {/* Fun Fact */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="glass max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-4 gradient-text">
                🎯 Current Focus
              </h3>
              <p className="text-foreground/80">
                Currently working on advanced machine learning projects and exploring 
                the intersection of AI with web technologies. Always excited to collaborate 
                on innovative projects that can make a positive impact!
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default About;