import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Route, Routes } from 'react-router-dom';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import HeaderHome from '../components/HeaderHome';
import HeaderProjects from '../components/HeaderProjects';
import Hero from '../components/Hero';
import Opinion from '../components/Opinion';
import Projects from '../components/Projects';
import Projectspage from './Projectspage';

interface HomeProps {
  lang: 'en' | 'fr';
}

const Home: React.FC<HomeProps> = ({ lang }) => {
  const { t, i18n } = useTranslation();
  const [opinionsUnlocked, setOpinionsUnlocked] = useState(false)

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang, i18n]);

  return (
    <div className="min-h-screen">
      <Routes>
        <Route path="/" element={<>
          <HeaderHome lang={t} language={lang} />
          <Hero lang={t} />
          <About lang={t} />
          <Projects lang={t} language={lang} />
          <Opinion lang={t} u={opinionsUnlocked}></Opinion>
          <Contact lang={t} />
          <Footer lang={t} />
        </>} />
        <Route path="/projects" element={<>
          <HeaderProjects lang={t} language={lang} />
          <Projectspage />
          <Footer lang={t} />
        </>} />
      </Routes>

      {/* <h1>{t('welcome')}</h1> */}
      {/* <p>{t('description')}</p> */}
      <button className='fixed bottom-0 text-transparent'
        onClick={() => {
          setOpinionsUnlocked(!opinionsUnlocked)
          //console.log('🔍 ~ opinionsUnlocked :', opinionsUnlocked);
        }
        }
      >c</button>
    </div >
  );
};

export default Home;
