
import { motion } from 'framer-motion';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-gradient-animated opacity-10"></div>
      
      {/* Floating Orbs */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/20 rounded-full blur-3xl floating"></div>
      <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-accent/20 rounded-full blur-3xl floating" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-primary-glow/20 rounded-full blur-2xl floating" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Column - Text Content */}
        <motion.div 
          className="text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Main Heading */}
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-primary">DESIGN.</span>
            <br />
            <span className="text-primary">DEVELOP.</span>
            <br />
            <span className="text-primary">DOMINATE.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            className="text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            The ultimate platform combining freelance opportunities, project showcase, research collaboration, and startup partnerships - all in one revolutionary ecosystem.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button className="btn-primary px-8 py-4 text-lg">
              Start Creating
            </Button>
            <Button className="btn-glass px-8 py-4 text-lg bg-white/10 text-white border-white/20 hover:bg-white/20">
              ⚡ Explore Platform
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="flex gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">10K+</div>
              <div className="text-sm text-muted-foreground">Freelancers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">5K+</div>
              <div className="text-sm text-muted-foreground">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">2K+</div>
              <div className="text-sm text-muted-foreground">Research Papers</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column - 3D Globe/Visual */}
        <motion.div 
          className="flex justify-center items-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="relative w-96 h-96">
            <div className="absolute inset-0 glass-card rounded-2xl flex items-center justify-center">
              <div className="w-80 h-80 rounded-full bg-gradient-glow opacity-80 animate-pulse"></div>
              <div className="absolute w-60 h-60 rounded-full border-2 border-primary/50 animate-spin"></div>
              <div className="absolute w-40 h-40 rounded-full border border-accent/50 animate-spin" style={{ animationDirection: 'reverse' }}></div>
              <div className="absolute top-4 right-4 w-6 h-6 bg-primary rounded-full animate-pulse"></div>
              <div className="absolute bottom-8 left-8 w-4 h-4 bg-accent rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute top-16 left-12 w-3 h-3 bg-primary-glow rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute bottom-20 right-16 w-5 h-5 bg-accent-glow rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
              <div className="absolute bottom-4 right-4 text-xs text-primary">⚡</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
