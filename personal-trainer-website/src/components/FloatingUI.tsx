import { useEffect, useState } from 'react';
import { ArrowUp, Calendar } from 'lucide-react';

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setProgress(total > 0 ? (scrolled / total) * 100 : 0);
      setShowTop(scrolled > 400);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 h-0.5 z-[100] bg-brand-gray-mid">
        <div
          className="h-full bg-brand-gold transition-none"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Back to top */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-24 right-5 z-50 w-10 h-10 bg-brand-gray border border-brand-gray-mid text-brand-muted hover:border-brand-gold hover:text-brand-gold transition-all duration-300 flex items-center justify-center shadow-xl"
          aria-label="Back to top"
        >
          <ArrowUp size={16} />
        </button>
      )}
    </>
  );
}

export function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <a
      href="#contact"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 bg-brand-gold text-brand-black font-display font-bold uppercase tracking-widest text-xs px-5 py-3 shadow-2xl hover:bg-brand-gold-light transition-all duration-300 animate-slide-in-right"
    >
      <Calendar size={14} />
      Book Now
    </a>
  );
}
