import { Building2, TrendingUp, Users, Clock, Shield, BarChart3 } from 'lucide-react';

const benefits = [
  {
    icon: TrendingUp,
    title: 'Boost Productivity',
    desc: 'Employees who exercise regularly are 21% more productive. Our programs help your team perform at their peak.',
  },
  {
    icon: Shield,
    title: 'Reduce Healthcare Costs',
    desc: 'Preventive wellness programs can save companies $3–$6 for every $1 invested through reduced medical claims.',
  },
  {
    icon: Users,
    title: 'Improve Retention',
    desc: 'Companies with strong wellness programs report 28% lower turnover and higher employee satisfaction scores.',
  },
  {
    icon: Clock,
    title: 'Reduce Absenteeism',
    desc: 'Regular fitness and wellness programs can reduce sick days by up to 27%, saving your organization thousands.',
  },
  {
    icon: BarChart3,
    title: 'Measurable ROI',
    desc: 'We provide detailed reporting on participation, biometric improvements, and program effectiveness.',
  },
  {
    icon: Building2,
    title: 'Flexible Delivery',
    desc: 'On-site, virtual, or hybrid — we adapt our programs to your workplace, schedule, and team size.',
  },
];

const packages = [
  {
    name: 'Starter',
    ideal: 'Small teams (10–25 employees)',
    features: [
      '2 group fitness sessions/week',
      'Monthly wellness workshop',
      'Digital resource library',
      'Basic health assessments',
      'Monthly progress reports',
    ],
  },
  {
    name: 'Professional',
    ideal: 'Mid-size companies (25–100 employees)',
    features: [
      '4 group fitness sessions/week',
      'Bi-weekly workshops',
      'Nutrition coaching modules',
      'Biometric screenings',
      'Stress management sessions',
      'Quarterly executive briefings',
    ],
    featured: true,
  },
  {
    name: 'Enterprise',
    ideal: 'Large organizations (100+ employees)',
    features: [
      'Unlimited group fitness access',
      'Weekly workshops & seminars',
      'One-on-one coaching options',
      'Annual health fair coordination',
      'Custom wellness challenges',
      'Dedicated wellness coordinator',
      'Full analytics dashboard',
    ],
  },
];

export default function Corporate() {
  return (
    <section id="corporate" className="py-24 bg-brand-black relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-brand-gold text-xs uppercase tracking-[0.3em] font-sans mb-4">
            For Organizations
          </p>
          <h2 className="section-heading text-brand-text">
            Corporate <span className="text-brand-gold">Wellness</span>
          </h2>
          <span className="gold-line mx-auto" />
          <p className="text-brand-muted max-w-2xl mx-auto mt-2 font-sans leading-relaxed">
            A healthy workforce is your greatest competitive advantage. We partner with Atlanta-area businesses
            to design wellness programs that drive real results for your employees and your bottom line.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {benefits.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-brand-gray border border-brand-gray-mid p-6 group hover:border-brand-gold/40 transition-all duration-300">
              <Icon size={20} className="text-brand-gold mb-3" />
              <h3 className="font-display text-base font-bold uppercase tracking-wide text-brand-text mb-2">{title}</h3>
              <p className="text-brand-muted font-sans text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* Packages */}
        <div>
          <h3 className="font-display text-3xl font-bold uppercase tracking-wider text-center text-brand-text mb-10">
            Wellness <span className="text-brand-gold">Packages</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {packages.map(({ name, ideal, features, featured }) => (
              <div
                key={name}
                className={`relative border p-8 transition-all duration-300
                  ${featured
                    ? 'bg-brand-gold/5 border-brand-gold'
                    : 'bg-brand-gray border-brand-gray-mid hover:border-brand-gold/40'
                  }`}
              >
                {featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-gold text-brand-black text-[10px] font-display font-bold uppercase tracking-widest px-4 py-1">
                    Recommended
                  </div>
                )}

                <div className="font-display text-2xl font-bold text-brand-gold uppercase tracking-wider mb-1">
                  {name}
                </div>
                <div className="text-xs text-brand-muted font-sans uppercase tracking-wider mb-6 pb-6 border-b border-brand-gray-mid">
                  {ideal}
                </div>

                <ul className="space-y-3 mb-8">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-brand-muted font-sans">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-1.5 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`block text-center text-xs font-display font-bold uppercase tracking-widest px-6 py-3 transition-all duration-300
                    ${featured
                      ? 'bg-brand-gold text-brand-black hover:bg-brand-gold-light'
                      : 'border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-black'
                    }`}
                >
                  Request Quote
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
