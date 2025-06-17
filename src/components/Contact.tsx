import { Mail, MapPin, Phone, Send } from 'lucide-react';
import React, { useState } from 'react';

const Contact = ({ lang }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {/* Contact */}
              {lang('CONTACT_title')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {/* Prêt à démarrer votre prochain projet ? Contactez-moi pour discuter  */}
              {lang('CONTACT_text1')}
              {/* de vos idées et voir comment nous pouvons les concrétiser ensemble. */}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {/* Restons en contact */}
                  {lang('CONTACT_text2')}
                </h3>
                <p className="text-gray-600 mb-8">
                  {/* Je suis toujours ouvert aux nouvelles opportunités et aux projets */}
                  {lang('CONTACT_text3')}
                  {/* innovants. N'hésitez pas à me contacter pour discuter de vos besoins. */}
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4 group">
                  <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{lang("CONTACT_form_email")}</h4>
                    <p className="text-gray-600">paul.bouchet3@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group">
                  <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{lang("CONTACT_from_phone")}</h4>
                    <p className="text-gray-600">+33 7 83 19 79 56</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group">
                  <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{lang("CONTACT_loc")}</h4>
                    <p className="text-gray-600">Bordeaux, France</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-2">{lang("CONTACT_awnsertime")}</h4>
                <p className="text-gray-600">
                  {lang("CONTACT_text4")}
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      {lang("CONTACT_form_name")}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder={lang("CONTACT_form_name_placeholder")}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      {lang("CONTACT_form_email")}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder={lang("CONTACT_form_email_placeholder")}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    {lang("CONTACT_form_subject")}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder={lang("CONTACT_form_subject_placeholder")}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    {lang("CONTACT_form_message")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    placeholder={lang("CONTACT_form_message_placeholder")}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Send className="w-5 h-5" />
                  <span>{lang("CONTACT_form_send")}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;