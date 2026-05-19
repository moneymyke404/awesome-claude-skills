import { useEffect, useRef, useState } from 'react';
import { Building2, TrendingUp, Users, Clock, Shield, BarChart3, CheckCircle2 } from 'lucide-react';

// Simple animated counter for ROI stats
function AnimatedStat({ value, suffix, prefix = '', label }: {
  value: number; suffix: string; prefix?: string; label: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        let current = 0;
        const step = value / 60;
        const timer = setInterval(() => {
          current += step;
          if (current >= value) { setCount(value); clearInterval(timer); }
          else setCount(Math.floor(current));
        }, 25);
      }
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-center p-6 bg-brand-gray border border-brand-gray-mid hover:border-brand-gold/30 transition-colors">
      <div className="font-display text-4xl md:text-5xl font-bold text-brand-gold tabular-nums">
        {prefix}{count}{suffix}
      </div>
      <div className="text-xs text-brand-muted uppercase tracking-widest font-sans mt-2 leading-tight">{label}</div>
    </div>
  );
}

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
    desc: 'On-site, virtual, or hybrid — we adapt programs to your workplace, schedule, and team size.',
  },
];

const roiStats = [
  { value: 21, suffix: '%', label: 'Productivity Increase' },
  { value: 27, suffix: '%', label: 'Fewer Sick Days' },
  { value: 6, suffix: 'x', prefix: '$', label: 'ROI Per Dollar Spent' },
  { value: 28, suffix: '%', label: 'Lower Turnover' },
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
        <div className="text-center mb-16 reveal">
          <p className="text-brand-gold text-xs uppercase tracking-[0.3em] font-sans mb-4">For Organizations</p>
          <h2 className="section-heading text-brand-text">
            Corporate <span className="text-brand-gold">Wellness</span>
          </h2>
          <span className="gold-line mx-auto" />
          <p className="text-brand-muted max-w-2xl mx-auto mt-2 font-sans leading-relaxed text-sm">
            A healthy workforce is your greatest competitive advantage. We partner with Atlanta-area businesses
            to design wellness programs that drive real results for employees and your bottom line.
          </p>
        </div>

        {/* ROI Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 reveal">
          {roiStats.map((s) => (
            <AnimatedStat key={s.label} {...s} />
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-20 reveal">
          {benefits.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-brand-gray border border-brand-gray-mid p-6 group hover:border-brand-gold/40 transition-all duration-300"
            >
              <div className="w-10 h-10 bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center mb-4 group-hover:bg-brand-gold/20 transition-colors">
                <Icon size={18} className="text-brand-gold" />
              </div>
              <h3 className="font-display text-base font-bold uppercase tracking-wide text-brand-text mb-2">{title}</h3>
              <p className="text-brand-muted font-sans text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* Packages */}
        <div className="reveal">
          <h3 className="font-display text-3xl font-bold uppercase tracking-wider text-center text-brand-text mb-10">
            Wellness <span className="text-brand-gold">Packages</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {packages.map(({ name, ideal, features, featured }) => (
              <div
                key={name}
                className={`relative border p-8 transition-all duration-300
                  ${featured
                    ? 'bg-brand-gold/5 border-brand-gold shadow-lg shadow-brand-gold/10'
                    : 'bg-brand-gray border-brand-gray-mid hover:border-brand-gold/40'
                  }`}
              >
                {featured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand-gold text-brand-black text-[10px] font-display font-bold uppercase tracking-widest px-4 py-1 whitespace-nowrap">
                    Most Popular
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
                      <CheckCircle2 size={14} className="text-brand-gold flex-shrink-0 mt-0.5" />
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
