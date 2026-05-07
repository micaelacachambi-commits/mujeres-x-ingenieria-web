import { Instagram, Linkedin, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const navigation = {
    nosotros: [
      { text: 'Quiénes somos', href: '#quiénes-somos' },
      { text: 'Qué hacemos', href: '#qué-hacemos' },
      { text: 'Comunidad', href: '#comunidad' },
      { text: 'Observatorio', href: '#observatorio' }
    ],
    stem: [
      { text: 'Ciencia', href: '#' },
      { text: 'Tecnología', href: '#' },
      { text: 'Ingeniería', href: '#' },
      { text: 'Matemática', href: '#' }
    ],
    involucrate: [
      { text: 'Sumate', href: '#sumate' },
      { text: 'Donaciones', href: '#' },
      { text: 'Voluntariado', href: '#' }
    ]
  };

  const social = [
    { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/mujeresporingenieria/' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/mujeres-x-ingenier%C3%ADa-jujuy-138123244/' },
    { icon: Mail, label: 'Email', href: 'mailto:mujeresxingenieria@gmail.com' }
  ];

  return (
    <footer className="bg-[#262626] text-white pt-12 md:pt-16 pb-6 md:pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12">
          <div>
            <h3 className="font-bold text-[#BECD0D] mb-3 md:mb-4 uppercase tracking-wide text-sm md:text-base">
              Nosotras
            </h3>
            <ul className="space-y-1.5 md:space-y-2">
              {navigation.nosotros.map((item) => (
                <li key={item.text}>
                  <a
                    href={item.href}
                    className="text-white/70 hover:text-[#BECD0D] transition-colors text-xs md:text-sm"
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-[#BECD0D] mb-3 md:mb-4 uppercase tracking-wide text-sm md:text-base">
              STEM
            </h3>
            <ul className="space-y-1.5 md:space-y-2">
              {navigation.stem.map((item) => (
                <li key={item.text}>
                  <span className="text-white/70 text-xs md:text-sm">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-[#BECD0D] mb-3 md:mb-4 uppercase tracking-wide text-sm md:text-base">
              Involucrate
            </h3>
            <ul className="space-y-1.5 md:space-y-2">
              {navigation.involucrate.map((item) => (
                <li key={item.text}>
                  <a
                    href={item.href}
                    className="text-white/70 hover:text-[#BECD0D] transition-colors text-xs md:text-sm"
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-[#BECD0D] mb-3 md:mb-4 uppercase tracking-wide text-sm md:text-base">
              Contacto
            </h3>
            <div className="space-y-2 md:space-y-3">
              <a
                href="mailto:mujeresxingenieria@gmail.com"
                className="flex items-start gap-2 text-white/70 text-xs md:text-sm hover:text-[#BECD0D] transition-colors"
              >
                <Mail size={16} className="flex-shrink-0 mt-0.5 md:hidden" />
                <Mail size={18} className="flex-shrink-0 mt-0.5 hidden md:block" />
                <span className="break-all leading-tight">mujeres<wbr/>xingenieria<wbr/>@gmail.com</span>
              </a>
              <div className="flex items-center gap-2 text-white/70 text-xs md:text-sm">
                <MapPin size={16} className="flex-shrink-0 md:hidden" />
                <MapPin size={18} className="flex-shrink-0 hidden md:block" />
                <span>Jujuy, Argentina</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
            <div className="flex gap-3 md:gap-4">
              {social.map((item) => {
                const Icon = item.icon;
                const isEmail = item.href.startsWith('mailto:');
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    {...(!isEmail && { target: '_blank', rel: 'noopener noreferrer' })}
                    className="w-9 h-9 md:w-10 md:h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#BECD0D] hover:text-[#262626] transition-all"
                    aria-label={item.label}
                  >
                    <Icon size={18} className="md:hidden" />
                    <Icon size={20} className="hidden md:block" />
                  </a>
                );
              })}
            </div>

            <p className="text-white/50 text-xs md:text-sm text-center md:text-left">
              © 2026 Mujeres x Ingeniería. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
