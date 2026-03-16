import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: 'Do I need prior fitness experience to start?',
    a: "Absolutely not! We work with all fitness levels — from complete beginners to competitive athletes. Every program is designed around your current level and progresses at a pace that's right for you.",
  },
  {
    q: 'Where do training sessions take place?',
    a: 'Sessions can take place at a gym of your choice, your home, outdoors, or virtually. We work around your schedule and preferred environment to make training as convenient as possible.',
  },
  {
    q: 'How quickly will I see results?',
    a: 'Most clients notice improvements in energy, strength, and confidence within the first 2–4 weeks. Visible body composition changes typically begin showing around 4–8 weeks with consistent effort and proper nutrition.',
  },
  {
    q: 'What is included in the corporate wellness packages?',
    a: 'Packages are fully customizable but generally include group fitness sessions, wellness workshops, nutrition guidance, health screenings, and progress reporting. We build the program around your company\'s size, budget, and goals.',
  },
  {
    q: 'How do I get started?',
    a: "Simply fill out the contact form or reach out on Instagram. We'll schedule a free consultation to discuss your goals, assess your current fitness level, and recommend the best program for you.",
  },
  {
    q: 'Do you offer virtual training options?',
    a: 'Yes! We offer fully remote virtual training sessions via video call. You get the same personalized coaching and accountability from anywhere in the world.',
  },
  {
    q: 'What makes D.S.I different from other personal trainers?',
    a: "We combine deep personal training expertise with a genuine commitment to your long-term lifestyle change. We don't believe in quick fixes — we build sustainable habits, hold you accountable, and celebrate every milestone with you.",
  },
];

function FAQItem({ q, a, defaultOpen = false }: { q: string; a: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className={`border-b border-brand-gray-mid transition-colors ${open ? 'border-brand-gold/30' : ''}`}>
      <button
        className="w-full flex items-start justify-between gap-4 py-5 text-left group"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className={`font-sans text-sm font-medium leading-snug transition-colors ${
          open ? 'text-brand-gold' : 'text-brand-text group-hover:text-brand-gold'
        }`}>
          {q}
        </span>
        <span className={`flex-shrink-0 w-6 h-6 border flex items-center justify-center transition-all duration-300 mt-0.5 ${
          open
            ? 'border-brand-gold bg-brand-gold text-brand-black'
            : 'border-brand-gray-mid text-brand-muted group-hover:border-brand-gold group-hover:text-brand-gold'
        }`}>
          {open ? <Minus size={12} /> : <Plus size={12} />}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? 'max-h-48 pb-5' : 'max-h-0'
        }`}
      >
        <p className="text-brand-muted font-sans text-sm leading-relaxed pr-10">{a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-brand-black relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <p className="text-brand-gold text-xs uppercase tracking-[0.3em] font-sans mb-4">Got Questions?</p>
          <h2 className="section-heading text-brand-text">
            Frequently <span className="text-brand-gold">Asked</span>
          </h2>
          <span className="gold-line mx-auto" />
          <p className="text-brand-muted max-w-xl mx-auto mt-2 font-sans text-sm">
            Everything you need to know before getting started. Can't find your answer?
            Reach out directly — we're happy to help.
          </p>
        </div>

        {/* FAQ List */}
        <div className="reveal">
          <div className="border-t border-brand-gray-mid">
            {faqs.map((faq, i) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} defaultOpen={i === 0} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center reveal">
          <p className="text-brand-muted font-sans text-sm mb-4">
            Still have questions? We'd love to talk.
          </p>
          <a href="#contact" className="btn-primary">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
