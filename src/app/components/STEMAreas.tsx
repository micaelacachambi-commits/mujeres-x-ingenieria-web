import { Code, Cpu, Zap, Calculator, Brain, Bot, Wind } from 'lucide-react';

export default function STEMAreas() {
  const areas = [
    {
      icon: Code,
      title: 'Ingeniería',
      description: 'Construcción de soluciones técnicas e innovación aplicada',
      color: '#BECD0D'
    },
    {
      icon: Cpu,
      title: 'Tecnología',
      description: 'Desarrollo de sistemas, software y herramientas digitales',
      color: '#A700D1'
    },
    {
      icon: Zap,
      title: 'Ciencia',
      description: 'Investigación, experimentación y descubrimiento científico',
      color: '#C577E8'
    },
    {
      icon: Calculator,
      title: 'Matemática',
      description: 'Análisis cuantitativo y modelado de sistemas complejos',
      color: '#BECD0D'
    },
    {
      icon: Brain,
      title: 'IA',
      description: 'Inteligencia artificial y aprendizaje automático',
      color: '#A700D1'
    },
    {
      icon: Bot,
      title: 'Robótica',
      description: 'Diseño y programación de sistemas autónomos',
      color: '#C577E8'
    },
    {
      icon: Wind,
      title: 'Energías renovables',
      description: 'Sostenibilidad y tecnologías para el futuro del planeta',
      color: '#BECD0D'
    }
  ];

  return (
    <section className="py-24 bg-[#E2E2E2] relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#A700D1]/10 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Áreas <span className="text-[#A700D1]">STEM</span>
          </h2>
          <p className="text-xl text-[#262626]/70 max-w-3xl mx-auto">
            Impulsamos la participación de mujeres en todas las disciplinas de
            ciencia, tecnología, ingeniería y matemática.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {areas.map((area, index) => {
            const Icon = area.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden"
                style={{
                  borderTop: `4px solid ${area.color}`
                }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                  style={{ backgroundColor: area.color }}
                ></div>

                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: `${area.color}20` }}
                >
                  <Icon
                    style={{ color: area.color }}
                    size={32}
                  />
                </div>

                <h3
                  className="text-2xl font-bold mb-3"
                  style={{ color: area.color }}
                >
                  {area.title}
                </h3>
                <p className="text-[#262626]/70">{area.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
