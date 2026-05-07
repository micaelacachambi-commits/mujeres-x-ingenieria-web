import { Sparkles, GraduationCap, BookOpen, Users, Network } from 'lucide-react';

export default function WhatWeDo() {
  const actions = [
    {
      icon: Sparkles,
      title: 'Vocaciones tempranas',
      description: 'Promovemos el interés por la ciencia y la tecnología desde la infancia, rompiendo estereotipos de género.'
    },
    {
      icon: GraduationCap,
      title: 'Puente hacia la educación superior',
      description: 'Acompañamos a estudiantes del nivel secundario en la exploración de carreras STEM.'
    },
    {
      icon: BookOpen,
      title: 'Formación universitaria',
      description: 'Desarrollamos espacios de formación técnica y habilidades clave para la inserción laboral y liderazgo.'
    },
    {
      icon: Users,
      title: 'Sensibilización y cultura',
      description: 'Diseñamos talleres con perspectiva de género para promover entornos más justos e inclusivos.'
    },
    {
      icon: Network,
      title: 'Articulación e impacto',
      description: 'Trabajamos con instituciones para potenciar oportunidades y generar impacto sostenible.'
    }
  ];

  return (
    <section id="qué-hacemos" className="py-16 md:py-24 bg-[#E2E2E2] relative overflow-hidden">
      {/* Formas decorativas */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-[#A700D1] rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#BECD0D] rounded-full opacity-10 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8">
            <span className="text-[#A700D1]">¿Qué</span>{' '}
            <span className="text-[#262626]">hacemos?</span>
          </h2>

          {/* Descripción principal */}
          <div className="mb-8 md:mb-12">
            <p className="text-lg sm:text-xl md:text-2xl text-[#A700D1] max-w-4xl mx-auto font-medium px-4">
              Impulsamos acciones concretas a lo largo de distintas etapas de la vida,
              desde vocaciones tempranas hasta el desarrollo profesional.
            </p>
          </div>
        </div>

        {/* Cards de acciones */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {actions.map((action, index) => {
            const Icon = action.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-[0_0_20px_rgba(167,0,209,0.3)] hover:shadow-[0_0_40px_rgba(167,0,209,0.8)] hover:-translate-y-2 transition-all duration-300 border-t-4 border-[#A700D1]"
              >
                <div className="mb-3 md:mb-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-[#A700D1]/10 rounded-full flex items-center justify-center">
                    <Icon className="text-[#A700D1] w-6 h-6 md:w-7 md:h-7" strokeWidth={2} />
                  </div>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-[#262626] mb-2 md:mb-3">
                  {action.title}
                </h3>
                <p className="text-sm md:text-base text-[#262626]/70 leading-relaxed">
                  {action.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
