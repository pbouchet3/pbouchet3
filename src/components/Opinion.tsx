import { addDoc, collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { Send } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { db } from '../Firebase';
import StarBar from './StarBar';

const Opinion = ({ lang, u }) => {
  const [formData, setFormData] = useState({
    name: '',
    message: '',
    note: 0,
  });
  const [opinions, setOpinions] = useState([])
  const [activeSlide, setActiveSlide] = useState(0);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    //console.log('Form submitted:', formData);
    // Reset form

    try {
      //console.log('new Date().getTime()' + new Date().getTime());

      const docRef = await addDoc(collection(db, "opinions"), {
        name: formData.name,
        note: formData.note,
        message: formData.message,
        date: new Date().getTime(),
        validated: false
      });
      //console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    setFormData({ name: '', message: '', note: 0 });
  };

  const setNote = (e: number) => {
    setFormData({
      ...formData,
      note: e
    });
  }


  const autorefresh = async () => {
    getDocs(collection(db, "opinions"))
      .then((querySnapshot) => {
        const newData = querySnapshot.docs
          .map((doc) => ({ ...doc.data(), id: doc.id }))

        if (!u)
          setOpinions(newData.filter((e) => e.validated))
        else
          setOpinions(newData.filter((e) => !e.validated))
        //console.log(newData);

        //console.log("autorefreshed");
      })
    await new Promise(r => setTimeout(r, 2000));
    // autorefresh();
  }

  const validateOpinion = async (o) => {
    await deleteDoc(doc(db, "opinions", o.id))
    await addDoc(collection(db, "opinions"), {
      name: o.name,
      note: o.note,
      message: o.message,
      date: o.date,
      validated: true
    });
  }

  useEffect(() => {
    autorefresh()
  }, [, u])


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const convertDate = (timestamp) => {
    //console.log(timestamp);
    const date = new Date(timestamp);
    const hours = date.getHours();
    const minutes = "0" + date.getMinutes();
    const seconds = "0" + date.getSeconds();
    const day = "0" + date.getDate();
    const month = "0" + (date.getMonth() + 1);
    const year = date.getFullYear();
    const formattedTime = day.substr(-2) + "/" + month.substr(-2) + "/" + year + " - " + hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

    return formattedTime
  }

  return (
    <section id="opinion" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {/* Opinion */}
              {lang('OPINION_title')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {/* Prêt à démarrer votre prochain projet ? OPINIONez-moi pour discuter  */}
              {lang('OPINION_text1')}
              {/* de vos idées et voir comment nous pouvons les concrétiser ensemble. */}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Opinion Info */}
            {opinions.length > 0 ? (
              <div className="block mb-8">
                <div className="relative">
                  {opinions.length > 1 ? (
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
                      {opinions.map((o) => (
                        <div key={o} className="min-w-full h-[500px] px-2 py-5">
                          <div className="bg-white h-full rounded-xl shadow-lg overflow-hidden">
                            <div className="p-6">
                              <div className="flex justify-between">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{o.name}</h3>
                                <StarBar note={o.note}></StarBar>
                                <h4>{convertDate(o.date)}</h4>
                              </div>
                              <p className="text-gray-600 mb-4 line-clamp-3">{o.message}</p>
                            </div>
                          </div>
                          {u ?
                            <button onClick={() => validateOpinion(o)}>
                              Validate ?
                            </button>
                            : null}
                        </div>
                      ))}
                    </div>
                  </div>
                  {opinions.length > 1 ? (
                    <button
                      className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow p-2 disabled:opacity-50"
                      onClick={() => setActiveSlide((prev) => Math.min(prev + 1, opinions.length - 1))}
                      disabled={activeSlide === opinions.length - 1}
                      aria-label="Next"
                      style={{ right: 0 }}
                    >
                      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" /></svg>
                    </button>
                  ) : null}

                  <div className="flex justify-center mt-4 gap-2">
                    {opinions.map((_, idx) => (
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
              <h4 className='flex justify-center self-center'>{lang("OPINION_nothing_here")}</h4>
            }

            {/* Opinion Form */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="opinion_name" className="block text-sm font-medium text-gray-700 mb-2">
                      {lang("OPINION_form_name")}
                    </label>
                    <input
                      type="text"
                      id="opinion_name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder={lang("OPINION_form_name_placeholder")}
                    />
                  </div>

                  <div className='flex justify-center pt-10'>
                    <StarBar note={formData.note} setNote={setNote}></StarBar>
                  </div>
                </div>

                <div>
                  <label htmlFor="opinion_message" className="block text-sm font-medium text-gray-700 mb-2">
                    {lang("OPINION_form_message")}
                  </label>
                  <textarea
                    id="opinion_message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    placeholder={lang("OPINION_form_message_placeholder")}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Send className="w-5 h-5" />
                  <span>{lang("OPINION_form_send")}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Opinion;