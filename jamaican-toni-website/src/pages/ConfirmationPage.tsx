import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface ConfirmationPageProps {
  onNavigate: (page: string) => void;
}

const orderNumber = `JT${Math.floor(Math.random() * 9000 + 1000)}`;

export default function ConfirmationPage({ onNavigate }: ConfirmationPageProps) {
  const [joined, setJoined] = useState(false);

  return (
    <div className="min-h-screen flex flex-col" style={{ background: '#EAE0CC' }}>

      {/* Top section — light */}
      <div className="bg-jt-cream py-12 text-center border-b border-jt-stone/30">
        {/* Logo */}
        <button onClick={() => onNavigate('home')} className="font-display text-2xl font-bold tracking-wider text-jt-text">
          Jamaican Toni
        </button>
        {/* Monogram */}
        <div className="flex justify-center mt-4 mb-6">
          <div className="w-14 h-14 rounded-full border-2 border-jt-gold/50 flex items-center justify-center">
            <span className="font-display text-xl font-bold text-jt-gold">JT</span>
          </div>
        </div>

        <h1 className="font-display text-4xl md:text-5xl font-bold text-jt-text mb-3">
          Alignment Confirmed.
        </h1>
        <p className="font-serif italic text-jt-muted text-base">
          Your piece is being prepared with intention.
        </p>
      </div>

      {/* Middle section — dark marble */}
      <div
        className="flex-1 relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #3D2A18 0%, #2C1A0E 40%, #1B1008 100%)',
          backgroundImage: `
            linear-gradient(135deg, #3D2A18 0%, #2C1A0E 40%, #1B1008 100%),
            url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23C9963A' fill-opacity='0.05'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z'/%3E%3C/g%3E%3C/svg%3E")
          `,
        }}
      >
        {/* Gold glow */}
        <div
          className="absolute inset-0 opacity-10"
          style={{ background: 'radial-gradient(ellipse at 50% 30%, #C9963A 0%, transparent 60%)' }}
        />

        <div className="relative py-16 px-6 max-w-2xl mx-auto text-center">
          {/* Order details */}
          <div className="border-y border-jt-gold/20 py-10 mb-10">
            <p className="font-serif italic text-jt-stone/70 text-lg mb-2">
              Thank you for your order, valued client.
            </p>
            <p className="font-sans text-jt-stone/50 text-sm mb-4">
              A receipt has been sent to your email address.
            </p>
            <div className="inline-block border border-jt-gold/30 bg-jt-gold/5 px-6 py-2">
              <span className="font-display text-jt-gold text-lg font-bold tracking-widest">
                Order #{orderNumber}
              </span>
            </div>
          </div>

          {/* Join the Circle */}
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-jt-cream uppercase leading-tight mb-4">
              Join The <span className="text-jt-gold">Alignment Circle</span>
            </h2>
            <p className="font-sans text-jt-stone/60 text-sm leading-relaxed mb-8 max-w-md mx-auto">
              Connect with aligned leaders worldwide. Gain access to exclusive insights,
              early drops, and future releases before anyone else.
            </p>

            {joined ? (
              <div className="inline-block border border-jt-gold/50 bg-jt-gold/10 px-8 py-4 text-jt-gold font-sans text-sm">
                ✦ Welcome to the Circle.
              </div>
            ) : (
              <button
                onClick={() => setJoined(true)}
                className="inline-flex items-center gap-3 bg-jt-forest border border-jt-gold/30 text-jt-cream font-sans font-semibold uppercase tracking-widest text-xs px-10 py-5 hover:bg-jt-forest-lt hover:border-jt-gold transition-all duration-300"
              >
                Join Now <ArrowRight size={14} />
              </button>
            )}
          </div>
        </div>

        {/* Section divider */}
        <div className="border-t border-jt-gold/15 py-10 text-center">
          <div className="flex items-center justify-center gap-6 max-w-lg mx-auto px-6">
            <div className="h-px flex-1 bg-jt-gold/20" />
            <span className="font-display text-jt-stone/30 text-xs uppercase tracking-widest whitespace-nowrap">
              Jamaican Toni
            </span>
            <div className="h-px flex-1 bg-jt-gold/20" />
          </div>
          <p className="font-serif italic text-jt-stone/30 text-xs mt-4">Powered by Island Love</p>
        </div>

        {/* Footer links */}
        <div className="border-t border-jt-gold/10 py-8 text-center">
          <div className="flex items-center justify-center gap-6 flex-wrap">
            {['Home', 'Collection', 'Journal', 'Contact'].map((item, i) => (
              <span key={item} className="flex items-center gap-6">
                {i > 0 && <span className="text-jt-stone/20 text-xs">|</span>}
                <button
                  onClick={() => onNavigate(item.toLowerCase())}
                  className="text-[10px] font-sans uppercase tracking-widest text-jt-stone/30 hover:text-jt-gold transition-colors"
                >
                  {item}
                </button>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
