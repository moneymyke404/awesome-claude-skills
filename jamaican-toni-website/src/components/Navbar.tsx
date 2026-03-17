import { useState, useEffect } from 'react';
import { Search, ShoppingBag, Menu, X, User } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onNavigate: (page: string) => void;
  currentPage: string;
}

const links = [
  { label: 'Home',       page: 'home' },
  { label: 'Collection', page: 'collection' },
  { label: 'Philosophy', page: 'philosophy' },
  { label: 'Journal',    page: 'journal' },
  { label: 'Circle',     page: 'circle' },
  { label: 'Contact',    page: 'contact' },
];

export default function Navbar({ cartCount, onNavigate, currentPage }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const nav = (page: string) => { onNavigate(page); setOpen(false); };

  return (
    <>
      {/* Announcement bar */}
      <div className="bg-jt-charcoal text-jt-cream text-[10px] font-sans uppercase tracking-[0.3em] text-center py-2.5">
        ✦ Free Shipping on Orders Over $150 — Atlanta's Finest ✦
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-jt-cream/97 backdrop-blur-sm shadow-sm border-b border-jt-stone/30'
            : 'bg-jt-cream border-b border-jt-stone/20'
        }`}
      >
        {/* Desktop nav */}
        <div className="hidden lg:flex items-center justify-between max-w-7xl mx-auto px-8 py-4">
          {/* Left links */}
          <nav className="flex items-center gap-8">
            {links.slice(0, 3).map((l) => (
              <button
                key={l.page}
                onClick={() => nav(l.page)}
                className={`text-[11px] font-sans uppercase tracking-[0.2em] transition-colors ${
                  currentPage === l.page ? 'text-jt-gold' : 'text-jt-text hover:text-jt-gold'
                }`}
              >
                {l.label}
              </button>
            ))}
          </nav>

          {/* Logo center */}
          <button
            onClick={() => nav('home')}
            className="flex flex-col items-center group"
          >
            <span className="font-display text-2xl font-bold tracking-[0.15em] text-jt-text group-hover:text-jt-gold transition-colors uppercase">
              Jamaican Toni
            </span>
            <span className="text-[8px] font-sans uppercase tracking-[0.4em] text-jt-gold mt-0.5">
              Atlanta · Est. 2024
            </span>
          </button>

          {/* Right links + icons */}
          <div className="flex items-center gap-8">
            {links.slice(3).map((l) => (
              <button
                key={l.page}
                onClick={() => nav(l.page)}
                className={`text-[11px] font-sans uppercase tracking-[0.2em] transition-colors ${
                  currentPage === l.page ? 'text-jt-gold' : 'text-jt-text hover:text-jt-gold'
                }`}
              >
                {l.label}
              </button>
            ))}

            <div className="flex items-center gap-4 ml-4 border-l border-jt-stone/40 pl-6">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="text-jt-text hover:text-jt-gold transition-colors"
                aria-label="Search"
              >
                <Search size={17} />
              </button>
              <button className="text-jt-text hover:text-jt-gold transition-colors" aria-label="Account">
                <User size={17} />
              </button>
              <button
                onClick={() => nav('checkout')}
                className="relative text-jt-text hover:text-jt-gold transition-colors"
                aria-label="Cart"
              >
                <ShoppingBag size={17} />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 w-4 h-4 bg-jt-gold text-jt-cream text-[9px] font-bold rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
              <button
                onClick={() => nav('collection')}
                className="btn-gold text-[10px] py-2.5 px-5 ml-1"
              >
                Shop Now
              </button>
            </div>
          </div>
        </div>

        {/* Mobile nav */}
        <div className="lg:hidden flex items-center justify-between px-5 py-4">
          <button onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X size={22} className="text-jt-text" /> : <Menu size={22} className="text-jt-text" />}
          </button>

          <button onClick={() => nav('home')} className="font-display text-xl font-bold tracking-wider text-jt-text">
            Jamaican Toni
          </button>

          <button onClick={() => nav('checkout')} className="relative text-jt-text">
            <ShoppingBag size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 w-4 h-4 bg-jt-gold text-jt-cream text-[9px] font-bold rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>

        {/* Mobile drawer */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 border-t border-jt-stone/20 ${open ? 'max-h-screen' : 'max-h-0'}`}>
          <div className="px-5 py-4 flex flex-col gap-1 bg-jt-cream">
            {links.map((l) => (
              <button
                key={l.page}
                onClick={() => nav(l.page)}
                className="text-left text-sm font-sans uppercase tracking-widest text-jt-text py-3 border-b border-jt-stone/20 hover:text-jt-gold transition-colors"
              >
                {l.label}
              </button>
            ))}
            <button onClick={() => nav('collection')} className="btn-gold text-center mt-4">Shop Now</button>
          </div>
        </div>

        {/* Search bar */}
        {searchOpen && (
          <div className="border-t border-jt-stone/20 bg-jt-cream px-8 py-3">
            <input
              autoFocus
              type="text"
              placeholder="Search pieces..."
              className="w-full bg-transparent text-sm font-sans text-jt-text placeholder:text-jt-muted focus:outline-none"
              onBlur={() => setSearchOpen(false)}
            />
          </div>
        )}
      </header>
    </>
  );
}
