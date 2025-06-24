import { useEffect, useState } from 'react';
import BackgroundEffects from './components/BackgroundEffects';
import ContactSection from './components/ContactSection';
import DynamicIslandNav from './components/DynamicIslandNav';
import FeaturesSection from './components/FeaturesSection';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import ProjectDetail from './components/ProjectDetail';
import ProjectsSection from './components/ProjectsSection';
import ReviewsSection from './components/ReviewsSection';
import StatsSection from './components/StatsSection';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentView, setCurrentView] = useState<'home' | 'project'>('home');
  const [selectedProjectId, setSelectedProjectId] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle URL parameters for project routing
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('project');

    if (projectId) {
      setSelectedProjectId(projectId);
      setCurrentView('project');
    }
  }, []);

  const handleProjectClick = (projectId: string) => {
    setSelectedProjectId(projectId);
    setCurrentView('project');

    // Update URL without page reload
    const newUrl = `${window.location.pathname}?project=${projectId}`;
    window.history.pushState({ projectId }, '', newUrl);

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setSelectedProjectId('');

    // Update URL to remove project parameter
    window.history.pushState({}, '', window.location.pathname);

    // Scroll to projects section
    setTimeout(() => {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      const urlParams = new URLSearchParams(window.location.search);
      const projectId = urlParams.get('project');

      if (projectId && event.state?.projectId) {
        setSelectedProjectId(projectId);
        setCurrentView('project');
      } else {
        setCurrentView('home');
        setSelectedProjectId('');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  if (currentView === 'project' && selectedProjectId) {
    return (
      <ProjectDetail
        projectId={selectedProjectId}
        onBack={handleBackToHome}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <BackgroundEffects />
      <DynamicIslandNav scrollY={scrollY} isScrolled={isScrolled} />
      <HeroSection scrollY={scrollY} />
      <FeaturesSection />
      <ProjectsSection onProjectClick={handleProjectClick} />
      <StatsSection />
      <ReviewsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;