import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  Code, 
  Palette, 
  PenTool, 
  Video, 
  TrendingUp, 
  BarChart3,
  MapPin,
  Star,
  DollarSign,
  Users,
  Briefcase
} from 'lucide-react';

const FreelanceSection = () => {
  const categories = [
    {
      title: "Web Development",
      jobs: 1250,
      icon: Code,
      tags: ["React", "Node.js", "Python"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Graphic Design",
      jobs: 890,
      icon: Palette,
      tags: ["Photoshop", "Illustrator", "Figma"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Content Writing",
      jobs: 675,
      icon: PenTool,
      tags: ["SEO Writing", "Copywriting", "Blogging"],
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Video Editing",
      jobs: 445,
      icon: Video,
      tags: ["Premiere Pro", "After Effects", "DaVinci"],
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Digital Marketing",
      jobs: 580,
      icon: TrendingUp,
      tags: ["Social Media", "PPC", "Analytics"],
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      title: "Data Analysis",
      jobs: 320,
      icon: BarChart3,
      tags: ["Python", "SQL", "Tableau"],
      gradient: "from-teal-500 to-blue-500"
    }
  ];

  const featuredJobs = [
    {
      urgent: true,
      title: "Senior React Developer for E-commerce Platform",
      company: "TechFlow Solutions",
      location: "Remote",
      rating: 4.9,
      description: "Looking for an experienced React developer to build a modern e-commerce platform with advanced features.",
      tags: ["React", "TypeScript", "Node.js", "MongoDB"],
      budget: "$5,000",
      duration: "3 months",
      proposals: 12
    },
    {
      urgent: false,
      title: "Brand Identity Design for Startup",
      company: "GreenStart Inc.",
      location: "San Francisco, CA",
      rating: 4.7,
      description: "Create complete brand identity including logo, color palette, typography, and brand guidelines for eco-friendly startup.",
      tags: ["Logo Design", "Brand Identity", "Illustrator", "Figma"],
      budget: "$2,500",
      duration: "6 weeks",
      proposals: 8
    },
    {
      urgent: false,
      title: "Technical Content Writer for SaaS Blog",
      company: "CloudTech Media",
      location: "Remote",
      rating: 4.8,
      description: "Write technical blog posts and documentation for cloud computing and SaaS platforms.",
      tags: ["Technical Writing", "SEO", "Cloud Computing", "SaaS"],
      budget: "$1,200",
      duration: "Ongoing",
      proposals: 15
    }
  ];

  return (
    <section id="freelance" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Freelancing <span className="gradient-text">Opportunities</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover amazing freelance opportunities and connect with clients looking for your expertise.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="glass-card p-6 hover:scale-105 transition-all duration-300 cursor-pointer h-full">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                
                <p className="text-2xl font-bold text-primary mb-4">
                  {category.jobs.toLocaleString()} <span className="text-sm font-normal text-muted-foreground">jobs available</span>
                </p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {category.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="bg-secondary/20 text-secondary-foreground px-2 py-1 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  Browse Jobs
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Opportunities */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-8 text-center">Featured Opportunities</h3>
          
          <div className="space-y-6">
            {featuredJobs.map((job, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="glass-card p-6 hover:scale-[1.02] transition-all duration-300">
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex gap-2">
                          {job.urgent && (
                            <span className="bg-red-500/20 text-red-400 px-2 py-1 rounded-full text-xs font-medium">
                              Urgent
                            </span>
                          )}
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary mb-1">{job.budget}</div>
                          <div className="text-sm text-muted-foreground">Starting budget</div>
                        </div>
                      </div>

                      <h4 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                        {job.title}
                      </h4>

                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <span className="font-medium text-foreground">{job.company}</span>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          {job.rating}
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {job.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {job.tags.map((tag, tagIndex) => (
                          <span 
                            key={tagIndex}
                            className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-6 text-sm text-muted-foreground">
                        <span>Budget: {job.budget} - {job.budget.replace('$', '$').replace(',', '') === '$5,000' ? '$8,000' : job.budget.replace('$', '$').replace(',', '') === '$2,500' ? '$4,000' : '$2,000'}</span>
                        <span>Duration: {job.duration}</span>
                        <span>{job.proposals} proposals</span>
                      </div>
                    </div>

                    <div className="lg:w-48 flex flex-col gap-3">
                      <Button className="btn-primary w-full">
                        Apply Now
                      </Button>
                      <Button variant="outline" className="w-full">
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center glass-card-glow p-12 rounded-3xl"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Briefcase className="w-16 h-16 text-primary mx-auto mb-6" />
          <h3 className="text-3xl font-bold mb-4">Ready to Start Freelancing?</h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of talented freelancers earning from their skills. Create your profile and start applying today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-primary px-8 py-4 text-lg">
              Create Profile
            </Button>
            <Button variant="outline" className="px-8 py-4 text-lg">
              Browse All Jobs
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FreelanceSection;