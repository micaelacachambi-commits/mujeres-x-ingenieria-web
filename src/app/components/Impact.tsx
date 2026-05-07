export default function Impact() {
  const impacts = [
    {
      number: '2000+',
      label: 'Jóvenes alcanzadas',
      description: 'A través de talleres, charlas y programas de mentoría'
    },
    {
      number: '50+',
      label: 'Talleres realizados',
      description: 'En escuelas, universidades y espacios comunitarios'
    },
    {
      number: '6',
      label: 'Años',
      description: 'Transformando vidas y trabajando para cerrar brechas de género en STEM'
    }
  ];

  return (
    <section id="comunidad" className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#A700D1] via-[#C577E8] to-[#262626]"></div>

      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 border-4 border-[#BECD0D] rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 border-4 border-[#BECD0D] rotate-45"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 md:mb-6">
            Nuestro <span className="text-[#BECD0D]">Impacto</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto px-4">
            Transformando vidas y cerrando brechas, un paso a la vez.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {impacts.map((impact, index) => (
            <div
              key={index}
              className="text-center group px-4"
            >
              <div className="mb-3 md:mb-4">
                <h3 className="text-5xl sm:text-6xl md:text-7xl font-bold text-[#BECD0D] group-hover:scale-110 transition-transform inline-block">
                  {impact.number}
                </h3>
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-white mb-2">
                {impact.label}
              </h4>
              <p className="text-sm sm:text-base text-white/70">{impact.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
