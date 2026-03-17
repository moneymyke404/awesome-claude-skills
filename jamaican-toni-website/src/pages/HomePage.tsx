import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Star, ChevronDown } from 'lucide-react';
import { products } from '../data/products';

interface HomePageProps {
  onNavigate: (page: string, productId?: string) => void;
}

// Scroll-reveal hook
function useReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

// Marquee ticker items
const marqueeItems = [
  'JAMAICAN TONI', 'ATLANTA, GA', 'CARIBBEAN SOUL', 'ATLANTA BOLD',
  'LIMITED PIECES', 'ELEVATED PRESENCE', 'ROOTED IN HERITAGE',
  'JAMAICAN TONI', 'ATLANTA, GA', 'CARIBBEAN SOUL', 'ATLANTA BOLD',
  'LIMITED PIECES', 'ELEVATED PRESENCE', 'ROOTED IN HERITAGE',
];

const pillars = [
  { word: 'Heritage', sub: 'Rooted in Caribbean culture' },
  { word: 'Elevation', sub: 'Every piece, intentional' },
  { word: 'Presence', sub: 'Worn to be remembered' },
  { word: 'Atlanta', sub: 'Made for the city\'s finest' },
];

const testimonials = [
  { quote: "I wore the Island Reverie Dress to a gallery opening and received compliments all evening. Jamaican Toni is in a league of its own.", name: 'Denise A.', city: 'Atlanta, GA', stars: 5 },
  { quote: "The Kingston Blazer is the most thoughtful piece I own. The lining alone tells a story. Absolute quality.", name: 'Marcus J.', city: 'Miami, FL', stars: 5 },
  { quote: "Finally a brand that speaks to my Caribbean roots without sacrificing luxury. Toni gets it.", name: 'Yvonne P.', city: 'New York, NY', stars: 5 },
];

export default function HomePage({ onNavigate }: HomePageProps) {
  useReveal();
  const [email, setEmail] = useState('');
  const [joined, setJoined] = useState(false);

  return (
    <div>
      {/* ── HERO ── */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-jt-cream">
        {/* Texture overlay */}
        <div className="absolute inset-0 bg-texture-light opacity-80" />

        {/* Left warm tone block */}
        <div
          className="absolute left-0 top-0 bottom-0 w-1/2 opacity-20"
          style={{ background: 'linear-gradient(to right, #C9963A22, transparent)' }}
        />

        {/* Right image placeholder — dark forest green block */}
        <div className="absolute right-0 top-0 bottom-0 w-[55%] bg-gradient-to-bl from-jt-forest via-jt-forest-lt to-jt-espresso">
          <div className="absolute inset-0 bg-texture-dark opacity-60" />
          {/* Decorative circle glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] aspect-square rounded-full opacity-20"
            style={{ background: 'radial-gradient(circle, #C9963A 0%, transparent 70%)' }}
          />
          {/* Model placeholder text */}
          <div className="absolute bottom-10 right-10 text-jt-gold/30 font-display text-[80px] font-bold leading-none select-none">
            JT
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full grid lg:grid-cols-2 items-center gap-10 py-16">
          <div>
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="h-px w-8 bg-jt-gold" />
              <span className="section-eyebrow">Atlanta, Georgia</span>
              <div className="h-px w-8 bg-jt-gold" />
            </div>

            {/* Headline */}
            <h1 className="font-display font-bold leading-none text-jt-text mb-6">
              <span className="block text-5xl md:text-6xl lg:text-7xl">Wear Heritage.</span>
              <span className="block text-5xl md:text-6xl lg:text-7xl text-jt-gold mt-1">Live Bold.</span>
            </h1>

            {/* Subhead */}
            <p className="font-sans text-jt-muted text-base md:text-lg leading-relaxed max-w-md mb-4">
              Jamaican Toni is engineered for Caribbean souls living the Atlanta life — for clarity, confidence, and elevated presence.
            </p>

            {/* Philosophy line */}
            <div className="flex items-center gap-3 mb-10">
              <ArrowRight size={12} className="text-jt-gold" />
              <span className="text-[10px] font-sans uppercase tracking-[0.35em] text-jt-gold">
                Designed with the frequency of island love
              </span>
              <ArrowRight size={12} className="text-jt-gold" />
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <button onClick={() => onNavigate('collection')} className="btn-dark flex items-center gap-2">
                Shop the Collection <ArrowRight size={14} />
              </button>
              <button onClick={() => onNavigate('philosophy')} className="btn-outline-dark">
                Discover the Philosophy
              </button>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <a href="#pillars" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-jt-muted animate-bounce z-10">
          <ChevronDown size={24} />
        </a>
      </section>

      {/* ── MARQUEE ── */}
      <div className="bg-jt-charcoal py-3.5 overflow-hidden border-y border-jt-gold/20">
        <div className="flex whitespace-nowrap animate-marquee">
          {marqueeItems.map((item, i) => (
            <span key={i} className="inline-flex items-center gap-5 mx-5">
              <span className="text-[11px] font-sans uppercase tracking-[0.35em] text-jt-cream/70">{item}</span>
              <span className="text-jt-gold">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── FOUR PILLARS ── */}
      <section id="pillars" className="py-16 bg-jt-cream border-b border-jt-stone/30">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-jt-stone/30">
          {pillars.map(({ word, sub }) => (
            <div key={word} className="text-center px-6 py-8 reveal">
              <div className="font-display text-xl font-bold text-jt-text uppercase tracking-wider mb-1">{word}</div>
              <div className="text-[10px] font-sans text-jt-muted uppercase tracking-wider">{sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── COLLECTION PREVIEW ── */}
      <section className="py-24 bg-jt-cream-dk">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className="text-center mb-14 reveal">
            <p className="section-eyebrow mb-3">The Collection</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-jt-text uppercase tracking-wide mb-2">
              What Is <span className="text-jt-gold">Alignment?</span>
            </h2>
            <div className="flex items-center justify-center gap-6 mt-4">
              {['Heritage', 'Confidence', 'Presence', 'Peace'].map((p, i) => (
                <span key={p} className="flex items-center gap-3">
                  {i > 0 && <span className="text-jt-gold/50 text-xs">•</span>}
                  <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-jt-muted">{p}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {products.map((p, i) => (
              <div
                key={p.id}
                className="group cursor-pointer reveal"
                style={{ transitionDelay: `${i * 80}ms` }}
                onClick={() => onNavigate('product', p.id)}
              >
                {/* Image area */}
                <div className={`relative aspect-[3/4] ${p.heroBg} overflow-hidden mb-4`}>
                  <div className="absolute inset-0 bg-texture-dark" />
                  {/* Placeholder label */}
                  <div className="absolute inset-0 flex items-end p-4">
                    <div>
                      {p.badge && (
                        <span className="inline-block bg-jt-gold text-jt-cream text-[9px] font-sans font-bold uppercase tracking-widest px-2 py-0.5 mb-2">
                          {p.badge}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-display text-6xl font-bold text-white/10 select-none uppercase">
                      {p.name.split(' ').map(w => w[0]).join('')}
                    </span>
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-jt-charcoal/0 group-hover:bg-jt-charcoal/20 transition-all duration-400 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity btn-outline-light text-[10px] py-2 px-4">
                      Quick View
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="px-1">
                  <p className="section-eyebrow mb-1">{p.tag}</p>
                  <h3 className="font-display text-base font-bold text-jt-text uppercase tracking-wide leading-tight mb-1">
                    {p.name}
                  </h3>
                  <p className="font-sans text-jt-muted text-sm mb-3">${p.price}</p>
                  <button
                    onClick={(e) => { e.stopPropagation(); onNavigate('product', p.id); }}
                    className="btn-dark w-full text-center text-[10px] py-2.5"
                  >
                    Shop Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center reveal">
            <button onClick={() => onNavigate('collection')} className="btn-outline-dark">
              View Full Collection
            </button>
          </div>
        </div>
      </section>

      {/* ── PHILOSOPHY BANNER ── */}
      <section className="relative py-28 bg-jt-espresso overflow-hidden">
        <div className="absolute inset-0 bg-texture-dark" />
        <div
          className="absolute inset-0 opacity-15"
          style={{ background: 'radial-gradient(ellipse at 30% 50%, #C9963A 0%, transparent 60%)' }}
        />
        <div className="relative max-w-4xl mx-auto px-6 text-center reveal">
          <p className="section-eyebrow mb-6 text-jt-gold/80">Our Philosophy</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-jt-cream leading-tight mb-8">
            "Dressed in culture.<br />
            <span className="text-gold-shimmer">Built for legacy."</span>
          </h2>
          <p className="font-serif text-jt-stone text-lg md:text-xl italic leading-relaxed max-w-2xl mx-auto mb-10">
            Every stitch in a Jamaican Toni piece carries the weight of the Caribbean and the ambition of Atlanta.
            We design for people who walk into rooms and change them.
          </p>
          <button onClick={() => onNavigate('philosophy')} className="btn-outline-gold">
            Read Our Story
          </button>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 bg-jt-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12 reveal">
            <p className="section-eyebrow mb-3">Client Love</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-jt-text uppercase tracking-wide">
              Worn. <span className="text-jt-gold">Felt. Remembered.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className="bg-jt-cream-dk border border-jt-stone/30 p-8 hover:border-jt-gold/40 transition-colors reveal"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.stars }).map((_, si) => (
                    <Star key={si} size={12} className="fill-jt-gold text-jt-gold" />
                  ))}
                </div>
                <p className="font-serif text-jt-text text-base italic leading-relaxed mb-6">
                  "{t.quote}"
                </p>
                <div className="border-t border-jt-stone/30 pt-5 flex items-center justify-between">
                  <div>
                    <div className="font-sans font-semibold text-sm text-jt-text">{t.name}</div>
                    <div className="text-[11px] font-sans text-jt-muted">{t.city}</div>
                  </div>
                  <div className="w-8 h-8 bg-jt-gold/10 border border-jt-gold/30 flex items-center justify-center">
                    <span className="font-display text-xs font-bold text-jt-gold">{t.name[0]}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── JOIN THE CIRCLE ── */}
      <section className="relative py-24 bg-jt-charcoal overflow-hidden">
        <div className="absolute inset-0 bg-texture-dark opacity-60" />
        <div
          className="absolute right-0 top-0 bottom-0 w-2/5 opacity-20"
          style={{ background: 'linear-gradient(to left, #C9963A33, transparent)' }}
        />

        <div className="relative max-w-5xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <p className="section-eyebrow mb-4 text-jt-gold/80">Exclusive Access</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-jt-cream uppercase leading-tight mb-4">
              Join The <span className="text-jt-gold">Alignment Circle</span>
            </h2>
            <p className="font-sans text-jt-stone text-sm leading-relaxed mb-8">
              Be first to access limited releases. Exclusive insights, early drops, and member events
              from Jamaican Toni Atlanta.
            </p>
            {joined ? (
              <div className="border border-jt-gold/40 bg-jt-gold/10 px-6 py-4 text-jt-gold font-sans text-sm">
                ✦ Welcome to the Circle. Watch your inbox.
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); if (email) setJoined(true); }}
                className="flex gap-0"
              >
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Enter Your Email"
                  className="flex-1 bg-white/5 border border-jt-stone/30 text-jt-cream text-sm font-sans px-5 py-4 focus:outline-none focus:border-jt-gold placeholder:text-jt-stone/50"
                  required
                />
                <button type="submit" className="btn-gold flex items-center gap-2 whitespace-nowrap px-6">
                  Join Now <ArrowRight size={13} />
                </button>
              </form>
            )}
          </div>

          {/* Decorative monogram */}
          <div className="hidden lg:flex items-center justify-center reveal">
            <div className="relative w-64 h-64">
              <div className="absolute inset-0 border-2 border-jt-gold/20 rounded-full animate-float" />
              <div className="absolute inset-6 border border-jt-gold/10 rounded-full" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-display text-7xl font-bold text-jt-gold/30 tracking-widest">JT</span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mt-16 text-center reveal">
          <div className="flex items-center justify-center gap-6">
            <div className="h-px w-16 bg-jt-gold/30" />
            <span className="font-display text-jt-cream/50 text-sm uppercase tracking-widest">
              Stay Aligned. Shop Jamaican Toni Now.
            </span>
            <div className="h-px w-16 bg-jt-gold/30" />
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-jt-espresso border-t border-jt-bark/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="font-display text-3xl font-bold text-jt-gold tracking-wide mb-1">Jamaican Toni</div>
              <div className="text-[9px] font-sans uppercase tracking-[0.4em] text-jt-stone/60 mb-5">Atlanta · Est. 2024</div>
              <p className="font-serif italic text-jt-stone/70 text-sm leading-relaxed max-w-xs">
                Caribbean soul. Atlanta bold. Pieces designed for people who walk into rooms and change them.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-sans font-semibold text-[10px] uppercase tracking-[0.3em] text-jt-stone/60 mb-5">Shop</h4>
              <ul className="space-y-2.5">
                {['New Arrivals', 'The Collection', 'Limited Pieces', 'Gift Cards'].map(item => (
                  <li key={item}>
                    <span className="text-jt-stone/70 font-sans text-xs uppercase tracking-wider hover:text-jt-gold cursor-pointer transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-sans font-semibold text-[10px] uppercase tracking-[0.3em] text-jt-stone/60 mb-5">Brand</h4>
              <ul className="space-y-2.5">
                {['Philosophy', 'Journal', 'The Circle', 'Contact Us'].map(item => (
                  <li key={item}>
                    <span className="text-jt-stone/70 font-sans text-xs uppercase tracking-wider hover:text-jt-gold cursor-pointer transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-jt-bark/30 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-jt-stone/40 font-sans text-[11px] uppercase tracking-widest">
              © {new Date().getFullYear()} Jamaican Toni LLC · Atlanta, Georgia
            </p>
            <div className="flex items-center gap-6">
              {['Privacy', 'Terms', 'Instagram', 'Contact'].map(item => (
                <span key={item} className="text-jt-stone/40 font-sans text-[11px] uppercase tracking-widest hover:text-jt-gold cursor-pointer transition-colors">
                  {item}
                </span>
              ))}
            </div>
            <p className="text-jt-stone/30 font-serif text-xs italic">Powered by island love.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
