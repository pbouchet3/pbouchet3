import { collection, getDocs } from "firebase/firestore";
import { Filter, Github } from 'lucide-react';
import { useEffect, useState } from 'react';
import { db } from '../Firebase';

const Projects = ({ lang, language }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeSlide, setActiveSlide] = useState(0);
  const [projects, setProjects] = useState([])


  useEffect(() => {
    getDocs(collection(db, "projects"))
      .then((querySnapshot) => {
        const newData = querySnapshot.docs
          .map((doc) => ({ ...doc.data(), id: doc.id }));
        //console.log(newData);

        setProjects(newData)
        // //console.log(newData);
      })
  }, [])


  const categories = [
    { id: 'all', label: lang("PROJECTS_label_all") },
    { id: 'web', label: lang("PROJECTS_label_web") },
    { id: 'embedded', label: lang("PROJECTS_label_embedded") },
    { id: 'electronics', label: lang("PROJECTS_label_electronics") },
    { id: 'mobile', label: lang("PROJECTS_label_mobile") },
    { id: 'desktop', label: lang("PROJECTS_label_desktop") },
    { id: 'cloud', label: lang("PROJECTS_label_cloud") },
    { id: 'ai', label: lang("PROJECTS_label_ai") },
    { id: 'software', label: lang("PROJECTS_label_software") },
    { id: 'script', label: lang("PROJECTS_label_script") },
    { id: 'others', label: lang("PROJECTS_label_others") },
  ];

  // const projects = [
  //   {
  //     id: 1,
  //     title: 'ArtsPourEux',
  //     description: "Site associatif pour la promotion d'evenements musicaux et culturels, avec gestion des membres et des événements.",
  //     image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=600',
  //     category: 'web',
  //     technologies: ['React', 'Node.js', 'TailwindCSS', 'TypeScript'],
  //     // github: '#',
  //     demo: `/portfolio/#/${language}/projects`
  //   },
  //   {
  //     id: 2,
  //     title: 'CTTY',
  //     description: 'Logiciel en ligne de commande de gestion d\'un terminal serie, tel que PuTTY, avec differentes fonctionnalités.',
  //     image: 'https://images.pexels.com/photos/2387877/pexels-photo-2387877.jpeg?auto=compress&cs=tinysrgb&w=600',
  //     category: 'software',
  //     technologies: ['JavaScript', 'Node.js'],
  //     github: 'https://github.com/pbouchet3/ctty',
  //     demo: `/portfolio/#/${language}/projects`
  //   },
  //   {
  //     id: 3,
  //     title: 'Nextcloud-CLI',
  //     description: 'Creation d\'un client en ligne de commande pour Nextcloud, permettant la gestion des fichiers, le telechargement et l\'upload.',
  //     image: 'https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=600',
  //     category: 'software',
  //     technologies: ['JavaScript', 'Node.js', 'Nextcloud API'],
  //     // github: '#',
  //     demo: `/portfolio/#/${language}/projects`
  //   },
  //   {
  //     id: 4,
  //     title: 'DeployReverseProxy',
  //     description: 'Deploiement totalement automatisé d\'un reverse proxy avec Docker, Nginx pour les applications web, et Lets Encrypt pour les certificats SSL.',
  //     image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600',
  //     category: 'web',
  //     technologies: ['Bash', 'Docker', 'Nginx', 'Lets Encrypt'],
  //     github: '#',
  //     demo: `/portfolio/#/${language}/projects`
  //   },
  //   {
  //     id: 5,
  //     title: 'Smart Home Controller',
  //     description: 'Système domotique intelligent avec contrôle vocal, apprentissage automatique et interface tactile.',
  //     image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600',
  //     category: 'embedded',
  //     technologies: ['Python', 'TensorFlow', 'Zigbee', 'Qt'],
  //     github: '#',
  //     demo: `/portfolio/#/${language}/projects`
  //   },
  //   {
  //     id: 6,
  //     title: 'LED Matrix Display',
  //     description: 'Affichage LED matriciel programmable avec effets visuels, contrôle WiFi et éditeur graphique web.',
  //     image: 'https://images.pexels.com/photos/2781814/pexels-photo-2781814.jpeg?auto=compress&cs=tinysrgb&w=600',
  //     category: 'electronics',
  //     technologies: ['Arduino', 'FastLED', 'WebSocket', 'JavaScript'],
  //     github: '#',
  //     demo: `/portfolio/#/${language}/projects`
  //   },
  //   {
  //     id: 7,
  //     title: 'Home Made server',
  //     description: 'Serveur personnel pour héberger des applications web, avec gestion de la sécurité et des performances.',
  //     image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=600',
  //     category: '',
  //     technologies: ['Docker', 'Nginx', 'Node.js', 'PostgreSQL'],
  //     github: '#',
  //     demo: `/portfolio/#/${language}/projects`
  //   }
  // ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category == activeFilter);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {lang("PROJECTS_title")}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {/* Découvrez une sélection de mes projets les plus récents, alliant créativité, */}
              {lang("PROJECTS_text1")}
              {/* innovation technique et expérience utilisateur exceptionnelle. */}
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeFilter === category.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                  }`}
              >
                <Filter className="w-4 h-4" />
                <span>{category.label}</span>
              </button>
            ))}
          </div>

          {/* Projects Grid */}

          {filteredProjects.length > 0 ? (
            <div className="block mb-8">
              <div className="relative">
                {filteredProjects.length > 1 ? (
                  <button
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow p-2 disabled:opacity-50"
                    onClick={() => setActiveSlide((prev) => Math.max(prev - 1, 0))}
                    disabled={activeSlide === 0}
                    aria-label="Previous"
                    style={{ left: 0 }}>
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" /></svg>
                  </button>
                ) : null}
                <div className="overflow-hidden">
                  <div
                    className="flex transition-transform duration-500"
                    style={{ transform: `translateX(-${activeSlide * 100}%)` }}
                  >
                    {filteredProjects.map((project) => (
                      <div key={project.id} className="min-w-full px-2 py-5">
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                          <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                          <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                            <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                              {project.technologies.map((tech) => (
                                <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">{tech}</span>
                              ))}
                            </div>
                            <div className="flex justify-between items-center">
                              {project.github ? (
                                <a href={project.github} className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
                                  <Github className="w-4 h-4" />
                                  <span className="text-sm">Code</span>
                                </a>
                              ) : (
                                <span className="text-gray-400 text-sm">Code not available</span>
                              )}
                              <a href={project.demo} className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                                <span className="text-sm">Demo</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {filteredProjects.length > 1 ? (
                  <button
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow p-2 disabled:opacity-50"
                    onClick={() => setActiveSlide((prev) => Math.min(prev + 1, filteredProjects.length - 1))}
                    disabled={activeSlide === filteredProjects.length - 1}
                    aria-label="Next"
                    style={{ right: 0 }}
                  >
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" /></svg>
                  </button>
                ) : null}

                <div className="flex justify-center mt-4 gap-2">
                  {filteredProjects.map((_, idx) => (
                    <button
                      key={idx}
                      className={`w-2 h-2 rounded-full ${activeSlide === idx ? 'bg-blue-600' : 'bg-gray-300'}`}
                      onClick={() => setActiveSlide(idx)}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>) :
            <h4 className=''>No projects here...</h4>
          }
        </div>
      </div>
    </section >
  );
};

export default Projects;

/*<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-blue-600 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center">
                    {project.github ?
                      (
                        <a
                          href={project.github}
                          className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
                        >
                          <Github className="w-4 h-4" />
                          <span className="text-sm">Code</span>
                        </a>
                      ) : (
                        <span className="text-gray-400 text-sm">Code not available</span>
                      )}
                    <a
                      href={project.demo}
                      className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
<span className="text-sm">Demo</span>
                    </a >
                  </div >
                </div >
              </div >
            ))}
          </div > */