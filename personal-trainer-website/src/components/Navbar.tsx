import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Transformations', href: '#transformations' },
  { label: 'Corporate Wellness', href: '#corporate' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-brand-black/95 backdrop-blur-sm shadow-lg shadow-black/50' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <a href="#home" className="flex flex-col leading-none group">
            <span className="font-display text-2xl font-bold text-brand-gold tracking-wider group-hover:text-brand-gold-light transition-colors">
              D.S.I
            </span>
            <span className="text-[10px] font-sans text-brand-muted uppercase tracking-widest">
              Health Training LLC
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-sans font-medium uppercase tracking-widest text-brand-muted hover:text-brand-gold transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" className="btn-primary text-xs py-2.5 px-6 ml-4">
              Book Now
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-brand-text hover:text-brand-gold transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-brand-dark border-t border-brand-gray-mid">
          <div className="px-4 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-sans uppercase tracking-widest text-brand-muted hover:text-brand-gold transition-colors py-2 border-b border-brand-gray-mid"
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" className="btn-primary text-center mt-2" onClick={() => setOpen(false)}>
              Book Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
