import { useEffect, useState } from 'react';
import { SlidersHorizontal } from 'lucide-react';
import { products } from '../data/products';

interface CollectionPageProps {
  onNavigate: (page: string, productId?: string) => void;
}

const filters = ['All', 'Dresses', 'Blazers', 'Sets', 'Tops'];

export default function CollectionPage({ onNavigate }: CollectionPageProps) {
  const [active, setActive] = useState('All');

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.05 }
    );
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-jt-cream">
      {/* Header banner */}
      <div className="relative bg-jt-charcoal py-20 overflow-hidden">
        <div className="absolute inset-0 bg-texture-dark" />
        <div
          className="absolute inset-0 opacity-10"
          style={{ background: 'radial-gradient(ellipse at center, #C9963A 0%, transparent 65%)' }}
        />
        <div className="relative text-center">
          <p className="text-[10px] font-sans uppercase tracking-[0.4em] text-jt-gold mb-4">Limited Pieces</p>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-jt-cream uppercase tracking-wide">
            The Collection
          </h1>
          <p className="font-serif italic text-jt-stone/70 text-lg mt-4">
            Crafted in limited runs. Made to be remembered.
          </p>
        </div>
      </div>

      {/* Filter bar */}
      <div className="border-b border-jt-stone/30 bg-jt-cream sticky top-[calc(var(--navbar-h,120px))] z-30">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
          <div className="flex gap-1 flex-wrap">
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`text-[11px] font-sans uppercase tracking-widest px-4 py-2 border transition-all ${
                  active === f
                    ? 'bg-jt-charcoal text-jt-cream border-jt-charcoal'
                    : 'bg-transparent text-jt-muted border-jt-stone/30 hover:border-jt-charcoal hover:text-jt-text'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          <button className="flex items-center gap-2 text-[11px] font-sans uppercase tracking-widest text-jt-muted hover:text-jt-text transition-colors">
            <SlidersHorizontal size={14} />
            Filter
          </button>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {products.map((p, i) => (
            <div
              key={p.id}
              className="group cursor-pointer reveal"
              style={{ transitionDelay: `${i * 70}ms` }}
              onClick={() => onNavigate('product', p.id)}
            >
              {/* Image */}
              <div className={`relative aspect-[3/4] ${p.heroBg} overflow-hidden mb-4`}>
                <div className="absolute inset-0 bg-texture-dark" />
                {p.badge && (
                  <div className="absolute top-3 left-3 bg-jt-gold text-jt-cream text-[9px] font-sans font-bold uppercase tracking-widest px-2.5 py-1 z-10">
                    {p.badge}
                  </div>
                )}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-7xl font-bold text-white/10 select-none uppercase">
                    {p.name.split(' ').map(w => w[0]).join('')}
                  </span>
                </div>
                {/* Hover */}
                <div className="absolute inset-0 bg-jt-charcoal/0 group-hover:bg-jt-charcoal/25 transition-all duration-300 flex items-end justify-center pb-5">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity btn-outline-light text-[10px] py-2 px-5">
                    View Piece
                  </span>
                </div>
              </div>
              {/* Meta */}
              <p className="section-eyebrow mb-1">{p.tag}</p>
              <h3 className="font-display text-base font-bold text-jt-text uppercase tracking-wide leading-tight mb-1">
                {p.name}
              </h3>
              <p className="font-sans text-jt-muted text-sm mb-1">${p.price}</p>
              {/* Color dots */}
              <div className="flex gap-1.5 mt-2">
                {p.thumbBg.map((bg, ci) => (
                  <div key={ci} className={`w-3 h-3 rounded-full border border-jt-stone/20 ${bg}`} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Philosophy strip */}
        <div className="border border-jt-stone/30 p-10 text-center reveal">
          <p className="section-eyebrow mb-4">Jamaican Toni Promise</p>
          <p className="font-display text-2xl text-jt-text font-bold uppercase tracking-wide mb-2">
            Limited. Intentional. Yours.
          </p>
          <p className="font-serif italic text-jt-muted text-base max-w-lg mx-auto">
            Every piece is produced in limited quantities. When it's gone, it's gone. We don't restock — we reimagine.
          </p>
        </div>
      </div>
    </div>
  );
}
