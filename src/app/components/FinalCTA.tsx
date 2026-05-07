import { ArrowRight } from 'lucide-react';
import patternImage from '../../imports/image-1.png';
import logoVerde from '../../imports/Recursos_Graficos_png_y_jpg_-_Mujeres_x_Ingenieria-01_4_.png';

export default function FinalCTA() {
  return (
    <section id="sumate" className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#A700D1] via-[#262626] to-[#C577E8]"></div>

      <div className="absolute inset-0 opacity-20">
        <img
          src={patternImage}
          alt="Pattern"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute top-1/4 left-10 w-72 h-72 bg-[#BECD0D] rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#C577E8] rounded-full blur-3xl opacity-30"></div>

      <div className="max-w-5xl mx-auto px-4 md:px-6 text-center relative z-10">
        <div className="mb-4 md:mb-1">
          <img
            src={logoVerde}
            alt="Mujeres x Ingeniería"
            className="h-[180px] sm:h-[240px] md:h-[300px] w-auto mx-auto mb-0"
          />
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 md:mb-8 leading-tight px-4">
          Una da un paso,{' '}
          <span className="text-[#BECD0D]">todas avanzamos.</span>
        </h2>

        <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 md:mb-12 max-w-3xl mx-auto px-4">
          Sumate a nuestra comunidad.
        </p>

        <a
          href="https://forms.gle/d1JTamWjsmHhTYFS9"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#BECD0D] text-[#262626] px-8 md:px-12 py-4 md:py-6 rounded-full font-bold text-lg md:text-xl hover:bg-white hover:scale-105 transition-all inline-flex items-center gap-2 md:gap-3 group shadow-2xl"
        >
          Quiero ser parte
          <ArrowRight className="group-hover:translate-x-2 transition-transform" size={20} />
        </a>
      </div>
    </section>
  );
}
