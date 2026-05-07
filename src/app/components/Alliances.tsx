import { useEffect, useState } from 'react';

export default function Alliances() {
  const [offset, setOffset] = useState(0);

  const alliances = [
    'Universidad Nacional de Jujuy',
    'Instituto Tecnológico',
    'Ministerio de Educación',
    'Empresas Tech',
    'Fundación Científica',
    'Red Latinoamericana',
    'Comunidad STEM',
    'Innovation Hub'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => (prev - 1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-[#262626] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-96 h-96 border-8 border-[#BECD0D] rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#A700D1] opacity-30 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="text-[#BECD0D]">Alianzas</span> estratégicas
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Construimos en colaboración con instituciones, empresas y
            organizaciones que comparten nuestra visión.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="flex gap-12 items-center"
            style={{
              transform: `translateX(${offset}%)`
            }}
          >
            {[...alliances, ...alliances].map((alliance, index) => (
              <div
                key={index}
                className="flex-shrink-0 bg-white/5 backdrop-blur-sm border border-[#BECD0D]/20 rounded-2xl px-8 py-6 hover:border-[#BECD0D] transition-all"
              >
                <p className="text-white font-medium whitespace-nowrap text-lg">
                  {alliance}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <button className="bg-[#BECD0D] text-[#262626] px-8 py-4 rounded-full font-bold hover:bg-white transition-all">
            Convertite en aliado
          </button>
        </div>
      </div>
    </section>
  );
}
