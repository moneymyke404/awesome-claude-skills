import { useState, useEffect } from 'react';
import { CheckCircle2, ArrowRight, Package, Truck, Mail, Copy, Check } from 'lucide-react';
import { products } from '../data/products';

interface ConfirmationPageProps {
  onNavigate: (page: string) => void;
  cartProduct?: string;
}

const orderNumber = `JT-${Date.now().toString(36).toUpperCase().slice(-6)}`;

export default function ConfirmationPage({ onNavigate, cartProduct }: ConfirmationPageProps) {
  const product = products.find(p => p.id === cartProduct) ?? products[0];
  const [joined, setJoined] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.05 }
    );
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(orderNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-jt-cream bg-noise">

      {/* ── HEADER ── */}
      <div className="border-b border-jt-stone/15 py-6">
        <div className="max-w-5xl mx-auto px-5 flex items-center justify-between">
          <button onClick={() => onNavigate('home')} className="font-display text-xl font-semibold tracking-[0.12em] text-jt-text">
            JAMAICAN TONI
          </button>
          <div className="flex items-center gap-2 text-[10px] font-sans text-jt-muted">
            <Package size={12} />
            <span className="uppercase tracking-widest">Order Confirmed</span>
          </div>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="max-w-3xl mx-auto px-5 py-14 lg:py-20">

        {/* Success Icon + Headline */}
        <div className="text-center mb-14 animate-fade-up">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-jt-teal/30 mb-6">
            <CheckCircle2 size={32} className="text-jt-teal" strokeWidth={1.2} />
          </div>
          <p className="eyebrow mb-3">Thank You</p>
          <h1 className="font-display text-display-md font-semibold text-jt-text leading-tight mb-3">
            Your Order Is <span className="italic font-serif font-normal">Confirmed</span>
          </h1>
          <p className="font-serif italic text-jt-muted text-base max-w-md mx-auto">
            Your piece is being prepared with care. A confirmation has been sent to your email.
          </p>
        </div>

        {/* Order Number Card */}
        <div className="border border-jt-stone/15 p-8 mb-10 text-center reveal">
          <p className="text-[10px] font-sans uppercase tracking-[0.3em] text-jt-muted mb-3">Order Number</p>
          <div className="flex items-center justify-center gap-3">
            <span className="font-display text-2xl font-semibold tracking-[0.15em] text-jt-text">{orderNumber}</span>
            <button
              onClick={handleCopy}
              className="text-jt-muted hover:text-jt-text transition-colors"
              aria-label="Copy order number"
            >
              {copied ? <Check size={16} className="text-jt-teal" /> : <Copy size={16} />}
            </button>
          </div>
        </div>

        {/* Order Details */}
        <div className="border border-jt-stone/15 divide-y divide-jt-stone/15 mb-10 reveal">
          {/* Product */}
          <div className="p-6 flex gap-4">
            <div className={`w-[72px] aspect-[3/4] ${product.heroBg} relative flex-shrink-0 overflow-hidden`}>
              <div className="absolute inset-0 bg-noise" />
              <span className="absolute inset-0 flex items-center justify-center font-display text-xl font-bold text-white/15 select-none">
                {product.name.split(' ').map(w => w[0]).join('')}
              </span>
            </div>
            <div className="flex-1 flex justify-between">
              <div>
                <p className="font-sans text-sm font-medium text-jt-text leading-tight">{product.name}</p>
                <p className="font-sans text-xs text-jt-muted mt-1">Size M · {product.colors[0]}</p>
                <p className="font-sans text-xs text-jt-muted mt-0.5">Qty: 1</p>
              </div>
              <p className="font-sans text-sm text-jt-text">${product.price}</p>
            </div>
          </div>

          {/* Totals */}
          <div className="p-6 space-y-2.5 text-sm font-sans">
            <div className="flex justify-between text-jt-text/60"><span>Subtotal</span><span>${product.price}</span></div>
            <div className="flex justify-between text-jt-text/60"><span>Shipping</span><span className="text-jt-teal">Complimentary</span></div>
            <div className="flex justify-between font-semibold text-jt-text text-base pt-3 border-t border-jt-stone/15">
              <span>Total</span><span>${product.price} USD</span>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="border border-jt-stone/15 p-6 mb-10 reveal">
          <p className="text-[10px] font-sans uppercase tracking-[0.3em] text-jt-muted mb-6">What Happens Next</p>
          <div className="space-y-0">
            {[
              { icon: Mail, title: 'Confirmation Email Sent', desc: 'Check your inbox for order details and receipt.', done: true },
              { icon: Package, title: 'Preparing Your Order', desc: 'Your piece is being carefully packaged in JT signature packaging.', done: false },
              { icon: Truck, title: 'Shipping & Delivery', desc: 'Estimated delivery in 3–5 business days. Tracking link will follow.', done: false },
            ].map(({ icon: Icon, title, desc, done }, i) => (
              <div key={title} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    done ? 'bg-jt-charcoal' : 'border border-jt-stone/25'
                  }`}>
                    <Icon size={14} className={done ? 'text-jt-cream' : 'text-jt-muted'} strokeWidth={1.5} />
                  </div>
                  {i < 2 && <div className="w-px h-8 bg-jt-stone/15" />}
                </div>
                <div className="pb-6">
                  <p className="font-sans text-sm font-medium text-jt-text">{title}</p>
                  <p className="font-sans text-xs text-jt-muted mt-0.5">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Join The Circle CTA */}
        <div className="bg-jt-charcoal relative overflow-hidden p-10 lg:p-14 text-center mb-10 reveal">
          <div className="absolute inset-0 bg-noise opacity-30" />
          <div className="relative">
            <p className="text-[10px] font-sans uppercase tracking-[0.4em] text-jt-gold mb-4">Exclusive Access</p>
            <h2 className="font-display text-2xl lg:text-3xl font-semibold text-jt-cream leading-tight mb-3">
              Join The <span className="italic font-serif font-normal text-jt-gold">Circle</span>
            </h2>
            <p className="font-sans text-sm text-jt-cream/50 max-w-md mx-auto mb-8 leading-relaxed">
              Get early access to new drops, exclusive editorials, and invitations to JT events. First access. No restock alerts — just first dibs.
            </p>

            {joined ? (
              <div className="inline-flex items-center gap-2 text-jt-gold text-sm font-sans">
                <CheckCircle2 size={16} />
                <span>Welcome to the Circle.</span>
              </div>
            ) : (
              <button
                onClick={() => setJoined(true)}
                className="btn-inverse"
              >
                <span>Join Now</span><ArrowRight size={13} />
              </button>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mb-14 reveal">
          <button onClick={() => onNavigate('collection')} className="btn-primary flex-1 py-5">
            <span>Continue Shopping</span><ArrowRight size={14} />
          </button>
          <button onClick={() => onNavigate('home')} className="btn-secondary flex-1 py-5">
            <span>Return Home</span>
          </button>
        </div>

        {/* Footer divider */}
        <div className="flex items-center gap-6 reveal">
          <div className="h-px flex-1 bg-jt-stone/15" />
          <span className="text-[9px] font-sans uppercase tracking-[0.4em] text-jt-muted/40">Jamaican Toni</span>
          <div className="h-px flex-1 bg-jt-stone/15" />
        </div>
      </div>
    </div>
  );
}
