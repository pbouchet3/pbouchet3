import {
  ArrowLeft,
  Code,
  ExternalLink,
  Github,
  Play,
  RotateCcw,
  Smartphone,
  Star
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
  icon: any;
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
  const [activeTab, setActiveTab] = useState<'overview' | 'demo' | 'screenshots'>('overview');
  const [isIframeLoading, setIsIframeLoading] = useState(true);
  const [iframeError, setIframeError] = useState(false);

  // Données des projets (normalement viendraient d'une API)
  const projectsData: Record<string, ProjectData> = {
    '1': {
      id: '1',
      title: 'ProCam Studio',
      category: 'Photographie',
      description: 'Application de photographie professionnelle exploitant pleinement le système Pro Camera.',
      longDescription: 'ProCam Studio révolutionne la photographie mobile en exploitant pleinement les capacités du système Pro Camera de l\'iPhone Pro Max. Avec des contrôles manuels avancés, le support RAW complet et une IA de retouche automatique, cette application transforme votre iPhone en véritable appareil photo professionnel. Les photographes peuvent ajuster l\'exposition, la balance des blancs, l\'ISO et la vitesse d\'obturation avec une précision inégalée.',
      icon: 'Camera',
      image: 'https://images.pexels.com/photos/1983037/pexels-photo-1983037.jpeg?auto=compress&cs=tinysrgb&w=1200',
      features: ['Mode RAW', 'IA Retouche', 'Contrôles manuels', 'Export 4K'],
      color: 'from-purple-500/20 to-pink-500/20',
      accentColor: 'text-purple-400',
      status: 'Disponible',
      version: '2.1.4',
      lastUpdate: '15 déc 2024',
      downloads: '2.3M+',
      rating: 4.8,
      reviews: 12847,
      developer: 'ProCam Studios Inc.',
      size: '127 MB',
      compatibility: ['iPhone 15 Pro', 'iPhone 15 Pro Max', 'iPhone 14 Pro', 'iPhone 14 Pro Max'],
      screenshots: [
        'https://images.pexels.com/photos/1983037/pexels-photo-1983037.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      demoUrl: 'https://artspoureux.aynline.fr',
      githubUrl: 'https://github.com/procam/studio',
      technologies: ['Swift', 'Core ML', 'Metal', 'AVFoundation']
    },
    '2': {
      id: '2',
      title: 'CineMax Pro',
      category: 'Vidéo',
      description: 'Suite complète de montage vidéo mobile avec montage 4K en temps réel.',
      longDescription: 'CineMax Pro est la suite de montage vidéo mobile la plus avancée, conçue spécifiquement pour exploiter la puissance de la puce A17 Pro. Montez des vidéos 4K en temps réel, appliquez des effets professionnels et exportez directement en ProRes. L\'interface intuitive permet aux créateurs de contenu de produire des vidéos de qualité cinématographique directement depuis leur iPhone.',
      icon: 'Video',
      image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1200',
      features: ['Montage 4K', 'Effets temps réel', 'Export ProRes', 'Stabilisation IA'],
      color: 'from-blue-500/20 to-cyan-500/20',
      accentColor: 'text-blue-400',
      status: 'Bêta',
      version: '1.8.2 Beta',
      lastUpdate: '12 déc 2024',
      downloads: '890K+',
      rating: 4.6,
      reviews: 5632,
      developer: 'CineMax Technologies',
      size: '245 MB',
      compatibility: ['iPhone 15 Pro Max', 'iPhone 15 Pro', 'iPad Pro M2'],
      screenshots: [
        'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      demoUrl: 'https://cinemax-demo.vercel.app',
      technologies: ['Swift', 'Metal Performance Shaders', 'Core Video', 'AVKit']
    },
    '3': {
      id: '3',
      title: 'GameForge Mobile',
      category: 'Gaming',
      description: 'Plateforme de développement de jeux mobile avec éditeur visuel intégré.',
      longDescription: 'GameForge Mobile démocratise le développement de jeux en offrant un environnement de création complet sur iPhone. Avec son éditeur visuel intuitif et ses outils de test en temps réel, créez des jeux 2D et 3D directement sur votre appareil. Le GPU 6-cœurs optimisé permet des performances graphiques exceptionnelles pour tester vos créations.',
      icon: 'Gamepad2',
      image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=1200',
      features: ['Éditeur visuel', 'Test temps réel', 'Partage cloud', 'Multijoueur'],
      color: 'from-green-500/20 to-emerald-500/20',
      accentColor: 'text-green-400',
      status: 'Développement',
      version: '0.9.1 Alpha',
      lastUpdate: '10 déc 2024',
      downloads: '45K+',
      rating: 4.2,
      reviews: 892,
      developer: 'GameForge Studios',
      size: '189 MB',
      compatibility: ['iPhone 15 Pro Max', 'iPhone 15 Pro'],
      screenshots: [
        'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1293261/pexels-photo-1293261.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      demoUrl: 'https://gameforge-demo.surge.sh',
      githubUrl: 'https://github.com/gameforge/mobile',
      technologies: ['Unity', 'C#', 'Metal', 'GameplayKit']
    }
  };

  useEffect(() => {
    const projectData = projectsData[projectId];
    if (projectData) {
      setProject(projectData);
      if (projectData.demoUrl) {
        setActiveTab('demo');
      }
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
      const src = iframe.src;
      iframe.src = "about:blank"; // Temporarily set to blank to force reload
      iframe.src = src;
    }
  };

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

  const renderStars = (rating: number) => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${star <= rating
              ? 'text-yellow-400 fill-yellow-400'
              : 'text-white/30'
              }`}
          />
        ))}
      </div>
    );
  };

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
                      <Code className={`w-10 h-10 ${project.accentColor}`} />
                    </div>
                    <div>
                      <h1 className="text-4xl font-bold text-white mb-2">{project.title}</h1>
                      <p className={`text-lg font-medium ${project.accentColor}`}>{project.category}</p>
                    </div>
                  </div>

                  <p className="text-white/80 text-lg leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="flex items-center space-x-6 mb-6">
                    <div className="flex items-center space-x-2">
                      {renderStars(Math.round(project.rating))}
                      <span className="text-white font-semibold">{project.rating}</span>
                      <span className="text-white/60">({project.reviews.toLocaleString()})</span>
                    </div>
                    <div className="text-white/60">
                      {project.downloads} téléchargements
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {project.demoUrl && (
                      <button
                        onClick={() => setActiveTab('demo')}
                        className="bg-white/20 backdrop-blur-sm border border-white/30 px-6 py-3 rounded-2xl text-white hover:bg-white/30 transition-all duration-300 flex items-center space-x-2"
                      >
                        <Play className="w-5 h-5" />
                        <span>Démo live</span>
                      </button>
                    )}
                    {project.githubUrl && (
                      <button className="bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-2xl text-white hover:bg-white/20 transition-all duration-300 flex items-center space-x-2">
                        <Github className="w-5 h-5" />
                        <span>Code source</span>
                      </button>
                    )}
                  </div>
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
              <button
                onClick={() => setActiveTab('screenshots')}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${activeTab === 'screenshots'
                  ? 'bg-white/20 text-white shadow-lg'
                  : 'text-white/60 hover:text-white hover:bg-white/10'
                  }`}
              >
                Captures
              </button>
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

              {activeTab === 'screenshots' && (
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
                    <span className="text-white/60">Taille</span>
                    <span className="text-white font-medium">{project.size}</span>
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
                      <Smartphone className="w-4 h-4 text-green-400" />
                      <span className="text-white/80 text-sm">{device}</span>
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
    </div>
  );
}