import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import PlatformsSection from '../components/PlatformsSection';
import ShowcaseSection from '../components/ShowcaseSection';
import ResearchSection from '../components/ResearchSection';
import CollabSection from '../components/CollabSection';
import FreelanceSection from '../components/FreelanceSection';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <PlatformsSection />
      <ShowcaseSection />
      <ResearchSection />
      <CollabSection />
      <FreelanceSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
