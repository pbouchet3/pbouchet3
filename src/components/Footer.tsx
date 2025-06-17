import { Github, Heart, Linkedin, Mail } from 'lucide-react';

const Footer = ({ lang }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="text-2xl font-bold mb-4">
                Paul BOUCHET <span className="text-blue-400">Portfolio</span>
              </div>
              <p className="text-gray-400 mb-4">
                {/* Développeur fullstack passionné par l'innovation technologique */}
                {lang('FOOTER_text1')}
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">{lang("FOOTER_fastlinks")}</h3>
              <ul className="space-y-2">
                {[
                  lang("HEADER_icon_home"),
                  lang("HEADER_icon_about"),
                  lang("HEADER_icon_projects"),
                  lang("HEADER_icon_contact"),
                ].map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(' ', '').replace('à', 'a')}`}
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-lg font-semibold mb-4">{lang("FOOTER_competences")}</h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'Node.js', 'Python', 'C/C++', 'PHP', 'TypeScript', 'PostgreSQL'].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-800 text-blue-400 text-sm rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © {currentYear} {lang("FOOTER_copyrights")}
              </p>
              <p className="text-gray-400 text-sm flex items-center">
                Made with <Heart className="w-4 h-4 text-red-500 mx-1" /> and clean code
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;