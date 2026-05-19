import { ChevronDown, Instagram, Dumbbell, Heart } from 'lucide-react';

const stats = [
  { value: 100, suffix: '+', label: 'Clients Transformed' },
  { value: 5, suffix: '+', label: 'Years Experience' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
];

function StatCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  return (
    <div className="text-center group">
      <div className="font-display text-3xl md:text-4xl font-bold text-brand-gold tabular-nums">
        {value}{suffix}
      </div>
      <div className="text-[10px] md:text-xs text-brand-muted uppercase tracking-wider mt-1 font-sans leading-tight">
        {label}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-brand-black">
        {/* Diagonal grid */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `
              repeating-linear-gradient(45deg, #C9A84C 0px, #C9A84C 1px, transparent 1px, transparent 50px),
              repeating-linear-gradient(-45deg, #C9A84C 0px, #C9A84C 1px, transparent 1px, transparent 50px)
            `,
          }}
        />
        {/* Center glow */}
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse at 50% 45%, rgba(201,168,76,0.14) 0%, transparent 65%)' }}
        />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-brand-black to-transparent" />
      </div>

      {/* Floating decorative icons */}
      <div className="absolute top-1/4 left-8 md:left-16 text-brand-gold/10 animate-float-slow hidden md:block">
        <Dumbbell size={80} />
      </div>
      <div className="absolute bottom-1/3 right-8 md:right-16 text-brand-gold/10 animate-float-reverse hidden md:block">
        <Heart size={60} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Location badge */}
        <div className="inline-flex items-center gap-2.5 border border-brand-gold/40 bg-brand-gold/5 text-brand-gold text-[11px] font-sans uppercase tracking-[0.25em] px-4 py-2 mb-8 animate-fade-in">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
          Atlanta, Georgia
        </div>

        {/* Main heading with stagger */}
        <div className="animate-hero-title">
          <h1 className="font-display uppercase leading-none tracking-tight">
            <span className="block text-5xl sm:text-7xl md:text-8xl font-bold text-brand-text">
              Transform
            </span>
            <span
              className="block text-5xl sm:text-7xl md:text-8xl font-bold text-brand-gold mt-1"
              style={{ WebkitTextStroke: '0px', textShadow: '0 0 60px rgba(201,168,76,0.3)' }}
            >
              Your Life
            </span>
          </h1>
        </div>

        {/* Brand name divider */}
        <div className="flex items-center justify-center gap-5 my-8 animate-fade-in-delay-1">
          <div className="h-px flex-1 max-w-[80px] bg-gradient-to-r from-transparent to-brand-gold/50" />
          <p className="font-display text-sm md:text-base uppercase tracking-[0.35em] text-brand-muted whitespace-nowrap">
            D.S.I Health Training LLC
          </p>
          <div className="h-px flex-1 max-w-[80px] bg-gradient-to-l from-transparent to-brand-gold/50" />
        </div>

        {/* Description */}
        <p className="font-sans text-brand-muted max-w-xl mx-auto text-base md:text-lg leading-relaxed mb-10 animate-fade-in-delay-1">
          Expert personal training and corporate wellness solutions in Atlanta, GA.
          Real results, proven methods, lasting change.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10 animate-fade-in-delay-2">
          <a
            href="#contact"
            className="btn-primary w-full sm:w-auto text-center group relative overflow-hidden"
          >
            <span className="relative z-10">Start Your Journey</span>
            <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>
          <a href="#services" className="btn-outline w-full sm:w-auto text-center">
            Explore Services
          </a>
        </div>

        {/* Social link */}
        <div className="flex items-center justify-center gap-3 mb-14 animate-fade-in-delay-2">
          <a
            href="https://www.instagram.com/d.s.i_health.training.llc"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-brand-muted hover:text-brand-gold transition-colors text-xs uppercase tracking-widest group"
          >
            <Instagram size={14} className="group-hover:scale-110 transition-transform" />
            @d.s.i_health.training.llc
          </a>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-3 max-w-2xl mx-auto border border-brand-gray-mid divide-x divide-brand-gray-mid bg-brand-gray/40 backdrop-blur-sm animate-fade-in-delay-3">
          {stats.map((s) => (
            <div key={s.label} className="px-4 py-5 hover:bg-brand-gold/5 transition-colors">
              <StatCounter {...s} />
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-brand-muted hover:text-brand-gold transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={26} />
      </a>
    </section>
  );
}
