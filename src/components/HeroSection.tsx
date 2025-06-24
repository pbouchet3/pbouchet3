import { ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  scrollY: number;
}

export default function HeroSection({ scrollY }: HeroSectionProps) {
  const blurAmount = Math.min(scrollY / 100, 10); // Limite à 10px de blur


  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-20">
      <div
        className="text-center space-y-8"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
          filter: `blur(${blurAmount}px)`,
          transition: 'filter 0.2s ease-out',
        }}
      >
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-bold text-white leading-tight">
            Paul
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              BOUCHET
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto">
            Developpeur FullStack et Logiciel
          </p>
        </div>

        {/* <PhoneMockup /> */}

        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center space-x-6">
            <button className="bg-white/20 hover:bg-blue-600 px-8 py-4 rounded-full text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              onClick={() => {
                window.scrollTo({
                  top: 900,
                  behavior: 'smooth'
                });
              }}
            >
              Découvrir
            </button>
          </div>

          <ChevronDown className="w-6 h-6 text-white/60 animate-bounce mt-8" />
        </div>
      </div>
    </section >
  );
}