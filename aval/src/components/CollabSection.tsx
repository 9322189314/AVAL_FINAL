import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  Users, 
  Handshake, 
  Heart, 
  Zap, 
  MapPin, 
  Clock,
  AlertCircle 
} from 'lucide-react';

const CollabSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Co-founder', 'Partnership', 'Volunteer', 'Challenge'];

  const opportunities = [
    {
      urgent: true,
      type: "Startup Partnership",
      category: "Co-founder",
      title: "FinTech Startup Seeking Technical Co-founder",
      company: "NeoBank Solutions",
      location: "San Francisco, CA",
      timeAgo: "2 days ago",
      description: "Revolutionary digital banking platform looking for experienced technical co-founder to join founding team.",
      tags: ["React", "Node.js", "Blockchain", "Financial APIs"],
      interested: 23,
      badge: "Co-founder"
    },
    {
      urgent: false,
      type: "Open Source Project",
      category: "Volunteer",
      title: "AI-Powered Healthcare Platform Development",
      company: "HealthTech Collective",
      location: "Remote",
      timeAgo: "1 week ago",
      description: "Open-source initiative to build AI-powered healthcare diagnostic tools for underserved communities.",
      tags: ["Python", "TensorFlow", "Healthcare APIs", "ML"],
      interested: 45,
      badge: "Volunteer"
    },
    {
      urgent: false,
      type: "Business Collaboration",
      category: "Partnership",
      title: "E-commerce Platform Partnership Opportunity",
      company: "RetailFlow Inc.",
      location: "New York, NY",
      timeAgo: "3 days ago",
      description: "Established e-commerce platform seeking strategic partnerships with logistics and payment processing companies.",
      tags: ["Business Strategy", "Logistics", "Partnerships", "E-commerce"],
      interested: 12,
      badge: "Partnership"
    },
    {
      urgent: true,
      type: "Innovation Lab",
      category: "Challenge",
      title: "Climate Tech Innovation Challenge",
      company: "GreenFuture Labs",
      location: "Austin, TX",
      timeAgo: "5 days ago",
      description: "Join our 3-month innovation challenge to develop sustainable technology solutions for climate change.",
      tags: ["Environmental Science", "IoT", "Data Analytics", "Sustainability"],
      interested: 67,
      badge: "Challenge"
    }
  ];

  const filteredOpportunities = activeFilter === 'All' 
    ? opportunities 
    : opportunities.filter(opp => opp.category === activeFilter);

  return (
    <section id="collab" className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Collaboration <span className="gradient-text">Hub</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connect with startups, join innovation challenges, and explore partnership opportunities that drive the future.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeFilter === filter
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-glass-border text-muted-foreground hover:bg-primary/20'
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {filteredOpportunities.map((opportunity, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="glass-card p-6 hover:scale-[1.02] transition-all duration-300 h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex gap-2">
                    {opportunity.urgent && (
                      <span className="flex items-center gap-1 bg-red-500/20 text-red-400 px-2 py-1 rounded-full text-xs">
                        <AlertCircle className="w-3 h-3" />
                        Urgent
                      </span>
                    )}
                    <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-medium">
                      {opportunity.type}
                    </span>
                  </div>
                  <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-xs font-medium">
                    {opportunity.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {opportunity.title}
                </h3>

                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <span className="font-medium text-foreground">{opportunity.company}</span>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {opportunity.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {opportunity.timeAgo}
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {opportunity.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {opportunity.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="bg-secondary/20 text-secondary-foreground px-2 py-1 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span>{opportunity.interested} interested</span>
                  </div>
                  <Button className="btn-primary">
                    Learn More
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          className="text-center glass-card-glow p-12 rounded-3xl"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Handshake className="w-16 h-16 text-primary mx-auto mb-6" />
          <h3 className="text-3xl font-bold mb-4">Start Your Collaboration</h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Post your collaboration opportunity and connect with talented individuals and innovative companies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-primary px-8 py-4 text-lg">
              Post Opportunity
            </Button>
            <Button variant="outline" className="px-8 py-4 text-lg">
              Browse All Collaborations
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CollabSection;