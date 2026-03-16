import { ChevronDown, Instagram } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-brand-black">
        {/* Abstract gym pattern overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                45deg,
                #C9A84C 0px,
                #C9A84C 1px,
                transparent 1px,
                transparent 60px
              )
            `,
          }}
        />
        {/* Radial gradient center glow */}
        <div className="absolute inset-0 bg-radial-gradient"
          style={{
            background: 'radial-gradient(ellipse at 50% 40%, rgba(201,168,76,0.12) 0%, transparent 70%)'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 border border-brand-gold/40 text-brand-gold text-xs font-sans uppercase tracking-widest px-4 py-2 mb-8">
          <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse-slow" />
          Atlanta, Georgia
        </div>

        {/* Main Heading */}
        <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-bold uppercase tracking-wide leading-none mb-4">
          <span className="text-brand-text">Transform</span>
          <br />
          <span className="text-brand-gold">Your Life</span>
        </h1>

        {/* Sub heading */}
        <div className="flex items-center justify-center gap-4 my-8">
          <div className="h-px w-12 bg-brand-gold/50" />
          <p className="font-display text-lg md:text-xl uppercase tracking-[0.3em] text-brand-muted">
            D.S.I Health Training LLC
          </p>
          <div className="h-px w-12 bg-brand-gold/50" />
        </div>

        {/* Description */}
        <p className="font-sans text-brand-muted max-w-2xl mx-auto text-base md:text-lg leading-relaxed mb-12">
          Expert personal training and corporate wellness solutions in Atlanta, GA.
          Real results, proven methods, lasting change — for individuals and organizations alike.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#contact" className="btn-primary w-full sm:w-auto text-center">
            Start Your Journey
          </a>
          <a href="#services" className="btn-outline w-full sm:w-auto text-center">
            Explore Services
          </a>
        </div>

        {/* Social */}
        <div className="mt-12 flex items-center justify-center gap-3">
          <a
            href="https://www.instagram.com/d.s.i_health.training.llc"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-brand-muted hover:text-brand-gold transition-colors text-xs uppercase tracking-widest"
          >
            <Instagram size={16} />
            @d.s.i_health.training.llc
          </a>
        </div>

        {/* Stats Bar */}
        <div className="mt-16 grid grid-cols-3 gap-4 max-w-2xl mx-auto border border-brand-gray-mid bg-brand-gray/50 backdrop-blur-sm px-6 py-5">
          {[
            { value: '100+', label: 'Clients Transformed' },
            { value: '5+', label: 'Years Experience' },
            { value: '2', label: 'Services Offered' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-3xl font-bold text-brand-gold">{stat.value}</div>
              <div className="text-xs text-brand-muted uppercase tracking-wider mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-brand-muted hover:text-brand-gold transition-colors animate-bounce"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  );
}
