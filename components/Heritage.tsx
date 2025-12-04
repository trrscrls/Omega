import React from 'react';
import { TIMELINE } from '../constants';

const Heritage: React.FC = () => {
  return (
    <section id="herencia" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="absolute left-0 top-0 w-1/2 h-full bg-gray-50 -z-10 skew-x-12 transform -translate-x-1/4"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 md:gap-24">

          {/* Section Title */}
          <div className="md:w-1/3 sticky top-32 self-start">
            <span className="text-brand-red font-bold tracking-widest uppercase text-xs mb-2 block">Legado</span>
            <h2 className="text-4xl md:text-5xl font-light text-brand-black mb-8 font-serif">Herencia &<br /><span className="font-bold italic">Evolución</span></h2>
            <p className="text-gray-500 leading-relaxed text-sm text-justify font-light">
              Durante más de tres décadas, hemos mantenido un compromiso inquebrantable con la calidad.
              Lo que comenzó como un pequeño taller familiar se ha transformado en un referente de la industria gráfica,
              sin perder nunca la esencia del trato personal y el cuidado artesanal.
            </p>
            <div className="mt-12 flex gap-3">
              <div className="w-3 h-3 bg-brand-blue rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
              <div className="w-3 h-3 bg-brand-red rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
              <div className="w-3 h-3 bg-brand-yellow rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
            </div>
          </div>

          {/* Timeline */}
          <div className="md:w-2/3 border-l-2 border-gray-100 pl-8 md:pl-16 relative space-y-20">
            {TIMELINE.map((event, index) => (
              <div key={index} className="relative group">
                {/* Dot */}
                <div className="absolute -left-[43px] md:-left-[75px] top-2 w-6 h-6 bg-white border-4 border-gray-200 rounded-full transition-all duration-500 group-hover:border-brand-red group-hover:scale-125 z-10"></div>

                <span className="text-6xl md:text-8xl font-bold text-gray-100 absolute -top-8 -left-4 -z-10 select-none group-hover:text-gray-200 transition-colors duration-500 font-serif">
                  {event.year}
                </span>

                <div className="pt-4 relative z-10">
                  <h3 className="text-2xl font-bold text-brand-black mb-4 font-serif group-hover:text-brand-blue transition-colors">{event.title}</h3>
                  <p className="text-gray-500 text-base leading-relaxed max-w-lg group-hover:text-gray-700 transition-colors">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Heritage;