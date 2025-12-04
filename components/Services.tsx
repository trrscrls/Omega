import React from 'react';
import { SERVICES } from '../constants';
import { Printer, Sparkles, Briefcase, Package, Shirt, Ticket } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  printer: <Printer strokeWidth={1} size={32} />,
  sparkles: <Sparkles strokeWidth={1} size={32} />,
  briefcase: <Briefcase strokeWidth={1} size={32} />,
  package: <Package strokeWidth={1} size={32} />,
  shirt: <Shirt strokeWidth={1} size={32} />,
  ticket: <Ticket strokeWidth={1} size={32} />,
};

const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50 -z-10"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center md:text-left">
          <span className="text-brand-red font-bold tracking-widest uppercase text-xs mb-2 block">Nuestros Servicios</span>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-black mb-6">Soluciones Integrales</h2>
          <p className="text-gray-500 max-w-2xl text-lg font-light">
            Combinamos tecnología de punta con artesanía tradicional para entregar resultados excepcionales en cada proyecto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="glass-card p-10 rounded-2xl hover:border-brand-red/30 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-red via-brand-yellow to-brand-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

              <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-brand-gray rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"></div>

              <div className="text-brand-blue mb-6 group-hover:text-brand-red transition-colors duration-300 transform group-hover:scale-110 origin-left relative z-10">
                {iconMap[service.iconName]}
              </div>

              <h3 className="text-xl font-bold text-brand-black mb-4 font-serif group-hover:translate-x-1 transition-transform duration-300 relative z-10">
                {service.title}
              </h3>

              <p className="text-gray-500 leading-relaxed text-sm group-hover:text-gray-600 transition-colors duration-300 relative z-10">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;