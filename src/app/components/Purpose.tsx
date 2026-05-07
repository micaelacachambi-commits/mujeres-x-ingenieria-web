import { GraduationCap, Users, TrendingUp, Crown } from 'lucide-react';

export default function Purpose() {
  const pillars = [
    {
      icon: GraduationCap,
      title: 'Acceso',
      description: 'Acompañamos a mujeres en su ingreso a carreras STEM'
    },
    {
      icon: Users,
      title: 'Permanencia',
      description: 'Creamos redes de apoyo para sostener trayectorias académicas'
    },
    {
      icon: TrendingUp,
      title: 'Desarrollo',
      description: 'Impulsamos el crecimiento profesional y técnico'
    },
    {
      icon: Crown,
      title: 'Liderazgo',
      description: 'Formamos referentes para transformar la industria'
    }
  ];

  return (
    <section id="quiénes-somos" className="py-16 md:py-24 bg-[#262626] relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8">
            <span className="text-[#BECD0D]">Quiénes</span>{' '}
            <span className="text-white">somos</span>
          </h2>

          {/* Card principal */}
          <div className="max-w-4xl mx-auto">
            <p className="text-base sm:text-lg md:text-xl text-[#e2e2e2] leading-relaxed text-center">
              Somos una organización de base integrada por mujeres de la Facultad de Ingeniería de la{' '}
              <span className="font-bold">Universidad Nacional de Jujuy</span>.
              Trabajamos para reducir las brechas de género en el acceso, la permanencia,
              el desarrollo y el liderazgo de mujeres en <span className="font-bold">STEM</span>.
            </p>
          </div>
        </div>

        {/* Cards con sombra verde */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-12 md:mt-16">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className="bg-[#262626] border-2 border-[#BECD0D]/30 rounded-2xl p-6 md:p-8 shadow-[0_0_20px_rgba(190,205,13,0.3)] hover:shadow-[0_0_40px_rgba(190,205,13,0.8)] hover:border-[#BECD0D] hover:scale-105 transition-all duration-300"
              >
                <div className="mb-3 md:mb-4">
                  <Icon className="text-[#BECD0D] w-10 h-10 md:w-12 md:h-12" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#BECD0D] mb-2 md:mb-3">
                  {pillar.title}
                </h3>
                <p className="text-sm md:text-base text-[#e2e2e2]/90 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
