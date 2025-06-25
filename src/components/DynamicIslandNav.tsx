import {
  Menu
} from 'lucide-react';
import { useState } from 'react';

interface DynamicIslandNavProps {
  scrollY: number;
  isScrolled: boolean;
}

export default function DynamicIslandNav({ isScrolled }: DynamicIslandNavProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
      <div
        className={`relative transition-all duration-700 ease-out ${isHovered
          ? 'w-96 h-16'
          : isScrolled
            ? 'w-48 h-12'
            : 'w-32 h-10'
          }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Dynamic Island Background */}
        <div className="absolute inset-0 bg-black/80 backdrop-blur-xl rounded-full border border-white/10 shadow-2xl transition-all duration-700 ease-out">
          {/* Inner glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-white/5 rounded-full"></div>
        </div>

        {/* Collapsed State - Logo */}
        <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${isHovered ? 'opacity-0 scale-75' : 'opacity-100 scale-100'
          }`}>
          <Menu className="w-5 h-5 text-white" />
        </div>

        {/* Expanded State - Navigation */}
        <div className={`absolute inset-0 flex items-center justify-between px-6 transition-all duration-500 ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
          }`}>
          {/* Logo */}
          <div className="flex items-center space-x-2">
            {/* <Smartphone className="w-5 h-5 text-white" /> */}
            <span
              className={`font-semibold text-white transition-all duration-500 ease-out ${isHovered ? "text-sm opacity-100" : "text-[0px] opacity-0"}`}>
              Paul
            </span>
            <span
              className={`font-semibold text-white transition-all duration-500 ease-out ${isHovered ? "text-sm opacity-100" : "text-[0px] opacity-0"}`}>
              BOUCHET
            </span>
          </div>

          {/* Navigation Links */}
          <div className=" md:flex items-center space-x-4">
            <a href="#home" className={`text-xs text-white/80 hover:text-white transition-all duration-500 ease-out ${isHovered ? "text-sm opacity-100" : "text-[0px] opacity-0"}`}>
              Accueil
            </a>
            <a href="#projects" className={`text-xs text-white/80 hover:text-white transition-all duration-500 ease-out ${isHovered ? "text-sm opacity-100" : "text-[0px] opacity-0"}`}>
              Projets
            </a>
            <a href="#reviews" className={`text-xs text-white/80 hover:text-white transition-all duration-500 ease-out ${isHovered ? "text-sm opacity-100" : "text-[0px] opacity-0"}`}>
              Avis
            </a>
            <a href="#contact" className={`text-xs text-white/80 hover:text-white transition-all duration-500 ease-out ${isHovered ? "text-sm opacity-100" : "text-[0px] opacity-0"}`}>
              Contact
            </a>
          </div>

        </div>
      </div>
    </nav >
  );
}