import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Heart, Download, Star } from 'lucide-react';

const ShowcaseSection = () => {
  const projects = [
    {
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop",
      category: "UI/UX Design",
      title: "AI-Powered Design System",
      author: "Sarah Chen",
      description: "Revolutionary design system powered by artificial intelligence for modern web applications.",
      likes: 245,
      downloads: 1200,
      rating: 4.8
    },
    {
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=300&fit=crop",
      category: "Research Paper",
      title: "Quantum Computing Research",
      author: "Dr. Michael Rodriguez",
      description: "Breakthrough research in quantum computing algorithms and their practical applications.",
      likes: 189,
      downloads: 856,
      rating: 4.9
    },
    {
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
      category: "Freelance Project",
      title: "Mobile App Development",
      author: "Alex Thompson",
      description: "Cross-platform mobile application with cutting-edge features and intuitive design.",
      likes: 312,
      downloads: 1500,
      rating: 4.7
    },
    {
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop",
      category: "Collaboration",
      title: "Startup Collaboration Hub",
      author: "Emma Wilson",
      description: "Platform connecting startups with investors and collaborative opportunities worldwide.",
      likes: 156,
      downloads: 789,
      rating: 4.6
    }
  ];

  return (
    <section id="showcase" className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Showcase</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover amazing projects, research papers, and collaborations from our vibrant community.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="glass-card overflow-hidden hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary/20 backdrop-blur-sm text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-3">
                    by {project.author}
                  </p>
                  
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Heart className="w-4 h-4" />
                      <span>{project.likes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Download className="w-4 h-4" />
                      <span>{project.downloads}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span>{project.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Button className="btn-primary px-8 py-4">
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ShowcaseSection;