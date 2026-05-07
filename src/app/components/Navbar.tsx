import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import logoVioleta from '../../imports/Recursos_Graficos_png_y_jpg_-_Mujeres_x_Ingenieria-06_1_.png';

interface NavbarProps {
  scrolled: boolean;
}

export default function Navbar({ scrolled }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    'Quiénes somos',
    'Qué hacemos',
    'Comunidad',
    'Observatorio',
    'Novedades'
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src={logoVioleta}
              alt="Mujeres x Ingeniería"
              className="h-12 w-12 md:h-16 md:w-16"
            />
          </div>

          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-sm font-medium hover:text-[#A700D1] transition-colors"
              >
                {item}
              </a>
            ))}
            <a
              href="#sumate"
              className="bg-[#BECD0D] text-[#262626] px-6 py-2 rounded-full font-bold hover:bg-[#A700D1] hover:text-white transition-all"
            >
              Sumate
            </a>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-lg">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="block text-base font-medium hover:text-[#A700D1] transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a
              href="#sumate"
              className="w-full bg-[#BECD0D] text-[#262626] px-6 py-3 rounded-full font-bold hover:bg-[#A700D1] hover:text-white transition-all text-center block mt-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sumate
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
