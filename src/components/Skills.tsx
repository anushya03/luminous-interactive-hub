
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { 
  Brain, 
  Code, 
  Database, 
  Globe, 
  Cpu,
  BarChart,
  Zap,
  Eye
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "Python", level: 90 },
        { name: "Java", level: 70 },
        { name: "SQL", level: 85 }
      ]
    },
    {
      title: "ML/DL Frameworks",
      icon: <Brain className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "TensorFlow", level: 88 },
        { name: "PyTorch", level: 85 },
        { name: "FAISS", level: 80 },
        { name: "Ollama", level: 75 },
        { name: "YOLOv8", level: 90 },
        { name: "OpenCV", level: 88 }
      ]
    },
    {
      title: "Web Development & Tools",
      icon: <Globe className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Flask", level: 85 },
        { name: "Qt Framework", level: 80 },
        { name: "GitHub", level: 90 },
        { name: "Jupyter Notebook", level: 95 },
        { name: "VS Code", level: 90 }
      ]
    },
    {
      title: "AI/ML Domains",
      icon: <Eye className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Machine Learning", level: 92 },
        { name: "Deep Learning", level: 88 },
        { name: "Computer Vision", level: 90 },
        { name: "Natural Language Processing", level: 85 },
        { name: "Web Development", level: 80 }
      ]
    }
  ];

  const tools = [
    { name: "Git & GitHub", icon: <Code className="w-5 h-5" /> },
    { name: "VS Code", icon: <Globe className="w-5 h-5" /> },
    { name: "Jupyter Notebook", icon: <BarChart className="w-5 h-5" /> },
    { name: "TensorFlow", icon: <Brain className="w-5 h-5" /> },
    { name: "PyTorch", icon: <Zap className="w-5 h-5" /> },
    { name: "Qt Framework", icon: <Cpu className="w-5 h-5" /> }
  ];

  return (
    <section id="skills" className="py-20 relative">
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
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto mb-8">
            Technologies and frameworks I work with to build intelligent AI solutions
          </p>
          <div className="w-24 h-1 bg-hero-gradient mx-auto rounded-full"></div>
        </motion.div>

        {/* Skills Categories */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="glass card-hover h-full">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3">
                    <motion.div 
                      className={`p-2 rounded-lg bg-gradient-to-r ${category.color}`}
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="text-white">
                        {category.icon}
                      </div>
                    </motion.div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ 
                          delay: categoryIndex * 0.2 + skillIndex * 0.1, 
                          duration: 0.4 
                        }}
                        viewport={{ once: true }}
                        className="space-y-2"
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">{skill.name}</span>
                          <span className="text-sm text-foreground/60">{skill.level}%</span>
                        </div>
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          transition={{ 
                            delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.2,
                            duration: 0.8
                          }}
                          viewport={{ once: true }}
                        >
                          <Progress 
                            value={skill.level} 
                            className="h-2"
                          />
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Tools & Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-8 gradient-text">
            Tools & Technologies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.1, 
                  rotate: [0, -5, 5, 0],
                  transition: { duration: 0.3 }
                }}
                className="glass p-4 rounded-xl text-center group cursor-pointer"
              >
                <motion.div 
                  className="text-primary mb-2 group-hover:scale-110 transition-transform"
                  whileHover={{ y: -2 }}
                >
                  {tool.icon}
                </motion.div>
                <p className="text-sm font-medium">{tool.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Current Focus */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="glass max-w-4xl mx-auto">
            <CardContent className="p-8 text-center">
              <motion.h3 
                className="text-xl font-bold mb-4 gradient-text"
                whileHover={{ scale: 1.05 }}
              >
                🎯 Current Focus
              </motion.h3>
              <p className="text-foreground/80 mb-6">
                Specializing in real-time AI solutions for manufacturing automation, computer vision applications, 
                and intelligent chatbot systems. Always exploring cutting-edge ML/DL techniques for practical implementations.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {["Real-time Computer Vision", "Manufacturing AI", "NLP & Chatbots", "Deep Learning Research"].map((focus, index) => (
                  <motion.div
                    key={focus}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-primary/10 rounded-full text-sm border border-primary/20"
                  >
                    {focus}
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
