import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { FileText, Download, Calendar, Users } from 'lucide-react';

const ResearchSection = () => {
  const papers = [
    {
      title: "Machine Learning Applications in Climate Change Prediction",
      authors: "Dr. Sarah Johnson, Prof. Michael Brown, Dr. Lisa Wang",
      description: "This research explores novel machine learning techniques for predicting climate change patterns and their impact on global ecosystems.",
      tags: ["Machine Learning", "Climate Change", "Prediction Models", "Environmental Data"],
      category: "Environmental Science",
      published: "2024-01-15",
      downloads: 1250,
      pages: 24
    },
    {
      title: "Quantum Computing Algorithms for Cryptographic Security",
      authors: "Dr. Alex Chen, Prof. Robert Davis",
      description: "Investigation of quantum computing applications in enhancing cryptographic security protocols for next-generation digital communications.",
      tags: ["Quantum Computing", "Cryptography", "Security", "Algorithms"],
      category: "Computer Science",
      published: "2024-01-08",
      downloads: 892,
      pages: 18
    },
    {
      title: "Biomedical Imaging with AI-Enhanced Analysis",
      authors: "Dr. Emily Rodriguez, Dr. James Wilson, Prof. Maria Garcia",
      description: "Development of AI-enhanced biomedical imaging techniques for improved diagnosis and treatment planning in modern healthcare.",
      tags: ["Biomedical Imaging", "Artificial Intelligence", "Healthcare", "Diagnosis"],
      category: "Biomedical Engineering",
      published: "2023-12-22",
      downloads: 2100,
      pages: 32
    }
  ];

  return (
    <section id="research" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Research <span className="gradient-text">Hub</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Access cutting-edge research papers and academic publications from leading researchers worldwide.
          </p>
        </motion.div>

        <div className="space-y-8 mb-12">
          {papers.map((paper, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="glass-card p-8 hover:scale-[1.02] transition-all duration-300">
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                      {paper.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4">
                      {paper.authors}
                    </p>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {paper.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {paper.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="lg:w-80">
                    <div className="glass-card p-6 space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Category</span>
                        <span className="text-sm font-medium text-primary">{paper.category}</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          Published
                        </span>
                        <span className="text-sm font-medium">{paper.published}</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground flex items-center gap-1">
                          <Download className="w-4 h-4" />
                          Downloads
                        </span>
                        <span className="text-sm font-medium">{paper.downloads.toLocaleString()}</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground flex items-center gap-1">
                          <FileText className="w-4 h-4" />
                          Pages
                        </span>
                        <span className="text-sm font-medium">{paper.pages}</span>
                      </div>
                      
                      <div className="pt-4 border-t border-glass-border space-y-2">
                        <Button className="w-full btn-primary">
                          Download PDF
                        </Button>
                        <Button variant="outline" className="w-full">
                          Read Online
                        </Button>
                      </div>
                    </div>
                  </div>
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
          <FileText className="w-16 h-16 text-primary mx-auto mb-6" />
          <h3 className="text-3xl font-bold mb-4">Share Your Research</h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contribute to the global research community by publishing your papers on AVAL.RESEARCH
          </p>
          <Button className="btn-primary px-8 py-4 text-lg">
            Submit Research Paper
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ResearchSection;