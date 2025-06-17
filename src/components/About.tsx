import { AppWindow, Cpu, Zap } from 'lucide-react';

const About = ({ lang }) => {
  const skills = [
    { name: 'FullStack', level: 90, icon: Zap, color: 'from-blue-300 to-blue-400' },
    { name: 'Windows softwares', level: 80, icon: AppWindow, color: 'from-blue-400 to-blue-500' },
    { name: 'Électronique', level: 30, icon: Cpu, color: 'from-blue-800 to-blue-900' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {lang("ABOUT_title")}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {lang("ABOUT_text1")}<br />
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="prose prose-lg text-gray-700">
                <p className="mb-6">
                  {/* Mon parcours m'a mené à maîtriser un large éventail de technologies, */}
                  {lang("ABOUT_text2")}<br />
                  {/* du développement d'applications web responsive aux systèmes embarqués */}
                </p>

                <div className="grid grid-cols-2 gap-4 my-8">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-3xl font-bold text-blue-600">20+</div>
                    <div className="text-sm text-gray-600">
                      {lang("ABOUT_text3")}
                      {/* Projets réalisés */}
                    </div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-3xl font-bold text-blue-600">3+</div>
                    <div className="text-sm text-gray-600">
                      {lang("ABOUT_text4")}
                      {/* Années d'expérience */}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {['JavaScript', 'TypeScript', 'Node.js',
                  'C', 'C++', 'C#',
                  'JAVA', 'Python',
                  'Bash', 'Arduino', 'ESP32', 'C++', 'PostgreSQL'].map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
              </div>
            </div>

            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={skill.name} className="group">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <skill.icon className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform" />
                      <span className="font-semibold text-gray-800">{skill.name}</span>
                    </div>
                    <span className="text-sm font-medium text-gray-600">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out animate-skillBar`}
                      style={{
                        width: `${skill.level}%`,
                        animationDelay: `${index * 200}ms`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;