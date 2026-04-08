import { useState, useEffect } from 'react';
import { ChevronRight, ShieldCheck, Truck, RotateCcw, Package, Heart, Share2, Star, ArrowRight } from 'lucide-react';
import { products, type Product } from '../data/products';

interface ProductPageProps {
  productId: string;
  onNavigate: (page: string, productId?: string) => void;
  onAddToCart: () => void;
}

const detailTabs = ['Description', 'Fabric & Craft', 'Size & Fit', 'Delivery'];

export default function ProductPage({ productId, onNavigate, onAddToCart }: ProductPageProps) {
  const product: Product = products.find(p => p.id === productId) ?? products[0];
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [activeThumb, setActiveThumb] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.05 }
    );
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const handleAdd = () => {
    if (!selectedSize) return;
    onAddToCart();
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  return (
    <div className="min-h-screen bg-jt-cream">
      {/* Breadcrumb */}
      <div className="border-b border-jt-stone/15 bg-jt-cream">
        <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12 py-3 flex items-center gap-2 text-[11px] font-sans text-jt-muted">
          <button onClick={() => onNavigate('home')} className="hover:text-jt-text transition-colors">Home</button>
          <ChevronRight size={10} className="text-jt-stone/40" />
          <button onClick={() => onNavigate('collection')} className="hover:text-jt-text transition-colors">Collection</button>
          <ChevronRight size={10} className="text-jt-stone/40" />
          <span className="text-jt-text">{product.name}</span>
        </div>
      </div>

      {/* ── MAIN PRODUCT SECTION ── */}
      <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12 py-10 lg:py-16">
        <div className="grid lg:grid-cols-[1fr_460px] gap-10 lg:gap-16">

          {/* LEFT: Gallery */}
          <div className="flex gap-3 lg:gap-4">
            {/* Thumbnails */}
            <div className="hidden md:flex flex-col gap-2 w-[72px] flex-shrink-0">
              {product.thumbBg.map((bg, i) => (
                <button
                  key={i}
                  onClick={() => setActiveThumb(i)}
                  className={`aspect-square border transition-all duration-300 overflow-hidden ${bg} ${
                    activeThumb === i ? 'border-jt-charcoal' : 'border-jt-stone/20 hover:border-jt-charcoal/30'
                  }`}
                >
                  <div className="w-full h-full bg-noise flex items-center justify-center">
                    <span className="font-display text-lg font-bold text-white/15 select-none">{i + 1}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className={`flex-1 aspect-[3/4] ${product.heroBg} relative overflow-hidden group`}>
              <div className="absolute inset-0 bg-noise" />
              {product.badge && (
                <div className="absolute top-5 left-5 z-10">
                  <span className="bg-jt-charcoal text-jt-cream text-[9px] font-sans uppercase tracking-[0.3em] px-3 py-1.5">
                    {product.badge}
                  </span>
                </div>
              )}
              <div className="absolute inset-0 flex items-center justify-center transition-transform duration-700 group-hover:scale-105">
                <span className="font-display text-[140px] font-bold text-white/6 select-none uppercase leading-none">
                  {product.name.split(' ').map(w => w[0]).join('')}
                </span>
              </div>
              {/* Brand watermark */}
              <div className="absolute bottom-5 right-5 text-white/10 text-[9px] font-sans uppercase tracking-[0.4em] select-none">
                Jamaican Toni
              </div>
            </div>
          </div>

          {/* RIGHT: Product Info */}
          <div className="lg:sticky lg:top-24 self-start">
            {/* Tag */}
            <p className="eyebrow mb-3">{product.tag}</p>

            {/* Name + Price */}
            <h1 className="font-display text-3xl md:text-4xl font-semibold text-jt-text leading-tight mb-2">
              {product.name}
            </h1>
            <p className="font-sans text-2xl text-jt-text mb-6">${product.price}</p>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-6 pb-6 border-b border-jt-stone/15">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={12} className="fill-jt-gold text-jt-gold" />
                ))}
              </div>
              <span className="text-[11px] font-sans text-jt-muted">4.9 (24 reviews)</span>
            </div>

            {/* Description */}
            <p className="font-sans text-sm text-jt-text/70 leading-relaxed mb-2">{product.desc}</p>
            <p className="font-serif italic text-sm text-jt-muted mb-8">Crafted in limited production runs.</p>

            {/* Color */}
            <div className="mb-6">
              <p className="text-[10px] font-sans uppercase tracking-[0.25em] text-jt-muted mb-3">
                Colour — <span className="text-jt-text">{selectedColor}</span>
              </p>
              <div className="flex gap-2 flex-wrap">
                {product.colors.map(c => (
                  <button
                    key={c}
                    onClick={() => setSelectedColor(c)}
                    className={`text-[11px] font-sans px-4 py-2.5 border transition-all duration-300 ${
                      selectedColor === c
                        ? 'border-jt-charcoal text-jt-text'
                        : 'border-jt-stone/25 text-jt-muted hover:border-jt-charcoal/40'
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            {/* Size */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-3">
                <p className="text-[10px] font-sans uppercase tracking-[0.25em] text-jt-muted">Size</p>
                <button className="text-[10px] font-sans uppercase tracking-[0.2em] text-jt-text/50 hover:text-jt-text underline underline-offset-4 transition-colors">
                  Size Guide
                </button>
              </div>
              <div className="flex gap-2 flex-wrap">
                {product.sizes.map(s => (
                  <button
                    key={s}
                    onClick={() => setSelectedSize(s)}
                    className={`w-12 h-12 text-sm font-sans border transition-all duration-300 ${
                      selectedSize === s
                        ? 'bg-jt-charcoal text-jt-cream border-jt-charcoal'
                        : 'border-jt-stone/25 text-jt-text/60 hover:border-jt-charcoal'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Bag + Buy Now */}
            <div className="flex flex-col gap-3 mb-6">
              <div className="flex gap-3">
                <button
                  onClick={handleAdd}
                  disabled={!selectedSize}
                  className={`flex-1 btn-primary py-5 ${!selectedSize ? 'opacity-30 cursor-not-allowed' : ''} ${added ? '!bg-jt-teal !border-jt-teal' : ''}`}
                >
                  <span>{added ? '✓ Added to Bag' : 'Add to Bag'}</span>
                </button>
                <button className="w-14 h-14 border border-jt-stone/25 flex items-center justify-center hover:border-jt-charcoal transition-colors" aria-label="Add to wishlist">
                  <Heart size={18} className="text-jt-text/50" strokeWidth={1.5} />
                </button>
              </div>
              <button
                onClick={() => { if (selectedSize) { onAddToCart(); onNavigate('checkout'); } }}
                disabled={!selectedSize}
                className={`btn-secondary w-full py-5 ${!selectedSize ? 'opacity-30 cursor-not-allowed' : ''}`}
              >
                <span>Buy Now</span>
              </button>
            </div>

            {/* Share */}
            <div className="flex items-center gap-4 mb-8 pb-8 border-b border-jt-stone/15">
              <button className="flex items-center gap-2 text-[10px] font-sans uppercase tracking-[0.2em] text-jt-muted hover:text-jt-text transition-colors">
                <Share2 size={13} /> Share
              </button>
            </div>

            {/* Trust */}
            <div className="space-y-3">
              {[
                { icon: ShieldCheck, label: 'Limited Edition — Premium Craftsmanship' },
                { icon: Truck, label: 'Complimentary 3–5 Day Shipping' },
                { icon: Package, label: 'Arrives in JT Signature Packaging' },
                { icon: RotateCcw, label: '30-Day Returns on Unworn Pieces' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <Icon size={14} className="text-jt-gold/70 flex-shrink-0" strokeWidth={1.5} />
                  <span className="text-[12px] font-sans text-jt-muted">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── DETAIL TABS ── */}
        <div className="mt-20 border-t border-jt-stone/15 reveal">
          <div className="flex overflow-x-auto">
            {detailTabs.map((t, i) => (
              <button
                key={t}
                onClick={() => setActiveTab(i)}
                className={`flex-shrink-0 px-6 py-5 text-[11px] font-sans uppercase tracking-[0.2em] border-b-[1.5px] transition-all duration-300 ${
                  activeTab === i
                    ? 'border-jt-charcoal text-jt-text'
                    : 'border-transparent text-jt-muted hover:text-jt-text'
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-14 py-14">
            <div>
              <h3 className="font-display text-2xl font-semibold text-jt-text mb-3">
                Worn With Intention
              </h3>
              <p className="font-sans text-sm text-jt-text/60 leading-relaxed mb-10">{product.longDesc}</p>

              <div className="grid grid-cols-3 gap-8">
                {product.features.map(({ icon, title, desc }) => (
                  <div key={title}>
                    <div className="text-2xl text-jt-gold mb-3">{icon}</div>
                    <p className="font-sans text-xs font-medium uppercase tracking-wider text-jt-text mb-1">{title}</p>
                    <p className="font-serif italic text-xs text-jt-muted leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className={`aspect-[4/5] ${product.heroBg} relative overflow-hidden`}>
              <div className="absolute inset-0 bg-noise opacity-30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white/10">
                  <div className="font-display text-5xl font-bold tracking-widest uppercase">{product.name.split(' ')[0]}</div>
                  <div className="text-[10px] font-sans uppercase tracking-[0.5em] mt-2">Jamaican Toni</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── COMPLETE THE LOOK ── */}
        <div className="border-t border-jt-stone/15 pt-16 reveal">
          <div className="flex items-end justify-between mb-10">
            <h3 className="font-display text-2xl font-semibold text-jt-text">
              Complete the <span className="italic font-serif font-normal">Look</span>
            </h3>
            <button onClick={() => onNavigate('collection')} className="btn-ghost hidden md:flex">
              <span>View All</span><ArrowRight size={13} />
            </button>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {products.filter(p => p.id !== productId).map(p => (
              <div
                key={p.id}
                className="group cursor-pointer"
                onClick={() => { onNavigate('product', p.id); window.scrollTo(0, 0); }}
              >
                <div className={`product-image aspect-[3/4] ${p.heroBg} relative mb-3`}>
                  <div className="absolute inset-0 bg-noise" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-display text-5xl font-bold text-white/6 select-none uppercase">{p.name.split(' ').map(w => w[0]).join('')}</span>
                  </div>
                </div>
                <p className="text-[9px] font-sans uppercase tracking-[0.25em] text-jt-muted mb-0.5">{p.tag}</p>
                <p className="font-sans text-sm text-jt-text group-hover:text-jt-gold transition-colors">{p.name}</p>
                <p className="font-sans text-sm text-jt-muted">${p.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
