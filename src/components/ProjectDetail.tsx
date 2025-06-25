import {
  ArrowLeft,
  CircuitBoard,
  Dot,
  ExternalLink,
  Fish,
  Laptop,
  Music,
  RotateCcw,
  Scan,
  Smartphone,
  TextCursor
} from 'lucide-react';

import { useEffect, useState } from 'react';

interface ProjectDetailProps {
  projectId: string;
  onBack: () => void;
}

interface ProjectData {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  image: string;
  features: string[];
  color: string;
  accentColor: string;
  status: string;
  version: string;
  lastUpdate: string;
  downloads: string;
  rating: number;
  reviews: number;
  developer: string;
  size: string;
  compatibility: string[];
  screenshots: string[];
  url?: string;
  demoUrl?: string;
  githubUrl?: string;
  technologies: string[];
}

export default function ProjectDetail({ projectId, onBack }: ProjectDetailProps) {
  const [project, setProject] = useState<ProjectData | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'demo' | 'screenshots' | 'code'>('overview');
  const [isIframeLoading, setIsIframeLoading] = useState(true);
  const [iframeError, setIframeError] = useState(false);

  // Données des projets (normalement viendraient d'une API)
  const projectsData: Record<string, ProjectData> = {
    '1': {
      id: '1',
      title: "Arts Pour Eux",
      category: "Site Web et Infrastructure",
      description: "Site Web et infrastructure pour Arts Pour Eux, une association caritative. Conception et développement d'un site web responsive avec gestion de contenu.",
      longDescription: 'Arts Pour Eux est une association caritative dédiée à l\'organisation de concerts dont les fonds seront reverses a des associations. Ce projet comprend la conception et le développement d\'un site web responsive, permettant à l\'association de partager ses activités, mettre en ligne les dates d\'evenements et promouvoir les artistes qu\'elle soutient. Le site est optimisé pour une navigation fluide sur tous les appareils et intègre un système de gestion de contenu pour faciliter les mises à jour. Ce site est lie a un BOT Discord qui simplifie grandement l\'acces administrateur du site aux gerants.',
      icon: Music,
      image: "https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ['CSS avec TailWindCSS', 'Gestion de MediaPlayer avec barre de son', 'Controle via un BOT Discord', 'Developpement selon les envies du client'],
      color: 'from-purple-500/20 to-pink-500/20',
      accentColor: 'text-purple-400',
      status: 'Disponible',
      version: '0.0.1',
      lastUpdate: '20 Juin 2025',
      developer: 'Paul BOUCHET',
      compatibility: ['phone', 'computer'],
      screenshots: [],
      demoUrl: 'https://artspoureux.aynline.fr',
      // githubUrl: '',
      technologies: ['ReactJS', 'Node.JS', 'Tailwind CSS', 'Python']
    },
    '2': {
      id: '2',
      title: "CTTY",
      category: "Logiciel en Ligne de Commande",
      description: "Logiciel de gestion de port UART en CLI, sous Linux. Permettant la communication avec des peripheriques series et la gestion de flux de donnees.",
      longDescription: 'CTTY est un logiciel de gestion de port UART en ligne de commande, conçu pour les utilisateurs avancés et les développeurs. Il permet la communication avec des périphériques série via des ports UART sous Linux. Avec CTTY, vous pouvez configurer des paramètres de communication, envoyer et recevoir des données en temps réel, et gérer les flux de données de manière efficace. Ce logiciel est idéal pour les projets nécessitant une interaction directe avec du matériel via des ports série.',
      icon: TextCursor,
      image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1200',
      features: ['Utilisation de port com', 'Maniement d\'arguments node.js', 'Terminal complet', 'Gestion de flux de données', 'Compatible avec les périphériques série'],
      color: 'from-blue-500/20 to-cyan-500/20',
      accentColor: 'text-blue-400',
      status: 'Bêta',
      version: '0.0.1',
      lastUpdate: '10 Juin 2025',
      developer: 'Paul BOUCHET',
      compatibility: ['linux'],
      screenshots: [
        // 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=800',
        // 'https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=800',
        // 'https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      // demoUrl: 'https://cinemax-demo.vercel.app',
      // githubUrl: 'https://github.com/pbouchet3/ctty.git',
      technologies: ['JavaScript', 'Node.JS', 'Linux', 'UART']
    },
    '3': {
      id: '3',
      title: "Smart Trash Can",
      category: "IoT et VR",
      description: "Maquette de poubelles connectees, avec un suivi du remplissage, de l'ouverture/fermeture, de la chute de celle-ci. Avec une application VR pour le suivi du camion poubelle.",
      longDescription: 'Projet scolaire de maquette de poubelles connectées, intégrant des capteurs pour suivre le niveau de remplissage, l\'ouverture/fermeture et la chute des poubelles. Le projet comprend également une application VR pour visualiser les données en temps réel et gérer le suivi du camion poubelle. Cette solution IoT permet une gestion efficace des déchets en fournissant des informations précises sur l\'état des poubelles, et sur la necessité de les vider. Le projet met en avant l\'utilisation de la réalité virtuelle pour améliorer l\'expérience utilisateur et la gestion des déchets.',
      icon: CircuitBoard,
      image: "https://images.pexels.com/photos/19126087/pexels-photo-19126087.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ['Capteurs de niveau de remplissage', 'Suivi d\'ouverture/fermeture', 'Détection de chute', 'Application VR pour suivi'],
      color: 'from-green-500/20 to-emerald-500/20',
      accentColor: 'text-green-400',
      status: 'Finit',
      version: '1.0',
      lastUpdate: '8 Juillet 2024',
      developer: 'Groupe ',
      compatibility: ['computer', 'ar'],
      screenshots: [
        // 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800',
        // 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=800',
        // 'https://images.pexels.com/photos/1293261/pexels-photo-1293261.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      // demoUrl: 'https://gameforge-demo.surge.sh',
      // githubUrl: 'https://github.com/gameforge/mobile',
      technologies: ["Arduino", "Capteurs", "C/C++", "Electronique"]
    },
    '4': {
      id: '4',
      title: "Eclipsis",
      category: "IoT, Mobile et Back-End",
      description: "Aquarium connecté permettant de suivre l'état de l'eau, la température, la lumiere, et les paramètres de l'aquarium. Avec une application mobile pour le suivi et la gestion.",
      longDescription: 'Eclipsis est un projet scolaire d\'aquarium connecté, intégrant des capteurs pour surveiller l\'état de l\'eau, la température, la lumière et d\'autres paramètres de l\'aquarium. Le projet comprend également une application mobile permettant aux utilisateurs de suivre ces données en temps réel et de gérer les paramètres de l\'aquarium. Cette solution IoT offre une expérience utilisateur améliorée en fournissant des informations précises sur la santé de l\'aquarium et en permettant une gestion facile des conditions de vie des poissons.',
      icon: Fish,
      image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=1200',
      features: ['Capteurs de qualité de l\'eau', 'Suivi de la température', 'Gestion de la lumière', 'Application mobile pour suivi et gestion'],
      color: 'from-green-500/20 to-emerald-500/20',
      accentColor: 'text-green-400',
      status: 'Finit',
      version: '0.1',
      lastUpdate: '17 Avril 2025',
      developer: 'Groupe Scolaire Eclipsis',
      compatibility: [''],
      screenshots: [
        // 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800',
        // 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=800',
        // 'https://images.pexels.com/photos/1293261/pexels-photo-1293261.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      // demoUrl: 'https://gameforge-demo.surge.sh',
      // githubUrl: 'https://github.com/gameforge/mobile',
      technologies: ['Arduino', 'Capteurs', 'C/C++', 'Electronique', 'React Native', 'Laravel', 'MariaDB']
    }
  };

  useEffect(() => {
    const projectData = projectsData[projectId];
    if (projectData) {
      setProject(projectData);
      setActiveTab('overview');
    }
  }, [projectId]);

  const handleIframeLoad = () => {
    setIsIframeLoading(false);
    setIframeError(false);
  };

  const handleIframeError = () => {
    setIsIframeLoading(false);
    setIframeError(true);
  };

  const refreshIframe = () => {
    setIsIframeLoading(true);
    setIframeError(false);
    // Force iframe reload
    const iframe = document.getElementById('demo-iframe') as HTMLIFrameElement;
    if (iframe) {
      const src = iframe.src
      iframe.src = ''; // Temporarily set to empty to force reload
      iframe.src = src;
    }
  };

  const getCompatibilityIcon = (category: string) => {
    switch (category) {
      case 'phone':
        return <Smartphone className="w-4 h-4 text-blue-400" />;
      case 'computer':
        return <Laptop className="w-4 h-4 text-blue-400" />;
      case 'linux':
        return <TextCursor className="w-4 h-4 text-blue-400" />;
      case 'ar':
        return <Scan className="w-4 h-4 text-blue-400" />;
      default:
        return <Dot className="w-4 h-4 text-blue-400" />;
    }
  }


  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Background Effects */}
        <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-400/20 via-transparent to-transparent"></div>
        <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-400/20 via-transparent to-transparent"></div>

        {/* Header */}
        <header className="relative z-50 p-6">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Retour aux projets</span>
          </button>
        </header>
        <div className="text-white text-xl">Projet non trouvé</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-400/20 via-transparent to-transparent"></div>
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-400/20 via-transparent to-transparent"></div>

      {/* Header */}
      <header className="relative z-50 p-6">
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Retour aux projets</span>
        </button>
      </header>

      <div className="relative z-10 px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="mb-12">
            <div className={`bg-gradient-to-br ${project.color} backdrop-blur-xl rounded-3xl border border-white/10 p-8 md:p-12`}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center">
                      {project.icon && (
                        <project.icon className={`w-10 h-10 ${project.accentColor}`
                        } />
                      )}
                    </div>
                    <div>
                      <h1 className="text-4xl font-bold text-white mb-2">{project.title}</h1>
                      <p className={`text-lg font-medium ${project.accentColor}`}>{project.category}</p>
                    </div>
                  </div>

                  <p className="text-white/80 text-lg leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-80 object-cover rounded-3xl shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="mb-8">
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-2 inline-flex">
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${activeTab === 'overview'
                  ? 'bg-white/20 text-white shadow-lg'
                  : 'text-white/60 hover:text-white hover:bg-white/10'
                  }`}
              >
                Aperçu
              </button>
              {project.demoUrl && (
                <button
                  onClick={() => setActiveTab('demo')}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${activeTab === 'demo'
                    ? 'bg-white/20 text-white shadow-lg'
                    : 'text-white/60 hover:text-white hover:bg-white/10'
                    }`}
                >
                  Démo live
                </button>
              )}
              {project.screenshots.length > 0 && (<button
                onClick={() => setActiveTab('screenshots')}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${activeTab === 'screenshots'
                  ? 'bg-white/20 text-white shadow-lg'
                  : 'text-white/60 hover:text-white hover:bg-white/10'
                  }`}
              >
                Captures
              </button>)}
              {project.githubUrl && (
                <button
                  onClick={() => setActiveTab('code')}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${activeTab === 'screenshots'
                    ? 'bg-white/20 text-white shadow-lg'
                    : 'text-white/60 hover:text-white hover:bg-white/10'
                    }`}
                >
                  Code Source
                </button>)}
            </div>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {activeTab === 'overview' && (
                <div className="space-y-8">
                  <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8">
                    <h2 className="text-2xl font-bold text-white mb-6">Description détaillée</h2>
                    <p className="text-white/80 leading-relaxed text-lg">
                      {project.longDescription}
                    </p>
                  </div>

                  <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8">
                    <h2 className="text-2xl font-bold text-white mb-6">Fonctionnalités principales</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {project.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-3 p-4 bg-white/5 rounded-2xl border border-white/10">
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          <span className="text-white font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8">
                    <h2 className="text-2xl font-bold text-white mb-6">Technologies utilisées</h2>
                    <div className="flex flex-wrap gap-3">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/80 border border-white/20 text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'demo' && project.demoUrl && (
                <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-white">Démo interactive</h2>
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={refreshIframe}
                        className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
                        title="Actualiser"
                      >
                        <RotateCcw className="w-5 h-5" />
                      </button>
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
                        title="Ouvrir dans un nouvel onglet"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>

                  <div className="relative bg-white/10 rounded-2xl overflow-hidden" style={{ height: '600px' }}>
                    {isIframeLoading && (
                      <div className="absolute inset-0 flex items-center justify-center bg-white/5 backdrop-blur-sm">
                        <div className="text-white">Chargement de la démo...</div>
                      </div>
                    )}

                    {iframeError ? (
                      <div className="absolute inset-0 flex items-center justify-center bg-white/5 backdrop-blur-sm">
                        <div className="text-center">
                          <div className="text-white/60 mb-4">Impossible de charger la démo</div>
                          <button
                            onClick={refreshIframe}
                            className="bg-white/20 backdrop-blur-sm border border-white/30 px-4 py-2 rounded-xl text-white hover:bg-white/30 transition-all duration-300"
                          >
                            Réessayer
                          </button>
                        </div>
                      </div>
                    ) : (
                      <iframe
                        id="demo-iframe"
                        src={project.demoUrl}
                        className="w-full h-full border-0 rounded-2xl"
                        onLoad={handleIframeLoad}
                        onError={handleIframeError}
                        sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                        title={`Démo de ${project.title}`}
                      />
                    )}
                  </div>
                </div>
              )}

              {activeTab === 'code' && project.githubUrl && (
                <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-white">Démo interactive</h2>
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={refreshIframe}
                        className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
                        title="Actualiser"
                      >
                        <RotateCcw className="w-5 h-5" />
                      </button>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
                        title="Ouvrir dans un nouvel onglet"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>

                  <div className="relative bg-white/10 rounded-2xl overflow-hidden" style={{ height: '600px' }}>
                    {isIframeLoading && (
                      <div className="absolute inset-0 flex items-center justify-center bg-white/5 backdrop-blur-sm">
                        <div className="text-white">Chargement de la démo...</div>
                      </div>
                    )}

                    {iframeError ? (
                      <div className="absolute inset-0 flex items-center justify-center bg-white/5 backdrop-blur-sm">
                        <div className="text-center">
                          <div className="text-white/60 mb-4">Impossible de charger la démo</div>
                          <button
                            onClick={refreshIframe}
                            className="bg-white/20 backdrop-blur-sm border border-white/30 px-4 py-2 rounded-xl text-white hover:bg-white/30 transition-all duration-300"
                          >
                            Réessayer
                          </button>
                        </div>
                      </div>
                    ) : (
                      <iframe
                        id="demo-iframe"
                        src={project.githubUrl}
                        className="w-full h-full border-0 rounded-2xl"
                        onLoad={handleIframeLoad}
                        onError={handleIframeError}
                        sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                        title={`Démo de ${project.title}`}
                      />
                    )}
                  </div>
                </div>
              )}

              {project.screenshots && activeTab === 'screenshots' && (
                <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8">
                  <h2 className="text-2xl font-bold text-white mb-6">Captures d'écran</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {project.screenshots.map((screenshot, index) => (
                      <div key={index} className="relative group">
                        <img
                          src={screenshot}
                          alt={`Capture ${index + 1}`}
                          className="w-full h-64 object-cover rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* App Info */}
              <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-6">
                <h3 className="text-xl font-bold text-white mb-6">Informations</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-white/60">Version</span>
                    <span className="text-white font-medium">{project.version}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60">Développeur</span>
                    <span className="text-white font-medium text-right text-sm">{project.developer}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60">Mise à jour</span>
                    <span className="text-white font-medium">{project.lastUpdate}</span>
                  </div>
                </div>
              </div>

              {/* Compatibility */}
              <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-6">
                <h3 className="text-xl font-bold text-white mb-4">Compatibilité</h3>
                <div className="space-y-2">
                  {project.compatibility.map((device, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-white/5 rounded-2xl border border-white/10">
                      {getCompatibilityIcon(device)}
                      <span className="text-white font-medium">
                        {
                          device === 'phone'
                            ? 'Téléphone'
                            : device === 'computer'
                              ? 'Ordinateur'
                              : device === 'linux'
                                ? 'Linux' : device === 'ar'
                                  ? 'Réalité Augmentée'
                                  : 'Autre'
                        }
                      </span>
                      {/* <span className="text-white/80 text-sm">{device}</span> */}
                    </div>
                  ))}
                </div>
              </div>

              {/* Status */}
              <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-6">
                <h3 className="text-xl font-bold text-white mb-4">Statut</h3>
                <div className={`px-4 py-3 rounded-2xl text-center font-medium border ${project.status === 'Disponible'
                  ? 'bg-green-500/20 text-green-400 border-green-500/30'
                  : project.status === 'Bêta'
                    ? 'bg-orange-500/20 text-orange-400 border-orange-500/30'
                    : 'bg-blue-500/20 text-blue-400 border-blue-500/30'
                  }`}>
                  {project.status}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}