import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { 
  Brain, 
  Code, 
  Database, 
  Cloud, 
  Globe, 
  Cpu,
  BarChart,
  Zap
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Machine Learning & AI",
      icon: <Brain className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Python", level: 95 },
        { name: "TensorFlow", level: 88 },
        { name: "PyTorch", level: 85 },
        { name: "Scikit-learn", level: 92 },
        { name: "OpenCV", level: 80 },
        { name: "NLP", level: 75 }
      ]
    },
    {
      title: "Web Development",
      icon: <Code className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React", level: 90 },
        { name: "Node.js", level: 85 },
        { name: "JavaScript/TypeScript", level: 88 },
        { name: "Next.js", level: 82 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Express.js", level: 80 }
      ]
    },
    {
      title: "Data Science",
      icon: <BarChart className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Pandas", level: 92 },
        { name: "NumPy", level: 90 },
        { name: "Matplotlib", level: 85 },
        { name: "Seaborn", level: 80 },
        { name: "Jupyter", level: 95 },
        { name: "Statistical Analysis", level: 78 }
      ]
    },
    {
      title: "Databases & Cloud",
      icon: <Database className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "MySQL", level: 82 },
        { name: "AWS", level: 75 },
        { name: "Docker", level: 70 },
        { name: "Firebase", level: 88 }
      ]
    }
  ];

  const tools = [
    { name: "Git & GitHub", icon: <Code className="w-5 h-5" /> },
    { name: "VS Code", icon: <Globe className="w-5 h-5" /> },
    { name: "Jupyter Notebook", icon: <BarChart className="w-5 h-5" /> },
    { name: "Google Colab", icon: <Cloud className="w-5 h-5" /> },
    { name: "Postman", icon: <Zap className="w-5 h-5" /> },
    { name: "Figma", icon: <Cpu className="w-5 h-5" /> }
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
            Technologies and tools I work with to bring ideas to life
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
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color}`}>
                      <div className="text-white">
                        {category.icon}
                      </div>
                    </div>
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
                        <Progress 
                          value={skill.level} 
                          className="h-2"
                        />
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
                whileHover={{ scale: 1.05 }}
                className="glass p-4 rounded-xl text-center group cursor-pointer"
              >
                <div className="text-primary mb-2 group-hover:scale-110 transition-transform">
                  {tool.icon}
                </div>
                <p className="text-sm font-medium">{tool.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications & Learning */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="glass max-w-4xl mx-auto">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-bold mb-4 gradient-text">
                🎓 Continuous Learning
              </h3>
              <p className="text-foreground/80 mb-6">
                Always staying updated with the latest technologies and best practices. 
                Currently pursuing advanced certifications in cloud computing and deep learning.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {["AWS Solutions Architect", "TensorFlow Developer", "Google Cloud ML", "Azure AI Fundamentals"].map((cert, index) => (
                  <motion.div
                    key={cert}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                    className="px-4 py-2 bg-primary/10 rounded-full text-sm border border-primary/20"
                  >
                    {cert}
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