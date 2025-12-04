import React, { useState } from 'react';
import { PORTFOLIO } from '../constants';
import { PortfolioItem } from '../types';
import { X, ZoomIn, ArrowRight } from 'lucide-react';

const categories = ['Todos', 'Corporativo', 'Eventos', 'Empaques', 'Editorial'];

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filteredItems = activeCategory === 'Todos'
    ? PORTFOLIO
    : PORTFOLIO.filter(item => item.category === activeCategory);

  return (
    <section id="portafolio" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <span className="text-brand-red font-bold tracking-widest uppercase text-xs mb-2 block">Portafolio</span>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-black mb-2">Obras Maestras</h2>
            <p className="text-gray-400 font-light mt-4 max-w-md">Una selección curada de nuestros proyectos más desafiantes y exitosos.</p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 md:gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 text-xs uppercase tracking-widest transition-all duration-300 rounded-full border ${activeCategory === cat
                  ? 'bg-brand-black text-white border-brand-black'
                  : 'text-gray-500 border-gray-200 hover:border-brand-black hover:text-brand-black'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group cursor-pointer"
              onClick={() => setSelectedItem(item)}
            >
              <div className="relative overflow-hidden aspect-[4/3] bg-gray-100 mb-6 shadow-md hover:shadow-2xl transition-all duration-500 rounded-2xl">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-brand-blue/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                  <span className="text-white flex items-center gap-2 uppercase tracking-widest text-xs font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 border border-white/30 px-6 py-3 rounded-full hover:bg-white hover:text-brand-blue">
                    Ver Proyecto <ArrowRight size={16} />
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-start border-b border-gray-100 pb-4 group-hover:border-brand-red transition-colors duration-500 px-2">
                <div>
                  <h3 className="text-xl font-serif text-brand-black group-hover:text-brand-red transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mt-1">{item.category}</p>
                </div>
                <span className="text-xs text-gray-300 font-serif italic">{item.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-[60] bg-brand-blue/90 backdrop-blur-xl flex items-center justify-center p-6 animate-fade-in">
          <button
            onClick={() => setSelectedItem(null)}
            className="absolute top-6 right-6 p-2 text-white/50 hover:text-white transition-colors z-50"
          >
            <X size={32} strokeWidth={1} />
          </button>

          <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center h-full md:h-auto overflow-y-auto md:overflow-visible">
            <div className="aspect-[4/3] bg-gray-100 overflow-hidden shadow-2xl relative group rounded-2xl">
              <img
                src={selectedItem.imageUrl}
                alt={selectedItem.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-black/5"></div>
            </div>
            <div className="flex flex-col justify-center text-white">
              <span className="text-brand-yellow text-xs font-bold tracking-widest uppercase mb-4 block">
                {selectedItem.category} — {selectedItem.year}
              </span>
              <h3 className="text-4xl md:text-5xl font-serif mb-8 text-white leading-tight">
                {selectedItem.title}
              </h3>

              <p className="text-gray-300 leading-relaxed font-light text-lg mb-10 border-l-2 border-brand-red pl-6">
                {selectedItem.description}
              </p>

              <div className="space-y-4 bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10">
                <p className="text-xs uppercase tracking-widest text-gray-400 font-bold">Especificaciones Técnicas</p>
                <ul className="text-sm text-gray-300 space-y-2 font-mono">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-brand-red rounded-full"></span> Papel Certificado FSC</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-brand-yellow rounded-full"></span> Tintas Ecológicas Soy-based</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-brand-blue rounded-full"></span> Acabado Manual de Precisión</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;