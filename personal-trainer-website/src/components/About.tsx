import { Award, Target, Heart, Users } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Results-Driven',
    desc: 'Every program is designed around your specific goals, ensuring measurable progress from day one.',
  },
  {
    icon: Heart,
    title: 'Holistic Approach',
    desc: 'We combine fitness, nutrition guidance, and mental wellness for true, lasting transformation.',
  },
  {
    icon: Users,
    title: 'Community Focus',
    desc: 'From individual clients to entire organizations, we build cultures of health and accountability.',
  },
  {
    icon: Award,
    title: 'Proven Methods',
    desc: 'Certified training protocols backed by real client success stories across Atlanta and beyond.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <p className="text-brand-gold text-xs uppercase tracking-[0.3em] font-sans mb-4">
              Who We Are
            </p>
            <h2 className="section-heading text-brand-text mb-6">
              About<br />
              <span className="text-brand-gold">D.S.I Health</span>
            </h2>
            <span className="gold-line" />

            <div className="space-y-5 text-brand-muted font-sans leading-relaxed">
              <p>
                D.S.I Health Training LLC is Atlanta's premier personal training and corporate wellness company,
                founded on the belief that everyone deserves access to expert-level fitness coaching.
              </p>
              <p>
                Our certified trainers bring years of hands-on experience helping clients achieve remarkable
                physical transformations — from weight loss to muscle gain, athletic performance to lifestyle overhauls.
              </p>
              <p>
                Beyond individual training, we partner with businesses across Atlanta to design and implement
                comprehensive corporate wellness programs that reduce healthcare costs, boost employee productivity,
                and create thriving workplace cultures.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#services" className="btn-primary">Our Services</a>
              <a href="#contact" className="btn-outline">Get in Touch</a>
            </div>
          </div>

          {/* Right: Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="card-dark group hover:border-brand-gold/50 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-sm bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center mb-4 group-hover:bg-brand-gold/20 transition-colors">
                  <Icon size={18} className="text-brand-gold" />
                </div>
                <h3 className="font-display text-lg font-semibold text-brand-text uppercase tracking-wide mb-2">
                  {title}
                </h3>
                <p className="text-brand-muted text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
