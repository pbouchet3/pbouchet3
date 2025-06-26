import { Bot, Database, Monitor, Server, Shield, Wifi } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: Monitor,
      title: "Front-End",
      subtitle: "HTML/CSS/JavaScript/TypeScript/React",
      description: "Front-End moderne et fonctionnel avec React, TypeScript et Tailwind CSS. Conception responsive et accessible.",
      color: "from-green-500/20 to-emerald-500/20",
      accentColor: "text-green-400",
    },
    {
      icon: Server,
      title: "Back-End",
      subtitle: "ExpressJS/Flask",
      description: "Back-End robuste de type API RESTful. Sécurisé par Bearer Token, JWT et OAuth2.0. Gestion des données utilisateurs...",
      color: "from-blue-500/20 to-cyan-500/20",
      accentColor: "text-blue-400",
    },
    {
      icon: Database,
      title: "DataBase",
      subtitle: "PostgreSQL/MariaDB/MongoDB/Firebase",
      description: "Création d'infrastructures de bases de données relationnelles et non relationnelles. Optimisation des requêtes SQL.",
      color: "from-orange-500/20 to-red-500/20",
      accentColor: "text-orange-400",
    },
    {
      icon: Wifi,
      title: "Développement logiciel",
      subtitle: "C/C++",
      description: "Création de logiciels de production robustes et performants. Destinés à une chaîne de production d'usine.",
      color: "from-purple-500/20 to-pink-500/20",
      accentColor: "text-purple-400",
    },
    {
      icon: Shield,
      title: "Devops / AdminSys",
      subtitle: "Ansible/Docker/Kubernetes/Git",
      description: "Déploiement avec Docker et Docker Compose, déploiement de serveurs en parallèle via Ansible, et gestion de versions avec Git.",
      color: "from-indigo-500/20 to-purple-500/20",
      accentColor: "text-indigo-400",
    },
    {
      icon: Bot,
      title: "Automatisations",
      subtitle: "Bash/Python/JavaScript",
      description: "Scripting d'automatisations pour des tâches répétitives, et déploiement de scripts sur des serveurs distants.",
      color: "from-teal-500/20 to-green-500/20",
      accentColor: "text-teal-400",
    },
  ];

  return (
    <section id="features" className="relative py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-white mb-6">
            Types de projets
            <span className="block text-2xl font-normal text-white/60 mt-2">{/* Révolutionnaires */}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div
                className={`relative h-full p-8 rounded-3xl bg-gradient-to-br ${feature.color} backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl`}
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className={`w-8 h-8 ${feature.accentColor}`} />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">{feature.title}</h3>
                    <p className={`text-sm font-medium ${feature.accentColor}`}>{feature.subtitle}</p>
                  </div>
                  <p className="text-white/70 leading-relaxed">{feature.description}</p>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
