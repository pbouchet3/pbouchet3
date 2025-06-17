import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

const Projectspage = () => {
  const [isOpens, setIsOpens] = useState({
    artspoureux: false,
  })

  return (
    <div>
      <section id="artspoureux" className="pt-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Artspoureux
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Artspoureux est une plateforme dédiée à la découverte et au partage d'oeuvres artistiques. Explorez des créations originales, partagez vos propres œuvres et connectez-vous avec une communauté passionnée d'art.
              </p>
              <div className="pt-10 flex justify-center">
                <div className="flex flex-wrap gap-3">
                  {['React', 'JavaScript', 'TypeScript', 'Node.js', 'Docker Build', 'Docker Compose', 'TailwindCSS'].map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`transition-all duration-300 overflow-hidden ${isOpens.artspoureux ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
            >
              <div className="w-24 h-1 bg-gradient-to-r from-blue-800 to-blue-600 mx-auto mb-8"></div>
              <p className="text-center text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {/* Artspoureux est une plateforme dédiée à la découverte et au partage d'oeuvres artistiques. Explorez des créations originales, partagez vos propres œuvres et connectez-vous avec une communauté passionnée d'art. */}
                Artspour eux est une platforme codee en React TypeScript, deployee via Docker Compose.
              </p>
            </div>
            <button
              onClick={() => setIsOpens({ ...isOpens, artspoureux: !isOpens.artspoureux })}
              className='flex items-center justify-center w-full py-3 px-4 transition-colors mb-6'>
              <ChevronDown
                className={`duration-300 inline-block transform ${isOpens.artspoureux ? 'rotate-180' : ''}`} />
            </button>
          </div>
          <iframe src="https://artspoureux.aynline.fr/"
            className="w-[90%] aspect-[16/9] mx-auto my-10 rounded-lg shadow-lg"
            // className="w-[90vw] h-[90vh] mx-auto my-10 rounded-lg shadow-lg"
            title="Artspoureux Project"
            style={{ border: 'none' }}
          ></iframe>
        </div>
      </section>
      <section id="coucou" className="pt-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Artspoureux
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Artspoureux est une plateforme dédiée à la découverte et au partage d'oeuvres artistiques. Explorez des créations originales, partagez vos propres œuvres et connectez-vous avec une communauté passionnée d'art.
              </p>
              <div className="pt-10 flex justify-center">
                <div className="flex flex-wrap gap-3">
                  {['React', 'JavaScript', 'TypeScript', 'Node.js', 'Docker Build', 'Docker Compose', 'TailwindCSS'].map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`transition-all duration-300 overflow-hidden ${isOpens.artspoureux ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
            >
              <div className="w-24 h-1 bg-gradient-to-r from-blue-800 to-blue-600 mx-auto mb-8"></div>
              <p className="text-center text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {/* Artspoureux est une plateforme dédiée à la découverte et au partage d'oeuvres artistiques. Explorez des créations originales, partagez vos propres œuvres et connectez-vous avec une communauté passionnée d'art. */}
                Artspour eux est une platforme codee en React TypeScript, deploye via Docker Compose.
              </p>
            </div>
            <button
              onClick={() => setIsOpens({ ...isOpens, artspoureux: !isOpens.artspoureux })}
              className='flex items-center justify-center w-full py-3 px-4 transition-colors mb-6'>
              <ChevronDown
                className={`duration-300 inline-block transform ${isOpens.artspoureux ? 'rotate-180' : ''}`} />
            </button>
          </div>
          <iframe src="https://artspoureux.aynline.fr/"
            className="w-[90%] aspect-[16/9] mx-auto my-10 rounded-lg shadow-lg"
            // className="w-[90vw] h-[90vh] mx-auto my-10 rounded-lg shadow-lg"
            title="Artspoureux Project"
            style={{ border: 'none' }}
          ></iframe>
        </div>
      </section>
    </div>
  )
}

export default Projectspage