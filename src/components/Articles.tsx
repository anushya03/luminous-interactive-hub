import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Calendar, Trophy } from 'lucide-react';

const Articles = () => {
  const achievements = [
    {
      title: "IEEE Research Paper: ML in Agriculture",
      description: "Published research on machine learning applications for crop disease detection and yield prediction.",
      type: "Publication",
      date: "2024",
      status: "Published",
      link: "#"
    },
    {
      title: "Caterpillar Techathon Finalist",
      description: "Top 10 finalist in Caterpillar's global hackathon for innovative IoT solutions in construction.",
      type: "Achievement",
      date: "2024",
      status: "Finalist",
      link: "#"
    },
    {
      title: "ML Model Optimization Techniques",
      description: "Medium article on advanced techniques for optimizing machine learning models for production.",
      type: "Article",
      date: "2024",
      status: "Published",
      link: "#"
    }
  ];

  return (
    <section id="articles" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Articles & <span className="gradient-text">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-hero-gradient mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="glass card-hover h-full">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <Badge variant="outline">{item.type}</Badge>
                    <div className="flex items-center text-sm text-foreground/60">
                      <Calendar className="w-4 h-4 mr-1" />
                      {item.date}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 gradient-text">{item.title}</h3>
                  <p className="text-foreground/70 mb-4">{item.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <Badge className="bg-success/20 text-success border-success/30">
                      <Trophy className="w-3 h-3 mr-1" />
                      {item.status}
                    </Badge>
                    <ExternalLink className="w-4 h-4 text-primary cursor-pointer hover:scale-110 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;