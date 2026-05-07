import { BarChart3, FileText, TrendingUp, Database, ArrowRight } from 'lucide-react';

export default function Observatory() {
  const features = [
    {
      icon: Database,
      title: 'Datos y estadísticas',
      description: 'Recopilamos información sobre la participación de mujeres en STEM'
    },
    {
      icon: FileText,
      title: 'Estudios e investigación',
      description: 'Desarrollamos investigaciones que visibilizan realidades y desafíos'
    },
    {
      icon: BarChart3,
      title: 'Evidencia para la acción',
      description: 'Convertimos datos en conocimiento aplicable'
    },
    {
      icon: TrendingUp,
      title: 'Estrategias basadas en datos',
      description: 'Proyectamos acciones concretas'
    }
  ];

  return (
    <section id="observatorio" className="py-12 md:py-16 bg-gradient-to-br from-[#262626] via-[#2d1a36] to-[#262626] relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-[#A700D1] rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-[#BECD0D] rounded-full opacity-15 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
            <span className="text-white">Observatorio</span>{' '}
            <span className="text-[#A700D1]">Mujeres STEM</span>
          </h2>

          <div className="max-w-4xl mx-auto">
            <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed mb-6 md:mb-8 px-4">
              Generamos conocimiento e investigación con impacto. Nuestro observatorio produce datos,
              estudios y publicaciones que visibilizan la situación de las mujeres en STEM.
            </p>

            <a
              href="#"
              className="bg-[#A700D1] text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-[#BECD0D] hover:text-[#262626] transition-all inline-flex items-center gap-2 md:gap-3 group shadow-xl"
            >
              Conoce nuestras investigaciones
              <ArrowRight className="group-hover:translate-x-2 transition-transform" size={18} />
            </a>
          </div>
        </div>

        {/* Cards de características */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 max-w-5xl mx-auto mt-8 md:mt-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-[#A700D1]/30 rounded-lg md:rounded-xl p-3 md:p-5 hover:bg-white/10 hover:border-[#A700D1] hover:shadow-[0_0_30px_rgba(167,0,209,0.5)] transition-all duration-300"
              >
                <div className="mb-2 md:mb-3">
                  <Icon className="text-[#A700D1] w-6 h-6 md:w-8 md:h-8" strokeWidth={1.5} />
                </div>
                <h3 className="text-sm md:text-base font-bold text-white mb-1 md:mb-2">
                  {feature.title}
                </h3>
                <p className="text-white/70 text-xs md:text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
