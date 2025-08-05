import React from 'react';
import { motion } from 'framer-motion';

const ProductsSection = () => {
  const products = [
    {
      title: "Talent Marketplace",
      description: "Access to 50,000+ verified freelancers across all skill sets",
      icon: "👥",
      features: ["AI-powered matching", "Skill verification", "Global talent pool"]
    },
    {
      title: "Project Management",
      description: "Streamlined workflow management and collaboration tools",
      icon: "🚀",
      features: ["Real-time collaboration", "Progress tracking", "Built-in communication"]
    },
    {
      title: "Payment Protection",
      description: "Secure payment system with escrow and milestone management",
      icon: "🔒",
      features: ["Escrow protection", "Milestone payments", "Dispute resolution"]
    },
    {
      title: "Quality Assurance",
      description: "End-to-end quality control and performance monitoring",
      icon: "⭐",
      features: ["Quality reviews", "Performance metrics", "Continuous feedback"]
    }
  ];

  return (
    <section id="products" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Complete <span className="gradient-text">Platform Solution</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to build, manage, and scale your remote teams with confidence.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <motion.div 
              key={index}
              className="interactive-card p-8 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="text-4xl bg-gradient-primary p-3 rounded-2xl">
                  {product.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {product.description}
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {product.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-foreground/80">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-glass-border">
                <button className="text-primary hover:text-primary-glow font-semibold transition-colors">
                  Learn More →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;