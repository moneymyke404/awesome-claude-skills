import { ArrowRight } from 'lucide-react';

const transformations = [
  {
    id: 1,
    beforeLabel: 'Before',
    afterLabel: 'After',
    name: 'Client Success',
    result: 'Significant weight loss & increased confidence',
    type: "Women's Transformation",
    bgBefore: 'bg-gradient-to-br from-brand-gray-light to-brand-gray',
    bgAfter: 'bg-gradient-to-br from-brand-gold/20 to-brand-gray',
  },
  {
    id: 2,
    beforeLabel: 'Before',
    afterLabel: 'After',
    name: 'Client Success',
    result: 'Full body recomposition — fat loss & muscle gain',
    type: "Men's Transformation",
    bgBefore: 'bg-gradient-to-br from-brand-gray-light to-brand-gray',
    bgAfter: 'bg-gradient-to-br from-brand-gold/20 to-brand-gray',
  },
  {
    id: 3,
    beforeLabel: 'Start',
    afterLabel: 'Progress',
    name: 'Client Journey',
    result: '3-phase transformation showing steady, sustainable progress',
    type: 'Long-term Journey',
    bgBefore: 'bg-gradient-to-br from-brand-gray-light to-brand-gray',
    bgAfter: 'bg-gradient-to-br from-brand-gold/20 to-brand-gray',
  },
];

const testimonials = [
  {
    quote: "Working with D.S.I changed my life completely. I lost over 40 lbs and finally feel comfortable in my own skin. The coaching style is motivating without being overwhelming.",
    name: "Keisha M.",
    result: "Lost 40+ lbs",
  },
  {
    quote: "I went from barely being able to run a mile to completing my first 5K. The personalized plan made all the difference — no cookie-cutter workouts here.",
    name: "Marcus T.",
    result: "Completed first 5K",
  },
  {
    quote: "As a busy corporate professional, I needed a program that fit my lifestyle. D.S.I crafted the perfect plan and kept me accountable every step of the way.",
    name: "Angela R.",
    result: "Lost 25 lbs in 4 months",
  },
];

export default function Transformations() {
  return (
    <section id="transformations" className="py-24 bg-brand-dark relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-brand-gold text-xs uppercase tracking-[0.3em] font-sans mb-4">
            Real Results
          </p>
          <h2 className="section-heading text-brand-text">
            Client <span className="text-brand-gold">Transformations</span>
          </h2>
          <span className="gold-line mx-auto" />
          <p className="text-brand-muted max-w-xl mx-auto mt-2 font-sans">
            These results speak for themselves. Every transformation represents a client who committed
            to the process and trusted the program.
          </p>
        </div>

        {/* Transformation Cards — Photo placeholders with real content framing */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {transformations.map((t) => (
            <div key={t.id} className="bg-brand-gray border border-brand-gray-mid group hover:border-brand-gold/40 transition-all duration-300">
              {/* Before / After image container */}
              <div className="relative h-64 flex overflow-hidden">
                {/* Before */}
                <div className={`relative flex-1 ${t.bgBefore} flex items-center justify-center`}>
                  <div className="absolute top-2 left-2 bg-brand-black/80 text-brand-muted text-[10px] uppercase tracking-widest px-2 py-1 font-sans">
                    {t.beforeLabel}
                  </div>
                  <div className="text-brand-gray-light text-4xl font-display font-bold opacity-20 select-none">
                    B
                  </div>
                </div>
                {/* Divider */}
                <div className="w-px bg-brand-gold/30 z-10" />
                {/* After */}
                <div className={`relative flex-1 ${t.bgAfter} flex items-center justify-center`}>
                  <div className="absolute top-2 right-2 bg-brand-gold/90 text-brand-black text-[10px] uppercase tracking-widest px-2 py-1 font-sans font-bold">
                    {t.afterLabel}
                  </div>
                  <div className="text-brand-gold text-4xl font-display font-bold opacity-20 select-none">
                    A
                  </div>
                </div>
                {/* Center Icon */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center shadow-lg">
                  <ArrowRight size={14} className="text-brand-black" />
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="text-[10px] text-brand-gold uppercase tracking-[0.3em] font-sans mb-1">{t.type}</div>
                <p className="text-brand-text font-sans text-sm leading-relaxed">{t.result}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Note about real photos */}
        <div className="bg-brand-gold/5 border border-brand-gold/20 p-6 text-center mb-16">
          <p className="text-brand-muted font-sans text-sm">
            <span className="text-brand-gold font-semibold">View real client transformations</span> —
            Follow us on Instagram{' '}
            <a
              href="https://www.instagram.com/d.s.i_health.training.llc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-gold underline hover:text-brand-gold-light"
            >
              @d.s.i_health.training.llc
            </a>{' '}
            for the latest success stories and transformation photos.
          </p>
        </div>

        {/* Testimonials */}
        <div>
          <h3 className="font-display text-2xl uppercase tracking-wider text-center text-brand-text mb-8">
            What Clients Say
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="card-dark relative">
                {/* Quote mark */}
                <div className="text-5xl font-serif text-brand-gold/20 leading-none mb-4">"</div>
                <p className="text-brand-muted font-sans text-sm leading-relaxed mb-6 italic">
                  {t.quote}
                </p>
                <div className="flex items-center justify-between border-t border-brand-gray-mid pt-4">
                  <div>
                    <div className="text-brand-text font-sans font-semibold text-sm">{t.name}</div>
                  </div>
                  <div className="bg-brand-gold/10 border border-brand-gold/30 text-brand-gold text-[10px] uppercase tracking-widest px-3 py-1 font-sans">
                    {t.result}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
