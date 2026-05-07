import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Purpose from './components/Purpose';
import WhatWeDo from './components/WhatWeDo';
// import STEMAreas from './components/STEMAreas';
import Impact from './components/Impact';
// import Stories from './components/Stories';
// import Alliances from './components/Alliances';
import Observatory from './components/Observatory';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Configurar idioma y prevenir traducción automática
    document.documentElement.lang = 'es';

    // Agregar meta tags para prevenir traducción
    const metaNoTranslate = document.createElement('meta');
    metaNoTranslate.name = 'google';
    metaNoTranslate.content = 'notranslate';
    document.head.appendChild(metaNoTranslate);

    const metaContentLanguage = document.createElement('meta');
    metaContentLanguage.httpEquiv = 'content-language';
    metaContentLanguage.content = 'es';
    document.head.appendChild(metaContentLanguage);

    return () => {
      document.head.removeChild(metaNoTranslate);
      document.head.removeChild(metaContentLanguage);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#E2E2E2] text-[#262626] overflow-x-hidden" translate="no">
      <Navbar scrolled={scrolled} />
      <Hero />
      <Purpose />
      <WhatWeDo />
      <Impact />
      <Observatory />
      <FinalCTA />
      <Footer />
    </div>
  );
}
