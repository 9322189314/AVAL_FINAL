import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const FreelancersSection = () => {
  const freelancers = [
    {
      name: "Sarah Chen",
      title: "Full Stack Developer",
      experience: "8 years",
      rating: 4.9,
      hourlyRate: "$85",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      skills: ["React", "Node.js", "TypeScript", "AWS"],
      completedProjects: 127,
      availability: "Available"
    },
    {
      name: "Marcus Johnson",
      title: "UI/UX Designer",
      experience: "6 years",
      rating: 4.8,
      hourlyRate: "$70",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      skills: ["Figma", "Adobe Creative", "Prototyping", "Design Systems"],
      completedProjects: 89,
      availability: "Available"
    },
    {
      name: "Elena Rodriguez",
      title: "Data Scientist",
      experience: "5 years",
      rating: 5.0,
      hourlyRate: "$95",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
      skills: ["Python", "Machine Learning", "TensorFlow", "Analytics"],
      completedProjects: 64,
      availability: "Busy"
    },
    {
      name: "Alex Kim",
      title: "DevOps Engineer",
      experience: "7 years",
      rating: 4.9,
      hourlyRate: "$90",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      skills: ["Docker", "Kubernetes", "AWS", "CI/CD"],
      completedProjects: 156,
      availability: "Available"
    }
  ];

  return (
    <section id="freelancers" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meet Our <span className="gradient-text">Elite Freelancers</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connect with top-tier professionals who have been vetted through our rigorous selection process.
          </p>
        </div>

        {/* Freelancers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {freelancers.map((freelancer, index) => (
            <motion.div 
              key={index}
              className="interactive-card p-6 text-center group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Avatar */}
              <div className="relative mb-6">
                <img 
                  src={freelancer.avatar}
                  alt={freelancer.name}
                  className="w-20 h-20 rounded-full mx-auto border-2 border-glass-border group-hover:border-primary transition-colors"
                />
                <div className={`absolute -bottom-1 -right-1 w-6 h-6 rounded-full border-2 border-background ${
                  freelancer.availability === 'Available' ? 'bg-green-500' : 'bg-orange-500'
                }`}></div>
              </div>

              {/* Info */}
              <div className="mb-4">
                <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                  {freelancer.name}
                </h3>
                <p className="text-muted-foreground mb-2">{freelancer.title}</p>
                <div className="flex items-center justify-center space-x-2 text-sm">
                  <span className="text-yellow-400">★</span>
                  <span>{freelancer.rating}</span>
                  <span className="text-muted-foreground">({freelancer.completedProjects} projects)</span>
                </div>
              </div>

              {/* Rate */}
              <div className="mb-4">
                <span className="text-2xl font-bold gradient-text">{freelancer.hourlyRate}</span>
                <span className="text-muted-foreground">/hour</span>
              </div>

              {/* Skills */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2 justify-center">
                  {freelancer.skills.slice(0, 3).map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-2 py-1 bg-accent/20 text-accent-foreground rounded-md text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                  {freelancer.skills.length > 3 && (
                    <span className="px-2 py-1 bg-muted text-muted-foreground rounded-md text-xs">
                      +{freelancer.skills.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2">
                <Button 
                  className="w-full btn-primary text-sm py-2"
                  disabled={freelancer.availability === 'Busy'}
                >
                  {freelancer.availability === 'Available' ? 'Hire Now' : 'Unavailable'}
                </Button>
                <Button variant="outline" className="w-full text-sm py-2 btn-glass">
                  View Profile
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Application Section */}
        <div className="text-center space-y-8">
          {/* Apply as Freelancer */}
          <div className="glass-card-glow p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Join Our Elite Network?</h3>
            <p className="text-muted-foreground mb-6">
              Become part of an exclusive community of top freelancers and get access to high-value projects.
            </p>
            <Button className="btn-primary px-8 py-3">
              Apply as Freelancer
            </Button>
          </div>

          {/* Collaboration CTA */}
          <div className="glass-card p-6 max-w-2xl mx-auto bg-accent/10 border-accent/30">
            <h4 className="text-xl font-semibold mb-3">Looking for Partnership Opportunities?</h4>
            <p className="text-muted-foreground mb-4">
              Join our collaboration network and work on innovative projects with industry leaders.
            </p>
            <Button className="btn-glass bg-accent/20 text-accent-foreground hover:bg-accent/30 border-accent/40">
              Apply for Collaboration
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreelancersSection;