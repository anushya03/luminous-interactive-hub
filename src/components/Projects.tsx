
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Eye, Zap, Brain, MessageSquare, Car, ArrowRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Defect Detection for Manufacturing Industries",
      description: "Built an AI-based industrial vision system to detect and classify manufacturing defects (paint, weld, assembly, measurement, surface) in real time. Achieved high detection accuracy through a unified deep learning pipeline.",
      technologies: ["YOLOv8", "Computer Vision", "Python", "OpenCV", "Deep Learning"],
      category: "Computer Vision",
      status: "Completed",
      icon: <Zap className="w-6 h-6" />,
      github: "#",
      demo: "#",
      image: "bg-gradient-to-br from-orange-500 to-red-600"
    },
    {
      title: "Comment Toxicity Detection",
      description: "Developed a hybrid deep learning model achieving 87.59% F1 score for real-time toxic comment detection. Automated moderation of hate speech, threats, and abusive content, reducing manual workload.",
      technologies: ["CNN-RNN-LSTM", "NLP", "TensorFlow", "Python", "Text Processing"],
      category: "NLP & AI",
      status: "Completed",
      icon: <MessageSquare className="w-6 h-6" />,
      github: "#",
      demo: "#",
      image: "bg-gradient-to-br from-purple-500 to-pink-600"
    },
    {
      title: "ChatBot with RAG",
      description: "Created a Retrieval-Augmented Generation chatbot with FAISS vector search and contextual LLM responses. Implemented RetrievalQA for document-based question answering.",
      technologies: ["Flask", "FAISS", "HuggingFace", "Ollama", "RAG", "LLM"],
      category: "AI & NLP",
      status: "Completed",
      icon: <Brain className="w-6 h-6" />,
      github: "#",
      demo: "#",
      image: "bg-gradient-to-br from-blue-500 to-cyan-600"
    },
    {
      title: "UI for Car Dashboard",
      description: "Designed an interactive car dashboard app with real-time updates for speed, fuel, and navigation. Optimized UI for multiple display resolutions using Qt Widgets.",
      technologies: ["Qt Framework", "Python", "UI/UX Design", "Real-time Systems"],
      category: "UI Development",
      status: "Completed",
      icon: <Car className="w-6 h-6" />,
      github: "#",
      demo: "#",
      image: "bg-gradient-to-br from-green-500 to-emerald-600"
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
            Explore my portfolio of AI, machine learning, and computer vision projects that solve real-world problems
          </p>
          <div className="w-24 h-1 bg-hero-gradient mx-auto rounded-full"></div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="glass card-hover h-full group overflow-hidden">
                {/* Project Header */}
                <div className={`h-48 ${project.image} relative overflow-hidden`}>
                  <motion.div 
                    className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        className="text-white/90"
                      >
                        {project.icon}
                      </motion.div>
                    </div>
                  </motion.div>
                  
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
                  <p className="text-foreground/70 mb-4 line-clamp-4">
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
                      <motion.div
                        className="ml-2"
                        whileHover={{ x: 3 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ExternalLink className="w-3 h-3" />
                      </motion.div>
                    </Button>
                    <Button variant="glow" size="sm" className="flex-1 group/btn">
                      <Eye className="w-4 h-4 mr-2" />
                      Demo
                      <motion.div
                        className="ml-2"
                        whileHover={{ x: 3 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ExternalLink className="w-3 h-3" />
                      </motion.div>
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
          <Button variant="hero" size="lg" className="group">
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
            <motion.div
              className="ml-2"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowRight className="w-4 h-4" />
            </motion.div>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
