import {
  Menu
} from 'lucide-react';
import useActiveSection from '../hook/useActiveSection';
import { useScrollDirection } from '../hook/useScrollDirection';

export default function DynamicIslandNav({ isScrolled }: { isScrolled: boolean }) {
  const sectionIds = ['home', 'features', 'projects', 'reviews', 'contact'];
  const activeSection = useActiveSection(sectionIds) || 'home';
  const direction = useScrollDirection();

  const labels = {
    home: 'Accueil',
    features: 'Expertise',
    projects: 'Projets',
    reviews: 'Avis',
    contact: 'Contact',
  };

  const renderAnimatedLabel = (
    label: string,
    isActive: boolean,
    direction: 'up' | 'down'
  ) => {
    const letters = label.split('');
    const len = letters.length;

    return letters.map((char, i) => {
      const delayIndex = direction === 'down' ? i : len - i - 1;

      return (
        <span
          key={i}
          className={`transition-all duration-300 text-sm
          ${isActive ? 'text-white text-base' : 'text-white/80 text-sm'}
          ${isActive ? 'font-black' : 'font-normal'}`}
          style={{
            transitionDelay: `${delayIndex * 75}ms`,
          }}
        >
          {char}
        </span>
      );
    });
  };

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
      <div
        className={`relative transition-all duration-700 ease-out ${'w-[28rem] h-16'
          }`}
      >
        {/* Dynamic Island Background */}
        <div className={`${isScrolled ? "opacity-100" : "opacity-0"}  absolute inset-0 bg-black/0 backdrop-blur-xl rounded-full border border-white/10 transition-all duration-700 ease-out`}>
          <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-white/5 rounded-full"></div>
        </div>

        {/* Collapsed State - Logo */}
        <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 opacity-0 scale-75`}>
          <Menu className="w-5 h-5 text-white" />
        </div>

        {/* Expanded State - Navigation */}
        <div className={`absolute inset-0 flex items-center justify-between px-6 transition-all duration-500 opacity-100 scale-100}`}>
          {/* Logo */}
          <div className="flex items-center space-x-2">
            {/* <Smartphone className="w-5 h-5 text-white" /> */}
            <span
              className={` font-semibold text-white transition-all duration-500 ease-out text-l opacity-100`}>
              PB.
            </span>
          </div>

          {/* Navigation Links */}
          <div className=" md:flex items-center space-x-4 ">
            <a href="#home">
              {renderAnimatedLabel(labels.home, activeSection === 'home', direction)}
            </a>
            <a href="#features">
              {renderAnimatedLabel(labels.features, activeSection === 'features', direction)}
            </a>
            <a href="#projects">
              {renderAnimatedLabel(labels.projects, activeSection === 'projects', direction)}
            </a>
            <a href="#reviews">
              {renderAnimatedLabel(labels.reviews, activeSection === 'reviews', direction)}
            </a>
            <a href="#contact">
              {renderAnimatedLabel(labels.contact, activeSection === 'contact', direction)}
            </a>
          </div>
        </div>
      </div>
    </nav >
  );
}