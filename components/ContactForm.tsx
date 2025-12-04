import React, { useState } from 'react';
import { CloudUpload, CheckCircle, Loader2, ArrowRight, Send } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    service: '',
    details: '',
    file: null as string | null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormState({ name: '', email: '', service: '', details: '', file: null });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormState({ ...formState, file: e.target.files[0].name });
    }
  };

  return (
    <section id="contacto" className="py-24 bg-brand-black text-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-red/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-brand-red font-bold tracking-widest uppercase text-xs mb-2 block">Contacto</span>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Comience su Proyecto</h2>
          <p className="text-gray-400 font-light max-w-xl mx-auto text-lg">
            Cuéntenos su visión. Nosotros nos encargamos de la técnica, la precisión y la excelencia.
          </p>
        </div>

        {isSuccess ? (
          <div className="bg-white/5 border border-white/10 p-16 text-center rounded-sm animate-fade-in flex flex-col items-center backdrop-blur-sm">
            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6 text-green-400">
              <CheckCircle size={40} strokeWidth={1.5} />
            </div>
            <h3 className="text-3xl font-serif text-white mb-4">Mensaje Recibido</h3>
            <p className="text-gray-400 font-light text-lg max-w-md">Un especialista de Omega analizará su solicitud y le contactará en breve.</p>
            <button
              onClick={() => setIsSuccess(false)}
              className="mt-8 text-sm uppercase tracking-widest text-brand-red hover:text-white transition-colors"
            >
              Enviar otro mensaje
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-12 bg-white/5 p-8 md:p-12 rounded-sm border border-white/10 backdrop-blur-sm">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-2 group">
                <label className="text-xs uppercase tracking-widest text-gray-500 font-bold transition-colors group-focus-within:text-brand-red">Nombre</label>
                <input
                  required
                  type="text"
                  className="w-full border-b border-gray-700 py-4 focus:border-brand-red focus:outline-none transition-all bg-transparent text-white placeholder-gray-700 font-light text-xl"
                  placeholder="Ej. Juan Pérez"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                />
              </div>

              <div className="space-y-2 group">
                <label className="text-xs uppercase tracking-widest text-gray-500 font-bold transition-colors group-focus-within:text-brand-red">Email Corporativo</label>
                <input
                  required
                  type="email"
                  className="w-full border-b border-gray-700 py-4 focus:border-brand-red focus:outline-none transition-all bg-transparent text-white placeholder-gray-700 font-light text-xl"
                  placeholder="juan@empresa.com"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-2 group">
              <label className="text-xs uppercase tracking-widest text-gray-500 font-bold transition-colors group-focus-within:text-brand-red">Servicio de Interés</label>
              <select
                required
                className="w-full border-b border-gray-700 py-4 focus:border-brand-red focus:outline-none transition-all bg-transparent text-white font-light text-xl appearance-none rounded-none cursor-pointer"
                value={formState.service}
                onChange={(e) => setFormState({ ...formState, service: e.target.value })}
              >
                <option value="" disabled className="bg-brand-black text-gray-500">Seleccione una opción</option>
                <option value="offset" className="bg-brand-black">Impresión Offset Alta Gama</option>
                <option value="digital" className="bg-brand-black">Impresión Digital Premium</option>
                <option value="packaging" className="bg-brand-black">Packaging & Cajas</option>
                <option value="editorial" className="bg-brand-black">Editorial & Libros</option>
                <option value="eventos" className="bg-brand-black">Papelería para Eventos</option>
                <option value="otro" className="bg-brand-black">Otro Proyecto Especial</option>
              </select>
            </div>

            <div className="space-y-2 group">
              <label className="text-xs uppercase tracking-widest text-gray-500 font-bold transition-colors group-focus-within:text-brand-red">Detalles del Proyecto</label>
              <textarea
                required
                rows={3}
                className="w-full border-b border-gray-700 py-4 focus:border-brand-red focus:outline-none transition-all bg-transparent text-white placeholder-gray-700 font-light text-xl resize-none"
                placeholder="Describa formato, cantidad, tipo de papel y acabados deseados..."
                value={formState.details}
                onChange={(e) => setFormState({ ...formState, details: e.target.value })}
              />
            </div>

            <div className="pt-4">
              <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-700 border-dashed rounded-lg cursor-pointer hover:bg-white/5 hover:border-brand-red/50 transition-all duration-300 group">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <CloudUpload className="w-8 h-8 mb-3 text-gray-500 group-hover:text-brand-red transition-colors" strokeWidth={1} />
                  <p className="mb-1 text-sm text-gray-400 font-light"><span className="font-medium text-white">Click para subir referencia</span> o arrastrar archivo</p>
                  <p className="text-xs text-gray-600">PDF, AI, JPG (MAX. 10MB)</p>
                </div>
                <input type="file" className="hidden" onChange={handleFileChange} />
              </label>
              {formState.file && (
                <div className="mt-4 text-sm text-brand-red flex items-center gap-2 bg-brand-red/10 p-2 rounded px-4 inline-flex">
                  <CheckCircle size={14} /> Archivo seleccionado: {formState.file}
                </div>
              )}
            </div>

            <div className="flex justify-end pt-8">
              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative px-12 py-5 bg-white text-brand-black text-sm uppercase tracking-[0.2em] font-bold transition-all hover:bg-brand-red hover:text-white disabled:bg-gray-800 disabled:text-gray-500 disabled:cursor-not-allowed overflow-hidden"
              >
                <span className={`flex items-center gap-3 relative z-10 ${isSubmitting ? 'opacity-0' : 'opacity-100'}`}>
                  Enviar Solicitud <ArrowRight size={18} />
                </span>
                {isSubmitting && (
                  <span className="absolute inset-0 flex items-center justify-center">
                    <Loader2 className="animate-spin" size={24} />
                  </span>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactForm;