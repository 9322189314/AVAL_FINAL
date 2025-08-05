
import React from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Clock, MessageCircle, Calendar } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gradient-to-t from-muted/20 to-background border-t border-glass-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Contact Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Have questions about AVAL? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-6">Send Message</h3>
              <p className="text-muted-foreground mb-6">Fill out the form below and we'll get back to you</p>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-input border border-glass-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-input border border-glass-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-input border border-glass-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="What's this about?"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 bg-input border border-glass-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Tell us more..."
                  />
                </div>
                <Button className="btn-primary w-full py-3">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="glass-card p-6">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-primary">hello@aval.com</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">Send us an email anytime!</p>
              </div>

              <div className="glass-card p-6">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p className="text-primary">+1 (555) 123-4567</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">Mon-Fri from 8am to 5pm</p>
              </div>

              <div className="glass-card p-6">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Office</h4>
                    <p className="text-primary">San Francisco, CA</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">Come say hello at our HQ</p>
              </div>

              <div className="glass-card p-6">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Response Time</h4>
                    <p className="text-primary">Within 24 hours</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">We aim to respond to all inquiries quickly</p>
              </div>

              <div className="glass-card-glow p-6">
                <h4 className="font-semibold mb-4">Prefer Direct Contact?</h4>
                <p className="text-muted-foreground mb-4">For urgent matters or specific inquiries, you can reach out to us directly through our social channels or schedule a call.</p>
                <div className="flex gap-3">
                  <Button className="btn-primary flex-1">
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule Call
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Live Chat
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Brand and Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 pt-12 border-t border-glass-border">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">AVAL</span>
              </div>
            </div>
            <p className="text-muted-foreground mb-6">
              The ultimate platform combining freelance opportunities, project showcase, research collaboration, and startup partnerships.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Platform</h4>
            <ul className="space-y-3">
              {["AVAL.TECH", "AVAL.FREELANCE", "AVAL.RESEARCH", "AVAL.COLLAB"].map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-3">
              {["Documentation", "FAQ", "Support", "Blog"].map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {["About", "Careers", "Press", "Contact"].map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-glass-border">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-muted-foreground text-sm">
              © 2024 AVAL. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Cookie Settings
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
