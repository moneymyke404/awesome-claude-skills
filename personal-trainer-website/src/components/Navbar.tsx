import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Transformations', href: '#transformations' },
  { label: 'Corporate', href: '#corporate' },
  { label: 'Contact', href: '#contact' },
];

const sectionIds = navLinks.map((l) => l.href.slice(1));

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Active section detection
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { threshold: 0.4, rootMargin: '-60px 0px -40% 0px' }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <nav
      className={`fixed top-0.5 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? 'bg-brand-black/96 backdrop-blur-md border-b border-brand-gray-mid shadow-xl shadow-black/60'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <a href="#home" className="flex flex-col leading-none group" aria-label="D.S.I Health Training">
            <span className="font-display text-2xl font-bold text-brand-gold tracking-wider group-hover:text-brand-gold-light transition-colors">
              D.S.I
            </span>
            <span className="text-[9px] font-sans text-brand-muted uppercase tracking-[0.25em]">
              Health Training LLC
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const id = link.href.slice(1);
              const isActive = active === id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative text-[11px] font-sans font-medium uppercase tracking-widest transition-colors pb-0.5 ${
                    isActive ? 'text-brand-gold' : 'text-brand-muted hover:text-brand-text'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-px bg-brand-gold" />
                  )}
                </a>
              );
            })}
            <a
              href="#contact"
              className="btn-primary text-[11px] py-2.5 px-6 ml-2"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-brand-text hover:text-brand-gold transition-colors p-1"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } bg-brand-black border-t border-brand-gray-mid`}
      >
        <div className="px-4 pt-2 pb-6 flex flex-col gap-1">
          {navLinks.map((link) => {
            const id = link.href.slice(1);
            const isActive = active === id;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`text-sm font-sans uppercase tracking-widest py-3 border-b border-brand-gray-mid transition-colors ${
                  isActive ? 'text-brand-gold' : 'text-brand-muted hover:text-brand-gold'
                }`}
              >
                {link.label}
              </a>
            );
          })}
          <a
            href="#contact"
            className="btn-primary text-center mt-4"
            onClick={() => setOpen(false)}
          >
            Book Now
          </a>
        </div>
      </div>
    </nav>
  );
}
