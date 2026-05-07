import { ArrowRight } from 'lucide-react';

export default function Stories() {
  const stories = [
    {
      image: 'https://images.unsplash.com/photo-1705579607638-7c418a27dec1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHx3b21lbiUyMHJvYm90aWNzJTIwcHJvZ3JhbW1pbmclMjBjb21wdXRlcnxlbnwxfHx8fDE3NzgwNzMyOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      name: 'María Fernanda',
      role: 'Ingeniera en Sistemas',
      story: 'Desde Jujuy al mundo: cómo la tecnología me permitió romper barreras y crear oportunidades para otras.'
    },
    {
      image: 'https://images.unsplash.com/photo-1766297248084-b32bacb4a1e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXRpbmElMjB3b21lbiUyMFNURU0lMjBzY2llbmNlfGVufDF8fHx8MTc3ODA3MzI5Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      name: 'Carolina',
      role: 'Investigadora en Biología Molecular',
      story: 'La ciencia no tiene género. Mi laboratorio es un espacio de descubrimiento y transformación social.'
    },
    {
      image: 'https://images.unsplash.com/photo-1694532415679-13a10fb3d519?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMHJvYm90aWNzJTIwcHJvZ3JhbW1pbmclMjBjb21wdXRlcnxlbnwxfHx8fDE3NzgwNzMyOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      name: 'Valentina',
      role: 'Desarrolladora de Software',
      story: 'Programar es crear realidades. Cada línea de código es una oportunidad de cambiar el mundo.'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-[#A700D1]">Historias</span> que inspiran
          </h2>
          <p className="text-xl text-[#262626]/70 max-w-3xl mx-auto">
            Referentes reales, con identidad territorial y visión global.
          </p>
        </div>

        <div className="space-y-8">
          {stories.map((story, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } gap-8 items-center bg-gradient-to-br from-[#E2E2E2] to-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group`}
            >
              <div className="md:w-1/2">
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="md:w-1/2 p-8 md:p-12">
                <div className="mb-4">
                  <h3 className="text-3xl font-bold text-[#262626] mb-2">
                    {story.name}
                  </h3>
                  <p className="text-lg text-[#A700D1] font-medium italic">
                    {story.role}
                  </p>
                </div>
                <p className="text-xl text-[#262626]/80 mb-6 leading-relaxed">
                  "{story.story}"
                </p>
                <button className="flex items-center gap-2 text-[#A700D1] font-bold hover:gap-4 transition-all">
                  Leer historia completa
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
