import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Determine active section only on home page
      if (location.pathname === '/') {
        const sections = ['servicios', 'portafolio', 'contacto'];
        const current = sections.find(section => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top >= 0 && rect.top <= 300;
          }
          return false;
        });
        if (current) setActiveSection(current);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (href.startsWith('#')) {
      const targetId = href.substring(1);
      if (location.pathname !== '/') {
        navigate('/', { state: { scrollTo: targetId } });
      } else {
        const element = document.getElementById(targetId);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(href);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Handle scroll after navigation from another page
  useEffect(() => {
    if (location.state && (location.state as any).scrollTo) {
      const targetId = (location.state as any).scrollTo;
      setTimeout(() => {
        const element = document.getElementById(targetId);
        element?.scrollIntoView({ behavior: 'smooth' });
        // Clear state
        window.history.replaceState({}, document.title);
      }, 100);
    }
  }, [location]);

  const navLinks = [
    { name: 'Historia', href: '/historia' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Portafolio', href: '#portafolio' },
    { name: 'Contacto', href: '#contacto', isPrimary: true },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? 'bg-white/80 backdrop-blur-md shadow-sm py-3 border-b border-white/20'
        : 'bg-transparent py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo Area */}
        <div className="flex items-center gap-3 group cursor-pointer" onClick={() => {
          navigate('/');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}>
          <img
            src="/Logo/LOGO_OMEGA.png"
            alt="Imprenta Omega"
            className={`transition-all duration-500 object-contain ${isScrolled ? 'h-10' : 'h-14'}`}
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavigation(e, link.href)}
              className={`text-xs font-bold tracking-[0.15em] uppercase transition-all duration-300 cursor-pointer ${link.isPrimary
                ? 'px-8 py-3 bg-brand-black text-white hover:bg-brand-red hover:shadow-lg hover:-translate-y-0.5'
                : `text-gray-600 hover:text-brand-black relative after:content-[""] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-brand-red after:transition-all hover:after:w-full ${(activeSection === link.href.substring(1) && location.pathname === '/') || (location.pathname === link.href)
                  ? 'text-brand-black after:w-full' : ''}`
                }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-brand-black hover:text-brand-red transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl shadow-xl transition-all duration-500 overflow-hidden md:hidden ${isMobileMenuOpen ? 'max-h-screen py-12 opacity-100' : 'max-h-0 py-0 opacity-0'}`}>
        <div className="flex flex-col items-center gap-8">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavigation(e, link.href)}
              style={{ transitionDelay: `${index * 50}ms` }}
              className={`text-sm font-bold tracking-[0.2em] uppercase transform transition-all duration-300 cursor-pointer ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'} ${link.isPrimary ? 'text-brand-red' : 'text-brand-black'
                }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;