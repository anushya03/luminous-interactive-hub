import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Eye } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Crop Disease Detection",
      description: "Machine learning model using CNN to identify crop diseases from leaf images. Achieved 94% accuracy with TensorFlow and OpenCV.",
      technologies: ["Python", "TensorFlow", "OpenCV", "Flask", "React"],
      category: "Machine Learning",
      status: "Live",
      github: "#",
      demo: "#",
      image: "bg-gradient-to-br from-green-500 to-emerald-600"
    },
    {
      title: "Smart Traffic Management System",
      description: "IoT-based system with real-time traffic monitoring and optimization using computer vision and sensor data.",
      technologies: ["Python", "OpenCV", "Arduino", "Node.js", "MongoDB"],
      category: "IoT & AI",
      status: "In Progress",
      github: "#",
      demo: "#",
      image: "bg-gradient-to-br from-blue-500 to-cyan-600"
    },
    {
      title: "Financial Fraud Detection",
      description: "Advanced ML model for detecting fraudulent transactions using ensemble methods and anomaly detection.",
      technologies: ["Python", "Scikit-learn", "Pandas", "Streamlit"],
      category: "Data Science",
      status: "Completed",
      github: "#",
      demo: "#",
      image: "bg-gradient-to-br from-purple-500 to-pink-600"
    },
    {
      title: "Real-time Chat Application",
      description: "Full-stack chat app with real-time messaging, file sharing, and video calls using WebRTC and Socket.io.",
      technologies: ["React", "Node.js", "Socket.io", "WebRTC", "MongoDB"],
      category: "Full-Stack",
      status: "Live",
      github: "#",
      demo: "#",
      image: "bg-gradient-to-br from-orange-500 to-red-600"
    },
    {
      title: "Predictive Analytics Dashboard",
      description: "Interactive dashboard for business analytics with predictive modeling and data visualization.",
      technologies: ["React", "D3.js", "Python", "FastAPI", "PostgreSQL"],
      category: "Data Analytics",
      status: "Live",
      github: "#",
      demo: "#",
      image: "bg-gradient-to-br from-indigo-500 to-purple-600"
    },
    {
      title: "Voice-Controlled Home Assistant",
      description: "AI assistant with natural language processing for smart home control and task automation.",
      technologies: ["Python", "NLP", "Raspberry Pi", "React Native"],
      category: "AI & IoT",
      status: "Prototype",
      github: "#",
      demo: "#",
      image: "bg-gradient-to-br from-teal-500 to-green-600"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Live': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'In Progress': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'Completed': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'Prototype': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <section id="projects" className="py-20 relative">
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
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto mb-8">
            Explore my portfolio of machine learning, web development, and IoT projects
          </p>
          <div className="w-24 h-1 bg-hero-gradient mx-auto rounded-full"></div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="glass card-hover h-full group overflow-hidden">
                {/* Project Image/Preview */}
                <div className={`h-48 ${project.image} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                  <div className="absolute top-4 right-4">
                    <Badge className={`${getStatusColor(project.status)} border`}>
                      {project.status}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <Badge variant="secondary" className="bg-black/30 text-white border-white/20">
                      {project.category}
                    </Badge>
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="pt-0">
                  <p className="text-foreground/70 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 4}
                      </Badge>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="flex-1 group/btn">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                      <ExternalLink className="w-3 h-3 ml-2 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                    </Button>
                    <Button variant="glow" size="sm" className="flex-1 group/btn">
                      <Eye className="w-4 h-4 mr-2" />
                      Demo
                      <ExternalLink className="w-3 h-3 ml-2 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="hero" size="lg">
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;