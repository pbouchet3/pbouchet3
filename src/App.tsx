import React from 'react';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import './i18n/i18n';
import Home from './pages/Home';

const App: React.FC = () => {
  React.useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css?family=Montserrat:200,400&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    const style = document.createElement('style');
    style.innerHTML = `body { font-family: 'Montserrat', sans-serif; }`;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(link);
      document.head.removeChild(style);
    };
  }, []);

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/fr" />} />
        <Route path="/en/*" element={<Home lang="en" />} />
        <Route path="/fr/*" element={<Home lang="fr" />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
