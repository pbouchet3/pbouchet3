import { Briefcase, Home, Mail, Menu, User, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import fr from '../public/fr.png';
import us from '../public/us.png';

const HeaderHome = ({ lang, language }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: `#home`, label: lang("HEADER_icon_home"), icon: Home },
    { href: `#about`, label: lang("HEADER_icon_about"), icon: User },
    { href: `#projects`, label: lang("HEADER_icon_projects"), icon: Briefcase },
    { href: `#contact`, label: lang("HEADER_icon_contact"), icon: Mail },
    { href: language == "fr" ? "/portfolio/#/en" : "/portfolio/#/fr", icon: language == "fr" ? us : fr },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [])


  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
        ? 'bg-white/95 backdrop-blur-md shadow-lg'
        : 'bg-transparent'
        }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-blue-600">
            Paul<span className="text-blue-800"> BOUCHET</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => {
                  if (item.href[0] === '/') {
                    window.location.href = item.href;
                  } else {
                    scrollToSection(item.href);
                  }
                }}

                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 group"
              >
                {typeof (item.icon) == "string" ? <img src={item.icon} className='h-[30px]'></img> : <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />}

                <span>{item.label}</span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg animate-fadeIn">
            {navItems.map((item) => (
              <button
                key={item.href}
                // onClick={() => scrollToSection(item.href)}
                onClick={() => {
                  if (item.href[0] === '/') {
                    window.location.href = item.href;
                  } else {
                    scrollToSection(item.href);
                  }
                }}
                className="flex items-center space-x-3 w-full px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
              >
                {typeof (item.icon) == "string" ? <img src={item.icon} className=' h-[30px]'></img> : <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />}
                {/* <item.icon className="w-5 h-5" /> */}
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default HeaderHome;