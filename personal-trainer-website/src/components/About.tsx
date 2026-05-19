import { Award, Target, Heart, Users, ShieldCheck, Star } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Results-Driven',
    desc: 'Every program is designed around your specific goals, with measurable progress tracked from day one.',
  },
  {
    icon: Heart,
    title: 'Holistic Approach',
    desc: 'Fitness, nutrition, and mindset — we address all three pillars for true, lasting transformation.',
  },
  {
    icon: Users,
    title: 'Community First',
    desc: 'From solo clients to entire organizations, we build cultures of health, accountability, and support.',
  },
  {
    icon: Award,
    title: 'Proven Methods',
    desc: 'Certified protocols backed by science and hundreds of real client success stories across Atlanta.',
  },
];

const credentials = [
  { icon: ShieldCheck, label: 'Certified Personal Trainer' },
  { icon: Award, label: 'Corporate Wellness Specialist' },
  { icon: Star, label: 'Nutrition Coaching Certified' },
  { icon: Heart, label: 'CPR / AED Certified' },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-brand-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent" />

      {/* Background accent */}
      <div
        className="absolute -left-40 top-0 w-96 h-full opacity-5 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at left center, #C9A84C 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left: Trainer Card + Text */}
          <div className="reveal">
            <p className="text-brand-gold text-xs uppercase tracking-[0.3em] font-sans mb-4">Who We Are</p>
            <h2 className="section-heading text-brand-text mb-6">
              About<br />
              <span className="text-brand-gold">D.S.I Health</span>
            </h2>
            <span className="gold-line" />

            {/* Trainer profile card */}
            <div className="flex items-start gap-5 bg-brand-gray border border-brand-gray-mid p-5 mb-8 hover:border-brand-gold/30 transition-colors">
              {/* Avatar placeholder */}
              <div className="w-16 h-16 flex-shrink-0 bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center">
                <span className="font-display text-2xl font-bold text-brand-gold">D</span>
              </div>
              <div>
                <div className="font-display text-base font-bold uppercase tracking-wider text-brand-text mb-0.5">
                  Lead Trainer & Founder
                </div>
                <div className="text-xs text-brand-gold uppercase tracking-widest font-sans mb-3">
                  D.S.I Health Training LLC
                </div>
                {/* Credentials */}
                <div className="grid grid-cols-2 gap-2">
                  {credentials.map(({ icon: Icon, label }) => (
                    <div key={label} className="flex items-center gap-1.5 text-[11px] text-brand-muted font-sans">
                      <Icon size={11} className="text-brand-gold flex-shrink-0" />
                      {label}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-4 text-brand-muted font-sans leading-relaxed text-sm">
              <p>
                D.S.I Health Training LLC is Atlanta's premier personal training and corporate wellness company,
                built on the belief that every person deserves expert-level fitness coaching — regardless of
                their current fitness level.
              </p>
              <p>
                Our certified trainers bring hands-on experience helping clients achieve remarkable physical
                transformations: from dramatic weight loss to muscle gain, athletic performance to complete
                lifestyle overhauls. The before-and-after results speak for themselves.
              </p>
              <p>
                Beyond individual training, we partner with Atlanta-area businesses to implement comprehensive
                corporate wellness programs that reduce healthcare costs, boost employee productivity,
                and create thriving workplace cultures.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#services" className="btn-primary">Our Services</a>
              <a href="#contact" className="btn-outline">Get in Touch</a>
            </div>
          </div>

          {/* Right: Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 reveal">
            {values.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                className="card-dark group hover:border-brand-gold/50 transition-all duration-300 cursor-default"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="w-11 h-11 bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center mb-4 group-hover:bg-brand-gold/20 group-hover:border-brand-gold/60 transition-all duration-300">
                  <Icon size={18} className="text-brand-gold" />
                </div>
                <h3 className="font-display text-base font-bold text-brand-text uppercase tracking-wide mb-2">
                  {title}
                </h3>
                <p className="text-brand-muted text-sm leading-relaxed">{desc}</p>
              </div>
            ))}

            {/* Highlight box */}
            <div className="sm:col-span-2 bg-brand-gold/5 border border-brand-gold/30 p-5 flex items-center gap-4">
              <div className="w-12 h-12 bg-brand-gold flex items-center justify-center flex-shrink-0">
                <Star size={18} className="text-brand-black" />
              </div>
              <div>
                <div className="font-display text-sm font-bold uppercase tracking-wider text-brand-gold mb-1">
                  Serving Atlanta & Surrounding Areas
                </div>
                <div className="text-xs text-brand-muted font-sans">
                  In-person training, virtual sessions, and on-site corporate programs available.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
