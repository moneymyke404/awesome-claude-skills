import { useEffect, useState } from 'react';
import { SlidersHorizontal, ChevronDown, ArrowRight } from 'lucide-react';
import { products } from '../data/products';

interface CollectionPageProps {
  onNavigate: (page: string, productId?: string) => void;
}

const filters = ['All', 'Dresses', 'Outerwear', 'Co-Ords', 'Essentials'];
const sortOptions = ['Featured', 'Price: Low to High', 'Price: High to Low', 'Newest'];

export default function CollectionPage({ onNavigate }: CollectionPageProps) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [sortOpen, setSortOpen] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.05 }
    );
    document.querySelectorAll('.reveal,.reveal-stagger,.clip-from-bottom').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-jt-cream">

      {/* ── HERO BANNER — minimal, typographic (Net-a-Porter) ── */}
      <div className="border-b border-jt-stone/15 py-16 lg:py-22 text-center bg-jt-cream bg-noise">
        <p className="eyebrow mb-4 animate-fade-up">Limited Pieces</p>
        <h1 className="font-display text-display-lg font-semibold text-jt-text animate-fade-up delay-100">
          The <span className="italic font-serif font-normal">Collection</span>
        </h1>
        <p className="font-serif italic text-jt-muted text-base mt-4 animate-fade-up delay-200">
          Crafted in limited runs. Made to be remembered.
        </p>

        {/* Breadcrumb */}
        <div className="flex items-center justify-center gap-2 mt-8 animate-fade-up delay-300">
          <button onClick={() => onNavigate('home')} className="text-[11px] font-sans text-jt-muted hover:text-jt-text transition-colors">Home</button>
          <span className="text-jt-stone/40 text-xs">/</span>
          <span className="text-[11px] font-sans text-jt-text">Collection</span>
        </div>
      </div>

      {/* ── FILTER BAR — sticky, clean ── */}
      <div className="sticky top-[72px] z-30 bg-jt-cream/98 backdrop-blur-sm border-b border-jt-stone/15">
        <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4 overflow-x-auto">
            <span className="hidden md:inline text-[10px] font-sans uppercase tracking-[0.3em] text-jt-muted flex-shrink-0">Filter:</span>
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`text-[11px] font-sans uppercase tracking-[0.18em] whitespace-nowrap px-4 py-2 border transition-all duration-300 ${
                  activeFilter === f
                    ? 'bg-jt-charcoal text-jt-cream border-jt-charcoal'
                    : 'bg-transparent text-jt-text/60 border-jt-stone/20 hover:border-jt-charcoal/40 hover:text-jt-text'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Sort dropdown */}
          <div className="relative hidden md:block">
            <button
              onClick={() => setSortOpen(!sortOpen)}
              className="flex items-center gap-2 text-[11px] font-sans uppercase tracking-[0.18em] text-jt-text/60 hover:text-jt-text transition-colors"
            >
              <SlidersHorizontal size={13} />
              Sort
              <ChevronDown size={12} className={`transition-transform ${sortOpen ? 'rotate-180' : ''}`} />
            </button>
            {sortOpen && (
              <div className="absolute right-0 top-full mt-2 bg-jt-cream border border-jt-stone/20 shadow-lg py-1 min-w-[180px] z-20 animate-fade-in">
                {sortOptions.map(s => (
                  <button
                    key={s}
                    onClick={() => setSortOpen(false)}
                    className="block w-full text-left px-4 py-2.5 text-sm font-sans text-jt-text/70 hover:bg-jt-cream-dk hover:text-jt-text transition-colors"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── PRODUCT GRID — 4-column with Net-a-Porter quick-add hover ── */}
      <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12 py-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 lg:gap-x-5 lg:gap-y-14 reveal-stagger">
          {products.map(p => (
            <div
              key={p.id}
              className="group cursor-pointer"
              onClick={() => onNavigate('product', p.id)}
            >
              {/* Image */}
              <div className={`product-image aspect-[3/4] ${p.heroBg} relative mb-4`}>
                <div className="absolute inset-0 bg-noise" />
                {p.badge && (
                  <div className="absolute top-3 left-3 z-10">
                    <span className="bg-jt-charcoal text-jt-cream text-[9px] font-sans uppercase tracking-[0.25em] px-2.5 py-1">
                      {p.badge}
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-[80px] font-bold text-white/6 select-none uppercase leading-none">
                    {p.name.split(' ').map(w => w[0]).join('')}
                  </span>
                </div>
                {/* Quick-add bar */}
                <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-expo-out bg-jt-charcoal/95 backdrop-blur-sm p-3 flex items-center justify-between">
                  <span className="text-[9px] font-sans uppercase tracking-[0.2em] text-jt-cream/70">Quick Add</span>
                  <div className="flex gap-1.5">
                    {p.sizes.slice(0, 4).map(s => (
                      <button key={s} className="w-7 h-7 border border-jt-cream/15 text-jt-cream text-[9px] font-sans hover:bg-jt-cream hover:text-jt-charcoal transition-colors duration-200">
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Info */}
              <p className="text-[9px] font-sans uppercase tracking-[0.3em] text-jt-muted mb-1">{p.tag}</p>
              <h3 className="font-sans text-sm text-jt-text leading-tight group-hover:text-jt-gold transition-colors duration-300 mb-1">{p.name}</h3>
              <p className="font-sans text-sm text-jt-muted">${p.price}</p>
            </div>
          ))}
        </div>

        {/* Footer banner */}
        <div className="mt-20 border border-jt-stone/20 p-10 lg:p-14 flex flex-col lg:flex-row items-center justify-between gap-6 reveal">
          <div>
            <p className="eyebrow mb-2">Jamaican Toni Promise</p>
            <p className="font-display text-editorial-lg font-semibold text-jt-text">
              Limited. Intentional. <span className="italic font-serif font-normal">Yours.</span>
            </p>
            <p className="font-serif italic text-jt-muted text-sm mt-2 max-w-md">
              Every piece is produced in limited quantities. When it's gone, it's gone. We don't restock — we reimagine.
            </p>
          </div>
          <button onClick={() => onNavigate('philosophy')} className="btn-primary flex-shrink-0">
            <span>Our Philosophy</span><ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
