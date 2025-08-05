import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  Monitor, 
  Users, 
  FileText, 
  Handshake 
} from 'lucide-react';

const PlatformsSection = () => {
  const platforms = [
    {
      title: "AVAL.TECH",
      subtitle: "Display Tech Projects",
      description: "Showcase your technical projects, products, and portfolios in a stunning visual format.",
      icon: Monitor,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "AVAL.FREELANCE",
      subtitle: "Freelancer Platform",
      description: "Connect talented freelancers with amazing opportunities. Post profiles and get hired.",
      icon: Users,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "AVAL.RESEARCH",
      subtitle: "Research Papers Hub",
      description: "Host, showcase and collaborate on cutting-edge research papers and academic work.",
      icon: FileText,
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "AVAL.COLLAB",
      subtitle: "Collaboration Board",
      description: "Connect with startups, join events, and explore open collaboration opportunities.",
      icon: Handshake,
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="platforms" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Four Platforms, <span className="gradient-text">One Destination</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to build, showcase, collaborate, and grow in the digital ecosystem.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {platforms.map((platform, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="glass-card p-8 h-full hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${platform.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <platform.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-2 gradient-text">
                  {platform.title}
                </h3>
                
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  {platform.subtitle}
                </h4>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {platform.description}
                </p>
                
                <Button variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  Explore
                </Button>
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
          <h3 className="text-3xl font-bold mb-4">Ready to Join the Revolution?</h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start building your future with AVAL's comprehensive platform ecosystem.
          </p>
          <Button className="btn-primary px-8 py-4 text-lg">
            Get Started Today
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default PlatformsSection;