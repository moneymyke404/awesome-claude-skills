import { Dumbbell, Building2, Apple, TrendingUp, CheckCircle2 } from 'lucide-react';

const services = [
  {
    icon: Dumbbell,
    tag: 'Personal Training',
    title: 'One-on-One Training',
    desc: 'Fully personalized workout programs designed around your goals, fitness level, and schedule. Train at your home, a local gym, or outdoors.',
    features: [
      'Customized workout plans',
      'Form correction & technique coaching',
      'Progressive overload programming',
      'Flexible scheduling',
      'Monthly progress assessments',
    ],
  },
  {
    icon: TrendingUp,
    tag: 'Group Fitness',
    title: 'Small Group Training',
    desc: 'Experience the energy of group workouts with the attention of personal coaching. Bring a friend or join an existing group.',
    features: [
      'Groups of 2–6 people',
      'Same personalized attention',
      'Accountability & community',
      'Cost-effective option',
      'Partner & duo sessions available',
    ],
  },
  {
    icon: Apple,
    tag: 'Nutrition',
    title: 'Nutrition Coaching',
    desc: 'Fuel your transformation with personalized nutrition guidance. No extreme diets — just practical, sustainable eating habits that complement your training.',
    features: [
      'Macro & calorie planning',
      'Meal prep strategies',
      'Supplement guidance',
      'Weekly check-ins',
      'Lifestyle-based approach',
    ],
  },
  {
    icon: Building2,
    tag: 'Corporate Wellness',
    title: 'Corporate Wellness Programs',
    desc: 'Elevate your workforce with tailored wellness programs that improve employee health, reduce absenteeism, and boost company culture.',
    features: [
      'On-site fitness sessions',
      'Wellness workshops & seminars',
      'Stress management programs',
      'Health screenings & assessments',
      'Custom team challenges',
    ],
    featured: true,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-brand-black relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-brand-gold text-xs uppercase tracking-[0.3em] font-sans mb-4">
            What We Offer
          </p>
          <h2 className="section-heading text-brand-text">
            Our <span className="text-brand-gold">Services</span>
          </h2>
          <span className="gold-line mx-auto" />
          <p className="text-brand-muted max-w-xl mx-auto mt-2 font-sans leading-relaxed">
            From one-on-one personal training to full corporate wellness packages —
            we have the program to match your goals.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map(({ icon: Icon, tag, title, desc, features, featured }) => (
            <div
              key={title}
              className={`relative border p-8 transition-all duration-300 group
                ${featured
                  ? 'bg-brand-gold/5 border-brand-gold hover:bg-brand-gold/10'
                  : 'bg-brand-gray border-brand-gray-mid hover:border-brand-gold/50'
                }`}
            >
              {featured && (
                <div className="absolute top-4 right-4 bg-brand-gold text-brand-black text-[10px] font-display font-bold uppercase tracking-widest px-3 py-1">
                  Most Popular
                </div>
              )}

              <div className="flex items-start gap-4 mb-6">
                <div className={`w-12 h-12 flex items-center justify-center flex-shrink-0
                  ${featured ? 'bg-brand-gold text-brand-black' : 'bg-brand-gold/10 border border-brand-gold/30 text-brand-gold'}`}
                >
                  <Icon size={20} />
                </div>
                <div>
                  <div className="text-[10px] text-brand-gold uppercase tracking-[0.3em] font-sans mb-1">{tag}</div>
                  <h3 className="font-display text-xl font-bold uppercase tracking-wide text-brand-text">
                    {title}
                  </h3>
                </div>
              </div>

              <p className="text-brand-muted font-sans text-sm leading-relaxed mb-6">{desc}</p>

              <ul className="space-y-2 mb-8">
                {features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-brand-muted font-sans">
                    <CheckCircle2 size={14} className="text-brand-gold flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`inline-block text-xs font-display font-bold uppercase tracking-widest px-6 py-3 transition-all duration-300
                  ${featured
                    ? 'bg-brand-gold text-brand-black hover:bg-brand-gold-light'
                    : 'border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-black'
                  }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
