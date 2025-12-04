import React from 'react';
import { Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-16">

        <div className="space-y-6 md:w-1/3">
          <div className="flex flex-col items-start">
            <img
              src="/Logo/LOGO_OMEGA.png"
              alt="Imprenta Omega"
              className="h-28 w-auto object-contain -ml-2 filter grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Artesanía gráfica y precisión tecnológica para marcas que exigen distinción. Desde 1989, imprimiendo la identidad del Maule.
          </p>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/talca.imprentaomega/?hl=es-la" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-brand-red hover:text-white transition-all duration-300">
              <Instagram size={18} />
            </a>
            <a href="https://www.facebook.com/p/Imprenta-OMEGA-100063764875963/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-brand-blue hover:text-white transition-all duration-300">
              <Facebook size={18} />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-sm md:w-1/3">
          <div>
            <h5 className="font-bold text-brand-black uppercase tracking-widest text-xs mb-8 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-[2px] after:bg-brand-red">Contacto</h5>
            <ul className="space-y-6 text-gray-500 font-light">
              <li className="flex items-start gap-3 group">
                <Mail size={16} className="mt-1 text-gray-300 group-hover:text-brand-red transition-colors" />
                <div>
                  <a href="mailto:contacto@omegatalca.cl" className="hover:text-brand-black transition-colors block">contacto@omegatalca.cl</a>
                  <a href="mailto:planos@omegatalca.cl" className="hover:text-brand-black transition-colors block mt-1">planos@omegatalca.cl</a>
                </div>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone size={16} className="text-gray-300 group-hover:text-brand-red transition-colors" />
                <a href="https://wa.me/56998300351" target="_blank" rel="noopener noreferrer" className="hover:text-brand-black transition-colors">
                  +56 9 9830 0351
                </a>
              </li>
              <li className="flex items-start gap-3 group leading-relaxed">
                <MapPin size={16} className="mt-1 text-gray-300 group-hover:text-brand-red transition-colors" />
                <span>1 Oriente, Av. Dos Sur 1015,<br />Talca, Chile</span>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-brand-black uppercase tracking-widest text-xs mb-8 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-[2px] after:bg-brand-blue">Horario</h5>
            <ul className="space-y-4 text-gray-500 font-light">
              <li className="flex justify-between border-b border-gray-50 pb-2">
                <span>Lunes - Viernes</span>
                <span className="font-medium text-brand-black">9:30 - 17:00</span>
              </li>
              <li className="flex justify-between border-b border-gray-50 pb-2 text-gray-300">
                <span>Sábado</span>
                <span>Cerrado</span>
              </li>
              <li className="flex justify-between text-gray-300">
                <span>Domingo</span>
                <span>Cerrado</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 font-light">
        <p>&copy; {new Date().getFullYear()} Imprenta Omega. Todos los derechos reservados.</p>
        <div className="flex items-center gap-2 mt-4 md:mt-0">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-red"></span>
          <span className="w-1.5 h-1.5 rounded-full bg-brand-blue"></span>
          <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow"></span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;