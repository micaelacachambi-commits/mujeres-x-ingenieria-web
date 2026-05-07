import { ArrowRight } from 'lucide-react';
import patternImage from '../../imports/image-1.png';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#A700D1] via-[#C577E8] to-[#262626] opacity-10"></div>

      <div className="absolute top-20 right-0 w-96 h-96 bg-[#BECD0D] rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-[#A700D1] rounded-full opacity-20 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-20 grid md:grid-cols-2 gap-8 md:gap-12 items-center relative z-10">
        <div className="space-y-6 md:space-y-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="text-[#BECD0D]">Potenciamos</span> a mujeres <span className="text-[#A700D1]">jujeñas STEM.</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#262626]/80 max-w-xl">
            Generamos comunidad, formación y datos para impulsar el crecimiento de mujeres en ingeniería y transformar el desarrollo tecnológico de nuestra región.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
            <a
              href="#sumate"
              className="bg-[#A700D1] text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold hover:bg-[#C577E8] transition-all flex items-center justify-center gap-2 group text-sm md:text-base"
            >
              Sumate
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <button className="border-2 border-[#A700D1] text-[#A700D1] px-6 md:px-8 py-3 md:py-4 rounded-full font-bold hover:bg-[#A700D1] hover:text-white transition-all text-sm md:text-base">
              Conocé nuestros proyectos
            </button>
          </div>
        </div>

        <div className="relative mt-8 md:mt-0">
          <div className="absolute -top-10 -right-10 w-full h-full hidden md:block">
            <img
              src={patternImage}
              alt="Geometric pattern"
              className="w-full h-full object-contain opacity-30"
            />
          </div>

          <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1766297248084-b32bacb4a1e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXRpbmElMjB3b21lbiUyMFNURU0lMjBzY2llbmNlfGVufDF8fHx8MTc3ODA3MzI5Mnww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Mujer en laboratorio científico"
              className="w-full h-64 sm:h-80 md:h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#A700D1]/60 to-transparent"></div>
          </div>

          <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 w-24 h-24 md:w-32 md:h-32 bg-[#BECD0D] rounded-full blur-xl"></div>
        </div>
      </div>
    </section>
  );
}
