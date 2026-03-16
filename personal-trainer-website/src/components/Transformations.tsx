import { useState, useRef, useCallback } from 'react';
import { Instagram, Star } from 'lucide-react';

// Interactive Before/After Slider
function BeforeAfterSlider({
  type,
  result,
  beforeLabel = 'Before',
  afterLabel = 'After',
}: {
  type: string;
  result: string;
  beforeLabel?: string;
  afterLabel?: string;
}) {
  const [sliderPos, setSliderPos] = useState(50);
  const [dragging, setDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updateSlider = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const pos = Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100));
    setSliderPos(pos);
  }, []);

  const onMouseDown = (e: React.MouseEvent) => {
    setDragging(true);
    updateSlider(e.clientX);
  };
  const onMouseMove = (e: React.MouseEvent) => { if (dragging) updateSlider(e.clientX); };
  const onMouseUp = () => setDragging(false);

  const onTouchMove = (e: React.TouchEvent) => {
    updateSlider(e.touches[0].clientX);
  };

  return (
    <div className="bg-brand-gray border border-brand-gray-mid hover:border-brand-gold/30 transition-colors duration-300 group">
      {/* Slider container */}
      <div
        ref={containerRef}
        className="relative h-64 overflow-hidden select-none cursor-col-resize"
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onTouchMove={onTouchMove}
        onTouchStart={(e) => updateSlider(e.touches[0].clientX)}
      >
        {/* Before panel (full width) */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-gray-light to-brand-gray flex items-center justify-center">
          <div className="absolute top-3 left-3 bg-brand-black/80 text-brand-muted text-[10px] uppercase tracking-widest px-2.5 py-1 font-sans z-10">
            {beforeLabel}
          </div>
          <div
            className="w-full h-full flex items-center justify-center"
            style={{
              background: 'linear-gradient(135deg, #2A2A2A 0%, #1A1A1A 50%, #222 100%)',
            }}
          >
            <span className="font-display text-6xl font-bold text-brand-gray-light/20 select-none">B</span>
          </div>
        </div>

        {/* After panel (clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
        >
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              background: 'linear-gradient(135deg, #2A1A00 0%, #1A1200 50%, #231A00 100%)',
            }}
          >
            <div className="absolute top-3 right-3 bg-brand-gold text-brand-black text-[10px] uppercase tracking-widest px-2.5 py-1 font-sans font-bold z-10">
              {afterLabel}
            </div>
            <span className="font-display text-6xl font-bold text-brand-gold/20 select-none">A</span>
          </div>
        </div>

        {/* Slider handle */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-brand-gold z-20 pointer-events-none"
          style={{ left: `${sliderPos}%` }}
        >
          {/* Handle knob */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-brand-gold border-2 border-white shadow-2xl flex items-center justify-center">
            <div className="flex gap-0.5">
              <div className="w-px h-4 bg-brand-black/60" />
              <div className="w-px h-4 bg-brand-black/60" />
            </div>
          </div>
        </div>

        {/* Drag hint */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[9px] text-brand-muted uppercase tracking-widest font-sans opacity-60 pointer-events-none">
          drag to compare
        </div>
      </div>

      {/* Card footer */}
      <div className="p-5">
        <div className="text-[10px] text-brand-gold uppercase tracking-[0.3em] font-sans mb-1">{type}</div>
        <p className="text-brand-text font-sans text-sm leading-relaxed">{result}</p>
      </div>
    </div>
  );
}

const sliders = [
  {
    type: "Women's Transformation",
    result: 'Significant weight loss, improved tone & renewed confidence',
    beforeLabel: 'Before',
    afterLabel: 'After',
  },
  {
    type: "Men's Transformation",
    result: 'Full body recomposition — fat loss & visible muscle definition',
    beforeLabel: 'Before',
    afterLabel: 'After',
  },
  {
    type: 'Long-term Journey',
    result: '3-phase progress showing steady, sustainable results over time',
    beforeLabel: 'Start',
    afterLabel: 'Progress',
  },
];

const testimonials = [
  {
    quote: "Working with D.S.I changed my life completely. I lost over 40 lbs and finally feel comfortable in my own skin. The coaching style is motivating without being overwhelming.",
    name: "Keisha M.",
    result: "Lost 40+ lbs",
    stars: 5,
  },
  {
    quote: "I went from barely being able to run a mile to completing my first 5K. The personalized plan made all the difference — no cookie-cutter workouts here.",
    name: "Marcus T.",
    result: "Completed first 5K",
    stars: 5,
  },
  {
    quote: "As a busy corporate professional, I needed a program that fit my lifestyle. D.S.I crafted the perfect plan and kept me accountable every step of the way.",
    name: "Angela R.",
    result: "Lost 25 lbs in 4 months",
    stars: 5,
  },
];

export default function Transformations() {
  return (
    <section id="transformations" className="py-24 bg-brand-dark relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="text-brand-gold text-xs uppercase tracking-[0.3em] font-sans mb-4">Real Results</p>
          <h2 className="section-heading text-brand-text">
            Client <span className="text-brand-gold">Transformations</span>
          </h2>
          <span className="gold-line mx-auto" />
          <p className="text-brand-muted max-w-xl mx-auto mt-2 font-sans text-sm">
            Drag the sliders to see the before & after. Every result represents a client
            who committed to the process and trusted the program.
          </p>
        </div>

        {/* Interactive Sliders */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 reveal">
          {sliders.map((s) => (
            <BeforeAfterSlider key={s.type} {...s} />
          ))}
        </div>

        {/* Instagram CTA strip */}
        <div className="bg-gradient-to-r from-brand-gray via-brand-gold/5 to-brand-gray border border-brand-gold/20 p-5 flex flex-col sm:flex-row items-center justify-between gap-4 mb-16 reveal">
          <div className="flex items-center gap-3">
            <Instagram size={18} className="text-brand-gold flex-shrink-0" />
            <p className="text-brand-muted font-sans text-sm">
              <span className="text-brand-gold font-semibold">See real transformation photos</span> — follow us on Instagram for the latest client wins.
            </p>
          </div>
          <a
            href="https://www.instagram.com/d.s.i_health.training.llc"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 btn-outline text-xs py-2.5 px-5"
          >
            @d.s.i_health.training.llc
          </a>
        </div>

        {/* Testimonials */}
        <div className="reveal">
          <div className="text-center mb-10">
            <h3 className="font-display text-2xl font-bold uppercase tracking-wider text-brand-text">
              What <span className="text-brand-gold">Clients Say</span>
            </h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="card-dark relative hover:border-brand-gold/30 transition-colors duration-300">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} size={12} className="text-brand-gold fill-brand-gold" />
                  ))}
                </div>
                <p className="text-brand-muted font-sans text-sm leading-relaxed mb-6 italic">
                  "{t.quote}"
                </p>
                <div className="flex items-center justify-between border-t border-brand-gray-mid pt-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center">
                      <span className="font-display text-xs font-bold text-brand-gold">
                        {t.name.charAt(0)}
                      </span>
                    </div>
                    <div className="text-brand-text font-sans font-semibold text-sm">{t.name}</div>
                  </div>
                  <div className="bg-brand-gold/10 border border-brand-gold/30 text-brand-gold text-[10px] uppercase tracking-widest px-2.5 py-1 font-sans">
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
