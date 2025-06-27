import { addDoc, collection } from "firebase/firestore";
import {
  CheckCircle,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send
} from 'lucide-react';
import React, { useState } from 'react';
import { db } from '../Firebase';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    try {
      await addDoc(collection(db, "contact"), {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        subject: formData.subject
      });
      //console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    setIsSubmitted(true);
    // setTimeout(() => {
    // setIsSubmitted(false);
    // setFormData({ name: '', email: '', subject: '', message: '' });
    // }, 3000);
  };



  const contactInfo = [
    {
      icon: Phone,
      title: "Téléphone",
      info: "+33 7 83 19 79 56",
      subtitle: "Toujours disponible",
      color: "from-green-500/20 to-emerald-500/20",
      accentColor: "text-green-400"
    },
    {
      icon: Mail,
      title: "Email",
      info: "bouchet.paul3@gmail.com",
      subtitle: "Réponse sous 24h",
      color: "from-blue-500/20 to-cyan-500/20",
      accentColor: "text-blue-400"
    },
    {
      icon: MapPin,
      title: "Adresse",
      // info: "123 Avenue des Champs-Élysées",
      info: "33170 Gradignan, France",
      subtitle: "Dans la région bordelaise",
      color: "from-purple-500/20 to-pink-500/20",
      accentColor: "text-purple-400"
    }
  ];

  return (
    <section id="contact" className="relative py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            Contactez-moi
            <span className="block text-2xl font-normal text-white/60 mt-2">
              Je suis là pour vous aider
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className=" space-y-8">
            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${contact.color} backdrop-blur-xl rounded-3xl border border-white/10 p-6 hover:scale-105 transition-all duration-300`}

                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                      <contact.icon className={`w-6 h-6 ${contact.accentColor}`} />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg mb-1">{contact.title}</h3>
                      <p className="text-white/90 font-medium">{contact.info}</p>
                      <p className="text-white/60 text-sm mt-1">{contact.subtitle}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-3xl border border-white/10 p-8">
            {!isSubmitted ? (
              <>
                <div className="flex items-center space-x-3 mb-6">
                  <MessageCircle className="w-8 h-8 text-purple-400" />
                  <h3 className="text-2xl font-bold text-white">Envoyez-moi un message</h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white/80 text-sm font-medium mb-2">
                        Nom complet
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white/40 transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-white/80 text-sm font-medium mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white/40 transition-colors"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">
                      Sujet
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-4 py-3 text-white focus:outline-none focus:border-white/40 transition-colors"
                      required
                    >
                      <option value="" className="bg-slate-800">Choisir un sujet</option>
                      <option value="project" className="bg-slate-800">Proposez un projet</option>
                      <option value="other" className="bg-slate-800">Autre</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white/40 transition-colors resize-none"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 px-6 py-4 rounded-2xl text-white font-semibold transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                  >
                    <Send className="w-5 h-5" />
                    <span>Envoyer le message</span>
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Message envoyé !</h3>
                <p className="text-white/80">
                  Merci pour votre message. Nous vous répondrons dans les plus brefs délais.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}