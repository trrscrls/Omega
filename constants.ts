import { Service, PortfolioItem, Testimonial, TimelineEvent } from './types';

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'Papelería Corporativa',
    description: 'Talonarios autocopiativos, tarjetas de presentación, tarjetas de agradecimiento, carpetas y hojas membretadas.',
    iconName: 'briefcase'
  },
  {
    id: 's2',
    title: 'Publicidad y Marketing',
    description: 'Flyers, pendones, palomas, letreros, afiches y material promocional de alto impacto.',
    iconName: 'ticket'
  },
  {
    id: 's3',
    title: 'Merchandising',
    description: 'Stickers, chapitas, magneticos, credenciales, calendarios y artículos personalizados.',
    iconName: 'sparkles'
  },
  {
    id: 's4',
    title: 'Textil y Estampados',
    description: 'Jockeys, poleras, polerones, bolsas y todo tipo de estampados textiles.',
    iconName: 'shirt'
  },
  {
    id: 's5',
    title: 'Artículos Promocionales',
    description: 'Tazones, llaveros y regalos corporativos personalizados.',
    iconName: 'package'
  },
  {
    id: 's6',
    title: 'Servicios de Impresión',
    description: 'Planos, recetarios, fotocopias, anillados y soluciones de impresión digital y offset.',
    iconName: 'printer'
  }
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: 'p1',
    title: 'Informe Anual Banco Horizon',
    category: 'Corporativo',
    imageUrl: 'https://picsum.photos/800/600?random=1',
    description: 'Impresión offset a 5 tintas sobre papel algodón importado con detalles en foil plata.',
    year: '2023'
  },
  {
    id: 'p2',
    title: 'Packaging Cerveza Artesanal',
    category: 'Empaques',
    imageUrl: 'https://picsum.photos/800/600?random=2',
    description: 'Caja rígida con acabado soft-touch y barniz sectorizado brillante.',
    year: '2023'
  },
  {
    id: 'p3',
    title: 'Boda Real Invitaciones',
    category: 'Eventos',
    imageUrl: 'https://picsum.photos/800/600?random=3',
    description: 'Letterpress sobre papel hecho a mano de 600gr. Sobre forrado en seda.',
    year: '2022'
  },
  {
    id: 'p4',
    title: 'Libro de Arte "Silencios"',
    category: 'Editorial',
    imageUrl: 'https://picsum.photos/800/600?random=4',
    description: 'Encuadernación japonesa expuesta. Impresión de alta fidelidad fotográfica.',
    year: '2024'
  },
  {
    id: 'p5',
    title: 'Kit de Bienvenida TechCorp',
    category: 'Corporativo',
    imageUrl: 'https://picsum.photos/800/600?random=5',
    description: 'Caja magnética conteniendo libreta, bolígrafo y brochure corporativo.',
    year: '2023'
  },
  {
    id: 'p6',
    title: 'Catálogo Joyería Luna',
    category: 'Editorial',
    imageUrl: 'https://picsum.photos/800/600?random=6',
    description: 'Papel couché mate con tintas metálicas Pantone.',
    year: '2022'
  }
];

export const TIMELINE: TimelineEvent[] = [
  {
    year: '1989',
    title: 'Fundación',
    description: 'Iniciamos con una pequeña prensa Heidelberg y una visión de calidad intransigente.'
  },
  {
    year: '1995',
    title: 'Expansión Offset',
    description: 'Adquisición de tecnología alemana de 4 colores para servir al sector editorial.'
  },
  {
    year: '2010',
    title: 'Era Digital',
    description: 'Integración de impresión digital de alta gama para tirajes cortos y personalizados.'
  },
  {
    year: '2024',
    title: 'Sostenibilidad',
    description: 'Certificación de procesos eco-amigables y uso de papeles 100% reciclados y libres de ácido.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    clientName: 'Roberto M.',
    company: 'Director Creativo, Estudio Alpha',
    quote: 'La atención al detalle de Omega es insuperable. Entienden que el papel es parte del diseño, no solo el soporte.'
  },
  {
    id: 't2',
    clientName: 'Ana Sofía L.',
    company: 'Event Planner',
    quote: 'Para mis eventos de lujo, no confío en nadie más. Los acabados y la puntualidad son siempre perfectos.'
  }
];