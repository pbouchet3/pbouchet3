export default function StatsSection() {
  const stats = [
    { number: "1", label: "Master Architecte des Systemes d'Information", url: "https://www.onisep.fr/ressources/univers-metier/metiers/architecte-des-systemes-d-information" },
    { number: "3.5", label: "Annees en alternance/CDI" },
    { number: "~ 10", label: "Projets realises (Scolaire, Personnel, Professionnel)" },
    { number: "~ 15", label: "Technologies utilisees" },
  ];

  return (
    <section id="stats" className="relative py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <button
                key={index}
                className="text-center"
                onClick={() => {
                  if (stat.url) {
                    window.open(stat.url, "_blank");
                  }
                }}
                style={{ cursor: stat.url ? "pointer" : "default" }}
                disabled={!stat.url}
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-white/60 text-sm">{stat.label}</div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16">
        <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-xl rounded-3xl border border-white/10 p-8 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-4">Demande de devis</h3>
          <p className="text-white/70 mb-6">Contactez moi pour en parler. Je suis toujours à la recherche de nouveaux défis et projets passionnants.</p>
          <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl" href="#contact">
            Contact
          </button>
        </div>
      </div>
    </section>
  );
}
