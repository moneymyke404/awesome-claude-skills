import { useState } from 'react';
import { ChevronRight, ShieldCheck, Truck, RotateCcw, Package } from 'lucide-react';
import { products, type Product } from '../data/products';

interface ProductPageProps {
  productId: string;
  onNavigate: (page: string, productId?: string) => void;
  onAddToCart: () => void;
}

const tabs = ['Disciplined Design', 'Details', 'Fabric & Craft', 'Size & Fit', 'Delivery'];

export default function ProductPage({ productId, onNavigate, onAddToCart }: ProductPageProps) {
  const product: Product = products.find(p => p.id === productId) ?? products[0];

  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [activeTab, setActiveTab] = useState(0);
  const [activeThumb, setActiveThumb] = useState(0);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    if (!selectedSize) return;
    onAddToCart();
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  return (
    <div className="min-h-screen bg-jt-cream">
      {/* Breadcrumb */}
      <div className="border-b border-jt-stone/20 bg-jt-cream">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center gap-2 text-[11px] font-sans uppercase tracking-widest text-jt-muted">
          <button onClick={() => onNavigate('collection')} className="hover:text-jt-gold transition-colors">Collection</button>
          <ChevronRight size={12} />
          <span className="text-jt-text">{product.name}</span>
        </div>
      </div>

      {/* Main product grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left: Images */}
          <div className="flex gap-4">
            {/* Thumbnails */}
            <div className="flex flex-col gap-3 w-16 flex-shrink-0">
              {product.thumbBg.map((bg, i) => (
                <button
                  key={i}
                  onClick={() => setActiveThumb(i)}
                  className={`relative w-16 aspect-square border-2 transition-all overflow-hidden ${
                    activeThumb === i ? 'border-jt-charcoal' : 'border-jt-stone/30 hover:border-jt-charcoal/40'
                  } ${bg}`}
                >
                  <div className="absolute inset-0 bg-texture-dark" />
                  <span className="absolute inset-0 flex items-center justify-center font-display text-lg font-bold text-white/20 select-none">
                    {i + 1}
                  </span>
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className={`flex-1 aspect-[4/5] ${product.heroBg} relative overflow-hidden`}>
              <div className="absolute inset-0 bg-texture-dark" />
              {product.badge && (
                <div className="absolute top-4 left-4 bg-jt-gold text-jt-cream text-[10px] font-sans font-bold uppercase tracking-widest px-3 py-1 z-10">
                  {product.badge}
                </div>
              )}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-display text-[120px] font-bold text-white/10 select-none uppercase leading-none">
                  {product.name.split(' ').map(w => w[0]).join('')}
                </span>
              </div>
              {/* Brand watermark */}
              <div className="absolute bottom-5 right-5 font-display text-white/20 text-sm uppercase tracking-widest font-bold select-none">
                Jamaican Toni
              </div>
            </div>
          </div>

          {/* Right: Product info */}
          <div>
            <p className="section-eyebrow mb-2">{product.tag}</p>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-jt-text uppercase tracking-wide leading-tight mb-3">
              {product.name}
            </h1>
            <p className="font-display text-3xl font-bold text-jt-text mb-5">${product.price}</p>

            <p className="font-sans text-jt-muted text-sm leading-relaxed mb-2">{product.desc}</p>
            <p className="font-serif italic text-jt-muted text-sm mb-7">Crafted in limited production runs.</p>

            {/* Color selector */}
            <div className="mb-6">
              <p className="text-[10px] font-sans uppercase tracking-widest text-jt-muted mb-3">
                Color — <span className="text-jt-text">{selectedColor}</span>
              </p>
              <div className="flex gap-2 flex-wrap">
                {product.colors.map(c => (
                  <button
                    key={c}
                    onClick={() => setSelectedColor(c)}
                    className={`text-[11px] font-sans px-4 py-2 border transition-all ${
                      selectedColor === c
                        ? 'border-jt-charcoal bg-jt-charcoal text-jt-cream'
                        : 'border-jt-stone/40 text-jt-muted hover:border-jt-charcoal'
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            {/* Size selector */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-3">
                <p className="text-[10px] font-sans uppercase tracking-widest text-jt-muted">Size</p>
                <button className="text-[10px] font-sans uppercase tracking-widest text-jt-gold hover:underline">Size Guide</button>
              </div>
              <div className="flex gap-2 flex-wrap">
                {product.sizes.map(s => (
                  <button
                    key={s}
                    onClick={() => setSelectedSize(s)}
                    className={`w-12 h-12 text-sm font-sans font-medium border transition-all ${
                      selectedSize === s
                        ? 'bg-jt-charcoal text-jt-cream border-jt-charcoal'
                        : 'border-jt-stone/40 text-jt-muted hover:border-jt-charcoal'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
              {!selectedSize && (
                <p className="text-[10px] font-sans text-jt-muted/60 mt-2">Please select a size</p>
              )}
            </div>

            {/* CTAs */}
            <div className="flex flex-col gap-3 mb-8">
              <button
                onClick={handleAdd}
                disabled={!selectedSize}
                className={`btn-dark w-full text-center py-5 transition-all ${
                  !selectedSize ? 'opacity-40 cursor-not-allowed' : ''
                } ${added ? '!bg-jt-teal !border-jt-teal' : ''}`}
              >
                {added ? '✓ Added to Bag' : 'Add to Bag'}
              </button>
              <button
                onClick={() => { if (selectedSize) { onAddToCart(); onNavigate('checkout'); } }}
                disabled={!selectedSize}
                className={`btn-outline-dark w-full text-center py-5 ${
                  !selectedSize ? 'opacity-40 cursor-not-allowed' : ''
                }`}
              >
                Buy Now
              </button>
            </div>

            {/* Trust badges */}
            <div className="space-y-2.5 mb-8">
              {[
                { icon: ShieldCheck, label: 'Limited Edition Premium Craftsmanship' },
                { icon: Truck, label: 'Free 3–5 Day Shipping & Easy Returns' },
                { icon: Package, label: 'Arrives in Jamaican Toni Signature Box' },
                { icon: RotateCcw, label: '30-Day Return on Unworn Pieces' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3 text-sm font-sans text-jt-muted">
                  <Icon size={15} className="text-jt-gold flex-shrink-0" />
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── TABS ── */}
        <div className="mt-16 border-t border-jt-stone/30">
          {/* Tab nav */}
          <div className="flex overflow-x-auto border-b border-jt-stone/30">
            {tabs.map((t, i) => (
              <button
                key={t}
                onClick={() => setActiveTab(i)}
                className={`flex-shrink-0 px-6 py-4 text-[11px] font-sans uppercase tracking-widest border-b-2 transition-all ${
                  activeTab === i
                    ? 'border-jt-charcoal text-jt-text'
                    : 'border-transparent text-jt-muted hover:text-jt-text'
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="grid lg:grid-cols-2 gap-12 py-12">
            <div>
              <h3 className="font-display text-2xl font-bold text-jt-text uppercase tracking-wide mb-8">
                Worn With Intention
              </h3>
              <div className="grid grid-cols-3 gap-6">
                {product.features.map(({ icon, title, desc }) => (
                  <div key={title} className="text-center">
                    <div className="text-3xl text-jt-gold mb-3">{icon}</div>
                    <p className="font-sans font-semibold text-jt-text text-xs uppercase tracking-wider mb-1">{title}</p>
                    <p className="font-serif italic text-jt-muted text-xs leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-10 space-y-3">
                {[
                  '100% Premium Heavyweight Fabric',
                  'Custom Gold Hardware Details',
                  'Precision Embroidery & Finishing',
                  'JT Monogram Label — Hand-Sewn',
                ].map(item => (
                  <div key={item} className="flex items-center gap-3 text-sm font-sans text-jt-muted">
                    <span className="w-4 h-4 border border-jt-gold/40 flex items-center justify-center text-jt-gold text-[10px]">✦</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Side image / model */}
            <div className={`aspect-[4/5] ${product.heroBg} relative overflow-hidden`}>
              <div className="absolute inset-0 bg-texture-dark opacity-40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-jt-cream/20">
                  <div className="font-display text-5xl font-bold tracking-widest uppercase">
                    {product.name.split(' ')[0]}
                  </div>
                  <div className="text-xs font-sans uppercase tracking-[0.4em] mt-2">Jamaican Toni</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="border-t border-jt-stone/30 pt-16">
          <h3 className="font-display text-2xl font-bold text-jt-text uppercase tracking-wide mb-8 text-center">
            Complete the Look
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {products.filter(p => p.id !== productId).slice(0, 4).map(p => (
              <div
                key={p.id}
                className="group cursor-pointer"
                onClick={() => { onNavigate('product', p.id); window.scrollTo(0, 0); }}
              >
                <div className={`aspect-[3/4] ${p.heroBg} relative overflow-hidden mb-3`}>
                  <div className="absolute inset-0 bg-texture-dark" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-display text-4xl font-bold text-white/10 select-none uppercase">
                      {p.name.split(' ').map(w => w[0]).join('')}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-jt-charcoal/0 group-hover:bg-jt-charcoal/20 transition-all duration-300" />
                </div>
                <p className="font-display text-sm font-bold text-jt-text uppercase tracking-wide">{p.name}</p>
                <p className="font-sans text-jt-muted text-xs">${p.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Brand footer strip */}
      <div className="bg-jt-charcoal py-8 mt-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-display text-jt-gold text-lg font-bold tracking-widest uppercase">Jamaican Toni</p>
            <p className="text-[10px] font-sans uppercase tracking-[0.35em] text-jt-stone/50">Powered by Island Love</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {['HOME', 'COLLECTION', 'JOURNAL', 'CONTACT'].map(item => (
              <span key={item} className="text-[10px] font-sans uppercase tracking-widest text-jt-stone/40 hover:text-jt-gold cursor-pointer transition-colors px-2">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
