import { useState, useEffect } from 'react';
import { Search, ShoppingBag, Menu, X, User, Heart, ArrowRight } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onNavigate: (page: string) => void;
  currentPage: string;
}

const navLinks = [
  { label: 'New In',      page: 'collection' },
  { label: 'Collection',  page: 'collection' },
  { label: 'The Edit',    page: 'journal' },
  { label: 'Philosophy',  page: 'philosophy' },
];

const megaMenuItems = [
  { cat: 'Dresses',    items: ['Island Reverie Dress', 'Palm Midi', 'Sunset Wrap'] },
  { cat: 'Outerwear',  items: ['Kingston Blazer', 'Montego Cape', 'Trench'] },
  { cat: 'Co-Ords',    items: ['Toni Co-Ord Set', 'Linen Duo', 'Silk Pairing'] },
  { cat: 'Essentials', items: ['Aurion Wrap Top', 'Heritage Tee', 'Classic Tank'] },
];

export default function Navbar({ cartCount, onNavigate, currentPage }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mega on route change
  useEffect(() => { setMegaOpen(false); setMobileOpen(false); }, [currentPage]);

  const nav = (p: string) => { onNavigate(p); setMobileOpen(false); setMegaOpen(false); };

  return (
    <>
      {/* ── ANNOUNCEMENT BAR ── (Net-a-Porter style) */}
      <div className="bg-jt-charcoal text-jt-cream/80 text-[10px] font-sans uppercase tracking-[0.35em] text-center py-2.5 relative overflow-hidden">
        <div className="animate-fade-in">
          Complimentary Shipping on Orders Over $150
          <span className="mx-3 text-jt-gold/60">|</span>
          Atlanta's Finest Caribbean Luxury
        </div>
      </div>

      {/* ── MAIN NAVBAR ── */}
      <header
        className={`sticky top-0 z-50 transition-all duration-600 ease-expo-out ${
          scrolled
            ? 'bg-jt-cream/98 backdrop-blur-md shadow-[0_1px_0_0_rgba(0,0,0,0.06)]'
            : 'bg-jt-cream'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12">
          <div className="flex items-center justify-between h-16 lg:h-[72px]">

            {/* LEFT: Nav Links (desktop) */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <button
                  key={link.page + link.label}
                  onClick={() => {
                    if (link.label === 'Collection') setMegaOpen(!megaOpen);
                    else nav(link.page);
                  }}
                  onMouseEnter={() => {
                    if (link.label === 'Collection') setMegaOpen(true);
                  }}
                  className={`relative text-[11px] font-sans uppercase tracking-[0.18em] transition-colors duration-300 py-1 group ${
                    currentPage === link.page ? 'text-jt-text' : 'text-jt-text/70 hover:text-jt-text'
                  }`}
                >
                  <span>{link.label}</span>
                  {/* Underline animation (Build in Amsterdam style) */}
                  <span className={`absolute -bottom-0.5 left-0 h-[1px] bg-jt-text transition-all duration-500 ease-expo-out ${
                    currentPage === link.page ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </button>
              ))}
            </nav>

            {/* CENTER: Logo (Telfar-inspired bold monogram) */}
            <button
              onClick={() => nav('home')}
              className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center group"
            >
              <span className="font-display text-[22px] lg:text-[26px] font-semibold tracking-[0.12em] text-jt-text transition-all duration-500 group-hover:tracking-[0.2em]">
                JAMAICAN TONI
              </span>
            </button>

            {/* RIGHT: Icons */}
            <div className="flex items-center gap-5 ml-auto">
              {/* Search */}
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="hidden md:flex text-jt-text/70 hover:text-jt-text transition-colors duration-300"
                aria-label="Search"
              >
                <Search size={18} strokeWidth={1.5} />
              </button>

              {/* Wishlist */}
              <button className="hidden md:flex text-jt-text/70 hover:text-jt-text transition-colors duration-300" aria-label="Wishlist">
                <Heart size={18} strokeWidth={1.5} />
              </button>

              {/* Account */}
              <button className="hidden md:flex text-jt-text/70 hover:text-jt-text transition-colors duration-300" aria-label="Account">
                <User size={18} strokeWidth={1.5} />
              </button>

              {/* Bag */}
              <button
                onClick={() => nav('checkout')}
                className="relative text-jt-text/70 hover:text-jt-text transition-colors duration-300"
                aria-label="Shopping bag"
              >
                <ShoppingBag size={18} strokeWidth={1.5} />
                {cartCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 w-[17px] h-[17px] bg-jt-charcoal text-jt-cream text-[9px] font-semibold rounded-full flex items-center justify-center animate-scale-in">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Mobile menu toggle */}
              <button
                className="lg:hidden text-jt-text"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Menu"
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
              </button>
            </div>
          </div>
        </div>

        {/* ── MEGA MENU (Net-a-Porter editorial dropdown) ── */}
        <div
          className={`hidden lg:block absolute left-0 right-0 bg-jt-cream border-t border-jt-stone/15 overflow-hidden transition-all duration-500 ease-expo-out ${
            megaOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
          }`}
          onMouseLeave={() => setMegaOpen(false)}
        >
          <div className="max-w-[1440px] mx-auto px-12 py-10">
            <div className="grid grid-cols-5 gap-10">
              {megaMenuItems.map(({ cat, items }) => (
                <div key={cat}>
                  <p className="text-[10px] font-sans uppercase tracking-[0.3em] text-jt-muted mb-5">{cat}</p>
                  <ul className="space-y-3">
                    {items.map(item => (
                      <li key={item}>
                        <button
                          onClick={() => nav('collection')}
                          className="text-sm font-sans text-jt-text/80 hover:text-jt-text transition-colors duration-300"
                        >
                          {item}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Editorial feature block */}
              <div className="bg-jt-forest relative overflow-hidden group cursor-pointer" onClick={() => nav('journal')}>
                <div className="absolute inset-0 bg-noise" />
                <div className="relative p-6 flex flex-col justify-end h-full min-h-[200px]">
                  <p className="text-[9px] font-sans uppercase tracking-[0.4em] text-jt-gold mb-2">The Edit</p>
                  <p className="font-display text-lg text-jt-cream leading-tight mb-3">
                    Caribbean Heat: The Summer Lookbook
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-sans uppercase tracking-widest text-jt-cream/70 group-hover:text-jt-gold transition-colors">
                    Read Now <ArrowRight size={11} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── SEARCH OVERLAY ── */}
        <div className={`absolute left-0 right-0 bg-jt-cream border-t border-jt-stone/15 transition-all duration-400 ease-expo-out overflow-hidden ${
          searchOpen ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="max-w-[1440px] mx-auto px-12 py-5 flex items-center gap-4">
            <Search size={16} className="text-jt-muted" />
            <input
              autoFocus={searchOpen}
              type="text"
              placeholder="Search pieces, collections, editorials..."
              className="flex-1 bg-transparent text-sm font-sans text-jt-text placeholder:text-jt-muted/60 focus:outline-none"
              onBlur={() => setTimeout(() => setSearchOpen(false), 200)}
            />
            <button onClick={() => setSearchOpen(false)} className="text-jt-muted hover:text-jt-text transition-colors">
              <X size={16} />
            </button>
          </div>
        </div>

        {/* ── MOBILE DRAWER (full-screen Telfar style) ── */}
        <div className={`lg:hidden fixed inset-0 top-0 bg-jt-cream z-[100] transition-all duration-600 ease-expo-out ${
          mobileOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}>
          <div className="flex items-center justify-between p-5 border-b border-jt-stone/15">
            <span className="font-display text-lg font-semibold tracking-[0.12em] text-jt-text">JAMAICAN TONI</span>
            <button onClick={() => setMobileOpen(false)} aria-label="Close menu"><X size={22} className="text-jt-text" /></button>
          </div>
          <div className="p-8 flex flex-col gap-0">
            {['Home', 'New In', 'Collection', 'The Edit', 'Philosophy', 'Contact'].map((label, i) => (
              <button
                key={label}
                onClick={() => nav(label.toLowerCase().replace('new in', 'collection').replace('the edit', 'journal'))}
                className="text-left font-display text-3xl font-semibold text-jt-text py-3 border-b border-jt-stone/10 hover:text-jt-gold transition-colors"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                {label}
              </button>
            ))}
            <div className="mt-10 flex gap-6">
              <button className="flex items-center gap-2 text-[11px] font-sans uppercase tracking-widest text-jt-muted"><Search size={15} /> Search</button>
              <button className="flex items-center gap-2 text-[11px] font-sans uppercase tracking-widest text-jt-muted"><Heart size={15} /> Wishlist</button>
              <button className="flex items-center gap-2 text-[11px] font-sans uppercase tracking-widest text-jt-muted"><User size={15} /> Account</button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
