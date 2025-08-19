
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Calendar, Trophy, Award, Users } from 'lucide-react';

const Articles = () => {
  const achievements = [
    {
      title: "VASHISHT 2023 - IEEE Paper Presentation",
      description: "Achieved finalist position in prestigious IEEE paper presentation competition at IIITDM Kancheepuram, showcasing research excellence in AI and machine learning domain.",
      type: "Competition",
      date: "2023",
      status: "Finalist",
      venue: "IIITDM Kancheepuram",
      icon: <Award className="w-5 h-5" />,
      link: "#"
    },
    {
      title: "TechSpectrum 2024 - Pitch Perfect",
      description: "Secured finalist position in Pitch Perfect competition at SRM University Trichy, demonstrating exceptional presentation skills and innovative project concepts.",
      type: "Competition",
      date: "2024",
      status: "Finalist", 
      venue: "SRM University, Trichy",
      icon: <Trophy className="w-5 h-5" />,
      link: "#"
    },
    {
      title: "Tech-Challenge 2025 - Product Presentation",
      description: "Achieved finalist status in Caterpillar India's Tech-Challenge 2025 for innovative product presentation, competing against top engineering talent nationwide.",
      type: "Industry Challenge",
      date: "2025",
      status: "Finalist",
      venue: "Caterpillar India Pvt. Ltd.",
      icon: <Trophy className="w-5 h-5" />,
      link: "#"
    },
    {
      title: "Youth Red Cross Volunteer",
      description: "Active participation in educational and health awareness campaigns for rural communities, demonstrating commitment to social service and community development.",
      type: "Volunteer Work",
      date: "Ongoing",
      status: "Active",
      venue: "Rural Communities",
      icon: <Users className="w-5 h-5" />,
      link: "#"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Finalist': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'Active': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Published': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      default: return 'bg-muted text-muted-foreground';
    }
  };

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
            Achievements & <span className="gradient-text">Recognition</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto mb-8">
            Competitions, presentations, and community involvement that showcase my commitment to excellence
          </p>
          <div className="w-24 h-1 bg-hero-gradient mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="glass card-hover h-full group">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <Badge variant="outline" className="flex items-center gap-1">
                      {item.icon}
                      {item.type}
                    </Badge>
                    <div className="flex items-center text-sm text-foreground/60">
                      <Calendar className="w-4 h-4 mr-1" />
                      {item.date}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 gradient-text group-hover:scale-105 transition-transform">
                    {item.title}
                  </h3>
                  <p className="text-foreground/70 mb-4 line-clamp-3">
                    {item.description}
                  </p>
                  
                  {item.venue && (
                    <p className="text-sm text-foreground/60 mb-4 italic">
                      📍 {item.venue}
                    </p>
                  )}
                  
                  <div className="flex items-center justify-between">
                    <Badge className={`${getStatusColor(item.status)} border flex items-center gap-1`}>
                      <Trophy className="w-3 h-3" />
                      {item.status}
                    </Badge>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 15 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ExternalLink className="w-4 h-4 text-primary cursor-pointer" />
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Recognition Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="glass max-w-4xl mx-auto">
            <CardContent className="p-8 text-center">
              <motion.h3 
                className="text-2xl font-bold mb-6 gradient-text"
                whileHover={{ scale: 1.05 }}
              >
                🏆 Competition Excellence
              </motion.h3>
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="p-4 bg-primary/5 rounded-lg border border-primary/20"
                >
                  <div className="text-2xl font-bold text-primary mb-2">3x</div>
                  <div className="text-sm text-foreground/70">Competition Finalist</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="p-4 bg-accent/5 rounded-lg border border-accent/20"
                >
                  <div className="text-2xl font-bold text-accent mb-2">2024-25</div>
                  <div className="text-sm text-foreground/70">Recent Achievements</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="p-4 bg-success/5 rounded-lg border border-success/20"
                >
                  <div className="text-2xl font-bold text-success mb-2">Active</div>
                  <div className="text-sm text-foreground/70">Community Volunteer</div>
                </motion.div>
              </div>
              <p className="text-foreground/80">
                Consistent recognition in competitive environments, from IEEE research presentations 
                to industry challenges, demonstrating technical excellence and presentation skills.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Articles;
