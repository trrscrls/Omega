import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center paper-texture overflow-hidden bg-brand-cream">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/50 to-transparent pointer-events-none"></div>

      {/* Abstract Background Shapes (CMYK) */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-brand-yellow/20 rounded-full blur-[80px] animate-float" style={{ animationDelay: '0s' }}></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-brand-blue/10 rounded-full blur-[100px] animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-red/5 rounded-full blur-[120px] animate-pulse-slow"></div>

      <div className="max-w-5xl mx-auto px-6 text-center z-10 relative">
        <div className="inline-flex items-center gap-4 mb-8 animate-fade-in-up opacity-0" style={{ animationDelay: '0.2s' }}>
          <span className="h-[2px] w-12 bg-gradient-to-r from-brand-red to-transparent"></span>
          <span className="text-xs tracking-[0.4em] font-bold uppercase text-brand-red-dark">Desde 1989</span>
          <span className="h-[2px] w-12 bg-gradient-to-l from-brand-red to-transparent"></span>
        </div>

        <h1 className="text-5xl md:text-8xl font-light text-brand-black mb-8 leading-tight tracking-tight animate-fade-in-up opacity-0" style={{ animationDelay: '0.4s' }}>
          La excelencia impresa <br />
          <span className="font-serif italic text-gradient relative inline-block pb-2">
            en cada detalle.
            <svg className="absolute w-full h-3 bottom-0 left-0 text-brand-yellow/60 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
            </svg>
          </span>
        </h1>

        <p className="text-gray-600 text-lg md:text-xl font-light max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up opacity-0" style={{ animationDelay: '0.6s' }}>
          Imprenta Omega: Transformamos tus ideas en impresiones de alta calidad que perduran. Tecnología de vanguardia con el cuidado artesanal de siempre.
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center animate-fade-in-up opacity-0" style={{ animationDelay: '0.8s' }}>
          <a href="#contacto" className="group relative px-10 py-4 bg-brand-black text-white text-sm uppercase tracking-widest overflow-hidden rounded-full shadow-xl hover:shadow-2xl hover:shadow-brand-red/20 transition-all duration-300 hover:-translate-y-1">
            <div className="absolute inset-0 w-0 bg-brand-red transition-all duration-[250ms] ease-out group-hover:w-full"></div>
            <span className="relative z-10">Cotizar Proyecto</span>
          </a>
          <a href="#portafolio" className="group px-10 py-4 text-brand-black text-sm uppercase tracking-widest border border-brand-black/20 rounded-full hover:border-brand-blue hover:text-brand-blue transition-all duration-300 hover:bg-white/80 backdrop-blur-sm">
            Ver Portafolio
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-50 cursor-pointer" onClick={() => document.getElementById('herencia')?.scrollIntoView({ behavior: 'smooth' })}>
        <span className="text-[10px] uppercase tracking-widest text-gray-400">Descubrir</span>
        <ArrowDown size={16} className="text-gray-400" />
      </div>
    </section>
  );
};

export default Hero;