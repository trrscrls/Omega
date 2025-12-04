import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-brand-black text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <Quote className="mx-auto text-brand-gray/20 mb-12" size={48} />
        
        <div className="grid md:grid-cols-2 gap-16">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="flex flex-col items-center">
              <p className="text-lg md:text-xl font-light italic leading-relaxed text-gray-300 mb-8">
                "{t.quote}"
              </p>
              <div className="mt-auto">
                <h4 className="font-semibold text-white tracking-wide">{t.clientName}</h4>
                <p className="text-xs text-brand-gray/50 uppercase tracking-widest mt-1">{t.company}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Client Logos Placeholder */}
        <div className="mt-20 pt-10 border-t border-white/10 flex flex-wrap justify-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Simulating generic client logos with text */}
             <span className="text-xl font-bold font-serif">VOGUE</span>
             <span className="text-xl font-bold font-sans">TECHNIQUE</span>
             <span className="text-xl font-bold font-mono">ARCHITECTURAL</span>
             <span className="text-xl font-bold">MUSEUM</span>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;