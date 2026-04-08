import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ArrowDown, Star, ChevronRight, Play } from 'lucide-react';
import { products } from '../data/products';

interface HomePageProps {
  onNavigate: (page: string, productId?: string) => void;
}

/* ── Scroll-reveal hook ── */
function useReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.06, rootMargin: '0px 0px -30px 0px' }
    );
    document.querySelectorAll('.reveal,.reveal-left,.reveal-right,.reveal-scale,.reveal-stagger,.clip-from-bottom').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

/* ── Parallax hook ── */
function useParallax(ref: React.RefObject<HTMLElement | null>, speed = 0.3) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const offset = (rect.top - window.innerHeight / 2) * speed;
      el.style.transform = `translateY(${offset}px)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [ref, speed]);
}

/* ── Marquee data ── */
const marqueeItems = [
  'Caribbean Soul', 'Atlanta Bold', 'Limited Pieces', 'Worn With Intention',
  'Heritage Crafted', 'Not Mass-Produced', 'Jamaican Toni',
  'Caribbean Soul', 'Atlanta Bold', 'Limited Pieces', 'Worn With Intention',
  'Heritage Crafted', 'Not Mass-Produced', 'Jamaican Toni',
];

/* ── Editorial features (Net-a-Porter "The Edit") ── */
const editorials = [
  {
    tag: 'The Edit',
    title: 'Caribbean Heat:\nSummer in the City',
    desc: 'How Jamaican Toni pieces transition from Kingston to Atlanta.',
    bg: 'bg-jt-forest',
    size: 'lg:col-span-2 lg:row-span-2',
  },
  {
    tag: 'Lookbook',
    title: 'After-Dark\nAlignment',
    desc: 'Evening silhouettes for the bold.',
    bg: 'bg-jt-espresso',
    size: '',
  },
  {
    tag: 'Culture',
    title: 'The Art of\nDressing',
    desc: 'Why what you wear is who you become.',
    bg: 'bg-jt-charcoal',
    size: '',
  },
];

/* ── Testimonials ── */
const testimonials = [
  { quote: "The Island Reverie Dress stopped the room. Jamaican Toni is in a league of its own.", name: 'Denise A.', city: 'Atlanta', stars: 5 },
  { quote: "The Kingston Blazer — the lining alone tells a story. This is not fast fashion, this is legacy.", name: 'Marcus J.', city: 'Miami', stars: 5 },
  { quote: "Finally a brand that speaks to my Caribbean roots without sacrificing luxury.", name: 'Yvonne P.', city: 'New York', stars: 5 },
  { quote: "I've never received more compliments on a single piece. The Toni Co-Ord Set is perfection.", name: 'Camille H.', city: 'Toronto', stars: 5 },
];

export default function HomePage({ onNavigate }: HomePageProps) {
  useReveal();
  const parallaxRef = useRef<HTMLDivElement>(null);
  useParallax(parallaxRef, 0.15);
  const [email, setEmail] = useState('');
  const [joined, setJoined] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className="bg-jt-cream">

      {/* ================================================================
          HERO — Build in Amsterdam cinematic split + Net-a-Porter elegance
      ================================================================ */}
      <section className="relative min-h-screen flex items-end lg:items-center overflow-hidden">
        {/* Background: split diagonal */}
        <div className="absolute inset-0">
          {/* Left: cream with noise */}
          <div className="absolute inset-0 bg-jt-cream bg-noise" />
          {/* Right: dark image area */}
          <div className="absolute top-0 right-0 bottom-0 w-full lg:w-[55%] bg-jt-forest overflow-hidden">
            <div className="absolute inset-0 bg-noise opacity-50" />
            {/* Diagonal clip on desktop */}
            <div className="hidden lg:block absolute top-0 left-0 bottom-0 w-24 bg-jt-cream" style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }} />
            {/* Abstract golden ring (Telfar visual language) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] max-w-[500px] aspect-square">
              <div className="absolute inset-0 border border-jt-gold/15 rounded-full animate-float" />
              <div className="absolute inset-4 border border-jt-gold/10 rounded-full" style={{ animationDelay: '-2s' }} />
              <div className="absolute inset-10 border border-jt-gold/5 rounded-full" />
            </div>
            {/* Monogram */}
            <div className="absolute bottom-12 right-12 font-display text-jt-gold/10 text-[200px] leading-none font-bold select-none hidden lg:block">
              JT
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12 pb-20 lg:pb-0">
          <div className="max-w-xl">
            {/* Eyebrow with animated line */}
            <div className="flex items-center gap-4 mb-8 animate-fade-up">
              <div className="h-px w-10 bg-jt-gold animate-line-grow delay-300" />
              <span className="eyebrow">Atlanta, Georgia</span>
            </div>

            {/* Headline — kinetic type */}
            <h1 className="font-display text-display-xl font-semibold text-jt-text mb-6">
              <span className="block animate-fade-up">Wear</span>
              <span className="block text-jt-gold animate-fade-up delay-100">Heritage.</span>
              <span className="block animate-fade-up delay-200">Live Bold.</span>
            </h1>

            {/* Sub-copy */}
            <p className="font-serif text-lg md:text-xl text-jt-text/60 italic leading-relaxed max-w-md mb-4 animate-fade-up delay-300">
              Jamaican Toni is engineered for clarity, confidence, and elevated presence.
            </p>

            {/* Philosophy tag */}
            <div className="flex items-center gap-3 mb-10 animate-fade-up delay-400">
              <ArrowRight size={12} className="text-jt-gold" />
              <span className="text-[10px] font-sans uppercase tracking-[0.4em] text-jt-gold/70">
                Designed with the frequency of island love
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-up delay-500">
              <button onClick={() => onNavigate('collection')} className="btn-primary">
                <span>Shop the Collection</span>
                <ArrowRight size={14} />
              </button>
              <button onClick={() => onNavigate('philosophy')} className="btn-secondary">
                <span>Discover the Philosophy</span>
              </button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-up delay-700">
          <span className="text-[9px] font-sans uppercase tracking-[0.4em] text-jt-muted/50">Scroll</span>
          <ArrowDown size={14} className="text-jt-muted/40 animate-bounce" />
        </div>
      </section>

      {/* ================================================================
          MARQUEE TICKER (Telfar bold branding strip)
      ================================================================ */}
      <div className="bg-jt-charcoal py-4 overflow-hidden border-y border-jt-gold/10">
        <div className="flex whitespace-nowrap animate-marquee">
          {marqueeItems.map((item, i) => (
            <span key={i} className="inline-flex items-center mx-6">
              <span className="text-[11px] font-sans uppercase tracking-[0.4em] text-jt-cream/50">{item}</span>
              <span className="ml-6 text-jt-gold/40 text-xs">◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* ================================================================
          PRODUCT GRID — Net-a-Porter asymmetric editorial layout
      ================================================================ */}
      <section className="py-section">
        <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12">

          {/* Section header */}
          <div className="flex items-end justify-between mb-14 reveal">
            <div>
              <p className="eyebrow mb-3">The Collection</p>
              <h2 className="font-display text-display-md font-semibold text-jt-text leading-none">
                New <span className="italic font-serif font-normal">Arrivals</span>
              </h2>
            </div>
            <button onClick={() => onNavigate('collection')} className="btn-ghost hidden md:flex">
              <span>View All</span><ArrowRight size={13} />
            </button>
          </div>

          {/* Asymmetric grid: 2 large + 2 small (Net-a-Porter editorial) */}
          <div className="grid grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-5 reveal-stagger">
            {products.map((p, i) => {
              // First product gets large span, rest alternate
              const isLarge = i === 0 || i === 3;
              const colSpan = isLarge ? 'lg:col-span-7' : 'lg:col-span-5';
              const aspectClass = isLarge ? 'aspect-[3/4]' : 'aspect-[4/5]';

              return (
                <div
                  key={p.id}
                  className={`${colSpan} group cursor-pointer`}
                  onClick={() => onNavigate('product', p.id)}
                >
                  {/* Image container with zoom */}
                  <div className={`product-image ${aspectClass} ${p.heroBg} relative mb-5`}>
                    <div className="absolute inset-0 bg-noise" />
                    {/* Badge */}
                    {p.badge && (
                      <div className="absolute top-4 left-4 z-10">
                        <span className="bg-jt-charcoal text-jt-cream text-[9px] font-sans uppercase tracking-[0.3em] px-3 py-1.5">
                          {p.badge}
                        </span>
                      </div>
                    )}
                    {/* Placeholder text */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-display text-[80px] lg:text-[120px] font-bold text-white/8 select-none uppercase leading-none">
                        {p.name.split(' ').map(w => w[0]).join('')}
                      </span>
                    </div>
                    {/* Hover: quick-add bar (Net-a-Porter) */}
                    <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-expo-out bg-jt-charcoal/95 backdrop-blur-sm p-4 flex items-center justify-between">
                      <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-jt-cream">Quick Add</span>
                      <div className="flex gap-2">
                        {p.sizes.slice(0, 4).map(s => (
                          <button key={s} className="w-8 h-8 border border-jt-cream/20 text-jt-cream text-[10px] font-sans hover:bg-jt-cream hover:text-jt-charcoal transition-colors duration-200">
                            {s}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Product info — Net-a-Porter minimal */}
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[10px] font-sans uppercase tracking-[0.3em] text-jt-muted mb-1">{p.tag}</p>
                      <h3 className="font-sans text-sm font-medium text-jt-text leading-tight group-hover:text-jt-gold transition-colors duration-300">
                        {p.name}
                      </h3>
                    </div>
                    <p className="font-sans text-sm text-jt-text">${p.price}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile "view all" */}
          <div className="mt-10 text-center md:hidden reveal">
            <button onClick={() => onNavigate('collection')} className="btn-primary">
              <span>View Full Collection</span><ArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>

      {/* ================================================================
          EDITORIAL GRID (Net-a-Porter "The Edit" magazine blocks)
      ================================================================ */}
      <section className="py-section bg-jt-cream-dk">
        <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12">
          <div className="flex items-end justify-between mb-14 reveal">
            <div>
              <p className="eyebrow mb-3">From the Journal</p>
              <h2 className="font-display text-display-md font-semibold text-jt-text">
                The <span className="italic font-serif font-normal">Edit</span>
              </h2>
            </div>
            <button onClick={() => onNavigate('journal')} className="btn-ghost hidden md:flex">
              <span>Read All</span><ArrowRight size={13} />
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            {editorials.map((ed, i) => (
              <div
                key={ed.title}
                className={`${ed.size} relative overflow-hidden group cursor-pointer reveal`}
                style={{ transitionDelay: `${i * 100}ms` }}
                onClick={() => onNavigate('journal')}
              >
                <div className={`${ed.bg} bg-noise min-h-[300px] lg:min-h-[400px] h-full relative`}>
                  {/* Subtle gold glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{ background: 'radial-gradient(circle at 50% 80%, rgba(201,150,58,0.12) 0%, transparent 60%)' }}
                  />
                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-7 lg:p-10">
                    <p className="text-[9px] font-sans uppercase tracking-[0.4em] text-jt-gold mb-3">{ed.tag}</p>
                    <h3 className="font-display text-2xl lg:text-3xl text-jt-cream font-semibold leading-tight mb-3 whitespace-pre-line">
                      {ed.title}
                    </h3>
                    <p className="font-sans text-sm text-jt-cream/50 mb-5 max-w-sm">{ed.desc}</p>
                    <span className="inline-flex items-center gap-2 text-[10px] font-sans uppercase tracking-[0.25em] text-jt-cream/60 group-hover:text-jt-gold transition-colors duration-300">
                      Read More <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          HORIZONTAL SCROLL — Build in Amsterdam style
      ================================================================ */}
      <section className="py-section bg-jt-cream overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12">
          <div className="flex items-end justify-between mb-10 reveal">
            <div>
              <p className="eyebrow mb-3">Curated For You</p>
              <h2 className="font-display text-display-md font-semibold text-jt-text">
                Most <span className="italic font-serif font-normal">Loved</span>
              </h2>
            </div>
            <div className="hidden md:flex gap-2">
              <button onClick={() => scrollRef.current?.scrollBy({ left: -400, behavior: 'smooth' })}
                className="w-10 h-10 border border-jt-stone/30 flex items-center justify-center hover:border-jt-charcoal transition-colors">
                <ChevronRight size={16} className="rotate-180 text-jt-text" />
              </button>
              <button onClick={() => scrollRef.current?.scrollBy({ left: 400, behavior: 'smooth' })}
                className="w-10 h-10 border border-jt-stone/30 flex items-center justify-center hover:border-jt-charcoal transition-colors">
                <ChevronRight size={16} className="text-jt-text" />
              </button>
            </div>
          </div>
        </div>

        <div ref={scrollRef} className="horizontal-scroll pl-5 md:pl-8 lg:pl-12 pb-4 gap-5">
          {[...products, ...products].map((p, i) => (
            <div
              key={p.id + i}
              className="w-[280px] md:w-[320px] flex-shrink-0 group cursor-pointer"
              onClick={() => onNavigate('product', p.id)}
            >
              <div className={`product-image aspect-[3/4] ${p.heroBg} relative mb-4`}>
                <div className="absolute inset-0 bg-noise" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-6xl font-bold text-white/8 select-none uppercase">
                    {p.name.split(' ').map(w => w[0]).join('')}
                  </span>
                </div>
              </div>
              <p className="text-[10px] font-sans uppercase tracking-[0.25em] text-jt-muted mb-1">{p.tag}</p>
              <p className="font-sans text-sm text-jt-text group-hover:text-jt-gold transition-colors">{p.name}</p>
              <p className="font-sans text-sm text-jt-muted mt-0.5">${p.price}</p>
            </div>
          ))}
          <div className="w-5 flex-shrink-0" /> {/* End padding */}
        </div>
      </section>

      {/* ================================================================
          PHILOSOPHY BANNER — Parallax + cinematic type
      ================================================================ */}
      <section className="relative py-section overflow-hidden bg-jt-charcoal">
        <div className="absolute inset-0 bg-noise opacity-40" />
        {/* Parallax golden glow */}
        <div
          ref={parallaxRef}
          className="absolute inset-0 opacity-15 parallax-content"
          style={{ background: 'radial-gradient(ellipse at 30% 40%, #C9963A 0%, transparent 50%)' }}
        />

        <div className="relative max-w-4xl mx-auto px-5 md:px-8 text-center">
          <p className="eyebrow mb-8 reveal">Our Philosophy</p>

          {/* Kinetic quote — Build in Amsterdam giant type */}
          <h2 className="font-display text-display-lg font-semibold text-jt-cream leading-tight mb-8 reveal">
            "Dressed in culture.
            <br />
            <span className="text-gold-shimmer">Built for legacy."</span>
          </h2>

          <p className="font-serif text-jt-stone/70 text-lg md:text-xl italic leading-relaxed max-w-xl mx-auto mb-10 reveal">
            Every stitch carries the weight of the Caribbean and the ambition of Atlanta.
            We design for people who walk into rooms and change them.
          </p>

          <div className="reveal">
            <button onClick={() => onNavigate('philosophy')} className="btn-inverse">
              <span>Read Our Story</span><ArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>

      {/* ================================================================
          VIDEO / LOOKBOOK SECTION (Build in Amsterdam full-bleed)
      ================================================================ */}
      <section className="relative h-[60vh] lg:h-[80vh] bg-jt-forest overflow-hidden group cursor-pointer reveal-scale"
        onClick={() => onNavigate('journal')}
      >
        <div className="absolute inset-0 bg-noise" />
        {/* Placeholder content for video/lookbook hero */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="w-20 h-20 rounded-full border-2 border-jt-cream/20 flex items-center justify-center mb-8 mx-auto group-hover:border-jt-gold/60 group-hover:scale-110 transition-all duration-500">
              <Play size={24} className="text-jt-cream/50 group-hover:text-jt-gold transition-colors ml-1" />
            </div>
            <p className="eyebrow mb-3 text-jt-gold/50 group-hover:text-jt-gold transition-colors">Campaign Film</p>
            <h3 className="font-display text-4xl md:text-6xl text-jt-cream font-semibold">
              Summer in the City
            </h3>
            <p className="font-serif italic text-jt-cream/40 text-lg mt-3">Watch the lookbook</p>
          </div>
        </div>
      </section>

      {/* ================================================================
          TESTIMONIALS — Clean, editorial (Net-a-Porter reviews)
      ================================================================ */}
      <section className="py-section bg-jt-cream">
        <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12">
          <div className="text-center mb-14 reveal">
            <p className="eyebrow mb-3">Client Love</p>
            <h2 className="font-display text-display-md font-semibold text-jt-text">
              Worn. <span className="italic font-serif font-normal">Remembered.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 reveal-stagger">
            {testimonials.map(t => (
              <div key={t.name} className="border border-jt-stone/20 p-7 hover:border-jt-charcoal/20 transition-colors duration-400">
                <div className="flex gap-0.5 mb-5">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} size={11} className="fill-jt-gold text-jt-gold" />
                  ))}
                </div>
                <p className="font-serif italic text-jt-text/80 text-base leading-relaxed mb-7">
                  "{t.quote}"
                </p>
                <div className="border-t border-jt-stone/15 pt-4">
                  <p className="font-sans text-xs font-medium text-jt-text">{t.name}</p>
                  <p className="font-sans text-[11px] text-jt-muted">{t.city}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          JOIN THE CIRCLE — Email capture (Telfar community urgency)
      ================================================================ */}
      <section className="relative py-section overflow-hidden bg-jt-charcoal">
        <div className="absolute inset-0 bg-noise opacity-50" />

        <div className="relative max-w-3xl mx-auto px-5 md:px-8 text-center">
          <div className="reveal">
            {/* Monogram */}
            <div className="w-16 h-16 rounded-full border border-jt-gold/20 flex items-center justify-center mx-auto mb-8">
              <span className="font-display text-xl font-bold text-jt-gold/40">JT</span>
            </div>

            <p className="eyebrow mb-4">Exclusive Access</p>
            <h2 className="font-display text-display-md font-semibold text-jt-cream mb-4">
              Join The <span className="italic font-serif font-normal text-jt-gold">Circle</span>
            </h2>
            <p className="font-sans text-jt-stone/60 text-sm leading-relaxed max-w-lg mx-auto mb-10">
              Be first to access limited releases, exclusive insights, and drops from Jamaican Toni.
              Members only. No spam. Just alignment.
            </p>

            {joined ? (
              <div className="border border-jt-gold/30 bg-jt-gold/5 px-8 py-5 inline-flex items-center gap-3 animate-scale-in">
                <span className="text-jt-gold text-sm font-sans">Welcome to the Circle. Watch your inbox.</span>
              </div>
            ) : (
              <form
                onSubmit={e => { e.preventDefault(); if (email) setJoined(true); }}
                className="flex flex-col sm:flex-row gap-0 max-w-lg mx-auto"
              >
                <input
                  type="email" required value={email} onChange={e => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 bg-transparent border border-jt-cream/10 text-jt-cream font-sans text-sm px-6 py-4 focus:outline-none focus:border-jt-gold/50 placeholder:text-jt-stone/30 transition-colors"
                />
                <button type="submit" className="bg-jt-gold text-jt-charcoal font-sans font-medium uppercase tracking-[0.2em] text-[11px] px-8 py-4 border border-jt-gold hover:bg-jt-gold-lt transition-colors flex items-center gap-2">
                  Join Now <ArrowRight size={13} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ================================================================
          FOOTER — Net-a-Porter clean minimal
      ================================================================ */}
      <footer className="bg-jt-cream border-t border-jt-stone/15">
        <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12">

          {/* Top: 4-col grid */}
          <div className="grid md:grid-cols-4 gap-10 py-16 border-b border-jt-stone/15">
            <div className="md:col-span-1">
              <p className="font-display text-xl font-semibold tracking-[0.12em] text-jt-text mb-1">JAMAICAN TONI</p>
              <p className="text-[9px] font-sans uppercase tracking-[0.4em] text-jt-muted">Atlanta · Est. 2024</p>
            </div>
            {[
              { title: 'Shop', items: ['New Arrivals', 'Collection', 'Limited Pieces', 'Gift Cards'] },
              { title: 'Brand', items: ['Philosophy', 'The Journal', 'The Circle', 'Sustainability'] },
              { title: 'Help', items: ['Contact Us', 'Shipping & Returns', 'Size Guide', 'FAQ'] },
            ].map(({ title, items }) => (
              <div key={title}>
                <p className="text-[10px] font-sans uppercase tracking-[0.3em] text-jt-muted mb-5">{title}</p>
                <ul className="space-y-3">
                  {items.map(item => (
                    <li key={item}>
                      <span className="text-sm font-sans text-jt-text/60 hover:text-jt-text cursor-pointer transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom */}
          <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[11px] font-sans text-jt-muted/60">
              © {new Date().getFullYear()} Jamaican Toni LLC. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {['Privacy', 'Terms', 'Instagram'].map(item => (
                <span key={item} className="text-[11px] font-sans text-jt-muted/60 hover:text-jt-text cursor-pointer transition-colors">{item}</span>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
