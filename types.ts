export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Corporativo' | 'Eventos' | 'Empaques' | 'Editorial';
  imageUrl: string;
  description: string;
  year: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  company: string;
  quote: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}