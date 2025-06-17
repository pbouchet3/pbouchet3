import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = ({ lang }) => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full opacity-20 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-300 rounded-full opacity-15 animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-100 rounded-full opacity-10 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fadeInUp">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              {/* Développeur */}
              {lang("HERO_developper")}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 animate-gradient">
                Fullstack
              </span>
            </h1>
          </div>

          <div className="animate-fadeInUp animation-delay-300">
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              {/* Spécialisé en développement web, électronique et systèmes embarqués. */}
              {lang("HERO_text1")}
              {/* Passionné par l'innovation technologique et les solutions créatives. */}
            </p>
          </div>

          <div className="animate-fadeInUp animation-delay-600">
            <div className="flex justify-center space-x-6 mb-12">
              <a
                href="https://github.com/pbouchet3"
                className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group"
              >
                <Github className="w-6 h-6 text-gray-700 group-hover:text-blue-600" />
              </a>
              <a
                href="https://www.linkedin.com/in/paul-bouchet/"
                className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group"
              >
                <Linkedin className="w-6 h-6 text-gray-700 group-hover:text-blue-600" />
              </a>
              <a
                href="mailto:paul.bouchet3@gmail.com"
                className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group"
              >
                <Mail className="w-6 h-6 text-gray-700 group-hover:text-blue-600" />
              </a>
            </div>
          </div>

          <div className="animate-fadeInUp animation-delay-900">
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-full hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {lang("HERO_see_projects")}
                {/* Voir mes projets */}
              </button>
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-full hover:bg-blue-600 hover:text-white transform hover:scale-105 transition-all duration-300"
              >
                {lang("HERO_see_contact")}
                {/* Me contacter */}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer group"
      >
        <ChevronDown className="w-8 h-8 text-blue-600 group-hover:text-blue-800 transition-colors" />
      </button>
    </section>
  );
};

export default Hero;