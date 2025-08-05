import React from 'react';
import { motion } from 'framer-motion';
import techBg from '@/assets/tech-bg.jpg';

const TechSection = () => {
  const techFeatures = [
    {
      title: "AI-Powered Matching",
      description: "Advanced algorithms that match projects with the perfect freelancers based on skills, experience, and compatibility.",
      icon: "🤖",
      technologies: ["Machine Learning", "Natural Language Processing", "Predictive Analytics"]
    },
    {
      title: "Blockchain Security",
      description: "Decentralized security protocols ensuring data integrity and transparent transaction records.",
      icon: "🔗",
      technologies: ["Smart Contracts", "Ethereum", "IPFS Storage"]
    },
    {
      title: "Real-time Collaboration",
      description: "Cutting-edge communication tools with video, audio, and synchronized workspace capabilities.",
      icon: "💬",
      technologies: ["WebRTC", "Socket.io", "Cloud Sync"]
    },
    {
      title: "Advanced Analytics",
      description: "Comprehensive performance metrics and insights to optimize team productivity and project outcomes.",
      icon: "📊",
      technologies: ["Big Data", "Data Visualization", "Performance Monitoring"]
    }
  ];

  return (
    <section id="tech" className="py-20 relative bg-gradient-to-b from-background to-muted/20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${techBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Powered by <span className="gradient-text">Next-Gen Technology</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our platform leverages the latest in AI, blockchain, and cloud computing to deliver 
            an unparalleled freelancing experience.
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {techFeatures.map((feature, index) => (
            <div 
              key={index}
              className="glass-card-glow p-8 group hover:scale-105 transition-all duration-500"
            >
              {/* Header */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="text-5xl p-4 bg-gradient-glow rounded-3xl group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {feature.description}
              </p>

              {/* Technologies */}
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground/90 mb-3">Key Technologies:</h4>
                <div className="flex flex-wrap gap-3">
                  {feature.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-accent/20 text-accent-foreground rounded-full text-sm border border-accent/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Interactive Element */}
              <div className="mt-6 pt-6 border-t border-glass-border">
                <button className="flex items-center space-x-2 text-primary hover:text-primary-glow font-semibold transition-colors group-hover:translate-x-2 transition-transform duration-300">
                  <span>Explore Technology</span>
                  <span className="text-lg">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Showcase */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold mb-8 text-foreground/90">Built with Industry Leaders</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 opacity-60">
            {['React', 'Node.js', 'AWS', 'MongoDB', 'Docker', 'Kubernetes'].map((tech, index) => (
              <div key={index} className="glass-card p-4 hover:opacity-100 transition-opacity">
                <span className="text-sm font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSection;