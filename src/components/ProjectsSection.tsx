import {
  ArrowRight,
  CircuitBoard,
  Fish,
  Music,
  Play,
  TextCursor
} from 'lucide-react';

interface ProjectsSectionProps {
  onProjectClick?: (projectId: string) => void;
}

export default function ProjectsSection({ onProjectClick }: ProjectsSectionProps) {
  const projects = [
    {
      id: '1',
      title: "Arts Pour Eux",
      category: "Site Web et Infrastructure",
      description: "Site web et infrastructure pour Arts Pour Eux, une association caritative. Conception et développement d'un site web responsive avec gestion de contenu.",
      icon: Music,
      image: "https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["ReactTS", "TailwindCSS", "DevOps"],
      color: "from-purple-500/20 to-pink-500/20",
      accentColor: "text-purple-400",
      status: "Bêta",
      hasDemo: true,
      tag: "Personnel"
    },
    {
      id: '2',
      title: "CTTY",
      category: "Logiciel en Ligne de Commande",
      description: "Logiciel de gestion de port UART en CLI, sous Linux. Permet la communication avec des périphériques série et la gestion des flux de données.",
      icon: TextCursor,
      image: "https://images.pexels.com/photos/207580/pexels-photo-207580.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["NodeJS", "CLI", "Linux", "UART", "JavaScript"],
      color: "from-blue-500/20 to-cyan-500/20",
      accentColor: "text-blue-400",
      status: "Bêta",
      hasDemo: false,
      tag: "Personnel"
    },
    {
      id: '3',
      title: "Smart Trash Can",
      category: "IoT et VR",
      description: "Maquette de poubelles connectées, avec un suivi du remplissage, de l'ouverture/fermeture et de la chute de celles-ci. Avec une application VR pour le suivi du camion-poubelle.",
      icon: CircuitBoard,
      image: "https://images.pexels.com/photos/19126087/pexels-photo-19126087.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Arduino", "Capteurs", "C/C++", "Électronique"],
      color: "from-green-500/20 to-emerald-500/20",
      accentColor: "text-green-400",
      status: "Finalisé",
      hasDemo: false,
      tag: "Scolaire"
    },
    {
      id: '4',
      title: "Eclipsis",
      category: "IoT, Mobile et Back-End",
      description: "Aquarium connecté permettant de suivre l'état de l'eau, la température, la lumière et les paramètres de l'aquarium. Avec une application mobile pour le suivi et la gestion.",
      icon: Fish,
      image: "https://images.pexels.com/photos/128756/pexels-photo-128756.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Capteurs", "C/C++", "Électronique", "React Native", "Laravel", "API REST"],
      color: "from-green-500/20 to-emerald-500/20",
      accentColor: "text-green-400",
      status: "Finalisé",
      hasDemo: false,
      tag: "Scolaire"
    },
  ];



  // status: "Développement",
  // status: "Bêta",

  const getTagColor = (status: string) => {
    switch (status) {
      case 'Scolaire':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Personnel':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Professionnel':
        return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      default:
        return 'bg-white/20 text-white/60 border-white/30';
    }
  };
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Disponible':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Finalisé':
        return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'Bêta':
        return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      case 'Développement':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      default:
        return 'bg-white/20 text-white/60 border-white/30';
    }
  };

  const handleProjectClick = (projectId: string) => {
    if (onProjectClick) {
      onProjectClick(projectId);
    }
  };

  return (
    <section id="projects" className="relative py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            Projets
            <span className="block text-2xl font-normal text-white/60 mt-2">
              Personnels / Scolaire
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Decouvrez mes projets les plus recents, realises avec passion et expertise. Chaque application est un exemple de ce que je peux accomplir avec la technologie moderne.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative cursor-pointer"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
              onClick={() => handleProjectClick(project.id)}
            >
              <div className={`h-full relative bg-gradient-to-br ${project.color} backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden hover:scale-105 hover:shadow-2xl transition-all duration-500`}>
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                  {/* Status Badge */}
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium border backdrop-blur-sm ${getStatusColor(project.status)}`}>
                    {project.status}
                  </div>

                  {/* Tag Badge */}
                  <div className={`absolute bottom-4 right-4 px-3 py-1 rounded-full text-xs font-medium border backdrop-blur-sm ${getTagColor(project.tag)}`}>
                    {project.tag}
                  </div>


                  {/* Demo Badge */}
                  {project.hasDemo && (
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium border bg-blue-500/20 text-blue-400 border-blue-500/30 backdrop-blur-sm">
                      Démo disponible
                    </div>
                  )}



                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                        <project.icon className={`w-6 h-6 ${project.accentColor}`} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{project.title}</h3>
                        <p className={`text-sm font-medium ${project.accentColor}`}>{project.category}</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-white/70 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs text-white/80 border border-white/20"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-end space-x-3">
                    <button className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300">
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>



      </div>
    </section>
  );
}